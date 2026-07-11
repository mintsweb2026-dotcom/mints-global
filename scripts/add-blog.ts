import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const firebaseConfig = {
  projectId: process.env.VITE_FIREBASE_PROJECT_ID,
  appId: process.env.VITE_FIREBASE_APP_ID,
  apiKey: process.env.VITE_FIREBASE_API_KEY,
  authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN,
  storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app, process.env.VITE_FIREBASE_FIRESTORE_DB_ID);

const blogContent = `If you run a business in Dubai or anywhere else in the UAE, you've probably had the "when did we last test our systems" conversation at least once this year. Cyber threats aren't slowing down, and neither are the compliance requirements from the CBUAE, DESC, and the UAE PDPL. What has changed is how vulnerability assessment and penetration testing, or VAPT, actually gets done. AI-powered VAPT is quickly becoming the standard for UAE companies that want real protection instead of a report that sits in a folder until the next audit.

### What AI-Powered VAPT Actually Means

Traditional VAPT relies heavily on manual effort. A security analyst runs scans, sifts through results, chases down false positives, and writes up findings by hand. It works, but it's slow, and it depends entirely on the analyst's bandwidth on any given day.

AI-powered VAPT layers machine learning and automation on top of that process. Instead of waiting for a scheduled scan once or twice a year, AI models continuously analyze network traffic, application behavior, and code changes to flag unusual patterns as they appear. The technology doesn't replace the ethical hacker running manual penetration tests, it gives them better data to work with, faster, so they can spend their time on the vulnerabilities that actually matter.

### Why UAE Businesses Are Paying Attention Now

The UAE has one of the highest concentrations of digital-first businesses in the GCC, which also makes it an attractive target. Government-aligned frameworks like the CBUAE Cybersecurity Framework and the DESC standards in Dubai are pushing companies, especially in finance, healthcare, and government-adjacent sectors, to prove they're testing regularly and can respond fast when something goes wrong.

A few reasons UAE businesses are moving toward it:

- **Faster turnaround on findings** — AI tools can scan and triage large environments in a fraction of the time manual testing takes, which matters when regulators expect annual or even quarterly assessments.
- **Fewer false positives** — machine learning models get better at distinguishing real vulnerabilities from noise the more data they process, so security teams stop wasting hours chasing dead ends.
- **Continuous coverage, not a once-a-year snapshot** — AI-assisted monitoring can catch new exposures the moment a system changes, whether that's a new API endpoint or an update pushed to a mobile app.
- **Better prioritization** — AI models weigh exploitability, exposure, and business impact to help teams fix what's actually dangerous first.

### How This Plays Out in Practice

Say a UAE-based fintech pushes a new API for its open banking integration. Under a traditional model, that API might not get tested until the next scheduled VAPT cycle, weeks or months later. With AI-powered VAPT, the new endpoint gets flagged and scanned as part of continuous testing, and a human tester steps in to validate anything the model surfaces. The business gets a much shorter window between "vulnerability introduced" and "vulnerability found," which is exactly the gap attackers rely on.

The same logic applies to web applications, cloud infrastructure, and internal networks. AI doesn't replace the judgment of a certified penetration tester, but it does mean testers aren't starting from zero every time. They're working from a model that already knows what normal looks like for your systems, so anomalies stand out faster.

### What to Look for in an AI-Powered VAPT Partner

Not every provider that claims "AI-powered" security testing is doing the same thing under the hood. When you're evaluating a partner in the UAE, it's worth asking:

1. Do they combine AI-driven scanning with manual penetration testing, or is it automated scanning alone with an AI label attached?
2. Can they map findings to the specific frameworks you need, like CBUAE, PCI DSS, ISO 27001, or UAE PDPL?
3. Do their reports translate technical findings into a remediation plan your internal team can actually act on?
4. Are they testing continuously, or still working off a fixed annual schedule?

A good VAPT partner should be able to answer all four without much hesitation.

### Where Mints Global Fits In

At Mints Global, our approach to AI-powered VAPT pairs automated, continuous scanning with hands-on penetration testing from certified security professionals. We're not interested in handing UAE businesses a long PDF full of jargon. Our reports are built to show exactly what's exposed, how serious it is, and what to fix first, mapped against the frameworks that matter to your industry.

Whether you're a fintech navigating CBUAE's Open Finance requirements, a healthcare provider handling sensitive patient data, or a growing enterprise trying to get ahead of your next compliance audit, AI-powered VAPT gives you a faster, sharper picture of where you actually stand.

If it's been a while since your last real security assessment, or if your last one felt more like a checkbox exercise than a genuine test, it might be time for a different approach.

Ready to see where your systems stand? Get in touch with Mints Global for an AI-powered VAPT assessment built around your business.`;

async function addBlog() {
  try {
    const slug = 'ai-powered-vapt-uae';
    const postData = {
      title: 'AI-Powered VAPT in the UAE: Why Testing Is Getting Smarter, Not Just Faster',
      content: blogContent,
      excerpt: 'AI-powered VAPT for UAE firms: faster detection, fewer false positives, real compliance-ready reports.',
      category: 'Cybersecurity',
      seoTitle: 'AI-Powered VAPT Services in the UAE | Mints Global',
      seoDescription: 'AI-powered VAPT for UAE firms: faster detection, fewer false positives, real compliance-ready reports.',
      slug: slug,
      tags: ['vapt', 'ai-cybersecurity', 'penetration-testing', 'uae-compliance'],
      imageAlt: 'AI-powered VAPT security testing dashboard for UAE businesses',
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    console.log('Attempting to add blog post via client SDK...');
    await setDoc(doc(db, 'posts', slug), postData, { merge: true });
    console.log('Successfully added blog post!');
  } catch (error) {
    console.error('Failed to add blog post:', error);
  }
  process.exit(0);
}

addBlog();
