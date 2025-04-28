import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			fallback: 'index.html'
		}),
		paths: {
			base: ''
		},
		prerender: {
			handleHttpError: ({ path, referrer, message }) => {
				// Ignore missing image files in src directory
				if (path.startsWith('/src/lib/images/')) {
					console.warn(`Ignoring ${path} as it's referenced from ${referrer}`);
					return;
				}
				// Otherwise, fail the build
				throw new Error(message);
			}
		}
	}
};

export default config;
