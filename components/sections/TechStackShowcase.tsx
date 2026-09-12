"use client";

import { useState } from "react";
import { Terminal, Copy, Check, Cpu } from "lucide-react";
import SpotlightCard from "@/components/ui/SpotlightCard";
import OrbitalConstellation from "@/components/ui/OrbitalConstellation";

const MARQUEE_TECH = [
  "Next.js 16",
  "React 19",
  "TypeScript 5",
  "Turbopack",
  "Tailwind CSS v4",
  "MongoDB Atlas",
  "Node.js 22",
  "GraphQL / REST",
  "Docker Engine",
  "Redis Cache",
  "Vercel Edge",
  "GSAP Motion",
  "Resend API",
  "Figma Systems",
];

const TECH_ITEMS = [
  { name: "Next.js", category: "Full-Stack Framework", version: "v16.3.2", highlight: true },
  { name: "React 19", category: "UI Architecture", version: "v19.2", highlight: true },
  { name: "TypeScript", category: "Static Type Safety", version: "v5.5", highlight: true },
  { name: "Tailwind CSS", category: "Styling Engine", version: "v4.0", highlight: true },
  { name: "MongoDB Atlas", category: "Document Database", version: "v9.9", highlight: true },
  { name: "Node.js", category: "Backend Runtime", version: "v22.x", highlight: false },
  { name: "GSAP Motion", category: "Animation Engine", version: "v3.12", highlight: true },
  { name: "Express / REST", category: "API Infrastructure", version: "RESTful", highlight: false },
  { name: "Mongoose ODM", category: "Schema Validation", version: "Strict", highlight: false },
  { name: "React Native", category: "Mobile Apps (iOS/Android)", version: "Cross-platform", highlight: false },
  { name: "Docker / CI-CD", category: "DevOps & Containers", version: "Automated", highlight: false },
  { name: "Google Analytics & SEO", category: "Telemetry & Core Vitals", version: "99+ Lighthouse", highlight: false },
];

export default function TechStackShowcase() {
  const [copied, setCopied] = useState(false);
  const commandText = "npx create-digiweb-app@latest my-project";

  const handleCopyCommand = () => {
    navigator.clipboard.writeText(commandText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-24 bg-[#0A0B0D] relative overflow-hidden" id="tech-stack">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-[#E2F135]/5 rounded-full blur-[160px] pointer-events-none" />

      {/* Infinite Scrolling Tech Marquee Ribbon */}
      <div className="border-y border-[#252830] bg-[#121316]/50 py-3.5 mb-16 overflow-hidden relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0A0B0D] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0A0B0D] to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex items-center gap-8">
          {[...MARQUEE_TECH, ...MARQUEE_TECH].map((tech, i) => (
            <div
              key={i}
              className="flex items-center gap-3 px-4 py-1.5 rounded-full bg-[#0A0B0D] border border-[#252830] shrink-0 font-mono text-xs font-semibold text-slate-300 hover:border-[#E2F135]/60 hover:text-white transition-colors cursor-default"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#E2F135]" />
              <span>{tech}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#E2F135] mb-2 font-mono">
          <Cpu className="w-3.5 h-3.5 text-[#E2F135]" />
          <span>Modern Engineering Stack</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
          Production-grade architecture with zero compromises.
        </h2>
        <p className="text-sm text-slate-300 max-w-2xl mx-auto mb-6">
          Every project is built with strict typing, server-side caching, sub-second TTFB, and modular codebases designed for effortless scaling.
        </p>

        {/* Interactive 3D Orbital Rings (Tech Constellation) */}
        <OrbitalConstellation />

        {/* Developer CLI Command Banner */}
        <div className="inline-flex items-center gap-3 bg-[#121316] border border-[#252830] hover:border-[#E2F135]/40 px-4 py-2.5 rounded-xl mb-14 shadow-lg text-left transition-colors">
          <Terminal className="w-4 h-4 text-[#E2F135]" />
          <span className="font-mono text-xs text-slate-300">
            <span className="text-slate-500 select-none">$ </span>
            {commandText}
          </span>
          <button
            onClick={handleCopyCommand}
            className="p-1.5 rounded-md hover:bg-[#1C1F26] text-slate-400 hover:text-white transition-colors cursor-pointer"
            title="Copy command"
            aria-label="Copy command"
          >
            {copied ? (
              <Check className="w-3.5 h-3.5 text-[#E2F135]" />
            ) : (
              <Copy className="w-3.5 h-3.5" />
            )}
          </button>
        </div>

        {/* Grid of 12 Frameworks with SpotlightCard */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {TECH_ITEMS.map((item, idx) => (
            <SpotlightCard
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.04 }}
              className="p-5 text-left group cursor-default"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-bold text-white group-hover:text-[#E2F135] transition-colors">
                  {item.name}
                </span>
                <span className="text-[10px] font-mono text-[#E2F135] bg-[#E2F135]/10 px-2 py-0.5 rounded-md border border-[#E2F135]/20">
                  {item.version}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[11px] text-slate-400 font-mono">
                  {item.category}
                </span>
                {item.highlight && (
                  <span className="w-2 h-2 rounded-full bg-[#E2F135] shrink-0" />
                )}
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
