"use client";

import React, { useState } from "react";
import { useModal } from "@/context/ModalContext";
import { productsCatalogue } from "@/data/products";
import { ArrowRight, Flame, Scale, ShieldCheck, Zap, SlidersHorizontal, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface MetalProperty {
  id: string;
  name: string;
  formula: string;
  isPrometallik: boolean;
  category: string;
  meltingPoint: number; // °C
  density: number; // g/cm³
  hardness: number; // HV
  thermalCond: number; // W/m·K
  strengths: string;
  primaryApplication: string;
}

const metalsData: MetalProperty[] = [
  {
    id: "tungsten",
    name: "Pure Tungsten",
    formula: "W (74)",
    isPrometallik: true,
    category: "Refractory Metal",
    meltingPoint: 3422,
    density: 19.25,
    hardness: 350,
    thermalCond: 173,
    strengths: "Highest elemental melting point, extreme creep resistance, gold-equivalent density",
    primaryApplication: "Radiation shielding, aerospace counterweights, EDM electrodes",
  },
  {
    id: "tungsten-carbide",
    name: "Tungsten Carbide",
    formula: "WC",
    isPrometallik: true,
    category: "Hardmetal / Cemented Carbide",
    meltingPoint: 2870,
    density: 15.63,
    hardness: 2200,
    thermalCond: 110,
    strengths: "Extreme microhardness, abrasive wear resistance, high Young's modulus (650 GPa)",
    primaryApplication: "Indexable CNC cutting tools, mining drill buttons, abrasive wear plates",
  },
  {
    id: "cobalt",
    name: "Cobalt Matrix",
    formula: "Co (27)",
    isPrometallik: true,
    category: "Binder & Transition Metal",
    meltingPoint: 1495,
    density: 8.90,
    hardness: 225,
    thermalCond: 100,
    strengths: "Exceptional liquid-phase wetting of carbide grains, thermal fatigue strength",
    primaryApplication: "Hardmetal binder matrix, superalloys, industrial batteries",
  },
  {
    id: "magnesium",
    name: "Pure Magnesium",
    formula: "Mg (12)",
    isPrometallik: true,
    category: "Lightweight Reactive Metal",
    meltingPoint: 650,
    density: 1.74,
    hardness: 45,
    thermalCond: 156,
    strengths: "Ultra-low density, high chemical reactivity for molten pig-iron desulfurization",
    primaryApplication: "Steelworks hot-metal desulfurization, aerospace ultralight structural alloys",
  },
  {
    id: "tool-steel",
    name: "High-Speed Steel (M2)",
    formula: "HSS",
    isPrometallik: false,
    category: "Benchmark Conventional Steel",
    meltingPoint: 1420,
    density: 8.05,
    hardness: 850,
    thermalCond: 24,
    strengths: "Standard industrial tool baseline; softens rapidly above 550°C",
    primaryApplication: "Conventional drill bits, woodworking cutters",
  },
  {
    id: "titanium",
    name: "Titanium Alloy",
    formula: "Ti-6Al-4V",
    isPrometallik: false,
    category: "Benchmark Aerospace Alloy",
    meltingPoint: 1660,
    density: 4.43,
    hardness: 350,
    thermalCond: 6.7,
    strengths: "High strength-to-weight ratio; low thermal conductivity creates machining heat traps",
    primaryApplication: "Airframes, chemical pumps, biomedical implants",
  },
];

export default function MaterialPropertiesComparator() {
  const [selectedMetalId, setSelectedMetalId] = useState<string>("tungsten-carbide");
  const [activeMetric, setActiveMetric] = useState<"meltingPoint" | "density" | "hardness" | "thermalCond">("hardness");
  const { openRfqModal } = useModal();

  const activeMetal = metalsData.find((m) => m.id === selectedMetalId) || metalsData[1];

  const metricConfigs = {
    meltingPoint: {
      label: "Melting Point",
      unit: "°C",
      max: 3600,
      description: "Thermal ceiling before structural phase breakdown and softening occur.",
      icon: Flame,
    },
    density: {
      label: "Mass Density",
      unit: "g/cm³",
      max: 20,
      description: "Kinetic inertia and space efficiency for counterweights and shielding.",
      icon: Scale,
    },
    hardness: {
      label: "Vickers Microhardness",
      unit: "HV",
      max: 2400,
      description: "Resistance against abrasive mechanical wear and crater erosion.",
      icon: ShieldCheck,
    },
    thermalCond: {
      label: "Thermal Conductivity",
      unit: "W/m·K",
      max: 200,
      description: "Heat dissipation rate away from high-speed cutting and combustion zones.",
      icon: Zap,
    },
  };

  const currentConfig = metricConfigs[activeMetric];

  return (
    <section className="relative w-full py-24 sm:py-32 bg-[#0a0a0a] text-white border-b border-[#222222] overflow-hidden">
      {/* Industrial grid backdrop */}
      <div className="absolute inset-0 bg-industrial-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#222222]">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono-tech uppercase tracking-[0.25em] text-[#F36C21] mb-2">
              <span className="w-6 h-[2px] bg-[#F36C21]" />
              <span>Interactive Metallurgical Benchmark</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-heading font-black tracking-tight text-white uppercase">
              Material Properties. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F36C21] via-[#FF7A1A] to-[#D9DDE0]">
                Empirical Superiority.
              </span>
            </h2>
          </div>

          <p className="mt-4 md:mt-0 text-xs sm:text-sm text-[#A7ADB2] max-w-md font-sans">
            Compare PROMETALLIK refractory powders against standard industrial engineering metals across critical thermodynamic and mechanical criteria.
          </p>
        </div>

        {/* Metric Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-8">
          {(Object.keys(metricConfigs) as Array<keyof typeof metricConfigs>).map((key) => {
            const config = metricConfigs[key];
            const Icon = config.icon;
            const isSelected = activeMetric === key;
            return (
              <button
                key={key}
                onClick={() => setActiveMetric(key)}
                className={`p-3.5 sm:p-4 text-left border transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? "bg-[#161616] border-[#F36C21] shadow-[0_0_15px_rgba(243,108,33,0.3)]"
                    : "bg-[#111111] border-[#262626] hover:border-[#444444]"
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className={`text-xs font-mono-tech uppercase tracking-wider ${isSelected ? "text-[#F36C21]" : "text-[#A7ADB2]"}`}>
                    {config.label}
                  </span>
                  <Icon className={`w-4 h-4 ${isSelected ? "text-[#F36C21]" : "text-[#777777]"}`} />
                </div>
                <div className="text-[11px] text-[#777777] font-mono-tech truncate">
                  Unit: {config.unit}
                </div>
              </button>
            );
          })}
        </div>

        {/* Comparator Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Visual Comparative Bars */}
          <div className="lg:col-span-7 bg-[#111111] border border-[#262626] p-6 sm:p-8 space-y-5">
            <div className="flex items-center justify-between border-b border-[#222222] pb-3 text-xs font-mono-tech text-[#A7ADB2]">
              <span>MATERIAL CANDIDATE</span>
              <span className="uppercase text-[#F36C21] font-bold">
                {currentConfig.label} ({currentConfig.unit})
              </span>
            </div>

            <div className="space-y-4">
              {metalsData.map((m) => {
                const val = m[activeMetric];
                const percentage = Math.min(100, Math.round((val / currentConfig.max) * 100));
                const isSelected = m.id === selectedMetalId;

                return (
                  <div
                    key={m.id}
                    onClick={() => setSelectedMetalId(m.id)}
                    className={`p-3.5 border transition-all cursor-pointer ${
                      isSelected
                        ? "bg-[#1a1a1a] border-[#F36C21] shadow-[0_0_12px_rgba(243,108,33,0.25)]"
                        : "bg-[#0d0d0d] border-[#222222] hover:border-[#383838]"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <span className={`w-2 h-2 rounded-full ${m.isPrometallik ? "bg-[#F36C21]" : "bg-[#777777]"}`} />
                        <span className="font-heading font-extrabold text-sm text-white">{m.name}</span>
                        <span className="text-[10px] font-mono-tech text-[#A7ADB2] px-1.5 py-0.5 bg-black/60 border border-[#2a2a2a]">
                          {m.formula}
                        </span>
                        {m.isPrometallik && (
                          <span className="text-[9px] font-mono-tech text-[#F36C21] uppercase tracking-wider font-bold">
                            [PROMETALLIK]
                          </span>
                        )}
                      </div>
                      <span className="font-mono-tech text-sm font-bold text-white">
                        {val.toLocaleString()} {currentConfig.unit}
                      </span>
                    </div>

                    {/* Comparative Bar Track */}
                    <div className="w-full h-2 bg-[#1f1f1f] rounded-none overflow-hidden relative">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${percentage}%` }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className={`h-full ${
                          m.isPrometallik
                            ? isSelected
                              ? "bg-gradient-to-r from-[#C94C12] via-[#F36C21] to-[#FF7A1A]"
                              : "bg-[#F36C21]"
                            : "bg-[#4A4F54]"
                        }`}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-2 text-[11px] font-mono-tech text-[#777777] flex items-center justify-between">
              <span>* Values represent verified standard physical metallurgy constants.</span>
              <span className="text-[#A7ADB2]">Click any candidate to inspect dossier</span>
            </div>
          </div>

          {/* Right Column: In-Depth Selected Material Dossier */}
          <div className="lg:col-span-5 bg-[#141414] border border-[#262626] p-6 sm:p-8 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="border-b border-[#262626] pb-4">
                <div className="flex items-center justify-between text-xs font-mono-tech text-[#F36C21] mb-1">
                  <span>METALLURGICAL DOSSIER</span>
                  <span className="text-white bg-black/80 px-2 py-0.5 border border-[#333333]">
                    {activeMetal.formula}
                  </span>
                </div>
                <h3 className="text-2xl font-heading font-black text-white uppercase mt-1">
                  {activeMetal.name}
                </h3>
                <span className="text-xs font-mono-tech text-[#A7ADB2]">
                  Category: {activeMetal.category}
                </span>
              </div>

              {/* Empirical 4-Parameter Metric Grid */}
              <div className="grid grid-cols-2 gap-3 font-mono-tech text-xs">
                <div className="p-3 bg-[#0d0d0d] border-l-2 border-[#F36C21]">
                  <span className="text-[10px] text-[#A7ADB2] uppercase block">Melting Point</span>
                  <span className="text-white font-bold text-base">{activeMetal.meltingPoint}°C</span>
                </div>
                <div className="p-3 bg-[#0d0d0d] border-l-2 border-[#F36C21]">
                  <span className="text-[10px] text-[#A7ADB2] uppercase block">Mass Density</span>
                  <span className="text-white font-bold text-base">{activeMetal.density} g/cm³</span>
                </div>
                <div className="p-3 bg-[#0d0d0d] border-l-2 border-[#F36C21]">
                  <span className="text-[10px] text-[#A7ADB2] uppercase block">Microhardness</span>
                  <span className="text-white font-bold text-base">{activeMetal.hardness} HV</span>
                </div>
                <div className="p-3 bg-[#0d0d0d] border-l-2 border-[#F36C21]">
                  <span className="text-[10px] text-[#A7ADB2] uppercase block">Thermal Cond.</span>
                  <span className="text-white font-bold text-base">{activeMetal.thermalCond} W/m·K</span>
                </div>
              </div>

              {/* Engineering Advantages */}
              <div className="space-y-2 text-xs">
                <span className="font-mono-tech uppercase text-[#F36C21] tracking-wider block font-bold">
                  Key Physical Advantage:
                </span>
                <p className="text-[#D9DDE0] leading-relaxed bg-[#0d0d0d] p-3 border border-[#222222]">
                  {activeMetal.strengths}
                </p>
              </div>

              {/* Target Deployments */}
              <div className="space-y-1 text-xs">
                <span className="font-mono-tech uppercase text-[#A7ADB2] tracking-wider block">
                  Primary Application Sector:
                </span>
                <p className="text-white font-semibold">
                  {activeMetal.primaryApplication}
                </p>
              </div>
            </div>

            {/* Direct Action CTA */}
            <div className="pt-6 mt-6 border-t border-[#262626] flex items-center justify-between">
              <button
                onClick={() => openRfqModal()}
                className="w-full bg-[#F36C21] hover:bg-[#FF7A1A] text-[#080808] font-heading font-black text-xs uppercase py-3.5 px-5 tracking-wider transition-all flex items-center justify-center cursor-pointer shadow-[0_0_15px_rgba(243,108,33,0.3)]"
              >
                <span>Request Custom Lot Assay</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
