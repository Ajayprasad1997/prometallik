"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Flame, ShieldCheck, Zap, Scale } from "lucide-react";

export default function TungstenSpotlight() {
  return (
    <section className="relative w-full py-24 sm:py-32 bg-black text-white border-b border-[#222222] overflow-hidden">
      {/* Animated Technical Grid in Background */}
      <div className="absolute inset-0 bg-industrial-grid opacity-25 pointer-events-none" />

      {/* Orange Technical Measurement Lines */}
      <div className="absolute top-12 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#F36C21]/60 to-transparent pointer-events-none" />
      <div className="absolute bottom-12 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#F36C21]/60 to-transparent pointer-events-none" />
      <div className="absolute top-0 bottom-0 left-12 w-[1px] bg-[#1a1a1a] pointer-events-none hidden lg:block" />
      <div className="absolute top-0 bottom-0 right-12 w-[1px] bg-[#1a1a1a] pointer-events-none hidden lg:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Huge Elemental Periodic Notation per Requirement 10 */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="p-8 sm:p-12 bg-[#0c0c0c] border border-[#2a2a2a] relative overflow-hidden group shadow-2xl">
              {/* Corner crosshairs */}
              <div className="absolute top-2 left-2 text-[#F36C21] font-mono-tech text-[10px]">+</div>
              <div className="absolute top-2 right-2 text-[#F36C21] font-mono-tech text-[10px]">+</div>
              <div className="absolute bottom-2 left-2 text-[#F36C21] font-mono-tech text-[10px]">+</div>
              <div className="absolute bottom-2 right-2 text-[#F36C21] font-mono-tech text-[10px]">+</div>

              {/* Element Header */}
              <div className="flex items-center justify-between border-b border-[#222222] pb-4 mb-6 font-mono-tech text-xs text-[#A7ADB2]">
                <span className="text-[#F36C21] font-bold">PERIODIC ELEMENT 74</span>
                <span>GROUP 6 &middot; PERIOD 6</span>
              </div>

              {/* Big Elemental Typography: W, 74, 183.84 */}
              <div className="text-center py-4">
                <div className="text-8xl sm:text-9xl font-heading font-black text-white tracking-tighter leading-none group-hover:text-[#F36C21] transition-colors duration-500">
                  W
                </div>
                <div className="mt-4 flex items-center justify-center space-x-6 font-mono-tech">
                  <div className="text-left">
                    <span className="text-[10px] uppercase text-[#777777] block">Atomic No.</span>
                    <span className="text-2xl sm:text-3xl font-bold text-white">74</span>
                  </div>
                  <div className="h-8 w-[1px] bg-[#333333]" />
                  <div className="text-left">
                    <span className="text-[10px] uppercase text-[#777777] block">Atomic Mass</span>
                    <span className="text-2xl sm:text-3xl font-bold text-[#F36C21]">183.84</span>
                  </div>
                </div>
              </div>

              {/* Elemental Subtitle */}
              <div className="mt-6 pt-4 border-t border-[#222222] flex items-center justify-between font-mono-tech text-xs text-[#A7ADB2]">
                <span className="uppercase text-white font-bold">WOLFRAM / TUNGSTEN</span>
                <span>REFRACTORY SOLID</span>
              </div>
            </div>

            {/* Floating Specification Annotations */}
            <div className="grid grid-cols-2 gap-3 mt-4 font-mono-tech text-xs">
              <div className="p-3 bg-[#111111] border-l-2 border-[#F36C21]">
                <span className="text-[10px] text-[#A7ADB2] uppercase block">Melting Point</span>
                <span className="text-white font-bold text-sm">3422°C</span>
                <span className="text-[10px] text-[#F36C21] block">Highest of all metals</span>
              </div>
              <div className="p-3 bg-[#111111] border-l-2 border-[#F36C21]">
                <span className="text-[10px] text-[#A7ADB2] uppercase block">Mass Density</span>
                <span className="text-white font-bold text-sm">19.25 g/cm³</span>
                <span className="text-[10px] text-[#A7ADB2] block">Equivalent to Gold</span>
              </div>
            </div>
          </div>

          {/* Right: Explanatory Content & Macro Image */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 text-xs font-mono-tech uppercase tracking-[0.25em] text-[#F36C21]">
              <span className="w-6 h-[2px] bg-[#F36C21]" />
              <span>Elemental Foundation</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-heading font-black tracking-tight text-white uppercase leading-tight">
              The Refractory Backbone of Demanding Engineering.
            </h2>

            <p className="text-sm sm:text-base text-[#D9DDE0] leading-relaxed">
              Tungsten possesses the highest melting point of all known chemical elements (3422°C), extraordinarily low vapor pressure, and unmatched thermal creep resistance. When bonded with carbon to form hexagonal mono-tungsten carbide (WC), it yields the diamond-grade hardness required to machine tough aerospace titanium superalloys and bore through granite strata.
            </p>

            {/* Macro Tungsten Powder Visual with Measurement Callouts */}
            <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-[#111111] border border-[#2a2a2a] group">
              <Image
                src="/images/materials/wc-carbide-powder.jpg"
                alt="Macro microscopic view of high-purity Tungsten Powder particles"
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover object-center filter contrast-125 brightness-90 group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

              {/* Floating Orange Callout Lines */}
              <div className="absolute top-4 left-4 p-2 bg-black/85 border border-[#F36C21]/60 font-mono-tech text-[10px] text-white">
                <span>[ CALIBRATED ATTRITION // FSSS 1.25 µm ]</span>
              </div>
              <div className="absolute bottom-4 right-4 p-2 bg-black/85 border border-[#333333] font-mono-tech text-[10px] text-[#A7ADB2]">
                <span>HYDROGEN REDUCTION REFINING</span>
              </div>
            </div>

            {/* Core Advantages List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start space-x-3 text-xs text-[#D9DDE0]">
                <Flame className="w-4 h-4 text-[#F36C21] shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-bold block">Extreme Heat Stability</span>
                  <span>Zero softening under severe high-speed thermal load.</span>
                </div>
              </div>
              <div className="flex items-start space-x-3 text-xs text-[#D9DDE0]">
                <Scale className="w-4 h-4 text-[#F36C21] shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-bold block">Kinetic Inertia &amp; Mass</span>
                  <span>Maximum mass density in minimum aerodynamic volume.</span>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/products/tungsten-metal-powder-w"
                className="inline-flex items-center space-x-2 bg-[#F36C21] hover:bg-[#FF7A1A] text-[#080808] font-heading font-black text-xs uppercase px-6 py-3.5 tracking-wider transition-colors"
              >
                <span>Inspect Tungsten Powder Specs</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
