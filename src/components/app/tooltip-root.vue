<script setup lang="ts">
import type { TooltipProps } from '@/lib/types';

import { computed } from 'vue';

import { AppTooltip } from '@/components';
import { DEFAULT_TOOLTIP_HIDE, DEFAULT_TOOLTIP_SHOW } from '@/lib/constants';
import { useTooltipStore } from '@/stores';

const $tooltip = useTooltipStore();

const tooltipProps = computed<TooltipProps>(() => ({
	target: $tooltip?.target,
	hideBy: DEFAULT_TOOLTIP_HIDE,
	toggleBy: DEFAULT_TOOLTIP_SHOW,
	text: $tooltip?.options.text || '',
	placement: $tooltip?.options.placement,
	showArrow: $tooltip?.options.showArrow || false,
	class: $tooltip?.options.class || 'cat',
}));
</script>

<template>
	<AppTooltip v-bind="tooltipProps" class="z-99999" />
</template>
