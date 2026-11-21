import { defineConfig } from 'astro/config';

const base = process.env.BASE_PATH || '/lyy-blog/';
const site = process.env.SITE_URL || 'https://ildpulaoyy.github.io/lyy-blog';

export default defineConfig({
  site,
  base,
  vite: {
    server: {
      host: '0.0.0.0',
      allowedHosts: true,
    },
    preview: {
      host: '0.0.0.0',
      allowedHosts: true,
    },
  },
});
