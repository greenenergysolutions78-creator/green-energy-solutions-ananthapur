import connectToDatabase from "@/lib/mongodb";
import Settings from "@/models/Settings";
import { updateSettings } from "@/app/actions/adminActions";
import SubmitButton from "@/components/ui/SubmitButton";

export const metadata = {
  title: "Site Settings | Admin Dashboard",
};

export default async function SettingsPage() {
  await connectToDatabase();
  const settings = await Settings.findOne().lean();
  
  const config = settings || {
    companyName: "Green Energy Solutions",
    contactEmail: "info@greenenergy.com",
    contactPhone: "+91 0000000000",
    address: "Ananthapur, Andhra Pradesh",
    metaDescription: "End-to-end solar solutions for businesses, industries and institutions.",
    facebookUrl: "",
    twitterUrl: "",
    linkedinUrl: "",
    instagramUrl: "",
    statsProjectsCompleted: "100+",
    statsMwInstalled: "50+",
    statsCo2Offset: "25,000",
    statsHappyClients: "100%",
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-brand-text mb-6">Site Settings</h2>
      
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
        <form action={updateSettings} className="space-y-6">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <h3 className="text-lg font-semibold text-brand-text border-b pb-2 mb-4">Global Information</h3>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-brand-text">Company Name</label>
              <input type="text" name="companyName" defaultValue={config.companyName} className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-primary focus:ring-primary sm:text-sm" required />
            </div>

            <div>
              <label className="block text-sm font-medium text-brand-text">Contact Email</label>
              <input type="email" name="contactEmail" defaultValue={config.contactEmail} className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-primary focus:ring-primary sm:text-sm" required />
            </div>

            <div>
              <label className="block text-sm font-medium text-brand-text">Contact Phone</label>
              <input type="text" name="contactPhone" defaultValue={config.contactPhone} className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-primary focus:ring-primary sm:text-sm" required />
            </div>

            <div>
              <label className="block text-sm font-medium text-brand-text">Address</label>
              <input type="text" name="address" defaultValue={config.address} className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-primary focus:ring-primary sm:text-sm" required />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-brand-text">Global SEO Meta Description</label>
              <textarea name="metaDescription" defaultValue={config.metaDescription} rows={3} className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-primary focus:ring-primary sm:text-sm" required />
            </div>

            <div className="md:col-span-2 mt-4">
              <h3 className="text-lg font-semibold text-brand-text border-b pb-2 mb-4">Social Media Links</h3>
            </div>

            <div>
              <label className="block text-sm font-medium text-brand-text">Facebook URL</label>
              <input type="url" name="facebookUrl" defaultValue={config.facebookUrl} className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-primary focus:ring-primary sm:text-sm" />
            </div>

            <div>
              <label className="block text-sm font-medium text-brand-text">Twitter URL</label>
              <input type="url" name="twitterUrl" defaultValue={config.twitterUrl} className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-primary focus:ring-primary sm:text-sm" />
            </div>

            <div>
              <label className="block text-sm font-medium text-brand-text">LinkedIn URL</label>
              <input type="url" name="linkedinUrl" defaultValue={config.linkedinUrl} className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-primary focus:ring-primary sm:text-sm" />
            </div>

            <div>
              <label className="block text-sm font-medium text-brand-text">Instagram URL</label>
              <input type="url" name="instagramUrl" defaultValue={config.instagramUrl} className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-primary focus:ring-primary sm:text-sm" />
            </div>

            <div className="md:col-span-2 mt-4">
              <h3 className="text-lg font-semibold text-brand-text border-b pb-2 mb-4">Impact Statistics (Homepage)</h3>
            </div>

            <div>
              <label className="block text-sm font-medium text-brand-text">Projects Completed</label>
              <input type="text" name="statsProjectsCompleted" defaultValue={config.statsProjectsCompleted} className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-primary focus:ring-primary sm:text-sm" />
            </div>
            <div>
              <label className="block text-sm font-medium text-brand-text">MW Installed Capacity</label>
              <input type="text" name="statsMwInstalled" defaultValue={config.statsMwInstalled} className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-primary focus:ring-primary sm:text-sm" />
            </div>
            <div>
              <label className="block text-sm font-medium text-brand-text">Tons of CO2 Offset</label>
              <input type="text" name="statsCo2Offset" defaultValue={config.statsCo2Offset} className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-primary focus:ring-primary sm:text-sm" />
            </div>
            <div>
              <label className="block text-sm font-medium text-brand-text">Happy Clients</label>
              <input type="text" name="statsHappyClients" defaultValue={config.statsHappyClients} className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-primary focus:ring-primary sm:text-sm" />
            </div>
          </div>

          <div className="pt-4 border-t border-gray-100 flex justify-end">
            <SubmitButton title="Save Settings" loadingTitle="Saving..." />
          </div>
        </form>
      </div>
    </div>
  );
}
