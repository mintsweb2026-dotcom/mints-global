import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { JsonLd } from '../components/JsonLd';
import { buildServiceSchema, buildFaqSchema, buildBreadcrumbSchema } from '../lib/schema-helpers';
import { SEO } from '../components/SEO';
import { ServicesAccordion } from '../components/ServicesAccordion';

const faqs = [
  {
    "q": "What technology stack do you use?",
    "a": "We primarily utilize the modern MERN stack (MongoDB/PostgreSQL, Express, React/Next.js, Node.js) as well as Python (Django) depending on the project requirements."
  },
  {
    "q": "Do we own the source code?",
    "a": "Yes. Once the project is complete and all payments are settled, the intellectual property and full source code are entirely handed over to you."
  },
  {
    "q": "How do you ensure the app is secure?",
    "a": "We integrate security at every phase (DevSecOps). This includes data encryption, secure authentication (OAuth/JWT), protection against OWASP top 10 vulnerabilities, and regular code reviews."
  },
  {
    "q": "Do you provide hosting and maintenance?",
    "a": "Yes. We offer managed cloud hosting on AWS/GCP and provide ongoing maintenance retainers to ensure your application remains updated, secure, and performant as it scales."
  }
];

export function WebApps() {
  const serviceSchema = buildServiceSchema({
    name: "Web Apps",
    description: "Ready to build software that scales with your ambition? Let's engineer it.",
    url: "/software-development/web-apps",
    serviceType: "Software Development"
  });

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Software Development", url: "/software-development" },
    { name: "Web Apps", url: "/software-development/web-apps" }
  ]);

  return (
    <div className="w-full relative z-10 min-h-screen bg-brand-black">
      <SEO 
        title="Web Application Development | Mints Global" 
        description="Custom web application development. Your vision deserves more than a template — we engineer high-performance SaaS platforms, portals, and progressive web apps."
        keywords={["custom web app development", "enterprise web applications", "scalable web apps", "SaaS development agency", "React Nextjs development"]}
      />
      {/* Hero Section */}
      <section className="relative w-full max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20 lg:pt-40 lg:pb-32">
        
        
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="flex items-center gap-4 mb-6">
            <span className="px-4 py-1 rounded-full border border-white/10 text-xs font-bold uppercase tracking-widest text-brand-white-70">
              Scalable Engineering
            </span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-black mb-8 uppercase leading-[0.9] text-white">
            Web App<br/>
            <span className="text-olive-500">Engineering.</span>
          </h1>
          <p className="text-brand-white-70 text-lg md:text-xl max-w-3xl leading-relaxed mb-12">
            Custom web application development. Your vision deserves more than a template — we engineer high-performance SaaS platforms, portals, and progressive web apps.
          </p>
          
          <div className="flex flex-wrap gap-4">
             <Link to="/contact" className="bg-olive-500 text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm hover:bg-olive-400 transition-colors inline-flex items-center gap-2 relative z-20">
               Start Your Build <ArrowRight size={18} />
             </Link>
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-olive-950 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="font-display text-4xl lg:text-5xl font-black uppercase mb-6 text-white">Engineering Focus</h2>
            <p className="text-brand-white-70 text-lg max-w-3xl">We build digital products that are secure by design, scalable by nature, and optimized for unparalleled user experiences.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <div className="bg-brand-black border border-white/5 p-10 rounded-3xl hover:border-olive-500/30 transition-colors">
              <CheckCircle2 className="text-olive-500 mb-6" size={32} />
              <h3 className="font-display font-bold text-xl uppercase mb-4 text-white">Custom Web Apps</h3>
              <p className="text-brand-white-70 text-sm leading-relaxed">Tailor-made solutions that solve specific business problems, from complex dashboards to data management tools.</p>
            </div>
            <div className="bg-brand-black border border-white/5 p-10 rounded-3xl hover:border-olive-500/30 transition-colors">
              <CheckCircle2 className="text-olive-500 mb-6" size={32} />
              <h3 className="font-display font-bold text-xl uppercase mb-4 text-white">SaaS Platforms</h3>
              <p className="text-brand-white-70 text-sm leading-relaxed">Architecting multi-tenant Software-as-a-Service platforms complete with subscription billing and advanced tiering.</p>
            </div>
            <div className="bg-brand-black border border-white/5 p-10 rounded-3xl hover:border-olive-500/30 transition-colors">
              <CheckCircle2 className="text-olive-500 mb-6" size={32} />
              <h3 className="font-display font-bold text-xl uppercase mb-4 text-white">Progressive Web Apps (PWA)</h3>
              <p className="text-brand-white-70 text-sm leading-relaxed">Web applications that feel and behave like native mobile apps, offering offline capabilities and push notifications.</p>
            </div>
            <div className="bg-brand-black border border-white/5 p-10 rounded-3xl hover:border-olive-500/30 transition-colors">
              <CheckCircle2 className="text-olive-500 mb-6" size={32} />
              <h3 className="font-display font-bold text-xl uppercase mb-4 text-white">Enterprise Portals</h3>
              <p className="text-brand-white-70 text-sm leading-relaxed">Secure internal tools, partner portals, and customer dashboards built to integrate with existing legacy systems.</p>
            </div>
            <div className="bg-brand-black border border-white/5 p-10 rounded-3xl hover:border-olive-500/30 transition-colors">
              <CheckCircle2 className="text-olive-500 mb-6" size={32} />
              <h3 className="font-display font-bold text-xl uppercase mb-4 text-white">API Development</h3>
              <p className="text-brand-white-70 text-sm leading-relaxed">Designing and building robust REST & GraphQL APIs to power your integrations and front-end applications.</p>
            </div>
            <div className="bg-brand-black border border-white/5 p-10 rounded-3xl hover:border-olive-500/30 transition-colors">
              <CheckCircle2 className="text-olive-500 mb-6" size={32} />
              <h3 className="font-display font-bold text-xl uppercase mb-4 text-white">Web Modernization</h3>
              <p className="text-brand-white-70 text-sm leading-relaxed">Refactoring and migrating legacy codebases (like old PHP/jQuery apps) to modern stacks like React and Node.js.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-brand-black border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl lg:text-5xl font-black uppercase mb-4 text-white">Frequently Asked Questions</h2>
            <p className="text-brand-white-70 text-lg">Everything you need to know about our web app services.</p>
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
              Ready to build software that scales with your ambition? Let's engineer it.
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
            <Link to="/software-development/mobile-apps" className="text-olive-500 hover:text-white font-bold transition-colors">Mobile Apps &rarr;</Link>
            <Link to="/software-development/website-development" className="text-olive-500 hover:text-white font-bold transition-colors">Website Development &rarr;</Link>
            <Link to="/software-development/erp-solutions" className="text-olive-500 hover:text-white font-bold transition-colors">ERP Solutions &rarr;</Link>
          </div>
        </div>
      </section>
      
      <JsonLd data={serviceSchema} />
      <JsonLd data={buildFaqSchema(faqs)} />
      
      <JsonLd data={breadcrumbSchema} />
    </div>
  );
}