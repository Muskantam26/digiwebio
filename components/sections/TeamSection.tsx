"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Code2, Palette, Share2, Sparkles, Terminal } from "lucide-react";
import { TEAM_MEMBERS_DATA } from "@/data/initialData";

export default function TeamSection() {
  const founder = TEAM_MEMBERS_DATA.find((m) => m.isFounder) || TEAM_MEMBERS_DATA[0];
  const supportingRoles = TEAM_MEMBERS_DATA.filter((m) => !m.isFounder);

  const getRoleIcon = (id: string) => {
    switch (id) {
      case "web-dev":
        return <Code2 className="w-5 h-5 text-[#E2F135]" />;
      case "ui-ux":
        return <Palette className="w-5 h-5 text-[#E2F135]" />;
      case "social-media":
        return <Share2 className="w-5 h-5 text-[#E2F135]" />;
      default:
        return <Terminal className="w-5 h-5 text-[#E2F135]" />;
    }
  };

  return (
    <section className="py-24 bg-[#07080A] border-t border-[#252830] relative overflow-hidden" id="team">
      {/* Background Lighting Accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#E2F135]/5 rounded-full blur-[140px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#E2F135] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E2F135]" />
            MEET THE TEAM
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Built by people who care about the details.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            From development and UI/UX to digital growth, we bring the right expertise together for every project — with a focus on quality, performance, and the goals that matter to our clients.
          </p>
        </div>

        {/* Asymmetric Team Showcase Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* FOUNDER CARD - Prominent Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 bg-[#121316] border border-[#E2F135]/40 hover:border-[#E2F135]/70 rounded-2xl p-8 sm:p-10 transition-all duration-300 flex flex-col justify-between group shadow-xl relative overflow-hidden"
          >
            {/* Top Subtle Founder Tag */}
            <div className="flex items-center justify-between mb-8">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#E2F135] bg-[#E2F135]/10 border border-[#E2F135]/30 px-3 py-1 rounded-full flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                FOUNDER
              </span>
              <span className="text-xs font-mono text-slate-500">DIGIWEBIO</span>
            </div>

            <div>
              {/* Founder Image */}
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-[#E2F135]/50 group-hover:border-[#E2F135] flex items-center justify-center mb-6 shadow-inner transition-colors bg-[#191B20]">
                {founder.photo ? (
                  <Image
                    src={founder.photo}
                    alt={founder.name}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    sizes="112px"
                    priority
                  />
                ) : (
                  <span className="text-2xl font-black text-[#E2F135] tracking-wider">
                    {founder.initials || "MT"}
                  </span>
                )}
              </div>

              {/* Founder Name & Role */}
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-[#E2F135] transition-colors mb-1.5">
                {founder.name}
              </h3>
              <p className="text-sm font-semibold text-[#E2F135] mb-5">
                {founder.role}
              </p>

              {/* Founder Bio Description */}
              <p className="text-sm text-slate-300 leading-relaxed mb-8 font-normal">
                &ldquo;{founder.bio}&rdquo;
              </p>
            </div>

            {/* Expertise Section */}
            <div className="pt-6 border-t border-[#252830]/80">
              <span className="text-[11px] uppercase font-bold tracking-wider text-slate-400 block mb-3">
                Expertise
              </span>
              <div className="flex flex-wrap gap-2">
                {founder.expertise?.map((exp, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-medium bg-[#0A0B0D] text-[#E2F135] px-3 py-1.5 rounded-md border border-[#252830]"
                  >
                    {exp}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* SUPPORTING ROLES - 3 Elegant Cards Column/Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
            {supportingRoles.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-[#121316] border border-[#252830] hover:border-[#E2F135]/40 rounded-2xl p-6 sm:p-7 transition-all duration-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 group hover:-translate-y-0.5"
              >
                <div className="flex items-start gap-5">
                  {/* Role Initials & Visual Identifier */}
                  <div className="w-14 h-14 rounded-xl bg-[#191B20] border border-[#252830] group-hover:border-[#E2F135]/50 flex flex-col items-center justify-center shrink-0 transition-colors">
                    <span className="text-xs font-extrabold text-[#E2F135] font-mono tracking-tight">
                      {member.initials}
                    </span>
                    <div className="mt-0.5">{getRoleIcon(member.id)}</div>
                  </div>

                  <div>
                    {/* Role Title */}
                    <h3 className="text-xl font-bold text-white group-hover:text-[#E2F135] transition-colors mb-1">
                      {member.name}
                    </h3>
                    <p className="text-xs font-semibold text-[#E2F135] mb-2.5">
                      {member.role}
                    </p>

                    {/* Role Description */}
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-lg font-normal">
                      {member.bio}
                    </p>
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
