export const metadata = {
  title: "Cookie Policy | Green Energy Solutions",
  description: "Cookie Policy for Green Energy Solutions.",
};

import FadeIn from "@/components/ui/FadeIn";

export default function CookiePolicyPage() {
  return (
    <div className="bg-white py-24 sm:py-32 min-h-screen">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <FadeIn direction="up">
          <h1 className="text-4xl font-bold tracking-tight text-brand-text sm:text-5xl mb-12">
            Cookie Policy
          </h1>
        </FadeIn>
        <FadeIn direction="up" delay={0.2}>
          <div className="prose prose-lg text-gray-600 max-w-none">
            <p className="mb-6">
              <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
            </p>
          
          <h2 className="text-2xl font-bold text-brand-text mt-10 mb-4">1. What Are Cookies?</h2>
          <p className="mb-4">
            Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to the owners of the site.
          </p>

          <h2 className="text-2xl font-bold text-brand-text mt-10 mb-4">2. How We Use Cookies</h2>
          <p className="mb-4">
            Green Energy Solutions uses cookies primarily for essential technical functionality. We use cookies to:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Ensure our website functions properly and securely.</li>
            <li>Manage administrator authentication for our backend portal.</li>
            <li>Understand general website traffic patterns to improve our user experience.</li>
          </ul>

          <h2 className="text-2xl font-bold text-brand-text mt-10 mb-4">3. Types of Cookies We Use</h2>
          <p className="mb-4">
            <strong>Essential Cookies:</strong> These are required for the operation of our website, such as managing your session securely when submitting forms.
          </p>
          <p className="mb-4">
            <strong>Third-Party Cookies:</strong> We may use trusted third-party services, such as Google Maps embedded on our Contact page, which may set their own cookies according to their respective privacy policies.
          </p>

          <h2 className="text-2xl font-bold text-brand-text mt-10 mb-4">4. Managing Cookies</h2>
          <p className="mb-4">
            Most web browsers allow you to control cookies through their settings preferences. However, if you limit the ability of websites to set cookies, you may worsen your overall user experience and lose the ability to access certain parts of our site securely.
          </p>
        </div>
        </FadeIn>
      </div>
    </div>
  );
}
