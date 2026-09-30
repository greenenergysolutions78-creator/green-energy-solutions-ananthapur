import connectToDatabase from "@/lib/mongodb";
import Faq from "@/models/Faq";
import { createFaq } from "@/app/actions/adminActions";
import SubmitButton from "@/components/ui/SubmitButton";
import { Trash2 } from "lucide-react";

export const metadata = {
  title: "FAQs | Admin Dashboard",
};

export default async function FaqsPage() {
  await connectToDatabase();
  const faqs = await Faq.find().sort({ order: 1, createdAt: -1 });

  return (
    <div>
      <h2 className="text-2xl font-bold text-brand-text mb-6">Manage FAQs</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Create Form */}
        <div className="lg:col-span-1">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold text-brand-text mb-4">Add New FAQ</h3>
            <form action={createFaq} className="space-y-4">
              
              <div>
                <label className="block text-sm font-medium text-brand-text">Question</label>
                <input type="text" name="question" className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-primary focus:ring-primary sm:text-sm" required />
              </div>

              <div>
                <label className="block text-sm font-medium text-brand-text">Answer</label>
                <textarea name="answer" rows={4} className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-primary focus:ring-primary sm:text-sm" required />
              </div>

              <div>
                <label className="block text-sm font-medium text-brand-text">Category</label>
                <input type="text" name="category" defaultValue="General" className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-primary focus:ring-primary sm:text-sm" required />
              </div>

              <div>
                <label className="block text-sm font-medium text-brand-text">Order (1, 2, 3...)</label>
                <input type="number" name="order" defaultValue={0} className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-primary focus:ring-primary sm:text-sm" required />
              </div>

              <div className="flex items-center">
                <input type="checkbox" name="published" id="published" defaultChecked className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" />
                <label htmlFor="published" className="ml-2 block text-sm text-gray-900">Published</label>
              </div>

              <div className="pt-2">
                <SubmitButton title="Add FAQ" loadingTitle="Adding..." />
              </div>
            </form>
          </div>
        </div>

        {/* FAQ List */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6 border-b border-gray-100">
              <h3 className="text-lg font-semibold text-brand-text">Existing FAQs</h3>
            </div>
            
            <div className="divide-y divide-gray-100">
              {faqs.length === 0 ? (
                <div className="p-6 text-center text-gray-500 text-sm">
                  No FAQs found. Add your first FAQ.
                </div>
              ) : (
                faqs.map((faq) => (
                  <div key={faq._id.toString()} className="p-6 hover:bg-gray-50 transition flex justify-between items-start gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded-full">{faq.category}</span>
                        {!faq.published && (
                          <span className="bg-amber-100 text-amber-800 text-xs px-2 py-0.5 rounded-full">Draft</span>
                        )}
                        <span className="text-xs text-gray-400">Order: {faq.order}</span>
                      </div>
                      <h4 className="font-semibold text-brand-text mb-2">{faq.question}</h4>
                      <p className="text-sm text-gray-600">{faq.answer}</p>
                    </div>
                    
                    <form action={async () => {
                      "use server";
                      const { deleteFaq } = await import("@/app/actions/adminActions");
                      await deleteFaq(faq._id.toString());
                    }}>
                      <button type="submit" className="text-red-500 hover:text-red-700 p-2">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </form>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}
