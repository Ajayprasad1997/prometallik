"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function WhyPrometallik() {
  const statements = [
    {
      number: "01",
      title: "Specification-led supply",
      statement:
        "We do not sell generic off-the-shelf bulk metals. Every batch is calibrated around your exact grain distribution curve, chemical tolerance limits, and pressing parameters.",
      technicalPoint: "Custom stoichiometry down to ± 0.03% carbon and sub-ppm alkalis.",
    },
    {
      number: "02",
      title: "Consistent material quality",
      statement:
        "Sintering shrinkage variations destroy indexable insert yields. Our continuous pusher furnaces guarantee identical metallurgical lot repeatability order after order.",
      technicalPoint: "Fischer sub-sieve sizer variance contained to < 0.05 µm.",
    },
    {
      number: "03",
      title: "Application understanding",
      statement:
        "Our metallurgical engineers understand the mechanical difference between mining percussion bits, 5-axis high-speed milling inserts, and additive manufacturing recoater beds.",
      technicalPoint: "Direct dialogue with practicing powder metallurgists.",
    },
    {
      number: "04",
      title: "Technical documentation",
      statement:
        "Every dispatch is accompanied by an authenticated Certificate of Analysis (COA) detailing LECO gas combustion values, laser diffraction percentiles, and spectrographic traces.",
      technicalPoint: "DIN EN ISO 17025 accredited testing methodologies.",
    },
    {
      number: "05",
      title: "Reliable packaging",
      statement:
        "Refractory metal powders oxidize rapidly if exposed to ambient humidity. We pack exclusively in argon/nitrogen-purged UN steel drums with multi-layer barrier seals.",
      technicalPoint: "Positive inert gas pressure with tamper-evident holograms.",
    },
    {
      number: "06",
      title: "Responsive commercial support",
      statement:
        "Direct quotation turnarounds in under 4 business hours, flexible European framework supply contracts, and seamless intermodal freight logistics through the port of Duisburg.",
      technicalPoint: "Dedicated technical desk in Düsseldorf.",
    },
  ];

  return (
    <section className="relative w-full py-24 sm:py-32 bg-[#080808] text-white border-b border-[#222222] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 pb-6 border-b border-[#222222]">
          <div className="flex items-center space-x-2 text-xs font-mono-tech uppercase tracking-[0.25em] text-[#F36C21] mb-2">
            <span className="w-6 h-[2px] bg-[#F36C21]" />
            <span>Industrial Value Proposition</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-black tracking-tight text-white uppercase leading-tight">
            Why PROMETALLIK. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F36C21] to-[#D9DDE0]">
              Engineered Integrity.
            </span>
          </h2>
        </div>

        {/* 6 Staggered Alternating Editorial Statements per Requirement 10 */}
        <div className="space-y-12 lg:space-y-16">
          {statements.map((item, idx) => {
            const isEven = idx % 2 === 1;

            return (
              <div
                key={item.number}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center pb-12 border-b border-[#1c1c1c] ${
                  isEven ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Number & Headline Block */}
                <div
                  className={`lg:col-span-5 flex items-start space-x-6 ${
                    isEven ? "lg:order-2 lg:pl-8" : "lg:pr-8"
                  }`}
                >
                  <span className="text-5xl sm:text-7xl font-heading font-black text-[#F36C21] leading-none shrink-0">
                    {item.number}
                  </span>
                  <div className="space-y-1 pt-1">
                    <span className="text-[10px] font-mono-tech uppercase tracking-widest text-[#A7ADB2] block">
                      CORE CAPABILITY {item.number}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-white leading-snug">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Content & Technical Accent Block */}
                <div
                  className={`lg:col-span-7 space-y-4 ${
                    isEven ? "lg:order-1" : ""
                  }`}
                >
                  {/* Orange divider line */}
                  <div className="h-[2px] w-16 bg-[#F36C21]" />

                  <p className="text-sm sm:text-base text-[#D9DDE0] leading-relaxed font-sans">
                    {item.statement}
                  </p>

                  <div className="p-3 bg-[#121212] border-l-2 border-[#F36C21] font-mono-tech text-xs text-white flex items-center space-x-2">
                    <span className="text-[#F36C21] font-bold">&gt;</span>
                    <span>{item.technicalPoint}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Callout */}
        <div className="mt-12 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center space-x-2 bg-[#F36C21] hover:bg-[#FF7A1A] text-[#080808] font-heading font-extrabold text-xs uppercase px-8 py-4 tracking-wider transition-colors"
          >
            <span>DISCUSS YOUR SPECIFICATION WITH OUR DESK</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
