"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowBanner(false);
  };

  const declineCookies = () => {
    localStorage.setItem("cookieConsent", "declined");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 z-50 shadow-2xl flex flex-col md:flex-row justify-between items-center gap-4">
      <div className="text-sm text-gray-300">
        We use essential cookies to ensure our website functions securely and optimally. By continuing to browse, you consent to our use of these technical cookies. 
        <Link href="/cookie-policy" className="ml-1 text-primary hover:underline">Read our Cookie Policy</Link>.
      </div>
      <div className="flex gap-4">
        <button 
          onClick={declineCookies}
          className="whitespace-nowrap bg-transparent hover:bg-white/10 text-white border border-white/20 px-6 py-2 rounded-md text-sm font-semibold transition"
        >
          Decline
        </button>
        <button 
          onClick={acceptCookies}
          className="whitespace-nowrap bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-md text-sm font-semibold transition"
        >
          Accept
        </button>
      </div>
    </div>
  );
}
