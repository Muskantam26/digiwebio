import ServicesGrid from "@/components/sections/ServicesGrid";
import ProcessStepper from "@/components/sections/ProcessStepper";
import ContactForm from "@/components/sections/ContactForm";
import FAQSection from "@/components/sections/FAQSection";
import { generatePageMetadata } from "@/lib/seo";

export const metadata = generatePageMetadata({
  title: "Services | Full-Stack Web Development, UI/UX & Software Engineering",
  description:
    "Explore DigiWebIO's 12 core digital capabilities: Website Development, Web Apps, Mobile Apps, UI/UX Design, E-commerce, SEO, CRM Dashboards, Data Analytics, and Custom ERP Software.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <section className="py-20 bg-grid-pattern relative border-b border-[#252830]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#E2F135] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E2F135]" />
              OUR CORE CAPABILITIES
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
              Technology, Design & Growth — <span className="text-[#E2F135]">All in One Place.</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              From web and app development to UI/UX, digital marketing, social media, and data analytics, we help businesses build and grow their digital presence.
            </p>
          </div>
        </div>
      </section>

      <ServicesGrid />
      <ProcessStepper />
      <FAQSection />
      <ContactForm />
    </>
  );
}
