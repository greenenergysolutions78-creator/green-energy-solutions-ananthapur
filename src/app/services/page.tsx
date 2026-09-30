import Link from "next/link";
import { Settings, Hammer, PenTool, BarChart3, ShieldCheck, Wrench, SearchCode } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";

export const metadata = {
  title: "End-to-End Solar Services | Green Energy Solutions",
  description: "Comprehensive EPC solar services including consulting, system design, installation, maintenance, and net metering support.",
};

const services = [
  {
    name: "Solar Consulting",
    description: "Expert project consultation, site feasibility analysis, requirements assessment and customized solution planning.",
    icon: SearchCode,
  },
  {
    name: "System Design",
    description: "Customized, high-efficiency solar system engineering and design based on precise project requirements.",
    icon: PenTool,
  },
  {
    name: "EPC Services",
    description: "Complete Engineering, Procurement, and Construction services managing the entire lifecycle of your solar project.",
    icon: Settings,
  },
  {
    name: "Installation",
    description: "Professional solar system installation and project execution by our certified engineering team.",
    icon: Hammer,
  },
  {
    name: "Net Metering Services",
    description: "End-to-end support for navigating applicable local net-metering regulations, approvals, and grid connection processes.",
    icon: BarChart3,
  },
  {
    name: "Maintenance",
    description: "Preventive and corrective maintenance services to ensure your solar plant operates at peak efficiency.",
    icon: Wrench,
  },
  {
    name: "Technical Support",
    description: "Rapid-response technical assistance and troubleshooting for all installed solar energy systems.",
    icon: ShieldCheck,
  },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <section className="bg-primary-dark py-24 sm:py-32 text-center text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn direction="up">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl font-sans">
              End-to-End Solar Services
            </h1>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-200">
              From initial consultation to long-term asset management, we handle every step of your transition to solar energy.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <FadeIn key={service.name} direction="up" delay={(index % 3) * 0.1}>
                <div className="h-full bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
                  <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary-light">
                    <service.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-semibold text-brand-text mb-3">{service.name}</h3>
                  <p className="text-muted leading-7">{service.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
