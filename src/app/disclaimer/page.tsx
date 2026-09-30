export const metadata = {
  title: "Solar Performance Disclaimer | Green Energy Solutions",
  description: "Solar Performance Disclaimer for Green Energy Solutions.",
};

import FadeIn from "@/components/ui/FadeIn";

export default function DisclaimerPage() {
  return (
    <div className="bg-white py-24 sm:py-32 min-h-screen">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <FadeIn direction="up">
          <h1 className="text-4xl font-bold tracking-tight text-brand-text sm:text-5xl mb-12">
            Solar Performance Disclaimer
          </h1>
        </FadeIn>
        <FadeIn direction="up" delay={0.2}>
          <div className="prose prose-lg text-gray-600 max-w-none">
            <p className="mb-6">
              <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
            </p>
          
          <h2 className="text-2xl font-bold text-brand-text mt-10 mb-4">1. Estimates and Projections</h2>
          <p className="mb-4">
            Solar generation, savings, system performance, ROI, payback periods, and financial outcomes mentioned on this website or in our marketing materials depend on a variety of factors. These include, but are not limited to, site conditions, solar irradiation, system design, equipment specifications, shading, weather conditions, electricity tariffs, operational conditions, and applicable government regulations.
          </p>
          
          <p className="mb-4">
            Any estimates displayed on this website are strictly indicative unless expressly stated otherwise in a formal, written commercial agreement.
          </p>

          <h2 className="text-2xl font-bold text-brand-text mt-10 mb-4">2. Final Specifications</h2>
          <p className="mb-4">
            Final system specifications, pricing, savings estimates, and performance expectations are subject to comprehensive site assessments, engineering analysis, applicable approvals (such as net metering), and the terms of the relevant commercial agreement executed between Green Energy Solutions and the client.
          </p>

          <h2 className="text-2xl font-bold text-brand-text mt-10 mb-4">3. Warranties and Maintenance</h2>
          <p className="mb-4">
            Information regarding warranties, equipment life, and preventive maintenance on this website is provided for general informational purposes. The exact duration, eligible systems, included/excluded services, and conditions will be explicitly defined in your final contract.
          </p>

          <h2 className="text-2xl font-bold text-brand-text mt-10 mb-4">4. Compliance and Certifications</h2>
          <p className="mb-4">
            Mentions of government schemes, subsidies, or associations (such as NREDCAP or BIS) are subject to change based on active government policies. Client eligibility for subsidies must be independently verified at the time of project execution.
          </p>
        </div>
        </FadeIn>
      </div>
    </div>
  );
}
