import React from "react";
import Image from "next/image";
import Link from "next/link";
import RecyclingInteractiveSection from "@/components/sections/RecyclingInteractiveSection";
import FinalCtaSection from "@/components/sections/FinalCtaSection";
import {
  ShieldCheck,
  Recycle,
  Droplets,
  Wind,
  Flame,
  ArrowRight,
  CheckCircle2,
  Lock,
} from "lucide-react";

export const metadata = {
  title: "Sustainability & Responsible Recycling | PROMETALLIK",
  description:
    "Responsible mineral procurement, secondary metallurgical scrap recovery, and closed-loop hydrometallurgical recycling at PROMETALLIK.",
};

export default function SustainabilityPage() {
  const commitments = [
    {
      title: "Responsible Sourcing & Provenance Due Diligence",
      icon: ShieldCheck,
      details:
        "PROMETALLIK procures all scheelite, wolframite, and mineral concentrates in compliance with international conflict-free supply chain guidelines and certified ethical origin standards.",
    },
    {
      title: "Closed-Loop Secondary Refining (Tungsten & Cobalt Scrap)",
      icon: Recycle,
      details:
        "Tungsten is a strategic refractory element with long-term recyclability. We reprocess clean carbide scrap, spent inserts, and secondary metallurgical residues back into high-purity APT precursors.",
    },
    {
      title: "Hydrogen Gas Conservation & Thermal Recirculation",
      icon: Flame,
      details:
        "Our reduction furnaces integrate closed-loop gas chillers and catalytic recovery units that recirculate excess dry hydrogen gas, maximizing process efficiency while maintaining uniform dew point control.",
    },
    {
      title: "Closed-Circuit Water Treatment & Zero Liquid Discharge",
      icon: Droplets,
      details:
        "All hydrometallurgical digestion and precipitation liquors are managed through neutralizing units and filtration cycles designed to recycle process water internally within the plant.",
    },
    {
      title: "Packaging Integrity & UN-Rated Heavy Steel Drums",
      icon: Lock,
      details:
        "Finished powders are delivered in heavy-gauge UN-certified steel drums designed for multi-trip logistics, inert nitrogen blanketing, and barrier protection against moisture and transit oxidation.",
    },
    {
      title: "Workplace Air Quality & Particulate Extraction",
      icon: Wind,
      details:
        "Milling and powder classification zones maintain continuous negative pressure extraction with automated multi-stage industrial HEPA filtration systems ensuring workplace safety.",
    },
  ];

  return (
    <div className="w-full flex flex-col bg-[#EEF0F2] text-[#111111]">
      {/* Sustainability Hero */}
      <section className="relative w-full py-20 bg-[#0B2A4A] text-white overflow-hidden border-b border-[#145B8C]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/images/recycling/circular-recovery.jpg"
            alt="PROMETALLIK responsible materials and recycling"
            fill
            priority
            className="object-cover object-center filter contrast-125 brightness-[0.3]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B2A4A] via-[#0B2A4A]/80 to-transparent" />
          <div className="absolute inset-0 bg-industrial-grid-dark opacity-20 pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full p_t_35">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 text-xs font-mono-tech uppercase tracking-[0.25em] text-[#F5B400] mb-4" data-aos="fade-right">
              <span className="w-6 h-[2px] bg-[#EF6C23]" />
              <span>RESPONSIBLE PRODUCTION &amp; CIRCULAR METALLURGY</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-heading font-black tracking-tight text-white leading-tight" data-aos="fade-right">
              Responsible Materials. Smarter Industry.
            </h1>
            <p className="mt-6 text-base sm:text-lg text-[#B8BEC5] leading-relaxed" data-aos="fade-right">
              At PROMETALLIK, circular material thinking is integrated into our operational philosophy. Through chemical recovery and closed-loop hydrometallurgical refining, we extend the lifecycle of critical transition metals.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Recycling Section */}
      <RecyclingInteractiveSection />

      {/* Operational Commitments */}
      <section className="py-24 bg-white border-b border-[#D5DAE0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono-tech uppercase tracking-wider text-[#EF6C23] font-bold" data-aos="fade-up">
              Operational Stewardship
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-black text-[#0B2A4A] mt-2" data-aos="fade-up">
              Our 6 Environmental &amp; Material Commitments
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-aos="fade-up">
            {commitments.map((c, i) => {
              const Icon = c.icon;
              return (
                <div
                  key={i}
                  className="bg-[#EEF0F2] rounded-lg p-6 border border-[#D5DAE0] space-y-4 hover:border-[#EF6C23] transition-colors shadow-xs"
                >
                  <div className="w-10 h-10 rounded bg-[#0B2A4A] text-white flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#EF6C23]" />
                  </div>
                  <h3 className="text-base font-heading font-black text-[#0B2A4A] leading-snug">
                    {c.title}
                  </h3>
                  <p className="text-xs text-[#2B333B] leading-relaxed">
                    {c.details}
                  </p>
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
