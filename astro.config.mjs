import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';
import { readFile, writeFile } from 'node:fs/promises';
import vue from '@astrojs/vue';
import tailwindcss from '@tailwindcss/vite';

const env = loadEnv(process.env.NODE_ENV || 'production', process.cwd(), '');
const site = env.SITE_URL || 'http://localhost:4321';
const base = env.SITE_BASE || new URL(site).pathname;

// CMS 上传目录跟着 base 走：/lyy-blog/ 与根路径部署都能正确插图片
const cmsPublicPath = {
  name: 'cms-media-path',
  hooks: {
    'astro:build:done': async ({ dir, logger }) => {
      const file = new URL('admin/config.yml', dir);
      try {
        const text = await readFile(file, 'utf8');
        const mediaPath = `${base.replace(/\/+$/, '')}/images/uploads`;
        await writeFile(file, text.replace(/^public_folder: .*$/m, `public_folder: "${mediaPath}"`));
        logger.info(`CMS 媒体路径 -> ${mediaPath}`);
      } catch {
        logger.warn('未找到 admin/config.yml，跳过媒体路径修正');
      }
    },
  },
};

export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
  compressHTML: true,
  build: { inlineStylesheets: 'always' },
  integrations: [vue(), cmsPublicPath],
  vite: { plugins: [tailwindcss()] },
});
