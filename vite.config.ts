import { resolve } from 'node:path';
import tailwindcss from '@tailwindcss/vite';
import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import vueDevTools from 'vite-plugin-vue-devtools';
import tailwindAutoReference from 'vite-plugin-vue-tailwind-auto-reference';

import config from './src/lib/config';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
	let base = '/';
	// if (mode === 'production') {
	// 	base = `/${config.name}/`;
	// }
	if (mode === 'plugin') {
		base = `/${config.name}/dist`;
	}
	return defineConfig({
		base,
		plugins: [
			tailwindAutoReference('./src/assets/styles/index.css'),
			tailwindcss(),
			vue(),
			vueDevTools(),
		],
		resolve: {
			alias: {
				'@': resolve(__dirname, 'src'),
			},
		},
		css: {
			devSourcemap: true,
		},
		optimizeDeps: {
			include: ['vue-pdf'],
		},
		build: {
			commonjsOptions: {
				esmExternals: true,
				transformMixedEsModules:
					true,
			},

			// lib: {
			// 	entry: resolve(__dirname, 'src/main.ts'),
			// 	name: 'MacOs',
			// 	fileName: 'project-macos',
			// },
			// rollupOptions: {
			// 	external: ['vue', 'pinia'],
			// 	output: {
			// 		globals: {
			// 			vue: 'Vue',
			// 			pinia: 'pinia',
			// 		},
			// 	},
			// },
		},
	});
});
