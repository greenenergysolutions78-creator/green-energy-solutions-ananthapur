"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useActionState } from "react";
import { createTestimonial } from "@/app/actions/adminActions";
import SubmitButton from "@/components/ui/SubmitButton";

export default function NewTestimonialPage() {
  const [state, formAction] = useActionState(createTestimonial, null);

  return (
    <div>
      <div className="mb-6 flex items-center gap-4">
        <Link href="/admin/testimonials" className="text-gray-500 hover:text-brand-text transition">
          <ArrowLeft className="h-5 w-5" />
        </Link>
        <h2 className="text-2xl font-bold text-brand-text">Add New Testimonial</h2>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 max-w-3xl">
        <form action={formAction} className="space-y-6">
          {state?.error && (
            <div className="p-4 bg-red-50 text-red-700 rounded-md text-sm">
              {state.error}
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-brand-text">Client Name *</label>
            <input type="text" name="clientName" className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-primary focus:ring-primary sm:text-sm" required />
          </div>

          <div>
            <label className="block text-sm font-medium text-brand-text">Designation / Company</label>
            <input type="text" name="designation" className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-primary focus:ring-primary sm:text-sm" required />
          </div>

          <div>
            <label className="block text-sm font-medium text-brand-text">Quote / Testimonial Text *</label>
            <textarea name="quote" rows={4} className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-primary focus:ring-primary sm:text-sm" required></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium text-brand-text">Rating (1-5)</label>
            <input type="number" name="rating" min="1" max="5" defaultValue="5" className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-primary focus:ring-primary sm:text-sm" required />
          </div>

          <div className="flex items-center gap-2">
            <input type="checkbox" name="published" id="published" defaultChecked className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" />
            <label htmlFor="published" className="text-sm text-brand-text">Published (visible on homepage)</label>
          </div>

          <div className="pt-4 border-t border-gray-100 flex gap-4">
            <SubmitButton title="Add Testimonial" loadingTitle="Saving..." />
            <Link href="/admin/testimonials" className="inline-flex justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
