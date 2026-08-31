"use client";
import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { ServicesAccordion } from '../../components/ServicesAccordion';

const services = [
  {
    title: 'Digital Marketing',
    link: '/digital-marketing',
    description: 'Expert Digital Marketing services to boost your online presence and maximize ROI.',
    items: ['SEO Strategy', 'Performance Marketing', 'Brand Strategy']
  },
  {
    title: 'Software Development',
    link: '/software-development',
    description: 'Custom software development, mobile ecosystems, and scalable enterprise solutions.',
    items: ['Custom Web Apps', 'Mobile Ecosystems', 'ERP & CRM Solutions']
  },
  {
    title: 'Cyber Security',
    link: '/cyber-security',
    description: 'Comprehensive cyber security testing, managed advisory, and cloud security.',
    items: ['Offensive Security Testing', 'Managed Advisory', 'Cloud Security']
  }
];

const faqs = [
  { q: "How long does it take for SEO to show results?", a: "Typically, noticeable SEO results take 3 to 6 months, depending on industry competitiveness and current domain authority." },
  { q: "Do you manage ad spend directly?", a: "Yes, we handle end-to-end media buying on Google, Meta, LinkedIn, and more, optimizing your budgets for the best CPA." },
  { q: "What is included in Brand Strategy?", a: "It includes market research, positioning, tone of voice, visual identity guidelines, and a comprehensive communication roadmap." },
  { q: "What tech stack do you use?", a: "We primarily build with Next.js, React, Node.js, Python, and scalable databases like PostgreSQL and MongoDB, deployed on AWS or Vercel." },
  { q: "Do you offer post-launch support and maintenance?", a: "Yes, we provide continuous maintenance, performance monitoring, and update packages via dedicated SLAs." },
  { q: "Can you rescue an existing legacy codebase?", a: "Absolutely. We conduct deep code audits, identify technical debt, and offer refactoring or gradual migration strategies." },
  { q: "What is the difference between On-Page and Off-Page SEO?", a: "On-Page SEO involves optimizing elements on your website itself, such as content quality, meta tags, URL structure, and internal linking. Off-Page SEO focuses on actions taken outside of your website to impact your rankings, primarily high-quality backlink building and brand mentions." },
  { q: "Why is bilingual SEO important for businesses in the UAE?", a: "The UAE is a highly diverse market. Optimizing your website for both English and Arabic ensures you capture the maximum possible audience, catering to local intent and searching habits which can differ significantly across languages." },
];

export function ServicesClient() {
  const [selectedServiceIndex, setSelectedServiceIndex] = useState<number | null>(null);

  return (
    <div className="w-full pt-[116px]">
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20 pb-10">
        <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-black mb-8 leading-tight uppercase">
          OUR PRIME <br/><span className="text-olive-500">CAPABILITIES.</span>
        </h1>
        <p className="text-brand-white-70 max-w-2xl text-lg mb-16">
          Tailored solutions for high-impact growth. From digital ecosystems to secure infrastructure.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {services.map((grp, i) => (
             <div 
               key={i} 
               onMouseEnter={() => setSelectedServiceIndex(i)}
               onMouseLeave={() => setSelectedServiceIndex(null)}
               className={`border rounded-2xl p-8 hover:-translate-y-2 transition-all duration-300 ${selectedServiceIndex === i ? 'bg-olive-900 border-olive-500 shadow-[0_0_30px_rgba(106,171,31,0.15)]' : 'bg-olive-900 border-white/5'}`}
             >
               <div className="w-14 h-14 bg-olive-800 rounded-2xl mb-8 flex items-center justify-center text-olive-500 text-2xl font-black">
                 0{i + 1}
               </div>
               <h3 className="text-2xl font-display font-bold mb-4">{grp.title}</h3>
               <ul className="space-y-3 text-sm font-medium mb-8">
                  {grp.items.map((item, j) => (
                     <li key={j} className="flex gap-2 text-olive-300 items-center">
                       <ArrowRight size={16} /> {item}
                     </li>
                  ))}
               </ul>
               <Link href={grp.link} className="text-sm font-bold flex items-center gap-2 hover:text-olive-500 transition-colors">
                 <span aria-hidden="true">Learn More</span>
                 <span className="sr-only"> about {grp.title}</span> <ArrowRight size={16} />
               </Link>
             </div>
           ))}
        </div>
      </section>

      <section className="bg-olive-900 border-t border-white/5 py-24">
         <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="font-display text-4xl md:text-5xl font-black mb-16 text-center uppercase tracking-tight">Frequently Asked <span className="text-olive-500">Questions</span></h2>
            <ServicesAccordion items={faqs.map(f => ({ title: f.q, content: f.a }))} />
         </div>
      </section>
    </div>
  );
}
