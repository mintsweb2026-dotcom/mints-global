import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ChevronDown, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { JsonLd } from '../components/JsonLd';
import { buildFaqSchema } from '../lib/schema-helpers';
import { SEO } from '../components/SEO';
import { ServicesAccordion } from '../components/ServicesAccordion';

const faqs = [
  {
    "q": "Why should we choose a custom ERP over standard software?",
    "a": "Standard ERPs force you to adapt your established business processes to their software. A custom or highly tailored ERP adapts to you, providing exactly the features you need without bloated, unnecessary modules."
  },
  {
    "q": "How long does ERP implementation take?",
    "a": "ERP deployment is a major business transformation. Process mapping, development, testing, and training typically range from 6 to 12 months, depending on organizational complexity."
  },
  {
    "q": "Will the ERP integrate with our CRM?",
    "a": "Yes, integrating your ERP with your CRM (like Salesforce or HubSpot) is highly recommended and part of our core offering to ensure seamless data flow between sales and operations."
  },
  {
    "q": "How do you handle employee training?",
    "a": "We don't just hand over the login details. We provide comprehensive change management, extensive user documentation, and hands-on training sessions for your department heads."
  }
];

export function ERPSolutions() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "ERP Solutions",
    "description": "Enterprise Resource Planning (ERP) software solutions for business automation and operational efficiency",
    "provider": {
      "@type": "Organization",
      "name": "Mints Global",
      "url": "https://www.mintsglobal.ae",
      "logo": "https://www.mintsglobal.ae/logo.png"
    },
    "areaServed": {
      "@type": "Country",
      "name": "United Arab Emirates"
    },
    "url": "https://www.mintsglobal.ae/software-development/erp-solutions"
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.mintsglobal.ae"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Software Development",
        "item": "https://www.mintsglobal.ae/software-development"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "ERP Solutions",
        "item": "https://www.mintsglobal.ae/software-development/erp-solutions"
      }
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Mints Global - ERP Solutions",
    "image": "https://www.mintsglobal.ae/logo.png",
    "description": "Professional ERP software development and implementation services based in Dubai, UAE",
    "url": "https://www.mintsglobal.ae/software-development/erp-solutions",
    "telephone": "+971 502943916",
    "email": "info@mintsglobal.ae",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Office #315, 3rd Floor, Bank Street Building",
      "addressLocality": "Dubai",
      "addressRegion": "Dubai",
      "postalCode": "122002",
      "addressCountry": "AE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "25.2048",
      "longitude": "55.2708"
    },
    "priceRange": "$$$$"
  };

  const erpProductSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Mints ERP",
    "operatingSystem": "All Web Platforms, Cloud",
    "applicationCategory": "BusinessApplication",
    "url": "https://erp.mintsglobal.ae/",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "AED"
    },
    "description": "All-in-one command center for HR, WPS payroll, sales CRM, project delivery, and VAT accounting built for modern UAE and international enterprises."
  };

  return (
    <div className="w-full relative z-10 min-h-screen bg-brand-black">
      <SEO
        title="ERP Solutions Dubai | Mints Global"
        description="Discover enterprise-grade ERP solutions in Dubai. Custom ERP software development for business automation. Expert implementation, support from Mints Global."
        canonical="/software-development/erp-solutions"
        ogTitle="Enterprise Resource Planning (ERP) Solutions | Mints Global Dubai"
        ogDescription="Transform your business with custom ERP software solutions. Streamline operations, reduce costs, and increase efficiency with Mints Global's enterprise solutions."
        ogImage="https://www.mintsglobal.ae/images/erp-solutions-og.jpg"
        twitterTitle="ERP Solutions Dubai | Enterprise Resource Planning by Mints Global"
        twitterDescription="Custom ERP software solutions for business automation. Streamline operations & increase efficiency with Mints Global's enterprise resource planning services."
        twitterImage="https://www.mintsglobal.ae/images/erp-solutions-twitter.jpg"
        rawTitle={true}
        geoTarget={true}
      />
      <Helmet>
        <meta property="og:image:alt" content="ERP Solutions Dashboard - Enterprise Resource Planning Software by Mints Global" />
        <meta name="twitter:image:alt" content="ERP Software Solutions - Enterprise Resource Planning Platform" />
        <meta name="twitter:creator" content="@MintsBranding" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative w-full max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20 lg:pt-40 lg:pb-32">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="flex items-center gap-4 mb-6">
            <span className="px-4 py-1 rounded-full border border-white/10 text-xs font-bold uppercase tracking-widest text-brand-white-70">
              Business Intelligence
            </span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-black mb-8 uppercase leading-[0.9] text-white">
            ERP<br />
            <span className="text-olive-500">Solutions.</span>
          </h1>
          <p className="text-brand-white-70 text-lg md:text-xl max-w-3xl leading-relaxed mb-12">
            Unify your business operations. We customize, integrate, and deploy Enterprise Resource Planning systems to give you total control over your resources, finance, and supply chain.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-16">
            <Link to="/contact" className="bg-olive-500 text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm hover:bg-olive-400 transition-colors inline-flex items-center gap-2 relative z-20">
              Streamline Operations <ArrowRight size={18} />
            </Link>
            <a 
              href="https://erp.mintsglobal.ae/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-white/10 hover:bg-white text-white hover:text-olive-950 border border-white/20 px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm transition-all inline-flex items-center gap-2 relative z-20 shadow-lg"
            >
              Explore Live Mints ERP <ExternalLink size={16} />
            </a>
          </div>

          <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
            <img src="/images/erp-solutions-hero.webp" alt="ERP Solutions Dashboard - Enterprise Resource Planning Software" width="1200" height="600" loading="lazy" className="w-full h-auto object-cover" />
          </div>
        </motion.div>
      </section>

      {/* Mints ERP Flagship Product Spotlight Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-brand-black via-olive-950/60 to-brand-black border-y border-white/10 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-olive-500/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-emerald-600/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="bg-olive-900/40 border border-olive-500/30 rounded-3xl p-8 sm:p-12 lg:p-16 backdrop-blur-xl shadow-2xl relative overflow-hidden">
            {/* Top Badge */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-olive-500/20 border border-olive-500/40 text-xs font-bold uppercase tracking-widest text-olive-300">
                <span className="w-2 h-2 rounded-full bg-olive-400 animate-ping" />
                Flagship Proprietary Platform
              </div>
              <span className="text-xs font-semibold text-brand-white-60 uppercase tracking-wider">
                Live at erp.mintsglobal.ae
              </span>
            </div>

            {/* Grid layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7">
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-white leading-tight mb-6">
                  Meet Mints ERP <br />
                  <span className="text-olive-400">One Command Center for Modern Enterprise.</span>
                </h2>
                <p className="text-brand-white-70 text-base sm:text-lg leading-relaxed mb-8">
                  Rather than waiting 12 months for custom builds or paying exorbitant recurring fees for rigid legacy software, deploy <strong className="text-white">Mints ERP</strong>. Engineered from the ground up for high-velocity teams managing HR, payroll, client pipelines, project delivery, and VAT-compliant accounting in one unified cloud system.
                </p>

                {/* Key feature pills */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/5 border border-white/5">
                    <CheckCircle2 className="text-olive-400 shrink-0 mt-0.5" size={18} />
                    <div>
                      <h4 className="text-sm font-bold text-white uppercase tracking-wider">HR & WPS Payroll</h4>
                      <p className="text-xs text-brand-white-60 mt-0.5">Automated UAE compliance, leaves, and attendance.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/5 border border-white/5">
                    <CheckCircle2 className="text-olive-400 shrink-0 mt-0.5" size={18} />
                    <div>
                      <h4 className="text-sm font-bold text-white uppercase tracking-wider">CRM & Deals Pipeline</h4>
                      <p className="text-xs text-brand-white-60 mt-0.5">Real-time lead stages, quotations, and client portals.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/5 border border-white/5">
                    <CheckCircle2 className="text-olive-400 shrink-0 mt-0.5" size={18} />
                    <div>
                      <h4 className="text-sm font-bold text-white uppercase tracking-wider">Project Automations</h4>
                      <p className="text-xs text-brand-white-60 mt-0.5">Task boards, milestones, and deliverable tracking.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/5 border border-white/5">
                    <CheckCircle2 className="text-olive-400 shrink-0 mt-0.5" size={18} />
                    <div>
                      <h4 className="text-sm font-bold text-white uppercase tracking-wider">Billing & VAT Reports</h4>
                      <p className="text-xs text-brand-white-60 mt-0.5">One-click tax invoices, expense tracking, and P&L.</p>
                    </div>
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex flex-wrap items-center gap-4">
                  <a 
                    href="https://erp.mintsglobal.ae/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-olive-500 hover:bg-olive-400 text-white font-bold px-8 py-4 rounded-full uppercase tracking-wider text-sm inline-flex items-center gap-2 transition-all shadow-lg hover:shadow-olive-500/25 hover:scale-[1.02]"
                  >
                    Launch Mints ERP Live <ExternalLink size={16} />
                  </a>
                  <Link 
                    to="/contact" 
                    className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold px-8 py-4 rounded-full uppercase tracking-wider text-sm inline-flex items-center gap-2 transition-colors"
                  >
                    Request Guided Demo
                  </Link>
                </div>
              </div>

              {/* Visual Preview / Mockup Column */}
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-olive-950 p-3 shadow-2xl group">
                  <div className="flex items-center justify-between px-3 py-2 border-b border-white/10 bg-white/5 rounded-t-xl mb-3">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                    </div>
                    <span className="text-[10px] font-mono text-brand-white-60">erp.mintsglobal.ae</span>
                    <span className="text-[10px] font-bold text-olive-400 uppercase tracking-wider">Live</span>
                  </div>
                  <div className="aspect-[16/11] rounded-xl overflow-hidden relative bg-black/40">
                    <img 
                      src="/images/erp-solutions-hero.webp" 
                      alt="Mints ERP Command Center Interface" 
                      width="800" 
                      height="550" 
                      loading="lazy" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-olive-950/90 via-transparent to-transparent flex items-end p-6">
                      <a 
                        href="https://erp.mintsglobal.ae/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-xs font-bold text-white bg-olive-500/90 hover:bg-olive-400 px-4 py-2 rounded-lg flex items-center gap-2 backdrop-blur-md transition-all"
                      >
                        Explore Platform Features &rarr;
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-olive-950 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="font-display text-4xl lg:text-5xl font-black uppercase mb-6 text-white">Custom ERP Capabilities</h2>
            <p className="text-brand-white-70 text-lg max-w-3xl">Need bespoke customization or legacy migration? Transition away from disconnected spreadsheets into a single source of truth for your entire enterprise.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-brand-black border border-white/5 p-10 rounded-3xl hover:border-olive-500/30 transition-colors">
              <CheckCircle2 className="text-olive-500 mb-6" size={32} />
              <h3 className="font-display font-bold text-xl uppercase mb-4 text-white">Custom ERP Development</h3>
              <p className="text-brand-white-70 text-sm leading-relaxed">Building from the ground up to perfectly map your unique, complex operational workflows when off-the-shelf software fails.</p>
            </div>
            <div className="bg-brand-black border border-white/5 p-10 rounded-3xl hover:border-olive-500/30 transition-colors">
              <CheckCircle2 className="text-olive-500 mb-6" size={32} />
              <h3 className="font-display font-bold text-xl uppercase mb-4 text-white">System Integration</h3>
              <p className="text-brand-white-70 text-sm leading-relaxed">Connecting your standalone accounting, HR, supply chain, and inventory systems into one unified data lake.</p>
            </div>
            <div className="bg-brand-black border border-white/5 p-10 rounded-3xl hover:border-olive-500/30 transition-colors">
              <CheckCircle2 className="text-olive-500 mb-6" size={32} />
              <h3 className="font-display font-bold text-xl uppercase mb-4 text-white">Odoo & ERPNext Implementation</h3>
              <p className="text-brand-white-70 text-sm leading-relaxed">Expert setup, customization, and deployment of open-source ERP systems tailored for your business.</p>
            </div>
            <div className="bg-brand-black border border-white/5 p-10 rounded-3xl hover:border-olive-500/30 transition-colors">
              <CheckCircle2 className="text-olive-500 mb-6" size={32} />
              <h3 className="font-display font-bold text-xl uppercase mb-4 text-white">Supply Chain & Inventory Management</h3>
              <p className="text-brand-white-70 text-sm leading-relaxed">Real-time tracking of assets, stock levels, procurement flows, and logistics across multiple warehouses.</p>
            </div>
            <div className="bg-brand-black border border-white/5 p-10 rounded-3xl hover:border-olive-500/30 transition-colors">
              <CheckCircle2 className="text-olive-500 mb-6" size={32} />
              <h3 className="font-display font-bold text-xl uppercase mb-4 text-white">Finance & Accounting Modules</h3>
              <p className="text-brand-white-70 text-sm leading-relaxed">Automated billing, invoicing, payroll integration, and comprehensive financial reporting complying with regional tax laws.</p>
            </div>
            <div className="bg-brand-black border border-white/5 p-10 rounded-3xl hover:border-olive-500/30 transition-colors">
              <CheckCircle2 className="text-olive-500 mb-6" size={32} />
              <h3 className="font-display font-bold text-xl uppercase mb-4 text-white">Data Migration</h3>
              <p className="text-brand-white-70 text-sm leading-relaxed">Securely transferring years of disjointed historical data from your old systems into your new ERP environment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-brand-black border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl lg:text-5xl font-black uppercase mb-4 text-white">Frequently Asked Questions</h2>
            <p className="text-brand-white-70 text-lg">Everything you need to know about our ERP services.</p>
          </div>
          <div className="space-y-4">
            <ServicesAccordion items={faqs.map(f => ({ title: f.q, content: f.a }))} />
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 bg-olive-900 border-t border-white/5 text-center">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2 className="font-display text-4xl lg:text-5xl font-black uppercase mb-6 text-white leading-tight">
            Ready To Get Started?
          </h2>
          <p className="text-brand-white-70 text-lg leading-relaxed mb-10">
            Fragmented systems are costing you time. Let's architect your single source of truth.
          </p>
          <Link to="/contact" className="bg-white text-olive-950 px-10 py-5 rounded-full font-black uppercase tracking-widest hover:bg-olive-500 hover:text-white transition-all shadow-xl block w-fit mx-auto">
            Contact Us Today
          </Link>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 border-t border-white/5 bg-olive-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h3 className="font-display text-2xl font-black uppercase mb-8 text-white">Related Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link to="/software-development/web-apps" className="text-olive-500 hover:text-white font-bold transition-colors">Web Apps &rarr;</Link>
            <Link to="/software-development/mobile-apps" className="text-olive-500 hover:text-white font-bold transition-colors">Mobile Apps &rarr;</Link>
            <Link to="/software-development/website-development" className="text-olive-500 hover:text-white font-bold transition-colors">Website Development &rarr;</Link>
          </div>
        </div>
      </section>

      <JsonLd data={serviceSchema} />
      <JsonLd data={erpProductSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={buildFaqSchema(faqs)} />
    </div>
  );
}