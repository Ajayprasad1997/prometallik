"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { productsCatalogue } from "@/data/products";
import { useModal } from "@/context/ModalContext";
import QualitySection from "@/components/sections/QualitySection";
import FinalCtaSection from "@/components/sections/FinalCtaSection";
import {
  ShieldCheck,
  FileCheck2,
  Award,
  ChevronDown,
  ArrowRight,
  Download,
  CheckCircle2,
  Microscope,
} from "lucide-react";

export default function QualityPage() {
  const { openDocModal, openRfqModal } = useModal();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const testingWorkflow = [
    {
      step: "01",
      title: "Raw Concentrate Quarantining & Assay",
      description: "Incoming ore shipments are held in quarantine until composite core samples undergo XRF and ICP-OES screening.",
    },
    {
      step: "02",
      title: "In-Process Thermal & Chemical Monitoring",
      description: "Continuous monitoring of hydrometallurgical leaching liquors, crystallization pH, and rotary calcination temperatures.",
    },
    {
      step: "03",
      title: "Sub-Micron Laser Diffraction Sizing",
      description: "Malvern laser diffraction verification of D10, D50, D90 percentiles to guarantee tight Gaussian distributions.",
    },
    {
      step: "04",
      title: "Combustion Gas & Impurity Determination",
      description: "High-frequency induction combustion furnaces verify exact carbon stoichiometry and interstitial gas levels in WC.",
    },
    {
      step: "05",
      title: "Packaging Atmosphere & Seal Verification",
      description: "Desiccated, nitrogen-purged UN steel drums verified for hermetic barrier protection prior to tamper sealing.",
    },
    {
      step: "06",
      title: "COA Release & Certified Batch Archiving",
      description: "Dual-signed Certificate of Analysis generated with lot-specific spectrometer logs; retention samples archived.",
    },
  ];

  const faqs = [
    {
      question: "What analytical standards govern PROMETALLIK Certificates of Analysis (COA)?",
      answer:
        "All analytical measurements adhere to accredited standards. Trace elements are measured by high-resolution Inductively Coupled Plasma Optical Emission Spectrometry (ICP-OES) or Glow Discharge Mass Spectrometry (GDMS).",
    },
    {
      question: "Can PROMETALLIK provide custom particle size distributions (PSD)?",
      answer:
        "Yes. Our attritor milling and air classification lines can be adjusted to customer-specific FSSS ranges (from ultrafine 0.8 µm to coarse 45 µm), with tailored D10, D50, and D90 parameters.",
    },
    {
      question: "How is batch-to-batch consistency guaranteed for powder metallurgy?",
      answer:
        "We blend in industrial homogenizers with calibrated torque rheometers. Each ready-to-press lot is sintered in test bars to verify linear shrinkage and mechanical strength.",
    },
    {
      question: "Are your materials certified conflict-free?",
      answer:
        "Yes. PROMETALLIK complies strictly with international responsible minerals initiatives and conflict-free sourcing guidelines.",
    },
    {
      question: "What is your retention sample policy for dispatched material lots?",
      answer:
        "Representative sealed samples from every production batch are preserved in sealed inert containers in our analytical archives for 36 months for re-analysis if required.",
    },
  ];

  return (
    <div className="w-full flex flex-col bg-[#EEF0F2] text-[#111111]">
      {/* Quality Hero */}
      <section className="relative w-full py-20 bg-[#0B2A4A] text-white overflow-hidden border-b border-[#145B8C]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/images/plant/quality-inspection.jpg"
            alt="PROMETALLIK metallurgical testing laboratory"
            fill
            priority
            className="object-cover object-center filter contrast-125 brightness-[0.3]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B2A4A] via-[#0B2A4A]/80 to-transparent" />
          <div className="absolute inset-0 bg-industrial-grid-dark opacity-20 pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full p_t_35">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 text-xs font-mono-tech uppercase tracking-[0.25em] text-[#F5B400] mb-4" data-aos="fade-up">
              <span className="w-6 h-[2px] bg-[#EF6C23]" />
              <span>Laboratory Qualification &amp; Process Control</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-heading font-black tracking-tight text-white leading-tight" data-aos="fade-up">
              Empirical Quality. Zero Assumptions.
            </h1>
            <p className="mt-6 text-base sm:text-lg text-[#B8BEC5] leading-relaxed" data-aos="fade-up">
              Every production lot undergoes multi-point analytical screening &mdash; from sub-ppm optical emission spectroscopy to laser diffraction grain verification.
            </p>
          </div>
        </div>
      </section>

      {/* Primary Quality & Certifications Section */}
      <QualitySection />

      {/* 6-Stage Testing Workflow */}
      <section className="py-24 bg-white border-b border-[#D5DAE0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16 pb-4 border-b border-[#D5DAE0]">
            <span className="text-xs font-mono-tech uppercase tracking-[0.25em] text-[#EF6C23] font-bold block mb-2" data-aos="fade-up">
              Traceable Inspection Loop
            </span>
            <h2 className="text-3xl sm:text-5xl font-heading font-black tracking-tight text-[#0B2A4A]" data-aos="fade-right">
              The 6-Checkpoint Analytical Workflow
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-aos="fade-up">
            {testingWorkflow.map((item) => (
              <div
                key={item.step}
                className="p-6 bg-[#EEF0F2] rounded-lg border border-[#D5DAE0] hover:border-[#EF6C23] transition-all space-y-3 relative group shadow-xs"
              >
                <div className="text-xs font-mono-tech font-bold text-[#EF6C23]">
                  CHECKPOINT {item.step}
                </div>
                <h3 className="text-lg font-heading font-black text-[#0B2A4A] group-hover:text-[#EF6C23] transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-[#2B333B] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality FAQ Accordion */}
      <section className="py-24 bg-[#EEF0F2] border-b border-[#D5DAE0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-mono-tech uppercase tracking-wider text-[#EF6C23] font-bold" data-aos="fade-up">
              Frequently Addressed Questions
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-black text-[#0B2A4A] mt-2" data-aos="fade-up">
              Quality Assurance Inquiries
            </h2>
          </div>

          <div className="space-y-4" data-aos="fade-up">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-lg border border-[#D5DAE0] overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-6 text-left flex items-center justify-between font-heading font-extrabold text-sm sm:text-base text-[#0B2A4A] hover:text-[#EF6C23] transition-colors"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown className={`w-4 h-4 ml-2 transition-transform duration-200 ${isOpen ? "rotate-180 text-[#EF6C23]" : "text-[#596573]"}`} />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 text-xs sm:text-sm text-[#2B333B] leading-relaxed border-t border-[#EEF0F2] pt-4">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <FinalCtaSection />
    </div>
  );
}
