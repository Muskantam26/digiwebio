import { Metadata } from "next";
import { SITE_CONFIG } from "./config";

export function generatePageMetadata({
  title,
  description,
  path = "",
  keywords = [],
  image = "/digiwebiologo.jpeg",
}: {
  title: string;
  description?: string;
  path?: string;
  keywords?: string[];
  image?: string;
}): Metadata {
  const metaTitle = title.includes(SITE_CONFIG.name)
    ? title
    : `${title} | ${SITE_CONFIG.name}`;
  const metaDesc = description || SITE_CONFIG.description;
  const url = `${SITE_CONFIG.url}${path}`;
  const combinedKeywords = [...SITE_CONFIG.keywords, ...keywords];

  return {
    title: metaTitle,
    description: metaDesc,
    keywords: combinedKeywords,
    authors: [{ name: "Muskan Tamrakar", url: SITE_CONFIG.url }],
    creator: "Muskan Tamrakar",
    publisher: "DigiWebIO",
    metadataBase: new URL(SITE_CONFIG.url),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: metaTitle,
      description: metaDesc,
      url: url,
      siteName: SITE_CONFIG.name,
      images: [
        {
          url: image,
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
      title: metaTitle,
      description: metaDesc,
      images: [image],
      creator: "@digiwebio",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export function getOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_CONFIG.url}/#organization`,
    name: SITE_CONFIG.name,
    legalName: SITE_CONFIG.legalName,
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/digiwebiologo.jpeg`,
    description: SITE_CONFIG.description,
    founder: {
      "@type": "Person",
      "@id": `${SITE_CONFIG.url}/#founder`,
      name: "Muskan Tamrakar",
      jobTitle: "Founder",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_CONFIG.contact.address.street,
      addressLocality: SITE_CONFIG.contact.address.city,
      addressRegion: SITE_CONFIG.contact.address.state,
      postalCode: SITE_CONFIG.contact.address.pincode,
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: SITE_CONFIG.contact.phoneFormatted,
      contactType: "customer service",
      email: SITE_CONFIG.contact.email,
      availableLanguage: ["English", "Hindi"],
    },
    sameAs: [
      SITE_CONFIG.social.linkedin,
      SITE_CONFIG.social.twitter,
      SITE_CONFIG.social.github,
      SITE_CONFIG.social.instagram,
    ],
  };
}

export function getPersonJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_CONFIG.url}/#founder`,
    name: "Muskan Tamrakar",
    jobTitle: "Founder",
    description: "Muskan Tamrakar is a web developer and digital solutions entrepreneur, and the founder of DigiWebIO.",
    url: SITE_CONFIG.url,
    worksFor: {
      "@type": "Organization",
      "@id": `${SITE_CONFIG.url}/#organization`,
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
    },
    founderOf: {
      "@type": "Organization",
      "@id": `${SITE_CONFIG.url}/#organization`,
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
    },
  };
}

export function getLocalBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE_CONFIG.name,
    image: `${SITE_CONFIG.url}/digiwebiologo.jpeg`,
    "@id": SITE_CONFIG.url,
    url: SITE_CONFIG.url,
    telephone: SITE_CONFIG.contact.phoneFormatted,
    priceRange: "₹₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_CONFIG.contact.address.street,
      addressLocality: SITE_CONFIG.contact.address.city,
      addressRegion: SITE_CONFIG.contact.address.state,
      postalCode: SITE_CONFIG.contact.address.pincode,
      addressCountry: "IN",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "19:00",
    },
  };
}
