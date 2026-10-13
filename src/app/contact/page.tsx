"use client";

import React, { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { productsCatalogue } from "@/data/products";
import ContactSectionWithMap from "@/components/sections/ContactSectionWithMap";
import {
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  Loader2,
  UploadCloud,
  ShieldCheck,
  Building,
  Factory,
  Clock,
  ArrowRight,
} from "lucide-react";

function ContactPageContent() {
  const searchParams = useSearchParams();
  const preselectedProduct = searchParams.get("product") || "";

  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    phone: "",
    email: "",
    country: "Germany",
    product: "",
    quantity: "500",
    quantityUnit: "KG",
    message: "",
    consent: true,
  });

  const [fileName, setFileName] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedProduct) {
      const match = productsCatalogue.find(
        (p) =>
          p.id === preselectedProduct ||
          p.slug === preselectedProduct ||
          p.name.toLowerCase().includes(preselectedProduct.toLowerCase())
      );
      if (match) {
        setFormData((prev) => ({ ...prev, product: match.name }));
      }
    } else if (!formData.product && productsCatalogue.length > 0) {
      setFormData((prev) => ({ ...prev, product: productsCatalogue[0].name }));
    }
  }, [preselectedProduct]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <div className="w-full flex flex-col bg-[#EEF0F2] text-[#111111]">
      {/* Contact Hero */}
      <section className="relative w-full py-20 bg-[#0B2A4A] text-white overflow-hidden border-b border-[#145B8C]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/images/plant/plant-floor.jpg"
            alt="PROMETALLIK manufacturing facility and commercial contact desk"
            fill
            priority
            className="object-cover object-center filter contrast-125 brightness-[0.35]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B2A4A] via-[#0B2A4A]/80 to-transparent" />
          <div className="absolute inset-0 bg-industrial-grid-dark opacity-20 pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full p_t_35">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 text-xs font-mono-tech uppercase tracking-[0.25em] text-[#F5B400] mb-4" data-aos="fade-up">
              <span className="w-6 h-[2px] bg-[#EF6C23]" />
              <span>COMMERCIAL &amp; TECHNICAL ENGAGEMENT</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-heading font-black tracking-tight text-white leading-tight" data-aos="fade-up">
              Contact Our Metallurgical Desk
            </h1>
            <p className="mt-6 text-base sm:text-lg text-[#B8BEC5] leading-relaxed" data-aos="fade-up">
              Whether you are preparing an RFQ for European supply, requesting testing samples, or scheduling a plant audit, our commercial and engineering teams are ready to assist.
            </p>
          </div>
        </div>
      </section>

      {/* Main Quotation Form Section */}
      <section className="py-20 bg-white border-b border-[#D5DAE0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" data-aos="fade-up">
          <div className="bg-[#EEF0F2] rounded-xl p-8 sm:p-12 border border-[#D5DAE0] shadow-sm">
            {submitted ? (
              <div className="p-8 bg-white rounded-lg border border-emerald-500 text-center space-y-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-600">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-heading font-black text-[#0B2A4A]">
                  Inquiry Successfully Validated
                </h2>
                <p className="text-sm text-[#2B333B] max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{formData.fullName}</strong>. Your requirement for <strong>{formData.product}</strong> ({formData.quantity} {formData.quantityUnit}) has been registered.
                </p>
                <div className="text-[10px] font-mono-tech text-[#596573] p-2 bg-[#EEF0F2] rounded">
                  [Frontend Prototype: Form validation verified &amp; ready for API integration]
                </div>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 bg-[#0B2A4A] text-white text-xs font-mono-tech uppercase tracking-wider rounded"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="border-b border-[#D5DAE0] pb-4">
                  <h2 className="text-2xl font-heading font-black text-[#0B2A4A]">
                    Discuss Your Requirement
                  </h2>
                  <p className="text-xs text-[#596573] mt-1 font-mono-tech">
                    Direct communication with PROMETALLIK commercial operations
                  </p>
                </div>

                {/* Form fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono-tech uppercase tracking-wider text-[#0B2A4A] font-bold mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="Your Full Name"
                      className="w-full px-3.5 py-2.5 bg-white border border-[#D5DAE0] rounded text-xs text-[#111111] focus:outline-hidden focus:border-[#EF6C23]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono-tech uppercase tracking-wider text-[#0B2A4A] font-bold mb-1.5">
                      Company *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Company / Organization"
                      className="w-full px-3.5 py-2.5 bg-white border border-[#D5DAE0] rounded text-xs text-[#111111] focus:outline-hidden focus:border-[#EF6C23]"
                    />
                  </div>
                </div>

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
                      placeholder="Country of Destination"
                      className="w-full px-3.5 py-2.5 bg-white border border-[#D5DAE0] rounded text-xs text-[#111111] focus:outline-hidden focus:border-[#EF6C23]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-mono-tech uppercase tracking-wider text-[#0B2A4A] font-bold mb-1.5">
                      Product Formulation *
                    </label>
                    <select
                      value={formData.product}
                      onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-[#D5DAE0] rounded text-xs text-[#111111] focus:outline-hidden focus:border-[#EF6C23]"
                    >
                      {productsCatalogue.map((p) => (
                        <option key={p.id} value={p.name}>
                          {p.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-mono-tech uppercase tracking-wider text-[#0B2A4A] font-bold mb-1.5">
                      Quantity &amp; Units *
                    </label>
                    <div className="flex">
                      <input
                        type="text"
                        required
                        value={formData.quantity}
                        onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                        className="w-1/2 px-3 py-2.5 bg-white border border-[#D5DAE0] rounded-l text-xs text-[#111111]"
                      />
                      <select
                        value={formData.quantityUnit}
                        onChange={(e) => setFormData({ ...formData, quantityUnit: e.target.value })}
                        className="w-1/2 px-2 py-2.5 bg-[#EEF0F2] border-y border-r border-[#D5DAE0] rounded-r text-xs text-[#111111]"
                      >
                        <option value="KG">KG</option>
                        <option value="MT">MT</option>
                        <option value="Sample">Sample</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono-tech uppercase tracking-wider text-[#0B2A4A] font-bold mb-1.5">
                    Requirement Details
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Enter acceptable ppm impurity limits, target particle size, shipping requirements..."
                    className="w-full px-3.5 py-2.5 bg-white border border-[#D5DAE0] rounded text-xs text-[#111111] focus:outline-hidden focus:border-[#EF6C23]"
                  />
                </div>

                {/* Consent */}
                <div className="flex items-start space-x-2">
                  <input
                    type="checkbox"
                    id="contact-consent-2"
                    required
                    checked={formData.consent}
                    onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                    className="mt-0.5 rounded border-[#D5DAE0] text-[#EF6C23] focus:ring-[#EF6C23]"
                  />
                  <label htmlFor="contact-consent-2" className="text-xs text-[#596573]">
                    I consent to PROMETALLIK processing my inquiry for commercial quotation purposes.
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-4 bg-[#EF6C23] hover:bg-[#d85e19] text-white font-heading font-bold text-xs uppercase tracking-wider rounded transition-all shadow-md flex items-center justify-center space-x-2 disabled:opacity-75"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Validating Specification...</span>
                    </>
                  ) : (
                    <>
                      <span>Discuss Your Requirement</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Visually Separated Contact Information & Standalone Google Map Component */}
      <ContactSectionWithMap />
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#EEF0F2] text-[#111111] flex items-center justify-center">Loading Contact Portal...</div>}>
      <ContactPageContent />
    </Suspense>
  );
}
