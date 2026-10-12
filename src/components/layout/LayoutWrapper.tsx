"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppButton from "../ui/WhatsAppButton";
import CookieBanner from "../ui/CookieBanner";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isExcluded = pathname?.startsWith("/admin") || pathname?.startsWith("/setup");

  return (
    <>
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>
      {!isExcluded && <Navbar />}
      <main id="main-content" tabIndex={-1} className="flex-1 focus:outline-none">
        {children}
      </main>
      {!isExcluded && <Footer />}
      {!isExcluded && <WhatsAppButton />}
      {!isExcluded && <CookieBanner />}
    </>
  );
}
