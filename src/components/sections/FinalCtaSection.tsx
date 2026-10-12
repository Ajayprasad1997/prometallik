"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteContent } from "@/data/siteContent";
import { useModal } from "@/context/ModalContext";
import { ArrowRight, Download } from "lucide-react";
import { motion, useMotionValue } from "framer-motion";

// Certification badges dataset extracted from user image
const certificationBadges = [
  { id: "make-in-india-1", src: "/assets/images/make-in-india.png", alt: "Make in India Certified" },
  { id: "recycle-1", src: "/assets/images/recycle-globe.png", alt: "Recyclable Material Standard" },
  { id: "eco-friendly-1", src: "/assets/images/eco-green.png", alt: "Eco-Friendly Production Lifecycle" },
  { id: "iso-1", src: "/assets/images/iso-9001.png", alt: "ISO 9001:2015 Quality Management Certified" },
  { id: "msme-1", src: "/assets/images/msme-india.png", alt: "MSME Registered Enterprise" },
];

// Duplicate items to ensure a seamless, non-breaking infinite marquee crawl loop
const continuousBadgesList = [...certificationBadges, ...certificationBadges, ...certificationBadges];

export default function FinalCtaSection() {
  const { openRfqModal } = useModal();
  const [isHovered, setIsHovered] = useState(false);
  const baseX = useMotionValue(0);

  return (
    <section className="relative w-full py-24 sm:py-32 bg-[#0B2A4A] text-white border-b border-[#145B8C] overflow-hidden">
      {/* Background Media & Gradients */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/images/products/blast-furnace-molten.jpg"
          alt="Refined molten metallurgy to precision engineered material"
          fill
          sizes="100vw"
          className="object-cover object-center filter contrast-125 brightness-35"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B2A4A]/95 via-[#0B2A4A]/85 to-[#0B2A4A]/90" />
        <div className="absolute inset-0 bg-industrial-grid-dark opacity-20 pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
        {/* Technical Sub-Tag */}
        <div className="inline-flex items-center space-x-2 text-xs font-mono-tech uppercase tracking-[0.25em] text-[#F5B400] mb-6 px-3.5 py-1.5 bg-[#071C33]/90 border border-[#EF6C23] backdrop-blur-md rounded" data-aos="fade-up">
          <span className="w-2 h-2 rounded-full bg-[#EF6C23] animate-ping" />
          <span>GLOBAL PARTNERSHIP</span>
        </div>

        {/* Master Headline (Exact Prompt Copy) */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-heading font-black tracking-tight text-white max-w-4xl leading-none" data-aos="fade-up">
          {siteContent.finalCta.headline}
        </h2>

        {/* Supporting Text */}
        <p className="mt-6 text-sm sm:text-base md:text-lg text-[#B8BEC5] max-w-2xl font-sans leading-relaxed" data-aos="fade-up">
          Share your product, quantity and technical requirements with our team.
        </p>

        {/* The 3 Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          {/* Button 1: Request a Quote */}
          <button
            onClick={() => openRfqModal()}
            className="bg-[#EF6C23] hover:bg-[#d85e19] text-white font-heading font-bold text-xs sm:text-sm uppercase px-8 py-4 tracking-wider transition-all duration-200 shadow-lg shadow-[#EF6C23]/30 rounded flex items-center cursor-pointer active:scale-95"
          data-aos="fade-up">
            <span>Request a Quote</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>

          {/* Button 2: Contact Our Team */}
          <Link
            href="/contact"
            className="bg-white/10 hover:bg-white/20 text-white border border-white/40 hover:border-white font-heading font-bold text-xs sm:text-sm uppercase px-7 py-4 tracking-wider transition-all duration-200 rounded backdrop-blur-xs"
          data-aos="fade-up">
            Contact Our Team
          </Link>

          {/* Button 3: Download Catalogue */}
          <a
            href="#technical-resources"
            className="bg-transparent hover:bg-[#EF6C23]/20 text-[#F5B400] hover:text-white border border-[#F5B400]/50 hover:border-[#F5B400] font-mono-tech text-xs uppercase px-6 py-4 tracking-wider transition-all duration-200 rounded flex items-center space-x-2"
          data-aos="fade-up">
            <Download className="w-3.5 h-3.5 text-[#EF6C23]" />
            <span>Download Catalogue</span>
          </a>
        </div>

        {/* Testimonial & Verification Badges Marquee Carousel */}
        <div className="mt-20 w-full relative max-w-5xl">
          <div className="text-center mb-6">
            <span className="text-[10px] tracking-[0.3em] font-mono-tech uppercase text-gray-400">
              Accredited Certifications & Compliance standards
            </span>
          </div>

          {/* Gradient masking for soft edges on the carousel */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#0B2A4A] to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#0B2A4A] to-transparent z-20 pointer-events-none" />

          {/* Carousel Track container with Hover events */}
          <div 
            className="w-full overflow-hidden py-4 bg-white/5 border border-white/10 rounded-xl backdrop-blur-xs flex items-center"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <motion.div
              className="flex space-x-12 px-6 flex-shrink-0"
              style={{ x: baseX }}
              animate={isHovered ? {} : { x: ["0%", "-33.33%"] }}
              transition={{
                ease: "linear",
                duration: 25,
                repeat: Infinity,
              }}
            >
              {continuousBadgesList.map((badge, idx) => (
                <div
                  key={`${badge.id}-${idx}`}
                  className="w-32 h-14 relative flex-shrink-0 flex items-center justify-center bg-white p-2 rounded-lg shadow-sm border border-white/20 transition-transform duration-200 hover:scale-105"
                >
                  <Image
                    src={badge.src}
                    alt={badge.alt}
                    fill
                    sizes="128px"
                    className="object-contain p-1 filter drop-shadow-xs"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
