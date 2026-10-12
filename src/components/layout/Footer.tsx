"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone, ShieldCheck, Settings } from "lucide-react";

export default function Footer() {
  const openPreferences = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-cookie-preferences"));
    }
  };

  return (
    <footer className="bg-primary-dark text-white border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 pb-12 pt-16 sm:pt-20 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Column 1: Brand & Identity */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/logo.png"
                alt="Green Energy Solutions Logo"
                width={1000}
                height={1000}
                className="w-auto h-16 object-contain"
              />
            </Link>
            <div>
              <p className="text-sm font-bold text-accent uppercase tracking-wider">GO SOLAR, GO GREEN</p>
              <p className="text-xs leading-5 text-gray-300 mt-1">
                Premier Solar EPC contractor delivering high-efficiency rooftop, ground-mount, and floating solar systems across Andhra Pradesh.
              </p>
              <p className="text-xs text-gray-400 mt-2">
                Authorized Tier-1 supply channel partner with <strong>Waaree Energies</strong>.
              </p>
            </div>
          </div>
          
          {/* Column 2: Solutions & Services */}
          <div>
            <h3 className="text-xs font-bold leading-6 text-white uppercase tracking-wider border-b border-white/10 pb-2">
              Solar Solutions
            </h3>
            <ul role="list" className="mt-4 space-y-2.5 text-xs text-gray-300">
              <li><Link href="/solutions#rooftop" className="hover:text-white transition">Rooftop Solar EPC</Link></li>
              <li><Link href="/solutions#ground-mount" className="hover:text-white transition">Ground Mount Solar Plants</Link></li>
              <li><Link href="/solutions#floating" className="hover:text-white transition">Floating Solar Systems</Link></li>
              <li><Link href="/services" className="hover:text-white transition">Engineering & Net Metering</Link></li>
              <li><Link href="/industries" className="hover:text-white transition">Commercial & Agricultural Solar</Link></li>
              <li><Link href="/consultation" className="hover:text-accent font-semibold transition">Get a Free Consultation &rarr;</Link></li>
            </ul>
          </div>
          
          {/* Column 3: Legal & Regulatory Disclosures */}
          <div>
            <h3 className="text-xs font-bold leading-6 text-white uppercase tracking-wider border-b border-white/10 pb-2 flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-accent" />
              Legal & Compliance
            </h3>
            <ul role="list" className="mt-4 space-y-2.5 text-xs text-gray-300">
              <li><Link href="/privacy" className="hover:text-white transition">Privacy Policy (DPDP / GDPR)</Link></li>
              <li><Link href="/terms" className="hover:text-white transition">Website Terms of Use</Link></li>
              <li><Link href="/legal-notice" className="hover:text-white transition">Company Information / Legal Notice</Link></li>
              <li><Link href="/disclaimer" className="hover:text-white transition">Solar Performance Disclaimer</Link></li>
              <li><Link href="/cookie-policy" className="hover:text-white transition">Cookie Policy</Link></li>
              <li>
                <button
                  type="button"
                  onClick={openPreferences}
                  className="inline-flex items-center gap-1 text-accent hover:underline cursor-pointer font-medium"
                >
                  <Settings className="h-3 w-3" />
                  Cookie Preferences
                </button>
              </li>
            </ul>
          </div>
          
          {/* Column 4: Offices & Contact Coordinates */}
          <div>
            <h3 className="text-xs font-bold leading-6 text-white uppercase tracking-wider border-b border-white/10 pb-2">
              Contact & Offices
            </h3>
            <ul role="list" className="mt-4 space-y-3 text-xs text-gray-300">
              <li className="flex gap-2.5 items-center">
                <Phone className="h-3.5 w-3.5 text-accent shrink-0" />
                <a href="tel:9281487878" className="hover:text-white transition font-medium">+91 92814 87878</a>
                <span className="text-gray-500">|</span>
                <a href="tel:9347827979" className="hover:text-white transition font-medium">93478 27979</a>
              </li>
              <li className="flex gap-2.5 items-center">
                <Mail className="h-3.5 w-3.5 text-accent shrink-0" />
                <a href="mailto:greenenergysolutions78@gmail.com" className="hover:text-white transition">
                  greenenergysolutions78@gmail.com
                </a>
              </li>
              <li className="flex gap-2.5 items-start">
                <MapPin className="h-3.5 w-3.5 text-accent shrink-0 mt-0.5" />
                <Link href="/contact" className="hover:text-white transition leading-relaxed">
                  #5-85-1, Opp. T.V. Tower, Siva Sai Nagar,<br />
                  Ananthapur – 515 002, Andhra Pradesh
                </Link>
              </li>
              <li className="pt-1">
                <a
                  href="https://wa.me/919281487878"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#25D366] text-white font-semibold text-xs hover:bg-[#20ba5a] transition"
                >
                  <span>Chat on WhatsApp</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p className="text-center sm:text-left">
            &copy; {new Date().getFullYear()} Green Energy Solutions. All rights reserved. Registered in Ananthapur, Andhra Pradesh, India.
          </p>
          <div className="flex items-center gap-4 text-[11px]">
            <Link href="/privacy" className="hover:text-white transition">Privacy</Link>
            <span>&bull;</span>
            <Link href="/terms" className="hover:text-white transition">Terms</Link>
            <span>&bull;</span>
            <Link href="/legal-notice" className="hover:text-white transition">Legal Notice</Link>
            <span>&bull;</span>
            <Link href="/disclaimer" className="hover:text-white transition">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
