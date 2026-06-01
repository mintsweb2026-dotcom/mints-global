import React, { useState } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../lib/firebase';
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
      await addDoc(collection(db, 'subscribers'), {
        email: email.toLowerCase(),
        subscribedAt: serverTimestamp()
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
    <div className="bg-olive-900 border border-olive-800/50 rounded-2xl p-6 md:p-8 flex flex-col relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-olive-500/10 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="relative z-10 w-full mb-6">
        <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-2">Join Our Newsletter</h3>
        <p className="text-brand-white-70 text-sm max-w-sm">
          Get the latest insights, case studies, and digital marketing strategies delivered straight to your inbox.
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
              className={`w-full bg-black/40 border ${
                status === 'error' ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-olive-500'
              } rounded-xl px-4 py-3 sm:py-3.5 text-sm text-white placeholder:text-brand-white-50 focus:outline-none focus:ring-1 focus:ring-olive-500 transition-all`}
              disabled={status === 'loading' || status === 'success'}
              required
            />
          </div>
          
          <button
            type="submit"
            disabled={status === 'loading' || status === 'success'}
            className="flex items-center justify-center gap-2 bg-olive-500 hover:bg-olive-400 text-black px-6 py-3 sm:py-3.5 rounded-xl font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed group/btn"
          >
            {status === 'loading' ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : status === 'success' ? (
              <CheckCircle2 className="w-5 h-5 text-black" />
            ) : (
              <>
                <span className="text-sm font-bold tracking-wider uppercase">Subscribe</span>
                <Send className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
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
                className="flex items-center gap-2 text-olive-400 text-sm"
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
