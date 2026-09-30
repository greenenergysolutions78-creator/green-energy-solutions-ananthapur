"use client";

import { useActionState } from "react";
import { createBlog } from "@/app/actions/adminActions";
import SubmitButton from "@/components/ui/SubmitButton";
import Link from "next/link";

export default function NewBlogPage() {
  const [state, formAction] = useActionState(createBlog, null);

  return (
    <div>
      <h2 className="text-2xl font-bold text-brand-text mb-6">Create New Blog Post</h2>
      
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
        {state?.error && (
          <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-md text-sm border border-red-100">
            {state.error}
          </div>
        )}
        <form action={formAction} className="space-y-6">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-brand-text">Title</label>
              <input type="text" name="title" className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-primary focus:ring-primary sm:text-sm" required />
            </div>

            <div>
              <label className="block text-sm font-medium text-brand-text">Slug</label>
              <input type="text" name="slug" className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-primary focus:ring-primary sm:text-sm" required />
            </div>

            <div>
              <label className="block text-sm font-medium text-brand-text">Image URL</label>
              <input type="url" name="image" className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-primary focus:ring-primary sm:text-sm" required />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-brand-text">Excerpt</label>
              <textarea name="excerpt" rows={2} className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-primary focus:ring-primary sm:text-sm" required />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-brand-text">Content (Markdown/HTML)</label>
              <textarea name="content" rows={10} className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-primary focus:ring-primary sm:text-sm" required />
            </div>

            <div>
              <label className="block text-sm font-medium text-brand-text">Author</label>
              <input type="text" name="author" defaultValue="Admin" className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-primary focus:ring-primary sm:text-sm" required />
            </div>

            <div className="flex items-center">
              <input type="checkbox" name="published" id="published" className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" />
              <label htmlFor="published" className="ml-2 block text-sm text-gray-900">Publish immediately</label>
            </div>
          </div>

          <div className="pt-4 border-t border-gray-100 flex justify-end gap-3">
            <Link href="/admin/blogs" className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
              Cancel
            </Link>
            <SubmitButton title="Create Post" loadingTitle="Creating..." />
          </div>
        </form>
      </div>
    </div>
  );
}
