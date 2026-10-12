"use client";

import React, { useState } from "react";
import { useModal } from "@/context/ModalContext";
import { ArrowRight, Sliders, CheckCircle2, FileText, ChevronRight, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface SpecResult {
  productCode: string;
  name: string;
  formula: string;
  purity: string;
  particleSize: string;
  slug: string;
  description: string;
  keyMetric: string;
}

const sectorOptions = [
  { id: "machining", label: "5-Axis CNC & Cutting Tools", defaultStress: "wear", defaultForm: "carbide-powder" },
  { id: "aerospace", label: "Aerospace Propulsion & Heat Shields", defaultStress: "heat", defaultForm: "pure-metal" },
  { id: "mining", label: "Mining Drill Bits & Abrasive Wear", defaultStress: "impact", defaultForm: "rtp-granules" },
  { id: "steelmaking", label: "Steel Desulfurization & Refining", defaultStress: "reactivity", defaultForm: "magnesium-powder" },
  { id: "catalysis", label: "Chemical Catalysis & Glass Pigments", defaultStress: "purity", defaultForm: "oxide-intermediate" },
];

const stressOptions = [
  { id: "wear", label: "Abrasive Flank & Crater Wear (HV > 2000)" },
  { id: "heat", label: "Extreme Thermal Creep (> 1500°C)" },
  { id: "impact", label: "Severe Mechanical Shock & Interrupted Cuts" },
  { id: "reactivity", label: "High Chemical Reactivity / Deep De-S" },
  { id: "purity", label: "Ultra-Low Trace Contaminants (Sub-ppm)" },
];

const formOptions = [
  { id: "carbide-powder", label: "Tungsten Carbide WC Powder (0.4–30 µm)" },
  { id: "rtp-granules", label: "Ready-To-Press (RTP) Sinterable Granules" },
  { id: "pure-metal", label: "Tungsten Metal Powder W (99.95%+)" },
  { id: "oxide-intermediate", label: "Tungsten Trioxide WO₃ / APT Crystals" },
  { id: "magnesium-powder", label: "High-Purity Magnesium Powders / Turnings" },
];

function calculateRecommendation(sector: string, stress: string, form: string): SpecResult {
  if (sector === "steelmaking" || form === "magnesium-powder") {
    return {
      productCode: "PRM-MG-11",
      name: "Magnesium Powder (De-S Grade)",
      formula: "Mg ≥ 99.8%",
      purity: "99.85% Total Magnesium",
      particleSize: "0.2 – 1.6 mm / 90% Pass",
      slug: "magnesium-powder",
      description: "Optimized spherical morphology with controlled reactivity for hot metal blast furnace torpedo desulfurization.",
      keyMetric: "Sulfur extraction efficiency > 92%",
    };
  }

  if (sector === "catalysis" || form === "oxide-intermediate") {
    return {
      productCode: "PRM-WO3-02",
      name: "Tungsten Trioxide — WO₃",
      formula: "WO₃ ≥ 99.95%",
      purity: "99.96% Stoichiometric",
      particleSize: "FSSS: 2.5 – 6.0 µm",
      slug: "tungsten-trioxide-wo3",
      description: "Direct-fired rotary calcined yellow oxide with tight BET specific surface area and zero alkali residues.",
      keyMetric: "BET: 3.5 – 4.5 m²/g",
    };
  }

  if (form === "rtp-granules" || stress === "impact") {
    return {
      productCode: "PRM-RTP-08",
      name: "Ready-to-Press (RTP) Graded Powder",
      formula: "WC-Co (6–12% Co)",
      purity: "Grade Controlled Carbon Balance",
      particleSize: "Apparent Density: 3.1 g/cm³",
      slug: "ready-to-press-graded-powder-rtp",
      description: "Homogeneous spray-dried spherical granules coated with paraffin binder for automated CNC press-and-sinter.",
      keyMetric: "Flowability: < 28 s / 50g",
    };
  }

  if (sector === "aerospace" || form === "pure-metal") {
    return {
      productCode: "PRM-W-05",
      name: "Tungsten Metal Powder — W",
      formula: "W ≥ 99.95%",
      purity: "99.97% Elemental W",
      particleSize: "FSSS: 0.8 – 4.5 µm",
      slug: "tungsten-metal-powder-w",
      description: "Ultra-pure reduced elemental powder with sub-0.12% interstitial oxygen for aerospace counterweights and nozzles.",
      keyMetric: "Theoretical Density: 19.25 g/cm³",
    };
  }

  // Default: Cutting tool high wear WC
  return {
    productCode: "PRM-WC-06",
    name: "Tungsten Carbide Powder — WC Ultrafine",
    formula: "WC (6.13% C)",
    purity: "Total Carbon: 6.13 ± 0.04%",
    particleSize: "FSSS: 0.4 – 0.8 µm",
    slug: "tungsten-carbide-powder-wc",
    description: "Submicron crystal habit providing extreme microhardness (HV 2200) without premature catastrophic fracture.",
    keyMetric: "Hardness: HV 2200",
  };
}

export default function InteractiveSpecCalculator() {
  const [selectedSector, setSelectedSector] = useState(sectorOptions[0].id);
  const [selectedStress, setSelectedStress] = useState(stressOptions[0].id);
  const [selectedForm, setSelectedForm] = useState(formOptions[0].id);
  const { openRfqModal } = useModal();

  const recommendation = calculateRecommendation(selectedSector, selectedStress, selectedForm);

  return (
    <section className="relative w-full py-24 sm:py-32 bg-[#080808] text-white border-b border-[#222222] overflow-hidden">
      {/* Precision grid */}
      <div className="absolute inset-0 bg-industrial-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#222222]">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono-tech uppercase tracking-[0.25em] text-[#F36C21] mb-2">
              <span className="w-2 h-2 rounded-full bg-[#F36C21] animate-ping" />
              <span>Interactive Engineering Selector</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-heading font-black tracking-tight text-white uppercase">
              Material Spec Finder. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F36C21] to-[#D9DDE0]">
                Tailored Metallurgy in 3 Steps.
              </span>
            </h2>
          </div>

          <p className="mt-4 md:mt-0 text-xs sm:text-sm text-[#A7ADB2] max-w-md font-sans">
            Configure your technical deployment criteria to identify the calibrated PROMETALLIK grade, grain distribution, and analytical assay.
          </p>
        </div>

        {/* 3-Step Selection Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Controls: Left 7 columns */}
          <div className="lg:col-span-7 space-y-6">
            {/* Step 1: Industry Application */}
            <div className="p-5 bg-[#111111] border border-[#242424] space-y-3">
              <div className="flex items-center justify-between text-xs font-mono-tech">
                <span className="text-[#F36C21] font-bold">STEP 01 // APPLICATION SECTOR</span>
                <span className="text-[#777777]">[Select 1]</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {sectorOptions.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => {
                      setSelectedSector(opt.id);
                      setSelectedStress(opt.defaultStress);
                      setSelectedForm(opt.defaultForm);
                    }}
                    className={`p-3 text-left border text-xs font-mono-tech transition-all cursor-pointer ${selectedSector === opt.id
                        ? "bg-[#1c1c1c] border-[#F36C21] text-white shadow-[0_0_10px_rgba(243,108,33,0.3)] font-bold"
                        : "bg-[#0d0d0d] border-[#222222] text-[#A7ADB2] hover:border-[#444444] hover:text-white"
                      }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Key Operational Stress */}
            <div className="p-5 bg-[#111111] border border-[#242424] space-y-3">
              <div className="flex items-center justify-between text-xs font-mono-tech">
                <span className="text-[#F36C21] font-bold">STEP 02 // PRIMARY OPERATIONAL STRESS</span>
                <span className="text-[#777777]">[Select 1]</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {stressOptions.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setSelectedStress(opt.id)}
                    className={`p-3 text-left border text-xs font-mono-tech transition-all cursor-pointer ${selectedStress === opt.id
                        ? "bg-[#1c1c1c] border-[#F36C21] text-white shadow-[0_0_10px_rgba(243,108,33,0.3)] font-bold"
                        : "bg-[#0d0d0d] border-[#222222] text-[#A7ADB2] hover:border-[#444444] hover:text-white"
                      }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Desired Supply Form */}
            <div className="p-5 bg-[#111111] border border-[#242424] space-y-3">
              <div className="flex items-center justify-between text-xs font-mono-tech">
                <span className="text-[#F36C21] font-bold">STEP 03 // PHYSICAL PRODUCT FORM</span>
                <span className="text-[#777777]">[Select 1]</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {formOptions.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setSelectedForm(opt.id)}
                    className={`p-3 text-left border text-xs font-mono-tech transition-all cursor-pointer ${selectedForm === opt.id
                        ? "bg-[#1c1c1c] border-[#F36C21] text-white shadow-[0_0_10px_rgba(243,108,33,0.3)] font-bold"
                        : "bg-[#0d0d0d] border-[#222222] text-[#A7ADB2] hover:border-[#444444] hover:text-white"
                      }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Result Card: Right 5 columns */}
          <div className="lg:col-span-5 bg-[#141414] border border-[#262626] p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#F36C21]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-6 relative z-10">
              <div className="border-b border-[#262626] pb-4">
                <div className="flex items-center justify-between text-xs font-mono-tech text-[#F36C21] mb-1">
                  <span>RECOMMENDED SPECIFICATION</span>
                  <span className="text-white bg-black/80 px-2.5 py-0.5 border border-[#333333]">
                    {recommendation.productCode}
                  </span>
                </div>
                <h3 className="text-2xl font-heading font-black text-white uppercase mt-1">
                  {recommendation.name}
                </h3>
                <span className="text-xs font-mono-tech text-[#FF7A1A] font-bold">
                  {recommendation.formula}
                </span>
              </div>

              {/* Specifications Snapshot */}
              <div className="grid grid-cols-2 gap-3 font-mono-tech text-xs">
                <div className="p-3 bg-[#0d0d0d] border-l-2 border-[#F36C21]">
                  <span className="text-[10px] text-[#A7ADB2] uppercase block">Guaranteed Purity</span>
                  <span className="text-white font-bold text-sm truncate block">{recommendation.purity}</span>
                </div>
                <div className="p-3 bg-[#0d0d0d] border-l-2 border-[#F36C21]">
                  <span className="text-[10px] text-[#A7ADB2] uppercase block">Granulometry / Size</span>
                  <span className="text-white font-bold text-sm truncate block">{recommendation.particleSize}</span>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-2 text-xs">
                <span className="font-mono-tech uppercase text-[#A7ADB2] tracking-wider block">
                  Application Match Rationale:
                </span>
                <p className="text-[#D9DDE0] leading-relaxed bg-[#0d0d0d] p-3 border border-[#222222]">
                  {recommendation.description}
                </p>
              </div>

              {/* Key Benchmark Metric */}
              <div className="p-3 bg-black/80 border border-[#F36C21]/40 flex items-center justify-between text-xs font-mono-tech">
                <span className="text-[#A7ADB2] uppercase">Target Parameter:</span>
                <span className="text-[#F36C21] font-bold">{recommendation.keyMetric}</span>
              </div>
            </div>

            {/* 1-Click Action */}
            <div className="pt-6 mt-6 border-t border-[#262626] space-y-3 relative z-10">
              <button
                onClick={() => openRfqModal()}
                className="w-full bg-[#F36C21] hover:bg-[#FF7A1A] text-[#080808] font-heading font-black text-xs uppercase py-4 px-6 tracking-wider transition-all flex items-center justify-center cursor-pointer shadow-[0_0_20px_rgba(243,108,33,0.35)]"
              >
                <span>Request Custom Quote for This Spec</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>

              <div className="flex items-center justify-center space-x-2 text-[10px] font-mono-tech text-[#777777]">
                <CheckCircle2 className="w-3 h-3 text-[#F36C21]" />
                <span>Certified Batch COA &amp; Sample Shipment Available</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
