import React from "react";
import Image from "next/image";
import Link from "next/link";
import { siteContent } from "@/data/siteContent";
import { ArrowRight, ShieldCheck, Factory, Award, Target, Eye, Globe2, CheckCircle2 } from "lucide-react";
import FinalCtaSection from "@/components/sections/FinalCtaSection";
import AnimatedCounter from "@/components/AnimatedCounter";

export const metadata = {
  title: "About Us — PROMETALLIK | Indian Advanced Metals & Refractory Metallurgy",
  description:
    "PROMETALLIK is an Indian industrial enterprise delivering high-purity refractory metals, tungsten intermediates, and precision engineered powders for global buyers.",
};

export default function AboutPage() {
  const values = [
    {
      title: "Technical Veracity & Empirical Assays",
      description: "We communicate only empirical chemical assays and verified physical granulometry. No ambiguous marketing tolerances.",
    },
    {
      title: "Stoichiometric Discipline",
      description: "Refractory performance demands exact molecular ratios. From carbon balance in WC to oxygen vacancy control in WO₃.",
    },
    {
      title: "Circular Metallurgy & Recycling",
      description: "Closed-loop hydrometallurgical recovery of tungsten and secondary metal scraps, reducing raw mineral dependency.",
    },
    {
      title: "Global Business Readiness",
      description: "Supplying international manufacturing hubs with reliable export logistics, REACH compliance documentation, and responsive technical service.",
    },
  ];

  return (
    <div className="w-full flex flex-col bg-[#EEF0F2] text-[#111111]">
      {/* Page Hero */}
      <section className="relative w-full py-20 bg-[#0B2A4A] text-white overflow-hidden border-b border-[#145B8C]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/images/products/blast-furnace-molten.jpg"
            alt="PROMETALLIK industrial manufacturing facility"
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
              <span>Corporate Manifesto &amp; Indian Heritage</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-heading font-black tracking-tight text-white leading-tight" data-aos="fade-right">
              Building Value Through Advanced Metal Solutions
            </h1>
            <p className="mt-6 text-base sm:text-lg text-[#B8BEC5] leading-relaxed" data-aos="fade-right">
              PROMETALLIK is an Indian industrial enterprise dedicated to high-purity refractory metallurgy, specialized chemical intermediates, and precision engineered powders for global industries.
            </p>
          </div>
        </div>
      </section>

      {/* Corporate Overview & Featured Client Image */}
      <section className="py-24 bg-[#FFFFFF] text-[#111111] border-b border-[#D5DAE0] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="text-xs font-mono-tech uppercase tracking-[0.25em] text-[#EF6C23] font-bold" data-aos="fade-up">
                About PROMETALLIK
              </div>
              <h2 className="text-3xl sm:text-5xl font-heading font-black tracking-tight text-[#0B2A4A] leading-tight" data-aos="fade-up">
                Engineering Integrity from India to Global Markets
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-[#2B333B] leading-relaxed" data-aos="fade-up">
                <p>
                  Industrial machining, aerospace tooling, and wear-resistant applications demand materials of extraordinary consistency. Trace alkali contamination or wide particle size variations can compromise cutting edge stability and structural integrity.
                </p>
                <p className="font-semibold text-[#111111]">
                  PROMETALLIK bridges the gap between raw mineral ores and extreme industrial performance. Combining hydrometallurgical extraction with hydrogen reduction furnaces and laser particle qualification, we serve international buyers with dependable precision.
                </p>
              </div>

              {/* Statistics Placeholders */}
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
            </div>

            {/* Right Column: Prominent User-Provided Featured Image */}
            <div className="lg:col-span-5 relative overflow-hidden" data-aos="fade-left">
              <div className="relative w-full h-[450px] sm:h-[520px] rounded-xl overflow-hidden bg-[#0B2A4A] shadow-xl border border-[#D5DAE0]">
                <Image
                  src={siteContent.about.featuredClientImage.src}
                  alt={siteContent.about.featuredClientImage.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover object-center filter contrast-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2A4A]/90 via-transparent to-transparent pointer-events-none" />

                <div className="absolute top-4 right-4 px-3 py-1 bg-[#0B2A4A]/90 border border-[#EF6C23] text-[10px] font-mono-tech uppercase text-[#F5B400] rounded">
                  OFFICIAL CLIENT ASSET
                </div>

                <div className="absolute bottom-5 left-5 right-5 p-4 bg-white/95 border-l-4 border-[#EF6C23] rounded shadow-md text-xs font-mono-tech text-[#111111]">
                  <div className="text-[#0B2A4A] font-heading font-black text-sm">
                    {siteContent.about.featuredClientImage.caption}
                  </div>
                  <div className="text-[10px] text-[#596573]">
                    Asset Path: /assets/images/user-provided/featured-client-image.webp
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Operational Values */}
      <section className="py-24 bg-[#EEF0F2] border-b border-[#D5DAE0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono-tech uppercase tracking-wider text-[#EF6C23] font-bold" data-aos="fade-up">
              Guiding Principles
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-black text-[#0B2A4A] mt-2" data-aos="fade-up">
              Our Core Operating Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div key={i} className="bg-white p-6 rounded-lg border border-[#D5DAE0] space-y-3 hover:border-[#EF6C23] transition-colors shadow-xs" data-aos="fade-up">
                <div className="w-8 h-8 rounded bg-[#0B2A4A] text-white flex items-center justify-center font-mono-tech text-xs font-bold">
                  0{i + 1}
                </div>
                <h3 className="text-base font-heading font-black text-[#0B2A4A]">{v.title}</h3>
                <p className="text-xs text-[#2B333B] leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <FinalCtaSection />
    </div>
  );
}
