<script setup lang="ts">
import type { DockApp, DockListeners } from '@/lib/types';
import gsap from 'gsap';

import { onMounted, onUnmounted, ref, useTemplateRef } from 'vue';

import { DOCK_APPS, FINDER_LOCATIONS } from '@/lib/constants';
import { useWindowStore } from '@/stores';
import { useLocationStore } from '@/stores/location-store.ts';

const windowStore = useWindowStore();
const locationStore = useLocationStore();
const dockElement = useTemplateRef('dock');
const iconElements = useTemplateRef('dock-icon');

const gsapBaseOpts = {
	scale: 1,
	y: 0,
	duration: 0.3,
	ease: 'power1.out',
};

const listeners = ref<DockListeners>([]);

function init() {
	if (!dockElement.value || !iconElements.value?.length) {
		return null;
	}
	const animateIcons = (mouseX: number) => {
		const { left } = dockElement.value?.getBoundingClientRect() || { left: 0 };

		iconElements.value?.forEach((el) => {
			const { left: iLeft, width } = el?.getBoundingClientRect() || { left: 0, width: 0 };
			const center = iLeft - left + width / 2;
			const distance = Math.abs(mouseX - center);
			const intensity = Math.exp(-(distance ** 2.5) / 10000);
			const opts = el.hasAttribute('disabled')
				? gsapBaseOpts
				: {
						scale: 1 + 0.25 * intensity,
						y: -15 * intensity,
						duration: 0.2,
						ease: 'power1.out',
					};
			gsap.to(el, opts);
		});
	};

	const handleMouseMove = (e: MouseEvent) => {
		const { left } = dockElement.value?.getBoundingClientRect() || { left: 0 };
		animateIcons(e.clientX - left);
	};

	const resetIcons = () => {
		iconElements.value?.forEach(el => gsap.to(el, gsapBaseOpts));
	};

	dockElement.value.addEventListener('mousemove', handleMouseMove);
	listeners.value.push([dockElement.value, 'mousemove', handleMouseMove]);
	dockElement.value.addEventListener('mouseleave', resetIcons);
	listeners.value.push([dockElement.value, 'mouseleave', resetIcons]);
}

onMounted(init);
onUnmounted(() => {
	listeners.value.forEach(([el, listener, callback]) => {
		if (el && listener && callback) {
			el.removeEventListener(listener, callback);
		}
	});
});

function openApp(app: DockApp) {
	if (!app || !app.canOpen) {
		return null;
	}
	if (app.id === 'trash') {
		locationStore.setLocation(FINDER_LOCATIONS.trash);
		return windowStore.openWindow('finder');
	}
	return windowStore.openWindow(app.id);
}
</script>

<template>
	<section id="dock">
		<div ref="dock" class="dock-container">
			<div
				v-for="opt in DOCK_APPS"
				:key="opt.id"
				class="relative flex justify-center"
			>
				<button
					ref="dock-icon"
					v-tooltip="opt.label"
					class="dock-icon"
					:disabled="!opt.canOpen"
					@click="openApp(opt)"
				>
					<img
						:src="opt.imgSrc"
						:alt="opt.label"
						loading="lazy"
						:class="{ 'opacity-60': !opt.canOpen, 'cursor-default': !opt.canOpen }"
					>
				</button>
			</div>
		</div>
	</section>
</template>

<style scoped>
#dock {
	@apply absolute bottom-5 left-1/2 -translate-x-1/2 z-9999 select-none max-sm:hidden;

	.dock-container {
		@apply bg-white/20 backdrop-blur-md justify-between rounded-2xl p-1.5 flex items-end gap-1.5;
	}

	.dock-icon {
		@apply size-14 3xl:size-20 cursor-pointer;

		img {
			@apply object-cover object-center;
		}
	}
}
</style>
