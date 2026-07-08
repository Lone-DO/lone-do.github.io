import type { Directive, DirectiveBinding } from 'vue';
import type { CompanionElement, DraggableInstance, HTMLElementCustom } from '@/lib/types';

import { Draggable } from 'gsap/dist/Draggable';

function updateCompanions(this: DraggableInstance) {
	if (this?.target?.$companions?.length) {
		const deltaX = this.x - this.startX;
		const deltaY = this.y - this.startY;
		this.target.$companions.forEach((companion: CompanionElement) => {
			this.target.$gsapSetter?.(companion.element, 'x', `${companion.x + deltaX}px`);
			this.target.$gsapSetter?.(companion.element, 'y', `${companion.y + deltaY}px`);
		});
	}
}

export const vDraggable: Directive = {
	mounted(el: HTMLElementCustom, binding: DirectiveBinding) {
		const { enabled, getParent, draggable = true, ...opts } = binding.value || {};
		if (enabled) {
			let instance: ReturnType<typeof Draggable.create> | null = null;
			el.$companions = [] as CompanionElement[];
			try {
				el.setAttribute('draggable', 'true');
				instance = Draggable?.create?.(el, {
					bounds: 'main',
					edgeResistance: 0.65,
					onDrag: updateCompanions,
					onThrowUpdate: updateCompanions,
					onPress() {
						const parent: HTMLElementCustom | null = getParent?.();
						if (parent) {
							const x = Number.parseFloat(parent?._gsap?.x) || 0;
							const y = Number.parseFloat(parent?._gsap?.y) || 0;
							el.$companions = [{ element: parent, x, y }];
							/** TODO: Refactor to a more elegant naming scheme for anchoring nested element */
							el.setAttribute('data-companions', '');
						}
						else {
							el.$companions = [];
						}
					},
					onRelease() {
						if (el.$companions?.length) {
							/** Anchors target element from being offset within the parent container */
							el.style.transform = '';
							el.removeAttribute('data-companions');
							el.$companions.forEach((companion: CompanionElement) => {
								/** Update the companion element's position to match the new position of the target element */
								const instance = Draggable?.get?.(companion.element);
								if (instance) {
									instance.update(true);
								}
							});
							el.$companions = [];
						}
					},
					...opts,
				});
				el.$gsapSetter = el._gsap?.set(el, 'x');
			}
			catch (e) {
				console.error(e);
			}
			if (!draggable && instance) {
				instance[0]?.disable();
			}
		}
	},
	unmounted(el: HTMLElement) {
		try {
			Draggable?.get?.(el)?.kill();
		}
		catch (e) {
			console.error(e);
		}
	},
};
