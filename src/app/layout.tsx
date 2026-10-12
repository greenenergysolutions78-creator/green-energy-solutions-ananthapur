import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "@/components/layout/LayoutWrapper";
import BusinessSchema from "@/components/seo/BusinessSchema";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const siteUrl = "https://www.greenenergysolutions.energy";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Green Energy Solutions | Solar EPC & Solar Power Solutions",
    template: "%s | Green Energy Solutions",
  },
  description:
    "Explore solar EPC, rooftop solar, ground-mounted solar, floating solar and solar pump solutions from Green Energy Solutions in Ananthapur, Andhra Pradesh.",
  applicationName: "Green Energy Solutions",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Green Energy Solutions",
    title: "Green Energy Solutions | Solar EPC & Solar Power Solutions",
    description:
      "Solar energy solutions for homes, businesses, industries and institutions.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Green Energy Solutions solar installations in Ananthapur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Green Energy Solutions",
    description: "Solar EPC and solar power solutions in Andhra Pradesh.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon/favicon.ico" },
      { url: "/favicon/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/favicon/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en-IN"
      className={`${manrope.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TBJ9Q473');`,
          }}
        />
        {/* End Google Tag Manager */}
        <BusinessSchema />
      </head>
      <body className="min-h-full flex flex-col font-sans text-brand-text">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TBJ9Q473"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <LayoutWrapper>
          {children}
        </LayoutWrapper>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
