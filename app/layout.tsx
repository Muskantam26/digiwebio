import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";
import MetaPixel from "@/components/layout/MetaPixel";
import { SITE_CONFIG } from "@/lib/config";
import { getOrganizationJsonLd, getPersonJsonLd, getLocalBusinessJsonLd } from "@/lib/seo";

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "DigiWebIO | Web Development & Digital Solutions",
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: SITE_CONFIG.keywords,
  authors: [{ name: "Muskan Tamrakar", url: SITE_CONFIG.url }],
  creator: "Muskan Tamrakar",
  publisher: "DigiWebIO",
  metadataBase: new URL(SITE_CONFIG.url),
  alternates: {
    canonical: SITE_CONFIG.url,
  },
  icons: {
    icon: "/images/digiwebiologo-favicon.png",
    shortcut: "/images/digiwebiologo-favicon.png",
    apple: "/images/digiwebiologo-favicon.png",
  },
  openGraph: {
    title: "DigiWebIO | Web Development & Digital Solutions",
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: `${SITE_CONFIG.url}/digiwebiologo.jpeg`,
        width: 1200,
        height: 630,
        alt: `${SITE_CONFIG.name} Web Development & Digital Solutions`,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DigiWebIO | Web Development & Digital Solutions",
    description: SITE_CONFIG.description,
    images: [`${SITE_CONFIG.url}/digiwebiologo.jpeg`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const orgJsonLd = getOrganizationJsonLd();
  const personJsonLd = getPersonJsonLd();
  const businessJsonLd = getLocalBusinessJsonLd();

  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${jakartaSans.variable} ${spaceGrotesk.variable} dark h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#0A0B0D] text-[#F5F7FA] font-sans selection:bg-[#E2F135] selection:text-[#0A0B0D]">
        <MetaPixel />
        <Navbar />
        <main className="flex-1 pt-20">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
