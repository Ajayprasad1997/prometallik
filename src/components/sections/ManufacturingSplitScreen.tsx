"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { splitScreenManufacturingStages } from "@/data/process-stages";
import { ArrowRight, ChevronRight, ChevronLeft, ShieldCheck, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ManufacturingSplitScreen() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const stage = splitScreenManufacturingStages[currentIdx];

  return (
    <section className="relative w-full py-24 sm:py-32 bg-[#111111] text-white border-b border-[#222222] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#222222]">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono-tech uppercase tracking-[0.25em] text-[#F36C21] mb-2">
              <span className="w-2 h-2 rounded-full bg-[#F36C21]" />
              <span>Split-Screen Process Sequence</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-heading font-black tracking-tight text-white uppercase">
              Manufacturing Capabilities. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F36C21] to-[#A7ADB2]">
                Pyrochemical Architecture.
              </span>
            </h2>
          </div>

          <div className="mt-4 md:mt-0 flex flex-col items-start md:items-end text-xs font-mono-tech text-[#A7ADB2]">
            <span className="text-[#F36C21] font-bold">STAGES 01 &mdash; 06</span>
            <span className="text-[11px] text-[#777777]">
              Demonstration profile pending final client audit
            </span>
          </div>
        </div>

        {/* Stage Selector Pills (Exhibition & Touchscreen Friendly) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-8">
          {splitScreenManufacturingStages.map((s, idx) => {
            const isSelected = idx === currentIdx;
            return (
              <button
                key={s.index}
                onClick={() => setCurrentIdx(idx)}
                className={`p-3 text-left border transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? "bg-[#1f1f1f] border-[#F36C21] shadow-[0_0_15px_rgba(243,108,33,0.3)]"
                    : "bg-[#141414] border-[#262626] hover:border-[#444444]"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span
                    className={`font-mono-tech text-xs font-bold ${
                      isSelected ? "text-[#F36C21]" : "text-[#777777]"
                    }`}
                  >
                    {s.index}
                  </span>
                  {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-[#F36C21]" />}
                </div>
                <div className="text-xs font-heading font-bold text-white truncate">{s.stage}</div>
              </button>
            );
          })}
        </div>

        {/* Split Screen Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch bg-[#0a0a0a] border border-[#262626] shadow-2xl">
          {/* Left: Manufacturing Photography with Slow Zoom */}
          <div className="lg:col-span-6 relative h-[380px] sm:h-[480px] lg:h-[580px] overflow-hidden bg-black">
            <AnimatePresence mode="wait">
              <motion.div
                key={stage.index}
                initial={{ opacity: 0, scale: 1.08 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6 }}
                className="relative w-full h-full"
              >
                <Image
                  src={stage.imageUrl}
                  alt={stage.headline}
                  fill
                  priority
                  className="object-cover object-center filter brightness-95 contrast-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/30" />

                {/* Left Stage Indicator Tag */}
                <div className="absolute top-4 left-4 p-2.5 bg-black/80 border border-[#F36C21]/60 font-mono-tech text-xs text-white">
                  <span className="text-[#F36C21] font-bold mr-2">STAGE {stage.index}</span>
                  <span className="uppercase text-[#D9DDE0]">{stage.stage}</span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 p-3 bg-black/80 border-l-2 border-[#F36C21] text-xs font-mono-tech text-[#A7ADB2]">
                  <span className="text-white block font-bold">{stage.headline}</span>
                  <span className="text-[10px]">European Pyrometallurgical Operations Desk</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right: Technical Content & Facts */}
          <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={stage.index}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                {/* Stage Index Header */}
                <div className="flex items-center space-x-3">
                  <span className="text-4xl font-heading font-black text-[#F36C21]">
                    {stage.index}
                  </span>
                  <div className="h-8 w-[1px] bg-[#333333]" />
                  <div>
                    <span className="text-[10px] font-mono-tech uppercase tracking-[0.25em] text-[#A7ADB2] block">
                      CAPABILITY STAGE
                    </span>
                    <span className="text-sm font-heading font-extrabold uppercase text-white">
                      {stage.stage}
                    </span>
                  </div>
                </div>

                {/* Headline & Description */}
                <div>
                  <h3 className="text-2xl font-heading font-extrabold text-white leading-snug mb-3">
                    {stage.headline}
                  </h3>
                  <p className="text-sm text-[#D9DDE0] leading-relaxed">
                    {stage.description}
                  </p>
                </div>

                {/* Process Technical Metrics Cards */}
                <div className="space-y-2">
                  <span className="text-[10px] font-mono-tech uppercase tracking-wider text-[#A7ADB2] block">
                    Operating Benchmarks:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {stage.metrics.map((metric, i) => (
                      <div
                        key={i}
                        className="p-3 bg-[#141414] border border-[#242424] font-mono-tech space-y-1"
                      >
                        <span className="text-[10px] text-[#A7ADB2] block uppercase truncate">
                          {metric.label}
                        </span>
                        <span className="text-sm font-bold text-[#F36C21] block">
                          {metric.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Client Demonstration Notice */}
                <div className="p-3 bg-[#141414] border-l-2 border-[#777777] text-[11px] font-mono-tech text-[#A7ADB2] flex items-center space-x-2">
                  <AlertCircle className="w-3.5 h-3.5 text-[#F36C21] shrink-0" />
                  <span>Demonstration content &mdash; plant parameters subject to formal specification sheet.</span>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Stage Navigation & Link to Manufacturing Page */}
            <div className="pt-6 border-t border-[#222222] flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <button
                  onClick={() =>
                    setCurrentIdx(
                      (prev) => (prev - 1 + splitScreenManufacturingStages.length) % splitScreenManufacturingStages.length
                    )
                  }
                  className="p-2.5 bg-[#171717] hover:bg-[#252525] border border-[#333333] text-white transition-colors"
                  aria-label="Previous capability stage"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() =>
                    setCurrentIdx((prev) => (prev + 1) % splitScreenManufacturingStages.length)
                  }
                  className="p-2.5 bg-[#171717] hover:bg-[#252525] border border-[#333333] text-white transition-colors"
                  aria-label="Next capability stage"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              <Link
                href="/manufacturing"
                className="text-xs font-mono-tech uppercase tracking-wider text-[#F36C21] hover:underline flex items-center font-bold"
              >
                <span>Full Manufacturing Route</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
