import { useTranslation } from 'react-i18next';
import CountUp from 'react-countup';
import { SEO } from '../components/SEO';
import { SEO_DATA } from '../lib/seo-data';
import { JsonLd } from '../components/JsonLd';
import { ShieldCheck, Rocket, Map, Globe2, Linkedin } from 'lucide-react';

const team = [
  { name: 'Arya Lakshmi', roleKey: 'about.roles.ceo', img: '/executives/Arya Lakshmi_ceo.jpg-800w.webp' },
  { name: 'Jishnu Das', roleKey: 'about.roles.cco', img: '/executives/Jishnu Das _Cheif client officer-800w.webp' },
  { name: 'Razal Basheer', roleKey: 'about.roles.cd', img: '/executives/Razal Basheer _Creative director.JPG-800w.webp' },
  { name: 'Anand Binu Arjun', roleKey: 'about.roles.cto', img: '/executives/anand binu arjun_Cheif technical officer-800w.webp' },
  { name: 'Febin Sani', roleKey: 'about.roles.advisor', img: '/executives/febin sani_Advisor.JPG-400w.webp' },
];

export function About() {
  const { t, i18n } = useTranslation();
  const lang = (i18n.language as 'en' | 'ar' | 'de') || 'en';
  const aboutSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.mintsglobal.ae/#organization",
        "name": "Mints Global",
        "url": "https://www.mintsglobal.ae/",
        "logo": "https://www.mintsglobal.ae/images/logo.png",
        "description": "Mints Global is a Dubai-based digital agency delivering cyber security, ROI-driven digital marketing, and enterprise software development for businesses across the UAE and Europe.",
        "foundingLocation": {
          "@type": "Place",
          "address": "Dubai, United Arab Emirates"
        },
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Dubai",
          "addressCountry": "AE"
        },
        "sameAs": [
          "https://www.linkedin.com/company/mintsglobal",
          "https://www.instagram.com/mintsglobal",
          "https://www.facebook.com/mintsglobal"
        ],
        "knowsAbout": [
          "Cyber Security",
          "Digital Marketing",
          "Performance Marketing",
          "Search Engine Optimization",
          "Enterprise Software Development",
          "Branding and Graphic Design"
        ]
      },
      {
        "@type": "WebPage",
        "@id": "https://www.mintsglobal.ae/about#webpage",
        "url": "https://www.mintsglobal.ae/about",
        "name": "About Mints Global | Digital Agency in Dubai",
        "isPartOf": { "@id": "https://www.mintsglobal.ae/#website" },
        "about": { "@id": "https://www.mintsglobal.ae/#organization" },
        "description": "Learn about Mints Global, a Dubai-based digital agency bridging Middle Eastern and European markets through cyber security, digital marketing, and software development.",
        "inLanguage": "en-AE",
        "breadcrumb": { "@id": "https://www.mintsglobal.ae/about#breadcrumb" }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.mintsglobal.ae/about#breadcrumb",
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
            "name": "About Us",
            "item": "https://www.mintsglobal.ae/about"
          }
        ]
      }
    ]
  };

  return (
    <div className="w-full">
      <JsonLd data={aboutSchema} />
      <SEO 
        title="About Mints Global | Digital Agency in Dubai, UAE" 
        description="Mints Global is a Dubai-based digital agency offering cybersecurity, performance marketing, and enterprise software solutions. Explore our story and team."
        keywords={["about Mints Global", "digital agency Dubai", "tech agency team", "global digital solutions", "corporate overview"]}
        canonical="/about"
        ogTitle="About Mints Global | Digital Agency in Dubai, UAE"
        ogDescription="Mints Global is a Dubai-based digital agency delivering cyber security, performance marketing, and enterprise software development."
        ogType="website"
        ogImage="https://www.mintsglobal.ae/images/og/about-mints-global.jpg"
        twitterTitle="About Mints Global | Digital Agency in Dubai, UAE"
        twitterDescription="Dubai-based digital agency delivering cyber security, performance marketing, and enterprise software development."
        twitterImage="https://www.mintsglobal.ae/images/og/about-mints-global.jpg"
        rawTitle={true}
      />
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20 pb-10">
        <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-black mb-8 leading-tight uppercase">
          {t('about.title1')}<span className="text-olive-500">{t('about.title2')}</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <p className="text-brand-white-70 text-lg mb-6 leading-relaxed">
              {t('about.desc1')}
            </p>
            <p className="text-brand-white-70 text-lg leading-relaxed">
              {t('about.desc2')}
            </p>
          </div>
          <div className="bg-olive-900 border border-white/5 p-8 rounded-3xl">
             <h3 className="font-display text-2xl font-bold mb-6">{t('about.pillarsTitle')}</h3>
             <ul className="space-y-4">
                <li className="flex gap-4 border-b border-white/5 pb-4">
                  <div className="font-black text-olive-500">01</div>
                  <div>
                    <h4 className="font-bold">{t('about.pillars.p1.title')}</h4>
                    <p className="text-sm text-brand-white-70">{t('about.pillars.p1.desc')}</p>
                  </div>
                </li>
                <li className="flex gap-4 border-b border-white/5 pb-4">
                  <div className="font-black text-olive-500">02</div>
                  <div>
                    <h4 className="font-bold">{t('about.pillars.p2.title')}</h4>
                    <p className="text-sm text-brand-white-70">{t('about.pillars.p2.desc')}</p>
                  </div>
                </li>
                <li className="flex gap-4 border-b border-white/5 pb-4">
                  <div className="font-black text-olive-500">03</div>
                  <div>
                    <h4 className="font-bold">{t('about.pillars.p3.title')}</h4>
                    <p className="text-sm text-brand-white-70">{t('about.pillars.p3.desc')}</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="font-black text-olive-500">04</div>
                  <div>
                    <h4 className="font-bold">{t('about.pillars.p4.title')}</h4>
                    <p className="text-sm text-brand-white-70">{t('about.pillars.p4.desc')}</p>
                  </div>
                </li>
             </ul>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-olive-500 text-olive-950 py-24 w-full">
         <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-12">
            <div>
               <div className="font-display text-5xl md:text-7xl font-black mb-2">
                 <CountUp end={250} duration={2.5} enableScrollSpy aria-label="250" />+
               </div>
               <div className="font-bold text-sm uppercase tracking-wider">{t('about.stats.s1')}</div>
            </div>
            <div>
               <div className="font-display text-5xl md:text-7xl font-black mb-2">
                 <CountUp end={35} duration={2.5} enableScrollSpy aria-label="35" />+
               </div>
               <div className="font-bold text-sm uppercase tracking-wider">{t('about.stats.s2')}</div>
            </div>
            <div>
               <div className="font-display text-5xl md:text-7xl font-black mb-2">
                 <CountUp end={15} duration={2.5} enableScrollSpy aria-label="15" />+
               </div>
               <div className="font-bold text-sm uppercase tracking-wider">{t('about.stats.s3')}</div>
            </div>
            <div>
               <div className="font-display text-5xl md:text-7xl font-black mb-2">
                 <CountUp end={99} duration={2.5} enableScrollSpy aria-label="99" />%
               </div>
               <div className="font-bold text-sm uppercase tracking-wider">{t('about.stats.s4')}</div>
            </div>
         </div>
      </section>

      {/* Team Section */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="text-center mb-16">
          <span className="text-olive-500 text-sm font-bold tracking-widest uppercase block mb-4">{t('about.team.badge')}</span>
          <h2 className="font-display text-4xl md:text-5xl font-black uppercase">
            {t('about.team.title1')}<span className="text-olive-500">{t('about.team.title2')}</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {team.map((member, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl mb-4 bg-olive-900 border border-white/10">
                <img src={member.img} alt={member.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100 grayscale group-hover:grayscale-0" />
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-olive-950 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex justify-end">
                  <a href="#" className="w-10 h-10 rounded-full bg-olive-500 text-brand-black flex items-center justify-center hover:bg-olive-400 transition-colors">
                    <Linkedin size={18} />
                  </a>
                </div>
              </div>
              <h4 className="font-display font-bold text-xl mb-1">{member.name}</h4>
              <p className="text-sm text-olive-500 font-bold uppercase tracking-wider">{t(member.roleKey)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Global Regions Section */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8 w-full border-b border-white/5">
        <div className="text-center mb-16">
          <span className="text-olive-500 text-sm font-bold tracking-widest uppercase block mb-4">{t('about.presence.badge')}</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black uppercase">
            {t('about.presence.title1')}<span className="text-olive-500">{t('about.presence.title2')}</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-brand-black-light border border-white/5 p-8 rounded-2xl flex flex-col items-center text-center">
            <Globe2 className="text-olive-500 mb-6" size={48} />
            <h3 className="font-display font-bold text-2xl uppercase mb-4">{t('about.presence.r1.title')}</h3>
            <p className="text-brand-white-70 text-sm leading-relaxed mb-6">{t('about.presence.r1.desc')}</p>
          </div>
          <div className="bg-brand-black-light border border-white/5 p-8 rounded-2xl flex flex-col items-center text-center">
            <Map className="text-olive-500 mb-6" size={48} />
            <h3 className="font-display font-bold text-2xl uppercase mb-4">{t('about.presence.r2.title')}</h3>
            <p className="text-brand-white-70 text-sm leading-relaxed mb-6">{t('about.presence.r2.desc')}</p>
          </div>
          <div className="bg-brand-black-light border border-white/5 p-8 rounded-2xl flex flex-col items-center text-center">
            <Rocket className="text-olive-500 mb-6" size={48} />
            <h3 className="font-display font-bold text-2xl uppercase mb-4">{t('about.presence.r3.title')}</h3>
            <p className="text-brand-white-70 text-sm leading-relaxed mb-6">{t('about.presence.r3.desc')}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
