import Link from "next/link";
import { Plus, Trash2 } from "lucide-react";
import connectToDatabase from "@/lib/mongodb";
import Testimonial from "@/models/Testimonial";
import { deleteTestimonial } from "@/app/actions/adminActions";

export const metadata = {
  title: "Testimonials | Admin Dashboard",
};

export default async function TestimonialsAdminPage() {
  await connectToDatabase();
  const testimonials = await Testimonial.find().sort({ createdAt: -1 });

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-brand-text">Testimonials</h2>
        <Link href="/admin/testimonials/new" className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark transition text-sm font-medium">
          <Plus className="h-4 w-4" /> Add Testimonial
        </Link>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        {testimonials.length > 0 ? (
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Client Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Designation</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {testimonials.map((testimonial) => (
                <tr key={testimonial._id.toString()}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-brand-text">{testimonial.clientName}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{testimonial.designation}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 text-xs font-semibold leading-5 rounded-full ${testimonial.published ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                      {testimonial.published ? "Published" : "Draft"}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <form action={deleteTestimonial.bind(null, testimonial._id.toString())} className="inline-block">
                      <button type="submit" className="text-red-600 hover:text-red-900 ml-4 flex items-center gap-1" onClick={(e) => {
                        if(!confirm('Are you sure you want to delete this testimonial?')) e.preventDefault();
                      }}>
                        <Trash2 className="h-4 w-4" /> Delete
                      </button>
                    </form>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="p-8 text-center text-gray-500">
            No testimonials found. Add your first testimonial to get started.
          </div>
        )}
      </div>
    </div>
  );
}
