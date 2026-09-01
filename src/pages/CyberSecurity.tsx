import { ArrowRight, ShieldAlert, Activity, FileLock2, ShieldCheck, CloudLightning, Cpu, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SafeCountUp as CountUp } from '../components/SafeCountUp';
import { useTranslation } from 'react-i18next';
import { SEO } from '../components/SEO';
import { SEO_DATA } from '../lib/seo-data';
import { JsonLd } from '../components/JsonLd';
import { ServicesAccordion } from '../components/ServicesAccordion';
import { SafeImage } from '../components/SafeImage';

const subServices = [
  { icon: ShieldAlert, name: "Offensive Security", desc: "Rigorous penetration testing, red teaming, and vulnerability assessments to expose critical flaws." },
  { icon: Activity, name: "Incident Response", desc: "Rapid remediation, forensic analysis, and damage control during an active cyber breach." },
  { icon: FileLock2, name: "Managed Advisory", desc: "Virtual CISO services and ongoing strategic security guidance tailored to your risks." },
  { icon: ShieldCheck, name: "Compliance & GRC", desc: "Attain and maintain NESA, ISO 27001, GDPR, and other critical frameworks effortlessly." },
  { icon: CloudLightning, name: "Cloud Security", desc: "Auditing and securing AWS, Azure, and Google Cloud environments against misconfigurations." },
  { icon: Cpu, name: "OT/IoT Security", desc: "Protecting critical infrastructure, industrial logic, and smart devices from malicious manipulation." }
];

const faqs = [
  {
    q: "What cyber security services does Mints Global offer in Dubai?",
    a: "Mints Global offers a full suite of cyber security services in Dubai including threat detection, network security, penetration testing, cloud security, incident response, and compliance auditing for UAE businesses."
  },
  {
    q: "How can I get a cyber security audit for my Dubai business?",
    a: "Contact Mints Global for a free cyber security consultation. Our team will assess your current security posture and recommend a tailored protection plan for your business."
  },
  {
    q: "Does Mints Global provide cyber security for SMEs in the UAE?",
    a: "Yes. Mints Global provides scalable cyber security solutions for SMEs, enterprises, and government entities across Dubai and the wider UAE."
  },
  {
    q: "What is penetration testing and why does my business need it?",
    a: "Penetration testing simulates real-world cyber attacks on your systems to identify vulnerabilities before malicious hackers do. It is essential for businesses handling sensitive data in Dubai and the UAE."
  }
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["ProfessionalService", "LocalBusiness"],
  "name": "Mints Global",
  "url": "https://www.mintsglobal.ae/cyber-security/",
  "logo": "https://www.mintsglobal.ae/images/mints-global-logo.svg",
  "image": "https://www.mintsglobal.ae/images/hero-cyber-security.webp",
  "description": "Mints Global provides enterprise-grade Cyber Security services in Dubai including threat detection, network protection, penetration testing, and compliance auditing for UAE businesses.",
  "telephone": "+971-50-294-3916",
  "email": "info@mintsglobal.ae",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Office #315, 3rd Floor, Bank Street Building, Bur Dubai",
    "addressLocality": "Dubai",
    "addressRegion": "Dubai",
    "postalCode": "00000",
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
    "https://www.linkedin.com/company/mintsglobal",
    "https://twitter.com/mintsglobal",
    "https://www.instagram.com/mintsglobal"
  ],
  "priceRange": "$$",
  "areaServed": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": "25.2048",
      "longitude": "55.2708"
    },
    "geoRadius": "100000"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Cyber Security Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Threat Detection & Monitoring" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Network Security & Firewall Protection" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Penetration Testing" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Cyber Security Compliance Audit" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Incident Response" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Cloud Security" } }
    ]
  }
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Cyber Security Services in Dubai",
  "provider": {
    "@type": "Organization",
    "name": "Mints Global",
    "url": "https://www.mintsglobal.ae"
  },
  "serviceType": "Cyber Security",
  "areaServed": {
    "@type": "Country",
    "name": "United Arab Emirates"
  },
  "description": "Comprehensive cyber security solutions for businesses in Dubai and the UAE, including network security, penetration testing, threat intelligence, and compliance management.",
  "url": "https://www.mintsglobal.ae/cyber-security/",
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "priceCurrency": "AED",
    "url": "https://www.mintsglobal.ae/cyber-security/"
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

export function CyberSecurity() {
  const { i18n } = useTranslation();
  const lang = (i18n.language as 'en' | 'ar' | 'de') || 'en';
  const meta = SEO_DATA.cyberSecurity[lang] || SEO_DATA.cyberSecurity.en;

  return (
    <div className="w-full">
      <SEO 
        title={meta.title}
        description={meta.description}
        keywords={["cyber security agency Dubai", "Zero Trust implementation", "managed security services", "threat hunting", "offensive testing"]}
        canonical="/cyber-security/"
        ogImage="https://www.mintsglobal.ae/images/hero-cyber-security.webp"
        ogTitle={lang === 'en' ? "Cyber Security Services in Dubai | Mints Global" : undefined}
        ogDescription={lang === 'en' ? "Mints Global delivers enterprise-grade Cyber Security solutions in Dubai — threat detection, network protection & compliance. Get a free security audit today!" : undefined}
        twitterTitle={lang === 'en' ? "Cyber Security Services in Dubai | Mints Global" : undefined}
        twitterDescription={lang === 'en' ? "Mints Global delivers enterprise-grade Cyber Security solutions in Dubai — threat detection, network protection & compliance. Get a free security audit today!" : undefined}
        twitterImage="https://www.mintsglobal.ae/images/hero-cyber-security.webp"
      />
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={serviceSchema} />
      <JsonLd data={buildFaqSchema(faqs)} />
      <section className="relative w-full max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-black mb-6 uppercase leading-tight">
              CYBER <br/><span className="text-olive-500">SECURITY.</span>
            </h1>
            <p className="text-brand-white-70 max-w-2xl text-lg md:text-xl font-medium leading-relaxed mb-10">
              Military-grade offensive testing, infrastructure fortification, and rapid response to protect your most valuable digital assets.
            </p>
            <Link to="/contact" className="inline-flex bg-olive-500 text-brand-black px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm hover:bg-olive-400 transition-colors items-center gap-2">
              Request an Audit <ArrowRight size={18} />
            </Link>
          </div>
          <div className="relative w-full aspect-[16/9] md:aspect-[16/10] lg:aspect-square rounded-[2rem] overflow-hidden border border-white/5 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-t from-olive-950 via-transparent to-transparent z-10 pointer-events-none opacity-40" />
            <SafeImage
              src="/images/hero-cyber-security.webp"
              fallbackSrc="/zero-trust-security.webp"
              alt="Cyber Security Services in Dubai by Mints Global"
              title="Enterprise Cyber Security Solutions UAE"
              width="1280"
              height="720"
              loading="lazy"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
            />
          </div>
        </div>
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
                <Link to="/contact" aria-label={`Learn more about ${srv.name}`} className="text-sm font-bold flex items-center gap-2 hover:text-white transition-colors uppercase tracking-wider">
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
               Security cannot be an afterthought. We implement Zero-Trust architectures proactively and hunt threats relentlessly before they disrupt your business operations.
             </p>
             <ul className="space-y-4 mb-10">
               {['Certified Ethical Hackers', 'Locally Compliant Advisory', '24/7/365 Incident Readiness', 'Executive Security Briefings'].map(item => (
                 <li key={item} className="flex items-center gap-3 font-bold text-sm uppercase tracking-wide">
                   <CheckCircle2 className="text-olive-500" size={20} /> {item}
                 </li>
               ))}
             </ul>
             <Link to="/contact" aria-label="Learn more about our cybersecurity approach" className="text-sm font-bold w-fit flex items-center gap-2 hover:text-white transition-colors uppercase tracking-wider text-olive-500">
               Learn More <ArrowRight size={16} />
             </Link>
           </div>
           <div className="bg-olive-900 border border-white/5 rounded-3xl p-10 relative overflow-hidden aspect-square flex items-center justify-center">
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-olive-500 via-olive-900 to-olive-950"></div>
              <div className="relative text-center">
                <div className="font-display text-4xl md:text-5xl lg:text-7xl font-black text-white mb-2">
                  <CountUp end={100} duration={2.5} enableScrollSpy />%
                </div>
                <div className="font-bold text-olive-500 uppercase tracking-widest text-sm mt-4">Zero Trust Implementation</div>
              </div>
           </div>
        </div>
      </section>

      <section className="bg-olive-900 border-t border-white/5 py-24">
         <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="font-display text-4xl md:text-5xl font-black mb-16 text-center uppercase tracking-tight">Frequently Asked <span className="text-olive-500">Questions</span></h2>
            <ServicesAccordion items={faqs.map(f => ({ title: f.q, content: f.a }))} />
         </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 text-center py-20 md:py-32">
         <h2 className="font-display text-4xl md:text-5xl font-black mb-8 leading-tight">SECURE YOUR<br />OPERATIONS.</h2>
         <Link to="/contact" className="inline-flex items-center gap-3 bg-brand-white text-olive-950 px-10 py-5 rounded-full font-black uppercase tracking-widest hover:bg-olive-500 hover:text-white transition-all hover:scale-105">
           Connect to Core Team <ArrowRight size={20} />
         </Link>
      </section>
    </div>
  );
}
