const mongoose = require("mongoose");

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/digiwebio";

const ProjectSchema = new mongoose.Schema(
  {
    slug: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    client: { type: String, required: true },
    category: { type: String, required: true },
    summary: { type: String, required: true },
    description: { type: String, required: true },
    coverImage: { type: String, required: true },
    images: [{ type: String }],
    technologies: [{ type: String }],
    challenge: { type: String, required: true },
    solution: { type: String, required: true },
    results: [{ type: String }],
    liveUrl: { type: String },
    featured: { type: Boolean, default: false },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const EnquirySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    company: { type: String, default: "" },
    service: { type: String, required: true },
    message: { type: String, required: true },
    status: { type: String, default: "New" },
    ipAddress: { type: String, default: "127.0.0.1" },
  },
  { timestamps: true }
);

const Project = mongoose.models.Project || mongoose.model("Project", ProjectSchema);
const Enquiry = mongoose.models.Enquiry || mongoose.model("Enquiry", EnquirySchema);

const PROJECTS_DATA = [
  {
    slug: "royal-crest-livid",
    title: "Royal Crest Luxury Estate",
    client: "Royal Crest Realty",
    category: "Full Stack Web App",
    summary: "A high-conversion luxury real estate platform featuring interactive property filters and custom lead routing.",
    description: "Architected a custom digital showcase for Royal Crest Realty featuring virtual property tours, real-time lead capture, and ultra-fast Next.js performance.",
    coverImage: "/images/project-royalcrest.jpg",
    images: ["/images/project-royalcrest.jpg"],
    technologies: ["Next.js", "TypeScript", "TailwindCSS", "Framer Motion", "MongoDB"],
    challenge: "Traditional templates were sluggish and lacked instant lead capture.",
    solution: "Built a customized web platform with high Core Web Vitals score and instant inquiry routing.",
    results: ["340% increase in luxury inquiries", "Sub-second initial page load", "100/100 Lighthouse Performance"],
    liveUrl: "https://royalcrest-livid.vercel.app/",
    featured: true,
    order: 1
  },
  {
    slug: "coaching-web-sigma",
    title: "EduPulse Academy Platform",
    client: "EduPulse Coaching",
    category: "EdTech Platform",
    summary: "Comprehensive student enrollment portal with course catalog, schedule booking, and parent inquiry system.",
    description: "Designed and engineered a complete digital presence for an elite coaching academy, boosting online course signups significantly.",
    coverImage: "/images/project-coaching.jpg",
    images: ["/images/project-coaching.jpg"],
    technologies: ["Next.js", "React", "TailwindCSS", "Express", "Node.js"],
    challenge: "Manual student registrations caused administrative bottlenecks during peak admission seasons.",
    solution: "Automated student onboarding, course brochure downloads, and inquiry workflows.",
    results: ["5x increase in online leads", "Zero downtime during admission peak", "Automated email notifications"],
    liveUrl: "https://coaching-web-sigma.vercel.app/",
    featured: true,
    order: 2
  },
  {
    slug: "kanhacollection",
    title: "Kanha Fashion E-Commerce",
    client: "Kanha Ethnic Wear",
    category: "E-Commerce",
    summary: "Modern e-commerce storefront showcasing premium ethnic wear with intuitive filters and fast checkout flow.",
    description: "Created a modern storefront for traditional ethnic apparel featuring rich product media, WhatsApp instant order placement, and seamless mobile UX.",
    coverImage: "/images/project-kanha.jpg",
    images: ["/images/project-kanha.jpg"],
    technologies: ["Next.js", "TypeScript", "TailwindCSS", "MongoDB"],
    challenge: "Mobile visitors struggled with slow image loading and complex checkout steps.",
    solution: "Designed a lightweight, mobile-first product layout with instant WhatsApp order generation.",
    results: ["65% boost in mobile conversions", "Fast image optimization", "Smooth catalog browsing"],
    liveUrl: "https://kanhacollection.vercel.app/",
    featured: true,
    order: 3
  },
  {
    slug: "dr-faisal-portfolio",
    title: "Dr. Faisal Healthcare Portal",
    client: "Dr. Faisal Clinic",
    category: "Healthcare",
    summary: "Professional medical consultation website with direct patient appointment booking and clinic locator.",
    description: "Engineered a trustworthy healthcare portal providing patient education, clinic locations, and streamlined online appointment requests.",
    coverImage: "/images/project-drfaisal.jpg",
    images: ["/images/project-drfaisal.jpg"],
    technologies: ["Next.js", "TypeScript", "TailwindCSS", "Framer Motion"],
    challenge: "Patients found it difficult to find availability schedules and locate regional clinics.",
    solution: "Integrated a clear booking interface and direct call/WhatsApp emergency buttons.",
    results: ["80% increase in online appointment bookings", "Sub-1s mobile load time", "Zero user friction"],
    liveUrl: "https://dr-faisal-portfolio.vercel.app/",
    featured: true,
    order: 4
  },
  {
    slug: "wearixproject",
    title: "Wearix Apparel Brand Showcase",
    client: "Wearix Fashion Tech",
    category: "Full Stack Web App",
    summary: "Next-generation streetwear brand showcase featuring animated product interactions and modern editorial aesthetic.",
    description: "Crafted a high-energy digital brand showcase tailored for a youth streetwear label, complete with micro-animations and dynamic collection highlights.",
    coverImage: "/images/project-wearix.jpg",
    images: ["/images/project-wearix.jpg"],
    technologies: ["Next.js", "React", "TailwindCSS", "Framer Motion"],
    challenge: "Standard e-commerce layouts failed to reflect the energetic brand identity.",
    solution: "Built a customized editorial layout with interactive hover states and rich visual aesthetics.",
    results: ["220% increase in user engagement time", "Featured design award nominee", "Ultra-fast responsiveness"],
    liveUrl: "https://wearixproject.framer.website/",
    featured: true,
    order: 5
  }
];

async function seed() {
  try {
    console.log(`Connecting to MongoDB at ${MONGODB_URI}...`);
    await mongoose.connect(MONGODB_URI);
    console.log("Connected successfully!");

    // Seed Projects
    for (const projectData of PROJECTS_DATA) {
      await Project.findOneAndUpdate(
        { slug: projectData.slug },
        projectData,
        { upsert: true, returnDocument: 'after', setDefaultsOnInsert: true }
      );
    }
    const projectCount = await Project.countDocuments();
    console.log(`[Database Verified] Collection 'projects' has ${projectCount} items in 'digiwebio' database.`);

    // Seed Sample Enquiry if empty
    const enquiryCount = await Enquiry.countDocuments();
    if (enquiryCount === 0) {
      await Enquiry.create({
        name: "Muskan Sharma",
        email: "developermuskan26@gmail.com",
        phone: "+91 62689 51339",
        company: "DigiWebIO Studio",
        service: "Full Stack Web App",
        message: "Initial sample enquiry to initialize local database collection.",
        status: "New",
        ipAddress: "127.0.0.1"
      });
      console.log(`[Database Verified] Collection 'enquiries' initialized in 'digiwebio' database.`);
    } else {
      console.log(`[Database Verified] Collection 'enquiries' has ${enquiryCount} records.`);
    }

    process.exit(0);
  } catch (err) {
    console.error("Seeding error:", err);
    process.exit(1);
  }
}

seed();
