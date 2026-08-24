import ContactForm from "@/components/sections/ContactForm";
import FAQSection from "@/components/sections/FAQSection";
import { generatePageMetadata } from "@/lib/seo";

export const metadata = generatePageMetadata({
  title: "Contact Us | Start a Project with DigiWebIO",
  description:
    "Get in touch with DigiWebIO for web development, web application engineering, UI/UX design, SEO, and custom ERP software. Request a project proposal today.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <section className="py-20 bg-grid-pattern relative border-b border-[#252830]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#E2F135] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E2F135]" />
              Direct Project Enquiry
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
              Let&apos;s build your next digital product together.
            </h1>
            <p className="text-base text-slate-300 leading-relaxed">
              Fill out our enquiry form or connect directly with our engineering leads via email or WhatsApp. We reply to all inquiries within 24 hours.
            </p>
          </div>
        </div>
      </section>

      <ContactForm />
      <FAQSection />
    </>
  );
}
