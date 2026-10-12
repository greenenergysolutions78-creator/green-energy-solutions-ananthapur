import FadeIn from "@/components/ui/FadeIn";
import Link from "next/link";
import { AlertTriangle, FileText, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Solar Performance & Technical Disclaimer | Green Energy Solutions",
  description: "Solar Engineering, Generation Estimates, and Subsidy Disclaimer for Green Energy Solutions.",
  alternates: {
    canonical: "/disclaimer",
  },
};

export default function DisclaimerPage() {
  return (
    <div className="bg-white py-20 sm:py-28 min-h-screen">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <FadeIn direction="up">
          <div className="border-b border-gray-200 pb-8 mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-accent">Technical & Legal Notice</span>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-brand-text mt-2">
              Solar Performance & Information Disclaimer
            </h1>
            <p className="mt-3 text-sm text-gray-500">
              <strong>Last Updated:</strong> October 2026 | Green Energy Solutions
            </p>
          </div>
        </FadeIn>

        <FadeIn direction="up" delay={0.1}>
          <div className="prose prose-lg text-gray-700 max-w-none space-y-8 leading-relaxed text-sm sm:text-base">
            <div className="p-4 sm:p-5 rounded-2xl bg-amber-50 border border-amber-200 flex items-start gap-3.5">
              <AlertTriangle className="h-6 w-6 text-amber-600 shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm text-amber-900 leading-relaxed">
                <strong>Important Notice:</strong> Information on this website regarding solar system generation, bill savings, return on investment (ROI), payback periods, and government subsidies is provided strictly for preliminary informational and illustrative purposes. It does not constitute a guaranteed financial return or engineering performance warranty until verified by an on-site technical audit and documented in a formal written contract.
              </div>
            </div>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-brand-text mb-3">1. Solar Generation & Yield Estimates</h2>
              <p>
                Estimated power generation (kilowatt-hours / kWh) and system sizing models mentioned across our web pages, case studies, or consultations are derived from standard test conditions (STC) and typical regional solar insolation data for Andhra Pradesh.
              </p>
              <p className="mt-2">
                Actual solar power generation depends on numerous site-specific variables that cannot be evaluated purely through an online form, including:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1.5">
                <li>Rooftop tilt angle, orientation (azimuth), and shading from adjacent buildings or trees.</li>
                <li>Micro-climatic conditions, seasonal cloud cover, atmospheric dust, and ambient operating temperatures.</li>
                <li>Grid uptime and grid frequency stability (for on-grid systems requiring reference voltage).</li>
                <li>Regularity of panel cleaning, maintenance, and soiling ratios.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-brand-text mb-3">2. Financial Savings & Payback Projections</h2>
              <p>
                Calculations showing electricity bill reductions, tariff offset percentages, and investment payback schedules are illustrative models based on average commercial, industrial, or residential tariffs at the time of publication.
              </p>
              <p className="mt-2">
                Electricity tariffs, fuel surcharges (FACS), slab rates, and cross-subsidy surcharges are determined independently by distribution companies (e.g. APSPDCL) and the Andhra Pradesh Electricity Regulatory Commission (APERC). Green Energy Solutions makes no warranty that future electricity tariffs will remain static or escalate at modeled rates.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-brand-text mb-3">3. Government Schemes, Subsidies & Net Metering</h2>
              <p>
                Mentions of state or central government programs (such as the <strong>PM Surya Ghar Muft Bijli Yojana</strong>, central financial assistance, or accelerated depreciation benefits) are subject to active government guidelines, budget allocations, scheme availability, and applicant eligibility:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1.5">
                <li>Subsidy disbursement is executed solely by designated government agencies and utility nodal bodies.</li>
                <li>Net metering approvals, bi-directional meter installations, and grid synchronization are governed by local Discom technical feasibility and sanction rules.</li>
                <li>Green Energy Solutions facilitates engineering, liaison, and documentation, but does not guarantee government approval or the timeline of subsidy credit.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-brand-text mb-3">4. Binding Commercial Proposals</h2>
              <p>
                No communication on this website constitutes a formal offer to contract. Final system capacity, equipment bill of materials (BOM), structural engineering design, guaranteed equipment warranties, and fixed commercial pricing are established solely through:
              </p>
              <ol className="list-decimal pl-6 mt-2 space-y-1.5">
                <li>A comprehensive on-site physical survey and shadow analysis.</li>
                <li>A formal, signed engineering EPC contract executed between Green Energy Solutions and the client.</li>
              </ol>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-brand-text mb-3">5. Equipment Warranties</h2>
              <p>
                Product warranties for Tier-1 solar modules (e.g., Waaree Energies), grid-tied inverters, solar water pumps, and balance-of-system (BOS) components are backed directly by their respective original equipment manufacturers (OEMs). Green Energy Solutions provides turnkey EPC installation, liaison, and designated workmanship warranty services as specified in your individual contract.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-brand-text mb-3">6. Questions & Site Assessments</h2>
              <p>
                To request an accurate, site-specific solar feasibility assessment for your facility, please visit our <Link href="/consultation" className="text-primary hover:underline font-semibold">Consultation page</Link> or reach our engineering desk at <a href="mailto:greenenergysolutions78@gmail.com" className="text-primary hover:underline font-semibold">greenenergysolutions78@gmail.com</a>.
              </p>
            </section>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
