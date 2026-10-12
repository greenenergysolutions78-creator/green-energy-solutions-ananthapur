import FadeIn from "@/components/ui/FadeIn";
import Link from "next/link";
import { Building2, MapPin, Phone, Mail, Globe, Shield } from "lucide-react";

export const metadata = {
  title: "Company Information & Legal Notice | Green Energy Solutions",
  description: "Official Company Information, Registered Office Address, and Legal Notice for Green Energy Solutions in Ananthapur, Andhra Pradesh.",
  alternates: {
    canonical: "/legal-notice",
  },
};

export default function LegalNoticePage() {
  return (
    <div className="bg-white py-20 sm:py-28 min-h-screen">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <FadeIn direction="up">
          <div className="border-b border-gray-200 pb-8 mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">Company Identification</span>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-brand-text mt-2">
              Legal Notice & Company Information
            </h1>
            <p className="mt-3 text-sm text-gray-500">
              Information provided in accordance with applicable Indian commercial laws and international website disclosure standards.
            </p>
          </div>
        </FadeIn>

        <FadeIn direction="up" delay={0.1}>
          <div className="space-y-8 text-sm sm:text-base text-gray-700 leading-relaxed">
            
            {/* Entity Overview Card */}
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 sm:p-8 space-y-4">
              <h2 className="text-lg sm:text-xl font-bold text-brand-text flex items-center gap-2">
                <Building2 className="h-5 w-5 text-primary" />
                Business Entity Overview
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm pt-2">
                <div>
                  <p className="font-semibold text-gray-500">Business Name:</p>
                  <p className="font-bold text-brand-text text-base">Green Energy Solutions</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-500">Year Established:</p>
                  <p className="font-bold text-brand-text text-base">2016</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-500">Industry / Sector:</p>
                  <p className="text-brand-text">Solar EPC (Engineering, Procurement, Construction) & Clean Energy</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-500">Primary Service Area:</p>
                  <p className="text-brand-text">Ananthapur, Rayalaseema Region, Andhra Pradesh, and National Projects</p>
                </div>
              </div>
            </div>

            {/* Offices & Contact Information */}
            <div className="rounded-2xl border border-gray-200 p-6 sm:p-8 space-y-6">
              <h2 className="text-lg sm:text-xl font-bold text-brand-text">Registered Office & Contact Coordinates</h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs sm:text-sm">
                <div className="p-4 rounded-xl bg-gray-50 border border-gray-100 space-y-2">
                  <p className="font-bold text-brand-text flex items-center gap-1.5 text-sm">
                    <MapPin className="h-4 w-4 text-accent" />
                    Main Corporate Office
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    #5-85-1, Opp. T.V. Tower,<br />
                    Siva Sai Nagar, Ananthapur – 515 002,<br />
                    Andhra Pradesh, India
                  </p>
                  <p className="text-gray-600 pt-1">
                    <strong>Direct Phone:</strong> <a href="tel:+919281487878" className="text-primary hover:underline font-semibold">+91 92814 87878</a>
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-gray-50 border border-gray-100 space-y-2">
                  <p className="font-bold text-brand-text flex items-center gap-1.5 text-sm">
                    <MapPin className="h-4 w-4 text-accent" />
                    Branch Office
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    #28-5-134-1, Housing Board Main Road,<br />
                    Beside Rayalaseema Hospital, Revenue Ward 28,<br />
                    Ananthapur – 515 001, Andhra Pradesh, India
                  </p>
                  <p className="text-gray-600 pt-1">
                    <strong>Branch Phone:</strong> <a href="tel:+919347827979" className="text-primary hover:underline font-semibold">+91 93478 27979</a>
                  </p>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-6 text-xs sm:text-sm border-t border-gray-100">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-primary" />
                  <span><strong>Official Email:</strong> <a href="mailto:greenenergysolutions78@gmail.com" className="text-primary hover:underline">greenenergysolutions78@gmail.com</a></span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4 text-primary" />
                  <span><strong>Official Web Portal:</strong> https://www.greenenergysolutions.energy/</span>
                </div>
              </div>
            </div>

            {/* Scope of Operations & Engineering Supply */}
            <div className="rounded-2xl border border-gray-200 p-6 sm:p-8 space-y-4">
              <h2 className="text-lg sm:text-xl font-bold text-brand-text flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                Operational Scope & Equipment Sourcing
              </h2>
              <p>
                Green Energy Solutions provides full-lifecycle solar EPC services including site feasibility studies, shadow analysis, CAD system engineering, structural installation, net-metering liaison with power distribution corporations (AP Discom / APSPDCL), and preventive maintenance programs.
              </p>
              <p>
                Solar modules and balance of system components are procured exclusively from verified Tier-1 manufacturing leaders, including <strong>Waaree Energies</strong>, ensuring all projects conform to Bureau of Indian Standards (BIS) and Ministry of New and Renewable Energy (MNRE) criteria.
              </p>
            </div>

            {/* Dispute Resolution & Jurisdiction */}
            <div className="rounded-2xl border border-gray-200 p-6 sm:p-8 space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-brand-text">Governing Law & Legal Jurisdiction</h2>
              <p className="text-xs sm:text-sm text-gray-600">
                All agreements, commercial proposals, website usage, and legal relationships involving Green Energy Solutions are governed exclusively by the laws of India. Any disputes arising out of website usage or pre-contractual negotiations shall be subject to the exclusive jurisdiction of the competent courts in <strong>Ananthapur, Andhra Pradesh, India</strong>.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
