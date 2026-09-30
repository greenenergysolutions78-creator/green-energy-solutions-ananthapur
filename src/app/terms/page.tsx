export const metadata = {
  title: "Terms of Service | Green Energy Solutions",
  description: "Terms of Service for Green Energy Solutions.",
};

import FadeIn from "@/components/ui/FadeIn";

export default function TermsOfServicePage() {
  return (
    <div className="bg-white py-24 sm:py-32 min-h-screen">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <FadeIn direction="up">
          <h1 className="text-4xl font-bold tracking-tight text-brand-text sm:text-5xl mb-12">
            Terms of Service
          </h1>
        </FadeIn>
        <FadeIn direction="up" delay={0.2}>
          <div className="prose prose-lg text-gray-600 max-w-none">
            <p className="mb-6">
              <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
            </p>
          
          <h2 className="text-2xl font-bold text-brand-text mt-10 mb-4">1. Acceptance of Terms</h2>
          <p className="mb-4">
            By accessing and using the Green Energy Solutions website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by these terms, please do not use our services.
          </p>

          <h2 className="text-2xl font-bold text-brand-text mt-10 mb-4">2. Description of Services & Website Purpose</h2>
          <p className="mb-4">
            This website provides general information about Green Energy Solutions, our portfolio, and our Solar EPC services. The information on this website is provided for general informational purposes and may be updated from time to time.
          </p>

          <h2 className="text-2xl font-bold text-brand-text mt-10 mb-4">3. Accuracy of Information & Solar Estimates</h2>
          <p className="mb-4">
            While we strive to ensure that the information on this website is correct, we do not warrant its absolute completeness or accuracy. Any figures shown regarding estimated savings, estimated generation, ROI, payback periods, system capacity, or annual savings are purely indicative estimates based on assumptions. 
          </p>
          <p className="mb-4">
            <strong>These estimates are not guaranteed outcomes.</strong> Actual quotations, system specifications, and commercial terms will supersede any preliminary website estimates and will be documented in a formal, written commercial agreement following a detailed site survey and technical assessment.
          </p>

          <h2 className="text-2xl font-bold text-brand-text mt-10 mb-4">4. Intellectual Property</h2>
          <p className="mb-4">
            All content included on this site, such as text, graphics, logos, images, and software, is the property of Green Energy Solutions or its content suppliers and protected by intellectual property laws.
          </p>

          <h2 className="text-2xl font-bold text-brand-text mt-10 mb-4">5. Limitation of Liability</h2>
          <p className="mb-4">
            Green Energy Solutions shall not be liable for any special or consequential damages that result from the use of, or the inability to use, the materials on this site or the performance of the products, even if we have been advised of the possibility of such damages.
          </p>

          <h2 className="text-2xl font-bold text-brand-text mt-10 mb-4">6. Governing Law</h2>
          <p className="mb-4">
            These terms and conditions are governed by and construed in accordance with the laws of India and you irrevocably submit to the exclusive jurisdiction of the courts in Ananthapur, Andhra Pradesh.
          </p>

          <h2 className="text-2xl font-bold text-brand-text mt-10 mb-4">7. Contact Information</h2>
          <p className="mb-4">
            For any questions regarding these Terms, please contact us at:
          </p>
          <ul className="list-none mb-6">
            <li><strong>Email:</strong> greenenergysolutions78@gmail.com</li>
            <li><strong>Phone:</strong> 92814 87878</li>
          </ul>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
