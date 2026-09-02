import { ServiceItem, ProjectItem, TeamMemberItem, BlogPostItem, ProcessStep } from "@/types";

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "s1",
    slug: "website-development",
    title: "Website Development",
    shortDesc: "High-performance, responsive websites built with Next.js & React designed for maximum conversion.",
    fullDesc: "We build modern, ultra-fast websites designed to captivate your audience and turn visitors into loyal clients. Combining bespoke visual aesthetic with rock-solid server-side performance.",
    iconName: "Globe",
    category: "development",
    deliverables: ["Custom Next.js/React Architecture", "Responsive Design (Mobile-First)", "Core Web Vitals Optimization", "CMS Integration"],
    technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript"]
  },
  {
    id: "s2",
    slug: "web-application-development",
    title: "Web Application Development",
    shortDesc: "Scalable SaaS platforms, customer portals, and interactive cloud applications tailored to your business logic.",
    fullDesc: "Engineered from the ground up to solve complex operational challenges. Our full-stack web applications feature secure APIs, real-time sync, and fluid reactive interfaces.",
    iconName: "Code2",
    category: "development",
    deliverables: ["Full-Stack Architecture", "REST & GraphQL APIs", "Database Modeling", "Real-Time WebSockets"],
    technologies: ["Node.js", "Next.js", "MongoDB", "Express", "TypeScript"]
  },
  {
    id: "s3",
    slug: "app-development",
    title: "App Development",
    shortDesc: "Native and cross-platform mobile apps for iOS and Android built for seamless mobile experiences.",
    fullDesc: "Delivering fluid mobile applications that feel native on every screen size. From intuitive UI flows to background sync and secure payment gateways.",
    iconName: "Smartphone",
    category: "development",
    deliverables: ["Cross-Platform Mobile Apps", "App Store & Play Store Deployment", "Offline Capabilities", "Push Notifications"],
    technologies: ["React Native", "Flutter", "TypeScript", "Firebase"]
  },
  {
    id: "s4",
    slug: "ui-ux-design",
    title: "UI/UX Design",
    shortDesc: "Human-centered digital design systems, interactive prototypes, and conversion-optimized interfaces.",
    fullDesc: "Design is not just how it looks; it's how it works. We combine user research, wireframing, and editorial design aesthetic to create intuitive user journeys.",
    iconName: "Palette",
    category: "design",
    deliverables: ["User Journey Mapping", "Figma Design Systems", "Interactive Wireframes", "Usability Testing"],
    technologies: ["Figma", "Design Systems", "Prototyping", "Micro-interactions"]
  },
  {
    id: "s5",
    slug: "e-commerce-development",
    title: "E-commerce Development",
    shortDesc: "High-converting online stores, custom storefronts, and seamless payment gateway integrations.",
    fullDesc: "Empower your business with custom e-commerce solutions built for speed, security, and high volume checkout transactions across all devices.",
    iconName: "ShoppingBag",
    category: "development",
    deliverables: ["Custom Storefronts", "Razorpay / Stripe Payments", "Inventory Management", "Cart & Checkout Flow"],
    technologies: ["Next.js Commerce", "Shopify Headless", "MongoDB", "Stripe API"]
  },
  {
    id: "s6",
    slug: "seo",
    title: "SEO (Search Engine Optimization)",
    shortDesc: "Data-backed technical SEO, content strategy, and search visibility to rank higher organically.",
    fullDesc: "Dominate search results naturally. We optimize site architecture, performance metrics, schema markup, and content hierarchy to drive qualified Indian & global leads.",
    iconName: "Search",
    category: "marketing",
    deliverables: ["Technical SEO Audits", "Schema JSON-LD Injection", "Keyword & Intent Strategy", "Performance Optimization"],
    technologies: ["Google Search Console", "Screaming Frog", "Structured Data", "Lighthouse"]
  },
  {
    id: "s7",
    slug: "digital-marketing",
    title: "Digital Marketing",
    shortDesc: "Strategic performance marketing campaigns on Google Ads & Meta to maximize your ROI.",
    fullDesc: "Data-driven marketing strategies engineered to scale brand awareness, generate verified sales leads, and lower customer acquisition costs.",
    iconName: "TrendingUp",
    category: "marketing",
    deliverables: ["PPC Campaign Management", "Meta & Google Ads Strategy", "Conversion Tracking", "Lead Generation Funnels"],
    technologies: ["Google Ads", "Meta Business Suite", "Analytics 4", "Tag Manager"]
  },
  {
    id: "s8",
    slug: "social-media-management",
    title: "Social Media Management",
    shortDesc: "End-to-end content creation, brand storytelling, and community growth strategy across platforms.",
    fullDesc: "Build an active, engaged audience around your digital brand with consistent social content design, strategic messaging, and community interactions.",
    iconName: "Share2",
    category: "marketing",
    deliverables: ["Content Calendar & Strategy", "Graphics & Motion Design", "Audience Engagement", "Performance Reports"],
    technologies: ["Figma", "Adobe Suite", "Buffer", "Analytics"]
  },
  {
    id: "s9",
    slug: "data-analytics",
    title: "Data Analytics",
    shortDesc: "Business intelligence dashboards, event tracking, and actionable insights to guide growth.",
    fullDesc: "Transform raw website and application traffic data into clear strategic directives with custom business intelligence dashboards and behavioral analytics.",
    iconName: "BarChart3",
    category: "enterprise",
    deliverables: ["Custom Dashboard Design", "User Behavior Analytics", "Funnel Conversion Analysis", "Event Tracking"],
    technologies: ["GA4", "Mixpanel", "Recharts", "PostgreSQL / MongoDB"]
  },
  {
    id: "s10",
    slug: "crm-admin-dashboards",
    title: "CRM & Admin Dashboards",
    shortDesc: "Custom administrative portals, lead tracking workflows, and operational command centers.",
    fullDesc: "Streamline your internal team operations with tailor-made administrative dashboards, automated lead routing, and customer lifecycle management systems.",
    iconName: "LayoutDashboard",
    category: "enterprise",
    deliverables: ["Role-Based Access Control", "Lead Management Flow", "Automated Reporting", "Export Data Utilities"],
    technologies: ["Next.js", "Tailwind CSS", "Mongoose", "JWT/Auth"]
  },
  {
    id: "s11",
    slug: "erp-custom-software",
    title: "ERP / Custom Software",
    shortDesc: "Bespoke enterprise resource software built for complex inventory, billing, and workflow automation.",
    fullDesc: "Automate complex business operations with customized ERP modules engineered specifically for your company's workflows, inventory, and financial tracking.",
    iconName: "Cpu",
    category: "enterprise",
    deliverables: ["Bespoke ERP Engineering", "Inventory & Warehouse Modules", "Billing & Invoice Generation", "API Integrations"],
    technologies: ["Node.js", "MongoDB", "Express", "Microservices"]
  },
  {
    id: "s12",
    slug: "website-maintenance",
    title: "Website Maintenance",
    shortDesc: "Proactive uptime monitoring, security patching, cloud backups, and ongoing feature enhancements.",
    fullDesc: "Keep your digital presence secure, bug-free, and blazingly fast with our ongoing monthly engineering maintenance and performance optimization retainers.",
    iconName: "ShieldCheck",
    category: "development",
    deliverables: ["24/7 Uptime Monitoring", "Security Vulnerability Audits", "Daily/Weekly Backups", "Content Updates"],
    technologies: ["Vercel", "AWS", "GitHub Actions", "Lighthouse"]
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Discover",
    tagline: "Uncovering goals & business context",
    description: "We initiate every project with a detailed discovery session to understand your business objectives, target audience, competitive landscape, and key performance indicators.",
    deliverables: ["Discovery Deck", "Project Roadmap", "Technical Requirements Document"]
  },
  {
    number: "02",
    title: "Strategy",
    tagline: "Architecting the solution roadmap",
    description: "Our technical leads map out the software architecture, select optimal technology stacks, and define the user flow hierarchy before writing a single line of code.",
    deliverables: ["System Architecture Diagram", "Content Blueprint", "SEO & Keyword Strategy"]
  },
  {
    number: "03",
    title: "Design",
    tagline: "Creating bespoke visual systems",
    description: "We craft editorial-grade wireframes and interactive visual prototypes that align with your brand identity and maximize conversion potential.",
    deliverables: ["Figma Design Systems", "Interactive Prototypes", "Responsive UI Layouts"]
  },
  {
    number: "04",
    title: "Development",
    tagline: "Engineering with modern precision",
    description: "Our engineers build your web application using Next.js, React, TypeScript, and clean modular code adhering to modern web performance standards.",
    deliverables: ["Clean Production Code", "Staging Environment", "API Documentation"]
  },
  {
    number: "05",
    title: "Testing",
    tagline: "Rigorous quality assurance & audit",
    description: "We conduct end-to-end testing across 10+ viewport sizes, perform cross-browser audits, run security vulnerability scans, and optimize Core Web Vitals.",
    deliverables: ["QA Audit Report", "Lighthouse 90+ Score", "Cross-Browser Verification"]
  },
  {
    number: "06",
    title: "Launch",
    tagline: "Seamless production deployment",
    description: "We handle domain DNS configurations, SSL security certificates, serverless cloud deployment, and index verification on search engines.",
    deliverables: ["Production Cloud Deployment", "Google Indexing Submission", "DNS & SSL Setup"]
  },
  {
    number: "07",
    title: "Support",
    tagline: "Continuous growth & maintenance",
    description: "Post-launch, DigiWebIO stays by your side with 24/7 monitoring, speed retention, performance analytics, and ongoing feature updates.",
    deliverables: ["Uptime Monitoring", "Monthly Maintenance Report", "Priority Technical Retainer"]
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "p1",
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
    id: "p2",
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
    id: "p3",
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
    id: "p4",
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
    id: "p5",
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

export const TEAM_MEMBERS_DATA: TeamMemberItem[] = [
  {
    id: "founder",
    name: "Muskan Tamrakar",
    role: "Founder & Web Developer",
    initials: "MT",
    photo: "/images/muskantamfounder.jpeg",
    bio: "DigiWebIO was founded by Muskan Tamrakar, a web developer .",
    isFounder: true,
    expertise: ["Web Development", "UI/UX", "Full-Stack Development"],
    iconName: "User"
  },
  {
    id: "web-dev",
    name: "Web Development",
    role: "Web Developer / Development Team",
    initials: "WEB",
    bio: "Building responsive websites and web applications with modern technologies.",
    isFounder: false,
    expertise: ["Next.js & React", "TypeScript", "Performance & SEO"],
    iconName: "Code2"
  },
  {
    id: "ui-ux",
    name: "UI/UX Design",
    role: "UI/UX Designer / Design Team",
    initials: "UI/UX",
    bio: "Designing intuitive, engaging, and user-friendly digital experiences.",
    isFounder: false,
    expertise: ["User Interface", "Design Systems", "Prototyping"],
    iconName: "Palette"
  },
  {
    id: "social-media",
    name: "Social Media",
    role: "Social Media Specialist / Social Media Team",
    initials: "SM",
    bio: "Helping businesses build a consistent and engaging presence across social platforms.",
    isFounder: false,
    expertise: ["Content Strategy", "Brand Awareness", "Audience Growth"],
    iconName: "Share2"
  }
];

export const BLOG_POSTS_DATA: BlogPostItem[] = [
  {
    id: "b1",
    slug: "building-high-performance-nextjs-app-router",
    title: "Building Sub-Second Next.js App Router Websites for Indian Tech Agencies",
    summary: "How we optimize server components, streaming SSR, and image pipelines to achieve 95+ Google Lighthouse scores consistently.",
    content: `
      ## The Engineering Behind Sub-Second Web Performance

      In modern digital business, speed is directly tied to revenue conversions. A delay of just 500 milliseconds can reduce user engagement by over 20%. At DigiWebIO, our architectural philosophy prioritizes performance from day zero.

      ### 1. Server Components First Strategy
      By leveraging Next.js React Server Components by default, we minimize client-side JavaScript bundle sizes. Only interactive widgets (like custom contact forms or animated accordions) are hydrated on the client.

      ### 2. Tailored Image Optimization
      Instead of serving heavy JPEG/PNG assets, we automatically convert media to WebP/AVIF formats with exact layout dimensions, preventing Layout Shift (CLS).

      ### 3. Edge-Cached API Responses & DB Connection Reuse
      In serverless environments, repeatedly instantiating MongoDB connections creates noticeable latency. We use global connection pooling to keep warm database instances ready for queries.
    `,
    coverImage: "/images/blog-nextjs.jpg",
    category: "Engineering",
    author: {
      name: "Muskan",
      role: "Founder & Web Developer",
      avatar: "/images/muskantamfounder.jpeg"
    },
    publishedAt: "2026-08-20",
    readTime: "6 min read",
    tags: ["Next.js", "Web Performance", "TypeScript", "App Router"],
    featured: true
  },
  {
    id: "b2",
    slug: "why-custom-web-apps-beat-generic-templates",
    title: "Why Indian Businesses Are Ditching Generic Templates for Bespoke Web Code",
    summary: "Template sites are bloated with unused CSS, security vulnerabilities, and generic visuals. Discover why custom code wins long term.",
    content: `
      ## The Hidden Cost of Off-The-Shelf Templates

      While generic site builders promise quick launches, growing companies quickly hit severe architectural ceilings.

      ### Bloated Code & Slow Load Times
      Generic themes bundle hundreds of unused plugins and stylesheets, resulting in poor Core Web Vitals and lower Google search rankings.

      ### Security & Scalability Vulnerabilities
      Outdated plugins are the leading entry point for automated security breaches. Bespoke Next.js application logic with server-side validation eliminates standard vector attacks.

      ### Brand Originality
      A custom digital experience built around your exact visual brand identity instills trust and establishes market authority immediately.
    `,
    coverImage: "/images/blog-custom-code.jpg",
    category: "Strategy",
    author: {
      name: "Mukul",
      role: "Design Systems Engineer",
      avatar: "/images/team-arjun.jpg"
    },
    publishedAt: "2026-08-15",
    readTime: "5 min read",
    tags: ["Web Architecture", "UI UX", "Branding", "Custom Software"],
    featured: true
  },
  {
    id: "b3",
    slug: "technical-seo-guide-2026",
    title: "Technical SEO in 2026: Schema JSON-LD, Core Web Vitals & AI Search Indexing",
    summary: "A practical guide to structuring technical SEO markup so search engines and AI agents properly digest and cite your business.",
    content: `
      ## Navigating Search Optimization in 2026

      Modern search engines demand clear semantic structure and fast performance metrics.

      ### Structured Data (JSON-LD)
      Injecting LocalBusiness and Organization JSON-LD markup allows search bots to understand your company address, services, and social handles clearly.

      ### Cumulative Layout Shift (CLS) Zero Targets
      Ensure all visual elements specify aspect ratios and font fallback parameters so pages render smoothly without sudden layout shifts.
    `,
    coverImage: "/images/blog-seo.jpg",
    category: "SEO & Growth",
    author: {
      name: "Sneha ",
      role: "SEO Specialist",
      avatar: "/images/team-sneha.jpg"
    },
    publishedAt: "2026-08-10",
    readTime: "7 min read",
    tags: ["SEO", "JSON-LD", "Search Console", "Google Core Vitals"],
    featured: false
  }
];

export const AGENCY_STATS = [
  { label: "Successful Projects", value: "85+", suffix: "" },
  { label: "Client Satisfaction", value: "99.4%", suffix: "" },
  { label: "Core Web Vitals", value: "95+", suffix: " Score" },
  { label: "Tech Stack Expertise", value: "12+", suffix: " Frameworks" }
];

export const FAQS_DATA = [
  {
    q: "What types of services does DigiWebIO provide?",
    a: "We offer end-to-end digital solutions including Custom Website Development, Scalable Web Applications, Mobile App Development, UI/UX Design, E-commerce Platforms, Technical SEO, Performance Marketing, CRM & Admin Dashboards, and Custom ERP Software."
  },
  {
    q: "How long does a typical web application or website project take?",
    a: "Custom marketing websites typically take 2 to 4 weeks, while complex full-stack web applications or custom ERP platforms take 6 to 12 weeks depending on scope, features, and database requirements."
  },
  {
    q: "What is the typical project budget required to work with DigiWebIO?",
    a: "We accommodate projects ranging from small business websites starting under ₹10,000 up to enterprise custom software solutions above ₹1,00,000+. Every quote is transparently itemized."
  },
  {
    q: "Will my website be fully responsive on mobile devices?",
    a: "Yes! Every digital product engineered by DigiWebIO is tested across 375px, 390px, 768px, 1024px, and 1440px viewports to ensure seamless responsiveness, fast loading, and fluid navigation."
  },
  {
    q: "Do you provide website maintenance and support post-launch?",
    a: "Absolutely. We offer ongoing maintenance retainers covering server uptime monitoring, security patching, speed optimization, regular database backups, and feature enhancements."
  }
];
