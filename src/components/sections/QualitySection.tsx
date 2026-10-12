"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, FileCheck2, Scale, Microchip, Award, ArrowRight, Download, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function QualitySection() {
  const qualityPillars = [
    {
      title: "Process Control",
      metric: "Digital SCADA & Multi-Zone Thermal Monitoring",
      desc: "Tight feedback loops on furnace temperature profiles, hydrogen flow rates, and leaching pressures ensure predictable chemical conversion.",
    },
    {
      title: "Material Consistency",
      metric: "Strict Batch-to-Batch Granulometry & Purity",
      desc: "Rigid tolerance ceilings on tramp elements (Fe, Mo, Na, K) guaranteeing homogeneous sintering shrinkage and mechanical resilience.",
    },
    {
      title: "Documentation",
      metric: "Complete Analytical COA & Safety Data Sheets",
      desc: "Every dispatched batch includes comprehensive spectroscopic analysis, Fisher sub-sieve sizer values, and GHS-compliant SDS documentation.",
    },
    {
      title: "Traceability",
      metric: "End-to-End Lot Genealogy Tracking",
      desc: "Full accountability from raw mineral concentrate intake through intermediate precipitation, reduction, and drum packaging.",
    },
    {
      title: "Inspection",
      metric: "Multi-Tier Physical & Chemical Testing",
      desc: "Cleanroom ICP-OES elemental assay, Malvern laser diffraction particle sizing, and tap density verification prior to release.",
    },
    {
      title: "Customer-Specific Requirements",
      metric: "Custom D90 Distributions & Sinter Additives",
      desc: "Tailored particle granulometry curves, custom carbon ratios in WC, and bespoke packing specifications tailored to international buyer standards.",
    },
  ];

  return (
    <section className="relative w-full bg-[#EEF0F2] text-[#111111] py-24 sm:py-32 overflow-hidden border-b border-[#D5DAE0]" id="quality-assurance">
      {/* Background Subtle Industrial Grid */}
      <div className="absolute inset-0 bg-industrial-grid-light opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#D5DAE0]">
          <div>
            <div className="inline-flex items-center space-x-2 text-xs font-mono-tech uppercase tracking-[0.25em] text-[#0B2A4A] mb-3" data-aos="fade-right">
              <span className="w-5 h-[2px] bg-[#EF6C23]" />
              <span>QUALITY ASSURANCE &amp; PROCESS CONTROL</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-heading font-black tracking-tight text-[#0B2A4A] leading-[1.05]" data-aos="fade-right">
              Rigorous Standards. Verifiable Integrity.
            </h2>
          </div>

          <p className="mt-4 md:mt-0 text-xs sm:text-sm text-[#596573] max-w-md font-sans" data-aos="fade-right">
            Our quality operations enforce stoichiometric discipline and empirical testing across every stage of processing.
          </p>
        </div>

        {/* 6 Quality Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {qualityPillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-lg border border-[#D5DAE0] hover:border-[#EF6C23] transition-all space-y-3 shadow-xs hover:shadow-md group"
           data-aos="fade-up">
              <div className="flex items-center justify-between text-[10px] font-mono-tech text-[#EF6C23] font-bold">
                <span>0{idx + 1} // QUALITY PILLAR</span>
                <div className="w-2 h-2 rounded-full bg-[#EF6C23]" />
              </div>

              <h3 className="text-lg font-heading font-black text-[#0B2A4A] group-hover:text-[#EF6C23] transition-colors leading-snug">
                {pillar.title}
              </h3>

              <div className="text-[11px] font-mono-tech text-[#145B8C] font-semibold bg-[#EEF0F2] px-2.5 py-1 rounded">
                {pillar.metric}
              </div>

              <p className="text-xs text-[#2B333B] leading-relaxed pt-1">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Certification Logo Placeholders & Download CTA Bar */}
        <div className="bg-[#0B2A4A] text-white rounded-xl p-8 sm:p-10 border border-[#145B8C] shadow-xl" data-aos="flip-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Certification Placeholders Description */}
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center space-x-2 text-xs font-mono-tech uppercase tracking-wider text-[#F5B400]">
                <ShieldCheck className="w-4 h-4 text-[#EF6C23]" />
                <span>OFFICIAL CERTIFICATION &amp; COMPLIANCE STATUS</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-heading font-black text-white">
                Certified Quality Documentation &amp; Laboratory Compliance
              </h3>

              <p className="text-xs sm:text-sm text-[#B8BEC5] max-w-2xl leading-relaxed">
                In strict accordance with international commercial guidelines, official certifications and third-party accreditation credentials will be published upon client upload.
              </p>

              {/* Labeled Certification Placeholders */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3 bg-[#071C33] border border-[#145B8C] rounded text-center space-y-1">
                  <div className="text-[10px] font-mono-tech text-[#F5B400] font-bold">ISO 9001:2015</div>
                  <div className="text-[9px] font-mono-tech text-[#B8BEC5]">[Pending Client Upload]</div>
                </div>
                <div className="p-3 bg-[#071C33] border border-[#145B8C] rounded text-center space-y-1">
                  <div className="text-[10px] font-mono-tech text-[#F5B400] font-bold">ISO 14001:2015</div>
                  <div className="text-[9px] font-mono-tech text-[#B8BEC5]">[Pending Client Upload]</div>
                </div>
                <div className="p-3 bg-[#071C33] border border-[#145B8C] rounded text-center space-y-1 col-span-2 sm:col-span-1">
                  <div className="text-[10px] font-mono-tech text-[#F5B400] font-bold">REACH / RoHS</div>
                  <div className="text-[9px] font-mono-tech text-[#B8BEC5]">[Compliance Dossier]</div>
                </div>
              </div>
            </div>

            {/* Right: CTA to Download Certifications */}
            <div className="lg:col-span-4 flex flex-col justify-center items-start lg:items-end space-y-3">
              <a
                href="/assets/pdfs/certifications.pdf"
                onClick={(e) => {
                  e.preventDefault();
                  alert("Certifications Dossier (PDF): Document will be available shortly upon client upload.");
                }}
                className="w-full sm:w-auto bg-[#EF6C23] hover:bg-[#d85e19] text-white px-7 py-4 rounded font-heading font-bold text-xs uppercase tracking-wider inline-flex items-center justify-center space-x-2 transition-colors shadow-lg shadow-[#EF6C23]/25"
              >
                <Download className="w-4 h-4" />
                <span>Download Certifications</span>
              </a>

              <span className="text-[10px] font-mono-tech text-[#B8BEC5] text-center lg:text-right">
                Path: /assets/pdfs/certifications.pdf &middot; Safe Fallback
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
