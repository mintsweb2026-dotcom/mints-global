import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { JsonLd } from '../components/JsonLd';
import { buildFaqSchema } from '../lib/schema-helpers';
import { SEO } from '../components/SEO';
import { ServicesAccordion } from '../components/ServicesAccordion';
import { SafeImage } from '../components/SafeImage';

const faqs = [
  {
    "q": "Will we own the raw photos?",
    "a": "We typically provide high-resolution, fully edited and color-corrected JPEG/TIFF files. Unedited RAW files can be provided subject to prior agreement and licensing terms."
  },
  {
    "q": "Do you have a studio?",
    "a": "Yes, we have access to fully equipped studio spaces, and we are also fully equipped to bring our lighting and backdrop setups directly to your office or chosen location."
  },
  {
    "q": "What is your turnaround time for photos?",
    "a": "For standard shoots, you will receive a preview gallery within 48 hours, and final retouched images within 5 to 7 working days."
  },
  {
    "q": "Can you design for print?",
    "a": "Absolutely. We are experienced in print design and will supply you with print-ready files (with proper bleed, crop marks, and CMYK color profiles) that you can send directly to any professional printer."
  }
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Photography & Graphic Design Services",
  "serviceType": "Photography and Graphic Design",
  "description": "Professional photography and graphic design services in Dubai. Mints Global creates compelling brand visuals, commercial photography, motion graphics, and creative design assets for businesses across the UAE.",
  "url": "https://www.mintsglobal.ae/digital-marketing/photography-graphics",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Mints Global",
    "url": "https://www.mintsglobal.ae",
    "logo": "https://www.mintsglobal.ae/images/mints-global-logo.png",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Dubai",
      "addressCountry": "AE"
    }
  },
  "areaServed": {
    "@type": "Place",
    "name": "Dubai, UAE"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Photography & Graphic Design Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Commercial Photography Dubai" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Brand Photography UAE" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Graphic Design Services Dubai" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Logo & Brand Identity Design" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Social Media Graphics Dubai" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Motion Graphics & Visual Content" } }
    ]
  }
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Mints Global",
  "description": "Digital marketing agency in Dubai specialising in SEO, social media marketing, photography, graphic design, and brand strategy.",
  "url": "https://www.mintsglobal.ae",
  "logo": "https://www.mintsglobal.ae/images/mints-global-logo.png",
  "image": "https://www.mintsglobal.ae/images/photography-graphics-services-dubai.jpg",
  "telephone": "+971 56 245 8299",
  "email": "info@mintsglobal.ae",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Khalid Bin Al Waleed Rd - near burjuman mall - Bur Dubai - Dubai",
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
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
      "opens": "09:00",
      "closes": "18:00"
    }
  ],
  "sameAs": [
    "https://www.linkedin.com/company/mints-dubai",
    "https://www.instagram.com/mints.global/"
  ]
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.mintsglobal.ae/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Digital Marketing",
      "item": "https://www.mintsglobal.ae/digital-marketing"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Photography & Graphics",
      "item": "https://www.mintsglobal.ae/digital-marketing/photography-graphics"
    }
  ]
};

export function PhotographyGraphics() {
  return (
    <div className="w-full relative z-10 min-h-screen bg-brand-black">
      <SEO 
        title="Professional Photography & Design Dubai | Mints Global" 
        description="Mints Global offers photography and graphic design services in Dubai, creating visuals that help businesses stand out online."
        keywords={["commercial photography Dubai", "graphic design agency", "creative assets production", "product photography", "visual content creation"]}
        canonical="/digital-marketing/photography-graphics"
        ogImage="https://www.mintsglobal.ae/images/photography-graphics-services-dubai.jpg"
        twitterImage="https://www.mintsglobal.ae/images/photography-graphics-services-dubai.jpg"
        geoTarget={true}
        rawTitle={true}
      />
      {/* Hero Section */}
      <section className="relative w-full max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex items-center gap-4 mb-6">
              <span className="px-4 py-1 rounded-full border border-white/10 text-xs font-bold uppercase tracking-widest text-brand-white-70">
                Visual Excellence
              </span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-black mb-8 uppercase leading-[0.9] text-white">
              Photography<br/>
              <span className="text-olive-500">& Graphics.</span>
            </h1>
            <p className="text-brand-white-70 text-lg md:text-xl max-w-3xl leading-relaxed mb-12">
              Elevate your visual presence with professional photography and striking graphic design. We create assets that capture attention and communicate quality.
            </p>
            
            <div className="flex flex-wrap gap-4">
               <Link to="/contact" className="bg-olive-500 text-brand-black px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm hover:bg-olive-400 transition-colors inline-flex items-center gap-2 relative z-20">
                 Elevate Your Visuals <ArrowRight size={18} />
               </Link>
            </div>
          </motion.div>

          <div className="relative w-full aspect-[12/6] rounded-[2rem] overflow-hidden border border-white/5 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-t from-olive-950 via-transparent to-transparent z-10 pointer-events-none opacity-40" />
            <SafeImage
              src="/images/photography-graphics-services-dubai.jpg"
              fallbackSrc="/hero.png"
              alt="Professional photography and graphic design services in Dubai by Mints Global"
              title="Photography & Graphic Design Agency Dubai"
              width={1200}
              height={600}
              loading="eager"
              decoding="async"
              fetchPriority="high"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-olive-950 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="font-display text-4xl lg:text-5xl font-black uppercase mb-6 text-white">Visual Services</h2>
            <p className="text-brand-white-70 text-lg max-w-3xl">Premium imagery and bespoke graphics that form the foundation of your marketing efforts and brand identity.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <div className="bg-brand-black border border-white/5 p-10 rounded-3xl hover:border-olive-500/30 transition-colors">
              <CheckCircle2 className="text-olive-500 mb-6" size={32} />
              <h3 className="font-display font-bold text-xl uppercase mb-4 text-white">Corporate Photography</h3>
              <p className="text-brand-white-70 text-sm leading-relaxed">High-end executive headshots, team photos, and office culture photography that humanizes your brand.</p>
            </div>
            <div className="bg-brand-black border border-white/5 p-10 rounded-3xl hover:border-olive-500/30 transition-colors">
              <CheckCircle2 className="text-olive-500 mb-6" size={32} />
              <h3 className="font-display font-bold text-xl uppercase mb-4 text-white">Product Photography</h3>
              <p className="text-brand-white-70 text-sm leading-relaxed">Crisp, perfectly lit e-commerce product photos and styled lifestyle shots that drive online sales.</p>
            </div>
            <div className="bg-brand-black border border-white/5 p-10 rounded-3xl hover:border-olive-500/30 transition-colors">
              <CheckCircle2 className="text-olive-500 mb-6" size={32} />
              <h3 className="font-display font-bold text-xl uppercase mb-4 text-white">Event Photography</h3>
              <p className="text-brand-white-70 text-sm leading-relaxed">Professional coverage for corporate events, gala dinners, and exhibitions, delivered with fast turnarounds.</p>
            </div>
            <div className="bg-brand-black border border-white/5 p-10 rounded-3xl hover:border-olive-500/30 transition-colors">
              <CheckCircle2 className="text-olive-500 mb-6" size={32} />
              <h3 className="font-display font-bold text-xl uppercase mb-4 text-white">Social Media Graphics</h3>
              <p className="text-brand-white-70 text-sm leading-relaxed">Custom-designed templates and posts that ensure your social feeds look cohesive, branded, and professional.</p>
            </div>
            <div className="bg-brand-black border border-white/5 p-10 rounded-3xl hover:border-olive-500/30 transition-colors">
              <CheckCircle2 className="text-olive-500 mb-6" size={32} />
              <h3 className="font-display font-bold text-xl uppercase mb-4 text-white">Marketing Collateral</h3>
              <p className="text-brand-white-70 text-sm leading-relaxed">Design of brochures, whitepapers, flyers, and digital presentations that impress clients and stakeholders.</p>
            </div>
            <div className="bg-brand-black border border-white/5 p-10 rounded-3xl hover:border-olive-500/30 transition-colors">
              <CheckCircle2 className="text-olive-500 mb-6" size={32} />
              <h3 className="font-display font-bold text-xl uppercase mb-4 text-white">UI/UX Assets</h3>
              <p className="text-brand-white-70 text-sm leading-relaxed">Custom iconography, illustrations, and digital assets specifically designed for web and mobile interfaces.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-brand-black border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl lg:text-5xl font-black uppercase mb-4 text-white">Frequently Asked Questions</h2>
            <p className="text-brand-white-70 text-lg">Everything you need to know about our creative services.</p>
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
              First impressions matter. Let's make your visuals impossible to ignore.
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
            <Link to="/digital-marketing/seo" className="text-olive-500 hover:text-white font-bold transition-colors">SEO Optimization &rarr;</Link>
            <Link to="/digital-marketing/smm" className="text-olive-500 hover:text-white font-bold transition-colors">Social Media Marketing &rarr;</Link>
            <Link to="/digital-marketing/branding" className="text-olive-500 hover:text-white font-bold transition-colors">Brand Strategy &rarr;</Link>
          </div>
        </div>
      </section>
      
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={serviceSchema} />
      <JsonLd data={buildFaqSchema(faqs)} />
      <JsonLd data={breadcrumbSchema} />
    </div>
  );
}