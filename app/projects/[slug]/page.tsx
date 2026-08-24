import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2, Star, ExternalLink } from "lucide-react";
import { PROJECTS_DATA } from "@/data/initialData";
import ContactForm from "@/components/sections/ContactForm";
import { generatePageMetadata } from "@/lib/seo";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PROJECTS_DATA.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const project = PROJECTS_DATA.find((p) => p.slug === slug);
  if (!project) return generatePageMetadata({ title: "Project Not Found" });

  return generatePageMetadata({
    title: `${project.title} | Case Study`,
    description: project.summary,
    path: `/projects/${project.slug}`,
  });
}

export default async function ProjectDetailsPage({ params }: PageProps) {
  const { slug } = await params;
  const project = PROJECTS_DATA.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      {/* Header */}
      <section className="py-20 bg-grid-pattern relative border-b border-[#252830]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-[#E2F135] mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Case Studies</span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8">
              <span className="inline-block px-3.5 py-1.5 rounded-full bg-[#121316] border border-[#252830] text-[#E2F135] text-xs font-mono font-bold uppercase tracking-wider mb-4">
                {project.category}
              </span>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
                {project.title}
              </h1>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className="lg:col-span-4 bg-[#121316] border border-[#252830] rounded-2xl p-6 space-y-4">
              <div>
                <h4 className="text-xs uppercase font-bold text-slate-500">Client Partner</h4>
                <p className="text-sm font-semibold text-white mt-1">{project.client}</p>
              </div>
              <div className="pt-4 border-t border-[#191B20]">
                <h4 className="text-xs uppercase font-bold text-slate-500">Category</h4>
                <p className="text-sm font-semibold text-white mt-1">{project.category}</p>
              </div>
              <div className="pt-4 border-t border-[#191B20]">
                <h4 className="text-xs uppercase font-bold text-slate-500">Technologies</h4>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {project.technologies.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] bg-[#0A0B0D] text-slate-300 px-2.5 py-1 rounded border border-[#252830]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              {project.liveUrl && (
                <div className="pt-4 border-t border-[#191B20]">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#E2F135] hover:bg-[#DFFF12] text-[#0A0B0D] font-bold text-xs py-3 rounded-xl flex items-center justify-center gap-2 transition-all"
                  >
                    <span>Visit Live Website</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Deep Case Study Body */}
      <section className="py-20 bg-[#0A0B0D]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Challenge Section */}
          <div className="bg-[#121316] border border-[#252830] rounded-3xl p-8 md:p-10">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-[#191B20] text-[#E2F135] flex items-center justify-center text-sm font-mono font-bold border border-[#252830]">
                01
              </span>
              The Business Challenge
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              {project.challenge}
            </p>
          </div>

          {/* Solution Section */}
          <div className="bg-[#121316] border border-[#252830] rounded-3xl p-8 md:p-10">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-[#191B20] text-[#E2F135] flex items-center justify-center text-sm font-mono font-bold border border-[#252830]">
                02
              </span>
              Engineering & Design Solution
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              {project.solution}
            </p>
          </div>

          {/* Measurable Results */}
          <div className="bg-[#121316] border border-[#252830] rounded-3xl p-8 md:p-10">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-[#191B20] text-[#E2F135] flex items-center justify-center text-sm font-mono font-bold border border-[#252830]">
                03
              </span>
              Key Measurable Impact
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {project.results.map((res, idx) => (
                <div key={idx} className="bg-[#0A0B0D] p-5 rounded-2xl border border-[#191B20]">
                  <div className="flex items-start gap-2 text-xs font-semibold text-emerald-400">
                    <CheckCircle2 className="w-4 h-4 text-[#E2F135] shrink-0 mt-0.5" />
                    <span>{res}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial */}
          {project.testimonial && (
            <div className="bg-gradient-to-r from-[#121316] to-[#191B20] border border-[#E2F135]/30 rounded-3xl p-8 md:p-10 relative">
              <div className="flex items-center gap-1 text-[#E2F135] mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <blockquote className="text-base sm:text-lg italic text-white mb-6 leading-relaxed">
                &quot;{project.testimonial.quote}&quot;
              </blockquote>
              <div>
                <div className="text-sm font-bold text-white">{project.testimonial.author}</div>
                <div className="text-xs text-slate-400">{project.testimonial.role}, {project.testimonial.company}</div>
              </div>
            </div>
          )}
        </div>
      </section>

      <ContactForm />
    </>
  );
}
