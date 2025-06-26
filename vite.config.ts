import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
	base: './',
	server: {
		port: 3000,
	},
	plugins: [react()],
	build: {
		emptyOutDir: true,
		minify: false,
		sourcemap: true,
		rollupOptions: {
			output: {
				name: 'react-portfolio',
				entryFileNames: (chunk) => `${[chunk.name]}.js`,
			},
		},
	},
	resolve: {
		alias: [
			{
				find: /^@\//,
				replacement: '@/',
				async customResolver(source) {
					let resolvedPath = '';
					/** Modify Alias based on Nested Module */
					resolvedPath = path.resolve(source.replace('@/', './src/'));
					/** Return using Vite/RollupOptions resolve handler
					 * https://rollupjs.org/plugin-development/#this-resolve
					 */
					return (await this.resolve(resolvedPath))?.id;
				},
			},
		],
	},
	css: {
      devSourcemap: true,
      preprocessorOptions: {
        scss: {
          sourceMapIncludeSources: true,
        },
      },
    },
});
