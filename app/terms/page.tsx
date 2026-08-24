import { generatePageMetadata } from "@/lib/seo";

export const metadata = generatePageMetadata({
  title: "Terms & Conditions | DigiWebIO",
  description: "Terms and conditions governing the use of DigiWebIO website services and client agreements.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <div className="py-20 bg-[#0A0B0D]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-white mb-4">Terms & Conditions</h1>
        <p className="text-xs text-slate-400 mb-8">Last Updated: August 2026</p>

        <div className="bg-[#121316] border border-[#252830] rounded-2xl p-8 space-y-6 text-xs sm:text-sm text-slate-300 leading-relaxed">
          <section>
            <h2 className="text-lg font-bold text-white mb-2">1. Acceptance of Terms</h2>
            <p>
              By accessing and using https://digiwebio.in or engaging DigiWebIO for software development services, you agree to comply with and be bound by these Terms and Conditions.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-2">2. Intellectual Property Rights</h2>
            <p>
              Upon complete settlement of agreed project fees, all bespoke source code, UI designs, and deliverables created specifically for the client belong exclusively to the client, unless specified otherwise in a master service agreement.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-2">3. Service Scope & Milestones</h2>
            <p>
              All software development projects execute according to milestone schedules agreed upon in writing during the Strategy phase. Any additions or scope changes outside the initial technical requirements will be estimated separately.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-2">4. Limitation of Liability</h2>
            <p>
              DigiWebIO provides services with reasonable engineering skill and care. DigiWebIO is not liable for indirect, incidental, or consequential damages arising from third-party hosting failures, domain DNS downtime beyond our control, or external API modifications.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
