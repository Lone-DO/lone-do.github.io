<script setup lang="ts">
import type { LocationChild } from '@/lib/types/index.ts';

withDefaults(defineProps<{
	id: string;
	items?: LocationChild[];
	childrenClasses?: string;
	enableDraggable?: boolean;
}>(), {
	enableDraggable: false,
});

defineEmits<{
	(e: 'selectItem', value: LocationChild): void;
}>();
</script>

<template>
	<ul :id class="window-file-list relative">
		<li
			v-for="item in items"
			:key="item.id + item.label"
			v-draggable="{ enabled: enableDraggable }"
			class="absolute w-35 p-2 text-center flex flex-col items-center text-sm cursor-pointer rounded-lg hover:bg-blue-200 hover:text-blue-900"
			:class="`${item.position} ${childrenClasses}`"
			:title="item.href"
			@click="$emit('selectItem', item)"
		>
			<img
				class="h-20"
				:src="item.icon"
				alt=""
			>
			<label class="select-none">{{ item.label }}</label>
		</li>
	</ul>
</template>
