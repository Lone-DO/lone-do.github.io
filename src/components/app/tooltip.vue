<script lang='ts' setup>
import type { Instance } from '@popperjs/core';

import type { TooltipProps, TooltipTarget } from '@/lib/types';
import { createPopper } from '@popperjs/core';

import { onUnmounted, ref, useTemplateRef, watch } from 'vue';

import { DEFAULT_TOOLTIP_HIDE, DEFAULT_TOOLTIP_SHOW } from '@/lib/constants';

const $props = withDefaults(defineProps<TooltipProps>(), {
	showArrow: true,
	placement: 'top',
	offset: () => [0, 10],
	hideBy: () => DEFAULT_TOOLTIP_HIDE,
	toggleBy: () => DEFAULT_TOOLTIP_SHOW,
});

const internalShowEvents = ref([...DEFAULT_TOOLTIP_SHOW]);
const internalHideEvents = ref([...DEFAULT_TOOLTIP_HIDE]);

const showTooltip = ref(false);
const tooltip = useTemplateRef('tooltip');
const popperInstance = ref<Instance | null>(null);

const show = () => (showTooltip.value = true);
const hide = () => (showTooltip.value = false);

function attach(el: TooltipTarget) {
	if (el) {
		internalShowEvents.value.forEach(event => el?.addEventListener(event, show));
		internalHideEvents.value.forEach(event => el?.addEventListener(event, hide));
	}
}

function detach(el: TooltipTarget = $props.target) {
	if (el) {
		internalShowEvents.value.forEach(event => el?.removeEventListener(event, show));
		internalHideEvents.value.forEach(event => el?.removeEventListener(event, hide));
	}
}

function init(target = $props.target, defaultVisible = false) {
	if (target && tooltip.value) {
		/**
		 * Required destroying previous instance and building fresh based on updated target
		 * https://share.google/aimode/W4N8sKEAcSf8XgGs3
		 */
		popperInstance.value?.destroy();
		popperInstance.value = createPopper(target, tooltip.value, {
			placement: $props.placement,
			modifiers: [
				{ name: 'offset', options: { offset: $props.offset } },
			],
		});
		if (defaultVisible) {
			showTooltip.value = true;
		}
	}
}

onUnmounted(() => detach($props.target));

watch(() => $props.target, (newTarget, oldTarget) => {
	if (newTarget) {
		if (oldTarget) {
			detach(oldTarget);
		}
		if ($props.toggleBy?.length) {
			internalShowEvents.value = [...$props.toggleBy];
		}
		if ($props.hideBy?.length) {
			internalHideEvents.value = [...$props.hideBy];
		}
		attach(newTarget);
		init(newTarget);
	}
	else {
		detach(oldTarget);
		showTooltip.value = false;
		popperInstance.value?.destroy();
	}
});

watch(showTooltip, (bool) => {
	/** https://popper.js.org/docs/v2/tutorial/#performance */
	if (bool) {
		/** Update its position */
		popperInstance.value?.update();
	}
	/** Toggle the event listeners based on tooltip visibility */
	popperInstance.value?.setOptions(options => ({
		...options,
		modifiers: [
			...(options?.modifiers || []),
			{ name: 'eventListeners', enabled: bool },
		],
	}));
});
</script>

<template>
	<div
		ref="tooltip"
		class="tooltip"
		:class="$props.class"
		role="tooltip"
		aria-describedby="tooltip"
		:data-show="showTooltip || null"
	>
		<div class="tooltip-body">
			<slot>
				<span v-if="text">{{ text }}</span>
			</slot>
		</div>
		<div
			v-if="showArrow"
			class="tooltip-arrow"
			data-popper-arrow
		/>
	</div>
</template>

<style scoped>
.tooltip {
	/* TODO: Turn this into a global variable that can be interchanged based on selected macos Theme */
	@apply py-1! px-3! text-xs! rounded-md! bg-blue-200! text-blue-900! shadow-2xl!;
	position: relative;
	display: none;
}

.tooltip[data-show] {
	@apply block;
}

.tooltip[data-popper-placement^='top'] > .tooltip-arrow {
	bottom: -4px;
}

.tooltip[data-popper-placement^='bottom'] > .tooltip-arrow {
	top: -4px;
}

.tooltip[data-popper-placement^='left'] > .tooltip-arrow {
	right: -4px;
}

.tooltip[data-popper-placement^='right'] > .tooltip-arrow {
	left: -4px;
}

.tooltip-arrow,
.tooltip-arrow::before {
	position: absolute;
	width: 8px;
	height: 8px;
	background: inherit;
}

.tooltip-arrow {
	visibility: hidden;
}

.tooltip-arrow::before {
	visibility: visible;
	content: '';
	transform: rotate(45deg);
}
</style>
