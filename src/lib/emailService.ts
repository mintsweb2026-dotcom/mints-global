/**
 * Shared EmailJS send utility.
 * Single source of truth for all outbound EmailJS calls in this app.
 * Both Contact.tsx and NewsletterForm.tsx import from here.
 */
import emailjs from '@emailjs/browser';

/** Template parameters sent on every email */
export interface EmailParams {
  name: string;
  email: string;
  company?: string;
  services?: string;
  timeline?: string;
  budget?: string;
  message: string;
}

/**
 * Sends an email via EmailJS.
 * Throws if required environment variables are not set.
 */
export async function sendEmail(params: EmailParams): Promise<void> {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    throw new Error(
      'Email service credentials are missing. ' +
      'Please configure VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY.'
    );
  }

  await emailjs.send(serviceId, templateId, params as unknown as Record<string, unknown>, publicKey);
}
