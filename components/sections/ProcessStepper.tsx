"use client";

import { motion } from "framer-motion";
import { CheckCircle2, GitBranch } from "lucide-react";
import { PROCESS_STEPS } from "@/data/initialData";
import SpotlightCard from "@/components/ui/SpotlightCard";

export default function ProcessStepper() {
  return (
    <section className="py-24 bg-[#07080A] relative border-y border-[#252830] overflow-hidden">
      {/* Background Subtle Lighting Accent */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#E2F135]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#E2F135] mb-2 font-mono">
            <GitBranch className="w-3.5 h-3.5 text-[#E2F135]" />
            <span>ENGINEERING METHODOLOGY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Our 07-step process from discovery to deployment.
          </h2>
          <p className="mt-3 text-sm text-slate-400 leading-relaxed">
            A milestone-driven, Git-based development workflow that ensures continuous integration, transparent sprint reviews, and enterprise quality.
          </p>
        </div>

        <div className="relative">
          {/* Vertical Connecting Line with Animated Glowing Beam on Desktop */}
          <div className="hidden lg:block absolute left-8 top-0 bottom-0 w-0.5 bg-[#252830] overflow-hidden z-0">
            <div className="absolute left-0 w-full h-48 bg-gradient-to-b from-transparent via-[#E2F135] to-transparent animate-timeline-beam" />
          </div>

          <div className="space-y-8 relative z-10">
            {PROCESS_STEPS.map((step, idx) => (
              <SpotlightCard
                key={step.number}
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="p-6 lg:p-8 flex flex-col lg:flex-row lg:items-center gap-6 group"
              >
                {/* Step Number Circle */}
                <div className="relative shrink-0 flex items-center justify-center w-16 h-16 rounded-2xl bg-[#191B20] border border-[#252830] group-hover:border-[#E2F135] group-hover:bg-[#E2F135] text-[#E2F135] group-hover:text-[#0A0B0D] font-mono font-extrabold text-xl transition-all duration-300 shadow-lg group-hover:scale-105">
                  {step.number}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-[#E2F135] transition-colors">
                      {step.title}
                    </h3>
                    <span className="text-xs font-mono text-[#E2F135] bg-[#0A0B0D] px-3 py-1 rounded-full border border-[#191B20] self-start sm:self-auto">
                      {step.tagline}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4 font-normal">
                    {step.description}
                  </p>

                  {/* Deliverables tags */}
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-[#191B20]">
                    {step.deliverables.map((del, didx) => (
                      <span
                        key={didx}
                        className="inline-flex items-center gap-1.5 text-[11px] font-mono text-slate-400 bg-[#0A0B0D] px-2.5 py-1 rounded-md border border-[#191B20]"
                      >
                        <CheckCircle2 className="w-3 h-3 text-[#E2F135]" />
                        {del}
                      </span>
                    ))}
                  </div>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
