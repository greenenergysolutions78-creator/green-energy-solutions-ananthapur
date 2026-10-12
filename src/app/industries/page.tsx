import { 
  Factory, 
  Sprout, 
  Building2, 
  GraduationCap, 
  Stethoscope, 
  Snowflake,
  Droplet,
  Tractor,
  Fuel,
  Wheat,
  Film
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";

export const metadata = {
  title: "Solar Solutions for Industries and Institutions | Green Energy Solutions",
  description: "Custom commercial and industrial solar installations for factories, rice mills, poultry farms, cold storage, hospitals, and educational institutions across Andhra Pradesh.",
  alternates: {
    canonical: "/industries",
  },
};

const industries = [
  { name: "Poultry Farms", icon: Sprout, image: "/images/poultry-farms.png" },
  { name: "Industrial Factories", icon: Factory, image: "/images/industrial-factories.png" },
  { name: "Schools, Colleges", icon: GraduationCap, image: "/images/Schools-colleges.png" },
  { name: "Apartments & Housing Complexes", icon: Building2, image: "/images/apartments-housing-complexes.png" },
  { name: "Cold Storage", icon: Snowflake, image: "/images/cold-storage.png" },
  { name: "Drinking Water Plants", icon: Droplet, image: "/images/drinking-water-plants.png" },
  { name: "Agricultural Water Pumps", icon: Tractor, image: "/images/agricultural-water-pumps.png" },
  { name: "Fuel Stations", icon: Fuel, image: "/images/fuel-stations.png" },
  { name: "Rice Mills", icon: Wheat, image: "/images/rice-mills.png" },
  { name: "Movie Theaters", icon: Film, image: "/images/movie-theaters-solor.png" },
  { name: "Hospitals", icon: Stethoscope, image: "/images/hospitals-solor-installed.png" },
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <FadeIn key={industry.name} direction="up" delay={(index % 4) * 0.1}>
                <div className="flex h-full flex-col overflow-hidden bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-primary-light transition-all duration-300 group">
                  <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                    <Image
                      src={industry.image}
                      alt={industry.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80" />
                    <div className="absolute bottom-3 left-3 p-2 rounded-xl bg-white/90 backdrop-blur-xs text-primary shadow-xs">
                      <industry.icon className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-1 justify-center bg-white">
                    <h3 className="font-semibold text-brand-text group-hover:text-primary transition-colors">
                      {industry.name}
                    </h3>
                  </div>
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
