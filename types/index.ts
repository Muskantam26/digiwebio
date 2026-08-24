export interface ServiceItem {
  id: string;
  title: string;
  slug: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  category: 'development' | 'design' | 'marketing' | 'enterprise';
  deliverables: string[];
  technologies: string[];
}

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  client: string;
  category: string;
  summary: string;
  description: string;
  coverImage: string;
  images: string[];
  technologies: string[];
  challenge: string;
  solution: string;
  results: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    company: string;
  };
  liveUrl?: string;
  featured: boolean;
}

export interface TeamMemberItem {
  id: string;
  name: string;
  role: string;
  bio: string;
  initials?: string;
  photo?: string;
  order?: number;
  expertise?: string[];
  isFounder?: boolean;
  iconName?: string;
  socialLinks?: {
    linkedin?: string;
    github?: string;
    twitter?: string;
    email?: string;
  };
  isPlaceholder?: boolean;
}

export interface BlogPostItem {
  id: string;
  slug: string;
  title: string;
  summary: string;
  content: string;
  coverImage: string;
  category: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  publishedAt: string;
  readTime: string;
  tags: string[];
  featured: boolean;
}

export interface LeadFormData {
  fullName: string;
  email: string;
  phone: string;
  company?: string;
  service: string;
  budget: string;
  description: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
}
