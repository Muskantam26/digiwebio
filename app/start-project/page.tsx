import StartProjectForm from "@/components/sections/StartProjectForm";
import FAQSection from "@/components/sections/FAQSection";
import { generatePageMetadata } from "@/lib/seo";
import { CheckCircle2, ShieldCheck, Zap, Code2 } from "lucide-react";

export const metadata = generatePageMetadata({
  title: "Start a Project | DigiWebIO",
  description:
    "Kick off your web development, mobile application, or digital product with DigiWebIO. Share your project requirements and receive a comprehensive proposal within 24 hours.",
  path: "/start-project",
});

export default function StartProjectPage() {
  return (
    <>
      {/* Hero Header */}
      <section className="py-20 bg-grid-pattern relative border-b border-[#252830]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#E2F135] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E2F135]" />
              Project Discovery & Estimate
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">
              Let&apos;s turn your vision into an exceptional product.
            </h1>
            <p className="text-base text-slate-300 leading-relaxed mb-8">
              Fill out your project specifications below. Our engineering leads and design strategists will analyze your scope, tech stack requirements, and timeline to craft a personalized proposal.
            </p>

            {/* Value Trust Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-[#121316] border border-[#252830]">
                <Zap className="w-5 h-5 text-[#E2F135] shrink-0" />
                <span className="text-xs font-medium text-slate-200">24h Response SLA</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-[#121316] border border-[#252830]">
                <ShieldCheck className="w-5 h-5 text-[#E2F135] shrink-0" />
                <span className="text-xs font-medium text-slate-200">Strict NDA & IP Safety</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-[#121316] border border-[#252830]">
                <Code2 className="w-5 h-5 text-[#E2F135] shrink-0" />
                <span className="text-xs font-medium text-slate-200">Free Architecture Review</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Form Section */}
      <section className="py-20 bg-[#0A0B0D] relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <StartProjectForm />
        </div>
      </section>

      {/* FAQ & Guarantees */}
      <FAQSection />
    </>
  );
}
