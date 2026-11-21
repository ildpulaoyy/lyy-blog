# 青椒的博客

从原 Hexo 博客（`ildpulaoyy.github.io`）迁移而来的个人博客，使用 [Astro](https://astro.build) 构建，共 15 篇文章。

在线地址：https://ildpulaoyy.github.io/lyy-blog/

## 本地开发

```bash
npm install
npm run dev      # 本地预览
npm run build    # 构建到 dist/
```

## 部署到 GitHub Pages

站点通过 `gh-pages` 分支发布（仓库 Settings → Pages → Source 设为 Deploy from a branch / gh-pages）。

更新线上内容的步骤：

1. 本地修改源码后运行 `npm run build`（`astro.config.mjs` 已配置好 `base: /lyy-blog/`）
2. 提交源码到 `main`：`git add -A && git commit && git push origin main`
3. 把 `dist/` 内容发布到 `gh-pages` 分支（可用 `gh-pages` npm 包、临时仓库推送，或带 `workflow` 权限的 GitHub Actions）
