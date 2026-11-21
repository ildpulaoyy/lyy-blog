# 青椒的博客

从原 Hexo 博客（`ildpulaoyy.github.io`）迁移而来的个人博客，使用 [Astro](https://astro.build) 构建，共 15 篇文章。

## 本地开发

```bash
npm install
npm run dev      # 本地预览
npm run build    # 构建到 dist/
```

## 部署到 GitHub Pages

仓库已配置 GitHub Actions（见 `.github/workflows/deploy.yml`）：每次推送到 `main` 分支会自动构建并部署到 GitHub Pages。

需要在仓库 **Settings → Pages → Build and deployment** 中，将 Source 设为 **GitHub Actions**。

`astro.config.mjs` 会从 Actions 注入的 `BASE_PATH` / `SITE_URL` 自动生成正确的站点地址，无需手动修改。
