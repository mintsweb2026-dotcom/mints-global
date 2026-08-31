import { SoftwareDevelopmentClient } from "./SoftwareDevelopmentClient";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Software Development Company in Dubai | Custom Solutions – Mints Global",
  description: "Custom software, web & mobile apps, ERP and CRM solutions built for UAE businesses. Mints Global — Dubai's trusted tech development partner.",
  alternates: {
    canonical: "https://www.mintsglobal.ae/software-development/",
  },
  openGraph: {
    title: "Software Development Company in Dubai | Custom Solutions – Mints Global",
    description: "Custom software, web & mobile apps, ERP and CRM solutions built for UAE businesses. Mints Global — Dubai's trusted tech development partner.",
    images: [{ url: "https://www.mintsglobal.ae/images/software-development-dubai-mints-global.jpg" }],
    url: "https://www.mintsglobal.ae/software-development/",
  },
  twitter: {
    title: "Software Development Company in Dubai | Mints Global",
    description: "Custom web apps, mobile apps, ERP & enterprise software solutions in Dubai, UAE. Partner with Mints Global.",
    images: ["https://www.mintsglobal.ae/images/software-development-dubai-mints-global.jpg"],
  }
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Custom Software Development Services in Dubai",
  "serviceType": "Software Development",
  "description": "Mints Global offers custom software development in Dubai including web applications, mobile apps, ERP, CRM, API integrations, cloud solutions, UI/UX design, and QA testing for businesses across the UAE and UK.",
  "url": "https://www.mintsglobal.ae/software-development/",
  "provider": {
    "@type": "Organization",
    "name": "Mints Global",
    "url": "https://www.mintsglobal.ae",
    "logo": "https://www.mintsglobal.ae/images/mints-global-logo.png",
    "telephone": "+971502943916",
    "email": "info@mintsglobal.ae",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Office #315, 3rd Floor, Bank Street Building",
      "addressLocality": "Bur Dubai",
      "addressRegion": "Dubai",
      "addressCountry": "AE"
    }
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Dubai"
    },
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
    "name": "Software Development Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Web Application Development",
          "description": "Custom web app development using modern frameworks for UAE businesses."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Mobile App Development",
          "description": "iOS and Android mobile app development for startups and enterprises in Dubai."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "ERP & CRM Solutions",
          "description": "Custom ERP and CRM software tailored for UAE business operations."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "API Integration",
          "description": "Third-party API and system integration services in Dubai."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Cloud-Based Software Solutions",
          "description": "Cloud software development and deployment for scalable UAE business solutions."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "UI/UX Design",
          "description": "User experience and interface design for web and mobile applications."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "QA & Software Testing",
          "description": "Quality assurance and software testing services for enterprise applications."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Software Maintenance & Support",
          "description": "Ongoing software support, maintenance, and upgrade services in Dubai."
        }
      }
    ]
  }
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Software Development Company in Dubai | Custom Solutions – Mints Global",
  "url": "https://www.mintsglobal.ae/software-development/",
  "description": "Mints Global is a leading software development company in Dubai offering custom web apps, mobile apps, ERP, CRM, and enterprise solutions.",
  "inLanguage": "en",
  "isPartOf": {
    "@type": "WebSite",
    "name": "Mints Global",
    "url": "https://www.mintsglobal.ae"
  },
  "breadcrumb": {
    "@type": "BreadcrumbList",
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
        "name": "Software Development",
        "item": "https://www.mintsglobal.ae/software-development/"
      }
    ]
  }
};

const faqs = [
  {
    q: "What software development services does Mints Global offer in Dubai?",
    a: "Mints Global offers a full range of software development services in Dubai including custom web application development, iOS and Android mobile app development, ERP and CRM solutions, API integrations, cloud-based software, UI/UX design, QA testing, and ongoing maintenance and support."
  },
  {
    q: "How long does it take to develop a custom software solution?",
    a: "Project timelines vary based on scope and complexity. A typical MVP web application takes 6–12 weeks, while complex ERP or enterprise solutions may take 3–6 months. Mints Global provides a detailed project roadmap before development begins."
  },
  {
    q: "Does Mints Global develop mobile apps for both iOS and Android?",
    a: "Yes. Mints Global develops mobile applications for both iOS (Apple App Store) and Android (Google Play Store), including cross-platform solutions for businesses in Dubai and across the UAE."
  },
  {
    q: "Can Mints Global integrate custom software with existing business systems?",
    a: "Absolutely. Mints Global specialises in API integration and third-party software connectivity, ensuring your new solution works seamlessly with your existing CRM, ERP, payment gateways, or other business tools."
  },
  {
    q: "Does Mints Global provide post-launch software support and maintenance?",
    a: "Yes. Mints Global offers ongoing software maintenance, updates, performance monitoring, and technical support after launch to ensure your application remains secure and up to date."
  }
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
      <Script id="software-dev-service" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} strategy="beforeInteractive" />
      <Script id="software-dev-webpage" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} strategy="beforeInteractive" />
      <Script id="software-dev-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} strategy="beforeInteractive" />
      
      <SoftwareDevelopmentClient />
    </>
  );
}
