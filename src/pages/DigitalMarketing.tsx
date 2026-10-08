import { ArrowRight, Search, TrendingUp, Share2, Target, Video, Image as ImageIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { SEO } from '../components/SEO';
import { buildFaqSchema, organizationSchema } from '../lib/schema-helpers';
import { SEO_DATA } from '../lib/seo-data';
import { JsonLd } from '../components/JsonLd';
import { ServicesAccordion } from '../components/ServicesAccordion';
import { WhyUsSection } from '../components/common/WhyUsSection';

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
    organizationSchema,
    {
      "@type": "Service",
      "@id": "https://www.mintsglobal.ae/digital-marketing#service",
      "name": "Digital Marketing Services Dubai",
      "provider": { "@id": "https://www.mintsglobal.ae/#organization" },
      "serviceType": "Digital Marketing",
      "description": "Full-suite digital marketing agency in Dubai: SEO, PPC, social media marketing, brand strategy, video production, and content marketing for UAE and global brands.",
      "areaServed": [
        { "@type": "Country", "name": "United Arab Emirates" },
        { "@type": "Country", "name": "United Kingdom" },
        { "@type": "Country", "name": "European Union" }
      ],
      "url": "https://www.mintsglobal.ae/digital-marketing"
    },
    buildFaqSchema([
      {
        q: "What digital marketing services does Mints Global offer in Dubai?",
        a: "Mints Global offers a full suite of digital marketing services in Dubai including SEO, PPC advertising (Google Ads & Meta Ads), social media marketing, content marketing, and email marketing — all tailored to UAE and global brands."
      },
      {
        q: "Where is Mints Global located?",
        a: "Mints Global is located at Office #315, 3rd Floor, Bank Street Building, Bur Dubai, UAE. We also serve UK-based clients via our London contact."
      },
      {
        q: "How can I contact Mints Global for digital marketing services?",
        a: "You can reach Mints Global by phone at +971 50 294 3916 (UAE) or +44 7899 727950 (UK), or by email at info@mintsglobal.ae."
      }
    ])
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
        canonical="/digital-marketing"
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
          DIGITAL <br /><span className="text-olive-500">MARKETING.</span>
        </h1>
        <p className="text-brand-white-70 max-w-2xl text-lg md:text-xl font-medium leading-relaxed mb-10">
          Data-driven strategies that amplify your brand resonance, capture high-intent audiences, and deliver measurable ROI.
        </p>
        <Link to="/contact" className="inline-flex bg-olive-500 text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm hover:bg-olive-400 transition-colors items-center gap-2">
          Get a Free Audit <ArrowRight size={18} />
        </Link>
      </section>

      {/* Grid Section */}
      <section className="bg-[#F0F0F0] border-y border-[#E4E4E4] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="font-display text-4xl font-black mb-16 uppercase">Core <span className="text-olive-500">Capabilities</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {subServices.map((srv, i) => (
              <div key={i} className="bg-white border border-[#E4E4E4] rounded-2xl p-8 hover:border-olive-500/40 transition-all shadow-sm hover:shadow-md group">
                <srv.icon className="text-olive-500 mb-6" size={36} strokeWidth={1.5} />
                <h3 className="text-xl font-display font-bold mb-3 group-hover:text-olive-500 transition-colors">{srv.name}</h3>
                <p className="text-brand-white-70 text-sm leading-relaxed mb-8">{srv.desc}</p>
                <Link to={srv.link} aria-label={`Learn more about ${srv.name}`} className="text-sm font-bold flex items-center gap-2 hover:text-olive-500 transition-colors uppercase tracking-wider">
                  Learn More <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WhyUsSection
        body="We don't just chase clicks; we engineer growth. Our digital marketing strategies are deeply integrated with our technical capabilities, meaning your campaigns benefit from superior tracking, faster landing pages, and AI-driven insights."
        bullets={['Data-First Approach', 'Transparent Reporting Dashboard', 'Cross-Platform Synergy', 'Dedicated Account Managers']}
        statEnd={340}
        statSuffix="%"
        statLabel="Average Traffic Increase"
      />

      {/* FAQ */}
      <section className="bg-[#F0F0F0] border-t border-[#E4E4E4] py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="font-display text-4xl md:text-5xl font-black mb-16 text-center uppercase tracking-tight">Frequently Asked <span className="text-olive-500">Questions</span></h2>
          <ServicesAccordion items={faqs.map(f => ({ title: f.q, content: f.a }))} />
        </div>
      </section>

      {/* CTA Bottom */}
      <section className="max-w-4xl mx-auto px-6 text-center py-20 md:py-32">
        <h2 className="font-display text-4xl md:text-5xl font-black mb-8 leading-tight">DOMINATE YOUR<br />DIGITAL LANDSCAPE.</h2>
        <Link to="/contact" className="inline-flex items-center gap-3 bg-[#182012] text-white px-10 py-5 rounded-full font-black uppercase tracking-widest hover:bg-olive-500 hover:text-white transition-all hover:scale-105 shadow-xl">
          Get a Proposal <ArrowRight size={20} />
        </Link>
      </section>
    </div>
  );
}
