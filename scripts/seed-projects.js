const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");

// Load .env.local manually
const envPath = path.join(__dirname, "..", ".env.local");
let dbUri = "";
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, "utf8");
  const match = envContent.match(/^MONGODB_URI=(.+)$/m);
  if (match) {
    dbUri = match[1].trim();
  }
}

if (!dbUri) {
  console.error("Error: MONGODB_URI not found in .env.local");
  process.exit(1);
}

// Define Schema manually to avoid TS compilation issues
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

const Project = mongoose.models.Project || mongoose.model("Project", ProjectSchema);

const projects = [
  {
    order: 1,
    slug: "royal-crest-livid",
    title: "Royal Crest Residency",
    client: "Royal Crest",
    category: "Web Application",
    summary: "A premium real estate portal showcasing luxury apartments, floor plans, and online booking integrations.",
    description: "Designed and engineered a high-end web presence for Royal Crest Residency, enabling prospective buyers to browse property layouts, request tours, and make deposits.",
    coverImage: "/images/project-royalcrest.jpg",
    images: ["/images/project-royalcrest.jpg"],
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    challenge: "Rendering large-scale 3D asset walkthroughs and interactive layout models while keeping the page lightweight and fast on mobile networks.",
    solution: "Leveraged lazy loading, optimized code splitting, and WebGL component bundling inside Next.js to deliver responsive interactivity under 2 seconds.",
    results: [
      "250% Increase in online virtual tour bookings",
      "Average load time reduced to 1.8 seconds on 4G networks",
      "95+ Google Lighthouse Performance Score"
    ],
    liveUrl: "https://royal-crest-livid.vercel.app",
    featured: true
  },
  {
    order: 2,
    slug: "coaching-web-sigma",
    title: "Sigma Coaching Academy",
    client: "Sigma Academy",
    category: "Educational Portal",
    summary: "Interactive educational website with course listings, online registration, and student learning portal.",
    description: "Built a robust marketing site and learning portal for Sigma Coaching Academy, streamlining enrollment processes and publishing courses.",
    coverImage: "/images/project-coaching.jpg",
    images: ["/images/project-coaching.jpg"],
    technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    challenge: "Migrating from manual offline registration forms to a secure, online enrollment funnel that processes course fees instantly.",
    solution: "Integrated a custom registration portal with automated notification emails and real-time status tracking.",
    results: [
      "Over 12,000 students enrolled online in first month",
      "Reduced staff administrative overhead by 60%",
      "Zero registration errors during peak admission hours"
    ],
    liveUrl: "https://coaching-web-sigma.vercel.app/",
    featured: true
  },
  {
    order: 3,
    slug: "kanhacollection",
    title: "Kanha Collection",
    client: "Kanha Boutique",
    category: "E-commerce Store",
    summary: "High-end traditional Indian clothing and jewelry store with digital catalog, payment integrations, and cart flows.",
    description: "Created a high-fidelity digital storefront for Kanha Collection, showcasing custom-designed bridal wear, traditional attire, and premium jewelry.",
    coverImage: "/images/project-kanha.jpg",
    images: ["/images/project-kanha.jpg"],
    technologies: ["Framer", "E-commerce Integration", "UI/UX Design", "Stripe"],
    challenge: "Displaying detailed texture patterns and high-definition jewelry images without creating visual lag during scrolling.",
    solution: "Implemented asset optimization and structured layout frames in Framer for smooth performance and rapid page responses.",
    results: [
      "40% Growth in online international orders",
      "150k+ Monthly unique website pageviews",
      "Sub-second interactive catalog transition speed"
    ],
    liveUrl: "https://kanhacollection.framer.website/",
    featured: true
  },
  {
    order: 4,
    slug: "drfaisalzia",
    title: "Dr. Faisal Zia Clinic",
    client: "Dr. Faisal Zia",
    category: "Healthcare Portfolio",
    summary: "Professional medical portfolio and booking portal for a leading consultant practitioner.",
    description: "Designed a clean, professional medical site for Dr. Faisal Zia, showcasing qualifications, specialized medical research, and integrated online scheduling.",
    coverImage: "/images/project-drfaisal.jpg",
    images: ["/images/project-drfaisal.jpg"],
    technologies: ["Framer", "UI/UX Design", "Appointment Scheduling"],
    challenge: "Providing patient information and resources that meet healthcare design standards while making booking a doctor's visit simple and direct.",
    solution: "Constructed an intuitive multi-step booking process with an easy-to-use patient resource index.",
    results: [
      "80% Increase in online patient appointments booked",
      "Reduced clinic phone inquiry volume by 35%",
      "Accessible design compliant with modern accessibility standards"
    ],
    liveUrl: "https://drfaisalzia.framer.website/",
    featured: true
  },
  {
    order: 5,
    slug: "wearixproject",
    title: "Wearix Fashion Studio",
    client: "Wearix Co.",
    category: "Apparel Landing Page",
    summary: "Urban streetwear clothing brand landing page showcasing modern aesthetic collections.",
    description: "Developed a modern, interactive streetwear landing page for Wearix, featuring motion-driven gallery slides and direct digital shopping links.",
    coverImage: "/images/project-wearix.jpg",
    images: ["/images/project-wearix.jpg"],
    technologies: ["Framer", "Interaction Design", "Apparel Catalog"],
    challenge: "Capturing the bold, youth-oriented aesthetic of the brand through animations without causing stuttering on older mobile processors.",
    solution: "Optimized vector layout triggers and hardware-accelerated animations within Framer to ensure smooth 60fps scrolling.",
    results: [
      "2x Higher click-through rate to product product pages",
      "Featured on multiple design inspiration websites",
      "Perfect mobile view performance across all iOS and Android versions"
    ],
    liveUrl: "https://wearixproject.framer.website/",
    featured: true
  }
];

async function seed() {
  try {
    console.log("Connecting to database...");
    await mongoose.connect(dbUri);
    console.log("Connected successfully!");

    console.log("Clearing existing projects...");
    await Project.deleteMany({});
    console.log("Cleared!");

    console.log("Seeding new projects...");
    await Project.insertMany(projects);
    console.log("Database seeded successfully!");
    
    process.exit(0);
  } catch (error) {
    console.error("Seeding error:", error);
    process.exit(1);
  }
}

seed();
