<script setup lang="ts">
import dayjs from 'dayjs';

import { controlLinks, navLinks } from '@/lib/constants';
import { useWindowStore } from '@/stores';

const windowStore = useWindowStore();
</script>

<template>
	<header id="app-header">
		<img src="/images/app-icons/logo.svg" alt="logo">
		<p>Losovoj's Portfolio</p>
		<nav id="app-header_navigation">
			<ul>
				<li
					v-for="(opt) in navLinks"
					:key="opt.label"
					@click="windowStore.openWindow(opt.id)"
				>
					<span>{{ opt.label }}</span>
				</li>
			</ul>
		</nav>
		<div id="app-header_control-panel">
			<ul>
				<li v-for="(opt) in controlLinks" :key="opt.label">
					<img :src="opt.imgSrc" :alt="opt.label">
				</li>
			</ul>
			<time>{{ dayjs().format('ddd MMM D h:mm A') }}</time>
		</div>
	</header>
</template>

<style scoped>
@import 'tailwindcss';

header {
	@apply w-full flex justify-start items-center gap-4 bg-white/50 backdrop-blur-3xl p-2 px-5 select-none flex-wrap;

	p {
		@apply font-bold shrink-0;
	}

	time {
		@apply text-sm font-medium text-black shrink-0;
	}

	ul {
		@apply flex items-center gap-5;

		span {
			@apply text-sm cursor-pointer hover:underline transition-all;
		}
	}
}

#app-header_navigation,
#app-header_control-panel {
	@apply flex items-center max-sm:justify-center gap-5;
}

#app-header_control-panel {
	@apply ml-auto;

	ul {
		@apply max-sm:hidden;
	}
}

#app-header_navigation {
	@apply max-sm:hidden;
}
</style>
