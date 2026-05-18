import { ArrowRight, Code2, Smartphone, Globe, Database, Network, ShoppingCart, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';
import { useTranslation } from 'react-i18next';
import { SEO } from '../components/SEO';
import { SEO_DATA } from '../lib/seo-data';
import { JsonLd } from '../components/JsonLd';
import { ServicesAccordion } from '../components/ServicesAccordion';

const subServices = [
  { icon: Code2, name: "Custom Web Apps", desc: "Scalable, high-performance web applications built with modern frontend and backend frameworks." },
  { icon: Smartphone, name: "Mobile Ecosystems", desc: "Native and cross-platform mobile applications for iOS and Android tailored to your business. Contact us for a consultation today." },
  { icon: Globe, name: "Website Development", desc: "Corporate sites, portals, and landing pages optimized for speed and maximum conversion." },
  { icon: Database, name: "ERP Solutions", desc: "Bespoke Enterprise Resource Planning systems to unify your business operations." },
  { icon: Network, name: "CRM Development", desc: "Custom Customer Relationship Management platforms that empower your sales teams." },
  { icon: ShoppingCart, name: "E-Commerce Platforms", desc: "Secure, scalable, and high-converting e-commerce experiences on modern architectures." }
];

const faqs = [
  { q: "What tech stack do you use?", a: "We primarily build with Next.js, React, Node.js, Python, and scalable databases like PostgreSQL and MongoDB, deployed on AWS or Vercel." },
  { q: "Do you offer post-launch support and maintenance?", a: "Yes, we provide continuous maintenance, performance monitoring, and update packages via dedicated SLAs." },
  { q: "Can you rescue an existing legacy codebase?", a: "Absolutely. We conduct deep code audits, identify technical debt, and offer refactoring or gradual migration strategies." },
  { q: "What is your development methodology?", a: "We embrace Agile methodologies, delivering work in iterative sprints. This ensures transparency, adaptability to changing requirements, and regular stakeholder feedback." },
  { q: "How do you ensure data security and compliance?", a: "Security is built-in from day one using DevSecOps practices. We follow OWASP standards, encrypt data at rest and in transit, and ensure compliance with GDPR, HIPAA, or regional regulations as needed." }
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Software Development Services",
  "serviceType": "Software Development",
  "provider": { "@id": "https://mintsglobal.ae/#organization" },
  "areaServed": [
    "United Arab Emirates", "Saudi Arabia", "Germany",
    "United Kingdom", "United States", "Global"
  ],
  "description": "Enterprise software development. Custom web apps, mobile applications, ERP systems, CRM platforms, and e-commerce solutions for scaling businesses worldwide.",
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "priceSpecification": {
      "@type": "PriceSpecification",
      "priceCurrency": "AED",
      "minPrice": 10000
    }
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Custom Web Apps" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Mobile Ecosystems" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "ERP Solutions" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "CRM Development" } }
    ]
  }
};

function buildFaqSchema(faqsData: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqsData.map(({ q, a }) => ({
      "@type": "Question",
      "name": q,
      "acceptedAnswer": { "@type": "Answer", "text": a }
    }))
  };
}

export function SoftwareDevelopment() {
  const { i18n } = useTranslation();
  const lang = (i18n.language as 'en' | 'ar' | 'de') || 'en';
  const meta = SEO_DATA.softwareDev[lang] || SEO_DATA.softwareDev.en;

  return (
    <div className="w-full">
      <SEO 
        title={meta.title}
        description={meta.description}
        keywords={["software engineering Dubai", "enterprise software development", "scalable web applications", "mobile app ecosystem", "custom software solutions"]}
        canonical="/software-development"
      />
      <JsonLd data={serviceSchema} />
      <JsonLd data={buildFaqSchema(faqs)} />
      <section className="relative w-full max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-black mb-6 uppercase leading-tight">
          SOFTWARE <br/><span className="text-olive-500">DEVELOPMENT.</span>
        </h1>
        <p className="text-brand-white-70 max-w-2xl text-lg md:text-xl font-medium leading-relaxed mb-10">
          Scalable, resilient web, mobile, and enterprise applications that drive operational excellence and future-proof your business.
        </p>
        <Link to="/contact" className="inline-flex bg-olive-500 text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm hover:bg-olive-400 transition-colors items-center gap-2">
          Discuss Your Specs <ArrowRight size={18} />
        </Link>
      </section>

      <section className="bg-olive-900 border-y border-white/5 py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="font-display text-4xl font-black mb-16 uppercase">Core <span className="text-olive-500">Capabilities</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {subServices.map((srv, i) => (
              <div key={i} className="bg-olive-950/50 border border-white/5 rounded-2xl p-8 hover:border-olive-500/50 transition-colors group">
                <srv.icon className="text-olive-500 mb-6" size={36} strokeWidth={1.5} />
                <h3 className="text-xl font-display font-bold mb-3 group-hover:text-olive-500 transition-colors">{srv.name}</h3>
                <p className="text-brand-white-70 text-sm leading-relaxed mb-8">{srv.desc}</p>
                <Link to="/contact" className="text-sm font-bold flex items-center gap-2 hover:text-white transition-colors uppercase tracking-wider">
                  Learn More <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
           <div>
             <h2 className="font-display text-4xl font-black mb-6 uppercase">Why <span className="text-olive-500">Mints Global?</span></h2>
             <p className="text-brand-white-70 mb-8 leading-relaxed">
               We treat code as a craft. Guided by agile methodologies and modern DevOps principles, we build software that scales securely to millions of users with near-zero downtime.
             </p>
             <ul className="space-y-4">
               {['Agile Delivery Sprints', 'Test-Driven Development (TDD)', 'Secure By Design (DevSecOps)', 'Cloud-Native Architectures'].map(item => (
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
                  <CountUp end={99.9} decimals={1} duration={2.5} enableScrollSpy />%
                </div>
                <div className="font-bold text-olive-500 uppercase tracking-widest text-sm mt-4">Uptime & Reliability</div>
              </div>
           </div>
        </div>
      </section>

      <section className="bg-olive-900 border-t border-white/5 py-24">
         <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <h2 className="font-display text-4xl md:text-5xl font-black mb-16 text-center uppercase tracking-tight">Frequently Asked <span className="text-olive-500">Questions</span></h2>
            <ServicesAccordion items={faqs.map(f => ({ title: f.q, content: f.a }))} />
         </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 text-center py-20 md:py-32">
         <h2 className="font-display text-4xl md:text-5xl font-black mb-8 leading-tight">BUILD YOUR NEXT<br />BIG IDEA.</h2>
         <Link to="/contact" className="inline-flex items-center gap-3 bg-brand-white text-olive-950 px-10 py-5 rounded-full font-black uppercase tracking-widest hover:bg-olive-500 hover:text-white transition-all hover:scale-105">
           Talk to an Architect <ArrowRight size={20} />
         </Link>
      </section>
    </div>
  );
}
