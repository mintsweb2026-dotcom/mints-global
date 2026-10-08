import React, { useState } from 'react';
import { sendEmail } from '../lib/emailService';
import { Send, CheckCircle2, Loader2, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      const domain = email.split('@')[1];

      // 1. Check if domain has MX records (active domain check)
      const dnsRes = await fetch(`https://dns.google/resolve?name=${domain}&type=MX`);
      if (dnsRes.ok) {
        const dnsData = await dnsRes.json();
        if (dnsData.Status === 3 || !dnsData.Answer || dnsData.Answer.length === 0) {
          setStatus('error');
          setErrorMessage('This email domain does not appear to be active.');
          return;
        }
      }

      // 2. Check if domain is disposable
      const kickboxRes = await fetch(`https://open.kickbox.com/v1/disposable/${domain}`);
      if (kickboxRes.ok) {
        const kickboxData = await kickboxRes.json();
        if (kickboxData && kickboxData.disposable) {
          setStatus('error');
          setErrorMessage('Please use a non-disposable email address.');
          return;
        }
      }
    } catch (e) {
      // In case of network error or adblocker blocking the request, just proceed
      console.warn('Domain validation check failed:', e);
    }

    try {
      await sendEmail({
        name: 'Newsletter Subscriber',
        email: email.toLowerCase(),
        company: 'N/A',
        services: 'Newsletter Subscription',
        timeline: 'N/A',
        budget: 'N/A',
        message: `New newsletter subscription request from: ${email.toLowerCase()}`,
      });

      setStatus('success');
      setEmail('');
    } catch (error) {
      console.error('Error subscribing to newsletter:', error);
      setStatus('error');
      setErrorMessage('Oops! Something went wrong. Please try again later.');
    }
  };

  return (
    <div className="bg-white border border-[#E4E4E4] rounded-2xl p-6 md:p-8 flex flex-col relative overflow-hidden shadow-xs hover:border-[#687838] transition-colors">
      {/* Background decoration matching ERP ambient glows */}
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-[#EDF2E2] rounded-full blur-3xl pointer-events-none opacity-80"></div>
      
      <div className="relative z-10 w-full mb-6">
        <h3 className="text-xl md:text-2xl font-sans font-bold text-[#182012] mb-2">Join Our Engineering & Strategy Insights</h3>
        <p className="text-[#5A644D] text-sm max-w-sm">
          Get the latest insights, architecture teardowns, and growth strategies delivered straight to your inbox.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="relative z-10 w-full mt-auto">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (status === 'error') setStatus('idle');
              }}
              placeholder="Enter your email address"
              className={`w-full bg-[#F0F0F0]/50 border ${
                status === 'error' ? 'border-red-500/50 focus:border-red-500' : 'border-[#E4E4E4] focus:border-[#687838] focus:bg-white'
              } rounded-xl px-4 py-3 sm:py-3.5 text-sm text-[#182012] placeholder:text-[#859177] focus:outline-none focus:ring-1 focus:ring-[#687838] transition-all`}
              disabled={status === 'loading' || status === 'success'}
              required
            />
          </div>
          
          <button
            type="submit"
            disabled={status === 'loading' || status === 'success'}
            className="flex items-center justify-center gap-2 bg-[#687838] hover:bg-[#515E2C] text-white px-6 py-3 sm:py-3.5 rounded-xl font-semibold transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed group/btn shadow-xs cursor-pointer"
          >
            {status === 'loading' ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : status === 'success' ? (
              <CheckCircle2 className="w-5 h-5 text-white" />
            ) : (
              <>
                <span className="text-sm font-semibold tracking-wider text-white">Subscribe</span>
                <Send className="w-4 h-4 text-white group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </>
            )}
          </button>
        </div>

        {/* Status Messages */}
        <div className="h-6 mt-3 flex items-center overflow-hidden">
          <AnimatePresence mode="wait">
            {status === 'success' && (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="flex items-center gap-2 text-[#687838] text-sm font-semibold"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Thank you for subscribing!</span>
              </motion.div>
            )}
            {status === 'error' && (
              <motion.div
                key="error"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className="flex items-center gap-2 text-red-400 text-sm"
              >
                <AlertCircle className="w-4 h-4 text-red-500" />
                <span>{errorMessage}</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </form>
    </div>
  );
}
