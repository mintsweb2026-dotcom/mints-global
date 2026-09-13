import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { SEO } from '../../components/SEO';
import { ServicesAccordion } from '../../components/ServicesAccordion';
import { JsonLd } from '../../components/JsonLd';
import { buildFaqSchema } from '../../lib/schema-helpers';

const faqs = [
  {
    "q": "Are your performance campaigns compliant with European consent rules?",
    "a": "Yes. We strictly implement proper Consent Management Platforms (CMP), Google Consent Mode v2, and server-side tracking to ensure absolute compliance with ePrivacy directives."
  },
  {
    "q": "Can you run campaigns in languages other than English?",
    "a": "Yes. Through our network of native localization specialists, we execute search and social campaigns effectively in German, French, Spanish, and other key European languages."
  },
  {
    "q": "How do you measure success?",
    "a": "We believe in total transparency. Success is measured strictly against agreed KPIs—such as Cost Per Acquisition (CPA), Return on Ad Spend (ROAS), and Revenue generation—tracked via live BI dashboards."
  },
  {
    "q": "What differentiates you from European agencies?",
    "a": "We bring the rapid execution and creative agility of Dubai's vibrant tech hub, mapped rigorously against mature European compliance standards, often resulting in higher efficiency and competitive pricing."
  }
];

export function DigitalMarketingEurope() {

  return (
    <div className="w-full relative z-10 min-h-screen bg-brand-black">
      <SEO 
        title="Digital Marketing Services Europe | Mints Global" 
        rawTitle={true}
        description="Expert digital marketing services for European markets. SEO, content, PPC & social media strategies to grow your business globally." 
        canonical="/europe-services/digital-marketing"
        ogTitle="Digital Marketing Services Europe | Mints Global"
        ogDescription="Expert digital marketing services for European markets. SEO, content, PPC & social media strategies to grow your business globally."
        ogType="website"
        ogImage="https://www.mintsglobal.ae/images/digital-marketing-hero.jpg"
        twitterTitle="Digital Marketing Services Europe | Mints Global"
        twitterDescription="Expert digital marketing services for European markets. SEO, content, PPC & social media strategies to grow your business globally."
        twitterImage="https://www.mintsglobal.ae/images/digital-marketing-hero.jpg"
        twitterSite="@MintsBrandsDXB"
      />
      {/* Hero Section */}
      <section className="relative w-full max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20 lg:pt-40 lg:pb-32">
        
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="flex items-center gap-4 mb-6">
            <span className="px-4 py-1 rounded-full border border-white/10 text-xs font-bold uppercase tracking-widest text-brand-white-70">
              European Market Focus
            </span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-black mb-8 uppercase leading-[0.9] text-white">
            DIGITAL MARKETING<br/>
            <span className="text-olive-500">IN EUROPE.</span>
          </h1>
          <p className="text-brand-white-70 text-lg md:text-xl max-w-3xl leading-relaxed mb-12">
            Build your brand. Grow your audience. Drive measurable results across Europe with our full-suite digital marketing services.
          </p>
          
          <div className="flex flex-wrap gap-4">
             <Link to="/contact" className="bg-olive-500 text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm hover:bg-olive-400 transition-colors inline-flex items-center gap-2 relative z-20">
               Let's Start A Conversation <ArrowRight size={18} />
             </Link>
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-olive-950 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="font-display text-4xl lg:text-5xl font-black uppercase mb-6 text-white">Our Marketing Services In Europe</h2>
            <p className="text-brand-white-70 text-lg max-w-3xl">We offer a complete suite of digital marketing services. Every service corresponds to a distinct pillar of digital growth, available standalone or as part of a master strategy.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <div className="bg-brand-black border border-white/5 p-10 rounded-3xl hover:border-olive-500/30 transition-colors">
              <CheckCircle2 className="text-olive-500 mb-6" size={32} />
              <h3 className="font-display font-bold text-xl uppercase mb-4 text-white">Multilingual SEO</h3>
              <p className="text-brand-white-70 text-sm leading-relaxed">Ranking on Google in Europe requires technical excellence and authoritative localized content across language borders (DACH, UK, Nordics).</p>
            </div>
            <div className="bg-brand-black border border-white/5 p-10 rounded-3xl hover:border-olive-500/30 transition-colors">
              <CheckCircle2 className="text-olive-500 mb-6" size={32} />
              <h3 className="font-display font-bold text-xl uppercase mb-4 text-white">Performance Marketing (Ads)</h3>
              <p className="text-brand-white-70 text-sm leading-relaxed">Data-driven campaigns across Google and Meta that are tightly targeted, highly optimized, and respect European cookie consent laws.</p>
            </div>
            <div className="bg-brand-black border border-white/5 p-10 rounded-3xl hover:border-olive-500/30 transition-colors">
              <CheckCircle2 className="text-olive-500 mb-6" size={32} />
              <h3 className="font-display font-bold text-xl uppercase mb-4 text-white">Social Media Strategy</h3>
              <p className="text-brand-white-70 text-sm leading-relaxed">We manage your digital presence end-to-end, building audiences that actually engage and converting followers into loyal customers.</p>
            </div>
            <div className="bg-brand-black border border-white/5 p-10 rounded-3xl hover:border-olive-500/30 transition-colors">
              <CheckCircle2 className="text-olive-500 mb-6" size={32} />
              <h3 className="font-display font-bold text-xl uppercase mb-4 text-white">Video Production</h3>
              <p className="text-brand-white-70 text-sm leading-relaxed">Cinematic story-telling and short-form video crafted to stop the scroll and build emotional connection in the European market.</p>
            </div>
            <div className="bg-brand-black border border-white/5 p-10 rounded-3xl hover:border-olive-500/30 transition-colors">
              <CheckCircle2 className="text-olive-500 mb-6" size={32} />
              <h3 className="font-display font-bold text-xl uppercase mb-4 text-white">Influencer Marketing</h3>
              <p className="text-brand-white-70 text-sm leading-relaxed">We identify, vet, and manage the right influencers for your brand across UK and EU markets to drive trust and direct sales.</p>
            </div>
            <div className="bg-brand-black border border-white/5 p-10 rounded-3xl hover:border-olive-500/30 transition-colors">
              <CheckCircle2 className="text-olive-500 mb-6" size={32} />
              <h3 className="font-display font-bold text-xl uppercase mb-4 text-white">Brand Localization</h3>
              <p className="text-brand-white-70 text-sm leading-relaxed">Adapting your corporate identity, messaging, and visual assets so they resonate profoundly with diverse European consumers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-brand-black border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl lg:text-5xl font-black uppercase mb-4 text-white">Frequently Asked Questions</h2>
            <p className="text-brand-white-70 text-lg">Everything you need to know about our digital marketing services.</p>
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
              Scale your growth across Europe with data-driven marketing campaigns that deliver measurable ROI.
            </p>
            <Link to="/contact" className="bg-white text-olive-950 px-10 py-5 rounded-full font-black uppercase tracking-widest hover:bg-olive-500 hover:text-white transition-all shadow-xl block w-fit mx-auto">
              Contact Us Today
            </Link>
         </div>
      </section>
      <JsonLd data={buildFaqSchema(faqs)} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Digital Marketing Services for Europe",
        "description": "Comprehensive digital marketing solutions tailored for European businesses. Our services include SEO, content marketing, PPC advertising, and social media management.",
        "provider": {
          "@type": "Organization",
          "name": "Mints Global",
          "url": "https://www.mintsglobal.ae",
          "telephone": "+971502943916",
          "email": "info@mintsglobal.ae",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Office #315, 3rd Floor, Bank Street Building",
            "addressLocality": "Bur Dubai",
            "addressCountry": "AE"
          }
        },
        "serviceType": [
          "SEO Services",
          "Content Marketing",
          "PPC Advertising",
          "Social Media Marketing",
          "Email Marketing"
        ],
        "areaServed": [
          { "@type": "Country", "name": "Germany" },
          { "@type": "Country", "name": "France" },
          { "@type": "Country", "name": "United Kingdom" },
          { "@type": "Country", "name": "Italy" },
          { "@type": "Country", "name": "Spain" }
        ]
      }} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Mints Global",
        "image": "https://www.mintsglobal.ae/images/logo.png",
        "description": "Premium digital marketing agency in Dubai offering SEO, PPC, content, and social media solutions for European and global markets.",
        "url": "https://www.mintsglobal.ae",
        "telephone": "+971502943916",
        "email": "info@mintsglobal.ae",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Office #315, 3rd Floor, Bank Street Building",
          "addressLocality": "Bur Dubai",
          "addressCountry": "AE"
        },
        "sameAs": [
          "https://twitter.com/MintsBrandsDXB",
          "https://www.linkedin.com/company/mints-global"
        ]
      }} />
      <JsonLd data={{
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
            "name": "Services",
            "item": "https://www.mintsglobal.ae/services"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Europe Services",
            "item": "https://www.mintsglobal.ae/europe-services"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Digital Marketing",
            "item": "https://www.mintsglobal.ae/europe-services/digital-marketing"
          }
        ]
      }} />

    </div>
  );
}