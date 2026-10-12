"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { industryApplications, IndustryApplication } from "@/data/applications";
import { productsCatalogue } from "@/data/products";
import { useModal } from "@/context/ModalContext";
import FinalCtaSection from "@/components/sections/FinalCtaSection";
import { ArrowRight, CheckCircle2, ShieldCheck, Layers, ChevronRight } from "lucide-react";

export default function ApplicationsPage() {
  const { openRfqModal } = useModal();
  const [activeSectorId, setActiveSectorId] = useState<string>("app-01");

  const activeApp =
    industryApplications.find((app) => app.id === activeSectorId) || industryApplications[0];

  const matchedProducts = productsCatalogue.filter((p) =>
    activeApp.relevantProductSlugs.includes(p.slug)
  );

  return (
    <div className="w-full flex flex-col bg-[#080808] text-white">
      {/* Applications Hero */}
      <section className="relative w-full min-h-[50vh] flex items-center justify-center pt-36 pb-20 bg-[#080808] border-b border-[#222222] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/materials/cnc-aerospace-tooling.jpg"
            alt="Advanced aerospace and high precision metallurgy"
            fill
            priority
            className="object-cover object-center filter contrast-125 brightness-[0.3]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-black/80 to-transparent" />
          <div className="absolute inset-0 bg-industrial-grid opacity-20 pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 text-xs font-mono-tech uppercase tracking-[0.25em] text-[#F36C21] mb-4">
              <span className="w-6 h-[2px] bg-[#F36C21]" />
              <span>Cross-Industry Performance Matrix</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-heading font-black tracking-tight text-white uppercase leading-tight">
              INDUSTRIAL <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F36C21] to-[#D9DDE0]">
                APPLICATIONS.
              </span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-[#D9DDE0] leading-relaxed">
              From submicron tungsten carbide in 5-axis CNC machining to high-density balances in aerospace flight surfaces &mdash; explore how PROMETALLIK materials solve extreme engineering challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Main Applications Explorer */}
      <section className="py-20 bg-[#0a0a0a] border-b border-[#222222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: 12 Industry Selector List */}
            <div className="lg:col-span-4 bg-[#111111] border border-[#262626] p-4 space-y-1.5 max-h-[750px] overflow-y-auto">
              <div className="p-3 border-b border-[#222222] mb-2 font-mono-tech text-xs text-[#A7ADB2] uppercase tracking-wider">
                Select Sector (12 Total)
              </div>
              {industryApplications.map((app, idx) => {
                const isSelected = app.id === activeSectorId;
                return (
                  <button
                    key={app.id}
                    onClick={() => setActiveSectorId(app.id)}
                    className={`w-full p-3 text-left transition-all border flex items-center justify-between cursor-pointer ${
                      isSelected
                        ? "bg-[#1c1c1c] border-[#F36C21] text-white shadow-md"
                        : "bg-[#141414] border-transparent text-[#A7ADB2] hover:text-white hover:bg-[#181818]"
                    }`}
                  >
                    <div>
                      <div className="text-xs font-heading font-bold">{app.name}</div>
                      <div className="text-[10px] font-mono-tech text-[#777777]">{app.shortTag}</div>
                    </div>
                    <ChevronRight
                      className={`w-4 h-4 transition-transform ${
                        isSelected ? "text-[#F36C21] translate-x-1" : "text-[#444444]"
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Right: Selected Application Detailed Dossier */}
            <div className="lg:col-span-8 bg-[#111111] border border-[#262626] p-6 sm:p-10 space-y-8 shadow-2xl">
              {/* Header */}
              <div className="border-b border-[#222222] pb-6">
                <span className="text-xs font-mono-tech uppercase tracking-[0.25em] text-[#F36C21] block mb-1">
                  SECTOR DOSSIER // {activeApp.shortTag}
                </span>
                <h2 className="text-2xl sm:text-4xl font-heading font-black text-white uppercase">
                  {activeApp.headline}
                </h2>
              </div>

              {/* Large Industry Photography */}
              <div className="relative h-72 sm:h-96 w-full bg-black border border-[#292929] overflow-hidden">
                <Image
                  src={activeApp.imageUrl}
                  alt={activeApp.imageAlt}
                  fill
                  priority
                  className="object-cover object-center filter brightness-95 contrast-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-3 bg-black/80 border-l-2 border-[#F36C21] text-xs font-mono-tech text-white">
                  <span className="font-bold block">{activeApp.name}</span>
                  <span className="text-[10px] text-[#A7ADB2]">{activeApp.imageAlt}</span>
                </div>
              </div>

              {/* Challenge vs Solution Dual Columns */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 bg-[#161616] border-l-2 border-[#C94C12] space-y-2">
                  <span className="text-[10px] font-mono-tech uppercase text-[#F36C21] font-bold block">
                    The Industrial Challenge
                  </span>
                  <p className="text-xs text-[#D9DDE0] leading-relaxed">
                    {activeApp.materialChallenge}
                  </p>
                </div>

                <div className="p-5 bg-[#161616] border-l-2 border-[#A7ADB2] space-y-2">
                  <span className="text-[10px] font-mono-tech uppercase text-white font-bold block">
                    The PROMETALLIK Metallurgy
                  </span>
                  <p className="text-xs text-[#A7ADB2] leading-relaxed">
                    {activeApp.solutionOverview}
                  </p>
                </div>
              </div>

              {/* Required Characteristics */}
              <div className="space-y-3">
                <span className="text-xs font-mono-tech uppercase tracking-wider text-[#A7ADB2] block">
                  Mandatory Material Characteristics:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeApp.requiredCharacteristics.map((char, i) => (
                    <div
                      key={i}
                      className="p-3 bg-[#161616] border border-[#262626] text-xs font-mono-tech text-white flex items-center space-x-2"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#F36C21] shrink-0" />
                      <span>{char}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Typical Use Cases */}
              <div className="space-y-2">
                <span className="text-xs font-mono-tech uppercase tracking-wider text-[#A7ADB2] block">
                  Proven Use Cases:
                </span>
                <ul className="space-y-1.5 text-xs text-[#D9DDE0]">
                  {activeApp.typicalUseCases.map((useCase, i) => (
                    <li key={i} className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-[#F36C21] mr-2" />
                      <span>{useCase}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recommended Refined Products */}
              <div className="pt-4 border-t border-[#222222] space-y-3">
                <span className="text-xs font-mono-tech uppercase tracking-wider text-[#A7ADB2] block">
                  Recommended Refined Products:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {matchedProducts.map((p) => (
                    <Link
                      key={p.id}
                      href={`/products/${p.slug}`}
                      className="p-3 bg-[#141414] hover:bg-[#1a1a1a] border border-[#2b2b2b] hover:border-[#F36C21] flex items-center justify-between text-xs transition-colors group"
                    >
                      <span className="font-bold text-white group-hover:text-[#F36C21]">
                        {p.name}
                      </span>
                      <span className="font-mono-tech text-[10px] text-[#A7ADB2] bg-black/50 px-2 py-0.5">
                        {p.chemicalFormula}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Enquire CTA */}
              <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                <button
                  onClick={() => openRfqModal(matchedProducts[0]?.id)}
                  className="w-full sm:w-auto bg-[#F36C21] hover:bg-[#FF7A1A] text-[#080808] font-heading font-black text-xs uppercase px-7 py-4 tracking-wider transition-colors cursor-pointer"
                >
                  REQUEST {activeApp.name.toUpperCase()} QUOTATION
                </button>
                <Link
                  href="/contact"
                  className="text-xs font-mono-tech uppercase text-[#D9DDE0] hover:text-[#F36C21] underline-offset-4 hover:underline"
                >
                  Consult Applications Engineer &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <FinalCtaSection />
    </div>
  );
}
