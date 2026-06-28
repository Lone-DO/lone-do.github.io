<script setup lang="ts">
import type { Project } from '@/lib/types';

import { computed, ref } from 'vue';

import { AppStoreDetails, AppStoreList, AppStoreMenu, WindowBase } from '@/components';
import { DOCK_APPS } from '@/lib/constants/index.ts';

const app = computed(() => DOCK_APPS.find(({ id }) => id === 'store'));
const selectedCategory = ref('Develop');
const selectedProject = ref<null | Project>(null);

const setProject = (item: Project) => (selectedProject.value = item);
const clear = () => (selectedProject.value = null);
</script>

<template>
	<WindowBase
		id="app-store-window"
		:window-key="app?.id"
		:title="selectedCategory"
		:show-back-arrow="Boolean(selectedProject)"
		@on-back="clear"
	>
		<template #menu>
			<AppStoreMenu :selected-category />
		</template>
		<AppStoreList v-if="!selectedProject" @select-item="setProject" />
		<AppStoreDetails v-else-if="selectedProject" :project="selectedProject" />
	</WindowBase>
</template>

<style scoped>

</style>
