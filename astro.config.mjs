// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://elenalf.github.io',
  base: '/PortFolio_Personal',
  integrations: [tailwind()]
});