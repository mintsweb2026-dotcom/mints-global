import { CyberSecurityClient } from "./CyberSecurityClient";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Cyber Security Services in Dubai | Mints Global",
  description: "Mints Global delivers enterprise-grade Cyber Security solutions in Dubai — threat detection, network protection & compliance. Get a free security audit today!",
  alternates: {
    canonical: "https://www.mintsglobal.ae/cyber-security/",
  },
  openGraph: {
    title: "Cyber Security Services in Dubai | Mints Global",
    description: "Mints Global delivers enterprise-grade Cyber Security solutions in Dubai — threat detection, network protection & compliance. Get a free security audit today!",
    images: [{ url: "https://www.mintsglobal.ae/images/hero-cyber-security.webp" }],
    url: "https://www.mintsglobal.ae/cyber-security/",
  },
  twitter: {
    title: "Cyber Security Services in Dubai | Mints Global",
    description: "Mints Global delivers enterprise-grade Cyber Security solutions in Dubai — threat detection, network protection & compliance. Get a free security audit today!",
    images: ["https://www.mintsglobal.ae/images/hero-cyber-security.webp"],
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
  }
};

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
      <Script id="cyber-security-service" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} strategy="beforeInteractive" />
      <Script id="cyber-security-localbiz" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} strategy="beforeInteractive" />
      <Script id="cyber-security-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} strategy="beforeInteractive" />
      
      <CyberSecurityClient />
    </>
  );
}
