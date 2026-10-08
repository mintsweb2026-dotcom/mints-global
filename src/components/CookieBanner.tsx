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
          className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:w-[420px] bg-white border border-[#E4E4E4] rounded-2xl p-6 shadow-2xl shadow-[#687838]/15 z-50 flex flex-col gap-4 max-h-[calc(100vh-48px)] overflow-y-auto no-scrollbar font-sans"
        >
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#EDF2E2] border border-[#DBE4C7] flex items-center justify-center shrink-0 text-[#687838]">
              <Shield size={20} />
            </div>
            <div>
              <h4 className="font-bold text-sm text-[#182012] mb-1">Privacy & Cookie Governance</h4>
              <p className="text-xs text-[#5A644D] leading-relaxed">
                We use cookies to enhance navigation, deliver analytics, and secure services across UAE, UK, and European operations.
              </p>
            </div>
          </div>

          <AnimatePresence>
            {showPreferences && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="flex flex-col gap-2.5 mt-1 overflow-hidden"
              >
                {/* Necessary */}
                <div className="flex items-center justify-between bg-[#F0F0F0]/70 p-3 rounded-xl border border-[#E4E4E4]">
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-[#182012]">Necessary</span>
                    <span className="text-[11px] text-[#859177]">Required for security & authentication.</span>
                  </div>
                  <div className="relative inline-block w-9 h-5">
                    <input type="checkbox" checked disabled className="peer sr-only" />
                    <div className="w-9 h-5 bg-[#687838]/40 rounded-full transition-colors"></div>
                    <div className="absolute left-1 top-1 w-3 h-3 bg-white rounded-full transition-transform translate-x-4 shadow-2xs"></div>
                  </div>
                </div>

                {/* Analytics */}
                <div className="flex items-center justify-between bg-[#F0F0F0]/70 p-3 rounded-xl border border-[#E4E4E4]">
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-[#182012]">Analytics</span>
                    <span className="text-[11px] text-[#859177]">Anonymous telemetry to improve workflows.</span>
                  </div>
                  <label className="relative inline-block w-9 h-5 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={preferences.analytics}
                      onChange={() => togglePreference('analytics')}
                      className="peer sr-only"
                    />
                    <div className="w-9 h-5 bg-[#DBE4C7] rounded-full peer-checked:bg-[#687838] transition-colors"></div>
                    <div className="absolute left-1 top-1 w-3 h-3 bg-white rounded-full transition-transform peer-checked:translate-x-4 shadow-2xs"></div>
                  </label>
                </div>

                {/* Marketing */}
                <div className="flex items-center justify-between bg-[#F0F0F0]/70 p-3 rounded-xl border border-[#E4E4E4]">
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-[#182012]">Marketing</span>
                    <span className="text-[11px] text-[#859177]">Targeted performance campaign attribution.</span>
                  </div>
                  <label className="relative inline-block w-9 h-5 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={preferences.marketing}
                      onChange={() => togglePreference('marketing')}
                      className="peer sr-only"
                    />
                    <div className="w-9 h-5 bg-[#DBE4C7] rounded-full peer-checked:bg-[#687838] transition-colors"></div>
                    <div className="absolute left-1 top-1 w-3 h-3 bg-white rounded-full transition-transform peer-checked:translate-x-4 shadow-2xs"></div>
                  </label>
                </div>

                {/* Chat */}
                <div className="flex items-center justify-between bg-[#F0F0F0]/70 p-3 rounded-xl border border-[#E4E4E4]">
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-[#182012]">Chat Support</span>
                    <span className="text-[11px] text-[#859177]">Enables realtime customer messaging.</span>
                  </div>
                  <label className="relative inline-block w-9 h-5 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={preferences.chat}
                      onChange={() => togglePreference('chat')}
                      className="peer sr-only"
                    />
                    <div className="w-9 h-5 bg-[#DBE4C7] rounded-full peer-checked:bg-[#687838] transition-colors"></div>
                    <div className="absolute left-1 top-1 w-3 h-3 bg-white rounded-full transition-transform peer-checked:translate-x-4 shadow-2xs"></div>
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
                  className="w-full bg-[#687838] text-white font-semibold py-2.5 rounded-xl text-xs sm:text-sm hover:bg-[#515E2C] transition-colors shadow-2xs cursor-pointer"
                >
                  Accept All
                </button>
                <div className="flex gap-2">
                  <button
                    onClick={acceptNecessary}
                    className="flex-1 bg-[#F0F0F0] hover:bg-[#EDF2E2] text-[#182012] font-semibold py-2 rounded-xl text-xs transition-colors border border-[#E4E4E4] cursor-pointer"
                  >
                    Necessary Only
                  </button>
                  <button
                    onClick={() => setShowPreferences(true)}
                    className="flex-1 flex items-center justify-center gap-1 bg-white hover:bg-[#F0F0F0] text-[#5A644D] hover:text-[#182012] font-semibold py-2 rounded-xl text-xs transition-colors border border-[#E4E4E4] cursor-pointer"
                  >
                    Preferences <ChevronDown size={14} />
                  </button>
                </div>
              </>
            ) : (
              <>
                <button
                  onClick={savePreferences}
                  className="w-full bg-[#687838] text-white font-semibold py-2.5 rounded-xl text-xs sm:text-sm hover:bg-[#515E2C] transition-colors shadow-2xs cursor-pointer"
                >
                  Save Preferences
                </button>
                <div className="flex gap-2">
                  <button
                    onClick={acceptAll}
                    className="flex-1 bg-[#F0F0F0] hover:bg-[#EDF2E2] text-[#182012] font-semibold py-2 rounded-xl text-xs transition-colors border border-[#E4E4E4] cursor-pointer"
                  >
                    Accept All
                  </button>
                  <button
                    onClick={() => setShowPreferences(false)}
                    className="flex-1 flex items-center justify-center gap-1 bg-white hover:bg-[#F0F0F0] text-[#5A644D] hover:text-[#182012] font-semibold py-2 rounded-xl text-xs transition-colors border border-[#E4E4E4] cursor-pointer"
                  >
                    Back <ChevronUp size={14} />
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
