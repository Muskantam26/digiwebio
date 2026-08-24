import BlogGrid from "@/components/sections/BlogGrid";
import ContactForm from "@/components/sections/ContactForm";
import { generatePageMetadata } from "@/lib/seo";

export const metadata = generatePageMetadata({
  title: "Blog & Insights | Technical Web Development Articles",
  description:
    "Read the latest articles on Next.js App Router performance, custom web application architecture, UI/UX design, and technical SEO from DigiWebIO.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <section className="py-20 bg-grid-pattern relative border-b border-[#252830]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#E2F135] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E2F135]" />
              Engineering Insights & Articles
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
              Thought leadership on full-stack web engineering & digital growth.
            </h1>
            <p className="text-base text-slate-300 leading-relaxed">
              In-depth technical guides, architecture breakdowns, and strategy insights curated by our software engineers.
            </p>
          </div>
        </div>
      </section>

      <BlogGrid />
      <ContactForm />
    </>
  );
}
