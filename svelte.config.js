import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import fs from 'fs';

// Check if CNAME file exists
const hasCnameFile = fs.existsSync('./CNAME');
// If CNAME exists, use empty base path, otherwise use environment variable or empty string
const basePath = hasCnameFile ? '' : (process.env.BASE_PATH || '');
const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({
      fallback: 'index.html'
    }),
    paths: {
      base: basePath
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