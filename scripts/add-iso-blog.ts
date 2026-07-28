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

const blogContent = `ISO 27001 certification in Dubai and the wider UAE typically takes 3–6 months for small to mid-sized organizations and involves a gap assessment, ISMS implementation, an internal audit, and a two-stage external audit carried out by an accredited certification body. Mints Global manages the entire readiness journey — gap assessment, documentation, control implementation, and Stage 1/Stage 2 audit preparation — so your team gets certified without pausing day-to-day operations.

If your business in Dubai handles customer data, financial records, or intellectual property, ISO 27001 certification has moved from a nice-to-have into a commercial requirement. Government tenders, free zone authorities such as DIFC and ADGM, and enterprise procurement teams now routinely ask for it as a pre-qualification criterion — and UAE frameworks like the PDPL and NESA IA Standards are built to align with it. Mints Global's Compliance & GRC team guides organizations across the UAE through every stage of the ISO 27001 journey, from the first gap assessment to a successful Stage 2 certification audit.

### What Is ISO 27001:2022?
ISO 27001 is the international standard for an Information Security Management System (ISMS) — a structured framework of policies, risk assessments, and controls that protects the confidentiality, integrity, and availability of information. The current version, ISO 27001:2022, is built around 93 controls in Annex A, reorganized into four themes: organizational, people, physical, and technological controls. Certification is issued by an independent, accredited certification body after your organization passes a two-stage external audit.

### Why Dubai and UAE Businesses Need ISO 27001 in 2026
- **Tender eligibility:** Government entities, free zones (DIFC, ADGM, Dubai Internet City), and large enterprise clients increasingly list ISO 27001 as a mandatory or scoring criterion in RFPs.
- **Regulatory alignment:** ISO 27001 controls map closely onto the UAE PDPL and NESA IA Standards, reducing duplicate compliance work for regulated and public-sector-adjacent organizations.
- **Rising regional cyber risk:** The average cost of a data breach continues to climb across the Gulf, making a certified ISMS a measurable risk-reduction investment rather than a paperwork exercise.
- **Client and partner trust:** Certification is one of the few security claims a customer can independently verify, which shortens due-diligence cycles in enterprise sales.

### The ISO 27001 Certification Process, Step by Step
1. **Gap Assessment** — benchmark current security practices against ISO 27001:2022's 93 Annex A controls and flag what's missing.
2. **Define ISMS Scope** — decide which business units, locations, systems, and data are covered by the certification.
3. **Risk Assessment & Statement of Applicability (SoA)** — identify, score, and document how each applicable control treats identified risks.
4. **Implement Controls & Policies** — roll out technical controls, access management, incident response plans, and supporting documentation.
5. **Internal Audit & Management Review** — test the ISMS internally and have leadership formally review performance before the external audit.
6. **Stage 1 Audit** — the certification body reviews your documentation and readiness.
7. **Stage 2 Audit** — the certification body tests whether controls are actually operating as documented.
8. **Certification & Surveillance** — certificates are valid for three years, with annual surveillance audits to confirm the ISMS stays effective.

### How Mints Global Helps You Get ISO 27001 Ready
- Gap assessment and risk assessment led by in-house GRC specialists, benchmarked against ISO 27001:2022 Annex A.
- ISMS documentation and policy drafting written to satisfy the auditor and to work day-to-day for your team — not shelf-ware.
- Control implementation backed by Mints Global's own offensive security, cloud security, and OT/IoT security practices, so technical controls are genuinely tested, not just described on paper.
- Internal audits and mock Stage 2 rehearsals to remove surprises before the real certification audit.
- Coordination with an accredited, independent certification body for the official Stage 1/Stage 2 audit and certificate issuance — Mints Global prepares you for certification; the accredited body performs and issues it.
- Post-certification support for annual surveillance audits and keeping the ISMS current as your business and the standard evolve.

### Why Choose Mints Global Over a Traditional ISO Consultant
Most ISO consultants in Dubai stop at documentation. Mints Global is a cybersecurity and digital agency first — meaning the same team that writes your ISMS policies can also pen-test the systems those policies are supposed to protect, harden your cloud environment, and secure OT/IoT assets. That combination closes the gap between 'compliant on paper' and 'actually secure,' which is exactly what a Stage 2 auditor is testing for.

### Frequently Asked Questions

**What is ISO 27001 certification?**
It's independent, third-party confirmation that an organization has implemented an Information Security Management System that meets the ISO/IEC 27001:2022 international standard for protecting information assets.

**Is ISO 27001 certification mandatory in the UAE?**
It isn't a general legal requirement, but it's increasingly mandatory in practice — required or scored in many government tenders, free zone approvals, and enterprise vendor onboarding processes.

**How much does ISO 27001 certification cost in Dubai?**
Cost depends on organization size, number of locations, and current security maturity, and covers consultancy/implementation, internal staff time, and the certification body's audit fee. Request a free gap assessment for a scoped quote.

**How long does ISO 27001 certification take?**
Most small to mid-sized organizations complete the journey in 3–6 months; larger or multi-site organizations typically need 6 months or more.

**Who issues the ISO 27001 certificate?**
An independent, accredited certification body issues the certificate after a successful two-stage audit. Mints Global prepares your organization for that audit; it does not itself issue certificates.

**What's the difference between ISO 27001:2013 and ISO 27001:2022?**
The 2022 version reorganized and reduced the Annex A controls to 93, grouped into four themes (organizational, people, physical, technological), and added new controls covering areas like cloud security and threat intelligence.

**What documents are required for ISO 27001 certification?**
Core requirements include the ISMS scope statement, risk assessment methodology and results, Statement of Applicability, security policies, and records of internal audits and management reviews.

**How often do you need to renew ISO 27001 certification?**
Certificates are valid for three years, with annual surveillance audits required in between to confirm the ISMS is still operating effectively.

**Can small businesses in Dubai get ISO 27001 certified?**
Yes — the standard is scalable by design. A small business defines a narrower ISMS scope and typically moves through the process faster and at lower cost than a large, multi-site organization.`;

async function addBlog() {
  try {
    const slug = 'iso-27001-certification-in-dubai';
    const postData = {
      title: 'ISO 27001 Certification in Dubai: Your Complete Guide to Getting Audit-Ready',
      content: blogContent,
      excerpt: 'ISO 27001 certification in Dubai. Gap assessment, ISMS build & audit readiness support.',
      category: 'Cybersecurity',
      seoTitle: 'ISO 27001 Certification in Dubai | Mints Global',
      seoDescription: 'ISO 27001 certification in Dubai. Gap assessment, ISMS build & audit readiness support. Free consultation.',
      slug: slug,
      tags: ['iso-27001', 'cybersecurity', 'dubai', 'compliance'],
      image: '/images/iso-27001-certification-in-dubai.webp',
      imageAlt: 'ISO 27001 certification consultants in Dubai',
      createdAt: new Date(),
      updatedAt: new Date(),
      readTime: '4 min read',
      author: 'Mints Global'
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
