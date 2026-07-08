<script lang='ts' setup>
import type { LocationChild } from '@/lib/types/index.ts';

import { WindowFileList } from '@/components';
import { FINDER_LOCATIONS } from '@/lib/constants';
import { useWindowStore } from '@/stores';
import { useLocationStore } from '@/stores/location-store.ts';

const projects: LocationChild[] = FINDER_LOCATIONS.work.children ?? [];
const locationStore = useLocationStore();
const windowStore = useWindowStore();

function openItem(item: LocationChild) {
	if (item) {
		locationStore.openItem(item);
		if (!windowStore.windows.finder.isOpen) {
			windowStore.openWindow('finder', item);
		}
	}
}
</script>

<template>
	<section id="home" class="relative w-full max-sm:invisible">
		<WindowFileList
			id="home-file-list"
			:items="projects"
			class="h-full w-full"
			children-classes="text-white"
			:enable-draggable="true"
			@select-item="openItem"
		/>
	</section>
</template>
