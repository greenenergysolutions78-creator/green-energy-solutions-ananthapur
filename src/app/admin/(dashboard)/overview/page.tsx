import connectToDatabase from "@/lib/mongodb";
import Enquiry from "@/models/Enquiry";
import Project from "@/models/Project";
import { Users, CheckCircle, Clock, FolderKanban } from "lucide-react";

export const metadata = {
  title: "Overview | Admin Dashboard",
};

export default async function OverviewPage() {
  await connectToDatabase();
  
  const totalLeads = await Enquiry.countDocuments();
  const pendingLeads = await Enquiry.countDocuments({ status: "New" });
  const contactedLeads = await Enquiry.countDocuments({ status: "Contacted" });
  const totalProjects = await Project.countDocuments();
  
  const recentEnquiries = await Enquiry.find().sort({ createdAt: -1 }).limit(5);

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-brand-text mb-6">Dashboard Overview</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4">
          <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
            <Users className="h-6 w-6" />
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-500 mb-1">Total Enquiries</h3>
            <p className="text-2xl font-bold text-brand-text">{totalLeads}</p>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4">
          <div className="p-3 bg-amber-50 text-amber-600 rounded-xl">
            <Clock className="h-6 w-6" />
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-500 mb-1">Pending Leads</h3>
            <p className="text-2xl font-bold text-accent">{pendingLeads}</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4">
          <div className="p-3 bg-green-50 text-green-600 rounded-xl">
            <CheckCircle className="h-6 w-6" />
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-500 mb-1">Contacted</h3>
            <p className="text-2xl font-bold text-brand-text">{contactedLeads}</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4">
          <div className="p-3 bg-purple-50 text-purple-600 rounded-xl">
            <FolderKanban className="h-6 w-6" />
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-500 mb-1">Total Projects</h3>
            <p className="text-2xl font-bold text-brand-text">{totalProjects}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-brand-text mb-4">Recent Enquiries</h3>
          {recentEnquiries.length > 0 ? (
            <div className="space-y-4">
              {recentEnquiries.map((enq) => (
                <div key={enq._id.toString()} className="flex items-center justify-between border-b border-gray-50 pb-4 last:border-0 last:pb-0">
                  <div>
                    <p className="font-medium text-brand-text text-sm">{enq.fullName}</p>
                    <p className="text-xs text-muted mt-0.5">{enq.projectType} • {enq.location}</p>
                  </div>
                  <div>
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                      enq.status === 'New' ? 'bg-amber-50 text-amber-700' : 'bg-green-50 text-green-700'
                    }`}>
                      {enq.status || 'New'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm text-gray-500">No recent enquiries.</p>
          )}
        </div>
      </div>
    </div>
  );
}
