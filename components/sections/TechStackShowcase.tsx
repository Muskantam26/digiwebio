"use client";

import { motion } from "framer-motion";

const TECH_ITEMS = [
  { name: "Next.js", category: "Full-Stack Framework", highlight: true },
  { name: "React 19", category: "UI Library", highlight: true },
  { name: "TypeScript", category: "Type Safety", highlight: true },
  { name: "Tailwind CSS v4", category: "Styling Engine", highlight: true },
  { name: "MongoDB Atlas", category: "Database Layer", highlight: true },
  { name: "Node.js", category: "Backend Runtime", highlight: false },
  { name: "Express", category: "API Framework", highlight: false },
  { name: "Mongoose", category: "ODM Modeling", highlight: false },
  { name: "Framer Motion", category: "Animations", highlight: false },
  { name: "React Native", category: "Mobile Apps", highlight: false },
  { name: "REST / GraphQL", category: "API Design", highlight: false },
  { name: "Google Search Console", category: "SEO Telemetry", highlight: false },
];

export default function TechStackShowcase() {
  return (
    <section className="py-20 bg-[#0A0B0D] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#E2F135] mb-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#E2F135]" />
          Technology Stack
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
          Modern engineering stack with zero compromises.
        </h2>
        <p className="text-sm text-slate-400 max-w-xl mx-auto mb-12">
          We use battle-tested frameworks to guarantee sub-second page performance, high security, and seamless developer handoff.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {TECH_ITEMS.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.04 }}
              className={`p-4 rounded-xl border transition-all text-left group ${
                item.highlight
                  ? "bg-[#121316] border-[#E2F135]/40 hover:border-[#E2F135]"
                  : "bg-[#0D0E10] border-[#252830] hover:border-slate-500"
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-bold text-white group-hover:text-[#E2F135] transition-colors">
                  {item.name}
                </span>
                {item.highlight && (
                  <span className="w-2 h-2 rounded-full bg-[#E2F135]" />
                )}
              </div>
              <span className="text-[10px] text-slate-400 font-mono">
                {item.category}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
