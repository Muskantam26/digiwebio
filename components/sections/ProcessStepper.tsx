"use client";

import { CheckCircle2, GitBranch, Layers, ArrowDown } from "lucide-react";
import { PROCESS_STEPS } from "@/data/initialData";
import SpotlightCard from "@/components/ui/SpotlightCard";

export default function ProcessStepper() {
  return (
    <section className="py-24 bg-[#07080A] relative border-y border-[#252830]" id="process">
      {/* Background Subtle Lighting Accent */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#E2F135]/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
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

          <div className="inline-flex items-center gap-2 mt-4 text-[11px] font-mono text-slate-400 bg-[#121316] border border-[#252830] px-3.5 py-1.5 rounded-full">
            <Layers className="w-3.5 h-3.5 text-[#E2F135]" />
            <span>Scroll down to see the cards stack</span>
            <ArrowDown className="w-3 h-3 text-[#E2F135] animate-bounce" />
          </div>
        </div>

        {/* Deck of Cards Stacking Track */}
        <div className="relative pb-36">
          {PROCESS_STEPS.map((step, idx) => {
            // Progressive top offset matching tab bar height (44px) so earlier card headers remain neatly fanned out
            const topOffset = 84 + idx * 44;

            return (
              <div
                key={step.number}
                className="sticky mb-20 sm:mb-28 last:mb-0 transition-all duration-300"
                style={{
                  top: `${topOffset}px`,
                  zIndex: idx + 1,
                }}
              >
                <SpotlightCard
                  className="overflow-hidden group bg-[#121316] border border-[#252830] hover:border-[#E2F135]/60 shadow-[0_-18px_45px_rgba(0,0,0,0.95),0_15px_35px_rgba(0,0,0,0.7)] rounded-3xl transition-all duration-300"
                >
                  {/* Card Deck Tab / Header Bar (fanned out and visible when cards stack) */}
                  <div className="h-11 px-5 sm:px-8 bg-[#16181D] border-b border-[#252830] flex items-center justify-between text-xs font-mono select-none">
                    <div className="flex items-center gap-2.5 sm:gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#E2F135] shadow-[0_0_8px_#E2F135]" />
                      <span className="font-bold text-[#E2F135] tracking-wider text-[11px] sm:text-xs">
                        PHASE {step.number}
                      </span>
                      <span className="text-[#373C46]">/</span>
                      <span className="text-white font-bold uppercase tracking-wider text-[11px] sm:text-xs">
                        {step.title}
                      </span>
                    </div>
                    <div className="hidden sm:flex items-center gap-2 text-slate-400 text-[11px]">
                      <span className="text-slate-500 font-mono">Milestone:</span>
                      <span className="text-[#E2F135]/90 font-mono font-medium">{step.tagline}</span>
                    </div>
                  </div>

                  {/* Card Main Body */}
                  <div className="p-6 sm:p-8 lg:p-10 flex flex-col lg:flex-row lg:items-center gap-6">
                    {/* Step Number Badge */}
                    <div className="relative shrink-0 flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#191B20] border-2 border-[#252830] group-hover:border-[#E2F135] group-hover:bg-[#E2F135] text-[#E2F135] group-hover:text-[#0A0B0D] font-mono font-extrabold text-xl sm:text-2xl transition-all duration-300 shadow-xl group-hover:scale-105">
                      {step.number}
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                        <div className="flex items-center gap-3">
                          <span className="text-[10px] font-mono uppercase font-bold text-slate-500 bg-[#0A0B0D] px-2.5 py-1 rounded-md border border-[#252830]">
                            Phase {idx + 1} of 7
                          </span>
                          <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#E2F135] transition-colors">
                            {step.title}
                          </h3>
                        </div>
                        <span className="text-xs font-mono text-[#E2F135] bg-[#0A0B0D] px-3.5 py-1.5 rounded-full border border-[#252830] self-start sm:self-auto font-semibold">
                          {step.tagline}
                        </span>
                      </div>

                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                        {step.description}
                      </p>

                      {/* Deliverables tags */}
                      <div className="flex flex-wrap gap-2 pt-4 border-t border-[#1C1F26]">
                        {step.deliverables.map((del, didx) => (
                          <span
                            key={didx}
                            className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-300 bg-[#0A0B0D] px-3 py-1.5 rounded-lg border border-[#252830]"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#E2F135]" />
                            {del}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </SpotlightCard>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
