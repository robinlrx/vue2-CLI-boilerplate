module.exports = {
	root: true,
	env: {
		node: true,
	},
	plugins: ["es-beautifier"],
	extends: [
		"plugin:vue/essential",
		"plugin:es-beautifier/standard",
		"@vue/airbnb",
	],
	parserOptions: {
		parser: "babel-eslint",
	},
	rules: {
		"no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
		"no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
		"no-tabs": ["error", { allowIndentationTabs: true }],
		"linebreak-style": "off",
		indent: ["error", "tab"],
		quotes: ["warn", "double", { allowTemplateLiterals: true }],
		// vue html quotes work with js-beautify-html
		"vue/html-quotes": ["warn", "double"],
		// vue html tab work with js-beautify-html
		"vue/html-indent": [
			"error",
			"tab",
			{
				attribute: 1,
				baseIndent: 1,
				closeBracket: 0,
				alignAttributesVertically: true,
				ignores: [],
			},
		],
		// vue html unsued components
		"vue/no-unused-components": [
			"error",
			{
				ignoreWhenBindingPresent: false,
			},
		],
		"vue/html-closing-bracket-spacing": [
			"warn",
			{
				startTag: "never",
				endTag: "never",
				selfClosingTag: "always",
			}],
		"vue/mustache-interpolation-spacing": ["warn", "always"],
	},
};
