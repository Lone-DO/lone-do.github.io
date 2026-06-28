<script lang='ts' setup>
import gsap from 'gsap';
import { onMounted, useTemplateRef } from 'vue';

import { AppTextUnpacker } from '@/components';
import { FONT_WEIGHTS } from '@/lib/constants';

const titleRef = useTemplateRef('title');
const subTitleRef = useTemplateRef('subtitle');

function setupTextHover(container: HTMLElement | null, type: 'title' | 'subtitle') {
	if (container) {
		const children = Array.from(container.children);
		const letters = type === 'title' ? children : ([Array.from(children[0]?.children || []), Array.from(children[1]?.children || [])]).flat();
		const { min, max, default: baseWeight } = FONT_WEIGHTS[type];

		const animateLetter = (letter: Element, weight: number, duration = 0.25) => {
			return gsap.to(letter, {
				duration,
				ease: 'power2.out',
				fontWeight: weight,
			});
		};

		const handleMouseMove = (event: MouseEvent) => {
			const { left } = container.getBoundingClientRect();
			const mouseX = event.clientX - left;
			letters.forEach((letter) => {
				const { left: l, width: w } = letter.getBoundingClientRect();
				const distance = Math.abs(mouseX - (l - left + w / 2));
				const intensity = Math.exp(-(distance ** 2) / 2000);
				animateLetter(letter, min + (max - min) * intensity);
			});
		};
		const handleMouseLeave = () => {
			letters.forEach(letter => animateLetter(letter, baseWeight, 0.3));
		};
		container.addEventListener('mousemove', handleMouseMove);
		container.addEventListener('mouseleave', handleMouseLeave);
		return () => {
			container.removeEventListener('mousemove', handleMouseMove);
			container.removeEventListener('mouseleave', handleMouseLeave);
		};
	}
}

onMounted(() => {
	const titleCleanup = setupTextHover(titleRef.value, 'title');
	const subtitleCleanup = setupTextHover(subTitleRef.value, 'subtitle');

	return () => {
		titleCleanup?.();
		subtitleCleanup?.();
	};
});
</script>

<template>
	<section id="welcome" class="w-full">
		<p
			id="welcome_subtitle"
			ref="subtitle"
			class="text-2xl flex flex-wrap flex-col xs:flex-row"
		>
			<span>
				<AppTextUnpacker
					text="Hey, I'm Shawn! "
					:base-weight="FONT_WEIGHTS.subtitle.default"
				/>
			</span>
			<span>
				<AppTextUnpacker
					text="Welcome to my"
					:base-weight="FONT_WEIGHTS.subtitle.default"
				/>
			</span>
		</p>
		<h1 ref="title" class="sm:text-9xl text-3xl xs:text-7xl">
			<AppTextUnpacker
				:base-weight="FONT_WEIGHTS.title.default"
				text="portfolio"
				class-name="italic"
			/>
		</h1>
		<p class="small-screen">
			This Portfolio is designed for desktop/tablet screens only.
		</p>
	</section>
</template>

<style>
#welcome {
	@apply text-gray-200 flex flex-col justify-center items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none max-sm:h-full max-sm:w-full max-sm:px-10;

	.small-screen {
		@apply sm:hidden m-7 bg-red-300/20 backdrop-blur-lg p-3 rounded-md absolute top-10 font-roboto gap-4;
	}
}
</style>
