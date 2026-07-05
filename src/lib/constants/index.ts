import type { DockApp, NavLink, SocialLink } from '@/lib/types';

export * from './app-store.ts';
export * from './finder.ts';

export const navLinks: NavLink[] = [
	{ label: 'Contact', id: 'contact' },
	{ label: 'Projects', id: 'store' },
	{ label: 'Resume', id: 'resume' },
];

export const controlLinks = [
	{ label: 'wifi', imgSrc: 'images/icons/wifi.svg' },
	{ label: 'search', imgSrc: 'images/icons/search.svg' },
	{ label: 'user', imgSrc: 'images/icons/user.svg' },
	{ label: 'mode', imgSrc: 'images/icons/mode.svg' },
];

export const FONT_WEIGHTS = {
	subtitle: { min: 200, max: 700, default: 200 },
	title: { min: 400, max: 800, default: 400 },
};

export const DEFAULT_TOOLTIP_SHOW: (keyof HTMLElementEventMap)[] = ['mouseenter', 'focus'];
export const DEFAULT_TOOLTIP_HIDE: (keyof HTMLElementEventMap)[] = ['mouseleave', 'blur'];

export const DOCK_APPS: DockApp[] = [
	{ id: 'store', label: 'Projects', imgSrc: 'images/app-icons/app-store.png', canOpen: true },
	{ id: 'finder', label: 'Portfolio', imgSrc: 'images/app-icons/finder.png', canOpen: true },
	{ id: 'photos', label: 'Gallery', imgSrc: 'images/app-icons/photos.png', canOpen: false },
	{ id: 'contact', label: 'Contact', imgSrc: 'images/app-icons/contact.png', canOpen: true },
	{ id: 'terminal', label: 'Skills', imgSrc: 'images/app-icons/terminal.png', canOpen: true },
	{ id: 'trash', label: 'Archive', imgSrc: 'images/app-icons/trash.png', canOpen: true },
];

export const INITIAL_Z_INDEX = 1000;

export const WINDOW_CONFIG = {
	finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
	contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
	resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
	store: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
	photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
	terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
	txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
	imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
	/** Others */
	safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
	trash: { isOpen: false, zIndex: null, data: null },
};
export const TECH_STACK = [
	{
		category: 'Frontend',
		items: ['Vue.js', 'Angular.js', 'React.js', 'Nuxt.js', 'TypeScript'],
	},
	{
		category: 'Styling',
		items: ['Tailwind CSS', 'Sass', 'CSS'],
	},
	{
		category: 'Backend',
		items: ['Node.js', 'Express', 'NuxtJs', 'SQL'],
	},
	{
		category: 'Database',
		items: ['MongoDB', 'Supabase', 'Turso'],
	},
	{
		category: 'Dev Tools',
		items: ['Git', 'GitHub', 'Docker'],
	},
];

export const SOCIALS: SocialLink[] = [
	{
		imgSrc: 'images/icons/github.svg',
		label: 'GitHub',
		href: 'https://github.com/Lone-DO',
		class: 'bg-[#0d1117] text-[#ecf2f8]',
	},
	{
		imgSrc: 'images/app-icons/randstad-logo.svg',
		label: 'Gulp',
		href: 'https://www.gulp.de/gulp2/g/spezialisten/profil/pv0knu4rf2',
		class: 'bg-[#0f1941] text-white',
	},
	{
		imgSrc: 'images/icons/linkedin.svg',
		label: 'LinkedIn',
		href: 'https://www.linkedin.com/in/lone-do',
		class: 'bg-[#0077B5] text-white',
	},
	{
		imgSrc: 'images/app-icons/outlook.svg',
		label: 'Outlook',
		href: 'mailto:citizin@outlook.com',
		class: 'bg-[#0078D4] text-white',
	},
];
