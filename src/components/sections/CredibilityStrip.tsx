"use client";

import React from "react";
import { CheckCircle2, SlidersHorizontal, Scale, Truck, ShieldAlert } from "lucide-react";

export default function CredibilityStrip() {
  const capabilities = [
    {
      id: "cap-01",
      number: "01",
      code: "SPEC // ISO 9001",
      title: "Controlled Material Specifications",
      description: "Sub-micron grain distributions, custom stoichiometry, and certified chemical assays.",
      icon: SlidersHorizontal,
    },
    {
      id: "cap-02",
      number: "02",
      code: "BATCH // ICP-OES",
      title: "Consistent Batch Quality",
      description: "Lot-to-lot repeatability verified by ICP-OES spectroscopy and laser diffraction.",
      icon: Scale,
    },
    {
      id: "cap-03",
      number: "03",
      code: "ENG // METALLURGY",
      title: "Application-Based Support",
      description: "Metallurgical consultation for pressing parameters, sintering curves, and alloy doping.",
      icon: CheckCircle2,
    },
    {
      id: "cap-04",
      number: "04",
      code: "SUPPLY // GLOBAL",
      title: "Reliable Industrial Supply",
      description: "Strategic European warehousing, inert-gas packaging, and intermodal freight corridors.",
      icon: Truck,
    },
  ];

  return (
    <section className="relative z-20 w-full bg-[#D9DDE0] text-[#080808] border-y border-[#A7ADB2] py-8 overflow-hidden">
      {/* Decorative hairline */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#F36C21]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y md:divide-y-0 md:divide-x divide-[#A7ADB2]/40">
          {capabilities.map((cap, idx) => {
            const Icon = cap.icon;
            return (
              <div
                key={cap.id}
                className={`flex flex-col justify-between ${
                  idx > 0 ? "pt-6 md:pt-0 md:pl-6 lg:pl-8" : ""
                } group`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono-tech text-xs font-bold text-[#F36C21] tracking-wider">
                      {cap.code}
                    </span>
                    <span className="text-xl font-heading font-black text-[#4A4F54]/30 group-hover:text-[#F36C21] transition-colors">
                      {cap.number}
                    </span>
                  </div>

                  <h3 className="text-base font-heading font-extrabold text-[#080808] leading-snug mb-2 group-hover:text-[#C94C12] transition-colors">
                    {cap.title}
                  </h3>

                  <p className="text-xs text-[#4A4F54] font-sans leading-relaxed">
                    {cap.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#A7ADB2]/30 flex items-center justify-between text-[10px] font-mono-tech text-[#4A4F54]">
                  <span>STANDARD VERIFIED</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-[#F36C21]" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
