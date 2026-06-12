import { ArrowRight, Search, TrendingUp, Share2, Target, Video, Image as ImageIcon, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';
import { useTranslation } from 'react-i18next';
import { SEO } from '../components/SEO';
import { SEO_DATA } from '../lib/seo-data';
import { JsonLd } from '../components/JsonLd';
import { ServicesAccordion } from '../components/ServicesAccordion';

const subServices = [
  { icon: Search, name: "SEO & Content Strategy", desc: "Climb search rankings organically with high-intent keywords and authoritative content.", link: "/digital-marketing/seo" },
  { icon: TrendingUp, name: "Performance Marketing", desc: "Data-driven PPC and media buying campaigns optimized for maximum ROI.", link: "/contact" },
  { icon: Share2, name: "Social Media Management", desc: "Build loyal communities and brand resonance across all major social platforms.", link: "/digital-marketing/smm" },
  { icon: Target, name: "Brand Strategy", desc: "Define your voice, positioning, and visual identity to stand out in crowded markets.", link: "/contact" },
  { icon: Video, name: "Video Production", desc: "High-quality video assets for ads, explainers, and corporate communications.", link: "/contact" },
  { icon: ImageIcon, name: "Photography & Graphics", desc: "Stunning visuals and creative assets that capture attention and drive action.", link: "/contact" }
];

const faqs = [
  { q: "How long does it take to see SEO results?", a: "Typically, noticeable SEO results take 3 to 6 months, depending on industry competitiveness and current domain authority." },
  { q: "Do you manage ad spend directly?", a: "Yes, we handle end-to-end media buying on Google, Meta, LinkedIn, and more, optimizing your budgets for the best CPA." },
  { q: "What is included in Brand Strategy?", a: "It includes market research, positioning, tone of voice, visual identity guidelines, and a comprehensive communication roadmap." }
];

const digitalMarketingSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.mintsglobal.ae/digital-marketing#webpage",
      "url": "https://www.mintsglobal.ae/digital-marketing",
      "name": "Digital Marketing Services in Dubai, UAE | Mints Global",
      "description": "ROI-driven digital marketing services in Dubai — SEO, PPC, social media, content marketing and email campaigns for UAE and global brands.",
      "inLanguage": "en",
      "isPartOf": {
        "@id": "https://www.mintsglobal.ae/#website"
      },
      "breadcrumb": {
        "@id": "https://www.mintsglobal.ae/digital-marketing#breadcrumb"
      },
      "primaryImageOfPage": {
        "@id": "https://www.mintsglobal.ae/digital-marketing#primaryimage"
      },
      "datePublished": "2024-01-01",
      "dateModified": "2025-06-01"
    },
    {
      "@type": "ImageObject",
      "@id": "https://www.mintsglobal.ae/digital-marketing#primaryimage",
      "url": "https://www.mintsglobal.ae/images/digital-marketing-og.jpg",
      "width": 1200,
      "height": 630,
      "caption": "Digital marketing services Dubai — Mints Global"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.mintsglobal.ae/digital-marketing#breadcrumb",
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
        }
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://www.mintsglobal.ae/#website",
      "url": "https://www.mintsglobal.ae/",
      "name": "Mints Global",
      "description": "Premium digital agency in Dubai bridging Middle Eastern and European markets.",
      "publisher": {
        "@id": "https://www.mintsglobal.ae/#organization"
      }
    },
    {
      "@type": "Organization",
      "@id": "https://www.mintsglobal.ae/#organization",
      "name": "Mints Global",
      "url": "https://www.mintsglobal.ae/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.mintsglobal.ae/images/mints-global-logo.png",
        "width": 300,
        "height": 60
      },
      "description": "Premium digital agency in Dubai offering digital marketing, SEO, PPC, social media, content marketing, software development, branding and cybersecurity.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Office #315, 3rd Floor, Bank Street Building",
        "addressLocality": "Bur Dubai",
        "addressRegion": "Dubai",
        "addressCountry": "AE"
      },
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+971502943916",
          "contactType": "customer service",
          "areaServed": "AE",
          "availableLanguage": ["English", "Arabic"]
        },
        {
          "@type": "ContactPoint",
          "telephone": "+447899727950",
          "contactType": "customer service",
          "areaServed": "GB",
          "availableLanguage": "English"
        }
      ],
      "email": "info@mintsglobal.ae",
      "sameAs": [
        "https://twitter.com/mintsglobal"
      ]
    },
    {
      "@type": "Service",
      "@id": "https://www.mintsglobal.ae/digital-marketing#service",
      "name": "Digital Marketing Services",
      "description": "Comprehensive digital marketing services in Dubai including SEO, PPC advertising, social media marketing, content marketing and email marketing campaigns.",
      "provider": {
        "@id": "https://www.mintsglobal.ae/#organization"
      },
      "serviceType": "Digital Marketing",
      "areaServed": [
        {
          "@type": "Country",
          "name": "United Arab Emirates"
        },
        {
          "@type": "Country",
          "name": "United Kingdom"
        }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Digital Marketing Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Search Engine Optimisation (SEO)",
              "description": "Technical SEO, on-page SEO, link building and local SEO for UAE businesses."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Pay-Per-Click Advertising (PPC)",
              "description": "Google Ads, Meta Ads and paid media management for maximum ROI."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Social Media Marketing",
              "description": "Brand-building and community management across Instagram, LinkedIn and Facebook."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Content Marketing",
              "description": "Blog posts, video scripts and brand storytelling that drive organic growth."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Email Marketing",
              "description": "Targeted email sequences and drip campaigns for lead nurturing and retention."
            }
          }
        ]
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.mintsglobal.ae/digital-marketing#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What digital marketing services does Mints Global offer in Dubai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Mints Global offers a full suite of digital marketing services in Dubai including SEO, PPC advertising (Google Ads & Meta Ads), social media marketing, content marketing, and email marketing — all tailored to UAE and global brands."
          }
        },
        {
          "@type": "Question",
          "name": "Where is Mints Global located?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Mints Global is located at Office #315, 3rd Floor, Bank Street Building, Bur Dubai, UAE. We also serve UK-based clients via our London contact."
          }
        },
        {
          "@type": "Question",
          "name": "How can I contact Mints Global for digital marketing services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can reach Mints Global by phone at +971 50 294 3916 (UAE) or +44 7899 727950 (UK), or by email at info@mintsglobal.ae."
          }
        }
      ]
    }
  ]
};

export function DigitalMarketing() {
  const { i18n } = useTranslation();
  const lang = (i18n.language as 'en' | 'ar' | 'de') || 'en';
  const meta = SEO_DATA.digitalMarketing[lang] || SEO_DATA.digitalMarketing.en;

  return (
    <div className="w-full">
      <SEO 
        title={lang === 'en' ? "Digital Marketing Services in Dubai, UAE | Mints Global" : meta.title}
        description={lang === 'en' ? "Grow your brand with Mints Global Dubai. ROI-driven SEO, PPC, social media, content marketing & email campaigns for UAE and global brands." : meta.description}
        keywords={["digital marketing agency Dubai", "ROI digital marketing", "SEO and performance marketing", "social media strategy", "brand resonance"]}
        canonical="https://www.mintsglobal.ae/digital-marketing"
        ogTitle="Digital Marketing Services in Dubai, UAE | Mints Global"
        ogDescription="ROI-driven digital marketing in Dubai — SEO, PPC, social media & content marketing. Mints Global delivers measurable results for UAE and global brands."
        ogImage="https://www.mintsglobal.ae/images/digital-marketing-og.jpg"
        ogType="website"
        twitterTitle="Digital Marketing Services in Dubai | Mints Global"
        twitterDescription="Mints Global delivers ROI-driven digital marketing for UAE and global brands — SEO, PPC, social media, content & email marketing."
        twitterImage="https://www.mintsglobal.ae/images/digital-marketing-og.jpg"
      />
      <JsonLd data={digitalMarketingSchema} />
      {/* Hero Section */}
      <section className="relative w-full max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-black mb-6 uppercase leading-tight">
          DIGITAL <br/><span className="text-olive-500">MARKETING.</span>
        </h1>
        <p className="text-brand-white-70 max-w-2xl text-lg md:text-xl font-medium leading-relaxed mb-10">
          Data-driven strategies that amplify your brand resonance, capture high-intent audiences, and deliver measurable ROI.
        </p>
        <Link to="/contact" className="inline-flex bg-olive-500 text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm hover:bg-olive-400 transition-colors items-center gap-2">
          Get a Free Audit <ArrowRight size={18} />
        </Link>
      </section>

      {/* Grid Section */}
      <section className="bg-olive-900 border-y border-white/5 py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="font-display text-4xl font-black mb-16 uppercase">Core <span className="text-olive-500">Capabilities</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {subServices.map((srv, i) => (
              <div key={i} className="bg-olive-950/50 border border-white/5 rounded-2xl p-8 hover:border-olive-500/50 transition-colors group">
                <srv.icon className="text-olive-500 mb-6" size={36} strokeWidth={1.5} />
                <h3 className="text-xl font-display font-bold mb-3 group-hover:text-olive-500 transition-colors">{srv.name}</h3>
                <p className="text-brand-white-70 text-sm leading-relaxed mb-8">{srv.desc}</p>
                <Link to={srv.link} className="text-sm font-bold flex items-center gap-2 hover:text-white transition-colors uppercase tracking-wider">
                  Learn More <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
           <div>
             <h2 className="font-display text-4xl font-black mb-6 uppercase">Why <span className="text-olive-500">Mints Global?</span></h2>
             <p className="text-brand-white-70 mb-8 leading-relaxed">
               We don't just chase clicks; we engineer growth. Our digital marketing strategies are deeply integrated with our technical capabilities, meaning your campaigns benefit from superior tracking, faster landing pages, and AI-driven insights.
             </p>
             <ul className="space-y-4">
               {['Data-First Approach', 'Transparent Reporting Dashboard', 'Cross-Platform Synergy', 'Dedicated Account Managers'].map(item => (
                 <li key={item} className="flex items-center gap-3 font-bold text-sm uppercase tracking-wide">
                   <CheckCircle2 className="text-olive-500" size={20} /> {item}
                 </li>
               ))}
             </ul>
           </div>
           <div className="bg-olive-900 border border-white/5 rounded-3xl p-10 relative overflow-hidden aspect-square flex items-center justify-center">
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-olive-500 via-olive-900 to-olive-950"></div>
              <div className="relative text-center">
                <div className="font-display text-4xl md:text-5xl lg:text-7xl font-black text-white mb-2">
                  <CountUp end={340} duration={2.5} enableScrollSpy />%
                </div>
                <div className="font-bold text-olive-500 uppercase tracking-widest text-sm">Average Traffic Increase</div>
              </div>
           </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-olive-900 border-t border-white/5 py-24">
         <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="font-display text-4xl md:text-5xl font-black mb-16 text-center uppercase tracking-tight">Frequently Asked <span className="text-olive-500">Questions</span></h2>
            <ServicesAccordion items={faqs.map(f => ({ title: f.q, content: f.a }))} />
         </div>
      </section>

      {/* CTA Bottom */}
      <section className="max-w-4xl mx-auto px-6 text-center py-20 md:py-32">
         <h2 className="font-display text-4xl md:text-5xl font-black mb-8 leading-tight">DOMINATE YOUR<br />DIGITAL LANDSCAPE.</h2>
         <Link to="/contact" className="inline-flex items-center gap-3 bg-brand-white text-olive-950 px-10 py-5 rounded-full font-black uppercase tracking-widest hover:bg-olive-500 hover:text-white transition-all hover:scale-105">
           Get a Proposal <ArrowRight size={20} />
         </Link>
      </section>
    </div>
  );
}
