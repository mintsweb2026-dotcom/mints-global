/**
 * Footer — site-wide footer with newsletter, links, contact, and legal nav.
 */
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Logo } from '../Logo';
import { NewsletterForm } from '../NewsletterForm';

export function Footer() {
  const { i18n } = useTranslation();

  return (
    <footer className="bg-[#F0F0F0] border-t border-[#E4E4E4] pt-16 pb-10 md:pt-20 mt-20 text-[#5A644D]">
      {/* Newsletter */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16">
        <NewsletterForm />
      </div>

      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">

        {/* Column 1: Logo & Intro */}
        <div className="lg:col-span-3 space-y-5">
          <Link to="/" className="block hover:opacity-85 transition-opacity w-fit" aria-label="Mints Global — Home">
            <Logo className="text-[3rem]" />
          </Link>
          <p className="text-sm text-[#5A644D] leading-relaxed max-w-sm">
            Building software, growing brands, and securing digital infrastructure. Your dedicated digital engineering partner in Dubai.
          </p>
          <div className="flex gap-3">
            <a
              href="https://www.instagram.com/mints.global/"
              target="_blank"
              rel="noreferrer"
              aria-label="Follow Mints Global on Instagram"
              className="w-10 h-10 rounded-xl bg-white border border-[#E4E4E4] flex items-center justify-center text-[#859177] hover:text-[#687838] hover:border-[#687838] transition-all shadow-2xs"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://www.linkedin.com/company/mints-dubai"
              target="_blank"
              rel="noreferrer"
              aria-label="Follow Mints Global on LinkedIn"
              className="w-10 h-10 rounded-xl bg-white border border-[#E4E4E4] flex items-center justify-center text-[#859177] hover:text-[#687838] hover:border-[#687838] transition-all shadow-2xs"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        {/* Column 2: Services */}
        <div className="lg:col-span-4 lg:ml-4">
          <h4 className="font-sans font-bold text-sm text-[#182012] mb-5 uppercase tracking-wider">Services</h4>
          <nav aria-label="Footer Services" className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3.5 text-xs sm:text-sm">
            <ul className="space-y-3 text-[#5A644D]">
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
                  <Link to={item.to} className="hover:text-[#687838] transition-colors">{item.label}</Link>
                </li>
              ))}
            </ul>
            <ul className="space-y-3 text-[#5A644D]">
              {[
                { to: '/digital-marketing/performance-marketing', label: 'PERFORMANCE MARKETING' },
                { to: '/digital-marketing/branding', label: 'BRAND STRATEGY' },
                { to: '/digital-marketing/photography-graphics', label: 'PHOTOGRAPHY & GRAPHICS' },
                { to: '/software-development/mobile-apps', label: 'MOBILE APPLICATIONS' },
                { to: '/software-development/erp-solutions', label: 'ERP SOLUTIONS' },
                { to: 'https://erp.mintsglobal.ae/', label: 'MINTS ERP PLATFORM' },
                { to: '/software-development/ecommerce', label: 'E-COMMERCE' },
                { to: '/cyber-security/incident-response', label: 'INCIDENT RESPONSE' },
                { to: '/cyber-security/compliance-grc', label: 'COMPLIANCE & GRC' },
                { to: '/cyber-security/ot-iot-security', label: 'OT / IOT SECURITY' },
              ].map(item => (
                <li key={item.to}>
                  {item.to.startsWith('http') ? (
                    <a 
                      href={item.to} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="group inline-flex items-center gap-1.5 hover:text-[#515E2C] text-[#687838] font-bold transition-colors"
                    >
                      <span>{item.label}</span>
                      <ArrowUpRight size={13} className="stroke-[2.5] text-[#687838] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  ) : (
                    <Link to={item.to} className="hover:text-[#687838] transition-colors">{item.label}</Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Column 3: Global Service & Company */}
        <div className="lg:col-span-2">
          <h4 className="font-sans font-bold text-sm text-[#182012] mb-5 uppercase tracking-wider">Global Service</h4>
          <nav aria-label="Footer Global Services">
            <ul className="space-y-3 text-xs sm:text-sm text-[#5A644D] mb-8">
              <li><Link to="/europe-services/software-development" className="hover:text-[#687838] transition-colors uppercase">Software Development</Link></li>
              <li><Link to="/europe-services/digital-marketing" className="hover:text-[#687838] transition-colors uppercase">Digital Marketing</Link></li>
              <li><Link to="/europe-services/cyber-security" className="hover:text-[#687838] transition-colors uppercase">Cyber Security</Link></li>
            </ul>
          </nav>
          <h4 className="font-sans font-bold text-sm text-[#182012] mb-5 uppercase tracking-wider">Company</h4>
          <nav aria-label="Footer Company">
            <ul className="space-y-3 text-xs sm:text-sm text-[#5A644D]">
              <li><Link to="/about" className="hover:text-[#687838] transition-colors uppercase">About Us</Link></li>
              <li><Link to="/work" className="hover:text-[#687838] transition-colors uppercase">Our Work</Link></li>
              <li><Link to="/services" className="hover:text-[#687838] transition-colors uppercase">Services</Link></li>
              <li><Link to="/blog" className="hover:text-[#687838] transition-colors uppercase">Insights</Link></li>
              <li><Link to="/contact" className="hover:text-[#687838] transition-colors uppercase">Contact</Link></li>
            </ul>
          </nav>
        </div>

        {/* Column 4: Contact */}
        <div className="lg:col-span-3">
          <h4 className="font-sans font-bold text-sm text-[#182012] mb-5 uppercase tracking-wider">Contact</h4>
          <address className="not-italic">
            <ul className="space-y-4 text-xs sm:text-sm text-[#5A644D]">
              <li className="flex items-start gap-3">
                <div className="mt-0.5 text-[#687838] bg-[#EDF2E2] p-2 rounded-xl border border-[#DBE4C7] shrink-0"><MapPin size={16} /></div>
                <Link to="/contact" className="hover:text-[#687838] transition-colors text-left leading-relaxed">
                  Office #315, 3rd Floor, Bank Street Building,<br />
                  Bur Dubai, Dubai, United Arab Emirates
                </Link>
              </li>
              <li className="flex items-start gap-3">
                <div className="text-[#687838] bg-[#EDF2E2] p-2 rounded-xl border border-[#DBE4C7] shrink-0 mt-0.5"><Phone size={16} /></div>
                <div className="flex flex-col gap-1">
                  <a href="https://wa.me/971502943916" className="hover:text-[#687838] transition-colors">+971 502943916</a>
                  <a href="https://wa.me/447899727950" className="hover:text-[#687838] transition-colors">+44 7899727950</a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <div className="text-[#687838] bg-[#EDF2E2] p-2 rounded-xl border border-[#DBE4C7] shrink-0"><Mail size={16} /></div>
                <a href="mailto:info@mintsglobal.ae" className="hover:text-[#687838] transition-colors break-all">info@mintsglobal.ae</a>
              </li>
            </ul>
          </address>
        </div>
      </div>

      {/* Bottom bar matching erp.mintsglobal.ae */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-14 pt-8 border-t border-[#E4E4E4] flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#859177]">
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <p suppressHydrationWarning>© {new Date().getFullYear()} Mints Global. All rights reserved.</p>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#EDF2E2] border border-[#DBE4C7] text-[10px] font-bold text-[#353E20]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#687838]"></span>
            <span>SMARTER OPERATIONS. TOGETHER.</span>
          </span>
        </div>
        <nav aria-label="Footer Legal" className="flex gap-4">
          {i18n.language === 'de' && <Link to="/impressum" className="hover:text-[#687838] transition-colors">Impressum</Link>}
          <Link to="/privacy-policy" className="hover:text-[#687838] transition-colors">Privacy Policy</Link>
          <Link to="/terms-of-service" className="hover:text-[#687838] transition-colors">Terms of Service</Link>
        </nav>
      </div>
    </footer>
  );
}
