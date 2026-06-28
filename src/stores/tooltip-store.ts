import type { TooltipOptions, TooltipTarget } from '@/lib/types';
import { defineStore } from 'pinia';

import { ref } from 'vue';

export const useTooltipStore = defineStore('tooltip-registry', () => {
	const initialState: TooltipOptions = {
		text: '',
		showArrow: true,
		placement: 'top',
	};
	const target = ref<TooltipTarget>(null);
	const options = ref<TooltipOptions>({ ...initialState });

	function update(newTarget: TooltipTarget, newOpts?: TooltipOptions) {
		if (newTarget && newTarget !== target.value) {
			target.value = newTarget;
			options.value = { ...initialState, ...newOpts };
		}
	}

	function clear(el: HTMLElement) {
		if (target.value === el) {
			target.value = null;
		}
	}

	return {
		target,
		options,
		update,
		clear,
	};
});
