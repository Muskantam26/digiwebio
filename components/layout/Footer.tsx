import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Mail, Phone, MapPin, MessageSquare } from "lucide-react";
import { SITE_CONFIG, getWhatsAppUrl } from "@/lib/config";
import { LinkedInIcon, TwitterIcon, GitHubIcon, InstagramIcon } from "@/components/ui/SocialIcons";

export default function Footer() {
  return (
    <footer className="bg-[#07080A] border-t border-[#252830] pt-16 pb-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Upper CTA Banner */}
        <div className="bg-[#121316] border border-[#252830] rounded-2xl p-8 md:p-12 mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#E2F135]/5 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="inline-block text-[#E2F135] text-xs uppercase tracking-widest font-semibold mb-2">
                Ready to Accelerate Your Digital Growth?
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Let&apos;s build something extraordinary together.
              </h2>
              <p className="mt-3 text-slate-300 text-sm leading-relaxed">
                Partner with DigiWebIO to transform your ideas into scalable web applications, modern websites, and high-converting digital products.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#E2F135] hover:bg-[#DFFF12] text-[#0A0B0D] font-bold text-sm px-6 py-3.5 rounded-full transition-all duration-200 shadow-lg shadow-[#E2F135]/15 hover:scale-105"
              >
                <span>Start Your Project</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#191B20] hover:bg-[#252830] text-white border border-[#252830] hover:border-[#E2F135]/50 font-semibold text-sm px-6 py-3.5 rounded-full transition-all duration-200"
              >
                <MessageSquare className="w-4 h-4 text-[#E2F135]" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#191B20]">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="inline-flex items-center group focus:outline-none mb-4"
            >
              <div className="relative h-12 w-48 sm:w-56 flex items-center justify-start overflow-visible">
                <Image
                  src="/AppLogo.png"
                  alt="DigiWebIO Logo"
                  width={400}
                  height={120}
                  className="h-20 sm:h-24 w-auto object-contain origin-left scale-[1.7] sm:scale-[1.9] transition-transform duration-300 group-hover:scale-[1.8] sm:group-hover:scale-[2.0]"
                />
              </div>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed mb-6 max-w-sm">
              {SITE_CONFIG.description}
            </p>
            <div className="flex items-center gap-3">
              <a
                href={SITE_CONFIG.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#121316] border border-[#252830] flex items-center justify-center text-slate-300 hover:text-[#E2F135] hover:border-[#E2F135] transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="w-4 h-4" />
              </a>
              <a
                href={SITE_CONFIG.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#121316] border border-[#252830] flex items-center justify-center text-slate-300 hover:text-[#E2F135] hover:border-[#E2F135] transition-colors"
                aria-label="Twitter"
              >
                <TwitterIcon className="w-4 h-4" />
              </a>
              <a
                href={SITE_CONFIG.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#121316] border border-[#252830] flex items-center justify-center text-slate-300 hover:text-[#E2F135] hover:border-[#E2F135] transition-colors"
                aria-label="GitHub"
              >
                <GitHubIcon className="w-4 h-4" />
              </a>
              <a
                href={SITE_CONFIG.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#121316] border border-[#252830] flex items-center justify-center text-slate-300 hover:text-[#E2F135] hover:border-[#E2F135] transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-white text-sm font-semibold tracking-wider uppercase mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/" className="hover:text-[#E2F135] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#E2F135] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#E2F135] transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-[#E2F135] transition-colors">
                  Case Studies & Work
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-[#E2F135] transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#E2F135] transition-colors">
                  Blog & Insights
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#E2F135] transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Core Services Column */}
          <div>
            <h3 className="text-white text-sm font-semibold tracking-wider uppercase mb-4">
              Services
            </h3>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/services#website-development" className="hover:text-[#E2F135] transition-colors">
                  Website Development
                </Link>
              </li>
              <li>
                <Link href="/services#web-application-development" className="hover:text-[#E2F135] transition-colors">
                  Web Application Dev
                </Link>
              </li>
              <li>
                <Link href="/services#app-development" className="hover:text-[#E2F135] transition-colors">
                  App Development
                </Link>
              </li>
              <li>
                <Link href="/services#ui-ux-design" className="hover:text-[#E2F135] transition-colors">
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link href="/services#seo" className="hover:text-[#E2F135] transition-colors">
                  SEO & Search Optimization
                </Link>
              </li>
              <li>
                <Link href="/services#crm-admin-dashboards" className="hover:text-[#E2F135] transition-colors">
                  CRM & Dashboards
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div>
            <h3 className="text-white text-sm font-semibold tracking-wider uppercase mb-4">
              Get in Touch
            </h3>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#E2F135] shrink-0 mt-0.5" />
                <span>{SITE_CONFIG.contact.address.street}, {SITE_CONFIG.contact.address.city}, {SITE_CONFIG.contact.address.country}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#E2F135] shrink-0" />
                <a href={`mailto:${SITE_CONFIG.contact.email}`} className="hover:text-white transition-colors">
                  {SITE_CONFIG.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#E2F135] shrink-0" />
                <a href={`tel:${SITE_CONFIG.contact.phoneFormatted}`} className="hover:text-white transition-colors">
                  {SITE_CONFIG.contact.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-[#E2F135] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[#E2F135] transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
