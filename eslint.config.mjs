import antfu from '@antfu/eslint-config';

export default antfu({
	type: 'app',
	vue: true,
	typescript: true,
	formatters: true,
	stylistic: {
		indent: 'tab',
		semi: true,
		tabWidth: 1,
		quotes: 'single',
	},
	ignores: ['.pnpm-store/**', '**/migrations/*', '.github/workflows/**', '**/index.html'],
}, {
	rules: {
		'vue/max-attributes-per-line': ['error', {
			singleline: {
				max: 2,
			},
			multiline: {
				max: 1,
			},
		}],
		'ts/no-redeclare': 'off',
		'ts/consistent-type-definitions': ['error', 'type'],
		'no-console': ['warn'],
		'antfu/no-top-level-await': ['off'],
		'node/prefer-global/process': ['off'],
		'node/no-process-env': ['error'],
		'perfectionist/sort-imports': ['error', {
			tsconfigRootDir: '.',
		}],
		'unicorn/filename-case': ['error', {
			case: 'kebabCase',
			ignore: ['README.md'],
		}],
		'pnpm/yaml-enforce-settings': 0,
	},
});
