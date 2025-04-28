import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({
      fallback: 'index.html'
    }),
    paths: {
      base: process.env.BASE_PATH || ''
    },
    prerender: {
      handleHttpError: ({ path, referrer, message }) => {
        if (path.startsWith('/src/lib/images/')) {
          console.warn(`Ignoring ${path} as it's referenced from ${referrer}`);
          return;
        }
        throw new Error(message);
      }
    }
  }
};

export default config;