import { useEffect, useState } from 'react';
import { Outlet, Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'motion/react';
import { Menu, X, ArrowUpRight, MessageCircle, Leaf, Code2, ShieldAlert, ArrowUp, Linkedin, Instagram, Globe, ChevronDown, MapPin, Phone, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { cn } from '../../lib/utils';
import { Logo } from '../Logo';
import { Breadcrumbs } from '../Breadcrumbs';

import { CookieBanner } from '../CookieBanner';
import { JsonLd } from '../JsonLd';
import TawktoChat from '../TawktoChat';
import { Preloader } from '../Preloader';
import { SmoothScroll } from '../SmoothScroll';
import { NewsletterForm } from '../NewsletterForm';

function MobileAccordion({ id, title, links, closeMenu, isOpen, onToggle }: { id: string, title: string, links: {path: string, label: string}[], closeMenu: () => void, isOpen: boolean, onToggle: (id: string | null) => void }) {
  return (
    <div>
      <button onClick={() => onToggle(isOpen ? null : id)} className="w-full text-left text-brand-white-70 hover:text-white cursor-pointer list-none flex items-center justify-between focus:outline-none">
        {title} <ChevronDown size={16} className={cn("transition-transform duration-300", isOpen ? "rotate-180" : "")}/>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="flex flex-col gap-3 pt-3 pl-4 border-l border-white/10 mt-2 text-sm text-brand-white-40">
              {links.map((link, i) => (
                <Link key={i} to={link.path} onClick={closeMenu}>{link.label}</Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Layout() {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMobileSection, setOpenMobileSection] = useState<string | null>(null);
  const location = useLocation();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
  });

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://mintsglobal.ae/#organization",
    "name": "Mints Global",
    "url": "https://mintsglobal.ae",
    "logo": "https://mintsglobal.ae/NavLogoWhite1.png",
    "image": "https://mintsglobal.ae/NavLogoWhite1.png",
    "description": "Premium digital marketing agency, software development, and cyber security consultant serving Dubai, UAE, GCC, UK, and Germany.",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": ["+971-50-294-3916", "+44-7899-727950"],
      "contactType": "customer service",
      "email": "info@mintsglobal.ae",
      "areaServed": ["AE", "GB", "DE"],
      "availableLanguage": ["en", "ar", "de"]
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Dubai",
      "addressRegion": "Dubai",
      "addressCountry": "AE"
    },
    "sameAs": [
      "https://www.linkedin.com/company/mints-dubai",
      "https://www.instagram.com/mints.global/",
      "https://www.instagram.com/mints.creative/"
    ]
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // RTL Direction Logic
  useEffect(() => {
    const dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.dir = dir;
    document.body.dir = dir;
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  // Close menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <SmoothScroll>
    <div className="min-h-screen flex flex-col selection:bg-olive-500 selection:text-white">
      <Preloader />
      <JsonLd data={orgSchema} />
      {/* Route Change Loading Bar Simulator (pure visual) */}
      <div className="fixed top-0 left-0 h-1 bg-olive-500 z-50 transition-all duration-300 w-full origin-left scale-x-0 animate-pulse" />

      {/* Navigation */}
      <motion.header
        variants={{
          visible: { y: 0 },
          hidden: { y: '-100%' }
        }}
        animate={isHidden ? 'hidden' : 'visible'}
        transition={{ duration: 0.35, ease: 'easeInOut' }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-colors duration-300',
          isScrolled ? 'bg-olive-950/85 backdrop-blur-xl py-4 border-b border-white/10' : 'bg-transparent py-6'
        )}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
          <Link to="/" className="z-50 hover:opacity-80 transition-opacity">
            <Logo className="text-[3rem]" />
          </Link>

          {/* Desktop Nav */}
          <nav aria-label="Main Navigation" className="hidden md:flex items-center gap-8 font-display font-medium relative group">
            <div className="relative group/nav">
              <NavLink to="/services" className={({ isActive }) => cn("hover:text-olive-500 transition-colors py-6 relative flex items-center gap-1 text-lg font-black", isActive ? "text-olive-500 after:content-[''] after:absolute after:bottom-[18px] after:left-0 after:right-0 after:h-[2px] after:bg-olive-500 after:rounded-full" : "text-brand-white")}>{t('nav.services')} <ChevronDown size={14} /></NavLink>
              {/* Mega Menu */}
              <div className="absolute top-[100%] left-1/2 -translate-x-1/2 pt-6 w-[1100px] max-w-[90vw] opacity-0 invisible group-hover/nav:opacity-100 group-hover/nav:visible transition-all duration-300 z-50">
                <div className="bg-olive-950 border border-white/10 rounded-2xl p-8 shadow-2xl overflow-hidden">
                  <div className="grid grid-cols-3 gap-12">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-4">
                      <div className="w-10 h-10 rounded border border-white/10 flex items-center justify-center bg-white/5">
                        <Leaf className="text-olive-500" size={18} />
                      </div>
                      <h4 className="text-brand-white text-sm font-display font-bold uppercase tracking-wider">DIGITAL MARKETING</h4>
                    </div>
                    <ul className="space-y-6">
                      <li>
                        <Link to="/digital-marketing/seo" className="group block">
                          <div className="font-bold text-sm text-brand-white group-hover:text-olive-500 transition-colors uppercase">SEO OPTIMIZATION</div>
                          <div className="text-[10px] text-brand-white-40 mt-1 uppercase tracking-wider">DOMINATING SEARCH & AUTHORITY BUILDING.</div>
                        </Link>
                      </li>
                      <li>
                        <Link to="/digital-marketing/performance-marketing" className="group block">
                          <div className="font-bold text-sm text-brand-white group-hover:text-olive-500 transition-colors uppercase">PERFORMANCE MARKETING</div>
                          <div className="text-[10px] text-brand-white-40 mt-1 uppercase tracking-wider">DATA-DRIVEN ROI, LEAD GEN, AND COMMERCIAL SCALING.</div>
                        </Link>
                      </li>
                      <li>
                        <Link to="/digital-marketing/smm" className="group block">
                          <div className="font-bold text-sm text-brand-white group-hover:text-olive-500 transition-colors uppercase">SOCIAL MEDIA MARKETING</div>
                          <div className="text-[10px] text-brand-white-40 mt-1 uppercase tracking-wider">BUILDING COMMUNITY & BRAND EQUITY.</div>
                        </Link>
                      </li>
                      <li>
                        <Link to="/digital-marketing/branding" className="group block">
                          <div className="font-bold text-sm text-brand-white group-hover:text-olive-500 transition-colors uppercase">BRAND STRATEGY</div>
                          <div className="text-[10px] text-brand-white-40 mt-1 uppercase tracking-wider">CRAFTING BOLD IDENTITIES AND POSITIONING.</div>
                        </Link>
                      </li>
                      <li>
                        <Link to="/digital-marketing/video-production" className="group block">
                          <div className="font-bold text-sm text-brand-white group-hover:text-olive-500 transition-colors uppercase">VIDEO PRODUCTION</div>
                          <div className="text-[10px] text-brand-white-40 mt-1 uppercase tracking-wider">HIGH-IMPACT CINEMATIC STORYTELLING.</div>
                        </Link>
                      </li>
                      <li>
                        <Link to="/digital-marketing/photography-graphics" className="group block">
                          <div className="font-bold text-sm text-brand-white group-hover:text-olive-500 transition-colors uppercase">PHOTOGRAPHY & GRAPHICS</div>
                          <div className="text-[10px] text-brand-white-40 mt-1 uppercase tracking-wider">ELITE VISUAL PRODUCTION AND DESIGN.</div>
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-4">
                      <div className="w-10 h-10 rounded border border-white/10 flex items-center justify-center bg-white/5">
                        <Code2 className="text-olive-500" size={18} />
                      </div>
                      <h4 className="text-brand-white text-sm font-display font-bold uppercase tracking-wider">SOFTWARE DEVELOPMENT</h4>
                    </div>
                    <ul className="space-y-6">
                      <li>
                        <Link to="/software-development/web-apps" className="group block">
                          <div className="font-bold text-sm text-brand-white group-hover:text-olive-500 transition-colors uppercase">WEB APPLICATIONS</div>
                          <div className="text-[10px] text-brand-white-40 mt-1 uppercase tracking-wider">POWERFUL, SCALABLE WEB SOLUTIONS.</div>
                        </Link>
                      </li>
                      <li>
                        <Link to="/software-development/mobile-apps" className="group block">
                          <div className="font-bold text-sm text-brand-white group-hover:text-olive-500 transition-colors uppercase">MOBILE APPLICATIONS</div>
                          <div className="text-[10px] text-brand-white-40 mt-1 uppercase tracking-wider">NATIVE IOS & ANDROID EXPERIENCES.</div>
                        </Link>
                      </li>
                      <li>
                        <Link to="/software-development/website-development" className="group block">
                          <div className="font-bold text-sm text-brand-white group-hover:text-olive-500 transition-colors uppercase">WEBSITE DEVELOPMENT</div>
                          <div className="text-[10px] text-brand-white-40 mt-1 uppercase tracking-wider">WORDPRESS, SHOPIFY & CUSTOM CODE.</div>
                        </Link>
                      </li>
                      <li>
                        <Link to="/software-development/erp-solutions" className="group block">
                          <div className="font-bold text-sm text-brand-white group-hover:text-olive-500 transition-colors uppercase">ERP SOLUTIONS</div>
                          <div className="text-[10px] text-brand-white-40 mt-1 uppercase tracking-wider">UAE VAT COMPLIANT BUSINESS ENGINES.</div>
                        </Link>
                      </li>
                      <li>
                        <Link to="/software-development/crm-development" className="group block">
                          <div className="font-bold text-sm text-brand-white group-hover:text-olive-500 transition-colors uppercase">CRM DEVELOPMENT</div>
                          <div className="text-[10px] text-brand-white-40 mt-1 uppercase tracking-wider">TAILORED CUSTOMER MANAGEMENT.</div>
                        </Link>
                      </li>
                      <li>
                        <Link to="/software-development/ecommerce" className="group block">
                          <div className="font-bold text-sm text-brand-white group-hover:text-olive-500 transition-colors uppercase">E-COMMERCE</div>
                          <div className="text-[10px] text-brand-white-40 mt-1 uppercase tracking-wider">HIGH-PERFORMANCE BESPOKE STORES.</div>
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-4">
                      <div className="w-10 h-10 rounded border border-white/10 flex items-center justify-center bg-white/5">
                        <ShieldAlert className="text-olive-500" size={18} />
                      </div>
                      <h4 className="text-brand-white text-sm font-display font-bold uppercase tracking-wider">CYBER SECURITY</h4>
                    </div>
                    <ul className="space-y-6">
                      <li>
                        <Link to="/cyber-security/offensive-security" className="group block">
                          <div className="font-bold text-sm text-brand-white group-hover:text-olive-500 transition-colors uppercase">OFFENSIVE SECURITY</div>
                          <div className="text-[10px] text-brand-white-40 mt-1 uppercase tracking-wider">PEN-TESTING, RED TEAMING, AND VULNERABILITY ASSESSMENTS.</div>
                        </Link>
                      </li>
                      <li>
                        <Link to="/cyber-security/incident-response" className="group block">
                          <div className="font-bold text-sm text-brand-white group-hover:text-olive-500 transition-colors uppercase">INCIDENT RESPONSE</div>
                          <div className="text-[10px] text-brand-white-40 mt-1 uppercase tracking-wider">RAPID RESPONSE AND DIGITAL FORENSICS.</div>
                        </Link>
                      </li>
                      <li>
                        <Link to="/cyber-security/managed-advisory" className="group block">
                          <div className="font-bold text-sm text-brand-white group-hover:text-olive-500 transition-colors uppercase">MANAGED & ADVISORY</div>
                          <div className="text-[10px] text-brand-white-40 mt-1 uppercase tracking-wider">EXPERT SECURITY LEADERSHIP AND STRATEGIC GUIDANCE.</div>
                        </Link>
                      </li>
                      <li>
                        <Link to="/cyber-security/compliance-grc" className="group block">
                          <div className="font-bold text-sm text-brand-white group-hover:text-olive-500 transition-colors uppercase">COMPLIANCE & GRC</div>
                          <div className="text-[10px] text-brand-white-40 mt-1 uppercase tracking-wider">UAE NESA, PDPL, ISO 27001, AND GDPR.</div>
                        </Link>
                      </li>
                      <li>
                        <Link to="/cyber-security/cloud-security" className="group block">
                          <div className="font-bold text-sm text-brand-white group-hover:text-olive-500 transition-colors uppercase">CLOUD SECURITY</div>
                          <div className="text-[10px] text-brand-white-40 mt-1 uppercase tracking-wider">AWS, AZURE, AND GCP PROTECTION & ENCRYPTION.</div>
                        </Link>
                      </li>
                      <li>
                        <Link to="/cyber-security/ot-iot-security" className="group block">
                          <div className="font-bold text-sm text-brand-white group-hover:text-olive-500 transition-colors uppercase">OT / IOT SECURITY</div>
                          <div className="text-[10px] text-brand-white-40 mt-1 uppercase tracking-wider">CONTROLS FOR INDUSTRIAL SYSTEMS, ENERGY & UTILITIES.</div>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                </div>
              </div>
            </div>
            <NavLink to="/work" className={({ isActive }) => cn("hover:text-olive-500 transition-colors py-6 relative text-lg font-black", isActive ? "text-olive-500 after:content-[''] after:absolute after:bottom-[18px] after:left-0 after:right-0 after:h-[2px] after:bg-olive-500 after:rounded-full" : "text-brand-white")}>{t('nav.work')}</NavLink>
            <NavLink to="/about" className={({ isActive }) => cn("hover:text-olive-500 transition-colors py-6 relative text-lg font-black", isActive ? "text-olive-500 after:content-[''] after:absolute after:bottom-[18px] after:left-0 after:right-0 after:h-[2px] after:bg-olive-500 after:rounded-full" : "text-brand-white")}>{t('nav.about')}</NavLink>
            <NavLink to="/blog" className={({ isActive }) => cn("hover:text-olive-500 transition-colors py-6 relative text-lg font-black", isActive ? "text-olive-500 after:content-[''] after:absolute after:bottom-[18px] after:left-0 after:right-0 after:h-[2px] after:bg-olive-500 after:rounded-full" : "text-brand-white")}>{t('nav.blog')}</NavLink>
          </nav>

          <div className="flex items-center gap-4 md:gap-6 z-50">
            <div className="hidden md:block relative group/lang cursor-pointer z-50">
              <div className="flex items-center gap-2 bg-white/10 hover:bg-white/20 transition-colors rounded-full px-4 py-2 text-xs font-bold font-body">
                <Globe size={16} />
                <span className="uppercase">{i18n.language || 'EN'}</span>
                <ChevronDown size={14} className="opacity-50" />
              </div>
              <div className="absolute top-[100%] right-0 pt-2 opacity-0 invisible group-hover/lang:opacity-100 group-hover/lang:visible transition-all duration-300">
                <div className="bg-olive-950 border border-white/10 rounded-xl p-2 shadow-xl flex flex-col gap-1 min-w-[120px]">
                  <button 
                    onClick={() => changeLanguage('en')} 
                    className={cn(
                      "px-4 py-2 text-left rounded-lg transition-colors text-sm font-bold flex items-center justify-between",
                      i18n.language === 'en' ? "bg-olive-500 text-white" : "hover:bg-white/10 text-brand-white"
                    )}
                  >
                    English
                  </button>
                  <button 
                    onClick={() => changeLanguage('ar')} 
                    className={cn(
                      "px-4 py-2 text-left rounded-lg transition-colors text-sm font-bold flex items-center justify-between",
                      i18n.language === 'ar' ? "bg-olive-500 text-white" : "hover:bg-white/10 text-brand-white"
                    )}
                  >
                    العربية
                  </button>
                  <button 
                    onClick={() => changeLanguage('de')} 
                    className={cn(
                      "px-4 py-2 text-left rounded-lg transition-colors text-sm font-bold flex items-center justify-between",
                      i18n.language === 'de' ? "bg-olive-500 text-white" : "hover:bg-white/10 text-brand-white"
                    )}
                  >
                    Deutsch
                  </button>
                </div>
              </div>
            </div>

            <Link 
              to="/contact" 
              className="bg-brand-white text-olive-950 px-5 py-2 md:px-7 md:py-2.5 rounded-full text-[10px] md:text-xs uppercase tracking-widest font-display font-black hover:bg-olive-500 hover:text-white transition-all transform hover:scale-105 inline-block text-center whitespace-nowrap"
            >
              {t('nav.cta')}
            </Link>

            {/* Mobile menu button */}
            <button 
              className="md:hidden z-50 text-white hover:text-olive-500 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-olive-950/95 flex justify-center items-center backdrop-blur-3xl px-6"
          >
            <nav aria-label="Mobile Navigation" className="flex flex-col gap-6 text-center text-2xl font-display font-bold max-h-[80vh] overflow-y-auto w-full pb-20">
              <Link to="/services" onClick={() => setMobileMenuOpen(false)} className="hover:text-olive-500 uppercase">{t('nav.services')}</Link>
              <div className="flex flex-col gap-3 mt-2 mb-4 border-l border-white/20 pl-4 text-left w-3/4 mx-auto text-[1rem] font-body font-semibold">
                 <MobileAccordion 
                   id="digital-marketing" 
                   title="Digital Marketing" 
                   isOpen={openMobileSection === 'digital-marketing'} 
                   onToggle={setOpenMobileSection}
                   links={[
                   { path: '/digital-marketing/seo', label: 'SEO Optimization' },
                   { path: '/digital-marketing/performance-marketing', label: 'Performance Marketing' },
                   { path: '/digital-marketing/smm', label: 'Social Media Marketing' },
                   { path: '/digital-marketing/branding', label: 'Brand Strategy' },
                   { path: '/digital-marketing/video-production', label: 'Video Production' },
                   { path: '/digital-marketing/photography-graphics', label: 'Photography' }
                 ]} closeMenu={() => setMobileMenuOpen(false)} />
                 
                 <MobileAccordion 
                   id="software-dev" 
                   title="Software Dev" 
                   isOpen={openMobileSection === 'software-dev'} 
                   onToggle={setOpenMobileSection}
                   links={[
                   { path: '/software-development/web-apps', label: 'Web Apps' },
                   { path: '/software-development/mobile-apps', label: 'Mobile Apps' },
                   { path: '/software-development/website-development', label: 'Website Dev' },
                   { path: '/software-development/erp-solutions', label: 'ERP Solutions' },
                   { path: '/software-development/crm-development', label: 'CRM' },
                   { path: '/software-development/ecommerce', label: 'E-Commerce' }
                 ]} closeMenu={() => setMobileMenuOpen(false)} />

                 <MobileAccordion 
                   id="cyber-security" 
                   title="Cyber Security" 
                   isOpen={openMobileSection === 'cyber-security'} 
                   onToggle={setOpenMobileSection}
                   links={[
                   { path: '/cyber-security/offensive-security', label: 'Offensive Security' },
                   { path: '/cyber-security/incident-response', label: 'Incident Response' },
                   { path: '/cyber-security/managed-advisory', label: 'Advisory' },
                   { path: '/cyber-security/compliance-grc', label: 'Compliance & GRC' },
                   { path: '/cyber-security/cloud-security', label: 'Cloud Security' },
                   { path: '/cyber-security/ot-iot-security', label: 'IoT Security' }
                 ]} closeMenu={() => setMobileMenuOpen(false)} />
              </div>

              <Link to="/work" onClick={() => setMobileMenuOpen(false)} className="hover:text-olive-500 uppercase">{t('nav.work')}</Link>
              <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="hover:text-olive-500 uppercase">{t('nav.about')}</Link>
              <Link to="/blog" onClick={() => setMobileMenuOpen(false)} className="hover:text-olive-500 uppercase">{t('nav.blog')}</Link>
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-olive-500 uppercase">{t('nav.contact')}</Link>
              
              <div className="mt-8 flex justify-center gap-2 bg-white/10 rounded-full p-1 text-sm font-body w-fit mx-auto" dir="ltr">
                 <button onClick={() => changeLanguage('en')} className={cn("px-4 py-2 rounded-full transition-colors", i18n.language === 'en' ? "bg-olive-500 text-white" : "text-white/50 hover:text-white")}>EN</button>
                 <button onClick={() => changeLanguage('ar')} className={cn("px-4 py-2 rounded-full transition-colors", i18n.language === 'ar' ? "bg-olive-500 text-white" : "text-white/50 hover:text-white")}>AR</button>
                 <button onClick={() => changeLanguage('de')} className={cn("px-4 py-2 rounded-full transition-colors", i18n.language === 'de' ? "bg-olive-500 text-white" : "text-white/50 hover:text-white")}>DE</button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content Wrapper for Fade Effect */}
      <div 
        className={cn(
          "flex-1 flex flex-col w-full relative transition-all duration-500",
          mobileMenuOpen ? "opacity-30 blur-sm pointer-events-none select-none" : "opacity-100"
        )}
      >
        {/* Main Content */}
        <main className={cn("flex-1 flex flex-col w-full relative z-10", location.pathname !== '/' && "pt-[96px] md:pt-[116px]")}>
          <Breadcrumbs />
          <Outlet />
        </main>

      {/* Footer */}
      <footer className="bg-olive-900 border-t border-white/5 pt-16 pb-8 md:pt-24 mt-20">
         <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16">
           <NewsletterForm />
         </div>
         <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
           
           {/* Column 1: Logo & Intro */}
           <div className="lg:col-span-3 space-y-6">
              <Link to="/" className="block hover:opacity-80 transition-opacity w-fit">
                <Logo className="text-[3rem]" />
              </Link>
              <p className="text-brand-white-70 max-w-sm">
                 Weaving technical precision into creative vision. Your trusted digital partner in Dubai.
              </p>
              <div className="flex gap-4">
                 <a href="https://www.instagram.com/mints.global/" target="_blank" rel="noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-olive-500 hover:border-olive-500 hover:scale-110 transition-all text-brand-white-70 hover:text-white">
                   <Instagram size={18} />
                 </a>
                 <a href="https://www.linkedin.com/company/mints-dubai" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-olive-500 hover:border-olive-500 hover:scale-110 transition-all text-brand-white-70 hover:text-white">
                   <Linkedin size={18} />
                 </a>
              </div>
           </div>
           
           {/* Column 2: Services */}
           <div className="lg:col-span-4 lg:ml-4">
             <h4 className="font-display text-lg font-bold mb-6 uppercase tracking-wider text-white">Services</h4>
             <nav aria-label="Footer Services" className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 text-sm">
               <ul className="space-y-4 text-brand-white-70">
                 <li><Link to="/digital-marketing/seo" className="hover:text-white transition-colors">SEO OPTIMIZATION</Link></li>
                 <li><Link to="/digital-marketing/smm" className="hover:text-white transition-colors">SOCIAL MEDIA MARKETING</Link></li>
                 <li><Link to="/digital-marketing/video-production" className="hover:text-white transition-colors">VIDEO PRODUCTION</Link></li>
                 <li><Link to="/software-development/web-apps" className="hover:text-white transition-colors">WEB APPLICATIONS</Link></li>
                 <li><Link to="/software-development/website-development" className="hover:text-white transition-colors">WEBSITE DEVELOPMENT</Link></li>
                 <li><Link to="/software-development/crm-development" className="hover:text-white transition-colors">CRM DEVELOPMENT</Link></li>
                 <li><Link to="/cyber-security/offensive-security" className="hover:text-white transition-colors">OFFENSIVE SECURITY</Link></li>
                 <li><Link to="/cyber-security/managed-advisory" className="hover:text-white transition-colors">MANAGED & ADVISORY</Link></li>
                 <li><Link to="/cyber-security/cloud-security" className="hover:text-white transition-colors">CLOUD SECURITY</Link></li>
               </ul>
               <ul className="space-y-4 text-brand-white-70">
                 <li><Link to="/digital-marketing/performance-marketing" className="hover:text-white transition-colors">PERFORMANCE MARKETING</Link></li>
                 <li><Link to="/digital-marketing/branding" className="hover:text-white transition-colors">BRAND STRATEGY</Link></li>
                 <li><Link to="/digital-marketing/photography-graphics" className="hover:text-white transition-colors">PHOTOGRAPHY & GRAPHICS</Link></li>
                 <li><Link to="/software-development/mobile-apps" className="hover:text-white transition-colors">MOBILE APPLICATIONS</Link></li>
                 <li><Link to="/software-development/erp-solutions" className="hover:text-white transition-colors">ERP SOLUTIONS</Link></li>
                 <li><Link to="/software-development/ecommerce" className="hover:text-white transition-colors">E-COMMERCE</Link></li>
                 <li><Link to="/cyber-security/incident-response" className="hover:text-white transition-colors">INCIDENT RESPONSE</Link></li>
                  <li><Link to="/cyber-security/compliance-grc" className="hover:text-white transition-colors">COMPLIANCE & GRC</Link></li>
                 <li><Link to="/cyber-security/ot-iot-security" className="hover:text-white transition-colors">OT / IOT SECURITY</Link></li>
               </ul>
             </nav>
           </div>

           {/* Column 3: Global Service & Company */}
           <div className="lg:col-span-2">
             <h4 className="font-display text-lg font-bold mb-6 uppercase tracking-wider text-white">Global Service</h4>
             <nav aria-label="Footer Global Services">
               <ul className="space-y-4 text-sm text-brand-white-70 mb-10">
                 <li><Link to="/europe-services/software-development" className="hover:text-white transition-colors uppercase">Software Development</Link></li>
                 <li><Link to="/europe-services/digital-marketing" className="hover:text-white transition-colors uppercase">Digital Marketing</Link></li>
                 <li><Link to="/europe-services/cyber-security" className="hover:text-white transition-colors uppercase">Cyber Security</Link></li>
               </ul>
             </nav>
             <h4 className="font-display text-lg font-bold mb-6 uppercase tracking-wider text-white">Company</h4>
             <nav aria-label="Footer Company">
               <ul className="space-y-4 text-sm text-brand-white-70">
                 <li><Link to="/about" className="hover:text-white transition-colors uppercase">About Us</Link></li>
                 <li><Link to="/work" className="hover:text-white transition-colors uppercase">Our Work</Link></li>
                 <li><Link to="/services" className="hover:text-white transition-colors uppercase">Services</Link></li>
                 <li><Link to="/blog" className="hover:text-white transition-colors uppercase">Insights</Link></li>
                 <li><Link to="/contact" className="hover:text-white transition-colors uppercase">Contact</Link></li>
               </ul>
             </nav>
           </div>

           {/* Column 4: Contact */}
           <div className="lg:col-span-3">
             <h4 className="font-display text-lg font-bold mb-6 uppercase tracking-wider text-white">Contact</h4>
             <address className="not-italic">
               <ul className="space-y-6 text-sm text-brand-white-70">
                 <li className="flex items-start gap-4">
                   <div className="mt-1 text-olive-500 bg-olive-500/10 p-2 rounded-full"><MapPin size={18} /></div>
                   <Link to="/contact" className="hover:text-white transition-colors text-left leading-relaxed">
                     Office #315, 3rd Floor, Bank Street Building,<br />
                     Bur Dubai, Dubai, United Arab Emirates
                   </Link>
                 </li>
                 <li className="flex items-start gap-4">
                   <div className="text-olive-500 bg-olive-500/10 p-2 rounded-full mt-1"><Phone size={18} /></div>
                   <div className="flex flex-col gap-1">
                     <a href="https://wa.me/971502943916" className="hover:text-white transition-colors">+971 502943916</a>
                     <a href="https://wa.me/447899727950" className="hover:text-white transition-colors">+44 7899727950</a>
                   </div>
                 </li>
                 <li className="flex items-center gap-4">
                   <div className="text-olive-500 bg-olive-500/10 p-2 rounded-full"><Mail size={18} /></div>
                   <a href="mailto:info@mintsglobal.ae" className="hover:text-white transition-colors break-all">info@mintsglobal.ae</a>
                 </li>
               </ul>
             </address>
           </div>

         </div>
         
         <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-brand-white-40">
           <p>© {new Date().getFullYear()} Mints Global. All rights reserved.</p>
           <nav aria-label="Footer Legal" className="flex gap-4">
             {i18n.language === 'de' && <Link to="/impressum" className="hover:text-white transition-colors">Impressum</Link>}
             <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
             <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
           </nav>
         </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/971502943916" 
        target="_blank" 
        rel="noreferrer"
        className={cn(
          "fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform items-center justify-center",
          mobileMenuOpen ? "hidden" : "flex"
        )}
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={28} />
      </a>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            onClick={scrollToTop}
            className={cn(
              "fixed bottom-24 right-6 z-50 bg-olive-500 text-white p-3 md:p-4 rounded-full shadow-[0_0_15px_rgba(106,171,31,0.5)] border border-olive-400 hover:bg-olive-400 hover:scale-110 transition-all flex items-center justify-center group",
              mobileMenuOpen ? "hidden" : "flex"
            )}
            aria-label="Scroll to top"
          >
            <ArrowUp size={24} className="group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>

      <TawktoChat />
      <CookieBanner />
      </div>
    </div>
    </SmoothScroll>
  );
}
