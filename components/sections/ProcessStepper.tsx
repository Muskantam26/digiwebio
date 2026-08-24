"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { PROCESS_STEPS } from "@/data/initialData";

export default function ProcessStepper() {
  return (
    <section className="py-20 bg-[#07080A] relative border-y border-[#252830]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#E2F135] mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E2F135]" />
            Engineering Methodology
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Our 07-step process from discovery to continuous support.
          </h2>
          <p className="mt-3 text-sm text-slate-400">
            A transparent, milestone-driven development process that ensures zero surprises, rapid delivery, and enterprise quality.
          </p>
        </div>

        <div className="relative">
          {/* Vertical Connecting Line on Desktop */}
          <div className="hidden lg:block absolute left-8 top-0 bottom-0 w-0.5 bg-[#252830]" />

          <div className="space-y-8">
            {PROCESS_STEPS.map((step, idx) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="relative flex flex-col lg:flex-row lg:items-center gap-6 bg-[#121316] border border-[#252830] hover:border-[#E2F135]/40 rounded-2xl p-6 lg:p-8 transition-all duration-300 group"
              >
                {/* Step Number Circle */}
                <div className="relative shrink-0 flex items-center justify-center w-16 h-16 rounded-2xl bg-[#191B20] border border-[#252830] group-hover:border-[#E2F135] group-hover:bg-[#E2F135] text-[#E2F135] group-hover:text-[#0A0B0D] font-mono font-extrabold text-xl transition-all duration-300 shadow-md">
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
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {step.description}
                  </p>

                  {/* Deliverables tags */}
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-[#191B20]">
                    {step.deliverables.map((del, didx) => (
                      <span
                        key={didx}
                        className="inline-flex items-center gap-1.5 text-[11px] text-slate-400 bg-[#0A0B0D] px-2.5 py-1 rounded-md border border-[#191B20]"
                      >
                        <CheckCircle2 className="w-3 h-3 text-[#E2F135]" />
                        {del}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
