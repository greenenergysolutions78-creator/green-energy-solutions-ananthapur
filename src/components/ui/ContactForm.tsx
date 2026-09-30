"use client";

import { useState } from "react";
import { CheckCircle } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const data = {
      fullName: formData.get("name")?.toString().trim(),
      email: formData.get("email")?.toString().trim(),
      phone: formData.get("phone")?.toString().trim(),
      message: formData.get("message")?.toString().trim(),
      enquiryType: "Contact",
      location: "Not Provided",
      projectType: "General Contact",
    };

    if (!data.fullName || !data.email || !data.phone || !data.message) {
      setError("Please fill in all required fields.");
      setLoading(false);
      return;
    }

    const phoneRegex = /^\+?[0-9\s\-()]{10,15}$/;
    if (!phoneRegex.test(data.phone)) {
      setError("Please enter a valid phone number (10-15 digits).");
      setLoading(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      setError("Please enter a valid email address.");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Failed to send message");
      }

      setSubmitted(true);
    } catch (err: any) {
      setError(err.message || "An error occurred while sending your message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <FadeIn direction="left" delay={0.2}>
      <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 h-full">
        {submitted ? (
          <div className="h-full flex flex-col items-center justify-center text-center py-12">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary-light mb-6">
              <CheckCircle className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-brand-text mb-2">Message Sent!</h3>
            <p className="text-muted mb-6">We've received your message and will get back to you shortly.</p>
            <button onClick={() => setSubmitted(false)} className="text-primary font-semibold hover:text-primary-dark">Send another message</button>
          </div>
        ) : (
          <>
            <h3 className="text-2xl font-bold tracking-tight text-brand-text mb-6">Send a Message</h3>
            {error && (
              <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-md text-sm">
                {error}
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium leading-6 text-brand-text">Name</label>
                <div className="mt-2">
                  <input type="text" name="name" id="name" className="block w-full rounded-md border-0 py-2.5 px-3.5 text-brand-text shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6" required />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-brand-text">Email</label>
                <div className="mt-2">
                  <input type="email" name="email" id="email" className="block w-full rounded-md border-0 py-2.5 px-3.5 text-brand-text shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6" required />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium leading-6 text-brand-text">Phone Number</label>
                <div className="mt-2">
                  <input 
                    type="tel" 
                    name="phone" 
                    id="phone" 
                    pattern="[\+0-9\s\-\(\)]*" 
                    title="Phone number should only contain numbers, spaces, or +-()" 
                    onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9+() -]/g, ''); }}
                    className="block w-full rounded-md border-0 py-2.5 px-3.5 text-brand-text shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6" 
                    required 
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium leading-6 text-brand-text">Message</label>
                <div className="mt-2">
                  <textarea name="message" id="message" rows={4} className="block w-full rounded-md border-0 py-2.5 px-3.5 text-brand-text shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6" required></textarea>
                </div>
              </div>
              
              <div className="flex items-start mt-2 mb-4">
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
                    I have read and understood the <a href="/privacy" target="_blank" className="text-primary hover:underline font-medium">Privacy Policy</a> and agree to Green Energy Solutions processing the information submitted through this form.
                  </label>
                </div>
              </div>
              
              <button type="submit" disabled={loading} className="w-full rounded-md bg-primary px-3.5 py-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition disabled:opacity-70 disabled:cursor-not-allowed">
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </>
        )}
      </div>
    </FadeIn>
  );
}
