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
      {!isExcluded && <Navbar />}
      <main className="flex-1">{children}</main>
      {!isExcluded && <Footer />}
      {!isExcluded && <WhatsAppButton />}
      {!isExcluded && <CookieBanner />}
    </>
  );
}
