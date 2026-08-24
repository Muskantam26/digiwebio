import { generatePageMetadata } from "@/lib/seo";

export const metadata = generatePageMetadata({
  title: "Privacy Policy | DigiWebIO",
  description: "DigiWebIO privacy policy regarding client data protection, security, and contact form handling.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <div className="py-20 bg-[#0A0B0D]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-white mb-4">Privacy Policy</h1>
        <p className="text-xs text-slate-400 mb-8">Last Updated: August 2026</p>

        <div className="bg-[#121316] border border-[#252830] rounded-2xl p-8 space-y-6 text-xs sm:text-sm text-slate-300 leading-relaxed">
          <section>
            <h2 className="text-lg font-bold text-white mb-2">1. Information We Collect</h2>
            <p>
              When you fill out a project enquiry form on DigiWebIO (https://digiwebio.in), we collect your full name, email address, phone number, company name, service requirements, budget bracket, and project description.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-2">2. How We Use Your Data</h2>
            <p>
              We use your submitted details exclusively to evaluate project specifications, generate custom proposals, communicate project milestones, and fulfill technical service agreements. We do not sell or lease your personal information to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-2">3. Data Security & Storage</h2>
            <p>
              All enquiry data submitted through our platform is sanitized server-side, encrypted in transit via SSL/TLS, and stored securely within MongoDB Atlas cloud infrastructure adhering to industry standard access control routines.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-2">4. Contacting Us</h2>
            <p>
              If you have questions regarding this Privacy Policy or your stored information, please email us directly at contact@digiwebio.in.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
