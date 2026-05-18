import { useTranslation } from 'react-i18next';
import CountUp from 'react-countup';
import { SEO } from '../components/SEO';
import { SEO_DATA } from '../lib/seo-data';
import { JsonLd } from '../components/JsonLd';
import { ShieldCheck, Rocket, Map, Globe2, Linkedin } from 'lucide-react';

const team = [
  { name: 'Sarah Al Fayed', role: 'Chief Executive Officer', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop' },
  { name: 'Marcus Mueller', role: 'Head of Engineering', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop' },
  { name: 'Laila Hassan', role: 'Director of Marketing', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop' },
  { name: 'David Chen', role: 'CISO', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop' },
];

export function About() {
  const { i18n } = useTranslation();
  const lang = (i18n.language as 'en' | 'ar' | 'de') || 'en';
  const meta = SEO_DATA.about[lang] || SEO_DATA.about.en;

  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@id": "https://mintsglobal.ae/#organization"
    }
  };

  return (
    <div className="w-full">
      <JsonLd data={aboutSchema} />
      <SEO 
        title={meta.title}
        description={meta.description}
        keywords={["about Mints Global", "digital agency Dubai", "tech agency team", "global digital solutions", "corporate overview"]}
        canonical="/about"
      />
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20 pb-10">
        <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-black mb-8 leading-tight uppercase">
          ABOUT <span className="text-olive-500">US.</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <p className="text-brand-white-70 text-lg mb-6 leading-relaxed">
              Mints Global is a premium digital agency headquartered in Dubai, bridging the gap between innovative marketing, scalable software engineering, and defensive cyber security.
            </p>
            <p className="text-brand-white-70 text-lg leading-relaxed">
              We partner with global brands across the MENA region and Europe to build digital ecosystems that drive growth and resilience in a constantly evolving technological landscape.
            </p>
          </div>
          <div className="bg-olive-900 border border-white/5 p-8 rounded-3xl">
             <h3 className="font-display text-2xl font-bold mb-6">Our Core Pillars</h3>
             <ul className="space-y-4">
               <li className="flex gap-4 border-b border-white/5 pb-4">
                 <div className="font-black text-olive-500">01</div>
                 <div>
                   <h4 className="font-bold">Engineering Excellence</h4>
                   <p className="text-sm text-brand-white-70">Writing robust, scalable, and maintainable code.</p>
                 </div>
               </li>
               <li className="flex gap-4 border-b border-white/5 pb-4">
                 <div className="font-black text-olive-500">02</div>
                 <div>
                   <h4 className="font-bold">Data-Driven Marketing</h4>
                   <p className="text-sm text-brand-white-70">Strategies rooted in analytics and measurable outcomes.</p>
                 </div>
               </li>
               <li className="flex gap-4 border-b border-white/5 pb-4">
                 <div className="font-black text-olive-500">03</div>
                 <div>
                   <h4 className="font-bold">Zero-Trust Security</h4>
                   <p className="text-sm text-brand-white-70">Integrating security into every layer of our solutions.</p>
                 </div>
               </li>
               <li className="flex gap-4">
                 <div className="font-black text-olive-500">04</div>
                 <div>
                   <h4 className="font-bold">Global-Local Intelligence</h4>
                   <p className="text-sm text-brand-white-70">Cross-border insights combined with strict regional compliance.</p>
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
               <div className="font-bold text-sm uppercase tracking-wider">Clients Worldwide</div>
            </div>
            <div>
               <div className="font-display text-5xl md:text-7xl font-black mb-2">
                 <CountUp end={35} duration={2.5} enableScrollSpy aria-label="35" />+
               </div>
               <div className="font-bold text-sm uppercase tracking-wider">Countries Reached</div>
            </div>
            <div>
               <div className="font-display text-5xl md:text-7xl font-black mb-2">
                 <CountUp end={15} duration={2.5} enableScrollSpy aria-label="15" />+
               </div>
               <div className="font-bold text-sm uppercase tracking-wider">Industry Awards</div>
            </div>
            <div>
               <div className="font-display text-5xl md:text-7xl font-black mb-2">
                 <CountUp end={99} duration={2.5} enableScrollSpy aria-label="99" />%
               </div>
               <div className="font-bold text-sm uppercase tracking-wider">Client Retention</div>
            </div>
         </div>
      </section>

      {/* Team Section */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="text-center mb-16">
          <span className="text-olive-500 text-sm font-bold tracking-widest uppercase block mb-4">Leadership</span>
          <h2 className="font-display text-4xl md:text-5xl font-black uppercase">Meet the <span className="text-olive-500">Experts.</span></h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl mb-4 bg-olive-900 border border-white/10">
                <img src={member.img} alt={member.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100 grayscale group-hover:grayscale-0" />
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-olive-950 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex justify-end">
                  <a href="#" className="w-10 h-10 rounded-full bg-olive-500 text-white flex items-center justify-center hover:bg-olive-400 transition-colors">
                    <Linkedin size={18} />
                  </a>
                </div>
              </div>
              <h4 className="font-display font-bold text-xl mb-1">{member.name}</h4>
              <p className="text-sm text-olive-500 font-bold uppercase tracking-wider">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Global Regions Section */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8 w-full border-b border-white/5">
        <div className="text-center mb-16">
          <span className="text-olive-500 text-sm font-bold tracking-widest uppercase block mb-4">Our Presence</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black uppercase">Dubai to <span className="text-olive-500">Europe.</span></h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-brand-black-light border border-white/5 p-8 rounded-2xl flex flex-col items-center text-center">
            <Globe2 className="text-olive-500 mb-6" size={48} />
            <h3 className="font-display font-bold text-2xl uppercase mb-4">🇦🇪 UAE & GCC</h3>
            <p className="text-brand-white-70 text-sm leading-relaxed mb-6">Headquartered in Dubai, we lead Arabic-first strategies, software scaling, and NESA-compliant enterprise solutions.</p>
          </div>
          <div className="bg-brand-black-light border border-white/5 p-8 rounded-2xl flex flex-col items-center text-center">
            <Map className="text-olive-500 mb-6" size={48} />
            <h3 className="font-display font-bold text-2xl uppercase mb-4">🇩🇪 Germany / DACH</h3>
            <p className="text-brand-white-70 text-sm leading-relaxed mb-6">Delivering precision engineering, GDPR/DSGVO compliance, and hyper-targeted B2B digital acquisition across Europe.</p>
          </div>
          <div className="bg-brand-black-light border border-white/5 p-8 rounded-2xl flex flex-col items-center text-center">
            <Rocket className="text-olive-500 mb-6" size={48} />
            <h3 className="font-display font-bold text-2xl uppercase mb-4">🇬🇧 United Kingdom</h3>
            <p className="text-brand-white-70 text-sm leading-relaxed mb-6">Powering sophisticated English campaigns, enterprise SaaS infrastructure, and highly competitive organic search dominance.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
