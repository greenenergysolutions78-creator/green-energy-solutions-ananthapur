"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X, Shield, Settings, Check } from "lucide-react";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [analyticsConsent, setAnalyticsConsent] = useState(true);

  useEffect(() => {
    // Check if user has already made a choice
    const saved = localStorage.getItem("ges_cookie_consent");
    if (!saved) {
      setShowBanner(true);
    } else {
      try {
        const parsed = JSON.parse(saved);
        setAnalyticsConsent(parsed.analytics ?? true);
      } catch {
        // Fallback for older string format
      }
    }

    // Allow opening preferences from anywhere (e.g. footer link)
    const handleOpenPreferences = () => {
      setShowModal(true);
      setShowBanner(false);
    };
    window.addEventListener("open-cookie-preferences", handleOpenPreferences);
    return () => window.removeEventListener("open-cookie-preferences", handleOpenPreferences);
  }, []);

  const saveConsent = (analytics: boolean) => {
    const preferences = {
      essential: true,
      analytics,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem("ges_cookie_consent", JSON.stringify(preferences));
    setAnalyticsConsent(analytics);
    setShowBanner(false);
    setShowModal(false);

    // Update Google Analytics consent mode if gtag exists
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("consent", "update", {
        analytics_storage: analytics ? "granted" : "denied",
      });
    }
  };

  const acceptAll = () => saveConsent(true);
  const declineAll = () => saveConsent(false);

  return (
    <>
      {/* Floating Bottom Banner */}
      {showBanner && (
        <aside
          role="dialog"
          aria-label="Cookie consent banner"
          className="fixed bottom-0 left-0 right-0 z-50 bg-gray-950/95 backdrop-blur-md text-white border-t border-gray-800 p-4 sm:p-5 shadow-2xl animate-in slide-in-from-bottom duration-300"
        >
          <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-xs sm:text-sm text-gray-300 leading-relaxed text-center md:text-left">
              <span className="font-semibold text-white">We value your privacy.</span> We use essential cookies to operate our site and analytics cookies (Google Analytics, Microsoft Clarity) to understand user engagement. You can choose your preferences or read our{" "}
              <Link href="/cookie-policy" className="text-accent underline hover:text-white font-medium">
                Cookie Policy
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="text-accent underline hover:text-white font-medium">
                Privacy Policy
              </Link>.
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2.5 shrink-0">
              <button
                type="button"
                onClick={() => {
                  setShowBanner(false);
                  setShowModal(true);
                }}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-200 border border-gray-700 transition"
              >
                <Settings className="h-3.5 w-3.5" />
                Preferences
              </button>
              <button
                type="button"
                onClick={declineAll}
                className="px-4 py-2 text-xs font-semibold rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-200 border border-gray-700 transition"
              >
                Reject Non-Essential
              </button>
              <button
                type="button"
                onClick={acceptAll}
                className="px-5 py-2 text-xs font-semibold rounded-lg bg-primary hover:bg-primary-dark text-white shadow-sm transition"
              >
                Accept All
              </button>
            </div>
          </div>
        </aside>
      )}

      {/* Preferences Management Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="relative w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl text-gray-800 animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between border-b border-gray-100 pb-4">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                <h3 className="text-base font-bold text-brand-text">Cookie Consent Preferences</h3>
              </div>
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="text-gray-400 hover:text-gray-600 rounded-lg p-1"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-4 space-y-4 text-xs sm:text-sm text-gray-600">
              <p>
                Configure which cookies you allow on your device. You can update these settings at any time from our website footer.
              </p>

              {/* Essential Category */}
              <div className="p-3.5 rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-between">
                <div>
                  <p className="font-semibold text-brand-text">Strictly Necessary Cookies</p>
                  <p className="text-xs text-gray-500 mt-0.5">Required for core security, session state, and form delivery.</p>
                </div>
                <span className="text-[11px] font-bold text-gray-500 bg-gray-200 px-2 py-1 rounded-md uppercase">
                  Always Active
                </span>
              </div>

              {/* Analytics Category */}
              <div className="p-3.5 rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-between">
                <div>
                  <p className="font-semibold text-brand-text">Performance & Analytics Cookies</p>
                  <p className="text-xs text-gray-500 mt-0.5">Google Analytics 4 & Microsoft Clarity to measure anonymized visitor interactions.</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={analyticsConsent}
                    onChange={(e) => setAnalyticsConsent(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                </label>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100 flex justify-end gap-2.5">
              <button
                type="button"
                onClick={declineAll}
                className="px-4 py-2 text-xs font-semibold rounded-lg text-gray-600 bg-gray-100 hover:bg-gray-200 transition"
              >
                Reject All
              </button>
              <button
                type="button"
                onClick={() => saveConsent(analyticsConsent)}
                className="px-4 py-2 text-xs font-semibold rounded-lg bg-primary hover:bg-primary-dark text-white transition flex items-center gap-1.5"
              >
                <Check className="h-3.5 w-3.5" />
                Save Preferences
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
