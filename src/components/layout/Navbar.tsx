"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Solutions", href: "/solutions" },
  { name: "Services", href: "/services" },
  { name: "Industries", href: "/industries" },
  { name: "Projects", href: "/projects" },
  { name: "Blogs", href: "/blogs" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-xs border-b border-gray-100 sticky top-0 z-50 transition-all">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 py-3 lg:py-3.5" aria-label="Global">
        <div className="flex items-center shrink-0">
          <Link href="/" className="flex items-center -m-1 p-1">
            <span className="sr-only">Green Energy Solutions</span>
            <Image
              src="/logo.png"
              alt="Green Energy Solutions Logo"
              width={300}
              height={80}
              className="w-auto h-11 sm:h-12 object-contain transition-transform hover:scale-[1.02]"
              priority
            />
          </Link>
        </div>

        {/* Mobile action bar */}
        <div className="flex items-center gap-2.5 lg:hidden">
          <LanguageSwitcher />
          <button
            type="button"
            className="-m-2 inline-flex items-center justify-center rounded-lg p-2 text-gray-700 hover:bg-gray-100 transition-colors"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* Desktop nav links */}
        <div className="hidden lg:flex items-center lg:gap-x-4 xl:gap-x-6 2xl:gap-x-8 mx-4">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-xs xl:text-sm font-semibold text-brand-text hover:text-primary transition-colors whitespace-nowrap py-1"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Desktop CTA & Language Switcher */}
        <div className="hidden lg:flex items-center gap-x-2.5 xl:gap-x-3.5 shrink-0">
          <LanguageSwitcher />
          <Link
            href="/consultation"
            className="rounded-lg bg-accent px-3.5 py-2 text-xs xl:text-sm font-semibold text-white shadow-sm hover:bg-amber-600 transition-all whitespace-nowrap focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            Get a Consultation
          </Link>
        </div>
      </nav>
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden" role="dialog" aria-modal="true">
          <div className="fixed inset-0 z-50 bg-black/20" onClick={() => setMobileMenuOpen(false)} />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5 flex items-center" onClick={() => setMobileMenuOpen(false)}>
                <span className="sr-only">Green Energy Solutions</span>
                <Image src="/logo.png" alt="Green Energy Solutions Logo" width={1000} height={1000} className="w-auto h-14 object-contain" />
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-brand-text hover:bg-gray-50 hover:text-primary"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  <Link
                    href="/consultation"
                    className="-mx-3 block rounded-lg bg-accent px-3 py-2.5 text-center text-base font-semibold leading-7 text-white hover:bg-opacity-90"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Get a Consultation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
