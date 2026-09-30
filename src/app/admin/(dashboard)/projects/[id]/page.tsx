import { updateProject } from "@/app/actions/adminActions";
import SubmitButton from "@/components/ui/SubmitButton";
import connectToDatabase from "@/lib/mongodb";
import Project from "@/models/Project";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Edit Project | Admin Dashboard",
};

export default async function EditProjectPage({ params }: { params: { id: string } }) {
  await connectToDatabase();
  const project = await Project.findById(params.id);
  if (!project) return notFound();

  // We wrap the Server Action to inject the ID
  const updateProjectWithId = updateProject.bind(null, project._id.toString());

  return (
    <div>
      <h2 className="text-2xl font-bold text-brand-text mb-6">Edit Project</h2>
      
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
        <form action={updateProjectWithId} className="space-y-6">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-brand-text">Project Title</label>
              <input type="text" name="title" defaultValue={project.title} className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-primary focus:ring-primary sm:text-sm" required />
            </div>

            <div>
              <label className="block text-sm font-medium text-brand-text">Slug</label>
              <input type="text" name="slug" defaultValue={project.slug} className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-primary focus:ring-primary sm:text-sm" required />
            </div>

            <div>
              <label className="block text-sm font-medium text-brand-text">Image URL</label>
              <input type="url" name="image" defaultValue={project.image} className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-primary focus:ring-primary sm:text-sm" required />
            </div>

            <div>
              <label className="block text-sm font-medium text-brand-text">Type (e.g. Rooftop Solar)</label>
              <input type="text" name="type" defaultValue={project.type} className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-primary focus:ring-primary sm:text-sm" required />
            </div>

            <div>
              <label className="block text-sm font-medium text-brand-text">Industry (e.g. Commercial)</label>
              <input type="text" name="industry" defaultValue={project.industry} className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-primary focus:ring-primary sm:text-sm" required />
            </div>

            <div>
              <label className="block text-sm font-medium text-brand-text">Capacity (e.g. 500 kWp)</label>
              <input type="text" name="capacity" defaultValue={project.capacity} className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-primary focus:ring-primary sm:text-sm" required />
            </div>

            <div>
              <label className="block text-sm font-medium text-brand-text">Location</label>
              <input type="text" name="location" defaultValue={project.location} className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-primary focus:ring-primary sm:text-sm" required />
            </div>

            <div>
              <label className="block text-sm font-medium text-brand-text">Completion Year</label>
              <input type="text" name="year" defaultValue={project.year} className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-primary focus:ring-primary sm:text-sm" required />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-brand-text">Description</label>
              <textarea name="description" defaultValue={project.description} rows={4} className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-primary focus:ring-primary sm:text-sm" />
            </div>
          </div>

          <div className="pt-4 border-t border-gray-100 flex justify-end">
            <SubmitButton title="Save Changes" loadingTitle="Saving..." />
          </div>
        </form>
      </div>
    </div>
  );
}
