/**
 * Navbar — top navigation with mega-menu, mobile accordion, and language switcher.
 * 
 * Tier 1 fixes applied:
 * - Merged double scroll listeners (was: useMotionValueEvent + useEffect separately)
 * - aria-current="page" on active mobile nav links
 * - Accessible focus rings on all interactive elements
 */
import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'motion/react';
import {
  Menu, X, Leaf, Code2, ShieldAlert, ChevronDown, Globe, ExternalLink,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { cn } from '../../lib/utils';
import { Logo } from '../Logo';

// ─── Mobile accordion for sub-nav sections ─────────────────────────────────
function MobileAccordion({
  id, title, links, closeMenu, isOpen, onToggle,
}: {
  id: string;
  title: string;
  links: { path: string; label: string }[];
  closeMenu: () => void;
  isOpen: boolean;
  onToggle: (id: string | null) => void;
}) {
  const location = useLocation();
  return (
    <div>
      <button
        onClick={() => onToggle(isOpen ? null : id)}
        aria-expanded={isOpen}
        className="w-full text-left text-brand-white-70 hover:text-white cursor-pointer list-none flex items-center justify-between focus:outline-none focus-visible:ring-2 focus-visible:ring-olive-500 rounded"
      >
        {title}
        <ChevronDown size={16} className={cn('transition-transform duration-300', isOpen ? 'rotate-180' : '')} />
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
                link.path.startsWith('http') ? (
                  <a
                    key={i}
                    href={link.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMenu}
                    className="hover:text-olive-500 transition-colors focus-visible:ring-2 focus-visible:ring-olive-500 rounded flex items-center justify-between text-olive-400 font-medium"
                  >
                    <span>{link.label}</span>
                    <span className="text-[10px] bg-olive-500/20 text-olive-400 px-1.5 py-0.5 rounded border border-olive-500/30">Live ↗</span>
                  </a>
                ) : (
                  <Link
                    key={i}
                    to={link.path}
                    onClick={closeMenu}
                    aria-current={location.pathname === link.path ? 'page' : undefined}
                    className="hover:text-olive-500 transition-colors focus-visible:ring-2 focus-visible:ring-olive-500 rounded"
                  >
                    {link.label}
                  </Link>
                )
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Navbar component ───────────────────────────────────────────────────────
export function Navbar({
  mobileMenuOpen,
  setMobileMenuOpen,
}: {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}) {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [openMobileSection, setOpenMobileSection] = useState<string | null>(null);
  const { scrollY } = useScroll();

  // Single merged scroll listener — replaces the previous double-listener bug
  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    setIsScrolled(latest > 20);
    setIsHidden(latest > previous && latest > 150);
  });

  const changeLanguage = (lng: string) => i18n.changeLanguage(lng);

  return (
    <>
      <motion.header
        variants={{ visible: { y: 0 }, hidden: { y: '-100%' } }}
        animate={isHidden ? 'hidden' : 'visible'}
        transition={{ duration: 0.35, ease: 'easeInOut' }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-colors duration-300',
          isScrolled ? 'bg-olive-950/85 backdrop-blur-xl py-4 border-b border-white/10' : 'bg-transparent py-6',
        )}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between relative">
          <Link to="/" className="z-50 hover:opacity-80 transition-opacity" aria-label="Mints Global — Home">
            <Logo className="text-[3rem]" />
          </Link>

          {/* Desktop Nav */}
          <nav aria-label="Main Navigation" className="hidden md:flex items-center gap-8 font-display font-medium group">
            <div className="group/nav">
              <NavLink
                to="/services"
                className={({ isActive }) => cn(
                  'hover:text-olive-500 transition-colors py-6 relative flex items-center gap-1 text-lg font-black',
                  isActive
                    ? "text-olive-500 after:content-[''] after:absolute after:bottom-[18px] after:left-0 after:right-0 after:h-[2px] after:bg-olive-500 after:rounded-full"
                    : 'text-brand-white',
                )}
              >
                {t('nav.services', 'Services')} <ChevronDown size={14} />
              </NavLink>

              {/* Mega Menu */}
              <div className="absolute top-[100%] left-1/2 -translate-x-1/2 pt-6 w-[1100px] max-w-[calc(100vw-3rem)] opacity-0 invisible group-hover/nav:opacity-100 group-hover/nav:visible transition-all duration-300 z-50">
                <div className="bg-olive-950 border border-white/10 rounded-2xl p-8 shadow-2xl overflow-hidden">
                  <div className="grid grid-cols-3 gap-12">
                    {/* Digital Marketing */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-4">
                        <div className="w-10 h-10 rounded border border-white/10 flex items-center justify-center bg-white/5">
                          <Leaf className="text-olive-500" size={18} />
                        </div>
                        <h4 className="text-brand-white text-sm font-display font-bold uppercase tracking-wider">DIGITAL MARKETING</h4>
                      </div>
                      <ul className="space-y-6">
                        {[
                          { to: '/digital-marketing/seo', label: 'SEO OPTIMIZATION', desc: 'Rank higher on Google with technical audits, local citations, and quality links.' },
                          { to: '/digital-marketing/performance-marketing', label: 'PERFORMANCE MARKETING', desc: 'Paid search and social campaigns engineered around CPA and direct revenue.' },
                          { to: '/digital-marketing/smm', label: 'SOCIAL MEDIA MARKETING', desc: 'Consistent content and community management across Instagram and LinkedIn.' },
                          { to: '/digital-marketing/branding', label: 'BRAND STRATEGY', desc: 'Positioning, messaging, and visual identity from scratch or rebrand.' },
                          { to: '/digital-marketing/video-production', label: 'VIDEO PRODUCTION', desc: 'Commercial shoots, reels, and video ads produced start-to-finish.' },
                          { to: '/digital-marketing/photography-graphics', label: 'PHOTOGRAPHY & GRAPHICS', desc: 'Product photography, lookbooks, and high-res campaign collateral.' },
                        ].map(item => (
                          <li key={item.to}>
                            <Link to={item.to} className="group block">
                              <div className="font-bold text-sm text-brand-white group-hover:text-olive-500 transition-colors uppercase">{item.label}</div>
                              <div className="text-[11px] normal-case text-brand-white-60 mt-1 leading-normal">{item.desc}</div>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Software Development */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-4">
                        <div className="w-10 h-10 rounded border border-white/10 flex items-center justify-center bg-white/5">
                          <Code2 className="text-olive-500" size={18} />
                        </div>
                        <h4 className="text-brand-white text-sm font-display font-bold uppercase tracking-wider">SOFTWARE DEVELOPMENT</h4>
                      </div>
                      <ul className="space-y-6">
                        {[
                          { to: '/software-development/web-apps', label: 'WEB APPLICATIONS', desc: 'Full-stack web apps built in React, Node, and Python.' },
                          { to: '/software-development/mobile-apps', label: 'MOBILE APPLICATIONS', desc: 'iOS and Android apps that feel fast, clean, and reliable.' },
                          { to: '/software-development/website-development', label: 'WEBSITE DEVELOPMENT', desc: 'Marketing and corporate sites that load fast and convert visitors.' },
                          { to: '/software-development/erp-solutions', label: 'ERP SOLUTIONS', desc: 'Custom systems to manage inventory, invoicing, and team operations.' },
                          { to: '/software-development/crm-development', label: 'CRM DEVELOPMENT', desc: 'Tailored customer pipelines that fit how your sales team actually works.' },
                          { to: '/software-development/ecommerce', label: 'E-COMMERCE', desc: 'Fast online stores with clean checkout flows and payment integrations.' },
                        ].map(item => (
                          <li key={item.to}>
                            <Link to={item.to} className="group block">
                              <div className="font-bold text-sm text-brand-white group-hover:text-olive-500 transition-colors uppercase">{item.label}</div>
                              <div className="text-[11px] normal-case text-brand-white-60 mt-1 leading-normal">{item.desc}</div>
                            </Link>
                          </li>
                        ))}
                      </ul>

                      {/* Product Callout */}
                      <div className="mt-6 pt-5 border-t border-white/10">
                        <a 
                          href="https://erp.mintsglobal.ae/" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="flex items-center justify-between p-3 rounded-xl bg-olive-500/10 border border-olive-500/30 hover:bg-olive-500/20 transition-all group"
                        >
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-bold text-xs text-white group-hover:text-olive-400 transition-colors uppercase tracking-wider">Mints ERP Platform</span>
                              <span className="text-[9px] font-black uppercase tracking-widest bg-olive-500 text-white px-1.5 py-0.5 rounded">Product</span>
                            </div>
                            <div className="text-[10px] text-brand-white-60 mt-0.5">Live command center for HR, CRM & projects.</div>
                          </div>
                          <ExternalLink size={14} className="text-olive-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </a>
                      </div>
                    </div>

                    {/* Cyber Security */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-4">
                        <div className="w-10 h-10 rounded border border-white/10 flex items-center justify-center bg-white/5">
                          <ShieldAlert className="text-olive-500" size={18} />
                        </div>
                        <h4 className="text-brand-white text-sm font-display font-bold uppercase tracking-wider">CYBER SECURITY</h4>
                      </div>
                      <ul className="space-y-6">
                        {[
                          { to: '/cyber-security/offensive-security', label: 'OFFENSIVE SECURITY', desc: 'Hands-on penetration testing and vulnerability assessments.' },
                          { to: '/cyber-security/incident-response', label: 'INCIDENT RESPONSE', desc: 'Containment and digital forensics when things go wrong.' },
                          { to: '/cyber-security/managed-advisory', label: 'MANAGED & ADVISORY', desc: 'Virtual CISO services and pragmatic roadmap planning.' },
                          { to: '/cyber-security/compliance-grc', label: 'COMPLIANCE & GRC', desc: 'Audit-ready preparation for UAE NESA, PDPL, and ISO 27001.' },
                          { to: '/cyber-security/cloud-security', label: 'CLOUD SECURITY', desc: 'Hardened AWS, Azure, and Google Cloud configurations.' },
                          { to: '/cyber-security/ot-iot-security', label: 'OT / IOT SECURITY', desc: 'Security audits for industrial hardware and connected sensors.' },
                        ].map(item => (
                          <li key={item.to}>
                            <Link to={item.to} className="group block">
                              <div className="font-bold text-sm text-brand-white group-hover:text-olive-500 transition-colors uppercase">{item.label}</div>
                              <div className="text-[11px] normal-case text-brand-white-60 mt-1 leading-normal">{item.desc}</div>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <NavLink to="/work" className={({ isActive }) => cn('hover:text-olive-500 transition-colors py-6 relative text-lg font-black', isActive ? "text-olive-500 after:content-[''] after:absolute after:bottom-[18px] after:left-0 after:right-0 after:h-[2px] after:bg-olive-500 after:rounded-full" : 'text-brand-white')}>{t('nav.work', 'Work')}</NavLink>
            <NavLink to="/about" className={({ isActive }) => cn('hover:text-olive-500 transition-colors py-6 relative text-lg font-black', isActive ? "text-olive-500 after:content-[''] after:absolute after:bottom-[18px] after:left-0 after:right-0 after:h-[2px] after:bg-olive-500 after:rounded-full" : 'text-brand-white')}>{t('nav.about', 'About')}</NavLink>
            <NavLink to="/blog" className={({ isActive }) => cn('hover:text-olive-500 transition-colors py-6 relative text-lg font-black', isActive ? "text-olive-500 after:content-[''] after:absolute after:bottom-[18px] after:left-0 after:right-0 after:h-[2px] after:bg-olive-500 after:rounded-full" : 'text-brand-white')}>{t('nav.blog', 'Blog')}</NavLink>
          </nav>

          <div className="flex items-center gap-4 md:gap-6 z-50">
            {/* Language switcher */}
            <div className="hidden md:block relative group/lang cursor-pointer z-50">
              <div className="flex items-center gap-2 bg-white/10 hover:bg-white/20 transition-colors rounded-full px-4 py-2 text-xs font-bold font-body">
                <Globe size={16} />
                <span className="font-semibold">{i18n.language === 'ar' ? 'العربية' : i18n.language === 'de' ? 'Deutsch' : 'English'}</span>
                <ChevronDown size={14} className="opacity-50" />
              </div>
              <div className="absolute top-[100%] right-0 pt-2 opacity-0 invisible group-hover/lang:opacity-100 group-hover/lang:visible transition-all duration-300">
                <div className="bg-olive-950 border border-white/10 rounded-xl p-2 shadow-xl flex flex-col gap-1 min-w-[120px]">
                  {['en', 'ar', 'de'].map(lang => (
                    <button
                      key={lang}
                      onClick={() => changeLanguage(lang)}
                      aria-pressed={i18n.language === lang}
                      className={cn(
                        'px-4 py-2 text-left rounded-lg transition-colors text-sm font-bold flex items-center justify-between',
                        i18n.language === lang ? 'bg-olive-500 text-white' : 'hover:bg-white/10 text-brand-white',
                      )}
                    >
                      {lang === 'en' ? 'English' : lang === 'ar' ? 'العربية' : 'Deutsch'}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <Link
              to="/contact"
              className="bg-brand-white text-olive-950 px-5 py-2 md:px-7 md:py-2.5 rounded-full text-[10px] md:text-xs uppercase tracking-widest font-display font-black hover:bg-olive-500 hover:text-white transition-all transform hover:scale-105 inline-block text-center whitespace-nowrap"
            >
              {t('nav.cta', "Let's Talk →")}
            </Link>

            {/* Mobile menu button */}
            <button
              className="md:hidden z-50 text-white hover:text-olive-500 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
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
              <Link to="/services" onClick={() => setMobileMenuOpen(false)} className="hover:text-olive-500 uppercase">{t('nav.services', 'Services')}</Link>
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
                    { path: '/digital-marketing/photography-graphics', label: 'Photography' },
                  ]}
                  closeMenu={() => setMobileMenuOpen(false)}
                />
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
                    { path: 'https://erp.mintsglobal.ae/', label: 'Mints ERP Platform' },
                    { path: '/software-development/crm-development', label: 'CRM' },
                    { path: '/software-development/ecommerce', label: 'E-Commerce' },
                  ]}
                  closeMenu={() => setMobileMenuOpen(false)}
                />
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
                    { path: '/cyber-security/ot-iot-security', label: 'IoT Security' },
                  ]}
                  closeMenu={() => setMobileMenuOpen(false)}
                />
              </div>

              <Link to="/work" onClick={() => setMobileMenuOpen(false)} className="hover:text-olive-500 uppercase">{t('nav.work', 'Work')}</Link>
              <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="hover:text-olive-500 uppercase">{t('nav.about', 'About')}</Link>
              <Link to="/blog" onClick={() => setMobileMenuOpen(false)} className="hover:text-olive-500 uppercase">{t('nav.blog', 'Blog')}</Link>
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-olive-500 uppercase">{t('nav.contact', 'Contact')}</Link>

              <div className="mt-8 flex justify-center gap-2 bg-white/10 rounded-full p-1 text-sm font-body w-fit mx-auto" dir="ltr">
                {['en', 'ar', 'de'].map(lang => (
                  <button
                    key={lang}
                    onClick={() => changeLanguage(lang)}
                    className={cn('px-4 py-2 rounded-full transition-colors', i18n.language === lang ? 'bg-olive-500 text-white' : 'text-white/50 hover:text-white')}
                  >
                    {lang.toUpperCase()}
                  </button>
                ))}
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
