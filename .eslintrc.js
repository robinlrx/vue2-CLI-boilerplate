module.exports = {
	root: true,
	env: {
		node: true,
	},
	plugins: ['es-beautifier'],
	extends: [
		'plugin:vue/essential',
		'plugin:es-beautifier/standard',
		'@vue/airbnb',
	],
	parserOptions: {
		parser: 'babel-eslint',
	},
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-tabs': ['error', { allowIndentationTabs: true }],
		'linebreak-style': 'off',
		indent: ['error', 'tab'],
		// vue html quotes work with js-beautify-html
		'vue/html-quotes': ['error', 'single'],
		// vue html tab work with js-beautify-html
		'vue/html-indent': [
			'error',
			'tab',
			{
				attribute: 1,
				baseIndent: 1,
				closeBracket: 0,
				alignAttributesVertically: true,
				ignores: [],
			},
		],
		// vue html unsued components
		'vue/no-unused-components': [
			'error',
			{
				ignoreWhenBindingPresent: false,
			},
		],
		'vue/mustache-interpolation-spacing': ['error', 'always'],
	},
};
