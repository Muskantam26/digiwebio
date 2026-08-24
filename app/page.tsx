import Hero from "@/components/sections/Hero";
import ServicesGrid from "@/components/sections/ServicesGrid";
import ProcessStepper from "@/components/sections/ProcessStepper";
import PortfolioGrid from "@/components/sections/PortfolioGrid";
import TechStackShowcase from "@/components/sections/TechStackShowcase";
import TeamSection from "@/components/sections/TeamSection";
import BlogGrid from "@/components/sections/BlogGrid";
import FAQSection from "@/components/sections/FAQSection";
import ContactForm from "@/components/sections/ContactForm";
import { generatePageMetadata } from "@/lib/seo";

export const metadata = generatePageMetadata({
  title: "DigiWebIO | Full-Stack Web Development & Digital Agency India",
  description:
    "DigiWebIO is a premier Indian digital technology agency specializing in Next.js web applications, bespoke website development, mobile apps, UI/UX design, SEO, and custom ERP software.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesGrid limit={6} />
      <ProcessStepper />
      <PortfolioGrid limit={4} />
      <TechStackShowcase />
      <TeamSection />
      <BlogGrid limit={3} />
      <FAQSection />
      <ContactForm />
    </>
  );
}
