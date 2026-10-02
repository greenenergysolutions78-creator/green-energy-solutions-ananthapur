import { ShieldCheck, Users, Award, Lightbulb, CheckCircle2 } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";

export const metadata = {
  title: "About Us | Green Energy Solutions",
  description: "Learn about Green Energy Solutions, our mission, core values, and solar EPC capabilities.",
};

const values = [
  {
    name: "Integrity",
    description: "Transparent and responsible business practices in every project we undertake.",
    icon: ShieldCheck,
  },
  {
    name: "Customer First",
    description: "Solutions perfectly aligned with customer requirements and business goals.",
    icon: Users,
  },
  {
    name: "Passion for Excellence",
    description: "Unwavering focus on quality and professional project execution.",
    icon: Award,
  },
  {
    name: "Continuous Innovation",
    description: "Continuous improvement in solar technology and our engineering processes.",
    icon: Lightbulb,
  },
];

const capabilities = [
  "Solar Consulting",
  "Engineering & System Design",
  "Procurement",
  "Installation & Commissioning",
  "Preventive Maintenance",
  "Technical Support",
  "Asset Management",
];

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center bg-no-repeat py-24 sm:py-32 text-center text-white"
        style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1920&q=80")' }}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn direction="up">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl font-sans">
              About Green Energy Solutions
            </h1>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-200">
              Powering Progress with Purpose
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Introduction & Mission */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-16 lg:items-center">
            <FadeIn direction="right">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-brand-text sm:text-4xl">
                  Who We Are
                </h2>
                <p className="mt-6 text-lg leading-8 text-muted">
                  Established in 2016, Green Energy Solutions is a premier Solar EPC (Engineering, Procurement, and Construction) provider based in Ananthapur. We specialize in transforming the way commercial, industrial, and institutional sectors consume energy.
                </p>
                <p className="mt-4 text-lg leading-8 text-muted">
                  As a full-service provider, we offer comprehensive vendor and installation services. To guarantee the highest quality and reliability, we source our supplies directly from <strong>Waaree Energies</strong>—one of the topmost Tier-1 solar manufacturing companies globally. Our commitment goes beyond simply installing solar panels; we are dedicated to building a greener, cleaner, and smarter planet by delivering highly efficient and customized solar energy systems.
                </p>
              </div>
            </FadeIn>
            <FadeIn direction="left" delay={0.2}>
              <div className="bg-gray-50 rounded-2xl p-10 border border-gray-100">
                <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
                <p className="text-xl italic text-brand-text mb-6">
                  "Powering Progress with Purpose"
                </p>
                <p className="text-muted leading-7">
                  We strive to accelerate the transition to sustainable energy by providing innovative, reliable, and cost-effective solar solutions. We believe in empowering businesses to take control of their energy future while protecting our environment for generations to come.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Core Values / Why Choose Us */}
      <section className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-primary">Our Core Values</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-brand-text sm:text-4xl">
              Why Green Energy Solutions?
            </p>
            <p className="mt-6 text-lg leading-8 text-muted">
              We operate on four fundamental principles that guide every decision and project.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
              {values.map((value, index) => (
                <FadeIn key={value.name} direction="up" delay={index * 0.1}>
                  <div className="flex h-full flex-col bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                    <dt className="flex items-center gap-x-3 text-lg font-semibold leading-7 text-brand-text mb-4">
                      <value.icon className="h-6 w-6 flex-none text-accent" aria-hidden="true" />
                      {value.name}
                    </dt>
                    <dd className="flex flex-auto flex-col text-base leading-7 text-muted">
                      <p className="flex-auto">{value.description}</p>
                    </dd>
                  </div>
                </FadeIn>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-brand-text sm:text-4xl">
              Our Capabilities
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted">
              We offer end-to-end solar solutions, managing your project from concept to long-term operation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {capabilities.map((capability, index) => (
              <div key={index} className="flex items-center gap-3 p-4 rounded-xl bg-primary-light/50 border border-primary-light">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="font-semibold text-brand-text">{capability}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
