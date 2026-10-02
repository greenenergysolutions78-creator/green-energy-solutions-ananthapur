import { 
  Factory, 
  Sprout, 
  Building2, 
  Zap, 
  GraduationCap, 
  Stethoscope, 
  Store, 
  Snowflake,
  Hammer,
  Droplet,
  Tractor,
  Shirt,
  Fuel,
  Wheat,
  Bed,
  Film
} from "lucide-react";
import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";

export const metadata = {
  title: "Our Expertise | Green Energy Solutions",
  description: "Customized solar solutions for factories, agriculture, schools, hospitals, and commercial real estate.",
};

const industries = [
  { name: "Poultry Farms", icon: Sprout },
  { name: "Industrial Factories", icon: Factory },
  { name: "Schools, Colleges", icon: GraduationCap },
  { name: "Apartments & Housing Complexes", icon: Building2 },
  { name: "Cold Storage", icon: Snowflake },
  { name: "Handicraft Units", icon: Hammer },
  { name: "Drinking Water Plants", icon: Droplet },
  { name: "Agricultural Water Pumps", icon: Tractor },
  { name: "Textile Industries", icon: Shirt },
  { name: "Convention Halls", icon: Store },
  { name: "Fuel Stations", icon: Fuel },
  { name: "Rice Mills", icon: Wheat },
  { name: "Hotels", icon: Bed },
  { name: "Movie Theaters", icon: Film },
  { name: "Hospitals", icon: Stethoscope },
];

export default function IndustriesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <section 
        className="relative bg-cover bg-center bg-no-repeat py-24 sm:py-32 text-center text-white"
        style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?auto=format&fit=crop&w=1920&q=80")' }}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn direction="up">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl font-sans">
              Our Expertise Covers All Sectors
            </h1>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-200">
              Every industry has unique energy consumption patterns. We design bespoke solar systems to match your operational needs and maximize ROI.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <FadeIn key={industry.name} direction="up" delay={(index % 4) * 0.1}>
                <div className="flex h-full flex-col items-center justify-center p-8 text-center bg-gray-50 rounded-2xl border border-gray-100 hover:border-primary-light transition-colors group">
                  <industry.icon className="h-10 w-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold text-brand-text">{industry.name}</h3>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn direction="up" delay={0.2}>
            <div className="mt-16 text-center bg-primary-light/30 rounded-3xl p-10 max-w-3xl mx-auto border border-primary-light">
              <h2 className="text-2xl font-bold text-brand-text mb-4">Don't see your industry?</h2>
              <p className="text-muted mb-8">
                Solar power can benefit almost any organization with significant electricity usage. Contact our engineering team for a customized assessment.
              </p>
              <Link href="/consultation" className="inline-flex rounded-md bg-primary px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary-dark transition">
                Request Industry Assessment
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
