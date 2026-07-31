import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shield, ChevronDown, ChevronUp } from 'lucide-react';

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);

  const [preferences, setPreferences] = useState({
    analytics: false,
    marketing: false,
    chat: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Show banner after a slight delay
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem('cookie-consent', JSON.stringify({ necessary: true, analytics: true, marketing: true, chat: true }));
    setIsVisible(false);
  };

  const acceptNecessary = () => {
    localStorage.setItem('cookie-consent', JSON.stringify({ necessary: true, analytics: false, marketing: false, chat: false }));
    setIsVisible(false);
  };

  const savePreferences = () => {
    localStorage.setItem('cookie-consent', JSON.stringify({ necessary: true, ...preferences }));
    setIsVisible(false);
  };

  const togglePreference = (key: keyof typeof preferences) => {
    setPreferences((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:w-[400px] bg-olive-900 border border-white/10 rounded-2xl p-6 shadow-2xl z-50 flex flex-col gap-4 max-h-[calc(100vh-48px)] overflow-y-auto no-scrollbar"
        >
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-olive-500/20 flex items-center justify-center shrink-0">
              <Shield className="text-olive-500" size={20} />
            </div>
            <div>
              <h4 className="font-bold mb-1">We respect your privacy</h4>
              <p className="text-sm text-brand-white-70 leading-relaxed">
                We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
              </p>
            </div>
          </div>

          <AnimatePresence>
            {showPreferences && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="flex flex-col gap-3 mt-2 overflow-hidden"
              >
                {/* Necessary */}
                <div className="flex items-center justify-between bg-white/5 p-3 rounded-lg border border-white/5">
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-white">Necessary</span>
                    <span className="text-xs text-brand-white-40">Required for the website to function.</span>
                  </div>
                  <div className="relative inline-block w-10 h-5">
                    <input type="checkbox" checked disabled className="peer sr-only" />
                    <div className="w-10 h-5 bg-olive-500/50 rounded-full peer-checked:bg-olive-500/50 transition-colors"></div>
                    <div className="absolute left-1 top-1 w-3 h-3 bg-white rounded-full transition-transform translate-x-5"></div>
                  </div>
                </div>

                {/* Analytics */}
                <div className="flex items-center justify-between bg-white/5 p-3 rounded-lg border border-white/5">
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-white">Analytics</span>
                    <span className="text-xs text-brand-white-40">Help us understand how visitors interact.</span>
                  </div>
                  <label className="relative inline-block w-10 h-5 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={preferences.analytics}
                      onChange={() => togglePreference('analytics')}
                      className="peer sr-only"
                    />
                    <div className="w-10 h-5 bg-white/10 rounded-full peer-checked:bg-olive-500 transition-colors"></div>
                    <div className="absolute left-1 top-1 w-3 h-3 bg-white rounded-full transition-transform peer-checked:translate-x-5"></div>
                  </label>
                </div>

                {/* Marketing */}
                <div className="flex items-center justify-between bg-white/5 p-3 rounded-lg border border-white/5">
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-white">Marketing</span>
                    <span className="text-xs text-brand-white-40">Used to deliver tailored advertisements.</span>
                  </div>
                  <label className="relative inline-block w-10 h-5 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={preferences.marketing}
                      onChange={() => togglePreference('marketing')}
                      className="peer sr-only"
                    />
                    <div className="w-10 h-5 bg-white/10 rounded-full peer-checked:bg-olive-500 transition-colors"></div>
                    <div className="absolute left-1 top-1 w-3 h-3 bg-white rounded-full transition-transform peer-checked:translate-x-5"></div>
                  </label>
                </div>

                {/* Chat */}
                <div className="flex items-center justify-between bg-white/5 p-3 rounded-lg border border-white/5">
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-white">Chat</span>
                    <span className="text-xs text-brand-white-40">Enables live chat support.</span>
                  </div>
                  <label className="relative inline-block w-10 h-5 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={preferences.chat}
                      onChange={() => togglePreference('chat')}
                      className="peer sr-only"
                    />
                    <div className="w-10 h-5 bg-white/10 rounded-full peer-checked:bg-olive-500 transition-colors"></div>
                    <div className="absolute left-1 top-1 w-3 h-3 bg-white rounded-full transition-transform peer-checked:translate-x-5"></div>
                  </label>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex flex-col gap-2 mt-2">
            {!showPreferences ? (
              <>
                <button
                  onClick={acceptAll}
                  className="w-full bg-olive-500 text-brand-black font-bold py-2.5 rounded-lg text-sm hover:bg-olive-400 transition-colors"
                >
                  Accept All
                </button>
                <div className="flex gap-2">
                  <button
                    onClick={acceptNecessary}
                    className="flex-1 bg-white/5 hover:bg-white/10 text-brand-white font-bold py-2.5 rounded-lg text-sm transition-colors border border-white/5"
                  >
                    Necessary Only
                  </button>
                  <button
                    onClick={() => setShowPreferences(true)}
                    className="flex-1 flex items-center justify-center gap-1 bg-transparent hover:bg-white/5 text-brand-white-70 font-bold py-2.5 rounded-lg text-sm transition-colors border border-transparent hover:border-white/5"
                  >
                    Manage <ChevronDown size={16} />
                  </button>
                </div>
              </>
            ) : (
              <>
                <button
                  onClick={savePreferences}
                  className="w-full bg-olive-500 text-brand-black font-bold py-2.5 rounded-lg text-sm hover:bg-olive-400 transition-colors"
                >
                  Save Preferences
                </button>
                <div className="flex gap-2">
                  <button
                    onClick={acceptAll}
                    className="flex-1 bg-white/5 hover:bg-white/10 text-brand-white font-bold py-2.5 rounded-lg text-sm transition-colors border border-white/5"
                  >
                    Accept All
                  </button>
                  <button
                    onClick={() => setShowPreferences(false)}
                    className="flex-1 flex items-center justify-center gap-1 bg-transparent hover:bg-white/5 text-brand-white-70 font-bold py-2.5 rounded-lg text-sm transition-colors border border-transparent hover:border-white/5"
                  >
                    Back <ChevronUp size={16} />
                  </button>
                </div>
              </>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
