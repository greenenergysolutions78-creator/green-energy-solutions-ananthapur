import connectToDatabase from "@/lib/mongodb";
import Faq from "@/models/Faq";
import { HelpCircle } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import Link from "next/link";

export default async function FaqSection() {
  await connectToDatabase();
  // Fetch a limited number of FAQs for the home/contact page, or maybe just 5 popular ones.
  // For now, let's fetch top 6 published FAQs
  const faqs = await Faq.find({ published: true }).sort({ order: 1, createdAt: -1 }).limit(6);

  if (faqs.length === 0) return null;

  return (
    <section className="py-24 sm:py-32 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <FadeIn direction="up">
            <h2 className="text-3xl font-bold tracking-tight text-brand-text sm:text-4xl mb-4">
              Frequently Asked Questions
            </h2>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Common questions about our solar solutions.
            </p>
          </FadeIn>
        </div>
        
        <div className="mx-auto max-w-3xl space-y-8">
          {faqs.map((faq, index) => (
            <FadeIn key={faq._id.toString()} direction="up" delay={index * 0.1}>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-primary-light transition-colors">
                <h3 className="text-lg font-semibold text-brand-text mb-2 flex items-start gap-3">
                  <HelpCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  {faq.question}
                </h3>
                <p className="text-gray-600 ml-9">
                  {faq.answer}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
        
        <FadeIn direction="up" delay={0.2}>
          <div className="mt-12 text-center">
            <Link href="/faqs" className="text-sm font-semibold leading-6 text-primary hover:text-primary-dark">
              View all FAQs <span aria-hidden="true">→</span>
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
