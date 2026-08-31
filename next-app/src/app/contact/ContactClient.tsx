"use client";
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, CheckCircle2, Mail, MapPin, Phone, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

const contactSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  company: z.string().max(50, 'Company name must not exceed 50 characters').optional(),
  services: z.array(z.string()).min(1, 'Select at least one service'),
  timeline: z.string().optional(),
  budget: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactClient() {
  const [step, setStep] = useState(1);
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const { register, handleSubmit, watch, setValue, formState: { errors, isSubmitting, touchedFields } } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: 'onTouched',
    defaultValues: {
      services: [],
    }
  });

  const selectedServices = watch('services');

  const onSubmit = async (data: ContactFormData) => {
    try {
      const templateParams = {
        name: data.name,
        email: data.email,
        company: data.company || 'N/A',
        services: data.services.join(', '),
        timeline: data.timeline || 'N/A',
        budget: data.budget || 'N/A',
        message: data.message,
      };

      await emailjs.send(
        'service_hsym0kb',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID',
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY'
      );
      
      setIsSubmitted(true);
    } catch (err) {
      console.error('EmailJS error:', err);
      alert('An error occurred while sending your message. Please try again later.');
    }
  };

  const nextStep = () => setStep((s) => Math.min(s + 1, 3));
  const prevStep = () => {
    setSubmitAttempted(false);
    setStep((s) => Math.max(s - 1, 1));
  };

  const toggleService = (service: string) => {
    const current = [...selectedServices];
    if (current.includes(service)) {
      setValue('services', current.filter((s) => s !== service), { shouldValidate: true });
    } else {
      setValue('services', [...current, service], { shouldValidate: true });
    }
  };

  return (
    <div className="w-full pt-[116px]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 w-full grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Left Info */}
        <div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-black mb-8">LET'S BUILD<br/><span className="text-olive-500">TOGETHER.</span></h1>
          <p className="text-brand-white-70 text-lg mb-12 max-w-md">
            Tell us about your project, timeline, and goals. We'll connect you with the right experts from our team.
          </p>

          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-olive-900 border border-white/10 flex items-center justify-center shrink-0">
                <Mail className="text-olive-500" size={20} />
              </div>
              <div>
                <h4 className="font-bold mb-1">Email Us</h4>
                <p className="text-brand-white-70">info@mintsglobal.ae</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-olive-900 border border-white/10 flex items-center justify-center shrink-0">
                <Phone className="text-olive-500" size={20} />
              </div>
              <div>
                <h4 className="font-bold mb-1">Call / WhatsApp</h4>
                <div className="flex flex-col gap-1 text-brand-white-70">
                  <a href="https://wa.me/971502943916" className="hover:text-olive-500 transition-colors">+971 502943916</a>
                  <a href="https://wa.me/447899727950" className="hover:text-olive-500 transition-colors">+44 7899727950</a>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-olive-900 border border-white/10 flex items-center justify-center shrink-0">
                <MapPin className="text-olive-500" size={20} />
              </div>
              <div>
                <h4 className="font-bold mb-1">Visit Us</h4>
                <p className="text-brand-white-70">Bank Street Building, Bur Dubai<br/>Dubai, UAE</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Form */}
        <div className="bg-olive-900/50 border border-white/10 rounded-3xl p-8 lg:p-12 relative overflow-hidden">
          
          {/* Progress Bar */}
          {!isSubmitted && (
            <div className="mb-12">
              <div className="flex gap-2 mb-3">
                 {[1, 2, 3].map((s) => (
                    <button 
                      key={s} 
                      type="button"
                      onClick={() => {
                        if (s < step) setStep(s);
                        else if (s > step) {
                          if (step === 1 && selectedServices.length > 0) setStep(s);
                          else if (step === 2) setStep(s);
                        }
                      }}
                      disabled={s > step && step === 1 && selectedServices.length === 0}
                      className={`h-2 flex-1 rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-olive-500/50 ${
                        step === s ? 'bg-olive-500 shadow-[0_0_15px_rgba(106,171,31,0.5)]' 
                        : step > s ? 'bg-olive-600/80 hover:bg-olive-400 cursor-pointer' 
                        : 'bg-white/10'
                      }`}
                      aria-label={s === 1 ? 'Go to Services step' : s === 2 ? 'Go to Project Details step' : 'Go to Contact Info step'}
                    />
                 ))}
              </div>
              <div className="flex justify-between px-1 text-[10px] sm:text-xs font-bold uppercase tracking-widest">
                <span className={`text-left flex-1 transition-colors ${step >= 1 ? 'text-olive-500' : 'text-brand-white-40'}`}>Services</span>
                <span className={`text-center flex-1 transition-colors ${step >= 2 ? 'text-olive-500' : 'text-brand-white-40'}`}>Project</span>
                <span className={`text-right flex-1 transition-colors ${step >= 3 ? 'text-olive-500' : 'text-brand-white-40'}`}>Details</span>
              </div>
            </div>
          )}

          {isSubmitted ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center text-center h-full py-20"
            >
              <div className="w-20 h-20 bg-olive-500 rounded-full flex items-center justify-center mb-6">
                <CheckCircle2 size={40} className="text-white" />
              </div>
              <h3 className="font-display text-3xl font-black mb-4">Enquiry Received!</h3>
              <p className="text-brand-white-70 mb-8 max-w-sm">We've received your details and our team will get back to you within 24 hours.</p>
              
              <a 
                href="https://wa.me/971502943916" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full font-bold uppercase tracking-wider text-sm hover:bg-[#20bd5a] transition-colors"
              >
                Chat on WhatsApp Now
              </a>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="min-h-[400px] flex flex-col">
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div 
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="flex-1"
                  >
                    <h3 className="text-2xl font-bold mb-6">What services are you interested in?</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                      {['Digital Marketing', 'Software Development', 'Cyber Security', 'SEO Strategy', 'Brand Design', 'Consultancy'].map((srv) => (
                        <button
                          key={srv}
                          type="button"
                          onClick={() => toggleService(srv)}
                          className={`text-left p-6 rounded-2xl border transition-all focus:outline-none focus-visible:ring-4 focus-visible:ring-olive-500/50 ${selectedServices.includes(srv) ? 'bg-olive-500/20 border-olive-500 text-white shadow-[0_0_20px_rgba(106,171,31,0.15)] ring-4 ring-olive-500/20' : 'bg-transparent border-white/10 text-brand-white-70 hover:border-white/30 hover:bg-white/5'}`}
                        >
                          <div className={`w-5 h-5 rounded-full border mb-4 flex items-center justify-center transition-colors ${selectedServices.includes(srv) ? 'border-olive-500' : 'border-white/30'}`}>
                             {selectedServices.includes(srv) ? <div className="w-2.5 h-2.5 bg-olive-500 rounded-full" /> : null}
                          </div>
                          <span className="font-bold text-lg">{srv}</span>
                        </button>
                      ))}
                    </div>
                    {errors.services && <p className="text-red-400 mt-4 text-sm">{errors.services.message}</p>}
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div 
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="flex-1"
                  >
                    <div className="mb-10">
                       <h3 className="text-xl font-bold mb-5 text-white">When do you want to start?</h3>
                       <div className="flex flex-wrap gap-3">
                         {['ASAP', '1–3 Months', '3–6 Months', '6–12 Months', 'Just Exploring'].map((tl) => (
                           <label key={tl} className={`px-6 py-3.5 rounded-full border cursor-pointer transition-all text-sm font-bold flex items-center justify-center text-center has-[:focus-visible]:ring-4 has-[:focus-visible]:ring-olive-500/50 ${watch('timeline') === tl ? 'bg-olive-500/20 border-olive-500 text-white shadow-[0_0_15px_rgba(106,171,31,0.15)] ring-4 ring-olive-500/20' : 'border-white/10 text-brand-white-70 hover:border-white/30 hover:bg-white/5 mx-0'}`}>
                             <input type="radio" value={tl} {...register('timeline')} className="sr-only" />
                             {tl}
                           </label>
                         ))}
                       </div>
                    </div>

                    <h3 className="text-xl font-bold mb-5 text-white">What is your estimated budget?</h3>
                    <div className="grid grid-cols-1 gap-3.5">
                      {['Under AED 10,000', 'AED 10,000 – 30,000', 'AED 30,000 – 100,000', 'AED 100,000+', 'Not Sure Yet'].map((bdg) => (
                        <label key={bdg} className={`flex items-center gap-4 px-6 py-5 rounded-2xl border cursor-pointer transition-all has-[:focus-visible]:ring-4 has-[:focus-visible]:ring-olive-500/50 ${watch('budget') === bdg ? 'bg-olive-500/20 border-olive-500 text-white shadow-[0_0_15px_rgba(106,171,31,0.1)] ring-4 ring-olive-500/20' : 'border-white/10 text-brand-white-70 hover:border-white/30 hover:bg-white/5'}`}>
                          <input type="radio" value={bdg} {...register('budget')} className="sr-only" />
                          <div className={`w-5 h-5 rounded-full border flex-shrink-0 flex items-center justify-center transition-colors ${watch('budget') === bdg ? 'border-olive-500' : 'border-white/30'}`}>
                            {watch('budget') === bdg && <div className="w-2.5 h-2.5 bg-olive-500 rounded-full" />}
                          </div>
                          <span className="font-bold text-base">{bdg}</span>
                        </label>
                      ))}
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div 
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="flex-1"
                  >
                    {(() => {
                      const nameError = errors.name && (touchedFields.name || submitAttempted);
                      const emailError = errors.email && (touchedFields.email || submitAttempted);
                      const companyError = errors.company && (touchedFields.company || submitAttempted);
                      const messageError = errors.message && (touchedFields.message || submitAttempted);
                      return (
                        <>
                          <h3 className="text-2xl font-bold mb-8">Tell us about yourself</h3>
                          <div className="space-y-5">
                            <div>
                              <input 
                                {...register('name')} 
                                placeholder="Your Name *" 
                                className={`w-full bg-olive-950/30 border rounded-2xl px-6 py-5 focus:outline-none focus:ring-4 transition-all placeholder:text-white/30 text-white ${nameError ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500/20' : 'border-white/10 focus:border-olive-500 focus:ring-olive-500/20 hover:border-white/20'}`}
                              />
                              {nameError && <p className="text-red-400 mt-2 text-sm ml-2 font-medium">{errors.name?.message}</p>}
                            </div>
                            <div>
                              <input 
                                {...register('email')} 
                                placeholder="Work Email *" 
                                className={`w-full bg-olive-950/30 border rounded-2xl px-6 py-5 focus:outline-none focus:ring-4 transition-all placeholder:text-white/30 text-white ${emailError ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500/20' : 'border-white/10 focus:border-olive-500 focus:ring-olive-500/20 hover:border-white/20'}`}
                              />
                              {emailError && <p className="text-red-400 mt-2 text-sm ml-2 font-medium">{errors.email?.message}</p>}
                            </div>
                            <div>
                              <input 
                                {...register('company')} 
                                placeholder="Company Name (Optional)" 
                                className={`w-full bg-olive-950/30 border rounded-2xl px-6 py-5 focus:outline-none focus:ring-4 transition-all placeholder:text-white/30 text-white ${companyError ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500/20' : 'border-white/10 focus:border-olive-500 focus:ring-olive-500/20 hover:border-white/20'}`}
                              />
                              {companyError && <p className="text-red-400 mt-2 text-sm ml-2 font-medium">{errors.company?.message}</p>}
                            </div>
                            <div>
                              <textarea 
                                {...register('message')} 
                                placeholder="Project Details *" 
                                rows={4}
                                className={`w-full bg-olive-950/30 border rounded-2xl px-6 py-5 focus:outline-none focus:ring-4 transition-all placeholder:text-white/30 resize-none text-white ${messageError ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500/20' : 'border-white/10 focus:border-olive-500 focus:ring-olive-500/20 hover:border-white/20'}`}
                              />
                              {messageError && <p className="text-red-400 mt-2 text-sm ml-2 font-medium">{errors.message?.message}</p>}
                            </div>
                          </div>
                        </>
                      );
                    })()}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Navigation Buttons */}
              <div className="mt-12 flex items-center justify-between pt-8 border-t border-white/10">
                 {step > 1 ? (
                   <button type="button" onClick={prevStep} className="flex items-center gap-2 text-brand-white-70 hover:text-white font-bold p-2 -ml-2 rounded-lg hover:bg-white/5 transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-white/10">
                     <ArrowLeft size={18} /> Back
                   </button>
                 ) : (
                   <div /> // Spacer
                 )}

                 {step < 3 ? (
                   <button 
                    type="button" 
                    onClick={() => {
                      if (step === 1 && selectedServices.length === 0) return; // Basic manual validation
                      nextStep();
                    }} 
                    disabled={step === 1 && selectedServices.length === 0}
                    className="bg-brand-white text-olive-950 px-8 py-3.5 sm:px-10 sm:py-4 rounded-full font-black flex items-center gap-2 hover:bg-olive-500 hover:text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer focus:outline-none focus-visible:ring-4 focus-visible:ring-olive-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-olive-900 text-base sm:text-lg shadow-lg hover:shadow-olive-500/20 hover:-translate-y-0.5 active:translate-y-0"
                   >
                     Continue <ArrowRight size={18} />
                   </button>
                 ) : (
                   <button 
                    type="submit" 
                    disabled={isSubmitting}
                    onClick={() => setSubmitAttempted(true)}
                    className="bg-olive-500 text-brand-black px-8 py-3.5 sm:px-10 sm:py-4 rounded-full font-black flex items-center gap-2 hover:bg-olive-400 transition-all disabled:opacity-75 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-olive-900 text-base sm:text-lg shadow-lg hover:shadow-olive-500/30 hover:-translate-y-0.5 active:translate-y-0"
                   >
                     {isSubmitting ? (
                       <>
                         Processing <Loader2 size={18} className="animate-spin" />
                       </>
                     ) : (
                       <>
                         Submit Enquiry <ArrowRight size={18} />
                       </>
                     )}
                   </button>
                 )}
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
