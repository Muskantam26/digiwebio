import ContactForm from "@/components/sections/ContactForm";
import FAQSection from "@/components/sections/FAQSection";
import { generatePageMetadata } from "@/lib/seo";

export const metadata = generatePageMetadata({
  title: "Contact Us | DigiWebIO",
  description:
    "Get in touch with the DigiWebIO team for web development, UI/UX design, custom software, and digital marketing inquiries. We're here to help.",
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
              Get In Touch
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
              Contact our team directly.
            </h1>
            <p className="text-base text-slate-300 leading-relaxed">
              Have questions, technical inquiries, or want to discuss collaboration? Drop us a message below or connect with our leads via email or WhatsApp. We reply within 24 hours.
            </p>
          </div>
        </div>
      </section>

      <ContactForm />
      <FAQSection />
    </>
  );
}
