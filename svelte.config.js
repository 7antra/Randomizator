import vercel from '@sveltejs/adapter-vercel';
import sveltePreprocess from 'svelte-preprocess';
import node from '@sveltejs/adapter-node';
import { resolve } from 'path';

const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: sveltePreprocess({
		preserve: ['ld+json'],
		defaults: {
			script: 'typescript',
			style: 'scss'
		},
		scss: {
			// prependData: `@import '${__dirname}/src/style/_theme.scss';`,
			renderSync: true
		}
	}),
	kit: {
		// By default, `npm run build` will create a standard Node app.
		// You can create optimized builds for different platforms by
		// specifying a different adapter
		adapter: vercel(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	}
};

export default config;
