"use client";

import React, { useState } from "react";
import Image from "next/image";
import { rawMaterialJourney } from "@/data/process-stages";
import { ArrowRight, ChevronRight, ChevronLeft, CheckCircle2, ShieldCheck, Cpu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function RawMaterialTransformation() {
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const currentStage = rawMaterialJourney[activeStageIndex];

  const handleNext = () => {
    setActiveStageIndex((prev) => (prev + 1) % rawMaterialJourney.length);
  };

  const handlePrev = () => {
    setActiveStageIndex((prev) => (prev - 1 + rawMaterialJourney.length) % rawMaterialJourney.length);
  };

  return (
    <section className="relative w-full py-24 sm:py-32 bg-[#080808] text-white border-b border-[#222222] overflow-hidden">
      {/* Dynamic Background Tint that reflects transition */}
      <div
        className="absolute inset-0 transition-colors duration-1000 opacity-25 pointer-events-none"
        style={{
          backgroundColor:
            currentStage.roughness === "rough"
              ? "#1a0f08"
              : currentStage.roughness === "intermediate"
              ? "#24140a"
              : currentStage.roughness === "refined"
              ? "#14171a"
              : "#2a2d30",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading & Context */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 border-b border-[#222222] pb-6">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono-tech uppercase tracking-[0.25em] text-[#F36C21] mb-2">
              <span className="w-2 h-2 rounded-full bg-[#F36C21] animate-ping" />
              <span>Scroll-Controlled Storytelling Journey</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-black tracking-tight text-white uppercase">
              FROM EARTH TO <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F36C21] via-[#FF7A1A] to-white">
                ENGINEERED PERFORMANCE.
              </span>
            </h2>
          </div>

          <p className="mt-4 md:mt-0 text-xs sm:text-sm text-[#A7ADB2] max-w-md font-sans">
            Follow the physical and chemical metamorphosis of raw geological ores into submicron powders and finished aerospace-grade metal alloys.
          </p>
        </div>

        {/* Interactive Progress Conduit */}
        <div className="mb-8">
          <div className="relative flex items-center justify-between pb-4 overflow-x-auto no-scrollbar">
            {/* Background Conduit Track */}
            <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-[#1f1f1f] -translate-y-1/2 z-0" />

            {/* Active Orange Conduit Line */}
            <div
              className="absolute top-1/2 left-0 h-[2.5px] bg-[#F36C21] -translate-y-1/2 z-0 transition-all duration-500 shadow-[0_0_12px_#F36C21]"
              style={{
                width: `${(activeStageIndex / (rawMaterialJourney.length - 1)) * 100}%`,
              }}
            />

            {/* Stepper Buttons (Exhibition Screen Touch Accessible) */}
            {rawMaterialJourney.map((stage, idx) => {
              const isActive = idx === activeStageIndex;
              const isPast = idx < activeStageIndex;

              return (
                <button
                  key={stage.id}
                  onClick={() => setActiveStageIndex(idx)}
                  className="relative z-10 flex flex-col items-center group cursor-pointer focus:outline-none shrink-0 px-2"
                >
                  <div
                    className={`w-9 h-9 sm:w-11 sm:h-11 rounded-none flex items-center justify-center font-mono-tech text-xs font-bold transition-all duration-300 border ${
                      isActive
                        ? "bg-[#F36C21] text-[#080808] border-[#FF7A1A] scale-110 shadow-[0_0_15px_rgba(243,108,33,0.7)]"
                        : isPast
                        ? "bg-[#141414] text-white border-[#F36C21]"
                        : "bg-[#0d0d0d] text-[#777777] border-[#262626] group-hover:border-[#A7ADB2]"
                    }`}
                  >
                    {stage.stepNumber}
                  </div>
                  <span
                    className={`hidden xl:block text-[9px] font-mono-tech tracking-wider uppercase mt-2 max-w-[85px] text-center truncate ${
                      isActive ? "text-[#F36C21] font-bold" : "text-[#777777]"
                    }`}
                  >
                    {stage.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Transformation Stage Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch bg-[#111111] border border-[#262626] shadow-2xl">
          {/* Left Visual Area with Crossfade & Image Parallax */}
          <div className="lg:col-span-7 relative h-[380px] sm:h-[480px] lg:h-[580px] overflow-hidden bg-black">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStage.id}
                initial={{ opacity: 0, scale: 1.08 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="relative w-full h-full"
              >
                <Image
                  src={currentStage.imageUrl}
                  alt={currentStage.imageAlt}
                  fill
                  priority
                  className="object-cover object-center filter brightness-95 contrast-115"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#111111]/80 hidden lg:block" />

                {/* Roughness badge overlay */}
                <div className="absolute top-4 left-4 flex items-center space-x-2">
                  <span className="text-[10px] font-mono-tech uppercase tracking-[0.2em] px-2.5 py-1 bg-black/85 border border-[#333333] text-white">
                    State: {currentStage.roughness.toUpperCase()}
                  </span>
                  <span className="text-[10px] font-mono-tech uppercase px-2 py-1 bg-[#F36C21] text-black font-bold">
                    Stage {currentStage.stepNumber} / 08
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-xs font-mono-tech text-[#D9DDE0] bg-black/75 p-3 border-l-2 border-[#F36C21]">
                  <span className="text-white font-bold block">{currentStage.imageAlt}</span>
                  <span className="text-[10px] text-[#A7ADB2]">Continuous pyrometallurgical &amp; hydrometallurgical processing</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Detail Content */}
          <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStage.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-5"
              >
                <div className="space-y-1">
                  <span className="text-xs font-mono-tech uppercase tracking-[0.25em] text-[#F36C21]">
                    Phase {currentStage.stepNumber} &middot; {currentStage.subtitle}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-heading font-black text-white leading-tight">
                    {currentStage.title}
                  </h3>
                </div>

                <p className="text-sm text-[#D9DDE0] leading-relaxed">
                  {currentStage.shortDescription}
                </p>

                {/* Technical Parameter List */}
                <div className="space-y-2 pt-2">
                  <span className="text-[11px] font-mono-tech uppercase tracking-wider text-[#A7ADB2] block">
                    Telemetry &amp; Process Control:
                  </span>
                  <div className="space-y-2">
                    {currentStage.technicalDetails.map((detail, idx) => (
                      <div
                        key={idx}
                        className="p-2.5 bg-[#171717] border-l-2 border-[#F36C21] text-xs font-mono-tech text-white flex items-start"
                      >
                        <span className="text-[#F36C21] mr-2 font-bold">&gt;</span>
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Stepper Navigation Controls */}
            <div className="pt-6 border-t border-[#222222] flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <button
                  onClick={handlePrev}
                  className="p-3 bg-[#171717] hover:bg-[#252525] border border-[#333333] text-white transition-colors"
                  aria-label="Previous transformation stage"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-3 bg-[#171717] hover:bg-[#252525] border border-[#333333] text-white transition-colors"
                  aria-label="Next transformation stage"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              <div className="text-right">
                <span className="text-[10px] font-mono-tech text-[#A7ADB2] uppercase tracking-wider block">
                  Metamorphosis
                </span>
                <span className="font-heading font-bold text-sm text-white">
                  Step {activeStageIndex + 1} of {rawMaterialJourney.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
