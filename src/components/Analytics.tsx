import { useEffect } from 'react';

const GA_ID = import.meta.env.VITE_GA_ID;

export default function Analytics() {
  useEffect(() => {
    let consent: any = {};
    try {
      const stored = localStorage.getItem('cookie-consent');
      if (stored === 'all') {
        consent = { analytics: true };
      } else {
        consent = JSON.parse(stored || '{}');
      }
    } catch (e) {
      consent = {};
    }

    if (!consent.analytics || !GA_ID) return;

    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    script.async = true;
    document.head.appendChild(script);

    (window as any).dataLayer = (window as any).dataLayer || [];
    function gtag(...args: any[]) { (window as any).dataLayer.push(args); }
    (window as any).gtag = gtag;
    gtag('js', new Date());
    gtag('config', GA_ID);
  }, []);

  return null;
}
