"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X, PhoneCall } from "lucide-react";
import { SITE_CONFIG } from "@/lib/config";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Our Projects", href: "/projects" },
  { name: "Team", href: "/team" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0A0B0D]/95 backdrop-blur-md border-b border-[#252830] py-3 shadow-2xl shadow-black/70"
          : "bg-transparent py-4 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Logo Container - Large, Zoomed Image without stretching Header */}
          <Link
            href="/"
            className="flex items-center group focus:outline-none shrink-0"
            onClick={handleNavClick}
          >
            <div className="relative h-12 sm:h-14 w-48 sm:w-60 lg:w-72 flex items-center justify-start overflow-visible">
              <Image
                src="/AppLogo.png"
                alt="DigiWebIO Logo"
                width={400}
                height={120}
                className="h-20 sm:h-24 lg:h-28 w-auto object-contain origin-left scale-[1.7] sm:scale-[1.9] lg:scale-[2.1] transition-transform duration-300 group-hover:scale-[1.8] sm:group-hover:scale-[2.0] lg:group-hover:scale-[2.2]"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#121316]/90 p-1.5 rounded-full border border-[#252830] backdrop-blur-md shadow-inner">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 text-xs font-semibold rounded-full transition-all duration-200 ${
                    isActive
                      ? "bg-[#E2F135] text-[#0A0B0D] shadow-sm shadow-[#E2F135]/20 font-bold"
                      : "text-slate-300 hover:text-white hover:bg-[#191B20]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#E2F135] hover:bg-[#DFFF12] text-[#0A0B0D] font-bold text-xs px-5 py-2.5 rounded-full transition-all duration-200 shadow-lg shadow-[#E2F135]/15 hover:shadow-[#E2F135]/30 hover:scale-[1.03]"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl bg-[#121316] border border-[#252830] text-slate-300 hover:text-white hover:border-[#E2F135] transition-colors focus:outline-none shrink-0"
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6 text-[#E2F135]" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[76px] sm:top-[84px] bg-[#0A0B0D]/98 backdrop-blur-xl border-b border-[#252830] p-6 shadow-2xl animate-in slide-in-from-top-3 duration-200 z-50">
          <div className="flex flex-col gap-2 max-w-md mx-auto">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={handleNavClick}
                  className={`px-4 py-3 text-sm font-semibold rounded-xl transition-all flex items-center justify-between ${
                    isActive
                      ? "bg-[#E2F135] text-[#0A0B0D] font-bold shadow-md"
                      : "text-slate-300 hover:bg-[#121316] hover:text-white border border-transparent hover:border-[#252830]"
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-[#0A0B0D]" />}
                </Link>
              );
            })}

            <div className="pt-4 mt-2 border-t border-[#252830] flex flex-col gap-3">
              <Link
                href="/contact"
                onClick={handleNavClick}
                className="w-full text-center bg-[#E2F135] hover:bg-[#DFFF12] text-[#0A0B0D] font-bold text-sm py-3.5 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-[#E2F135]/20"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <a
                href={`tel:${SITE_CONFIG.contact.phoneFormatted}`}
                className="w-full text-center bg-[#121316] border border-[#252830] text-white font-medium text-xs py-3 rounded-xl flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-3.5 h-3.5 text-[#E2F135]" />
                <span>Call {SITE_CONFIG.contact.phone}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
