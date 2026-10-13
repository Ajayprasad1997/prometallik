import React from "react";
import Image from "next/image";
import Link from "next/link";
import PlantFacilitySection from "@/components/sections/PlantFacilitySection";
import CuttingMachineVideoSection from "@/components/sections/CuttingMachineVideoSection";
import FinalCtaSection from "@/components/sections/FinalCtaSection";
import { ArrowRight, Flame, Cpu, Settings2, Wind, Eye, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Manufacturing Facility & Technology | PROMETALLIK",
  description:
    "Explore PROMETALLIK's advanced hydrometallurgical digestion, continuous hydrogen reduction furnaces, and precision classification plant in India.",
};

export default function ManufacturingPage() {
  const machinery = [
    {
      name: "Multi-Tube Continuous Hydrogen Pusher Furnaces",
      spec: "1100°C Max &middot; Dew-point < -60°C &middot; Automated Boat Propulsion",
      description: "Counter-current dry hydrogen reduction transforming tungsten oxides into precisely sized elemental metal powders.",
      imageUrl: "/assets/images/products/blast-furnace-molten.jpg",
    },
    {
      name: "High-Temperature Solid-State Carbonization Furnaces",
      spec: "1800°C Max &middot; Pure Graphite Elements &middot; Hydrogen Blanket",
      description: "Stoichiometric solid-state reaction bonding tungsten metal and carbon into mono-tungsten carbide (WC) lattices.",
      imageUrl: "/assets/images/products/wc-carbide-powder.jpg",
    },
    {
      name: "High-Energy Horizontal Attritors & Bead Mills",
      spec: "Submicron Micronization &middot; Cobalt Binder Mechanical Alloying",
      description: "Ultra-fine wet attritor grinding ensuring homogeneous dispersion of submicron cobalt binder throughout carbide particles.",
      imageUrl: "/assets/images/plant/plant-floor.jpg",
    },
    {
      name: "Inert Hot-Nitrogen Spray Drying Towers",
      spec: "Spherical Granulometry &middot; Paraffin / PEG Wax Formulation",
      description: "Atomizing carbide slurries into free-flowing, spherical RTP granules with excellent Hall flow characteristics.",
      imageUrl: "/assets/images/plant/packaging-delivery.jpg",
    },
  ];

  return (
    <div className="w-full flex flex-col bg-[#EEF0F2] text-[#111111]">
      {/* Factory Hero */}
      <section className="relative w-full py-20 bg-[#0B2A4A] text-white overflow-hidden border-b border-[#145B8C]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/images/products/wc-carbide-powder.jpg"
            alt="PROMETALLIK continuous metallurgy plant"
            fill
            priority
            className="object-cover object-center filter contrast-125 brightness-[0.35]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B2A4A] via-[#0B2A4A]/80 to-transparent" />
          <div className="absolute inset-0 bg-industrial-grid-dark opacity-20 pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full p_t_35">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 text-xs font-mono-tech uppercase tracking-[0.25em] text-[#F5B400] mb-4" data-aos="fade-right">
              <span className="w-6 h-[2px] bg-[#EF6C23]" />
              <span>Plant Operations &amp; Technology</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-heading font-black tracking-tight text-white leading-tight" data-aos="fade-right">
              Manufacturing Architecture
            </h1>
            <p className="mt-6 text-base sm:text-lg text-[#B8BEC5] leading-relaxed" data-aos="fade-right">
              Inside PROMETALLIK&apos;s industrial plant: engineered for closed-loop hydrometallurgical digestion, controlled atmospheric hydrogen reduction, and precision powder metallurgy.
            </p>
          </div>
        </div>
      </section>

     

      {/* Core Machinery Grid */}
      <section className="py-24 bg-[#FFFFFF] border-b border-[#D5DAE0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono-tech uppercase tracking-wider text-[#EF6C23] font-bold" data-aos="fade-up">
              Thermal &amp; Chemical Systems
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-black text-[#0B2A4A] mt-2" data-aos="fade-up">
              Advanced Processing Equipment
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {machinery.map((m, idx) => (
              <div
                key={idx}
                className="bg-[#EEF0F2] rounded-xl overflow-hidden border border-[#D5DAE0] hover:border-[#EF6C23] transition-all flex flex-col justify-between group shadow-xs hover:shadow-md"
              data-aos="fade-up">
                <div className="relative w-full h-56 bg-[#0B2A4A]">
                  <Image
                    src={m.imageUrl}
                    alt={m.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-3 text-[10px] font-mono-tech uppercase text-[#F5B400] bg-black/80 px-2 py-0.5 rounded">
                    SYSTEM 0{idx + 1}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="text-lg font-heading font-black text-[#0B2A4A] group-hover:text-[#EF6C23] transition-colors">
                    {m.name}
                  </h3>
                  <div
                    className="text-xs font-mono-tech text-[#145B8C] font-semibold bg-white p-2 rounded border border-[#D5DAE0]"
                    dangerouslySetInnerHTML={{ __html: m.spec }}
                  />
                  <p className="text-xs text-[#2B333B] leading-relaxed">
                    {m.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

       {/* Cutting Machine Video Showcase */}
      <CuttingMachineVideoSection />

      {/* Inside Our Manufacturing Facility & Plant Address */}
      <PlantFacilitySection />

      {/* Final CTA */}
      <FinalCtaSection />
    </div>
  );
}
