import type { WINDOW_CONFIG } from '@/lib/constants';

export * from './tooltip.ts';
export type DockApp = { id: keyof (typeof WINDOW_CONFIG); label: string; imgSrc: string; canOpen: boolean };
export type DockListeners = [HTMLElement, (keyof HTMLElementEventMap), (e: any) => any][];
export type WindowData = null | { [key: string]: any };
export type Project = {
	name: string;
	description: string;
	tools: string[];
	startDate: string;
	endDate: string;
	imgSrc: string;
	bannerSrc: string;
	links: string[][];
};

export type Projects = {
	label: string;
	category: string;
	items: Project[];
}[];

export type NavLink = {
	label: string;
	id: keyof (typeof WINDOW_CONFIG);
};

export type FileType = 'txt' | 'pdf' | 'url' | 'img' | 'fig';

export type Location = {
	id: string;
	label: string;
	icon: string;
	children?: LocationChild[];
	kind: 'folder' | 'file';
};

export type LocationChild = Location & {
	imgSrc: string;
	href?: string;
	position?: string;
	fileType?: FileType;
	description?: string | string[];
	subtitle?: string;
	windowPosition?: string;
	kind: 'folder' | 'file';
};

export type SocialLink = {
	imgSrc: string;
	href: string;
	label: string;
	class: string;
};

export type HTMLElementCustom = HTMLElement & {
	$companions: CompanionElement[];
	$gsapSetter?: (el: HTMLElementCustom, prop: string, value: string) => void;
};

export type CompanionElement = { element: HTMLElementCustom; x: number; y: number };

export type DraggableInstance = ReturnType<typeof Draggable.get> & {
	target: HTMLElementCustom;
} | null;
