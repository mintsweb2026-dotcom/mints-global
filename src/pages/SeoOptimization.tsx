import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { JsonLd } from '../components/JsonLd';
import { SEO } from '../components/SEO';
import { SafeImage } from '../components/SafeImage';

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Mints Global",
  "url": "https://www.mintsglobal.ae",
  "logo": "https://www.mintsglobal.ae/images/mints-global-logo.png",
  "description": "Mints Global is a leading digital marketing agency based in Dubai, UAE, offering SEO, social media marketing, PPC, web design and content services.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Dubai",
    "addressRegion": "Dubai",
    "addressCountry": "AE"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Customer Support",
    "areaServed": "AE",
    "availableLanguage": ["English", "Arabic"]
  },
  "sameAs": [
    "https://www.linkedin.com/company/mintsglobal",
    "https://www.instagram.com/mintsglobal",
    "https://www.facebook.com/mintsglobal"
  ]
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Mints Global Digital Marketing Agency",
  "image": "https://www.mintsglobal.ae/images/seo-services-og.jpg",
  "url": "https://www.mintsglobal.ae/digital-marketing/seo",
  "telephone": "+971 502943916",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Office #315, 3rd Floor, Bank Street Building, Bur Dubai, Dubai",
    "addressLocality": "Dubai",
    "addressRegion": "Dubai",
    "postalCode": "[Postal Code]",
    "addressCountry": "AE"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 25.2048,
    "longitude": 55.2708
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
      "opens": "09:00",
      "closes": "18:00"
    }
  ],
  "areaServed": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": 25.2048,
      "longitude": 55.2708
    },
    "geoRadius": "50000"
  }
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Search Engine Optimization",
  "name": "SEO Services in Dubai",
  "description": "Mints Global provides comprehensive SEO services including technical SEO audits, on-page optimization, link building, local SEO, and content strategy for businesses in Dubai and across the UAE.",
  "provider": {
    "@type": "Organization",
    "name": "Mints Global",
    "url": "https://www.mintsglobal.ae"
  },
  "areaServed": {
    "@type": "Country",
    "name": "United Arab Emirates"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "SEO Service Packages",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Technical SEO Audit"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "On-Page SEO Optimization"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Link Building & Off-Page SEO"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Local SEO Dubai"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "SEO Content Strategy"
        }
      }
    ]
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What SEO services does Mints Global offer in Dubai?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Mints Global offers a full range of SEO services including technical SEO audits, on-page optimization, content strategy, link building, local SEO for Dubai businesses, and monthly performance reporting."
      }
    },
    {
      "@type": "Question",
      "name": "How long does SEO take to show results in UAE?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "SEO results in the UAE typically begin to show within 3 to 6 months for competitive keywords. Mints Global provides monthly reporting so you can track progress from the first month of implementation."
      }
    },
    {
      "@type": "Question",
      "name": "Does Mints Global provide local SEO for businesses in Dubai?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Mints Global specializes in local SEO for Dubai and UAE businesses, including Google Business Profile optimization, local citation building, and location-based keyword targeting to drive foot traffic and local leads."
      }
    },
    {
      "@type": "Question",
      "name": "What industries does Mints Global serve for SEO in the UAE?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Mints Global serves a wide range of industries including real estate, hospitality, e-commerce, healthcare, professional services, and technology companies across Dubai and the broader UAE market."
      }
    },
    {
      "@type": "Question",
      "name": "How much do SEO services cost at Mints Global?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "SEO packages at Mints Global are customized to your business goals, current website performance, and competitive landscape. Contact us for a free SEO audit and a tailored proposal for your Dubai or UAE business."
      }
    }
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
      "item": "https://www.mintsglobal.ae"
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
      "name": "SEO Services",
      "item": "https://www.mintsglobal.ae/digital-marketing/seo"
    }
  ]
};

export function SeoOptimization() {
  return (
    <div className="w-full relative z-10 min-h-screen bg-brand-black">
      <SEO 
        title="SEO Services in Dubai & UAE | Top-Ranked SEO Agency " 
        description=" Grow your business with Mints Global, Dubai’s SEO agency. Get higher rankings, more traffic, and qualified leads with expert SEO strategies."
        keywords={["SEO agency Dubai", "bilingual SEO Arabic English", "technical SEO services", "search engine optimization", "organic traffic growth"]} 
        canonical="/digital-marketing/seo"
        ogTitle="SEO Services in Dubai & UAE | Mints Global"
        ogDescription="Data-driven SEO agency in Dubai. On-page SEO, link building & local SEO for UAE businesses. Free audit available."
        ogImage="https://www.mintsglobal.ae/images/seo-services-og.jpg"
        twitterTitle="SEO Services in Dubai & UAE | Mints Global"
        twitterDescription="Top SEO agency in Dubai offering data-driven strategies for UAE businesses. Book your free SEO audit today."
        twitterImage="https://www.mintsglobal.ae/images/seo-services-og.jpg"
        geoTarget={true}
        rawTitle={true}
      />
      <section className="relative w-full max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-black mb-8 uppercase leading-[0.9] text-white">
              BE FOUND.<br/><span className="text-olive-500">BE CHOSEN.</span>
            </h1>
            <p className="text-brand-white-70 text-lg md:text-xl max-w-3xl leading-relaxed mb-12 uppercase tracking-tight">
              If your business is not on the first page of Google, it is practically invisible. Mints Global delivers bold, data-backed SEO strategies that position your brand at the top.
            </p>
            <div className="flex flex-wrap gap-4">
               <Link to="/contact" className="bg-olive-500 text-brand-black px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm hover:bg-olive-400 transition-colors inline-flex items-center gap-2 relative z-20">
                  Discuss Your Project <ArrowRight size={18} />
               </Link>
            </div>
          </motion.div>
          
          <div className="relative w-full aspect-[16/9] md:aspect-[16/10] lg:aspect-square rounded-[2rem] overflow-hidden border border-white/5 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-t from-olive-950 via-transparent to-transparent z-10 pointer-events-none opacity-40" />
            <SafeImage
              src="/images/seo-services-og.webp"
              fallbackSrc="/hero.webp"
              alt="SEO agency team in Dubai planning a search engine optimization strategy for a UAE business"
              title="SEO Services Dubai – Mints Global"
              width="1200"
              height="630"
              loading="eager"
              decoding="async"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
            />
          </div>
        </div>
      </section>
      
      <section className="py-24 bg-olive-950 border-t border-white/5">
         <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="font-display text-3xl md:text-5xl font-black uppercase mb-8 text-white">Strategic <span className="text-olive-500">Systems.</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
              <div>
                <p className="text-brand-white-70 text-lg font-medium leading-relaxed mb-6">
                  We do not sell promises. We build systems. From technical audits to high-authority link acquisition, every move is designed for revenue growth.
                </p>
                <p className="text-brand-white-40 font-medium leading-relaxed mb-8">
                  Whether you are a startup in Dubai, a mid-market company in Abu Dhabi, or an enterprise brand targeting Europe — we craft strategies built for your specific competition.
                </p>
                <div className="p-8 rounded-3xl bg-white/5 border border-white/10 italic text-brand-white-70">
                  "Everything you need to dominate search — technical, on-page, off-page, content, and local. One team, one strategy, one measurable outcome."
                </div>
              </div>
            </div>
            
            <h3 className="font-display text-3xl font-black uppercase mb-12 text-white">SEO Service Stack</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  <div key={0} className="bg-brand-black border border-white/5 p-8 rounded-3xl hover:border-olive-500/30 transition-colors">
                     <CheckCircle2 className="text-olive-500 mb-6" size={32} />
                     <h3 className="font-display font-bold text-xl uppercase mb-4 text-white">Deep Technical Audits</h3>
                     <p className="text-brand-white-70 text-sm leading-relaxed font-medium">
                        Full-stack analysis of site architecture, load speeds, and mobile-first readiness.
                     </p>
                  </div>
                  <div key={1} className="bg-brand-black border border-white/5 p-8 rounded-3xl hover:border-olive-500/30 transition-colors">
                     <CheckCircle2 className="text-olive-500 mb-6" size={32} />
                     <h3 className="font-display font-bold text-xl uppercase mb-4 text-white">Semantic On-Page</h3>
                     <p className="text-brand-white-70 text-sm leading-relaxed font-medium">
                        Strategically mapping intent-based keywords to titles, headers, and meta metadata.
                     </p>
                  </div>
                  <div key={2} className="bg-brand-black border border-white/5 p-8 rounded-3xl hover:border-olive-500/30 transition-colors">
                     <CheckCircle2 className="text-olive-500 mb-6" size={32} />
                     <h3 className="font-display font-bold text-xl uppercase mb-4 text-white">Bilingual Targeting</h3>
                     <p className="text-brand-white-70 text-sm leading-relaxed font-medium">
                        Expertly optimized content in both English and Arabic to capture dual search intent.
                     </p>
                  </div>
                  <div key={3} className="bg-brand-black border border-white/5 p-8 rounded-3xl hover:border-olive-500/30 transition-colors">
                     <CheckCircle2 className="text-olive-500 mb-6" size={32} />
                     <h3 className="font-display font-bold text-xl uppercase mb-4 text-white">UX & Core Web Vitals</h3>
                     <p className="text-brand-white-70 text-sm leading-relaxed font-medium">
                        Aligning technical health with user experience for maximum search engine priority.
                     </p>
                  </div>
            </div>
         </div>
      </section>

      <section className="py-24 bg-brand-black-light border-t border-white/5">
         <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
               <h2 className="font-display text-4xl md:text-6xl font-black uppercase mb-4 text-white">ENGINEERED FOR <br/><span className="text-olive-500">UAE & EU.</span></h2>
               <p className="text-olive-500 text-sm font-bold tracking-widest uppercase">Trans-Continental Search Optimization</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
               <div className="bg-brand-black border border-white/5 p-10 rounded-3xl shadow-xl hover:border-olive-500/30 transition-colors">
                  <h3 className="font-display font-bold text-3xl uppercase mb-4 text-white">Speed and Competition</h3>
                  <p className="font-medium text-sm text-brand-white-70 uppercase tracking-tight mb-6">
                    99%+ internet penetration means you need mobile-first technical excellence and seasonal strategies for Ramadan and DSF.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-sm font-black uppercase text-brand-white-70"><CheckCircle2 size={18} className="text-olive-500" /> Bilingual Arabic/English</li>
                    <li className="flex items-center gap-3 text-sm font-black uppercase text-brand-white-70"><CheckCircle2 size={18} className="text-olive-500" /> Geo-targeted Emirates strategies</li>
                    <li className="flex items-center gap-3 text-sm font-black uppercase text-brand-white-70"><CheckCircle2 size={18} className="text-olive-500" /> Mobile-first priority</li>
                    <li className="flex items-center gap-3 text-sm font-black uppercase text-brand-white-70"><CheckCircle2 size={18} className="text-olive-500" /> Seasonal search alignment</li>
                  </ul>
               </div>
               <div className="bg-olive-950 p-10 rounded-3xl shadow-xl text-white">
                  <h3 className="font-display font-bold text-3xl uppercase mb-4 text-white">One Continent, Many Markets</h3>
                  <p className="font-medium text-sm text-white/70 uppercase tracking-tight mb-6">
                    Navigating complexity from the UK to Germany with country-specific strategies and multilingual content.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-sm font-black uppercase text-white"><CheckCircle2 size={18} className="text-olive-500" /> hreflang Implementation</li>
                    <li className="flex items-center gap-3 text-sm font-black uppercase text-white"><CheckCircle2 size={18} className="text-olive-500" /> GDPR-compliant Analytics</li>
                    <li className="flex items-center gap-3 text-sm font-black uppercase text-white"><CheckCircle2 size={18} className="text-olive-500" /> EU-wide link building</li>
                    <li className="flex items-center gap-3 text-sm font-black uppercase text-white"><CheckCircle2 size={18} className="text-olive-500" /> Localized content approach</li>
                  </ul>
               </div>
            </div>
            
            <div className="text-center mb-16">
               <h2 className="font-display text-4xl md:text-6xl font-black uppercase mb-4 text-white">THE SEO <br/><span className="text-olive-500">ADVANTAGE.</span></h2>
               <p className="text-olive-500 text-sm font-bold tracking-widest uppercase">Based in Bur Dubai — Delivering Bold Outcomes</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {[
                 {title: "Bur Dubai Headquartered", desc: "Deep UAE market knowledge — we know how regional consumers search, behave, and buy."},
                 {title: "Bilingual English & Arabic", desc: "Full coverage of the UAE's dominant search languages for maximum reach."},
                 {title: "Proven International Expertise", desc: "Decades of combined experience across UK, Germany, France, and Spain markets."},
                 {title: "100% White-Hat Methodology", desc: "Ethical, sustainable strategies built to survive any algorithm update."},
                 {title: "Integrated Marketing Suite", desc: "SEO working in harmony with social, performance, and content funnels."},
                 {title: "No Templates, No Shortcuts", desc: "Every strategy is custom-built from scratch for your specific business goals."}
               ].map((adv, i) => (
                 <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white hover:border-white group transition-colors">
                    <h3 className="font-display font-bold text-xl uppercase mb-3 text-white group-hover:text-olive-950 transition-colors">{adv.title}</h3>
                    <p className="text-sm font-medium text-white/40 leading-relaxed uppercase tracking-tight group-hover:text-olive-600 transition-colors">{adv.desc}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      <section className="py-24 bg-olive-950 border-t border-white/5 text-center">
         <div className="max-w-4xl mx-auto px-6 lg:px-8">
           <h2 className="font-display text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-[0.85] text-white">
             BECOME THE <br/><span className="text-olive-500">LEADER.</span>
           </h2>
           <p className="text-xl text-white/60 uppercase tracking-tight mb-12 leading-relaxed">
             Every day without a strong SEO strategy is another day your competitors take the traffic, the leads, and the revenue that should be yours. Ready to change that?
           </p>
           <Link to="/contact" className="inline-flex items-center gap-4 bg-olive-500 text-olive-950 px-12 py-6 rounded-full font-black uppercase tracking-widest hover:bg-white transition-all group">
              Book Free SEO Consultation <ArrowRight className="group-hover:translate-x-2 transition-transform" />
           </Link>
         </div>
      </section>
    
      <section className="py-16 border-t border-white/5 bg-olive-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h3 className="font-display text-2xl font-black uppercase mb-8 text-white">Related Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link to="/digital-marketing/smm" className="text-olive-500 hover:text-white font-bold transition-colors">Social Media Marketing &rarr;</Link>
            <Link to="/digital-marketing/branding" className="text-olive-500 hover:text-white font-bold transition-colors">Brand Strategy &rarr;</Link>
            <Link to="/digital-marketing/performance-marketing" className="text-olive-500 hover:text-white font-bold transition-colors">Performance Marketing &rarr;</Link>
          </div>
        </div>
      </section>
      
      <JsonLd data={organizationSchema} />
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />
    </div>
  );
}