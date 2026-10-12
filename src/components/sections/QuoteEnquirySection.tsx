"use client";

import React, { useState } from "react";
import { productsCatalogue } from "@/data/products";
import { useModal } from "@/context/ModalContext";
import { Send, CheckCircle2, AlertCircle, Upload, ShieldCheck, PhoneCall, Building2 } from "lucide-react";
import { motion } from "framer-motion";

export default function QuoteEnquirySection() {
  const { selectedProductForRfq } = useModal();
  
  const [formData, setFormData] = useState({
    product: selectedProductForRfq || productsCatalogue[0].name,
    quantity: "500",
    units: "KG",
    name: "",
    company: "",
    email: "",
    phone: "",
    country: "Germany",
    details: "",
    consent: true,
  });

  const [fileName, setFileName] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Validation
    if (!formData.name || !formData.company || !formData.email || !formData.phone) {
      setErrorMessage("Please complete all required fields (Name, Company, Work Email, Phone).");
      return;
    }

    if (!formData.consent) {
      setErrorMessage("Please accept the data processing terms to proceed.");
      return;
    }

    setIsSubmitting(true);

    // Simulate modular API dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  return (
    <section className="relative w-full bg-[#FFFFFF] text-[#111111] py-24 sm:py-32 overflow-hidden border-b border-[#D5DAE0]" id="quote">
      {/* Blueprint grid background */}
      <div className="absolute inset-0 bg-blueprint-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading and Context */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center space-x-2 text-xs font-mono-tech uppercase tracking-[0.25em] text-[#0B2A4A]" data-aos="fade-up">
              <span className="w-5 h-[2px] bg-[#EF6C23]" />
              <span>DIRECT COMMERCIAL QUOTATION</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-heading font-black tracking-tight text-[#0B2A4A] leading-[1.05]" data-aos="fade-up">
              Request a Quote
            </h2>

            <p className="text-sm sm:text-base text-[#2B333B] leading-relaxed" data-aos="fade-up">
              Connect directly with PROMETALLIK&apos;s metallurgical and commercial desk. Share your required alloy grade, particle size distribution, target delivery port, and quantity.
            </p>

            {/* Credibility Box */}
            <div className="p-6 bg-[#EEF0F2] rounded-xl border border-[#D5DAE0] space-y-3" data-aos="fade-up">
              <div className="flex items-center space-x-2 text-xs font-mono-tech uppercase text-[#0B2A4A] font-bold">
                <ShieldCheck className="w-4 h-4 text-[#EF6C23]" />
                <span>Commercial Turnaround Standards</span>
              </div>
              <ul className="text-xs text-[#596573] space-y-2">
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#EF6C23]" />
                  <span>Formal quotation with typical assay limits within 24 business hours.</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#EF6C23]" />
                  <span>Free sample evaluation quantities available for accredited industrial labs.</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#EF6C23]" />
                  <span>Worldwide CIF / FOB export logistics supported.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Quotation Form */}
          <div className="lg:col-span-7 bg-[#EEF0F2] rounded-xl p-8 sm:p-10 border border-[#D5DAE0] shadow-md" data-aos="fade-left">
            {isSuccess ? (
              <div className="p-8 bg-white rounded-lg border border-emerald-500 text-center space-y-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-600">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-heading font-black text-[#0B2A4A]">
                  Quotation Request Validated
                </h3>
                <p className="text-xs sm:text-sm text-[#2B333B] max-w-md mx-auto leading-relaxed">
                  Your requirements for <strong>{formData.product}</strong> ({formData.quantity} {formData.units}) have been logged in the frontend prototype. Our commercial desk will review your specifications.
                </p>
                <div className="text-[10px] font-mono-tech text-[#596573] p-2 bg-[#EEF0F2] rounded">
                  [Frontend Prototype: Modular submission logic verified & ready for production backend API hookup]
                </div>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="mt-4 px-6 py-2.5 bg-[#0B2A4A] text-white text-xs font-mono-tech uppercase tracking-wider rounded"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {errorMessage && (
                  <div className="p-3 bg-red-100 border border-red-400 text-red-800 text-xs font-mono-tech rounded flex items-center space-x-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Product Selector */}
                <div>
                  <label className="block text-xs font-mono-tech uppercase tracking-wider text-[#0B2A4A] font-bold mb-1.5">
                    Target Material / Product Formulation *
                  </label>
                  <select
                    value={formData.product}
                    onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#D5DAE0] rounded text-xs text-[#111111] focus:outline-hidden focus:border-[#EF6C23]"
                  >
                    {productsCatalogue.map((p) => (
                      <option key={p.id} value={p.name}>
                        {p.name} ({p.chemicalFormula})
                      </option>
                    ))}
                    <option value="Custom Bespoke Specification">Custom Bespoke Specification / Alloy</option>
                  </select>
                </div>

                {/* Quantity and Units */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono-tech uppercase tracking-wider text-[#0B2A4A] font-bold mb-1.5">
                      Required Quantity *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.quantity}
                      onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                      placeholder="e.g. 500"
                      className="w-full px-3.5 py-2.5 bg-white border border-[#D5DAE0] rounded text-xs text-[#111111] focus:outline-hidden focus:border-[#EF6C23]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono-tech uppercase tracking-wider text-[#0B2A4A] font-bold mb-1.5">
                      Units *
                    </label>
                    <select
                      value={formData.units}
                      onChange={(e) => setFormData({ ...formData, units: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-[#D5DAE0] rounded text-xs text-[#111111] focus:outline-hidden focus:border-[#EF6C23]"
                    >
                      <option value="KG">Kilograms (KG)</option>
                      <option value="Metric Tons (MT)">Metric Tons (MT)</option>
                      <option value="Grams (Sample)">Grams (Testing Sample)</option>
                      <option value="Drums (50kg)">Drums (50kg Standard)</option>
                    </select>
                  </div>
                </div>

                {/* Name & Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono-tech uppercase tracking-wider text-[#0B2A4A] font-bold mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Full Name"
                      className="w-full px-3.5 py-2.5 bg-white border border-[#D5DAE0] rounded text-xs text-[#111111] focus:outline-hidden focus:border-[#EF6C23]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono-tech uppercase tracking-wider text-[#0B2A4A] font-bold mb-1.5">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Organization / Entity"
                      className="w-full px-3.5 py-2.5 bg-white border border-[#D5DAE0] rounded text-xs text-[#111111] focus:outline-hidden focus:border-[#EF6C23]"
                    />
                  </div>
                </div>

                {/* Email, Phone & Country */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-mono-tech uppercase tracking-wider text-[#0B2A4A] font-bold mb-1.5">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="corporate@domain.com"
                      className="w-full px-3.5 py-2.5 bg-white border border-[#D5DAE0] rounded text-xs text-[#111111] focus:outline-hidden focus:border-[#EF6C23]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono-tech uppercase tracking-wider text-[#0B2A4A] font-bold mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+49 / +91 ..."
                      className="w-full px-3.5 py-2.5 bg-white border border-[#D5DAE0] rounded text-xs text-[#111111] focus:outline-hidden focus:border-[#EF6C23]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono-tech uppercase tracking-wider text-[#0B2A4A] font-bold mb-1.5">
                      Country *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      placeholder="e.g. Germany, France"
                      className="w-full px-3.5 py-2.5 bg-white border border-[#D5DAE0] rounded text-xs text-[#111111] focus:outline-hidden focus:border-[#EF6C23]"
                    />
                  </div>
                </div>

                {/* Requirement Details */}
                <div>
                  <label className="block text-xs font-mono-tech uppercase tracking-wider text-[#0B2A4A] font-bold mb-1.5">
                    Technical Requirements &amp; Target Destination
                  </label>
                  <textarea
                    rows={3}
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    placeholder="Specify particle size distribution (FSSS / laser), chemical purity thresholds, packaging preferences, or delivery port..."
                    className="w-full px-3.5 py-2.5 bg-white border border-[#D5DAE0] rounded text-xs text-[#111111] focus:outline-hidden focus:border-[#EF6C23]"
                  />
                </div>

                {/* Optional File Upload */}
                <div>
                  <label className="block text-xs font-mono-tech uppercase tracking-wider text-[#0B2A4A] font-bold mb-1.5">
                    Optional Specification Sheet / Drawings (PDF, DWG, DOCX)
                  </label>
                  <div className="flex items-center space-x-3">
                    <label className="cursor-pointer px-4 py-2 bg-white border border-[#D5DAE0] hover:border-[#EF6C23] rounded text-xs font-mono-tech text-[#0B2A4A] flex items-center space-x-2 transition-colors">
                      <Upload className="w-3.5 h-3.5 text-[#EF6C23]" />
                      <span>{fileName ? "Change File" : "Choose File"}</span>
                      <input
                        type="file"
                        className="hidden"
                        onChange={(e) => {
                          if (e.target.files && e.target.files[0]) {
                            setFileName(e.target.files[0].name);
                          }
                        }}
                      />
                    </label>
                    <span className="text-xs font-mono-tech text-[#596573] truncate max-w-xs">
                      {fileName || "No file selected"}
                    </span>
                  </div>
                </div>

                {/* Consent Checkbox */}
                <div className="flex items-start space-x-2 pt-2">
                  <input
                    type="checkbox"
                    id="consent-check"
                    checked={formData.consent}
                    onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                    className="mt-0.5 rounded border-[#D5DAE0] text-[#EF6C23] focus:ring-[#EF6C23]"
                  />
                  <label htmlFor="consent-check" className="text-[11px] text-[#596573] leading-snug">
                    I consent to PROMETALLIK processing my contact information solely for commercial quotation and technical inquiries.
                  </label>
                </div>

                {/* Submit CTA */}
                <div className="pt-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-[#EF6C23] hover:bg-[#d85e19] text-white font-heading font-bold text-xs uppercase tracking-wider rounded transition-all shadow-md shadow-[#EF6C23]/25 flex items-center justify-center space-x-2 disabled:opacity-75"
                  >
                    {isSubmitting ? (
                      <span>Validating Specification...</span>
                    ) : (
                      <>
                        <span>Discuss Your Requirement</span>
                        <Send className="w-4 h-4 ml-1" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
