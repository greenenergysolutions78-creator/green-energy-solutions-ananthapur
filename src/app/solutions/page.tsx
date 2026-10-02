import { Building2, Sun, Droplets, CheckCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";

export const metadata = {
  title: "Solar Solutions | Green Energy Solutions",
  description: "Explore our comprehensive solar solutions including Rooftop, Ground Mount, and Floating Solar systems for commercial and industrial applications.",
};

export default function SolutionsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <section 
        className="relative bg-cover bg-center bg-no-repeat py-24 sm:py-32 text-center text-white"
        style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1920&q=80")' }}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn direction="up">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl font-sans">
              Our Solar Solutions
            </h1>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-200">
              Tailored, high-efficiency solar energy systems designed to meet your specific commercial and industrial needs.
            </p>
          </FadeIn>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 space-y-32">
        
        {/* Rooftop Solar */}
        <section id="rooftop" className="scroll-mt-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right">
              <div>
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-primary-light">
                  <Building2 className="h-8 w-8 text-primary" aria-hidden="true" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-brand-text sm:text-4xl mb-6">
                  Rooftop Solar
                </h2>
                <p className="text-lg text-muted mb-6">
                  Transform your unused roof space into a powerful energy-generating asset. Our rooftop solar solutions are meticulously engineered for commercial buildings, industrial factories, educational institutions, and large residential complexes.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex gap-3 text-muted">
                    <CheckCircle className="h-6 w-6 text-accent flex-shrink-0" />
                    <span>Maximize space utility without requiring additional land.</span>
                  </li>
                  <li className="flex gap-3 text-muted">
                    <CheckCircle className="h-6 w-6 text-accent flex-shrink-0" />
                    <span>Significant reduction in monthly electricity expenditures.</span>
                  </li>
                  <li className="flex gap-3 text-muted">
                    <CheckCircle className="h-6 w-6 text-accent flex-shrink-0" />
                    <span>Provide insulation to the roof, keeping the building cooler.</span>
                  </li>
                </ul>
                <Link href="/consultation" className="inline-flex rounded-md bg-primary px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary-dark transition">
                  Request a Rooftop Assessment
                </Link>
              </div>
            </FadeIn>
            <FadeIn direction="left" delay={0.2}>
              <div className="relative rounded-3xl h-[400px] overflow-hidden shadow-lg">
                <Image src="/rooftop_solar.jpg" alt="Rooftop Solar Installation" fill className="object-cover" />
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Ground Mount Solar */}
        <section id="ground-mount" className="scroll-mt-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right">
              <div className="relative order-2 lg:order-1 rounded-3xl h-[400px] overflow-hidden shadow-lg">
                <Image src="/ground_mount_solar.jpg" alt="Ground Mount Solar Installation" fill className="object-cover" />
              </div>
            </FadeIn>
            <FadeIn direction="left" delay={0.2}>
              <div className="order-1 lg:order-2">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-primary-light">
                  <Sun className="h-8 w-8 text-primary" aria-hidden="true" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-brand-text sm:text-4xl mb-6">
                  Ground Mount Solar
                </h2>
                <p className="text-lg text-muted mb-6">
                  Ideal for facilities with high energy demands and available adjacent land. Ground-mounted systems offer flexibility in orientation and tilt to maximize energy generation and ROI.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex gap-3 text-muted">
                    <CheckCircle className="h-6 w-6 text-accent flex-shrink-0" />
                    <span>Perfect orientation for maximum solar yield.</span>
                  </li>
                  <li className="flex gap-3 text-muted">
                    <CheckCircle className="h-6 w-6 text-accent flex-shrink-0" />
                    <span>Easier access for cleaning and maintenance.</span>
                  </li>
                  <li className="flex gap-3 text-muted">
                    <CheckCircle className="h-6 w-6 text-accent flex-shrink-0" />
                    <span>Scalable designs that can expand as your energy needs grow.</span>
                  </li>
                </ul>
                <Link href="/consultation" className="inline-flex rounded-md bg-primary px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary-dark transition">
                  Consult on Ground Mount Systems
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Floating Solar */}
        <section id="floating" className="scroll-mt-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right">
              <div>
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-primary-light">
                  <Droplets className="h-8 w-8 text-primary" aria-hidden="true" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-brand-text sm:text-4xl mb-6">
                  Floating Solar
                </h2>
                <p className="text-lg text-muted mb-6">
                  An innovative solution for water-intensive industries or those with available water bodies. Floating solar panels are installed on pontoons, offering unique environmental and efficiency benefits.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex gap-3 text-muted">
                    <CheckCircle className="h-6 w-6 text-accent flex-shrink-0" />
                    <span>Conserves valuable land resources.</span>
                  </li>
                  <li className="flex gap-3 text-muted">
                    <CheckCircle className="h-6 w-6 text-accent flex-shrink-0" />
                    <span>Reduces water evaporation from reservoirs and ponds.</span>
                  </li>
                  <li className="flex gap-3 text-muted">
                    <CheckCircle className="h-6 w-6 text-accent flex-shrink-0" />
                    <span>Natural cooling effect from water increases panel efficiency.</span>
                  </li>
                </ul>
                <Link href="/consultation" className="inline-flex rounded-md bg-primary px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary-dark transition">
                  Discuss Floating Solar Options
                </Link>
              </div>
            </FadeIn>
            <FadeIn direction="left" delay={0.2}>
              <div className="relative rounded-3xl h-[400px] overflow-hidden shadow-lg">
                <Image src="/hero_solar.jpg" alt="Floating Solar Installation" fill className="object-cover" />
              </div>
            </FadeIn>
          </div>
        </section>

      </div>
    </div>
  );
}
