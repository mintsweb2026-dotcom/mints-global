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
1. **Client SPA**: React 19, Vite 6, Tailwind CSS v4, Motion (formerly Framer Motion), and React Router v7.
2. **Server-Side Pre-Rendering (SSG/SSR)**: Custom Node.js pre-rendering (`scripts/prerender-ssr.js`) that renders every production route into static HTML with inline metadata, self-referencing canonicals, and JSON-LD structured schemas (`Organization`, `LocalBusiness`, `FAQPage`, `BreadcrumbList`, `CreativeWork`).
3. **Resilient Dual Data Layer**: All dynamic features (blog, portfolio works) fetch from Firebase Firestore in production with zero-downtime offline fallbacks to bundled static datasets (`STATIC_POSTS`, `PROJECTS`).

Additional technical documentation is available in [`/docs`](./docs/):
- [`docs/SEO_IMPLEMENTATION.md`](./docs/SEO_IMPLEMENTATION.md) — Technical SEO architecture, schema structures, and indexing requirements.
- [`docs/HOSTING_SPECIFICATIONS.md`](./docs/HOSTING_SPECIFICATIONS.md) — CDN edge caching, caching headers, and hosting configuration.

---

## 🔐 Environment Configuration

Create a local environment file by copying `.env.example`:

```bash
cp .env.example .env.local
```

### Environment Variables Reference

| Variable | Required | Description |
|---|---|---|
| `VITE_EMAILJS_SERVICE_ID` | Yes (for contact & newsletter) | EmailJS Service ID |
| `VITE_EMAILJS_TEMPLATE_ID` | Yes (for contact form) | EmailJS Template ID for contact lead notifications |
| `VITE_EMAILJS_PUBLIC_KEY` | Yes (for contact form) | EmailJS Public API Key |
| `VITE_GA_ID` | Optional | Google Analytics 4 Measurement ID (`G-XXXXXXXXXX`) |
| `VITE_FIREBASE_API_KEY` | Yes (for admin & dynamic data) | Firebase Web API Key |
| `VITE_FIREBASE_AUTH_DOMAIN` | Yes | Firebase Auth Domain (`project-id.firebaseapp.com`) |
| `VITE_FIREBASE_PROJECT_ID` | Yes | Firebase Project ID |
| `VITE_FIREBASE_STORAGE_BUCKET` | Yes | Firebase Storage Bucket |
| `VITE_FIREBASE_MESSAGING_SENDER_ID`| Yes | Firebase Messaging Sender ID |
| `VITE_FIREBASE_APP_ID` | Yes | Firebase Web App ID |
| `VITE_FIREBASE_MEASUREMENT_ID` | Optional | Firebase Analytics Measurement ID |
| `VITE_FIREBASE_FIRESTORE_DB_ID` | Optional | Firestore database ID (defaults to `(default)`) |
| `VITE_CRISP_WEBSITE_ID` | Optional | Crisp Chat Widget ID (widget only loads when set) |
| `VITE_ADMIN_EMAILS` | Optional | Comma-separated admin email list for bootstrap access |
| `VITE_SENTRY_DSN` | Optional | Sentry DSN for production exception telemetry |

> [!CAUTION]
> Never commit `.env.local` or any file containing live credentials to git. The `.gitignore` is pre-configured to exclude all `.env*` files with the exception of `.env.example`.

---

## 🔄 Data Flow Architecture

```
                    ┌─────────────────────────┐
                    │      Client Browser     │
                    └────────────┬────────────┘
                                 │
         ┌───────────────────────┼───────────────────────┐
         ▼                       ▼                       ▼
 ┌───────────────┐       ┌───────────────┐       ┌───────────────┐
 │   Blog Posts  │       │  Work / Case  │       │  Contact Form │
 │  Data Pipeline│       │    Studies    │       │   (Lead Gen)  │
 └───────┬───────┘       └───────┬───────┘       └───────┬───────┘
         │                       │                       │
 ┌───────┴───────┐       ┌───────┴───────┐               │
 │ Try Firestore │       │ Try Firestore │               ▼
 │  `posts/` col │       │  `works/` col │       ┌───────────────┐
 └───────┬───────┘       └───────┬───────┘       │    EmailJS    │
         │ (fail/empty)          │ (fail/empty)  │  Client SDK   │
         ▼                       ▼               └───────┬───────┘
 ┌───────────────┐       ┌───────────────┐               ▼
 │ STATIC_POSTS  │       │ data/projects │       ┌───────────────┐
 │ (in-memory)   │       │ (in-memory)   │       │  Agency Inbox │
 └───────────────┘       └───────────────┘       └───────────────┘
```

### 1. Blog Posts (`src/data/posts.ts`)
- Calls `getPosts()` to query Firestore collection `posts` ordered by publish date.
- If Firestore is unavailable, offline, or returns empty, it automatically falls back to `STATIC_POSTS` without throwing errors or breaking page rendering.
- Views count increment is handled asynchronously through `incrementPostViews(slug)`.

### 2. Portfolio Works (`src/hooks/useWorks.ts`)
- Custom React hook subscribing to Firestore `works` collection.
- Falls back seamlessly to `src/data/projects.ts` if offline or during initial SSR builds.

### 3. Contact Inquiries (`src/pages/Contact.tsx`)
- Validates form inputs through React Hook Form.
- Submits inquiries directly via EmailJS to the agency sales inbox with zero server dependencies.
- Validates credential presence and alerts the user gracefully if environment keys are missing.

### 4. Admin Panel & Authentication (`src/pages/AdminPanel.tsx`)
- Protected route accessible at `/admin`.
- Authentication powered by Firebase Google OAuth (`GoogleAuthProvider`).
- Requires authorization check against the `/admins/{uid}` document or authorized email list.

---

## 🛡️ Access Control & Security Guidelines

Production security rules are located in [`firestore.rules`](./firestore.rules):
- **Public Read**: Blog posts and published works are publicly readable by design.
- **Admin Write**: Content modifications require `isAdmin()` authorization.
- **Admin Whitelist**: The initial setup validates authorized administrative emails.

> [!TIP]
> **Recommended Production Enhancement (Custom Claims)**:
> For enterprise environments, migrate admin authorization from email checks in `firestore.rules` to Firebase Auth Custom Claims (`request.auth.token.admin == true`). This allows adding and revoking administrators via Firebase CLI or Cloud Functions without requiring rules redeployment.

---

## 🚨 Error Tracking & Observability

- **React Error Boundary**: All routes in `src/App.tsx` are wrapped with `src/components/common/ErrorBoundary.tsx`. If an unexpected runtime or render exception occurs, users are shown an elegant, brand-aligned recovery screen ("Reload Page" or "Return Home") rather than an unresponsive blank screen.
- **Centralized Telemetry**: `src/lib/errorTracking.ts` provides `captureException()` and `captureMessage()`.
- **Sentry Integration**: Simply add `VITE_SENTRY_DSN="https://..."` to your environment variables. The app automatically detects the DSN and initializes error dispatching.

---

## 📁 Repository Structure

```
├── public/                 # Static assets, WebP images, sitemap, robots.txt
├── scripts/
│   ├── prerender-ssr.js    # Production SSR static HTML generator
│   ├── generate-sitemap.ts # Automated canonical sitemap generator
│   └── optimize-images.ts  # Image optimization pipeline
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── common/         # ErrorBoundary, PageSkeleton, etc.
│   │   ├── layout/         # Navbar, Footer, FloatingButtons
│   │   └── admin/          # Admin dashboard tabs
│   ├── data/               # Static fallback datasets (posts.ts, projects.ts)
│   ├── hooks/              # Custom React hooks (useWorks, useScroll, etc.)
│   ├── lib/                # Utilities, Firebase, schema-helpers, error tracking
│   ├── pages/              # Application views & regional service pages
│   ├── App.tsx             # Root router, animated routes, ErrorBoundary
│   ├── index.css           # Tailwind CSS directives & global animations
│   ├── i18n.ts             # Internationalization config (EN, AR, DE)
│   └── main.tsx            # Client entry point
├── firestore.rules         # Firebase Security Rules for Firestore
└── vite.config.ts          # Vite build, SSR, and plugin configuration
```

---

## 🛠️ Development & Build Commands

```bash
# Clone the repository
git clone https://github.com/mintsweb2026-dotcom/mints-global.git
cd mintsglobal-webpage

# Install dependencies
npm install

# Start development server
npm run dev

# Run TypeScript type check
npm run lint

# Run production build (client bundle + SSR pre-rendering)
npm run build

# Preview production build locally
npm run preview
```

Visit `http://localhost:3000` in your browser for local development.

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
