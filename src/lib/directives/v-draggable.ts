import type { Directive, DirectiveBinding } from 'vue';

import { Draggable } from 'gsap/dist/Draggable';

export const vDraggable: Directive = {
	mounted(el: HTMLElement, binding: DirectiveBinding) {
		if (binding.value.enabled) {
			const { enabled, ...opts } = binding.value;
			try {
				el.setAttribute('draggable', 'true');
				Draggable?.create?.(el, opts);
			}
			catch (e) {
				console.error(e);
			}
		}
	},
};
