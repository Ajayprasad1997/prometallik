"use client";

import React, { useState, useEffect } from "react";
import { useModal } from "@/context/ModalContext";
import { productsCatalogue } from "@/data/products";
import { X, CheckCircle2, ShieldCheck, ArrowRight, Loader2, UploadCloud, AlertCircle } from "lucide-react";

export default function RfqModal() {
  const { isRfqOpen, closeRfqModal, selectedProductForRfq } = useModal();

  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    country: "Germany",
    product: "",
    quantity: "500",
    quantityUnit: "KG",
    message: "",
    consent: true,
  });

  const [fileName, setFileName] = useState<string>("");
  const [submitting, setSubmitting] = useState(false);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Sync selected product when modal opens
  useEffect(() => {
    if (selectedProductForRfq) {
      setFormData((prev) => ({ ...prev, product: selectedProductForRfq }));
    } else if (!formData.product && productsCatalogue.length > 0) {
      setFormData((prev) => ({ ...prev, product: productsCatalogue[0].name }));
    }
  }, [selectedProductForRfq, isRfqOpen]);

  if (!isRfqOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!formData.fullName || !formData.company || !formData.email || !formData.phone) {
      setErrorMessage("Please complete all required fields (Name, Company, Work Email, Phone).");
      return;
    }

    if (!formData.consent) {
      setErrorMessage("Please accept the data processing terms.");
      return;
    }

    setSubmitting(true);

    // Simulate enterprise RFQ processing
    setTimeout(() => {
      const randomCode = Math.floor(1000 + Math.random() * 9000);
      setSubmittedRef(`PRM-RFQ-2026-${randomCode}`);
      setSubmitting(false);
    }, 1200);
  };

  const handleReset = () => {
    setSubmittedRef(null);
    setErrorMessage(null);
    closeRfqModal();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white border border-[#D5DAE0] text-[#111111] rounded-xl shadow-2xl overflow-hidden my-auto">
        {/* Top Orange Accent Line */}
        <div className="h-1.5 bg-[#EF6C23]" />

        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-[#D5DAE0] flex items-center justify-between bg-[#EEF0F2]">
          <div>
            <span className="text-[10px] font-mono-tech uppercase tracking-[0.25em] text-[#EF6C23] font-bold">
              Direct Metallurgical Consultation
            </span>
            <h3 className="text-lg sm:text-xl font-heading font-black text-[#0B2A4A]">
              Request a Quote
            </h3>
          </div>
          <button
            onClick={closeRfqModal}
            className="p-1.5 text-[#596573] hover:text-[#111111] transition-colors rounded hover:bg-[#D5DAE0]"
            aria-label="Close quote modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 max-h-[80vh] overflow-y-auto">
          {submittedRef ? (
            /* Success State */
            <div className="py-8 text-center space-y-4 animate-in fade-in duration-300">
              <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-600">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <h4 className="text-2xl font-heading font-black text-[#0B2A4A]">
                  Specification Validated
                </h4>
                <p className="text-xs sm:text-sm text-[#2B333B] mt-1 max-w-md mx-auto">
                  Your inquiry for <strong>{formData.product}</strong> ({formData.quantity} {formData.quantityUnit}) has been registered in the frontend prototype.
                </p>
              </div>

              <div className="bg-[#EEF0F2] border border-[#D5DAE0] p-4 max-w-sm mx-auto text-left font-mono-tech text-xs rounded">
                <div className="text-[#596573] text-[10px] uppercase">Tracking Reference</div>
                <div className="text-base font-bold text-[#EF6C23]">{submittedRef}</div>
                <div className="text-[10px] text-[#596573] mt-1">
                  [Frontend Prototype: Ready for backend API integration]
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 bg-[#0B2A4A] hover:bg-[#145B8C] text-white font-heading font-bold text-xs uppercase tracking-wider rounded transition-colors"
                >
                  Close &amp; Return
                </button>
              </div>
            </div>
          ) : (
            /* Quotation Form */
            <form onSubmit={handleSubmit} className="space-y-4">
              {errorMessage && (
                <div className="p-3 bg-red-50 border border-red-300 text-red-700 text-xs font-mono-tech rounded flex items-center space-x-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Product Selection */}
              <div>
                <label className="block text-xs font-mono-tech uppercase tracking-wider text-[#0B2A4A] font-bold mb-1">
                  Selected Material Formulation *
                </label>
                <select
                  value={formData.product}
                  onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                  className="w-full px-3 py-2 bg-[#EEF0F2] border border-[#D5DAE0] rounded text-xs text-[#111111] focus:outline-hidden focus:border-[#EF6C23]"
                >
                  {productsCatalogue.map((p) => (
                    <option key={p.id} value={p.name}>
                      {p.name}
                    </option>
                  ))}
                  <option value="Custom Refractory Formulation">Custom Refractory Formulation</option>
                </select>
              </div>

              {/* Name & Company */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-mono-tech uppercase tracking-wider text-[#0B2A4A] font-bold mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Full Name"
                    className="w-full px-3 py-2 bg-[#EEF0F2] border border-[#D5DAE0] rounded text-xs text-[#111111] focus:outline-hidden focus:border-[#EF6C23]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono-tech uppercase tracking-wider text-[#0B2A4A] font-bold mb-1">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Company / Facility"
                    className="w-full px-3 py-2 bg-[#EEF0F2] border border-[#D5DAE0] rounded text-xs text-[#111111] focus:outline-hidden focus:border-[#EF6C23]"
                  />
                </div>
              </div>

              {/* Email, Phone, Country */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-mono-tech uppercase tracking-wider text-[#0B2A4A] font-bold mb-1">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="corporate@domain.com"
                    className="w-full px-3 py-2 bg-[#EEF0F2] border border-[#D5DAE0] rounded text-xs text-[#111111] focus:outline-hidden focus:border-[#EF6C23]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono-tech uppercase tracking-wider text-[#0B2A4A] font-bold mb-1">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+49 / +91 ..."
                    className="w-full px-3 py-2 bg-[#EEF0F2] border border-[#D5DAE0] rounded text-xs text-[#111111] focus:outline-hidden focus:border-[#EF6C23]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono-tech uppercase tracking-wider text-[#0B2A4A] font-bold mb-1">
                    Country *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    placeholder="e.g. Germany"
                    className="w-full px-3 py-2 bg-[#EEF0F2] border border-[#D5DAE0] rounded text-xs text-[#111111] focus:outline-hidden focus:border-[#EF6C23]"
                  />
                </div>
              </div>

              {/* Quantity */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-mono-tech uppercase tracking-wider text-[#0B2A4A] font-bold mb-1">
                    Estimated Quantity *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    placeholder="e.g. 500"
                    className="w-full px-3 py-2 bg-[#EEF0F2] border border-[#D5DAE0] rounded text-xs text-[#111111] focus:outline-hidden focus:border-[#EF6C23]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono-tech uppercase tracking-wider text-[#0B2A4A] font-bold mb-1">
                    Units *
                  </label>
                  <select
                    value={formData.quantityUnit}
                    onChange={(e) => setFormData({ ...formData, quantityUnit: e.target.value })}
                    className="w-full px-3 py-2 bg-[#EEF0F2] border border-[#D5DAE0] rounded text-xs text-[#111111] focus:outline-hidden focus:border-[#EF6C23]"
                  >
                    <option value="KG">Kilograms (KG)</option>
                    <option value="MT">Metric Tons (MT)</option>
                    <option value="Sample">Testing Sample</option>
                  </select>
                </div>
              </div>

              {/* Requirement Details */}
              <div>
                <label className="block text-xs font-mono-tech uppercase tracking-wider text-[#0B2A4A] font-bold mb-1">
                  Technical Requirements &amp; Tolerances
                </label>
                <textarea
                  rows={2}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Specify grain size, chemical purity tolerances, or packaging requirements..."
                  className="w-full px-3 py-2 bg-[#EEF0F2] border border-[#D5DAE0] rounded text-xs text-[#111111] focus:outline-hidden focus:border-[#EF6C23]"
                />
              </div>

              {/* Optional File Upload */}
              <div className="flex items-center space-x-3 text-xs font-mono-tech">
                <label className="cursor-pointer px-3 py-1.5 bg-[#EEF0F2] border border-[#D5DAE0] hover:border-[#EF6C23] rounded text-[#0B2A4A] flex items-center space-x-1.5 transition-colors">
                  <UploadCloud className="w-3.5 h-3.5 text-[#EF6C23]" />
                  <span>{fileName ? "Change Spec" : "Attach Spec Sheet"}</span>
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
                <span className="text-[11px] text-[#596573] truncate max-w-xs">
                  {fileName || "Optional (PDF, DOCX)"}
                </span>
              </div>

              {/* Consent */}
              <div className="flex items-start space-x-2 pt-1">
                <input
                  type="checkbox"
                  id="rfq-consent"
                  checked={formData.consent}
                  onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                  className="mt-0.5 rounded border-[#D5DAE0] text-[#EF6C23] focus:ring-[#EF6C23]"
                />
                <label htmlFor="rfq-consent" className="text-[11px] text-[#596573]">
                  I consent to PROMETALLIK processing my inquiry for commercial quotation purposes.
                </label>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3.5 bg-[#EF6C23] hover:bg-[#d85e19] text-white font-heading font-bold text-xs uppercase tracking-wider rounded transition-all shadow-md flex items-center justify-center space-x-2 disabled:opacity-75"
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
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
