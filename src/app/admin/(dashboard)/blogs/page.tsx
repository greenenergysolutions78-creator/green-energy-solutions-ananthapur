import connectToDatabase from "@/lib/mongodb";
import Blog from "@/models/Blog";
import Image from "next/image";
import Link from "next/link";
import { Plus, Edit, Trash2 } from "lucide-react";

export const metadata = {
  title: "Blogs | Admin Dashboard",
};

export default async function BlogsPage() {
  await connectToDatabase();
  const blogs = await Blog.find().sort({ createdAt: -1 });

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <h2 className="text-2xl font-bold text-brand-text">Manage Blogs</h2>
        <Link 
          href="/admin/blogs/new" 
          className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-md font-semibold text-sm hover:bg-primary-dark transition"
        >
          <Plus className="h-4 w-4" /> Create New Post
        </Link>
      </div>
      
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Post</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Author</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-4 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {blogs.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-6 py-8 text-center text-gray-500 text-sm">
                    No blog posts found. Create your first post!
                  </td>
                </tr>
              ) : (
                blogs.map((blog) => (
                  <tr key={blog._id.toString()} className="hover:bg-gray-50 transition cursor-pointer">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 relative rounded-md overflow-hidden bg-gray-100 flex-shrink-0">
                          {blog.image ? (
                            <Image src={blog.image} alt={blog.title} fill className="object-cover" />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-gray-400 text-xs">No img</div>
                          )}
                        </div>
                        <div>
                          <div className="text-sm font-medium text-brand-text">{blog.title}</div>
                          <div className="text-xs text-gray-500">/{blog.slug}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {blog.author}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        blog.published ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                      }`}>
                        {blog.published ? 'Published' : 'Draft'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(blog.createdAt).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex justify-end gap-3">
                        <Link href={`/admin/blogs/${blog._id}`} className="text-primary hover:text-primary-dark">
                          <Edit className="h-4 w-4" />
                        </Link>
                        {/* We use a form to handle deletion safely with server actions */}
                        <form action={async () => {
                          "use server";
                          const { deleteBlog } = await import("@/app/actions/adminActions");
                          await deleteBlog(blog._id.toString());
                        }}>
                          <button type="submit" className="text-red-500 hover:text-red-700">
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </form>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
