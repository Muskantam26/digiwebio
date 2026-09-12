"use client";

import { motion } from "framer-motion";
import { AGENCY_STATS } from "@/data/initialData";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { Activity, ShieldCheck, Zap, Server } from "lucide-react";

export default function AgencyStats() {
  return (
    <section className="py-16 bg-[#0E1013] border-y border-[#252830] relative overflow-hidden">
      {/* Background Subtle Line Glow */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Developer Telemetry Status Bar */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 mb-10 text-[11px] font-mono text-slate-400">
          <div className="flex items-center gap-2 bg-[#121316] px-3.5 py-1.5 rounded-full border border-[#252830]">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <Activity className="w-3.5 h-3.5 text-emerald-400" />
            <span>99.9% Production Uptime</span>
          </div>
          <div className="flex items-center gap-2 bg-[#121316] px-3.5 py-1.5 rounded-full border border-[#252830]">
            <Zap className="w-3.5 h-3.5 text-[#E2F135]" />
            <span>Sub-second TTFB on Global Edge</span>
          </div>
          <div className="flex items-center gap-2 bg-[#121316] px-3.5 py-1.5 rounded-full border border-[#252830]">
            <Server className="w-3.5 h-3.5 text-sky-400" />
            <span>Turbopack & React 19 Core</span>
          </div>
          <div className="flex items-center gap-2 bg-[#121316] px-3.5 py-1.5 rounded-full border border-[#252830]">
            <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
            <span>Clean Architecture & NDA Safe</span>
          </div>
        </div>

        {/* 4 Core Metrics with Animated Counter */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {AGENCY_STATS.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-[#121316]/60 border border-[#252830] hover:border-[#E2F135]/40 transition-all duration-300 group"
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#E2F135] tracking-tight mb-2 font-mono group-hover:scale-105 transition-transform duration-300">
                <AnimatedCounter value={stat.value} duration={2} />
              </div>
              <div className="text-xs uppercase font-semibold tracking-wider text-slate-300">
                {stat.label}
              </div>
              {stat.suffix && (
                <div className="text-[11px] text-slate-500 font-mono mt-1">
                  {stat.suffix}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
