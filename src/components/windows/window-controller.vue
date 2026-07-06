<script setup lang="ts">
defineEmits(['maximize', 'close']);
</script>

<template>
	<div class="window_controller">
		<button
			v-tooltip="'close window'"
			class="window_close"
			@click.stop="$emit('close')"
		/>
		<button
			class="window_minimize"
			title="minimize window (WIP)"
			disabled
		/>
		<button
			class="window_maximize"
			title="maximize window (WIP)"
			disabled
		/>
	</div>
</template>

<style scoped>
.window_controller {
	@apply flex gap-2;

	& > button {
		@apply size-3.5 rounded-full;

		&:not([disabled]) {
			@apply cursor-pointer;
		}
	}
}

.window_close {
	@apply bg-[#ff6157];
}

.window_minimize {
	@apply bg-[#ffc030];
}

.window_maximize {
	@apply bg-[#2acb42];
}
</style>
