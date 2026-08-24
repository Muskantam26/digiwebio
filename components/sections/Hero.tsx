"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-20 overflow-hidden bg-[#0A0B0D] bg-grid-pattern">
      {/* Large Centered Logo Background Watermark - AppLogo.png */}
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none overflow-hidden flex items-center justify-center p-4">
        <div className="relative w-full max-w-6xl h-[550px] sm:h-[700px] lg:h-[800px] flex items-center justify-center">
          <Image
            src="/AppLogo.png"
            alt="DigiWebIO Background Watermark Logo"
            fill
            priority
            className="object-contain object-center scale-125 sm:scale-150 lg:scale-[1.8] filter drop-shadow-[0_0_90px_rgba(226,241,53,0.3)]"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0B0D]/85 via-[#0A0B0D]/60 to-[#0A0B0D]" />
      </div>

      {/* Background Radial Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[500px] bg-[#E2F135]/14 rounded-full blur-[170px] pointer-events-none z-0" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center"
        >
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1] mb-6 max-w-3xl">
            We Build. We Design.{" "}
            <span className="block mt-1 text-[#E2F135] drop-shadow-[0_0_35px_rgba(226,241,53,0.55)]">
              We Grow.
            </span>
          </h1>

          {/* Subtitle Paragraph */}
          <p className="text-base sm:text-lg text-slate-200 max-w-2xl leading-relaxed mb-10 font-medium">
            From websites and mobile apps to UI/UX, digital marketing, social media, and data analytics — we create digital solutions that help your business grow.
          </p>

          {/* Centered Pill CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-6">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#E2F135] hover:bg-[#DFFF12] text-[#0A0B0D] font-bold text-sm sm:text-base px-9 py-4 rounded-full transition-all duration-300 shadow-[0_0_30px_rgba(226,241,53,0.35)] hover:shadow-[0_0_40px_rgba(226,241,53,0.5)] hover:scale-105"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4.5 h-4.5 stroke-[2.5]" />
            </Link>
            <Link
              href="/projects"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#121316]/90 hover:bg-[#191B20] text-white border border-[#252830] hover:border-[#E2F135]/60 font-semibold text-sm sm:text-base px-9 py-4 rounded-full transition-all duration-300 shadow-lg"
            >
              <span>View Our Work</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
