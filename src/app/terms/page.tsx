import FadeIn from "@/components/ui/FadeIn";
import Link from "next/link";

export const metadata = {
  title: "Website Terms of Use | Green Energy Solutions",
  description: "Terms of Use governing the website and digital services of Green Energy Solutions in Ananthapur, Andhra Pradesh.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsOfServicePage() {
  return (
    <div className="bg-white py-20 sm:py-28 min-h-screen">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <FadeIn direction="up">
          <div className="border-b border-gray-200 pb-8 mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">Legal & Compliance</span>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-brand-text mt-2">
              Website Terms of Use
            </h1>
            <p className="mt-3 text-sm text-gray-500">
              <strong>Last Updated:</strong> October 2026 | Green Energy Solutions
            </p>
          </div>
        </FadeIn>

        <FadeIn direction="up" delay={0.1}>
          <div className="prose prose-lg text-gray-700 max-w-none space-y-8 leading-relaxed text-sm sm:text-base">
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-brand-text mb-3">1. Agreement to Terms</h2>
              <p>
                These Terms of Use (&ldquo;Terms&rdquo;) constitute a legally binding agreement between you and <strong>Green Energy Solutions</strong> (&ldquo;Company&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;), governing your access to and use of <strong>https://www.greenenergysolutions.energy/</strong> and any associated inquiry forms, consultation modules, and communication channels.
              </p>
              <p className="mt-2">
                By accessing our website, you confirm that you have read, understood, and agreed to be bound by these Terms. If you do not agree with all of these Terms, you must immediately discontinue use of the website.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-brand-text mb-3">2. Nature of the Website</h2>
              <p>
                This website is an informational business portfolio and lead-generation portal designed to introduce our solar EPC capabilities, display past installation case studies, and allow prospective residential, commercial, industrial, and institutional clients to request technical consultations.
              </p>
              <p className="mt-2">
                <strong>No Online Contracts or Purchases:</strong> Submitting an enquiry or consultation form on this website does not constitute a completed commercial contract, purchase order, or guarantee of project acceptance. All commercial commitments require a formal written contract executed following a site survey.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-brand-text mb-3">3. Intellectual Property Rights</h2>
              <p>
                All content published on this website—including website layout, text, graphics, logos, brand emblems, photographic case studies, diagrams, and underlying source code—is the property of Green Energy Solutions or its content suppliers and is protected by Indian and international copyright, trademark, and intellectual property laws.
              </p>
              <p className="mt-2">
                You may not copy, reproduce, scrape, mirror, or republish any part of this website for commercial purposes without our express prior written authorization.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-brand-text mb-3">4. Permitted & Acceptable Use</h2>
              <p>When using our website, you agree not to:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1.5">
                <li>Submit false, fraudulent, automated, or misleading inquiries through our consultation or contact forms.</li>
                <li>Attempt to gain unauthorized access to our administrative CMS portal (<code>/admin</code>), backend databases, or hosting server nodes.</li>
                <li>Transmit viruses, malware, trojans, or malicious scripts.</li>
                <li>Use web scrapers, spiders, or automated extraction tools that impair website performance or compromise data security.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-brand-text mb-3">5. Technical Estimates & Solar Disclaimer</h2>
              <p>
                All solar energy calculations, estimated annual savings, system sizing recommendations, and payback projections presented on this website are indicative estimates. As detailed in our <Link href="/disclaimer" className="text-primary underline font-medium">Solar Performance Disclaimer</Link>, all estimates require physical on-site audit verification.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-brand-text mb-3">6. External Links & Third-Party Platforms</h2>
              <p>
                Our website includes outbound links to third-party services for user convenience (such as Google Maps for directions and WhatsApp for direct messaging). We have no control over the content, terms, or privacy practices of these third-party platforms and accept no responsibility for them.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-brand-text mb-3">7. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by applicable law, Green Energy Solutions and its representatives shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from your use of or inability to access this website, including errors or delays in communication.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-brand-text mb-3">8. Governing Law & Jurisdiction</h2>
              <p>
                These Terms of Use are governed by and construed in accordance with the substantive laws of India. You irrevocably agree that the courts situated in <strong>Ananthapur, Andhra Pradesh, India</strong> shall have exclusive jurisdiction to settle any dispute or claim arising out of or in connection with these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-brand-text mb-3">9. Contact & Inquiries</h2>
              <p>
                If you have questions regarding these Terms of Use, please contact us:
              </p>
              <div className="mt-3 p-4 bg-gray-50 rounded-xl border border-gray-200 text-xs sm:text-sm">
                <p><strong>Green Energy Solutions</strong></p>
                <p>#5-85-1, Opp. T.V. Tower, Siva Sai Nagar, Ananthapur – 515 002, Andhra Pradesh, India</p>
                <p>Email: <a href="mailto:greenenergysolutions78@gmail.com" className="text-primary hover:underline">greenenergysolutions78@gmail.com</a> | Phone: +91 92814 87878</p>
              </div>
            </section>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
