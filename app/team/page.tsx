import TeamSection from "@/components/sections/TeamSection";
import ContactForm from "@/components/sections/ContactForm";
import { generatePageMetadata } from "@/lib/seo";

export const metadata = generatePageMetadata({
  title: "Team & Leadership | DigiWebIO Engineering Roster",
  description:
    "Meet DigiWebIO's full-stack software architects, UI/UX designers, backend engineers, and digital growth specialists.",
  path: "/team",
});

export default function TeamPage() {
  return (
    <>
      <section className="py-20 bg-grid-pattern relative border-b border-[#252830]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#E2F135] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E2F135]" />
              THE TEAM BEHIND DIGIWEBIO
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
              Different skills. One shared vision.
            </h1>
            <p className="text-base text-slate-300 leading-relaxed">
              Great digital products are built when <strong className="text-white font-semibold">technology, design, and creativity</strong> work together. At DigiWebIO, our team brings these strengths together to create digital experiences that are purposeful, engaging, and built to grow.
            </p>
          </div>
        </div>
      </section>

      <TeamSection />
      <ContactForm />
    </>
  );
}
