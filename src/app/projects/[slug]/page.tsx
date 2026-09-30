import connectToDatabase from "@/lib/mongodb";
import Project from "@/models/Project";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin, Bolt, Calendar, Factory, ArrowLeft } from "lucide-react";

export async function generateMetadata({ params }: { params: { slug: string } }) {
  await connectToDatabase();
  const project = await Project.findOne({ slug: params.slug });
  
  if (!project) return { title: "Project Not Found" };
  
  return {
    title: `${project.title} | Projects | Green Energy Solutions`,
    description: project.description || `A ${project.capacity} solar project by Green Energy Solutions in ${project.location}.`,
  };
}

export default async function ProjectDetailPage({ params }: { params: { slug: string } }) {
  await connectToDatabase();
  const project = await Project.findOne({ slug: params.slug });

  if (!project) return notFound();

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation */}
        <div className="mb-8">
          <Link href="/projects" className="inline-flex items-center gap-2 text-gray-500 hover:text-primary transition font-medium text-sm">
            <ArrowLeft className="h-4 w-4" /> Back to all projects
          </Link>
        </div>

        {/* Featured Image Header */}
        <div className="relative w-full aspect-[21/9] rounded-3xl overflow-hidden shadow-lg mb-12">
          {project.image ? (
            <Image 
              src={project.image} 
              alt={project.title} 
              fill 
              className="object-cover" 
              priority
            />
          ) : (
            <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">
              No Featured Image
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end">
            <div className="p-8 md:p-12 text-white w-full">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-primary text-white mb-4">
                {project.type}
              </span>
              <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
                {project.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-sm md:text-base text-gray-200">
                <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4" /> {project.location}</span>
                <span className="hidden md:block text-gray-500">•</span>
                <span className="flex items-center gap-1.5"><Factory className="h-4 w-4" /> {project.industry}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Project Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-brand-text mb-4">Project Overview</h2>
              <div className="prose prose-lg text-gray-600">
                {project.description ? (
                  <p className="whitespace-pre-wrap">{project.description}</p>
                ) : (
                  <p>Detailed overview for this project is currently being updated.</p>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar Specs */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 sticky top-24">
              <h3 className="text-lg font-bold text-brand-text mb-6">Project Specifications</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
                    <Bolt className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">System Capacity</p>
                    <p className="text-lg font-bold text-brand-text">{project.capacity}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
                    <Factory className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Industry</p>
                    <p className="text-lg font-bold text-brand-text">{project.industry}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Location</p>
                    <p className="text-lg font-bold text-brand-text">{project.location}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
                    <Calendar className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Completion Year</p>
                    <p className="text-lg font-bold text-brand-text">{project.year || 'Ongoing'}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-100">
                <p className="text-sm text-gray-600 mb-4">Interested in a similar project for your business?</p>
                <Link href="/consultation" className="block w-full text-center bg-primary text-white py-3 rounded-lg font-bold hover:bg-primary-dark transition">
                  Request a Consultation
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
