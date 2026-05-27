import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function TawktoChat() {
  const location = useLocation();

  useEffect(() => {
    const load = () => {
      if (document.getElementById('tawkto-script')) return;

      const propertyId = (import.meta as any).env.VITE_TAWK_PROPERTY_ID || '6a0854f57ca8ce1c3b2fb01a';
      const widgetId = (import.meta as any).env.VITE_TAWK_WIDGET_ID || '1joo8no8f';

      const s1 = document.createElement('script');
      s1.id = 'tawkto-script';
      s1.async = true;
      s1.src = `https://embed.tawk.to/${propertyId}/${widgetId}`;
      s1.charset = 'UTF-8';
      s1.setAttribute('crossorigin', '*');

      const s0 = document.getElementsByTagName('script')[0];
      if (s0 && s0.parentNode) {
        s0.parentNode.insertBefore(s1, s0);
      } else {
        document.body.appendChild(s1);
      }

      (window as any).Tawk_API = (window as any).Tawk_API || {};
      (window as any).Tawk_LoadStart = new Date();
    };

    window.addEventListener('mousemove', load, { once: true });
    window.addEventListener('touchstart', load, { once: true });

    return () => {
      window.removeEventListener('mousemove', load);
      window.removeEventListener('touchstart', load);
    };
  }, []);

  return null;
}
