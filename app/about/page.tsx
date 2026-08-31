import Link from "next/link";
import { ArrowUpRight, ShieldCheck, Target, Rocket } from "lucide-react";
import ProcessStepper from "@/components/sections/ProcessStepper";
import TechStackShowcase from "@/components/sections/TechStackShowcase";
import TeamSection from "@/components/sections/TeamSection";
import ContactForm from "@/components/sections/ContactForm";
import { generatePageMetadata } from "@/lib/seo";

export const metadata = generatePageMetadata({
  title: "About Us | DigiWebIO Software Development Agency",
  description:
    "DigiWebIO was founded by Muskan Tamrakar, a Full-Stack Web Developer focused on helping businesses build modern websites, web applications and custom digital solutions.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      {/* Header Banner */}
      <section className="py-20 bg-grid-pattern relative overflow-hidden border-b border-[#252830]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#E2F135] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E2F135]" />
              Our Founder & Agency Story
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
              Engineering digital products that redefine industry benchmarks.
            </h1>
            <p className="text-base text-slate-300 leading-relaxed mb-8">
              DigiWebIO was founded by Muskan Tamrakar, a Full-Stack Web Developer focused on helping businesses build modern websites, web applications and custom digital solutions.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#E2F135] hover:bg-[#DFFF12] text-[#0A0B0D] font-bold text-xs px-6 py-3.5 rounded-full transition-all"
              >
                <span>Work With Us</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 bg-[#121316] text-white border border-[#252830] hover:border-[#E2F135] text-xs font-semibold px-6 py-3.5 rounded-full transition-all"
              >
                <span>Explore Services</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Approach Grid */}
      <section className="py-20 bg-[#0A0B0D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#121316] border border-[#252830] p-8 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-[#191B20] text-[#E2F135] flex items-center justify-center mb-6">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Our Mission</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                To empower Indian and international enterprises with high-performance, secure, and visually commanding digital software that drives measurable revenue growth.
              </p>
            </div>

            <div className="bg-[#121316] border border-[#252830] p-8 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-[#191B20] text-[#E2F135] flex items-center justify-center mb-6">
                <Rocket className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Our Vision</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                To set the gold standard for full-stack web application engineering, user experience design, and technical SEO visibility across South Asia and global markets.
              </p>
            </div>

            <div className="bg-[#121316] border border-[#252830] p-8 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-[#191B20] text-[#E2F135] flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Our Core Philosophy</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Zero bloated plugins, zero security shortcuts, and zero AI generic templates. Every line of code and UI component is intentionally engineered for your specific business goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Clients Choose Us */}
      <section className="py-20 bg-[#07080A] border-t border-[#252830]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Why leading companies partner with DigiWebIO.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-[#121316] border border-[#252830] rounded-xl">
              <div className="text-[#E2F135] font-mono text-2xl font-bold mb-2">01</div>
              <h4 className="text-base font-bold text-white mb-2">Technical Excellence</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                We build with Next.js App Router, TypeScript, and MongoDBAtlas to ensure high speed and serverless scalability.
              </p>
            </div>

            <div className="p-6 bg-[#121316] border border-[#252830] rounded-xl">
              <div className="text-[#E2F135] font-mono text-2xl font-bold mb-2">02</div>
              <h4 className="text-base font-bold text-white mb-2">Editorial UI/UX</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Custom visual design systems with clean typography, balanced whitespace, and engaging micro-interactions.
              </p>
            </div>

            <div className="p-6 bg-[#121316] border border-[#252830] rounded-xl">
              <div className="text-[#E2F135] font-mono text-2xl font-bold mb-2">03</div>
              <h4 className="text-base font-bold text-white mb-2">Security & Audit</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Server-side input sanitization, rate limiting architecture, CORS protection, and secure data handling.
              </p>
            </div>

            <div className="p-6 bg-[#121316] border border-[#252830] rounded-xl">
              <div className="text-[#E2F135] font-mono text-2xl font-bold mb-2">04</div>
              <h4 className="text-base font-bold text-white mb-2">Transparent Roadmap</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Itemized project milestones, clear timelines, zero hidden costs, and dedicated post-launch maintenance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ProcessStepper />
      <TechStackShowcase />
      <TeamSection />
      <ContactForm />
    </>
  );
}
