import { ServicesClient } from "./ServicesClient";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Premium Digital Services Dubai | Mints Global",
  description: "Explore our premium digital services including SEO, software development, cybersecurity, and performance marketing in Dubai.",
  alternates: {
    canonical: "https://www.mintsglobal.ae/services/",
  },
  openGraph: {
    title: "Premium Digital Services Dubai | Mints Global",
    description: "Explore our premium digital services including SEO, software development, cybersecurity, and performance marketing in Dubai.",
    url: "https://www.mintsglobal.ae/services/",
  },
  twitter: {
    title: "Premium Digital Services Dubai | Mints Global",
    description: "Explore our premium digital services including SEO, software development, cybersecurity, and performance marketing in Dubai.",
  }
};

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

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(({ q, a }) => ({
    "@type": "Question",
    "name": q,
    "acceptedAnswer": { "@type": "Answer", "text": a }
  }))
};

export default function Page() {
  return (
    <>
      <Script id="services-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} strategy="beforeInteractive" />
      <ServicesClient />
    </>
  );
}
