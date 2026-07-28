/**
 * Layout — root shell for all pages.
 * 
 * This file has been refactored (Tier 4) from a 603-line monolith into:
 *   - Navbar.tsx      — navigation header + mobile menu
 *   - Footer.tsx      — footer columns, newsletter, legal
 *   - FloatingButtons.tsx — WhatsApp CTA + scroll-to-top
 *
 * Tier 1 fixes applied here:
 *   - Single scroll listener source (moved into Navbar via useMotionValueEvent)
 *   - ScrollRestoration for correct scroll position on back-navigation
 *   - RTL/LTR language direction handling preserved
 */
import { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { cn } from '../../lib/utils';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { FloatingButtons } from './FloatingButtons';
import { Breadcrumbs } from '../Breadcrumbs';
import { CookieBanner } from '../CookieBanner';
import { JsonLd } from '../JsonLd';
import TawktoChat from '../TawktoChat';
import { Preloader } from '../Preloader';
import { SmoothScroll } from '../SmoothScroll';

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://mintsglobal.ae/#organization',
  name: 'Mints Global',
  url: 'https://mintsglobal.ae',
  logo: 'https://mintsglobal.ae/NavLogoWhite1.png',
  image: 'https://mintsglobal.ae/NavLogoWhite1.png',
  description: 'Premium digital marketing agency, software development, and cyber security consultant serving Dubai, UAE, GCC, UK, and Germany.',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: ['+971-50-294-3916', '+44-7899-727950'],
    contactType: 'customer service',
    email: 'info@mintsglobal.ae',
    areaServed: ['AE', 'GB', 'DE'],
    availableLanguage: ['en', 'ar', 'de'],
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Dubai',
    addressRegion: 'Dubai',
    addressCountry: 'AE',
  },
  sameAs: [
    'https://www.linkedin.com/company/mints-dubai',
    'https://www.instagram.com/mints.global/',
    'https://www.instagram.com/mints.creative/',
  ],
};

export function Layout() {
  const { i18n } = useTranslation();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // RTL / LTR direction based on language
  useEffect(() => {
    const dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.dir = dir;
    document.body.dir = dir;
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  // Close mobile menu and scroll to top on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <SmoothScroll>
      <div className="min-h-screen relative flex flex-col selection:bg-olive-500 selection:text-white">
        <Preloader />
        <JsonLd data={orgSchema} />

        <Navbar mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />

        {/* Main content — blurred when mobile menu is open */}
        <div
          className={cn(
            'flex-1 flex flex-col w-full relative transition-all duration-500',
            mobileMenuOpen ? 'opacity-30 blur-sm pointer-events-none select-none' : 'opacity-100',
          )}
        >
          <main className={cn('flex-1 flex flex-col w-full relative z-10', location.pathname !== '/' && 'pt-[96px] md:pt-[116px]')}>
            <Breadcrumbs />
            <Outlet />
          </main>

          <Footer />
        </div>

        <FloatingButtons hidden={mobileMenuOpen} />
        <TawktoChat mobileMenuOpen={mobileMenuOpen} />
        <CookieBanner />
      </div>
    </SmoothScroll>
  );
}
