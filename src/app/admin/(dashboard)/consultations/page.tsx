import connectToDatabase from "@/lib/mongodb";
import Enquiry from "@/models/Enquiry";

export const metadata = {
  title: "Consultations | Admin Dashboard",
};

export default async function ConsultationsPage() {
  await connectToDatabase();
  const enquiries = await Enquiry.find({ enquiryType: "Consultation" }).sort({ createdAt: -1 });

  return (
    <div>
      <h2 className="text-2xl font-bold text-brand-text mb-6">Manage Consultations</h2>
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Project</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {enquiries.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-6 py-8 text-center text-gray-500 text-sm">
                    No consultations found.
                  </td>
                </tr>
              ) : (
                enquiries.map((enq) => (
                  <tr key={enq._id.toString()} className="hover:bg-gray-50 transition">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(enq.createdAt).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-brand-text">{enq.fullName}</div>
                      <div className="text-sm text-gray-500">{enq.phone}</div>
                      <div className="text-sm text-gray-500">{enq.email}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-brand-text">{enq.projectType}</div>
                      <div className="text-xs text-gray-500 mt-1">{enq.capacity || "N/A"}</div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {enq.location}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        enq.status === 'New'
                          ? 'bg-amber-100 text-amber-800' 
                          : 'bg-green-100 text-green-800'
                      }`}>
                        {enq.status || 'New'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex justify-end gap-3">
                        {enq.status === 'New' && (
                          <form action={async () => {
                            "use server";
                            const { updateEnquiryStatus } = await import("@/app/actions/adminActions");
                            await updateEnquiryStatus(enq._id.toString(), "Contacted");
                          }}>
                            <button type="submit" className="text-primary hover:text-primary-dark">
                              Mark Contacted
                            </button>
                          </form>
                        )}
                        <form action={async () => {
                          "use server";
                          const { deleteEnquiry } = await import("@/app/actions/adminActions");
                          await deleteEnquiry(enq._id.toString());
                        }}>
                          <button type="submit" className="text-red-500 hover:text-red-700">
                            Delete
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
