// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import yaml from '@rollup/plugin-yaml';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.baldi.me',
  vite: {
    plugins: [tailwindcss(), yaml()]
  },

  integrations: [sitemap()]
});
