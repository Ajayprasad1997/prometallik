"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { industryApplications } from "@/data/applications";
import { productsCatalogue } from "@/data/products";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function IndustryApplicationsMosaic() {
  const [selectedAppId, setSelectedAppId] = useState<string>("app-02"); // Default to Cutting Tools

  const activeApp =
    industryApplications.find((app) => app.id === selectedAppId) || industryApplications[0];

  const matchedProducts = productsCatalogue.filter((p) =>
    activeApp.relevantProductSlugs.includes(p.slug)
  );

  return (
    <section className="relative w-full py-24 sm:py-32 bg-[#080808] text-white border-b border-[#222222] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#222222]">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono-tech uppercase tracking-[0.25em] text-[#F36C21] mb-2">
              <span className="w-6 h-[2px] bg-[#F36C21]" />
              <span>Performance Deployment Sectors</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-heading font-black tracking-tight text-white uppercase">
              Demanding Applications. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F36C21] via-[#FF7A1A] to-white">
                Engineered Solutions.
              </span>
            </h2>
          </div>

          <Link
            href="/applications"
            className="mt-4 md:mt-0 text-xs font-heading font-bold uppercase tracking-wider text-[#F36C21] hover:underline flex items-center"
          >
            <span>Explore All 12 Industry Matrices</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1" />
          </Link>
        </div>

        {/* 12 Industry Selector Badges Mosaic */}
        <div className="flex flex-wrap gap-2 mb-10">
          {industryApplications.map((app) => {
            const isSelected = app.id === selectedAppId;
            return (
              <button
                key={app.id}
                onClick={() => setSelectedAppId(app.id)}
                className={`px-3.5 py-2 text-xs font-mono-tech uppercase tracking-wider transition-all duration-200 border cursor-pointer ${
                  isSelected
                    ? "bg-[#F36C21] text-[#080808] border-[#FF7A1A] font-bold shadow-[0_0_15px_rgba(243,108,33,0.4)] scale-105"
                    : "bg-[#141414] text-[#A7ADB2] border-[#262626] hover:text-white hover:border-[#444444]"
                }`}
              >
                {app.name}
              </button>
            );
          })}
        </div>

        {/* Selected Application Showcase Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch bg-[#111111] border border-[#262626] shadow-2xl">
          {/* Left: Dynamic Industry Photograph */}
          <div className="lg:col-span-7 relative h-[380px] sm:h-[480px] lg:h-[560px] overflow-hidden bg-black">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeApp.id}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.6 }}
                className="relative w-full h-full"
              >
                <Image
                  src={activeApp.imageUrl}
                  alt={activeApp.imageAlt}
                  fill
                  priority
                  className="object-cover object-center filter brightness-90 contrast-115"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                <div className="absolute top-4 left-4 p-2 bg-black/80 border border-[#F36C21]/60 font-mono-tech text-xs text-white">
                  <span className="text-[#F36C21] font-bold mr-2">SECTOR:</span>
                  <span className="uppercase">{activeApp.name}</span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 p-3 bg-black/80 border-l-2 border-[#F36C21] text-xs font-mono-tech text-[#A7ADB2]">
                  <span className="text-white block font-bold">{activeApp.shortTag}</span>
                  <span className="text-[10px]">Precision metallurgical validation</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right: Technical Challenge, Relevant Materials & Dynamic CTA */}
          <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div>
                <span className="text-[10px] font-mono-tech uppercase tracking-[0.25em] text-[#F36C21] block">
                  Application Matrix // {activeApp.shortTag}
                </span>
                <h3 className="text-2xl font-heading font-extrabold text-white mt-1">
                  {activeApp.headline}
                </h3>
              </div>

              {/* Material Challenge & Solution */}
              <div className="space-y-2 text-xs">
                <div className="p-3 bg-[#171717] border-l-2 border-[#C94C12]">
                  <span className="text-[#F36C21] font-mono-tech text-[10px] uppercase block font-bold">
                    Material Challenge:
                  </span>
                  <p className="text-[#D9DDE0] mt-1 leading-relaxed">
                    {activeApp.materialChallenge}
                  </p>
                </div>

                <div className="p-3 bg-[#171717] border-l-2 border-[#A7ADB2]">
                  <span className="text-white font-mono-tech text-[10px] uppercase block font-bold">
                    PROMETALLIK Metallurgy:
                  </span>
                  <p className="text-[#A7ADB2] mt-1 leading-relaxed">
                    {activeApp.solutionOverview}
                  </p>
                </div>
              </div>

              {/* Recommended Materials */}
              <div>
                <span className="text-[10px] font-mono-tech uppercase tracking-wider text-[#A7ADB2] block mb-2">
                  Recommended Refined Materials:
                </span>
                <div className="space-y-1.5">
                  {matchedProducts.map((p) => (
                    <Link
                      key={p.id}
                      href={`/products/${p.slug}`}
                      className="p-2 bg-[#171717] hover:bg-[#202020] border border-[#2b2b2b] hover:border-[#F36C21] flex items-center justify-between text-xs transition-colors group"
                    >
                      <div className="flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 bg-[#F36C21]" />
                        <span className="text-white font-bold group-hover:text-[#F36C21] transition-colors">
                          {p.name}
                        </span>
                      </div>
                      <span className="font-mono-tech text-[10px] text-[#A7ADB2] bg-black/40 px-2 py-0.5">
                        {p.chemicalFormula}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Dynamic CTA per Requirement 10 */}
            <div className="pt-4 border-t border-[#222222]">
              <Link
                href={`/applications?sector=${activeApp.slug}`}
                className="w-full bg-[#F36C21] hover:bg-[#FF7A1A] text-[#080808] font-heading font-black text-xs uppercase py-3.5 px-4 tracking-wider text-center flex items-center justify-center space-x-2 transition-colors shadow-lg cursor-pointer"
              >
                <span>EXPLORE {activeApp.name.toUpperCase()} SOLUTIONS</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
