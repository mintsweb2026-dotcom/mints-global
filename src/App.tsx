/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { Layout } from './components/layout/Layout';

import { Home } from './pages/Home';
const Contact = lazy(() => import('./pages/Contact').then(m => ({ default: m.Contact })));
const Services = lazy(() => import('./pages/Services').then(m => ({ default: m.Services })));
const Work = lazy(() => import('./pages/Portfolio').then(m => ({ default: m.Work })));
const Blog = lazy(() => import('./pages/Blog').then(m => ({ default: m.Blog })));
const About = lazy(() => import('./pages/About').then(m => ({ default: m.About })));
const DigitalMarketing = lazy(() => import('./pages/DigitalMarketing').then(m => ({ default: m.DigitalMarketing })));
const SoftwareDevelopment = lazy(() => import('./pages/SoftwareDevelopment').then(m => ({ default: m.SoftwareDevelopment })));
const CyberSecurity = lazy(() => import('./pages/CyberSecurity').then(m => ({ default: m.CyberSecurity })));
const BlogPost = lazy(() => import('./pages/BlogPost').then(m => ({ default: m.BlogPost })));
const SeoOptimization = lazy(() => import('./pages/SeoOptimization').then(m => ({ default: m.SeoOptimization })));
const SocialMediaMarketing = lazy(() => import('./pages/SocialMediaMarketing').then(m => ({ default: m.SocialMediaMarketing })));
const PerformanceMarketing = lazy(() => import('./pages/PerformanceMarketing').then(m => ({ default: m.PerformanceMarketing })));
const BrandStrategy = lazy(() => import('./pages/BrandStrategy').then(m => ({ default: m.BrandStrategy })));
const VideoProduction = lazy(() => import('./pages/VideoProduction').then(m => ({ default: m.VideoProduction })));
const PhotographyGraphics = lazy(() => import('./pages/PhotographyGraphics').then(m => ({ default: m.PhotographyGraphics })));
const WebApps = lazy(() => import('./pages/WebApps').then(m => ({ default: m.WebApps })));
const MobileApps = lazy(() => import('./pages/MobileApps').then(m => ({ default: m.MobileApps })));
const WebsiteDevelopment = lazy(() => import('./pages/WebsiteDevelopment').then(m => ({ default: m.WebsiteDevelopment })));
const ERPSolutions = lazy(() => import('./pages/ERPSolutions').then(m => ({ default: m.ERPSolutions })));
const CRMDevelopment = lazy(() => import('./pages/CRMDevelopment').then(m => ({ default: m.CRMDevelopment })));
const Ecommerce = lazy(() => import('./pages/Ecommerce').then(m => ({ default: m.Ecommerce })));
const OffensiveSecurity = lazy(() => import('./pages/OffensiveSecurity').then(m => ({ default: m.OffensiveSecurity })));
const IncidentResponse = lazy(() => import('./pages/IncidentResponse').then(m => ({ default: m.IncidentResponse })));
const ManagedAdvisory = lazy(() => import('./pages/ManagedAdvisory').then(m => ({ default: m.ManagedAdvisory })));
const ComplianceGRC = lazy(() => import('./pages/ComplianceGRC').then(m => ({ default: m.ComplianceGRC })));
const CloudSecurity = lazy(() => import('./pages/CloudSecurity').then(m => ({ default: m.CloudSecurity })));
const OTIoTSecurity = lazy(() => import('./pages/OTIoTSecurity').then(m => ({ default: m.OTIoTSecurity })));
const SoftwareDevelopmentEurope = lazy(() => import('./pages/europe/SoftwareDevelopment').then(m => ({ default: m.SoftwareDevelopmentEurope })));
const DigitalMarketingEurope = lazy(() => import('./pages/europe/DigitalMarketing').then(m => ({ default: m.DigitalMarketingEurope })));
const CyberSecurityEurope = lazy(() => import('./pages/europe/CyberSecurity').then(m => ({ default: m.CyberSecurityEurope })));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy').then(m => ({ default: m.PrivacyPolicy })));
const Terms = lazy(() => import('./pages/Terms').then(m => ({ default: m.Terms })));
const Impressum = lazy(() => import('./pages/Impressum').then(m => ({ default: m.Impressum })));
const ProjectDetail = lazy(() => import('./pages/ProjectDetail').then(m => ({ default: m.ProjectDetail })));
const AdminPanel = lazy(() => import('./pages/AdminPanel').then(m => ({ default: m.AdminPanel })));
const NotFound = lazy(() => import('./pages/NotFound').then(m => ({ default: m.NotFound })));

// ─── Page transition animation ────────────────────────────────────────────────
function AnimatedOutlet() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
        style={{ minHeight: '100%' }}
      >
        <Suspense fallback={<PageSkeleton />}>
          <Routes location={location}>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="services" element={<Services />} />
              <Route path="digital-marketing" element={<DigitalMarketing />} />
              <Route path="digital-marketing/seo" element={<SeoOptimization />} />
              <Route path="digital-marketing/smm" element={<SocialMediaMarketing />} />
              <Route path="digital-marketing/performance-marketing" element={<PerformanceMarketing />} />
              <Route path="digital-marketing/branding" element={<BrandStrategy />} />
              <Route path="digital-marketing/video-production" element={<VideoProduction />} />
              <Route path="digital-marketing/photography-graphics" element={<PhotographyGraphics />} />

              <Route path="software-development" element={<SoftwareDevelopment />} />
              <Route path="software-development/web-apps" element={<WebApps />} />
              <Route path="software-development/mobile-apps" element={<MobileApps />} />
              <Route path="software-development/website-development" element={<WebsiteDevelopment />} />
              <Route path="software-development/erp-solutions" element={<ERPSolutions />} />
              <Route path="software-development/crm-development" element={<CRMDevelopment />} />
              <Route path="software-development/ecommerce" element={<Ecommerce />} />

              <Route path="cyber-security" element={<CyberSecurity />} />
              <Route path="cyber-security/offensive-security" element={<OffensiveSecurity />} />
              <Route path="cyber-security/incident-response" element={<IncidentResponse />} />
              <Route path="cyber-security/managed-advisory" element={<ManagedAdvisory />} />
              <Route path="cyber-security/compliance-grc" element={<ComplianceGRC />} />
              <Route path="cyber-security/cloud-security" element={<CloudSecurity />} />
              <Route path="cyber-security/ot-iot-security" element={<OTIoTSecurity />} />

              <Route path="europe-services/software-development" element={<SoftwareDevelopmentEurope />} />
              <Route path="europe-services/digital-marketing" element={<DigitalMarketingEurope />} />
              <Route path="europe-services/cyber-security" element={<CyberSecurityEurope />} />

              <Route path="privacy-policy" element={<PrivacyPolicy />} />
              <Route path="terms-of-service" element={<Terms />} />
              <Route path="impressum" element={<Impressum />} />

              <Route path="work" element={<Work />} />
              <Route path="work/:id" element={<ProjectDetail />} />
              <Route path="blog" element={<Blog />} />
              <Route path="blog/:slug" element={<BlogPost />} />
              <Route path="contact" element={<Contact />} />
              <Route path="admin" element={<AdminPanel />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Suspense>
      </motion.div>
    </AnimatePresence>
  );
}

// ─── Minimal page skeleton shown during lazy-load ─────────────────────────────
function PageSkeleton() {
  return (
    <div className="min-h-screen bg-olive-950 flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-2 border-olive-500/30 border-t-olive-500 rounded-full animate-spin" />
        <span className="text-brand-white-40 text-xs uppercase tracking-widest font-bold">Loading</span>
      </div>
    </div>
  );
}

// ─── AppRoutes — used by both CSR (BrowserRouter) and SSR (StaticRouter) ─────
export function AppRoutes() {
  return <AnimatedOutlet />;
}

// ─── Default export wraps with BrowserRouter for CSR dev mode ─────────────────
export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
