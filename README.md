<div align="center">

<img src="public/favicon.png" alt="take20m" width="160" />

# ポートフォリオサイト

体験したこと、作ったもの、考えたこと、読んだ本のメモなど雑多に記録として残せる場所が欲しかったので、ポートフォリオサイトとして作成しました。<br />
ミニマルでタイポグラフィックなデザインを目指しました。

<p>
  <img alt="Astro" src="https://img.shields.io/badge/Astro-v6-BC52EE?logo=astro&logoColor=white" />
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white" />
  <img alt="Cloudflare Pages" src="https://img.shields.io/badge/Cloudflare%20Pages-F38020?logo=cloudflarepages&logoColor=white" />
</p>

<img src="public/og-default.png" alt="take20m のポートフォリオ" width="800" />
</div>

## 構成

- 静的サイト（`output: 'static'`）
- ページ: `/`（Top + About）/ `/works/` / `/works/<slug>/` / `/blog/` /
  `/blog/<slug>/` / `/404`
- Content Collections (`src/content.config.ts`) で `works` と `blog` を
  MDXで管理
- フォントは `@fontsource-variable/geist` と `@fontsource/noto-sans-jp` を使用
- カラーは `src/styles/global.css` に定義
