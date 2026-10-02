import Link from "next/link";
import { PenTool, Headphones, Users, BarChart3, Wrench } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";

export const metadata = {
  title: "Our Services | Green Energy Solutions",
  description: "Comprehensive solar services including designing, consulting, support, technical staff, net metering, and maintenance.",
};

const services = [
  {
    name: "Designing & Free Consulting",
    description: "Expert project consultation, site feasibility analysis, and customized, high-efficiency solar system engineering & design.",
    icon: PenTool,
  },
  {
    name: "Sales & Customer Support",
    description: "Dedicated sales assistance and rapid-response customer support for all your solar energy inquiries.",
    icon: Headphones,
  },
  {
    name: "Technical Staff",
    description: "Professional installation and project execution by our certified engineering and technical team.",
    icon: Users,
  },
  {
    name: "Net Metering Services",
    description: "End-to-end support for navigating applicable local net-metering regulations, approvals, and grid connection processes.",
    icon: BarChart3,
  },
  {
    name: "Free Maintenance (On-Grid Solar)",
    description: "Preventive and corrective maintenance services at no extra cost to ensure your on-grid solar plant operates at peak efficiency.",
    icon: Wrench,
  },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <section 
        className="relative bg-cover bg-center bg-no-repeat py-24 sm:py-32 text-center text-white"
        style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1920&q=80")' }}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn direction="up">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl font-sans">
              Our Services
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
