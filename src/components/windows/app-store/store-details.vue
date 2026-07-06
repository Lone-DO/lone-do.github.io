<!-- suppress CssUnresolvedCustomProperty -->
<script lang='ts' setup>
import type { Project } from '@/lib/types';

import { computed, ref } from 'vue';

import { AppStoreIcon } from '@/components';

const $props = defineProps<{
	project: Project;
}>();

function getRandomNumber(max: number, charLen: number, min?: number): number {
	let res = Math.random() * max;
	if (min !== undefined && res < min) {
		res = min;
	}
	if (!charLen) {
		return Math.floor(res) as number;
	}
	return res.toFixed(charLen) as unknown as number;
}

const randomRatingsTotal = ref(getRandomNumber(1000, 0, 1));
const randomRatingScore = ref(getRandomNumber(5, 1, 3));
const starCount = computed(() => {
	const num = (randomRatingScore.value.toString().split('.')[0]) as unknown as number;
	const arr = [];
	for (let i = 0; i < num; i++) {
		arr.push(i);
	}
	return arr;
});

const fields = computed(() => {
	return [
		['Seller:', 'Shawn Losovoj'],
		['Start Date:', $props.project.startDate],
		['End Date:', $props.project.endDate],
		['Tags:', $props.project.tools.join(', ')],
	];
});

const navigate = (url: string) => url && window.open(url, '_blank');
</script>

<template>
	<section id="app-store-details">
		<header id="app-store-details_header">
			<img
				id="app-store-details_header-background"
				:class="{ 'blur-sm invert': !project.bannerSrc, 'blur-3xl': project.bannerSrc }"
				:src="$props.project.bannerSrc || 'images/projects/fallback.webp'"
				alt=" "
			>
			<div id="app-store-details_header-content">
				<AppStoreIcon :src="project.imgSrc" class="sm:w-32 sm:h-32" />
				<p id="app-store-details_header-info" class="flex flex-col mb-2">
					<span class="font-bold text-nowrap text-ellipsis text-2xl">{{ project.name }}</span>
					<span
						class="text-ellipsis max-w-60 text-nowrap overflow-hidden text-neutral-900 text-sm"
						:title="project.description"
					>{{ project.description }}</span>
					<i class="text-sm">Free · No Micro-Transactions</i>
				</p>
				<div id="app-store-details_header-controller">
					<button
						v-for="[name = '', link = ''] in project.links"
						:key="name + link"
						:title="link"
						class="rounded-3xl bg-blue-200! px-4 py-1 cursor-pointer flex gap-2 h-fit"
						@click="navigate(link)"
					>
						<img
							class="fill-red-900"
							src="/images/icons/share.svg"
							alt=" "
							loading="lazy"
						>
						<span class="text-sm font-medium text-blue-900! sm:text-nowrap">{{ name }}</span>
					</button>
				</div>
			</div>
		</header>
		<div id="app-store-details_body">
			<div id="app-store-details_body-top">
				<div id="app-store-details_ratings">
					<span>{{ randomRatingsTotal }} RATINGS</span>
					<span>{{ randomRatingScore }}</span>
					<ol id="app-store-details_stars" :aria-label="`${randomRatingScore} Stars`">
						<li
							v-for="index in starCount"
							:key="index"
							class="app-store-details_star w-2"
						>
							<img
								src="/images/icons/star.svg"
								alt=" "
								loading="lazy"
							>
						</li>
					</ol>
				</div>
				<div id="app-store-details_age">
					<span>AGES</span>
					<span>1+</span>
					<span>YEARS</span>
				</div>
				<div>
					<span>CATEGORY</span>
					<div>
						<img
							class="w-6"
							src="/images/icons/hammer.png"
							alt=" "
							loading="lazy"
						>
					</div>
					<span>Develop</span>
				</div>
			</div>
			<div id="app-store-details_body-middle" class="sm:max-w-2xl">
				<p>{{ project.description }}</p>
			</div>
			<div id="app-store-details_body-bottom">
				<h3 class="font-bold text-lg">
					Information
				</h3>
				<fieldset v-for="[label, value] in fields" :key="label">
					<label>{{ label }}</label>
					<span>{{ value || '-' }}</span>
				</fieldset>
			</div>
		</div>
	</section>
</template>

<style scoped>
#app-store-details_header {
	@apply min-h-50 min-w-full max-w-full sm:min-w-lg py-4 relative flex items-center overflow-hidden;
}

#app-store-details_header-background {
	@apply w-full absolute h-full select-none;
}

#app-store-details_header-content {
	@apply relative w-full mx-4 flex flex-wrap items-center gap-x-4;
}

#app-store-details_header-controller {
	@apply flex gap-2 w-full justify-start pl-10 sm:pl-32 flex-wrap;
}

#app-store-details_body {
	& > * {
		@apply p-4;
	}
}

#app-store-details_body-top {
	@apply flex items-start gap-8 font-bold text-neutral-500 text-xs;

	& > div {
		@apply flex flex-col gap-2 items-center justify-center;

		& > *:nth-child(1) {
			@apply min-h-4;
		}

		& > *:nth-child(2) {
			@apply text-2xl text-black h-8 flex items-center gap-2;
		}
	}

	#app-store-details_stars {
		@apply flex gap-2;
	}
}

#app-store-details_body-bottom {
	@apply flex flex-col gap-4 text-xs;

	fieldset {
		@apply flex flex-col gap-2;

		label {
			@apply font-bold text-neutral-500;
		}
	}
}
</style>
