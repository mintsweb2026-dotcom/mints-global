<div align="center">
  <img src="/images/logo-white.webp" alt="Mints Global Logo" width="220" />
  <br />
  <h1>Mints Global Web Platform</h1>
  <p><strong>Digital Marketing • Software Engineering • Cyber Security</strong></p>
  
  [![Vite](https://img.shields.io/badge/Vite-6.0+-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
  [![React](https://img.shields.io/badge/React-19.0+-61DAFB?logo=react&logoColor=white)](https://reactjs.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0+-06B6D4?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
</div>

<hr />

## 🌐 Overview

This repository powers the official digital platform for **Mints Global**, an independent digital agency headquartered in Dubai, UAE, serving clients across the Middle East and Europe.

We engineer software, scale digital marketing, and defend enterprise infrastructure across three primary practices:
- **Software Engineering**: Bespoke web applications, mobile platforms, and ERP/CRM business systems.
- **Data-Driven Marketing**: High-intent search engine optimization (SEO), performance advertising, and brand strategy.
- **Cyber Security**: Offensive security testing (VAPT), compliance readiness (NESA, PDPL, ISO 27001), and cloud security.

---

## 🏗️ Architecture & Rendering Pipeline

The platform uses a high-performance **hybrid architecture**:
1. **Client SPA**: React 19, Vite 6, Tailwind CSS, Framer Motion, and React Router v7.
2. **Server-Side Pre-Rendering (SSG/SSR)**: Custom Node.js pre-rendering (`scripts/prerender-ssr.js`) that renders every production route into static HTML with inline metadata, self-referencing canonicals, and JSON-LD structured schemas (`Organization`, `LocalBusiness`, `FAQPage`, `BreadcrumbList`, `CreativeWork`).
3. **Dual-Framework Flexibility**: Contains the main Vite/React application at root and Next.js assets under `next-app/`.

Additional technical documentation is available in [`/docs`](./docs/):
- [`docs/SEO_IMPLEMENTATION.md`](./docs/SEO_IMPLEMENTATION.md) — Technical SEO architecture, schema structures, and indexing requirements.
- [`docs/HOSTING_SPECIFICATIONS.md`](./docs/HOSTING_SPECIFICATIONS.md) — CDN edge caching, caching headers, and hosting configuration.

---

## 🛠️ Quick Start

```bash
# Clone the repository
git clone https://github.com/mintsweb2026-dotcom/mints-global.git
cd mintsglobal-webpage

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:3000` in your browser.

---

## 📦 Production Build

To run the complete production build and SSR pre-rendering pipeline:
```bash
npm run build
```

This command:
1. Generates `public/sitemap.xml` with all canonical routes.
2. Compiles client bundles into `dist/client` with Brotli and Gzip compression.
3. Builds the SSR bundle into `dist/server/entry-server.js`.
4. Executes `scripts/prerender-ssr.js` to pre-render all routes into flat static HTML files.

For development guidelines, branching conventions, and contributing rules, see [`CONTRIBUTING.md`](./CONTRIBUTING.md).

---

## 📞 Contact

- **Website**: [mintsglobal.ae](https://www.mintsglobal.ae)
- **Email**: [info@mintsglobal.ae](mailto:info@mintsglobal.ae)
- **Phone / WhatsApp**: +971 502943916 / +44 7899727950
- **Office**: Office #315, 3rd Floor, Bank Street Building, Bur Dubai, Dubai, UAE

---

<div align="center">
  <p>© 2026 Mints Global. All rights reserved.</p>
</div>
