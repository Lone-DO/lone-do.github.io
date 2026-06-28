<script lang='ts' setup>
withDefaults(defineProps<{
	src: string;
	alt?: string;
	loading?: 'lazy' | 'eager';
}>(), {
	alt: ' ',
	loading: 'lazy',
});
</script>

<template>
	<div class="h-10 w-10 rounded-2xl overflow-hidden shrink-0">
		<img
			:src
			:loading
			:alt
			class="mx-auto h-full"
		>
	</div>
</template>
