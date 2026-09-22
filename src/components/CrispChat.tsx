import { useEffect } from 'react';

export default function CrispChat() {
  useEffect(() => {
    if (document.getElementById('crisp-chat-script')) return;

    (window as any).$crisp = [];
    const crispId = import.meta.env.VITE_CRISP_WEBSITE_ID;
    if (!crispId) return; // Don't load Crisp if no ID is configured
    (window as any).CRISP_WEBSITE_ID = crispId;
    (window as any).$crisp.push(["config", "color:theme", ["green"]]);

    const d = document;
    const s = d.createElement("script");
    s.id = 'crisp-chat-script';
    s.src = "https://client.crisp.chat/l.js";
    s.async = true;
    d.getElementsByTagName("head")[0].appendChild(s);
  }, []);

  return null;
}
