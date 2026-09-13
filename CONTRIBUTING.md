# Contributing to Mints Global Platform

Thanks for contributing to Mints Global's web platform. This document outlines development standards, local environment setup, and deployment workflows.

---

## 🛠️ Tech Stack & Architecture

- **Client Runtime**: React 19, TypeScript, Tailwind CSS, Lucide icons, Framer Motion
- **Tooling**: Vite 6, TSX, React Router v7
- **Rendering Model**: Hybrid Client SPA with Node.js pure SSR pre-rendering (`scripts/prerender-ssr.js`) generating flat static HTML into `dist/client/` for 100% crawlability, search engine indexing, and performance.
- **Internationalization**: `react-i18next` supporting English (`en`), Arabic (`ar`, RTL support), and German (`de`).
- **CMS / Data**: Cloudinary media pipeline, local typed datasets (`src/data/projects.ts`, `src/data/blogPosts.ts`).

---

## 🚀 Local Development Setup

### Prerequisites
- Node.js 20.x or higher
- npm 10.x or higher

### Installation
```bash
# Clone the repository
git clone https://github.com/mintsweb2026-dotcom/mints-global.git
cd mintsglobal-webpage

# Install dependencies
npm install

# Start local dev server
npm run dev
```
The application will be accessible at `http://localhost:3000`.

---

## 📦 Build & Pre-Rendering Pipeline

The production build pipeline follows a 3-step compilation:
1. `npm run build:client` — Compiles the client bundle with Brotli and Gzip compression into `dist/client`.
2. `vite build --ssr` — Compiles the server entry point (`src/entry-server.tsx`) into `dist/server/entry-server.js`.
3. `node scripts/prerender-ssr.js` — Traverses all routes defined in `sitemap.xml`, renders the full HTML tree with meta tags, canonical links, and JSON-LD schemas, and writes static HTML files into `dist/client/`.

Run the full pipeline:
```bash
npm run build
```

---

## 🧪 Testing & Verification

- **SSR Pre-render verification**:
  ```bash
  node scripts/prerender-ssr.js
  ```
- **Audit Verification**:
  Make sure all pages contain valid title tags, unique descriptions, canonical URLs, and structured JSON-LD schemas.
- **Linting**:
  ```bash
  npm run lint
  ```

---

## 📝 Code Conventions

- **Components**: Place reusable visual components in `src/components/`, page-level views in `src/pages/`, and shared layout elements in `src/components/layout/`.
- **Copy & Voice**: Write clear, grounded copy. Avoid stacking abstract marketing buzzwords. If something can be said simply and directly, choose the simple phrasing.
- **Alt Text**: Write literal, descriptive alt attributes for accessibility. Do not stuff keyword suffixes like `"in Dubai"` onto every image unless geographically relevant.
- **Git Commits**: Use descriptive commit messages explaining *what* and *why*.
