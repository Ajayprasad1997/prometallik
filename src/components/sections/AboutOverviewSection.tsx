"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { siteContent } from "@/data/siteContent";
import AnimatedCounter from "@/components/AnimatedCounter";
import { ArrowRight, CheckCircle2, ShieldAlert, Sparkles, Building2 } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutOverviewSection() {
  return (
    <section className="relative w-full bg-[#EEF0F2] text-[#111111] py-24 sm:py-32 overflow-hidden border-b border-[#D5DAE0]">
      {/* Subtle industrial grid in light metallic context */}
      <div className="absolute inset-0 bg-industrial-grid-light opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column (Editorial Typography & Statement) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center space-x-2.5 text-xs font-mono-tech uppercase tracking-[0.25em] text-[#0B2A4A]" data-aos="fade-up">
              <span className="w-6 h-[2px] bg-[#EF6C23]" />
              <span>{siteContent.about.eyebrow}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-black tracking-tight text-[#0B2A4A] leading-[1.04]" data-aos="fade-up">
              {siteContent.about.headline}
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#2B333B] leading-relaxed max-w-2xl font-normal" data-aos="fade-up">
              <p>{siteContent.about.description}</p>
              <p className="font-medium text-[#111111]">
                Engineered in India for international industrial buyers, PROMETALLIK combines rigorous chemical extraction, continuous reduction furnaces, and accredited quality verification to meet exacting DIN and ASTM tolerances.
              </p>
            </div>

            {/* Clearly Marked Statistics Placeholders */}
           

<div
  className="pt-6 border-t border-[#D5DAE0] grid grid-cols-2 sm:grid-cols-4 gap-4"
  data-aos="fade-up"
>
  {siteContent.about.statsPlaceholders.map((stat, idx) => (
    <div
      key={idx}
      className="bg-white p-3.5 border border-[#D5DAE0] rounded shadow-xs space-y-1 relative group hover:border-[#EF6C23] transition-colors"
    >
      <div className="flex items-center justify-between text-[10px] font-mono-tech uppercase text-[#145B8C]">
        <span>{stat.unit}</span>
        <span className="w-1.5 h-1.5 rounded-full bg-[#F5B400]" />
      </div>

      <div className="text-[25px] font-heading font-extrabold text-[#0B2A4A]">
        {typeof stat.countTo === "number" ? (
          <>
            <AnimatedCounter target={stat.countTo} />+
          </>
        ) : (
          stat.placeholderValue
        )}
      </div>

      <div className="text-[11px] font-semibold text-[#111111]">
        {stat.label}
      </div>

      <div className="text-[9px] font-mono-tech text-[#EF6C23] uppercase tracking-wider pt-0.5 border-t border-[#EEF0F2]">
        {stat.statusText}
      </div>
    </div>
  ))}
</div>



            {/* CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href="/about"
                className="bg-[#0B2A4A] hover:bg-[#145B8C] text-white font-heading font-bold text-xs uppercase px-7 py-3.5 tracking-wider transition-colors inline-flex items-center group rounded shadow-sm"
              >
                <span>Read Full Company Profile</span>
                <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1 text-[#EF6C23]" />
              </Link>
              <Link
                href="/manufacturing"
                className="border border-[#0B2A4A] hover:bg-[#0B2A4A] hover:text-white text-[#0B2A4A] font-mono-tech text-xs uppercase px-6 py-3.5 tracking-wider transition-colors inline-flex items-center rounded"
              >
                Plant Architecture &rarr;
              </Link>
            </div>
          </div>

          {/* Right Column: Prominent User-Provided Featured Image */}
          <div className="lg:col-span-5 relative" data-aos="fade-left">
            {/* Orange architectural framing line */}
            <div className="absolute -top-3 -left-3 -bottom-3 w-1.5 bg-[#EF6C23] hidden sm:block z-20 rounded-l" />
            <div className="absolute -top-3 -left-3 -right-3 h-1.5 bg-[#EF6C23] hidden sm:block z-20 rounded-t" />

            <div className="relative w-full h-[480px] sm:h-[560px] overflow-hidden rounded bg-[#0B2A4A] shadow-xl border border-[#D5DAE0]">
              <Image
                src={siteContent.about.featuredClientImage.src}
                alt={siteContent.about.featuredClientImage.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover object-center filter contrast-110 brightness-95 transition-transform duration-1000 hover:scale-105"
              />

              {/* Gradient overlay for label readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2A4A]/95 via-transparent to-black/30 pointer-events-none" />

              {/* Technical Marker & Asset Label */}
              <div className="absolute top-4 right-4 px-3 py-1 bg-[#0B2A4A]/90 border border-white/20 backdrop-blur-md text-[10px] font-mono-tech uppercase text-[#F5B400] rounded">
                FEATURED CLIENT ASSET
              </div>

              {/* Technical Badge in Bottom Corner */}
              <div className="absolute bottom-5 left-5 right-5 p-4 bg-[#FFFFFF]/95 border-l-4 border-[#EF6C23] backdrop-blur-md text-[#111111] font-mono-tech text-xs space-y-1 rounded shadow-lg">
                <div className="flex items-center justify-between text-[#0B2A4A] text-[10px] uppercase tracking-wider font-bold">
                  <span>PROMETALLIK OPERATIONS</span>
                  <span className="text-[#EF6C23]">ASSET: featured-client-image.webp</span>
                </div>
                <div className="text-[#0B2A4A] font-heading font-bold text-sm">
                  {siteContent.about.featuredClientImage.caption}
                </div>
                <div className="text-[10px] text-[#596573]">
                  Controlled atmospheric synthesis and analytical assay verification.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
