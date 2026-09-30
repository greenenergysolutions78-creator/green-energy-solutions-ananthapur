import { MapPin, Phone, Mail } from "lucide-react";
import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";
import FaqSection from "@/components/ui/FaqSection";
import ContactForm from "@/components/ui/ContactForm";

export const metadata = {
  title: "Contact Us | Green Energy Solutions",
  description: "Get in touch with Green Energy Solutions for your solar needs.",
};

export default function ContactPage() {

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <section className="bg-primary-dark py-24 sm:py-32 text-center text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn direction="up">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl font-sans">
              Contact Us
            </h1>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-200">
              Have questions about solar? Reach out to our team of experts today.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Information */}
            <FadeIn direction="right">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-brand-text mb-8">
                  Get in Touch
                </h2>
                
                <div className="space-y-8">
                  <div className="flex gap-x-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-light">
                      <MapPin className="h-6 w-6 text-primary" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold leading-7 text-brand-text">Main Office</h3>
                      <p className="mt-2 leading-7 text-muted">
                        #5-85-1, Opp. T.V. Tower,<br />
                        Siva Sai Nagar, Ananthapur – 515 002
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-x-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-light">
                      <MapPin className="h-6 w-6 text-primary" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold leading-7 text-brand-text">Branch Office</h3>
                      <p className="mt-2 leading-7 text-muted">
                        #28-5-134-1, Housing Board Main Road,<br />
                        Beside Rayalaseema Hospital,<br />
                        Revenue Ward 28, Ananthapur – 515 001
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-x-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-light">
                      <Phone className="h-6 w-6 text-primary" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold leading-7 text-brand-text">Phone</h3>
                      <p className="mt-2 leading-7 text-muted">
                        Main: <a href="tel:9281487878" className="hover:text-primary">92814 87878</a><br/>
                        Branch: <a href="tel:9347827979" className="hover:text-primary">93478 27979</a>
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-x-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-light">
                      <Mail className="h-6 w-6 text-primary" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold leading-7 text-brand-text">Email</h3>
                      <p className="mt-2 leading-7 text-muted">
                        <a href="mailto:greenenergysolutions78@gmail.com" className="hover:text-primary">
                          greenenergysolutions78@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                  <Link href="/consultation" className="inline-flex rounded-md bg-accent px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-opacity-90 transition">
                    Request a Detailed Consultation
                  </Link>
                </div>
              </div>
            </FadeIn>

            {/* General Contact Form */}
            <ContactForm />

          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FaqSection />

      {/* Map Section */}
      <section className="w-full h-96 sm:h-[500px] grayscale hover:grayscale-0 transition-all duration-500">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.141679604341!2d77.6184887!3d14.647897800000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb14b716cf7efe3%3A0xdda9d44f1c01c2af!2sgreen%20energy%20solutions%20ananthapur!5e0!3m2!1sen!2sin!4v1790715251772!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={false} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </div>
  );
}
