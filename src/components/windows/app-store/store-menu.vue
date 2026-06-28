<script setup lang="ts">
import { STORE_CATEGORIES } from '@/lib/constants';

defineProps<{
	selectedCategory: string;
}>();
</script>

<template>
	<section id="app-store-menu">
		<div class="app-store-menu_search">
			<img
				src="/images/icons/search.svg"
				alt=""
				loading="lazy"
			>
			<span>Search</span>
		</div>
		<menu>
			<li
				v-for="opt in STORE_CATEGORIES"
				:key="opt.label"
				:data-selected="selectedCategory === opt.label || null"
			>
				<img
					:src="opt.imgSrc"
					:alt="opt.imgSrc"
					loading="lazy"
				>
				<span>{{ opt.label }}</span>
				<span v-if="opt.subLabel" class="app-store-menu_subLabel">{{ opt.subLabel }}</span>
			</li>
		</menu>
		<div class="app-store-menu_footer">
			<img src="/images/icons/user.svg" alt="">
			<p>
				<span class="font-bold text-gray-700">Shawn Losovoj</span>
				<span class="text-gray-400">04.51&#x20AC; Credit</span>
			</p>
		</div>
	</section>
</template>

<style scoped>
.app-store-menu_subLabel {
	@apply ml-auto rounded-2xl px-4 bg-black text-white;
}

.app-store-menu_footer {
	@apply flex items-center justify-center gap-2 p-4 text-sm mt-auto;

	& > p {
		@apply flex flex-col;
	}

	img {
		@apply w-8 h-8 rounded-full;
	}
}

#app-store-menu {
	@apply flex flex-col gap-4 select-none flex-1 overflow-x-auto;

	menu {
		img {
			@apply w-5 h-5 fill-gray-400;
		}

		li {
			@apply flex gap-2 py-2 px-4 items-center;

			&[data-selected] {
				@apply bg-gray-300;
			}
		}
	}
}

.app-store-menu_search {
	@apply mx-4 my-2 flex items-center justify-center gap-2 rounded-lg border-2 border-gray-400 text-gray-400;
}
</style>
