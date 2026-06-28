<script setup lang="ts">
import type { Project } from '@/lib/types';

import { AppStoreIcon } from '@/components';
import { PROJECTS } from '@/lib/constants';

defineEmits<{
	(e: 'selectItem', value: Project): void;
}>();
</script>

<template>
	<section id="app-store-list" class="py-4 px-8 h-full flex flex-col gap-8">
		<article v-for="opt in PROJECTS" :key="opt.label">
			<h3 class="font-bold select-none text-lg mb-2">
				{{ opt.label }} &gt;
			</h3>
			<menu class="flex flex-col gap-4">
				<li
					v-for="item in opt.items"
					:key="item.name"
					class="flex gap-2 items-start min-h-10 flex-wrap"
				>
					<AppStoreIcon :src="item.imgSrc" />
					<p class="flex flex-col">
						<span class="font-bold text-nowrap text-ellipsis">{{ item.name }}</span>
						<span
							class="text-ellipsis max-w-60 text-nowrap overflow-hidden text-gray-600 text-sm"
							:title="item.description"
						>{{ item.description }}</span>
					</p>
					<button
						class="md:ml-auto max-md:mr-auto rounded-3xl bg-blue-200! text-blue-900! px-4 py-1 cursor-pointer text-sm"
						@click="$emit('selectItem', item)"
					>
						View
					</button>
				</li>
			</menu>
		</article>
	</section>
</template>
