"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Code2 } from "lucide-react";
import { PROJECTS_DATA } from "@/data/initialData";
import { ProjectItem } from "@/types";
import SpotlightCard from "@/components/ui/SpotlightCard";

export default function PortfolioGrid({
  projects: propsProjects,
  limit,
}: {
  projects?: ProjectItem[];
  limit?: number;
}) {
  const [dbProjects, setDbProjects] = useState<ProjectItem[]>(propsProjects || []);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  useEffect(() => {
    if (!propsProjects || propsProjects.length === 0) {
      fetch("/api/projects")
        .then((res) => res.json())
        .then((data) => {
          if (data.success && data.projects && data.projects.length > 0) {
            setDbProjects(data.projects);
          } else {
            setDbProjects(PROJECTS_DATA);
          }
        })
        .catch((err) => {
          console.warn("Failed to load projects from DB API, using fallback data:", err);
          setDbProjects(PROJECTS_DATA);
        });
    }
  }, [propsProjects]);

  const projectList = dbProjects.length > 0 ? dbProjects : PROJECTS_DATA;
  const categories = ["All", ...Array.from(new Set(projectList.map((p) => p.category)))];

  const filteredProjects = projectList
    .filter((p) => {
      if (selectedCategory === "All") return true;
      return p.category === selectedCategory;
    })
    .slice(0, limit || projectList.length);

  return (
    <section className="py-24 bg-[#0A0B0D] relative" id="portfolio">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#E2F135] mb-2 font-mono">
              <Code2 className="w-3.5 h-3.5 text-[#E2F135]" />
              <span>FEATURED CASE STUDIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Selected Work & Web Applications.
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-xl font-normal">
              Explore real-world web applications and scalable digital platforms engineered for ambitious brands.
            </p>
          </div>

          {/* Categories Pill Bar */}
          {!limit && (
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`relative px-4 py-2 rounded-full text-xs font-semibold transition-colors duration-200 cursor-pointer ${
                      isActive ? "text-[#0A0B0D] font-bold" : "text-slate-400 hover:text-white"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activePortfolioPill"
                        className="absolute inset-0 bg-[#E2F135] rounded-full shadow-md shadow-[#E2F135]/20"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{cat}</span>
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Projects Cards Grid with SpotlightCard */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <SpotlightCard
              key={project.id || project.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col justify-between group overflow-hidden"
            >
              <div>
                {/* Visual Cover Banner Placeholder / Card Header */}
                <div className="relative h-60 bg-gradient-to-br from-[#191B20] to-[#0D0E10] border-b border-[#252830] p-6 flex flex-col justify-between overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#E2F135]/5 rounded-full blur-2xl group-hover:bg-[#E2F135]/20 transition-all duration-500" />

                  <div className="relative z-10 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-[#0A0B0D]/80 border border-[#252830] text-[#E2F135] font-mono text-[10px] font-bold tracking-wider uppercase">
                      {project.category}
                    </span>
                    <span className="text-xs text-slate-400 font-medium font-mono">
                      Client: {project.client}
                    </span>
                  </div>

                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-white group-hover:text-[#E2F135] transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-xs text-slate-300 leading-relaxed mb-6">
                    {project.summary}
                  </p>

                  {/* Results highlight */}
                  {project.results && project.results.length > 0 && (
                    <div className="bg-[#0A0B0D] p-3 rounded-xl border border-[#191B20] text-xs text-emerald-400 font-mono mb-6 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span>{project.results[0]}</span>
                    </div>
                  )}

                  {/* Tech stack badges */}
                  {project.technologies && project.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {project.technologies.map((tech, tidx) => (
                        <span
                          key={tidx}
                          className="text-[10px] font-mono text-slate-400 bg-[#0A0B0D] px-2 py-0.5 rounded-md border border-[#252830]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-6 pt-0 border-t border-[#191B20] flex items-center justify-between mt-auto">
                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#E2F135] hover:text-[#DFFF12] transition-colors"
                >
                  <span>View Full Case Study</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-white p-2"
                    aria-label="Live Demo Link"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </SpotlightCard>
          ))}
        </div>

        {/* View All CTA */}
        {limit && (
          <div className="mt-14 text-center">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 bg-[#121316] hover:bg-[#191B20] text-white border border-[#252830] hover:border-[#E2F135]/50 text-xs font-bold px-8 py-3.5 rounded-full transition-all duration-300 shadow-lg"
            >
              <span>Explore All Case Studies</span>
              <ArrowUpRight className="w-4 h-4 text-[#E2F135]" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
