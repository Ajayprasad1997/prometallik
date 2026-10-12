"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, RefreshCw, Droplets, Recycle, Lock } from "lucide-react";

export default function SustainabilitySection() {
  const pillars = [
    {
      title: "Responsible Sourcing",
      description: "100% auditable supply chains adhering to OECD Due Diligence Guidance for Conflict-Free Minerals.",
      icon: ShieldCheck,
    },
    {
      title: "Closed-Loop Secondary Refining",
      description: "Hydrometallurgical reprocessing of tungsten scrap, end-of-life carbide inserts, and grinding sludges.",
      icon: Recycle,
    },
    {
      title: "Hydrogen Energy Optimization",
      description: "Recirculation loops recover and purify process hydrogen from reduction furnaces, reducing thermal off-gassing.",
      icon: RefreshCw,
    },
    {
      title: "Effluent Neutralization & Water Recycling",
      description: "Multi-stage ion exchange and reverse osmosis closed-circuit water management at our Duisburg works.",
      icon: Droplets,
    },
    {
      title: "Inert Heavy-Duty Packaging",
      description: "Reusable UN-certified steel drums designed for 10+ intermodal transits, eliminating single-use waste.",
      icon: Lock,
    },
    {
      title: "Workplace Health & ATEX Safety",
      description: "Negative-pressure dust containment and HEPA-filtered cleanrooms exceeding European industrial air standards.",
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="relative w-full py-24 sm:py-32 bg-[#080808] text-white border-b border-[#222222] overflow-hidden">
      {/* Full-Width Modern Industrial Infrastructure Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/materials/autoclave-digestion.jpg"
          alt="Modern European metallurgical facility with advanced emission capture systems"
          fill
          className="object-cover object-center filter contrast-125 brightness-[0.25]"
        />
        {/* Dark overlay & industrial grid */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-black/85 to-[#080808]" />
        <div className="absolute inset-0 bg-industrial-grid opacity-15 pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#222222]">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono-tech uppercase tracking-[0.25em] text-[#F36C21] mb-2">
              <span className="w-6 h-[2px] bg-[#F36C21]" />
              <span>Environmental Responsibility &middot; ISO 14001</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-heading font-black tracking-tight text-white uppercase">
              Responsible Metallurgy. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F36C21] to-[#D9DDE0]">
                Engineered Stewardship.
              </span>
            </h2>
          </div>

          <p className="mt-4 md:mt-0 text-xs sm:text-sm text-[#A7ADB2] max-w-md font-sans">
            Restrained, verifiable industrial engineering focusing on energy recirculation, scrap re-refining, and strict OECD conflict-free supply chains.
          </p>
        </div>

        {/* 6 Sustainability Pillars (Clean Industrial Dark Style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="p-6 bg-[#111111]/90 border border-[#242424] hover:border-[#F36C21]/70 transition-all space-y-3 group backdrop-blur-sm"
              >
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 bg-black border border-[#333333] flex items-center justify-center text-[#F36C21] group-hover:border-[#F36C21] transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="font-mono-tech text-[10px] text-[#A7ADB2]">0{idx + 1}</span>
                </div>

                <h3 className="text-base font-heading font-bold text-white group-hover:text-[#F36C21] transition-colors">
                  {p.title}
                </h3>

                <p className="text-xs text-[#A7ADB2] leading-relaxed">
                  {p.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Action Link */}
        <div className="mt-12 text-center">
          <Link
            href="/sustainability"
            className="inline-flex items-center space-x-2 text-xs font-mono-tech uppercase tracking-wider text-[#F36C21] hover:underline"
          >
            <span>Read Complete Environmental &amp; Ethical Supply Statement</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
