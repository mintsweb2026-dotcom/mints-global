/**
 * Footer — site-wide footer with newsletter, links, contact, and legal nav.
 */
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';
import { FaInstagram as Instagram, FaLinkedin as Linkedin } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { Logo } from '../Logo';
import { NewsletterForm } from '../NewsletterForm';

export function Footer() {
  const { i18n } = useTranslation();

  return (
    <footer className="bg-olive-900 border-t border-white/5 pt-16 pb-8 md:pt-24 mt-20">
      {/* Newsletter */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16">
        <NewsletterForm />
      </div>

      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">

        {/* Column 1: Logo & Intro */}
        <div className="lg:col-span-3 space-y-6">
          <Link to="/" className="block hover:opacity-80 transition-opacity w-fit" aria-label="Mints Global — Home">
            <Logo className="text-[3rem]" />
          </Link>
          <p className="text-brand-white-70 max-w-sm">
            Weaving technical precision into creative vision. Your trusted digital partner in Dubai.
          </p>
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/mints.global/"
              target="_blank"
              rel="noreferrer"
              aria-label="Follow Mints Global on Instagram"
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-olive-500 hover:border-olive-500 hover:scale-110 transition-all text-brand-white-70 hover:text-white"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://www.linkedin.com/company/mints-dubai"
              target="_blank"
              rel="noreferrer"
              aria-label="Follow Mints Global on LinkedIn"
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-olive-500 hover:border-olive-500 hover:scale-110 transition-all text-brand-white-70 hover:text-white"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        {/* Column 2: Services */}
        <div className="lg:col-span-4 lg:ml-4">
          <h4 className="font-display text-lg font-bold mb-6 uppercase tracking-wider text-white">Services</h4>
          <nav aria-label="Footer Services" className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 text-sm">
            <ul className="space-y-4 text-brand-white-70">
              {[
                { to: '/digital-marketing/seo', label: 'SEO OPTIMIZATION' },
                { to: '/digital-marketing/smm', label: 'SOCIAL MEDIA MARKETING' },
                { to: '/digital-marketing/video-production', label: 'VIDEO PRODUCTION' },
                { to: '/software-development/web-apps', label: 'WEB APPLICATIONS' },
                { to: '/software-development/website-development', label: 'WEBSITE DEVELOPMENT' },
                { to: '/software-development/crm-development', label: 'CRM DEVELOPMENT' },
                { to: '/cyber-security/offensive-security', label: 'OFFENSIVE SECURITY' },
                { to: '/cyber-security/managed-advisory', label: 'MANAGED & ADVISORY' },
                { to: '/cyber-security/cloud-security', label: 'CLOUD SECURITY' },
              ].map(item => (
                <li key={item.to}>
                  <Link to={item.to} className="hover:text-white transition-colors">{item.label}</Link>
                </li>
              ))}
            </ul>
            <ul className="space-y-4 text-brand-white-70">
              {[
                { to: '/digital-marketing/performance-marketing', label: 'PERFORMANCE MARKETING' },
                { to: '/digital-marketing/branding', label: 'BRAND STRATEGY' },
                { to: '/digital-marketing/photography-graphics', label: 'PHOTOGRAPHY & GRAPHICS' },
                { to: '/software-development/mobile-apps', label: 'MOBILE APPLICATIONS' },
                { to: '/software-development/erp-solutions', label: 'ERP SOLUTIONS' },
                { to: '/software-development/ecommerce', label: 'E-COMMERCE' },
                { to: '/cyber-security/incident-response', label: 'INCIDENT RESPONSE' },
                { to: '/cyber-security/compliance-grc', label: 'COMPLIANCE & GRC' },
                { to: '/cyber-security/ot-iot-security', label: 'OT / IOT SECURITY' },
              ].map(item => (
                <li key={item.to}>
                  <Link to={item.to} className="hover:text-white transition-colors">{item.label}</Link>
                </li>
              ))}
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
                  {/* Fixed: was missing + prefix causing incorrect WhatsApp links */}
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

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-brand-white-40">
        <p>© {new Date().getFullYear()} Mints Global. All rights reserved.</p>
        <nav aria-label="Footer Legal" className="flex gap-4">
          {i18n.language === 'de' && <Link to="/impressum" className="hover:text-white transition-colors">Impressum</Link>}
          <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
        </nav>
      </div>
    </footer>
  );
}
