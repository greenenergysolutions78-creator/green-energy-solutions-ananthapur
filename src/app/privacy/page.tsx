export const metadata = {
  title: "Privacy Policy | Green Energy Solutions",
  description: "Privacy Policy for Green Energy Solutions.",
};

import FadeIn from "@/components/ui/FadeIn";

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white py-24 sm:py-32 min-h-screen">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <FadeIn direction="up">
          <h1 className="text-4xl font-bold tracking-tight text-brand-text sm:text-5xl mb-12">
            Privacy Policy
          </h1>
        </FadeIn>
        <FadeIn direction="up" delay={0.2}>
          <div className="prose prose-lg text-gray-600 max-w-none">
            <p className="mb-6">
              <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
            </p>
          
          <h2 className="text-2xl font-bold text-brand-text mt-10 mb-4">1. Information We Collect</h2>
          <p className="mb-4">
            We only collect information that our business actually needs to serve you. When you submit an enquiry or request a consultation on our website, we may collect:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Company name</li>
            <li>Location (City/Area)</li>
            <li>Project requirements (e.g., project type, industry, estimated system size, messages)</li>
            <li>IP address and basic device information (automatically collected via server logs)</li>
          </ul>

          <h2 className="text-2xl font-bold text-brand-text mt-10 mb-4">2. Why We Collect It</h2>
          <p className="mb-4">
            We collect information submitted through our enquiry and consultation forms strictly to:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Respond to your direct enquiries.</li>
            <li>Provide relevant information about our solar EPC services.</li>
            <li>Arrange technical consultations and site surveys.</li>
            <li>Communicate with you regarding requested services and project feasibility.</li>
          </ul>

          <h2 className="text-2xl font-bold text-brand-text mt-10 mb-4">3. Data Sharing and Third-Party Services</h2>
          <p className="mb-4">
            We do not sell, trade, or rent your personal data. We utilize secure, industry-standard third-party infrastructure providers to operate our website and process your enquiries. These include:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Vercel:</strong> For secure website hosting and delivery.</li>
            <li><strong>MongoDB:</strong> For securely storing enquiry records in our database.</li>
            <li><strong>Resend:</strong> For dispatching automated email acknowledgments and internal notifications.</li>
            <li><strong>Google Maps:</strong> Embedded purely for location visualization on our contact page.</li>
          </ul>

          <h2 className="text-2xl font-bold text-brand-text mt-10 mb-4">4. Data Retention</h2>
          <p className="mb-4">
            We retain your enquiry information only for as long as necessary to fulfill the purposes outlined in this policy (e.g., assessing your project, providing a quotation, and establishing a commercial relationship), or as required by applicable Indian laws. If a commercial agreement is not reached, routine enquiries are periodically purged from our active database.
          </p>

          <h2 className="text-2xl font-bold text-brand-text mt-10 mb-4">5. Your Rights (DPDP Act Alignment)</h2>
          <p className="mb-4">
            In accordance with the Digital Personal Data Protection (DPDP) Act of India, you hold the following rights concerning your personal data:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Right to Access:</strong> Request a summary of the personal data we hold about you.</li>
            <li><strong>Right to Correction:</strong> Request correction of inaccurate or outdated information.</li>
            <li><strong>Right to Erasure:</strong> Request the deletion of your personal data when it is no longer necessary for the purpose it was collected.</li>
            <li><strong>Right to Grievance Redressal:</strong> Register a complaint regarding our data processing practices.</li>
          </ul>
          <p className="mb-4">
            To exercise these rights, please contact our Grievance Officer using the details below.
          </p>

          <h2 id="grievance" className="text-2xl font-bold text-brand-text mt-10 mb-4">6. Grievance Officer & Contact</h2>
          <p className="mb-4">
            If you have any questions, concerns, or requests regarding this Privacy Policy or your data, please contact us at:
          </p>
          <ul className="list-none mb-6 p-6 bg-gray-50 rounded-lg border border-gray-100">
            <li><strong>Name:</strong> [Grievance Officer Name - To Be Updated]</li>
            <li><strong>Designation:</strong> [Designation - To Be Updated]</li>
            <li><strong>Email:</strong> greenenergysolutions78@gmail.com</li>
            <li><strong>Phone:</strong> 92814 87878</li>
            <li><strong>Address:</strong> #5-85-1, Opp. T.V. Tower, Siva Sai Nagar, Ananthapur – 515 002, Andhra Pradesh</li>
          </ul>
        </div>
        </FadeIn>
      </div>
    </div>
  );
}
