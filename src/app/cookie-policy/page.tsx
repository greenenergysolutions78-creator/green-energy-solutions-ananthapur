"use client";

import FadeIn from "@/components/ui/FadeIn";
import Link from "next/link";
import { Settings, ShieldCheck } from "lucide-react";

export default function CookiePolicyPage() {
  const openPreferences = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-cookie-preferences"));
    }
  };

  return (
    <div className="bg-white py-20 sm:py-28 min-h-screen">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <FadeIn direction="up">
          <div className="border-b border-gray-200 pb-8 mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">Legal & Compliance</span>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-brand-text mt-2">
              Cookie Policy
            </h1>
            <p className="mt-3 text-sm text-gray-500">
              <strong>Last Updated:</strong> October 2026 | Green Energy Solutions
            </p>
          </div>
        </FadeIn>

        <FadeIn direction="up" delay={0.1}>
          <div className="prose prose-lg text-gray-700 max-w-none space-y-8 leading-relaxed text-sm sm:text-base">
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-brand-text mb-3">1. Introduction</h2>
              <p>
                This Cookie Policy explains how <strong>Green Energy Solutions</strong> uses cookies, local storage, and similar tracking technologies when you visit our website at <strong>https://www.greenenergysolutions.energy/</strong>.
              </p>
              <p className="mt-2">
                We believe in complete transparency. Our website is primarily an informational business portfolio and lead-generation portal. We do not use third-party advertising cookies, and we do not sell your tracking data to data brokers.
              </p>
            </section>

            {/* Quick Action Box */}
            <div className="p-5 rounded-2xl bg-primary-light/40 border border-primary/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-6 w-6 text-primary shrink-0" />
                <div>
                  <h3 className="font-bold text-brand-text text-sm sm:text-base">Manage Your Cookie Preferences</h3>
                  <p className="text-xs text-gray-600 mt-0.5">Customize or withdraw your consent for non-essential analytics cookies at any time.</p>
                </div>
              </div>
              <button
                type="button"
                onClick={openPreferences}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-primary hover:bg-primary-dark text-white text-xs font-semibold shadow-xs transition shrink-0"
              >
                <Settings className="h-3.5 w-3.5" />
                Cookie Preferences
              </button>
            </div>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-brand-text mb-3">2. What Are Cookies?</h2>
              <p>
                Cookies are small text files placed on your computer or mobile device by websites that you visit. They are widely used to make websites work efficiently, enhance navigation, remember your preferences (such as your chosen language), and provide general usage reporting to site owners.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-brand-text mb-3">3. Categories of Cookies We Use</h2>

              <div className="space-y-6 mt-4">
                {/* Essential */}
                <div className="border border-gray-200 rounded-xl p-5 bg-gray-50">
                  <h3 className="font-bold text-brand-text text-base flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    Strictly Necessary (Essential) Cookies
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 mt-2">
                    These cookies are indispensable for our website to operate securely. They enable navigation, secure form transmissions, and prevent malicious attacks. Because the website cannot function properly without them, they do not require consent.
                  </p>

                  <div className="mt-4 overflow-x-auto">
                    <table className="min-w-full text-xs text-left">
                      <thead className="bg-gray-200 text-gray-700 uppercase font-bold text-[10px]">
                        <tr>
                          <th className="p-2">Cookie Name</th>
                          <th className="p-2">Provider</th>
                          <th className="p-2">Purpose</th>
                          <th className="p-2">Lifespan</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr>
                          <td className="p-2 font-mono">ges_cookie_consent</td>
                          <td className="p-2">Green Energy Solutions</td>
                          <td className="p-2">Stores your cookie preferences (acceptance/rejection)</td>
                          <td className="p-2">12 Months</td>
                        </tr>
                        <tr>
                          <td className="p-2 font-mono">googtrans</td>
                          <td className="p-2">Google Translate</td>
                          <td className="p-2">Stores your active multi-lingual language selection</td>
                          <td className="p-2">Session / Persistent</td>
                        </tr>
                        <tr>
                          <td className="p-2 font-mono">next-auth.session-token</td>
                          <td className="p-2">NextAuth.js</td>
                          <td className="p-2">Maintains secure administrator login sessions (admin only)</td>
                          <td className="p-2">30 Days</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Analytics */}
                <div className="border border-gray-200 rounded-xl p-5 bg-gray-50">
                  <h3 className="font-bold text-brand-text text-base flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent"></span>
                    Performance & Analytics Cookies
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 mt-2">
                    These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us know which solar solution pages are most and least popular. All information collected is aggregated and anonymized.
                  </p>

                  <div className="mt-4 overflow-x-auto">
                    <table className="min-w-full text-xs text-left">
                      <thead className="bg-gray-200 text-gray-700 uppercase font-bold text-[10px]">
                        <tr>
                          <th className="p-2">Cookie Name</th>
                          <th className="p-2">Provider</th>
                          <th className="p-2">Purpose</th>
                          <th className="p-2">Lifespan</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr>
                          <td className="p-2 font-mono">_ga, _ga_*</td>
                          <td className="p-2">Google Analytics 4</td>
                          <td className="p-2">Distinguishes unique users and measures site interactions</td>
                          <td className="p-2">24 Months</td>
                        </tr>
                        <tr>
                          <td className="p-2 font-mono">_clck, _clsk</td>
                          <td className="p-2">Microsoft Clarity</td>
                          <td className="p-2">Registers click heatmaps and session interaction patterns</td>
                          <td className="p-2">1 Year / 24 Hours</td>
                        </tr>
                        <tr>
                          <td className="p-2 font-mono">_va_speed, _va_analytics</td>
                          <td className="p-2">Vercel Inc.</td>
                          <td className="p-2">Measures real-world Core Web Vitals and load performance</td>
                          <td className="p-2">Session</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-brand-text mb-3">4. How to Control Cookies in Your Browser</h2>
              <p>
                In addition to our on-site <button onClick={openPreferences} className="text-primary underline font-medium">Cookie Preferences Manager</button>, most web browsers allow you to modify cookie settings globally:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Chrome</a></li>
                <li><a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Mozilla Firefox</a></li>
                <li><a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Apple Safari</a></li>
                <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Microsoft Edge</a></li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-brand-text mb-3">5. Questions & Contact</h2>
              <p>
                If you have any questions regarding our use of cookies or privacy practices, please contact us at <a href="mailto:greenenergysolutions78@gmail.com" className="text-primary hover:underline">greenenergysolutions78@gmail.com</a> or visit our <Link href="/contact" className="text-primary hover:underline">Contact page</Link>.
              </p>
            </section>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
