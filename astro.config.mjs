// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  // Endereço final do site. Usado no sitemap e nas tags de SEO.
  site: 'https://cfcquerencia.com',
  // React só é carregado nas "ilhas" interativas (ex.: o simulador).
  integrations: [react(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
