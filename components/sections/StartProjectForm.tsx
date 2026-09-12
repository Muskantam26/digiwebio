"use client";

import { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Sparkles,
  X,
  ArrowRight,
  Clock,
  Wallet,
  Layers,
  ShieldCheck,
} from "lucide-react";
import gsap from "gsap";
import { projectInquirySchema, ProjectInquiryInputs } from "@/lib/validation";

const SERVICES_OPTIONS = [
  { id: "web-app", label: "Web Application Development", desc: "SaaS, portals & complex apps" },
  { id: "website", label: "Custom Website & Landing Page", desc: "Next.js, fast & responsive" },
  { id: "mobile-app", label: "Mobile App Development", desc: "iOS & Android solutions" },
  { id: "ui-ux", label: "UI/UX & Product Design", desc: "Design systems & wireframes" },
  { id: "ecommerce", label: "E-Commerce Solutions", desc: "Online store & checkout flows" },
  { id: "erp-crm", label: "ERP & Custom Dashboards", desc: "Business automation & metrics" },
  { id: "seo-growth", label: "SEO & Digital Growth", desc: "Traffic, search rankings & CRO" },
  { id: "cloud-devops", label: "Cloud & API Engineering", desc: "Scalable backend & database" },
];

const BUDGET_OPTIONS = [
  { id: "b1", label: "< $1,000", sub: "₹40k - ₹80k" },
  { id: "b2", label: "$1,000 - $3,000", sub: "₹80k - ₹2.5L" },
  { id: "b3", label: "$3,000 - $6,000", sub: "₹2.5L - ₹5L" },
  { id: "b4", label: "$6,000+", sub: "Enterprise scale" },
];

const TIMELINE_OPTIONS = [
  { id: "t1", label: "Urgent (< 1 month)" },
  { id: "t2", label: "1 - 3 months" },
  { id: "t3", label: "3 - 6 months" },
  { id: "t4", label: "Flexible timeline" },
];

export default function StartProjectForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [showThankYouModal, setShowThankYouModal] = useState(false);
  const [submittedData, setSubmittedData] = useState<ProjectInquiryInputs | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const modalOverlayRef = useRef<HTMLDivElement>(null);
  const modalCardRef = useRef<HTMLDivElement>(null);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<ProjectInquiryInputs>({
    resolver: zodResolver(projectInquirySchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      company: "",
      service: SERVICES_OPTIONS[0].label,
      budget: BUDGET_OPTIONS[1].label,
      timeline: TIMELINE_OPTIONS[1].label,
      description: "",
    },
  });

  const selectedService = watch("service");
  const selectedBudget = watch("budget");
  const selectedTimeline = watch("timeline");

  // GSAP Entrance Animations
  useEffect(() => {
    if (!containerRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from(".sp-header-item", {
        opacity: 0,
        y: 20,
        duration: 0.7,
        stagger: 0.12,
        ease: "power3.out",
      });
      gsap.from(".sp-section-block", {
        opacity: 0,
        y: 25,
        duration: 0.7,
        stagger: 0.15,
        delay: 0.2,
        ease: "power2.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // GSAP Modal Pop Animation
  useEffect(() => {
    if (showThankYouModal && modalCardRef.current && modalOverlayRef.current) {
      const tl = gsap.timeline();
      tl.fromTo(
        modalOverlayRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3, ease: "power2.out" }
      )
        .fromTo(
          modalCardRef.current,
          { scale: 0.8, opacity: 0, y: 30 },
          { scale: 1, opacity: 1, y: 0, duration: 0.5, ease: "back.out(1.5)" },
          "-=0.15"
        )
        .fromTo(
          ".modal-check-icon",
          { scale: 0, rotate: -45 },
          { scale: 1, rotate: 0, duration: 0.4, ease: "back.out(2)" },
          "-=0.2"
        )
        .fromTo(
          ".modal-stagger-item",
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.35, stagger: 0.08, ease: "power2.out" },
          "-=0.1"
        );
    }
  }, [showThankYouModal]);

  const closeModal = () => {
    if (modalCardRef.current && modalOverlayRef.current) {
      gsap.to(modalCardRef.current, {
        scale: 0.85,
        opacity: 0,
        y: 20,
        duration: 0.25,
        ease: "power2.in",
      });
      gsap.to(modalOverlayRef.current, {
        opacity: 0,
        duration: 0.25,
        ease: "power2.in",
        onComplete: () => setShowThankYouModal(false),
      });
    } else {
      setShowThankYouModal(false);
    }
  };

  const onSubmit = async (data: ProjectInquiryInputs) => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: data.fullName,
          email: data.email,
          phone: data.phone,
          company: data.company || "",
          service: data.service,
          budget: data.budget,
          timeline: data.timeline,
          message: data.description,
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmittedData(data);
        setShowThankYouModal(true);
        reset();
      } else {
        setSubmitError(result.error || "Submission failed. Please check your form input.");
      }
    } catch (err) {
      console.error("Submission error:", err);
      setSubmitError("Network error. Please verify your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div ref={containerRef} className="relative">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-12">
        {/* Step 1: Services Selection */}
        <div className="sp-section-block bg-[#121316] border border-[#252830] rounded-3xl p-6 sm:p-8 relative overflow-hidden">
          <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-[#E2F135] mb-2">
            <Layers className="w-4 h-4 text-[#E2F135]" />
            <span>Step 1 of 4</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
            What do you need help with?
          </h3>
          <p className="text-xs text-slate-400 mb-6">
            Select the primary service required for your project.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {SERVICES_OPTIONS.map((item) => {
              const isSelected = selectedService === item.label;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setValue("service", item.label, { shouldValidate: true })}
                  className={`text-left p-4 rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? "bg-[#E2F135]/10 border-[#E2F135] text-white shadow-lg shadow-[#E2F135]/10"
                      : "bg-[#0A0B0D] border-[#252830] text-slate-300 hover:border-slate-600 hover:bg-[#15171C]"
                  }`}
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <span className="text-xs font-bold leading-snug">{item.label}</span>
                    <span
                      className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                        isSelected
                          ? "border-[#E2F135] bg-[#E2F135] text-[#0A0B0D]"
                          : "border-[#404554] bg-transparent"
                      }`}
                    >
                      {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-[#0A0B0D]" />}
                    </span>
                  </div>
                  <span className="text-[11px] text-slate-400 leading-tight">{item.desc}</span>
                </button>
              );
            })}
          </div>
          {errors.service && (
            <p className="text-xs text-rose-400 mt-3">{errors.service.message}</p>
          )}
        </div>

        {/* Step 2: Budget & Timeline */}
        <div className="sp-section-block bg-[#121316] border border-[#252830] rounded-3xl p-6 sm:p-8">
          <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-[#E2F135] mb-2">
            <Wallet className="w-4 h-4 text-[#E2F135]" />
            <span>Step 2 of 4</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
            Scope, Budget & Timeline
          </h3>
          <p className="text-xs text-slate-400 mb-6">
            This helps our engineers structure the initial roadmap and team allocation.
          </p>

          <div className="space-y-6">
            {/* Budget options */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-3">
                Estimated Budget Range
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {BUDGET_OPTIONS.map((b) => {
                  const isSelected = selectedBudget === b.label;
                  return (
                    <button
                      key={b.id}
                      type="button"
                      onClick={() => setValue("budget", b.label)}
                      className={`p-3.5 rounded-xl border text-center transition-all duration-200 cursor-pointer ${
                        isSelected
                          ? "bg-[#E2F135]/15 border-[#E2F135] text-white shadow-md shadow-[#E2F135]/10"
                          : "bg-[#0A0B0D] border-[#252830] text-slate-300 hover:border-slate-600 hover:bg-[#15171C]"
                      }`}
                    >
                      <div className="text-xs font-bold">{b.label}</div>
                      <div className="text-[10px] text-slate-400 mt-0.5">{b.sub}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Timeline options */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-3">
                Target Launch Timeline
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {TIMELINE_OPTIONS.map((t) => {
                  const isSelected = selectedTimeline === t.label;
                  return (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setValue("timeline", t.label)}
                      className={`p-3.5 rounded-xl border text-center transition-all duration-200 cursor-pointer ${
                        isSelected
                          ? "bg-[#E2F135]/15 border-[#E2F135] text-white shadow-md shadow-[#E2F135]/10"
                          : "bg-[#0A0B0D] border-[#252830] text-slate-300 hover:border-slate-600 hover:bg-[#15171C]"
                      }`}
                    >
                      <div className="text-xs font-semibold">{t.label}</div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Step 3: Project Requirements */}
        <div className="sp-section-block bg-[#121316] border border-[#252830] rounded-3xl p-6 sm:p-8">
          <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-[#E2F135] mb-2">
            <Sparkles className="w-4 h-4 text-[#E2F135]" />
            <span>Step 3 of 4</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
            Project Need & Description
          </h3>
          <p className="text-xs text-slate-400 mb-6">
            Describe your project goals, core features, existing website / design references, or technical preferences.
          </p>

          <div>
            <textarea
              {...register("description")}
              rows={6}
              placeholder="e.g. We need a high-performance Next.js web app with authentication, Stripe payment gateway, and a custom dashboard. Target launch is within 2 months..."
              className="w-full bg-[#0A0B0D] border border-[#252830] focus:border-[#E2F135] rounded-2xl p-4 text-xs text-white placeholder-slate-500 focus:outline-none transition-colors resize-none leading-relaxed"
            />
            {errors.description && (
              <p className="text-xs text-rose-400 mt-2">{errors.description.message}</p>
            )}
          </div>
        </div>

        {/* Step 4: Contact & Organization Details */}
        <div className="sp-section-block bg-[#121316] border border-[#252830] rounded-3xl p-6 sm:p-8">
          <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-[#E2F135] mb-2">
            <ShieldCheck className="w-4 h-4 text-[#E2F135]" />
            <span>Step 4 of 4</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
            Your Contact Information
          </h3>
          <p className="text-xs text-slate-400 mb-6">
            Where should we send your preliminary project proposal and estimate?
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                Your Full Name <span className="text-[#E2F135]">*</span>
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
                Work Email Address <span className="text-[#E2F135]">*</span>
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

            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                Phone / WhatsApp Number <span className="text-[#E2F135]">*</span>
              </label>
              <input
                {...register("phone")}
                placeholder="e.g. +91 98765 43210"
                className="w-full bg-[#0A0B0D] border border-[#252830] focus:border-[#E2F135] rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none transition-colors"
              />
              {errors.phone && (
                <p className="text-[11px] text-rose-400 mt-1">{errors.phone.message}</p>
              )}
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                Company / Brand Name <span className="text-slate-500 text-[10px] lowercase">(optional)</span>
              </label>
              <input
                {...register("company")}
                placeholder="e.g. Acme Innovations Pvt Ltd"
                className="w-full bg-[#0A0B0D] border border-[#252830] focus:border-[#E2F135] rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none transition-colors"
              />
              {errors.company && (
                <p className="text-[11px] text-rose-400 mt-1">{errors.company.message}</p>
              )}
            </div>
          </div>
        </div>

        {/* Global Error Banner */}
        {submitError && (
          <div className="p-4 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-3">
            <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />
            <span>{submitError}</span>
          </div>
        )}

        {/* Submit Button */}
        <div className="sp-section-block">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#E2F135] hover:bg-[#DFFF12] text-[#0A0B0D] font-extrabold text-sm sm:text-base py-5 rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 shadow-xl shadow-[#E2F135]/20 hover:scale-[1.01] hover:shadow-[#E2F135]/35 disabled:opacity-50 cursor-pointer"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Processing Project Scope...</span>
              </>
            ) : (
              <>
                <span>Submit Project Scope & Get Free Quote</span>
                <Send className="w-5 h-5" />
              </>
            )}
          </button>
          <p className="text-center text-[11px] text-slate-500 mt-3">
            🔒 Strictly confidential. We respect your intellectual property and sign NDAs upon request.
          </p>
        </div>
      </form>

      {/* GSAP Animated Thank You Modal */}
      {showThankYouModal && (
        <div
          ref={modalOverlayRef}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
        >
          <div
            ref={modalCardRef}
            className="relative w-full max-w-lg bg-[#121316] border border-[#252830] rounded-3xl p-6 sm:p-10 shadow-2xl text-center overflow-hidden"
          >
            {/* Glowing background accent */}
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-64 h-64 bg-[#E2F135]/15 rounded-full blur-3xl pointer-events-none" />

            {/* Close (X) button */}
            <button
              onClick={closeModal}
              className="absolute top-5 right-5 p-2 rounded-full bg-[#191B20] text-slate-400 hover:text-white hover:bg-[#252830] transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Checkmark Icon with GSAP Pop */}
            <div className="modal-check-icon w-20 h-20 mx-auto mb-6 rounded-full bg-[#E2F135]/15 border-2 border-[#E2F135] flex items-center justify-center shadow-lg shadow-[#E2F135]/25">
              <CheckCircle2 className="w-10 h-10 text-[#E2F135]" />
            </div>

            <span className="modal-stagger-item inline-block text-[11px] font-bold uppercase tracking-widest text-[#E2F135] mb-2 bg-[#E2F135]/10 px-3 py-1 rounded-full border border-[#E2F135]/30">
              Inquiry Received
            </span>

            <h3 className="modal-stagger-item text-2xl sm:text-3xl font-extrabold text-white mb-3 tracking-tight">
              Thank You for Reaching Out!
            </h3>

            <p className="modal-stagger-item text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
              We have received your project details. Our lead architects are reviewing your requirements and will reach out within <span className="text-[#E2F135] font-semibold">24 hours</span> with a customized project roadmap and estimate.
            </p>

            {submittedData && (
              <div className="modal-stagger-item bg-[#0A0B0D] border border-[#252830] rounded-2xl p-4 mb-6 text-left text-xs space-y-2">
                <div className="flex justify-between text-slate-400">
                  <span>Selected Service:</span>
                  <span className="font-semibold text-white">{submittedData.service}</span>
                </div>
                {submittedData.budget && (
                  <div className="flex justify-between text-slate-400">
                    <span>Budget Range:</span>
                    <span className="font-semibold text-[#E2F135]">{submittedData.budget}</span>
                  </div>
                )}
                <div className="flex justify-between text-slate-400">
                  <span>Confirmation sent to:</span>
                  <span className="font-semibold text-white">{submittedData.email}</span>
                </div>
              </div>
            )}

            <div className="modal-stagger-item flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/"
                onClick={closeModal}
                className="inline-flex items-center justify-center gap-2 bg-[#E2F135] hover:bg-[#DFFF12] text-[#0A0B0D] font-bold text-xs px-6 py-3.5 rounded-xl transition-all shadow-md shadow-[#E2F135]/20"
              >
                <span>Back to Homepage</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/projects"
                onClick={closeModal}
                className="inline-flex items-center justify-center gap-2 bg-[#191B20] hover:bg-[#252830] text-white font-semibold text-xs px-6 py-3.5 rounded-xl border border-[#252830] transition-colors"
              >
                <span>View Case Studies</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
