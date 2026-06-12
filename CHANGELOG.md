# Mints Global Website — Changelog

All notable changes to the Mints Global website are documented in this file.
Format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

---

## [1.3.0] — 2026-06-12

### Summary

This release covers three major areas:

1. **Asset Infrastructure Stabilization** — resolved corrupted image fallback files and cleaned the SafeImage component
2. **Build Performance** — split monolithic 2.2 MB JS bundle into 15 lazy-loaded vendor chunks
3. **Full Responsiveness Audit** — fixed mobile overflow and text-scaling issues across all pages

---

### Fixed

#### Asset and Image Infrastructure

- Detected all WebP and JPG files in /public were corrupted (contained UTF-8 replacement chars from prior text-encoding writes)
- Replaced all corrupted root-level images with fresh verified PNG assets:
  - public/hero.png — dark-green tech background for hero section
  - public/favicon-96x96.png — branding mark
  - public/crm-blog-image.png — CRM dashboard illustration
  - public/zero-trust-security.png — cybersecurity illustration
  - public/og-image.jpg — social Open Graph preview card
- Verified all 20 /public/executives/*.webp team photos pass binary magic-byte check (RIFF header) — all clean
- Updated Home.tsx fallback paths from .webp to .png for all 7 SafeImage components

#### SafeImage Component

- Removed all diagnostic console.log statements — component is now production-clean
- Component correctly falls back to local /public assets when CDN images fail to load

#### Responsiveness

- Home.tsx — Testimonial quote: text-2xl overflowed on 320-375px → fixed to text-xl sm:text-2xl md:text-4xl
- Home.tsx — Final CTA heading: text-4xl too large on mobile → text-3xl sm:text-4xl md:text-6xl lg:text-7xl
- Home.tsx — CTA body paragraph: added intermediate breakpoint → text-lg md:text-xl lg:text-2xl
- SeoOptimization.tsx — Hero CTA buttons: missing flex-wrap caused overflow on narrow screens
- SeoOptimization.tsx — SEO Service Stack grid: fixed tablet layout sm:grid-cols-2 lg:grid-cols-4

#### CSS Utilities

- Added .no-scrollbar — cross-browser utility used in Blog pagination
- Added .custom-scrollbar — olive-green thin scrollbar for BlogPost TOC sidebar
- Added .line-clamp-2 and .line-clamp-3 with standard line-clamp for cross-browser compatibility

---

### Added

#### Build Optimization

- Implemented manualChunks in Rollup output to split the 2.2 MB monolith into 15 vendor chunks:
  - vendor-firebase: 524 KB / 122 KB gzip
  - vendor-misc (React+ReactDOM): 310 KB / 102 KB gzip
  - index (app code): 478 KB / 95 KB gzip
  - vendor-charts (Recharts): 283 KB / 79 KB gzip
  - vendor-motion (Framer Motion): 137 KB / 45 KB gzip
  - vendor-markdown (react-markdown+remark): 125 KB / 36 KB gzip
  - vendor-forms (Zod+react-hook-form): 90 KB / 27 KB gzip
  - vendor-i18n (i18next): 56 KB / 18 KB gzip
  - vendor-media (browser-image-compression): 53 KB / 21 KB gzip
  - vendor-router (React Router): 37 KB / 13 KB gzip
  - vendor-scroll (Lenis+react-countup): 32 KB / 10 KB gzip
  - vendor-utils (clsx+tailwind-merge): 28 KB / 9 KB gzip
  - vendor-icons (Lucide React): 24 KB / 5 KB gzip
  - vendor-seo (react-helmet-async): 14 KB / 5 KB gzip
  - vendor-emailjs: 4 KB / 1 KB gzip
- Set chunkSizeWarningLimit: 600 (appropriate for project chunk profile)
- Resolved circular chunk warning from vendor-react rule

---

### Audited — No Changes Required

The following were code-audited and confirmed fully responsive and functional:

- All 18 service sub-pages: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ✅
- Navigation mobile menu (full-screen overlay + accordion sub-menus) ✅
- Language switcher EN/AR/DE with RTL/LTR direction switching ✅
- Contact 3-step form (Zod validation + EmailJS + Tawk.to) ✅
- Blog index + tag filter + pagination ✅
- BlogPost (TOC, markdown rendering, related posts) ✅
- Portfolio lightbox (keyboard nav + multi-image) ✅
- About page (CountUp stats + team grid + regions) ✅
- Footer 4-column responsive grid ✅
- All 34 registered routes in App.tsx ✅
- All 20 executive team photos (binary validated) ✅

---

### Known Non-Critical Items

- Firebase vendor chunk is 524 KB — SDK minimum, cannot be reduced without changing data layer
- App index.js is 478 KB — future improvement: use React.lazy() + Suspense for page-level code splitting

---

## [1.2.0] — 2026-06-05

### Added in 1.2.0

- Google Analytics (gtag.js) integration via index.html
- Full SEO metadata for all pages (canonical, OG, Twitter Card)
- JSON-LD structured data: Organization, LocalBusiness, ProfessionalService, FAQPage, BreadcrumbList

---

## [1.1.0] — 2026-06-04

### Added in 1.1.0

- Full Arabic (RTL) and German localization for the About page
- i18n translation keys for all UI strings

### Fixed in 1.1.0

- Mobile responsiveness on Contact and Portfolio pages

---

## [1.0.0] — 2026-05-31

### Added in 1.0.0

- Initial production release
- Homepage with hero, capabilities, stats, testimonials, blog preview, global reach, CTA
- 34 page routes covering all service verticals
- Mega-menu navigation (3-column dropdown)
- Mobile accordion navigation
- Tawk.to live chat integration
- Cookie consent banner
- WhatsApp float button
- Preloader animation + smooth scroll via Lenis
- Firebase Firestore blog and portfolio data fetching
- EmailJS contact form with 3-step wizard
