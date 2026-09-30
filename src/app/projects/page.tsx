import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin } from "lucide-react";
import connectToDatabase from "@/lib/mongodb";
import Project from "@/models/Project";
import FadeIn from "@/components/ui/FadeIn";

export const metadata = {
  title: "Solar Projects Portfolio | Green Energy Solutions",
  description: "View our portfolio of successful solar installations across various industries in Ananthapur and beyond.",
};

export const dynamic = 'force-dynamic';

export default async function ProjectsPage() {
  await connectToDatabase();
  
  // Fetch projects from MongoDB
  let projects = await Project.find().sort({ createdAt: -1 }).lean();

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <section className="bg-primary-dark py-24 sm:py-32 text-center text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn direction="up">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl font-sans">
              Our Project Portfolio
            </h1>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-200">
              A showcase of our engineering capabilities and successful solar installations across various sectors.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project: any, index: number) => (
              <FadeIn key={project.slug} direction="up" delay={(index % 3) * 0.1}>
                <div className="flex h-full flex-col bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition">
                  <div className="relative h-48 bg-gray-200 overflow-hidden">
                    <Image src={project.image} alt={project.title} fill className="object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-2 text-xs font-semibold text-accent mb-3 uppercase tracking-wider">
                      <span>{project.industry}</span>
                      <span>&bull;</span>
                      <span>{project.type}</span>
                    </div>
                    <h3 className="text-xl font-bold text-brand-text mb-2">{project.title}</h3>
                    <div className="flex items-center gap-1 text-sm text-muted mb-4">
                      <MapPin className="h-4 w-4" />
                      {project.location}
                    </div>
                    
                    <div className="mt-auto pt-6 flex items-center justify-between border-t border-gray-100">
                      <div className="text-sm">
                        <span className="text-muted block">Capacity</span>
                        <span className="font-semibold text-brand-text">{project.capacity}</span>
                      </div>
                      <div className="text-sm">
                        <span className="text-muted block">Year</span>
                        <span className="font-semibold text-brand-text">{project.year}</span>
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <Link href={`/projects/${project.slug}`} className="block w-full text-center py-2 text-sm font-semibold text-primary bg-primary/10 hover:bg-primary hover:text-white transition rounded-md">
                        View Project Details
                      </Link>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
