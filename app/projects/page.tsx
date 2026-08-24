import PortfolioGrid from "@/components/sections/PortfolioGrid";
import ContactForm from "@/components/sections/ContactForm";
import { generatePageMetadata } from "@/lib/seo";

export const metadata = generatePageMetadata({
  title: "Projects & Portfolio | DigiWebIO Engineering Case Studies",
  description:
    "Explore DigiWebIO's portfolio of custom web applications, e-commerce storefronts, mobile apps, and enterprise ERP solutions.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <>
      <section className="py-20 bg-grid-pattern relative border-b border-[#252830]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#E2F135] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E2F135]" />
              FEATURED WORK
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
              Our Latest Projects & Case Studies.
            </h1>
            <p className="text-base text-slate-300 leading-relaxed font-normal">
              Explore real-world web applications, mobile apps, and digital platforms we&apos;ve built for ambitious brands and growing businesses.
            </p>
          </div>
        </div>
      </section>

      <PortfolioGrid />
      <ContactForm />
    </>
  );
}
