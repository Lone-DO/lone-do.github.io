<script lang='ts' setup>
import type { WINDOW_CONFIG } from '@/lib/constants';

import { computed, useSlots } from 'vue';

import WindowController from '@/components/windows/window-controller.vue';
import { useWindowStore } from '@/stores';

const $props = defineProps<{
	title: string;
	windowKey?: (keyof (typeof WINDOW_CONFIG));
	showBackArrow?: boolean;
}>();

defineEmits(['onBack']);

const windowStore = useWindowStore();
const $slots = useSlots();
const targetWindow = computed(() => $props.windowKey ? windowStore.windows[$props.windowKey] : null);

const hideMenu = computed(() => !$slots.menu);
</script>

<template>
	<section
		v-if="targetWindow?.isOpen"
		v-draggable="{ onPressInit: () => windowStore.focusWindow($props.windowKey), enabled: targetWindow?.isOpen }"
		class="window absolute sm:min-w-100 sm:min-h-25 sm:max-w-full sm:max-h-full max-sm:w-full max-sm:h-full shadow-2xl drop-shadow-2xl"
		:style="{ zIndex: `${targetWindow.zIndex}` }"
		@mousedown="windowStore.focusWindow(windowKey)"
	>
		<aside v-if="!hideMenu" class="window_menu">
			<WindowController
				class="p-4"
				@close="windowStore.closeWindow(windowKey)"
			/>
			<slot name="menu" />
		</aside>
		<div class="window_body">
			<header class="window_header">
				<WindowController
					v-if="hideMenu"
					@close="windowStore.closeWindow(windowKey)"
				/>
				<button
					v-if="showBackArrow"
					v-tooltip="'Navigate Back'"
					class="cursor-pointer text-2xl"
					@click="$emit('onBack')"
				>
					&lt;
				</button>
				<h3 class="window_title">
					{{ title }}
				</h3>
				<slot name="controller" />
			</header>
			<div class="window_content">
				<slot />
			</div>
		</div>
	</section>
</template>

<style scoped>
.window {
	@apply max-w-full absolute sm:top-1/10 left-0 sm:left-[10%] md:left-[20%] lg:left-[30%] bg-white shadow-2xl drop-shadow-2xl rounded-xl overflow-hidden flex;

	.window_body {
		@apply flex flex-1 flex-col overflow-hidden;
	}

	.window_content {
		@apply overflow-y-auto overflow-x-hidden flex-1 overflow-hidden;
	}

	.window_menu {
		@apply flex flex-col gap-4 border-r-2 border-gray-200 shrink-0;
	}

	.window_header {
		@apply px-4 py-3 text-sm flex items-center rounded-t-lg bg-gray-50 border-b border-gray-200 select-none text-gray-400;
	}

	.window_title {
		@apply flex-1 text-center text-neutral-400 font-bold;
	}
}
</style>
