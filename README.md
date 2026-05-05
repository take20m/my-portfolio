# portfolio

ミニマル & タイポ強めの個人ポートフォリオサイト。Astro v6 + TypeScript で構築、Cloudflare Pages にデプロイする想定です。

## セットアップ

```bash
nvm use            # .nvmrc に従って Node 22 を使う
npm install
npm run dev        # http://localhost:4321
```

## コマンド

| コマンド | 内容 |
|---|---|
| `npm run dev` | 開発サーバー起動 |
| `npm run check` | 型 + コンテンツスキーマの検証 |
| `npm run build` | 本番ビルド (`dist/`) |
| `npm run preview` | 本番ビルドをローカルで配信 |

## 構成

- 静的サイト（`output: 'static'`）
- Content Collections (`src/content.config.ts`) で Works を MDX 管理
- View Transitions (`<ClientRouter />`) で一覧 ⇄ 詳細をなめらかに繋ぐ
- フォントは `@fontsource-variable/geist` と `@fontsource/noto-sans-jp` を自己ホスト
- カラーは `src/styles/global.css` の CSS 変数で集中管理

## Cloudflare Pages へのデプロイ

1. このリポジトリを GitHub に push
2. Cloudflare Pages のダッシュボードで「Connect to Git」→ 対象リポを選択
3. ビルド設定:
   - Framework preset: **Astro**
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Environment variables: `NODE_VERSION = 22`（または `.nvmrc` を信頼）
   - Production branch: `main`
4. デプロイ完了後、`*.pages.dev` で動作確認
5. Custom domains から独自ドメインを接続

## 受領待ち（TODO の差し替え場所）

このプロジェクトはプレースホルダ値のまま動作します。本番化までに以下を差し替えてください。

| 項目 | 場所 |
|---|---|
| 表示名 | `src/data/site.ts` の `name` |
| ハンドル | `src/data/site.ts` の `handle` |
| 1 行肩書き / タグライン | `src/data/site.ts` の `role` / `tagline` |
| サイト URL | `src/data/site.ts` の `url` と `astro.config.mjs` の `site` |
| GitHub などの SNS | `src/data/site.ts` の `social` |
| About 本文・略歴 | `src/pages/about.astro` |
| Works 本体 | `src/content/works/*.mdx`（サンプル 3 件は削除して良い） |
| Works のサムネ | `src/assets/works/`（PNG/JPG/WebP/SVG 可） |
| プロフィール画像 | `src/assets/profile/` 配下 |
| favicon | `public/favicon.svg`（差し替え） |
| OG 画像 | `public/og-default.svg` を 1200×630 の **PNG** (`og-default.png`) に差し替え、`src/layouts/BaseLayout.astro` のデフォルト ogImage も `.png` に戻す（Twitter Card は SVG 非対応） |
| `robots.txt` のサイトマップ URL | `public/robots.txt` |

## ディレクトリ概要

```
src/
├─ assets/works/          # Works のサムネ
├─ components/            # Header / Footer / WorkCard / TagList ...
├─ content/works/         # Works の MDX エントリ
├─ content.config.ts      # Content Collections 定義
├─ data/site.ts           # サイト全体のメタ情報
├─ layouts/               # BaseLayout / WorkLayout
├─ pages/                 # ルーティング
├─ styles/                # global.css / fonts.css
└─ utils/                 # formatDate など
```
