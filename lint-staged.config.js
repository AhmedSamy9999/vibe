/** @type {import('lint-staged').Config} */

export default {
	'**/*.{ts,tsx,js,jsx}': ['eslint --fix', 'prettier --write'],
	'**/*.{json,css,md}': ['prettier --write'],
};
