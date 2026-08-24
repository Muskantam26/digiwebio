"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Globe,
  Code2,
  Smartphone,
  Palette,
  ShoppingBag,
  Search,
  TrendingUp,
  Share2,
  BarChart3,
  LayoutDashboard,
  Cpu,
  ShieldCheck,
  CheckCircle
} from "lucide-react";
import { SERVICES_DATA } from "@/data/initialData";

const ICON_MAP: Record<string, React.ElementType> = {
  Globe,
  Code2,
  Smartphone,
  Palette,
  ShoppingBag,
  Search,
  TrendingUp,
  Share2,
  BarChart3,
  LayoutDashboard,
  Cpu,
  ShieldCheck,
};

export default function ServicesGrid({ limit }: { limit?: number }) {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Services" },
    { id: "development", label: "Engineering & Dev" },
    { id: "design", label: "UI/UX & Design" },
    { id: "marketing", label: "SEO & Growth" },
    { id: "enterprise", label: "Enterprise Software" },
  ];

  const filteredServices = SERVICES_DATA.filter((s) => {
    if (activeCategory === "all") return true;
    return s.category === activeCategory;
  }).slice(0, limit || SERVICES_DATA.length);

  return (
    <section className="py-20 bg-[#0A0B0D] relative overflow-hidden" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#E2F135] mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E2F135]" />
              OUR CORE CAPABILITIES
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Technology, Design & Growth — <span className="text-[#E2F135]">All in One Place.</span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-slate-300 max-w-lg leading-relaxed font-normal">
            From web and app development to UI/UX, digital marketing, social media, we help businesses build and grow their digital presence.
          </p>
        </div>

        {/* Category Filters */}
        {!limit && (
          <div className="flex flex-wrap gap-2 mb-12 border-b border-[#252830] pb-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                  activeCategory === cat.id
                    ? "bg-[#E2F135] text-[#0A0B0D]"
                    : "bg-[#121316] text-slate-400 hover:text-white hover:bg-[#191B20] border border-[#252830]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        )}

        {/* Grid of 12 Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, index) => {
            const IconComponent = ICON_MAP[service.iconName] || Globe;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group relative bg-[#121316] hover:bg-[#191B20] border border-[#252830] hover:border-[#E2F135]/50 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between"
                id={service.slug}
              >
                <div>
                  {/* Top Icon & Category Tag */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#191B20] group-hover:bg-[#E2F135] border border-[#252830] group-hover:border-[#E2F135] text-[#E2F135] group-hover:text-[#0A0B0D] flex items-center justify-center transition-colors duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500 group-hover:text-slate-400 bg-[#0A0B0D] px-2.5 py-1 rounded-md border border-[#191B20]">
                      {service.category}
                    </span>
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="text-xl font-bold text-white group-hover:text-[#E2F135] transition-colors mb-3">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>

                  {/* Deliverables List */}
                  <div className="space-y-2 mb-6 pt-4 border-t border-[#191B20] group-hover:border-[#252830]">
                    {service.deliverables.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-[11px] text-slate-400">
                        <CheckCircle className="w-3.5 h-3.5 text-[#E2F135] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

              
               
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
