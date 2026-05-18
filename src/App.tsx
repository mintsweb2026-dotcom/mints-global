/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { Contact } from './pages/Contact';
import { Services } from './pages/Services';
import { Work } from './pages/Portfolio';
import { Blog } from './pages/Blog';
import { About } from './pages/About';
import { DigitalMarketing } from './pages/DigitalMarketing';
import { SoftwareDevelopment } from './pages/SoftwareDevelopment';
import { CyberSecurity } from './pages/CyberSecurity';
import { BlogPost } from './pages/BlogPost';
import { SeoOptimization } from './pages/SeoOptimization';
import { SocialMediaMarketing } from './pages/SocialMediaMarketing';
import { PerformanceMarketing } from './pages/PerformanceMarketing';
import { BrandStrategy } from './pages/BrandStrategy';
import { VideoProduction } from './pages/VideoProduction';
import { PhotographyGraphics } from './pages/PhotographyGraphics';

import { WebApps } from './pages/WebApps';
import { MobileApps } from './pages/MobileApps';
import { WebsiteDevelopment } from './pages/WebsiteDevelopment';
import { ERPSolutions } from './pages/ERPSolutions';
import { CRMDevelopment } from './pages/CRMDevelopment';
import { Ecommerce } from './pages/Ecommerce';

import { OffensiveSecurity } from './pages/OffensiveSecurity';
import { IncidentResponse } from './pages/IncidentResponse';
import { ManagedAdvisory } from './pages/ManagedAdvisory';
import { ComplianceGRC } from './pages/ComplianceGRC';
import { CloudSecurity } from './pages/CloudSecurity';
import { OTIoTSecurity } from './pages/OTIoTSecurity';

import { SoftwareDevelopmentEurope } from './pages/europe/SoftwareDevelopment';
import { DigitalMarketingEurope } from './pages/europe/DigitalMarketing';
import { CyberSecurityEurope } from './pages/europe/CyberSecurity';

import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { Terms } from './pages/Terms';
import { Impressum } from './pages/Impressum';
import { ProjectDetail } from './pages/ProjectDetail';
import { NotFound } from './pages/NotFound';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
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
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
