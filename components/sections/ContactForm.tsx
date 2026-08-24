"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send, CheckCircle2, AlertCircle, Loader2, Phone, Mail, MapPin } from "lucide-react";
import { SITE_CONFIG, getWhatsAppUrl } from "@/lib/config";
import { leadFormSchema, LeadFormInputs } from "@/lib/validation";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LeadFormInputs>({
    resolver: zodResolver(leadFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      company: "",
      service: SITE_CONFIG.services[0],
      budget: SITE_CONFIG.budgets[1],
      description: "",
    },
  });

  const onSubmit = async (data: LeadFormInputs) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitStatus({
          success: true,
          message: result.message || "Your project enquiry has been submitted successfully!",
        });
        reset();
      } else {
        setSubmitStatus({
          success: false,
          message: result.error || "Failed to submit enquiry. Please try again.",
        });
      }
    } catch (err) {
      console.error(err);
      setSubmitStatus({
        success: false,
        message: "An unexpected network error occurred. Please try contacting us on WhatsApp.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-[#0A0B0D] relative" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Information Column */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#E2F135] mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E2F135]" />
                Start A Conversation
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-6">
                Tell us about your project requirements.
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed mb-8">
                Whether you need a full-stack Next.js web application, a modern e-commerce storefront, custom ERP software, or SEO growth strategy—our team is ready to assist.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-[#121316] border border-[#252830]">
                  <div className="w-10 h-10 rounded-lg bg-[#191B20] text-[#E2F135] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase font-bold text-slate-400">Direct Email</h4>
                    <a href={`mailto:${SITE_CONFIG.contact.email}`} className="text-sm font-semibold text-white hover:text-[#E2F135] transition-colors">
                      {SITE_CONFIG.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-[#121316] border border-[#252830]">
                  <div className="w-10 h-10 rounded-lg bg-[#191B20] text-[#E2F135] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase font-bold text-slate-400">Direct Call</h4>
                    <a href={`tel:${SITE_CONFIG.contact.phoneFormatted}`} className="text-sm font-semibold text-white hover:text-[#E2F135] transition-colors">
                      {SITE_CONFIG.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-[#121316] border border-[#252830]">
                  <div className="w-10 h-10 rounded-lg bg-[#191B20] text-[#E2F135] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase font-bold text-slate-400">Headquarters</h4>
                    <p className="text-xs text-white">
                      {SITE_CONFIG.contact.address.street}, {SITE_CONFIG.contact.address.city}, {SITE_CONFIG.contact.address.country}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick WhatsApp fallback button */}
            <div className="mt-8 pt-6 border-t border-[#252830]">
              <p className="text-xs text-slate-400 mb-3">Prefer instant messaging?</p>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#E2F135] bg-[#121316] px-4 py-2.5 rounded-lg border border-[#252830] hover:border-[#E2F135] transition-colors"
              >
                <span>Chat Directly on WhatsApp</span>
                <Send className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7 bg-[#121316] border border-[#252830] rounded-3xl p-6 sm:p-10 shadow-2xl">
            <h3 className="text-xl font-bold text-white mb-2">Project Enquiry Form</h3>
            <p className="text-xs text-slate-400 mb-8">Fill out the details below for a customized project proposal and time estimate.</p>

            {submitStatus && (
              <div
                className={`p-4 rounded-xl mb-6 border flex items-start gap-3 text-xs leading-relaxed ${
                  submitStatus.success
                    ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-300"
                    : "bg-rose-500/10 border-rose-500/30 text-rose-300"
                }`}
              >
                {submitStatus.success ? (
                  <CheckCircle2 className="w-5 h-5 shrink-0 text-emerald-400 mt-0.5" />
                ) : (
                  <AlertCircle className="w-5 h-5 shrink-0 text-rose-400 mt-0.5" />
                )}
                <span>{submitStatus.message}</span>
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Row 1: Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Full Name <span className="text-[#E2F135]">*</span>
                  </label>
                  <input
                    {...register("fullName")}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full bg-[#0A0B0D] border border-[#252830] focus:border-[#E2F135] rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none transition-colors"
                  />
                  {errors.fullName && (
                    <p className="text-[11px] text-rose-400 mt-1">{errors.fullName.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Email Address <span className="text-[#E2F135]">*</span>
                  </label>
                  <input
                    {...register("email")}
                    type="email"
                    placeholder="e.g. rahul@company.com"
                    className="w-full bg-[#0A0B0D] border border-[#252830] focus:border-[#E2F135] rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none transition-colors"
                  />
                  {errors.email && (
                    <p className="text-[11px] text-rose-400 mt-1">{errors.email.message}</p>
                  )}
                </div>
              </div>

              {/* Row 2: Phone & Company */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Phone Number <span className="text-[#E2F135]">*</span>
                  </label>
                  <input
                    {...register("phone")}
                    placeholder="e.g. +91 62689 51339"
                    className="w-full bg-[#0A0B0D] border border-[#252830] focus:border-[#E2F135] rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none transition-colors"
                  />
                  {errors.phone && (
                    <p className="text-[11px] text-rose-400 mt-1">{errors.phone.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Company / Business Name
                  </label>
                  <input
                    {...register("company")}
                    placeholder="e.g. DigiCorp Pvt Ltd"
                    className="w-full bg-[#0A0B0D] border border-[#252830] focus:border-[#E2F135] rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none transition-colors"
                  />
                  {errors.company && (
                    <p className="text-[11px] text-rose-400 mt-1">{errors.company.message}</p>
                  )}
                </div>
              </div>

              {/* Row 3: Service Required & Budget */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Service Required <span className="text-[#E2F135]">*</span>
                  </label>
                  <select
                    {...register("service")}
                    className="w-full bg-[#0A0B0D] border border-[#252830] focus:border-[#E2F135] rounded-xl px-4 py-3 text-xs text-white focus:outline-none transition-colors"
                  >
                    {SITE_CONFIG.services.map((svc) => (
                      <option key={svc} value={svc} className="bg-[#0A0B0D] text-white">
                        {svc}
                      </option>
                    ))}
                  </select>
                  {errors.service && (
                    <p className="text-[11px] text-rose-400 mt-1">{errors.service.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Project Budget <span className="text-[#E2F135]">*</span>
                  </label>
                  <select
                    {...register("budget")}
                    className="w-full bg-[#0A0B0D] border border-[#252830] focus:border-[#E2F135] rounded-xl px-4 py-3 text-xs text-white focus:outline-none transition-colors"
                  >
                    {SITE_CONFIG.budgets.map((b) => (
                      <option key={b} value={b} className="bg-[#0A0B0D] text-white">
                        {b}
                      </option>
                    ))}
                  </select>
                  {errors.budget && (
                    <p className="text-[11px] text-rose-400 mt-1">{errors.budget.message}</p>
                  )}
                </div>
              </div>

              {/* Row 4: Description */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Project Description <span className="text-[#E2F135]">*</span>
                </label>
                <textarea
                  {...register("description")}
                  rows={4}
                  placeholder="Describe your project goals, scope, key features, or reference links..."
                  className="w-full bg-[#0A0B0D] border border-[#252830] focus:border-[#E2F135] rounded-xl p-4 text-xs text-white placeholder-slate-500 focus:outline-none transition-colors resize-none"
                />
                {errors.description && (
                  <p className="text-[11px] text-rose-400 mt-1">{errors.description.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#E2F135] hover:bg-[#DFFF12] text-[#0A0B0D] font-bold text-sm py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-[#E2F135]/15 hover:scale-[1.01] disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Submitting Enquiry...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Project Enquiry</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
