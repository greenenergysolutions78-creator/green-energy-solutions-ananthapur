import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-24">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Column 1: Brand */}
          <div className="space-y-6 md:col-span-2 lg:col-span-1">
            <Image src="/logo.png" alt="Green Energy Solutions Logo" width={1000} height={1000} className="w-auto h-20 object-contain" />
            <div>
              <p className="text-lg font-bold text-white uppercase tracking-wider mb-2">GO SOLAR, GO GREEN</p>
              <p className="text-sm leading-6 text-gray-300">
                Solar solutions for a cleaner, smarter future.
              </p>
            </div>
          </div>
          
          {/* Column 2: Company */}
          <div>
            <h3 className="text-sm font-semibold leading-6 text-white uppercase tracking-wider">Company</h3>
            <ul role="list" className="mt-6 space-y-4">
              <li><Link href="/about" className="text-sm leading-6 text-gray-300 hover:text-white transition">About</Link></li>
              <li><Link href="/about" className="text-sm leading-6 text-gray-300 hover:text-white transition">Why Us</Link></li>
              <li><Link href="/projects" className="text-sm leading-6 text-gray-300 hover:text-white transition">Projects</Link></li>
              <li><Link href="/industries" className="text-sm leading-6 text-gray-300 hover:text-white transition">Industries</Link></li>
            </ul>
          </div>
          
          {/* Column 3: Solutions */}
          <div>
            <h3 className="text-sm font-semibold leading-6 text-white uppercase tracking-wider">Solutions</h3>
            <ul role="list" className="mt-6 space-y-4">
              <li><Link href="/solutions#rooftop" className="text-sm leading-6 text-gray-300 hover:text-white transition">Rooftop Solar</Link></li>
              <li><Link href="/solutions#ground-mount" className="text-sm leading-6 text-gray-300 hover:text-white transition">Ground Mount</Link></li>
              <li><Link href="/solutions#floating" className="text-sm leading-6 text-gray-300 hover:text-white transition">Floating Solar</Link></li>
              <li><Link href="/services" className="text-sm leading-6 text-gray-300 hover:text-white transition">EPC Services</Link></li>
            </ul>
          </div>
          
          {/* Column 4: Contact */}
          <div>
            <h3 className="text-sm font-semibold leading-6 text-white uppercase tracking-wider">Contact</h3>
            <ul role="list" className="mt-6 space-y-4">
              <li className="flex gap-3 items-center">
                <Phone className="h-4 w-4 text-accent flex-shrink-0" />
                <a href="tel:9281487878" className="text-sm leading-6 text-gray-300 hover:text-white transition">92814 87878</a>
              </li>
              <li className="flex gap-3 items-center">
                <Mail className="h-4 w-4 text-accent flex-shrink-0" />
                <a href="mailto:greenenergysolutions78@gmail.com" className="text-sm leading-6 text-gray-300 hover:text-white transition">Email Us</a>
              </li>
              <li className="flex gap-3 items-start">
                <MapPin className="h-4 w-4 text-accent flex-shrink-0 mt-1" />
                <Link href="/contact" className="text-sm leading-6 text-gray-300 hover:text-white transition">
                  #5-85-1, Opp. T.V. Tower,<br/>
                  Siva Sai Nagar, Ananthapur
                </Link>
              </li>
              <li className="flex gap-3 items-center">
                <svg className="h-4 w-4 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <a href="https://wa.me/919281487878" target="_blank" rel="noopener noreferrer" className="text-sm leading-6 text-gray-300 hover:text-white transition">WhatsApp</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 flex flex-col gap-6">
          <div className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-4">
            <Link href="/privacy" className="text-sm leading-5 text-gray-400 hover:text-white transition">Privacy Policy</Link>
            <Link href="/terms" className="text-sm leading-5 text-gray-400 hover:text-white transition">Terms & Conditions</Link>
            <Link href="/disclaimer" className="text-sm leading-5 text-gray-400 hover:text-white transition">Disclaimer</Link>
            <Link href="/cookie-policy" className="text-sm leading-5 text-gray-400 hover:text-white transition">Cookie Policy</Link>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4">
            <p className="text-sm leading-5 text-gray-400">
              &copy; {new Date().getFullYear()} Green Energy Solutions. All rights reserved.
            </p>
            <p className="text-xs leading-5 text-gray-500">
              Site designed & developed by <a href="https://anandverse.tech" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">AnandVerse Web Services</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
