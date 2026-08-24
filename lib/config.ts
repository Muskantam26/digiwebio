export const SITE_CONFIG = {
  name: "DigiWebIO",
  legalName: "DigiWebIO Digital Technology Agency",
  tagline: "Digital experiences built to move your business forward.",
  domain: "https://digiwebio.in",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://digiwebio.in",
  description: "DigiWebIO is a premier Indian digital technology agency specializing in high-performance websites, custom web applications, mobile apps, UI/UX design, SEO, and enterprise software solutions.",
  keywords: [
    "digital agency india",
    "web development company",
    "website development",
    "web application development",
    "app development",
    "UI UX design",
    "SEO services india",
    "digital marketing",
    "ecommerce development",
    "data analytics",
    "custom software development",
    "ERP dashboard development"
  ],
  contact: {
    email: "contact@digiwebio.in",
    phone: "+91 62689 51339",
    phoneFormatted: "+916268951339",
    whatsappNumber: "916268951339", // E.164 format without plus for wa.me link
    whatsappDefaultMessage: "Hello DigiWebIO team, I would like to discuss a project enquiry.",
    address: {
      street: "Arera Colony / Zone-1",
      city: "Bhopal",
      state: "Madhya Pradesh",
      country: "India",
      pincode: "462001"
    }
  },
  social: {
    linkedin: "https://linkedin.com/company/digiwebio",
    twitter: "https://twitter.com/digiwebio",
    github: "https://github.com/digiwebio",
    instagram: "https://instagram.com/digiwebio"
  },
  services: [
    "Website Development",
    "Web Application Development",
    "App Development",
    "UI/UX Design",
    "E-commerce Development",
    "SEO",
    "Digital Marketing",
    "Social Media Management",
    "Data Analytics",
    "CRM & Admin Dashboards",
    "ERP / Custom Software",
    "Website Maintenance"
  ],
  budgets: [
    "Below ₹10,000",
    "₹10,000–₹25,000",
    "₹25,000–₹50,000",
    "₹50,000–₹1,00,000",
    "₹1,00,000+"
  ]
};

export const getWhatsAppUrl = (customMessage?: string) => {
  const msg = customMessage ? encodeURIComponent(customMessage) : encodeURIComponent(SITE_CONFIG.contact.whatsappDefaultMessage);
  return `https://wa.me/${SITE_CONFIG.contact.whatsappNumber}?text=${msg}`;
};
