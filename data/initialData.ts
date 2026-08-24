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
    slug: "fintech-cloud-dashboard",
    title: "AuraPay Financial Intelligence Portal",
    client: "AuraPay Global",
    category: "Web Application",
    summary: "Real-time analytics dashboard with multi-currency tracking, instant payout triggers, and enterprise security.",
    description: "AuraPay needed a next-generation financial portal to manage over ₹50M in daily cross-border transactions while providing real-time visual telemetry to CFOs.",
    coverImage: "/images/project-fintech.jpg",
    images: ["/images/project-fintech-1.jpg", "/images/project-fintech-2.jpg"],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB", "Framer Motion"],
    challenge: "Handling complex financial telemetry streams without delaying initial page render or degrading mobile UI responsiveness.",
    solution: "Architected a serverless Next.js App Router application with reactive state caching, optimistic UI updates, and custom chart rendering.",
    results: [
      "3.4x Faster page load speed compared to legacy system",
      "99.98% System uptime across peak transaction volume",
      "Over ₹500M processed cleanly in first quarter"
    ],
    testimonial: {
      quote: "DigiWebIO delivered a world-class financial platform that exceeded our performance expectations. Their engineering rigor is unmatched.",
      author: "Vikram Malhotra",
      role: "Chief Technology Officer",
      company: "AuraPay Global"
    },
    liveUrl: "https://digiwebio.in",
    featured: true
  },
  {
    id: "p2",
    slug: "luxury-ecommerce-platform",
    title: "Verve Atelier Luxury Storefront",
    client: "Verve Atelier",
    category: "E-commerce",
    summary: "High-fashion editorial online store featuring fluid micro-animations, rapid cart checkout, and bespoke collection filters.",
    description: "Verve Atelier required a custom e-commerce web platform to showcase high-fashion seasonal collections to an elite international buyer persona.",
    coverImage: "/images/project-ecommerce.jpg",
    images: ["/images/project-ecommerce-1.jpg"],
    technologies: ["Next.js", "Tailwind CSS", "Stripe API", "Mongoose", "Framer Motion"],
    challenge: "Preserving ultra-crisp high-resolution photography without compromising mobile loading speed or Google Lighthouse performance scores.",
    solution: "Implemented Next.js automated image optimization, responsive picture sources, and lazy collection rendering with smooth hover interactions.",
    results: [
      "142% Increase in mobile checkout conversions",
      "Sub-second page load times across Indian & global edge locations",
      "Featured in international design galleries"
    ],
    testimonial: {
      quote: "The visual finesse and technical speed DigiWebIO brought to Verve Atelier elevated our brand perception instantly.",
      author: "Ananya Sharma",
      role: "Creative Director",
      company: "Verve Atelier"
    },
    liveUrl: "https://digiwebio.in",
    featured: true
  },
  {
    id: "p3",
    slug: "healthtech-telemedicine-app",
    title: "PulseHealth Telemedicine & Care Platform",
    client: "PulseHealth India",
    category: "App Development",
    summary: "HIPAA-aligned mobile care portal connecting patients with verified medical specialists across 15+ disciplines.",
    description: "A comprehensive digital health ecosystem enabling video consultations, electronic health record management, and automated prescription delivery.",
    coverImage: "/images/project-healthtech.jpg",
    images: ["/images/project-healthtech-1.jpg"],
    technologies: ["React Native", "Node.js", "MongoDB", "WebRTC", "TypeScript"],
    challenge: "Structuring real-time encrypted video streaming over low-bandwidth mobile networks in tier-2 and tier-3 cities.",
    solution: "Integrated adaptive bitrate WebRTC channels paired with lightweight reactive patient queues and automated SMS fallbacks.",
    results: [
      "Over 45,000+ Successful doctor consultations completed",
      "4.8/5 Star rating across mobile application stores",
      "99.9% Telemedicine session connectivity rate"
    ],
    testimonial: {
      quote: "DigiWebIO understands both high-level system architecture and fine-grain user experience. Outstanding partner.",
      author: "Dr. Rohan Verma",
      role: "Co-Founder & CEO",
      company: "PulseHealth"
    },
    liveUrl: "https://digiwebio.in",
    featured: true
  },
  {
    id: "p4",
    slug: "enterprise-erp-logistics",
    title: "OmniLogistics Fleet & Inventory ERP",
    client: "OmniLogistics Supply Chain",
    category: "ERP / Custom Software",
    summary: "Bespoke fleet telemetry, warehouse dispatch tracking, and automated client billing dashboard.",
    description: "An end-to-end custom software solution built for a regional logistics provider operating 300+ transport vehicles and 5 distribution hubs.",
    coverImage: "/images/project-erp.jpg",
    images: ["/images/project-erp-1.jpg"],
    technologies: ["Next.js", "Node.js", "MongoDB", "Tailwind CSS", "Express"],
    challenge: "Replacing fragmented paper spreadsheets and legacy desktop software with a secure cloud-first web system.",
    solution: "Built a centralized admin portal with role-based access control, instant PDF generation, and automated driver dispatch notifications.",
    results: [
      "Eliminated 150+ hours of monthly manual billing calculations",
      "Zero dispatch errors across 10,000+ monthly shipments",
      "Complete real-time visibility across all 5 distribution centers"
    ],
    testimonial: {
      quote: "Our operations became 300% more efficient within 60 days of deploying the DigiWebIO custom ERP system.",
      author: "Sanjeev Gupta",
      role: "VP of Operations",
      company: "OmniLogistics"
    },
    liveUrl: "https://digiwebio.in",
    featured: false
  }
];

export const TEAM_MEMBERS_DATA: TeamMemberItem[] = [
  {
    id: "founder",
    name: "Muskan Tamrakar",
    role: "Founder & Full-Stack Developer",
    initials: "MT",
    photo: "/images/founder-muskan.png",
    bio: "I build digital experiences that combine clean design, practical technology, and real business needs.",
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
      role: "Lead Full-Stack Architect",
      avatar: "/images/team-muskan.jpg"
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
      name: "Arjun Mehta",
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
      name: "Sneha Reddy",
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
