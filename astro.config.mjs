// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://zares.dev', // Update with actual domain
  output: 'static', // Ensure fully static site generation
  vite: {
    plugins: [tailwindcss()],
  },
  build: {
    inlineStylesheets: 'auto',
  },
  image: {
    // Enable image optimization for better performance
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
  },
});
