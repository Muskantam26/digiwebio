"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Terminal, Sparkles } from "lucide-react";

const FLOATING_BADGES = [
  { label: "Next.js 16", sub: "Turbopack", color: "text-[#E2F135]", border: "border-[#E2F135]/40", top: "20%", left: "6%", yOffset: -8 },
  { label: "React 19", sub: "Server Actions", color: "text-sky-400", border: "border-sky-400/40", top: "28%", right: "6%", yOffset: 10 },
  { label: "TypeScript 5", sub: "Strict Mode", color: "text-blue-400", border: "border-blue-400/40", bottom: "28%", left: "5%", yOffset: 6 },
  { label: "Tailwind v4", sub: "JIT Engine", color: "text-teal-400", border: "border-teal-400/40", bottom: "32%", right: "5%", yOffset: -10 },
];

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex flex-col items-center justify-center pt-28 pb-20 overflow-hidden bg-[#0A0B0D] bg-grid-pattern">
      {/* Centered Logo Background Watermark */}
      <div className="absolute inset-0 z-0 opacity-25 pointer-events-none overflow-hidden flex items-center justify-center p-4">
        <div className="relative w-full max-w-6xl h-[550px] sm:h-[700px] lg:h-[800px] flex items-center justify-center">
          <Image
            src="/AppLogo.png"
            alt="DigiWebIO Background Watermark Logo"
            fill
            priority
            className="object-contain object-center scale-125 sm:scale-150 lg:scale-[1.8] filter drop-shadow-[0_0_90px_rgba(226,241,53,0.25)]"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0B0D]/85 via-[#0A0B0D]/65 to-[#0A0B0D]" />
      </div>

      {/* Background Radial Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-[#E2F135]/12 rounded-full blur-[180px] pointer-events-none z-0 animate-pulse-slow" />

      {/* Floating Developer Badges (Visible on Large Screens) */}
      <div className="hidden xl:block absolute inset-0 pointer-events-none z-10">
        {FLOATING_BADGES.map((badge, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, badge.yOffset, 0],
            }}
            transition={{
              y: {
                duration: 4 + idx,
                repeat: Infinity,
                ease: "easeInOut",
              },
              duration: 0.8,
              delay: 0.3 + idx * 0.15,
            }}
            style={{
              top: badge.top,
              bottom: badge.bottom,
              left: badge.left,
              right: badge.right,
            }}
            className={`absolute bg-[#121316]/90 backdrop-blur-md px-3.5 py-2 rounded-xl border ${badge.border} shadow-lg shadow-black/60 flex items-center gap-2`}
          >
            <span className={`w-2 h-2 rounded-full bg-current ${badge.color}`} />
            <div className="font-mono text-[11px]">
              <span className="font-bold text-white block leading-none">{badge.label}</span>
              <span className="text-[9px] text-slate-400">{badge.sub}</span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
        {/* Developer Terminal Eyebrow Pill */}
        <motion.div
          initial={{ opacity: 0, y: -15, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-[#121316] border border-[#252830] hover:border-[#E2F135]/50 px-4 py-1.5 rounded-full mb-8 shadow-inner transition-colors"
        >
          <Terminal className="w-3.5 h-3.5 text-[#E2F135]" />
          <span className="text-xs font-mono text-slate-300">
            Full-Stack Engineering & Modern Web Architecture
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#E2F135]" />
        </motion.div>

        {/* Main Headline with Blur-Fade Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 25, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex flex-col items-center text-center"
        >
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1] mb-6 max-w-3xl">
            We Build. We Design.{" "}
            <span className="block mt-1 text-[#E2F135] drop-shadow-[0_0_35px_rgba(226,241,53,0.55)]">
              We Grow.
            </span>
          </h1>

          {/* Subtitle Paragraph */}
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed mb-10 font-medium">
            From websites and mobile apps to UI/UX, digital marketing, social media, and data analytics — we engineer digital solutions that help your business scale.
          </p>

          {/* Centered Pill CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-6">
            <Link
              href="/start-project"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#E2F135] hover:bg-[#DFFF12] text-[#0A0B0D] font-bold text-sm sm:text-base px-9 py-4 rounded-full transition-all duration-300 shadow-[0_0_30px_rgba(226,241,53,0.35)] hover:shadow-[0_0_40px_rgba(226,241,53,0.5)] hover:scale-105 cursor-pointer"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4.5 h-4.5 stroke-[2.5]" />
            </Link>
            <Link
              href="/projects"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#121316]/90 hover:bg-[#191B20] text-white border border-[#252830] hover:border-[#E2F135]/60 font-semibold text-sm sm:text-base px-9 py-4 rounded-full transition-all duration-300 shadow-lg cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-[#E2F135]" />
              <span>Explore Case Studies</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
