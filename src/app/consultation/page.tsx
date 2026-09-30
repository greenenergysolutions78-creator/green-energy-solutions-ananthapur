"use client";

import { useState } from "react";
import { CheckCircle } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";

export default function ConsultationPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const data = {
      fullName: formData.get("fullName")?.toString().trim(),
      companyName: formData.get("companyName")?.toString().trim(),
      phone: formData.get("phone")?.toString().trim(),
      email: formData.get("email")?.toString().trim(),
      location: formData.get("location")?.toString().trim(),
      projectType: formData.get("projectType")?.toString(),
      industry: formData.get("industry")?.toString().trim(),
      capacity: formData.get("capacity")?.toString().trim(),
      message: formData.get("message")?.toString().trim(),
      enquiryType: "Consultation",
    };

    if (!data.fullName || !data.phone || !data.location || !data.projectType) {
      setError("Please fill in all required fields (*).");
      setLoading(false);
      return;
    }

    const phoneRegex = /^\+?[0-9\s\-()]{10,15}$/;
    if (!phoneRegex.test(data.phone)) {
      setError("Please enter a valid phone number (10-15 digits).");
      setLoading(false);
      return;
    }

    if (data.email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(data.email)) {
        setError("Please enter a valid email address.");
        setLoading(false);
        return;
      }
    }

    try {
      const res = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Failed to submit request");
      }

      setSubmitted(true);
    } catch (err: any) {
      setError(err.message || "An error occurred while submitting your request.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col min-h-screen bg-gray-50 items-center justify-center py-24">
        <div className="bg-white p-12 rounded-3xl shadow-sm border border-gray-100 max-w-lg text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary-light mb-6">
            <CheckCircle className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-3xl font-bold text-brand-text mb-4">Request Received!</h2>
          <p className="text-muted text-lg mb-8">
            Thank you for requesting a consultation with Green Energy Solutions. One of our solar engineers will review your requirements and contact you shortly.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="text-primary font-semibold hover:text-primary-dark transition"
          >
            Submit another request
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-8 w-full">
        <FadeIn direction="up">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold tracking-tight text-brand-text sm:text-4xl">
              Get a Free Solar Consultation
            </h1>
            <p className="mt-4 text-lg leading-8 text-muted">
              Provide us with some details about your energy needs, and our experts will design a custom solution for your facility.
            </p>
          </div>
        </FadeIn>

        <FadeIn direction="up" delay={0.2}>
          <div className="bg-white p-8 sm:p-12 rounded-3xl shadow-sm border border-gray-100">
            {error && (
              <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-md text-sm">
                {error}
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label htmlFor="fullName" className="block text-sm font-medium leading-6 text-brand-text">Full Name *</label>
                  <div className="mt-2">
                    <input type="text" id="fullName" name="fullName" required className="block w-full rounded-md border-0 py-2.5 px-3.5 text-brand-text shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6" />
                  </div>
                </div>
                
                <div className="sm:col-span-2">
                  <label htmlFor="companyName" className="block text-sm font-medium leading-6 text-brand-text">Company Name</label>
                  <div className="mt-2">
                    <input type="text" id="companyName" name="companyName" className="block w-full rounded-md border-0 py-2.5 px-3.5 text-brand-text shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6" />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium leading-6 text-brand-text">Phone Number *</label>
                  <div className="mt-2">
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      pattern="[\+0-9\s\-\(\)]*" 
                      title="Phone number should only contain numbers, spaces, or +-()" 
                      onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9+() -]/g, ''); }}
                      required 
                      className="block w-full rounded-md border-0 py-2.5 px-3.5 text-brand-text shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6" 
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-brand-text">Email Address</label>
                  <div className="mt-2">
                    <input type="email" id="email" name="email" className="block w-full rounded-md border-0 py-2.5 px-3.5 text-brand-text shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6" />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="location" className="block text-sm font-medium leading-6 text-brand-text">Location (City/Area) *</label>
                  <div className="mt-2">
                    <input type="text" id="location" name="location" required className="block w-full rounded-md border-0 py-2.5 px-3.5 text-brand-text shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6" />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="projectType" className="block text-sm font-medium leading-6 text-brand-text">Project Type *</label>
                  <div className="mt-2">
                    <select id="projectType" name="projectType" required className="block w-full rounded-md border-0 py-3 px-3.5 text-brand-text shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 bg-white">
                      <option value="">Select a project type</option>
                      <option value="Rooftop Solar">Rooftop Solar</option>
                      <option value="Ground Mount Solar">Ground Mount Solar</option>
                      <option value="Floating Solar">Floating Solar</option>
                      <option value="Solar Pumps & Motors">Solar Pumps & Motors</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="industry" className="block text-sm font-medium leading-6 text-brand-text">Industry</label>
                  <div className="mt-2">
                    <input type="text" id="industry" name="industry" placeholder="e.g. Textile, School, Poultry" className="block w-full rounded-md border-0 py-2.5 px-3.5 text-brand-text shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6" />
                  </div>
                </div>

                <div>
                  <label htmlFor="capacity" className="block text-sm font-medium leading-6 text-brand-text">Estimated System Size</label>
                  <div className="mt-2">
                    <input type="text" id="capacity" name="capacity" placeholder="e.g. 100 kWp (if known)" className="block w-full rounded-md border-0 py-2.5 px-3.5 text-brand-text shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6" />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block text-sm font-medium leading-6 text-brand-text">Additional Message</label>
                  <div className="mt-2">
                    <textarea id="message" name="message" rows={4} className="block w-full rounded-md border-0 py-2.5 px-3.5 text-brand-text shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"></textarea>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <div className="flex items-start mb-6">
                  <div className="flex h-6 items-center">
                    <input
                      id="privacyConsent"
                      name="privacyConsent"
                      type="checkbox"
                      required
                      className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                    />
                  </div>
                  <div className="ml-3 text-sm leading-6">
                    <label htmlFor="privacyConsent" className="text-gray-600">
                      I have read and understood the <a href="/privacy" target="_blank" className="text-primary hover:underline font-medium">Privacy Policy</a> and agree to Green Energy Solutions processing the information submitted through this form for responding to my enquiry.
                    </label>
                  </div>
                </div>

                <button type="submit" disabled={loading} className="block w-full rounded-md bg-accent px-3.5 py-4 text-center text-base font-semibold text-white shadow-sm hover:bg-opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent transition disabled:opacity-70 disabled:cursor-not-allowed">
                  {loading ? "Submitting..." : "Submit Consultation Request"}
                </button>
                <p className="mt-4 text-xs text-center text-muted">
                  Submission of a consultation request does not constitute acceptance of a quotation, confirmation of installation, contractual commitment, or guarantee of project feasibility.
                </p>
              </div>
            </form>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
