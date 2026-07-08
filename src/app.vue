<script setup lang="ts">
import gsap from 'gsap';
import { Draggable } from 'gsap/dist/Draggable';

import {
	AppDock,
	AppHeader,
	AppHome,
	AppRootTooltip,
	AppStoreWindow,
	AppWelcome,
	ContactWindow,
	FinderWindow,
	ImagePreviewWindow,
	ResumeWindow,
	TerminalWindow,
	TextPreviewWindow,
} from '@/components';
import { useWindowStore } from '@/stores';

gsap.registerPlugin(Draggable);

const windowStore = useWindowStore();
</script>

<template>
	<section id="project-macos">
		<AppHeader />
		<AppRootTooltip />
		<main>
			<AppWelcome />
			<AppHome />
			<AppDock />
			<TerminalWindow v-if="windowStore.windows.terminal.isOpen" />
			<AppStoreWindow v-if="windowStore.windows.store.isOpen" />
			<ResumeWindow v-if="windowStore.windows.resume.isOpen" />
			<FinderWindow v-if="windowStore.windows.finder.isOpen" />
			<TextPreviewWindow v-if="windowStore.windows.txtfile.isOpen" />
			<ImagePreviewWindow v-if="windowStore.windows.imgfile.isOpen" />
			<ContactWindow v-if="windowStore.windows.contact.isOpen" />
		</main>
	</section>
</template>

<style>
@import '@/assets/styles/global.scss';
@layer base {
	html,
	body {
		@apply w-dvw overflow-hidden h-dvh;
	}

	main {
		@apply w-dvw h-dvh overflow-hidden flex-1 relative;
	}

	body {
		@apply bg-cover bg-no-repeat bg-center;
		background-image: url('/images/wallpaper/default.webp');
	}
}

#project-macos {
	@apply flex flex-col h-screen;
}
</style>
