<script lang='ts' setup>
import type { LocationChild } from '@/lib/types/index.ts';

import { computed } from 'vue';

import { WindowBase } from '@/components';
import { useWindowStore } from '@/stores/index.ts';

const windowStore = useWindowStore();
const data = computed<LocationChild | null>(() => windowStore.windows.txtfile.data || null);
</script>

<template>
	<WindowBase
		id="text-preview-window"
		:title="`Preview ${data?.label}`"
		window-key="txtfile"
	>
		<p>
			<template v-if="Array.isArray(data?.description)">
				<span v-for="(line, index) in data?.description" :key="index + line">{{ line }}</span>
			</template>
			<span v-else>{{ data?.description }}</span>
		</p>
	</WindowBase>
</template>

<style scoped>
#text-preview-window {
	@apply w-md overflow-hidden;

	p {
		@apply flex flex-col gap-2 p-4;
	}
}
</style>
