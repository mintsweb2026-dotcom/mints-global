import { useEffect, useState } from 'react';
import { MessageSquare } from 'lucide-react';
import { cn } from '../lib/utils';

interface TawktoChatProps {
  mobileMenuOpen?: boolean;
}

export default function TawktoChat({ mobileMenuOpen }: TawktoChatProps) {
  const [, setIsLoaded] = useState(false);

  const loadTawk = () => {
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

    (window as any).Tawk_API.onLoad = function () {
      (window as any).Tawk_API.hideWidget();
      setIsLoaded(true);
    };

    (window as any).Tawk_API.onChatMinimized = function () {
      (window as any).Tawk_API.hideWidget();
    };
  };

  useEffect(() => {
    const handleInit = () => {
      loadTawk();
    };

    window.addEventListener('mousemove', handleInit, { once: true });
    window.addEventListener('touchstart', handleInit, { once: true });

    return () => {
      window.removeEventListener('mousemove', handleInit);
      window.removeEventListener('touchstart', handleInit);
    };
  }, []);

  const openChat = () => {
    if (!document.getElementById('tawkto-script')) {
      loadTawk();
      const checkInterval = setInterval(() => {
        if ((window as any).Tawk_API && typeof (window as any).Tawk_API.maximize === 'function') {
          clearInterval(checkInterval);
          (window as any).Tawk_API.showWidget();
          (window as any).Tawk_API.maximize();
        }
      }, 100);
      setTimeout(() => clearInterval(checkInterval), 5000);
    } else {
      if ((window as any).Tawk_API) {
        (window as any).Tawk_API.showWidget();
        (window as any).Tawk_API.maximize();
      }
    }
  };

  return (
    <button
      onClick={openChat}
      className={cn(
        "fixed bottom-6 right-24 md:right-[88px] z-50 bg-olive-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform items-center justify-center cursor-pointer group",
        mobileMenuOpen ? "hidden" : "flex"
      )}
      aria-label="Open Live Chat"
      title="Live Chat"
    >
      <MessageSquare size={28} className="group-hover:rotate-6 transition-transform" />
      <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-olive-950 animate-pulse" />
    </button>
  );
}
