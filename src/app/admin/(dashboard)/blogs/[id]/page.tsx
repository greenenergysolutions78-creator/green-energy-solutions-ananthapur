import { updateBlog } from "@/app/actions/adminActions";
import SubmitButton from "@/components/ui/SubmitButton";
import connectToDatabase from "@/lib/mongodb";
import Blog from "@/models/Blog";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Edit Blog Post | Admin Dashboard",
};

export default async function EditBlogPage({ params }: { params: { id: string } }) {
  await connectToDatabase();
  const blog = await Blog.findById(params.id);
  if (!blog) return notFound();

  // We wrap the Server Action to inject the ID
  const updateBlogWithId = updateBlog.bind(null, blog._id.toString());

  return (
    <div>
      <h2 className="text-2xl font-bold text-brand-text mb-6">Edit Blog Post</h2>
      
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
        <form action={updateBlogWithId} className="space-y-6">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-brand-text">Title</label>
              <input type="text" name="title" defaultValue={blog.title} className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-primary focus:ring-primary sm:text-sm" required />
            </div>

            <div>
              <label className="block text-sm font-medium text-brand-text">Slug</label>
              <input type="text" name="slug" defaultValue={blog.slug} className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-primary focus:ring-primary sm:text-sm" required />
            </div>

            <div>
              <label className="block text-sm font-medium text-brand-text">Image URL</label>
              <input type="url" name="image" defaultValue={blog.image} className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-primary focus:ring-primary sm:text-sm" required />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-brand-text">Excerpt</label>
              <textarea name="excerpt" defaultValue={blog.excerpt} rows={2} className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-primary focus:ring-primary sm:text-sm" required />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-brand-text">Content (Markdown/HTML)</label>
              <textarea name="content" defaultValue={blog.content} rows={10} className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-primary focus:ring-primary sm:text-sm" required />
            </div>

            <div>
              <label className="block text-sm font-medium text-brand-text">Author</label>
              <input type="text" name="author" defaultValue={blog.author} className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-primary focus:ring-primary sm:text-sm" required />
            </div>

            <div className="flex items-center">
              <input type="checkbox" name="published" id="published" defaultChecked={blog.published} className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" />
              <label htmlFor="published" className="ml-2 block text-sm text-gray-900">Published</label>
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
