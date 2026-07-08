<script setup lang="ts">
import { onUnmounted } from 'vue';

import { WindowFileList } from '@/components';
import { WindowBase } from '@/components/index.ts';
import FinderMenu from '@/components/windows/finder/finder-menu.vue';
import { FINDER_LOCATIONS } from '@/lib/constants/index.ts';
import { useLocationStore } from '@/stores/location-store.ts';

const locationStore = useLocationStore();
onUnmounted(() => {
	locationStore.reset();
});
</script>

<template>
	<WindowBase title="Finder" window-key="finder">
		<template #menu>
			<div class="flex-1 flex flex-col gap-4 shrink-0 overflow-y-auto sm:max-h-120">
				<FinderMenu
					:items="Object.values(FINDER_LOCATIONS)"
					label="Favorites"
					@select-item="locationStore.openItem($event)"
				/>
				<FinderMenu
					v-for="set of FINDER_LOCATIONS"
					:key="`set-${set.id}`"
					:items="set.children || []"
					:label="set.label"
					@select-item="locationStore.openItem($event)"
				/>
			</div>
		</template>
		<div class="flex h-full overflow-auto ">
			<WindowFileList
				id="finder-file-list"
				:items="locationStore.selectedLocation?.children"
				class="p-4 relative sm:w-xl overflow-x-auto w-4/5"
				@select-item="locationStore.openItem($event)"
			/>
		</div>
	</WindowBase>
</template>
