import FadeIn from "@/components/ui/FadeIn";
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Green Energy Solutions",
  description: "Global Privacy Policy for Green Energy Solutions outlining compliance with India's DPDP Act, GDPR, UK GDPR, and international data protection standards.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white py-20 sm:py-28 min-h-screen">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <FadeIn direction="up">
          <div className="border-b border-gray-200 pb-8 mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">Legal & Compliance</span>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-brand-text mt-2">
              Privacy Policy
            </h1>
            <p className="mt-3 text-sm text-gray-500">
              <strong>Last Updated & Effective:</strong> October 2026 | Green Energy Solutions
            </p>
          </div>
        </FadeIn>

        <FadeIn direction="up" delay={0.1}>
          <div className="prose prose-lg text-gray-700 max-w-none space-y-8 leading-relaxed text-sm sm:text-base">
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-brand-text mb-3">1. Overview & Data Fiduciary</h2>
              <p>
                <strong>Green Energy Solutions</strong> (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is a solar EPC (Engineering, Procurement, and Construction) and renewable energy services provider headquartered in Ananthapur, Andhra Pradesh, India.
              </p>
              <p className="mt-2">
                This website (<strong>https://www.greenenergysolutions.energy/</strong>) functions primarily as a digital business portfolio and lead-generation portal. We do not conduct online e-commerce transactions or process credit card payments through this website. This Privacy Policy details how we collect, process, store, and protect the personal data of website visitors, potential commercial clients, and consultation applicants worldwide.
              </p>
              <div className="mt-3 p-4 bg-gray-50 rounded-xl border border-gray-200 text-xs sm:text-sm">
                <p><strong>Entity Name:</strong> Green Energy Solutions</p>
                <p><strong>Principal Place of Business:</strong> #5-85-1, Opp. T.V. Tower, Siva Sai Nagar, Ananthapur – 515 002, Andhra Pradesh, India</p>
                <p><strong>Branch Office:</strong> #28-5-134-1, Housing Board Main Road, Beside Rayalaseema Hospital, Revenue Ward 28, Ananthapur – 515 001, Andhra Pradesh, India</p>
                <p><strong>Grievance & Privacy Contact:</strong> greenenergysolutions78@gmail.com | Phone: +91-92814-87878</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-brand-text mb-3">2. Information We Collect</h2>
              <p>We strictly collect personal data necessary to evaluate your solar feasibility and respond to your enquiries:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1.5">
                <li><strong>Direct Enquiry Information:</strong> Full name, business/company name, official email address, mobile/telephone number, project site location (district/state), and specific energy requirements (e.g. system capacity in kW, rooftop type, industry sector).</li>
                <li><strong>Direct Communications:</strong> Notes and correspondence when you contact us via email, phone, or our integrated WhatsApp business channels.</li>
                <li><strong>Device & Interaction Data:</strong> IP address (anonymized where applicable), browser type, device specifications, referring URLs, and user navigation paths collected through automated analytics tools (Google Analytics 4, Microsoft Clarity).</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-brand-text mb-3">3. Purposes & Lawful Bases for Processing</h2>
              <p>We process your personal information under the following legal frameworks:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li><strong>Pre-Contractual Steps & Service Delivery:</strong> Processing your name, contact information, and site specs to calculate solar capacity sizing, schedule site feasibility visits, and deliver customized commercial proposals.</li>
                <li><strong>Legitimate Interests:</strong> Operating and securing our digital platform, preventing fraudulent enquiries, and evaluating aggregate visitor trends to improve our solar educational content.</li>
                <li><strong>Explicit Consent:</strong> Where you provide consent via our consultation and contact forms, or opt-in to optional analytics cookies via our consent manager.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-brand-text mb-3">4. Regional Compliance Disclosures</h2>

              <div className="space-y-4 mt-3">
                <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                  <h3 className="font-bold text-brand-text text-base">A. India: Digital Personal Data Protection Act (DPDP Act 2023 & Phased 2025 Rules)</h3>
                  <p className="mt-1 text-xs sm:text-sm">
                    In compliance with the DPDP Act and notified rules, you have the right to request access to your personal data, seek correction of incomplete or outdated data, withdraw consent, nominate a representative, and access our designated Grievance Redressal Channel. Inquiries submitted through our forms are handled with appropriate organizational and technical safeguards.
                  </p>
                </div>

                <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                  <h3 className="font-bold text-brand-text text-base">B. European Union & United Kingdom (GDPR / UK GDPR)</h3>
                  <p className="mt-1 text-xs sm:text-sm">
                    If you access our site from the EEA or the UK, you hold statutory rights including the right to access, rectify, or erase your data (&ldquo;right to be forgotten&rdquo;), restrict or object to processing, and request data portability. Non-essential cookies and analytics are subject to your prior consent via our Cookie Preferences manager. You also have the right to lodge a complaint with your national supervisory authority.
                  </p>
                </div>

                <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                  <h3 className="font-bold text-brand-text text-base">C. United States (State Privacy Laws including California CCPA/CPRA)</h3>
                  <p className="mt-1 text-xs sm:text-sm">
                    Green Energy Solutions <strong>does not sell or share personal data</strong> for cross-context behavioral advertising. We collect information solely for business communication and customer support purposes.
                  </p>
                </div>

                <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                  <h3 className="font-bold text-brand-text text-base">D. Middle East & International Visitors</h3>
                  <p className="mt-1 text-xs sm:text-sm">
                    For visitors from the UAE, GCC, and other international jurisdictions, data is handled strictly in accordance with cross-border transfer standards and processed solely for requested solar EPC consultations.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-brand-text mb-3">5. Data Sharing & Third-Party Service Providers</h2>
              <p>We do not sell, rent, or trade your personal information. We partner exclusively with enterprise infrastructure providers bound by confidentiality and data processing agreements:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1.5">
                <li><strong>Vercel Inc.:</strong> High-performance serverless website hosting and edge routing.</li>
                <li><strong>MongoDB Atlas:</strong> Encrypted cloud database infrastructure used to store enquiry records.</li>
                <li><strong>Resend Technologies:</strong> Transactional email service used to dispatch consultation confirmations and lead alerts.</li>
                <li><strong>Google LLC (Analytics & Tag Manager):</strong> Aggregated site analytics, subject to your cookie consent.</li>
                <li><strong>Microsoft Corporation (Clarity):</strong> Session analytics and UX heatmaps to optimize website accessibility.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-brand-text mb-3">6. International Data Transfers</h2>
              <p>
                Because our hosting infrastructure (Vercel) and database services (MongoDB Atlas) utilize distributed global cloud nodes, your submitted information may be securely processed on servers located outside your country of residence. All transfers utilize standard contractual clauses, TLS encryption in transit, and AES-256 encryption at rest.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-brand-text mb-3">7. Data Retention & Deletion Policy</h2>
              <p>
                We retain customer enquiry and consultation records only as long as necessary to complete commercial evaluations, fulfill project engineering contracts, or satisfy statutory record-keeping requirements under applicable Indian tax and corporate law. 
              </p>
              <p className="mt-2">
                Unconverted leads and enquiries are routinely archived or deleted after <strong>24 months</strong>. You may request immediate deletion of your enquiry data at any time by emailing us.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-brand-text mb-3">8. Your Rights & How to Contact Us</h2>
              <p>
                To exercise any of your data protection rights, request data deletion, or submit a grievance, please contact our designated Data Protection & Grievance Officer:
              </p>
              <div className="mt-3 p-4 bg-gray-50 rounded-xl border border-gray-200">
                <p className="font-semibold text-brand-text">Green Energy Solutions — Privacy Grievance Channel</p>
                <p className="mt-1">Email: <a href="mailto:greenenergysolutions78@gmail.com" className="text-primary hover:underline">greenenergysolutions78@gmail.com</a></p>
                <p>Phone: <a href="tel:+919281487878" className="text-primary hover:underline">+91 92814 87878</a> / +91 93478 27979</p>
                <p>Address: #5-85-1, Opp. T.V. Tower, Siva Sai Nagar, Ananthapur – 515 002, Andhra Pradesh, India</p>
              </div>
              <p className="mt-3 text-xs text-gray-500">
                We will acknowledge your request within 48 hours and respond substantively in accordance with applicable statutory timelines.
              </p>
            </section>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
