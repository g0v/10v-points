import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),
	kit: {
		adapter: adapter(),
		paths: {
			base: '/10v-points'
		},
		trailingSlash: 'always',
		prerender: {
			default: true
		}
	}
};

export default config;
