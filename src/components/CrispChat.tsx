import { useEffect } from 'react';

export default function CrispChat() {
  useEffect(() => {
    if (document.getElementById('crisp-chat-script')) return;

    (window as any).$crisp = [];
    (window as any).CRISP_WEBSITE_ID = "3590cc65-c43f-4ce9-98cf-ddd1f75f853c";
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
