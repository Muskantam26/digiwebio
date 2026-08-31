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
  title: "DigiWebIO | Software Development Agency",
  description:
    "DigiWebIO is a software development agency helping businesses build modern websites, web applications, e-commerce solutions, custom software and digital products.",
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
