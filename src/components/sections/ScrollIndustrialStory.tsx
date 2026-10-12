"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { siteContent, StoryStage } from "@/data/siteContent";
import { ChevronRight, ArrowUpRight, ShieldCheck, Layers, Gauge, Box } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ScrollIndustrialStory() {
  const [activeStage, setActiveStage] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const stages = siteContent.industrialStory.stages;
  const current = stages[activeStage];

  // Auto progression or scroll sync
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate progress through container
      if (rect.top <= windowHeight * 0.4 && rect.bottom >= windowHeight * 0.2) {
        const totalDistance = rect.height - windowHeight * 0.5;
        const currentDistance = Math.max(0, -rect.top + windowHeight * 0.2);
        const progress = Math.min(1, Math.max(0, currentDistance / totalDistance));
        const stageIndex = Math.min(stages.length - 1, Math.floor(progress * stages.length));
        setActiveStage(stageIndex);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [stages.length]);

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-[#0B2A4A] text-white py-24 sm:py-32 overflow-hidden border-b border-[#145B8C]"
      id="industrial-story"
    >
      {/* Background Blueprint Grid */}
      <div className="absolute inset-0 bg-industrial-grid-dark opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Central Cinematic Headline */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center space-x-2 text-xs font-mono-tech uppercase tracking-[0.25em] text-[#F5B400] mb-3" data-aos="fade-up">
            <span className="w-2 h-2 rounded-full bg-[#EF6C23] animate-ping" />
            <span>PINNED INDUSTRIAL STORY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-black tracking-tight text-white leading-[1.05]" data-aos="fade-up">
            {siteContent.industrialStory.headline}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#B8BEC5] font-sans" data-aos="fade-up">
            {siteContent.industrialStory.subheadline}
          </p>
        </div>

        {/* Story Stages Navigation Tabs */}
        <div className="flex justify-center mb-12 overflow-x-auto no-scrollbar pb-2">
          <div className="inline-flex p-1.5 bg-[#071C33] border border-[#145B8C] rounded-lg gap-2">
            {stages.map((stage, idx) => {
              const isActive = idx === activeStage;
              return (
                <button
                  key={stage.id}
                  onClick={() => setActiveStage(idx)}
                  className={`px-4 py-2.5 rounded font-mono-tech text-xs uppercase tracking-wider transition-all duration-300 flex items-center space-x-2 shrink-0 ${
                    isActive
                      ? "bg-[#EF6C23] text-white font-bold shadow-md shadow-[#EF6C23]/30 scale-105"
                      : "text-[#B8BEC5] hover:text-white hover:bg-white/5"
                  }`}
                >
                  <span className="font-bold text-[11px] opacity-75">{stage.step}</span>
                  <span>{stage.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Pinned Stage Display Area */}
        <div className="relative min-h-[520px] lg:min-h-[580px] bg-[#071C33]/90 border border-[#145B8C] rounded-xl p-6 sm:p-10 shadow-2xl backdrop-blur-md">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
            >
              {/* Media Block (Alternates side on odd/even stages per prompt) */}
              <div
                className={`lg:col-span-6 relative order-1 ${
                  activeStage % 2 === 1 ? "lg:order-2" : "lg:order-1"
                }`}
              >
                {/* Primary Industrial Photo with Staggered Zoom reveal */}
                <motion.div
                  initial={{ scale: 0.9, y: 30, opacity: 0 }}
                  animate={{ scale: 1, y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="relative w-full h-[320px] sm:h-[420px] rounded-lg overflow-hidden border border-[#145B8C] shadow-xl group"
                >
                  <Image
                    src={current.imageUrl}
                    alt={current.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center filter contrast-110 brightness-95 transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071C33]/90 via-transparent to-black/20 pointer-events-none" />

                  {/* Masked Reveal Technical Tag */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-[#0B2A4A]/90 border border-[#EF6C23] backdrop-blur-md text-[10px] font-mono-tech uppercase text-[#F5B400] rounded">
                    STAGE {current.step} // {current.tag}
                  </div>

                  {/* Bottom Technical Metric */}
                  <div className="absolute bottom-4 left-4 right-4 p-3 bg-[#0B2A4A]/95 border-l-2 border-[#EF6C23] text-xs font-mono-tech text-[#EEF0F2] rounded-sm">
                    {current.technicalMetric}
                  </div>
                </motion.div>

                {/* Overlapping Small Supporting Photo (Prompt: "Some elements may overlap the central grid") */}
                <motion.div
                  initial={{ scale: 0.88, y: 40, opacity: 0 }}
                  animate={{ scale: 1, y: 0, opacity: 1 }}
                  transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute -bottom-6 -right-4 w-36 sm:w-48 h-28 sm:h-36 rounded-md overflow-hidden border-2 border-[#EF6C23] shadow-2xl hidden sm:block bg-[#0B2A4A]"
                >
                  <Image
                    src="/assets/images/plant/quality-inspection.jpg"
                    alt="Analytical verification detail"
                    fill
                    sizes="200px"
                    className="object-cover filter brightness-90"
                  />
                  <div className="absolute inset-0 bg-[#0B2A4A]/30" />
                  <div className="absolute bottom-1 right-1 px-1.5 py-0.5 bg-black/80 text-[8px] font-mono-tech text-[#F5B400]">
                    LAB ASSAY
                  </div>
                </motion.div>
              </div>

              {/* Information Text Block */}
              <div
                className={`lg:col-span-6 space-y-6 order-2 ${
                  activeStage % 2 === 1 ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <div className="space-y-2">
                  <div className="text-xs font-mono-tech uppercase tracking-[0.2em] text-[#EF6C23]">
                    METALLURGICAL SEQUENCE // STAGE {current.step}
                  </div>
                  <h3 className="text-2xl sm:text-4xl font-heading font-black text-white">
                    {current.title}
                  </h3>
                  <div className="text-base sm:text-lg text-[#F5B400] font-sans font-medium">
                    {current.subtitle}
                  </div>
                </div>

                <p className="text-sm sm:text-base text-[#B8BEC5] leading-relaxed font-normal">
                  {current.description}
                </p>

                {/* Technical Characteristics */}
                <div className="p-4 bg-[#0B2A4A]/80 border border-[#145B8C] rounded space-y-2 font-mono-tech text-xs">
                  <div className="flex items-center justify-between text-[#B8BEC5]">
                    <span className="text-[#F5B400] font-bold">Standard Governance:</span>
                    <span>ISO 9001:2015 &amp; ASTM Standards</span>
                  </div>
                  <div className="flex items-center justify-between text-[#B8BEC5]">
                    <span className="text-[#F5B400] font-bold">Process Medium:</span>
                    <span>Dry Hydrogen Reduction Loops</span>
                  </div>
                  <div className="flex items-center justify-between text-[#B8BEC5]">
                    <span className="text-[#F5B400] font-bold">Batch Release:</span>
                    <span>100% Spectrometric Assay Validated</span>
                  </div>
                </div>

                {/* Progress Indicators */}
                <div className="pt-2 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    {stages.map((_, i) => (
                      <span
                        key={i}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          i === activeStage
                            ? "w-8 bg-[#EF6C23]"
                            : i < activeStage
                            ? "w-3 bg-[#F5B400]"
                            : "w-3 bg-[#145B8C]"
                        }`}
                      />
                    ))}
                  </div>

                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => setActiveStage((prev) => (prev > 0 ? prev - 1 : stages.length - 1))}
                      className="px-3 py-1.5 border border-[#145B8C] hover:border-[#EF6C23] text-xs font-mono-tech text-white rounded transition-colors"
                    >
                      &larr; Prev
                    </button>
                    <button
                      onClick={() => setActiveStage((prev) => (prev + 1) % stages.length)}
                      className="px-4 py-1.5 bg-[#EF6C23] hover:bg-[#d85e19] text-xs font-mono-tech text-white font-bold rounded transition-colors"
                    >
                      Next Stage &rarr;
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
