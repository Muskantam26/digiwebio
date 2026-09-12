"use client";

import { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send, CheckCircle2, AlertCircle, Loader2, Phone, Mail, MapPin } from "lucide-react";
import gsap from "gsap";
import { SITE_CONFIG, getWhatsAppUrl } from "@/lib/config";
import { enquiryFormSchema, EnquiryFormInputs } from "@/lib/validation";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from(".contact-info-block", {
        opacity: 0,
        x: -25,
        duration: 0.7,
        stagger: 0.12,
        ease: "power2.out",
      });
      gsap.from(".contact-form-card", {
        opacity: 0,
        y: 25,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.15,
      });
      gsap.from(".contact-field", {
        opacity: 0,
        y: 12,
        duration: 0.5,
        stagger: 0.08,
        ease: "power2.out",
        delay: 0.3,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<EnquiryFormInputs>({
    resolver: zodResolver(enquiryFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      service: SITE_CONFIG.services[0],
      message: "",
    },
  });

  const onSubmit = async (data: EnquiryFormInputs) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          company: "", // Normal contact form omits company
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitStatus({
          success: true,
          message: "Thank you! Your message has been sent successfully. We'll get back to you shortly.",
        });
        reset();
      } else {
        setSubmitStatus({
          success: false,
          message: result.error || "Something went wrong. Please try again.",
        });
      }
    } catch (err) {
      console.error(err);
      setSubmitStatus({
        success: false,
        message: "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section ref={sectionRef} className="py-20 bg-[#0A0B0D] relative" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Information Column */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="contact-info-block inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#E2F135] mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E2F135]" />
                Get In Touch
              </div>
              <h2 className="contact-info-block text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-6">
                We&apos;d love to hear from you.
              </h2>
              <p className="contact-info-block text-sm text-slate-300 leading-relaxed mb-8">
                Have questions about our digital services, need technical advice, or looking to discuss an upcoming initiative? Reach out to us directly or drop us a message.
              </p>

              <div className="space-y-6">
                <div className="contact-info-block flex items-start gap-4 p-4 rounded-xl bg-[#121316] border border-[#252830]">
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

                <div className="contact-info-block flex items-start gap-4 p-4 rounded-xl bg-[#121316] border border-[#252830]">
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

                <div className="contact-info-block flex items-start gap-4 p-4 rounded-xl bg-[#121316] border border-[#252830]">
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
            <div className="contact-info-block mt-8 pt-6 border-t border-[#252830]">
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
          <div className="contact-form-card lg:col-span-7 bg-[#121316] border border-[#252830] rounded-3xl p-6 sm:p-10 shadow-2xl">
            <h3 className="text-xl font-bold text-white mb-2">Send Us a Message</h3>
            <p className="text-xs text-slate-400 mb-8">Fill out the form below and we will get back to you within 24 hours.</p>

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
                <div className="contact-field">
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Full Name <span className="text-[#E2F135]">*</span>
                  </label>
                  <input
                    {...register("name")}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full bg-[#0A0B0D] border border-[#252830] focus:border-[#E2F135] rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none transition-colors"
                  />
                  {errors.name && (
                    <p className="text-[11px] text-rose-400 mt-1">{errors.name.message}</p>
                  )}
                </div>

                <div className="contact-field">
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Email Address <span className="text-[#E2F135]">*</span>
                  </label>
                  <input
                    {...register("email")}
                    type="email"
                    placeholder="e.g. rahul@example.com"
                    className="w-full bg-[#0A0B0D] border border-[#252830] focus:border-[#E2F135] rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none transition-colors"
                  />
                  {errors.email && (
                    <p className="text-[11px] text-rose-400 mt-1">{errors.email.message}</p>
                  )}
                </div>
              </div>

              {/* Row 2: Phone & Service/Topic */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="contact-field">
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

                <div className="contact-field">
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Topic / Service <span className="text-[#E2F135]">*</span>
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
              </div>

              {/* Row 3: Send Message / Your Message */}
              <div className="contact-field">
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Send Message <span className="text-[#E2F135]">*</span>
                </label>
                <textarea
                  {...register("message")}
                  rows={5}
                  placeholder="How can we help you? Write your message here..."
                  className="w-full bg-[#0A0B0D] border border-[#252830] focus:border-[#E2F135] rounded-xl p-4 text-xs text-white placeholder-slate-500 focus:outline-none transition-colors resize-none"
                />
                {errors.message && (
                  <p className="text-[11px] text-rose-400 mt-1">{errors.message.message}</p>
                )}
              </div>

              <div className="contact-field">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#E2F135] hover:bg-[#DFFF12] text-[#0A0B0D] font-bold text-sm py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-[#E2F135]/15 hover:scale-[1.01] disabled:opacity-50 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
