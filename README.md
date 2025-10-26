# Bloomie

1ページのランディングページプロジェクト - 最新のNext.js 15とReact 19で構築

## 🚀 技術スタック

- **Next.js** 15.5.6 (App Router)
- **React** 19.2.0
- **TypeScript** 5.9.3
- **Tailwind CSS** 3.4.18
- **Framer Motion** 11.18.2
- **Lucide React** 0.460.0

## 🎨 デザインシステム

### カラーパレット
- **Brand**: `#FF6450` - メインブランドカラー
- **Base**: `#0A0A0A` - 背景色
- **Gray Light**: `#F3F4F6` - テキスト/アクセントカラー

## 📦 セットアップ

### 必要要件
- Node.js 18.17以上
- pnpm 8.0以上

### インストール

```bash
# 依存関係のインストール
pnpm install

# 開発サーバーの起動
pnpm dev
```

開発サーバーは [http://localhost:3000](http://localhost:3000) で起動します。

### その他のコマンド

```bash
# プロダクションビルド
pnpm build

# プロダクションサーバーの起動
pnpm start

# Lintチェック
pnpm lint

# コードフォーマット
pnpm format
```

## 📄 ページ構成

ランディングページは以下のセクションで構成されています：

- **Hero** (`#hero`) - ヒーローセクション
- **About** (`#about`) - アバウトセクション
- **Services** (`#services`) - サービスセクション
- **Culture** (`#culture`) - カルチャーセクション
- **Overview** (`#overview`) - オーバービューセクション
- **Footer** (`#footer`) - フッター

## 🏗️ プロジェクト構造

```
src/
├── app/
│   ├── layout.tsx        # ルートレイアウト
│   ├── page.tsx          # トップページ
│   └── globals.css       # グローバルスタイル
├── components/
│   ├── sections/         # セクションコンポーネント
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── Culture.tsx
│   │   ├── Overview.tsx
│   │   └── Footer.tsx
│   └── ui/              # UIコンポーネント
│       ├── Container.tsx
│       └── Section.tsx
└── lib/
    └── utils.ts         # ユーティリティ関数
```

## 📝 開発ガイドライン

- ESLintとPrettierの設定に従ってコードをフォーマットしてください
- コミット前に `pnpm lint` と `pnpm build` を実行してエラーがないことを確認してください
- TypeScriptの型安全性を保ってください

## 📄 ライセンス

© 2025 Bloomie. All rights reserved.
