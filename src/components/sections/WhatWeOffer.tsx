import React from 'react';
import Link from 'next/link'; // Or 'react-router-dom' depending on your setup
import { ArrowRight } from 'lucide-react';

export default function WhatWeOffer() {
  return (
    <section 
      className="relative min-h-[500px] flex items-center justify-center bg-cover bg-center bg-no-repeat bg-fixed py-20 px-4 sm:px-6 lg:px-8"
      style={{ 
        backgroundImage: "url('images/materials/whatwe.jpg')" 
      }}
    >
      {/* Dark Overlay for Text Readability */}
      <div className="absolute inset-0 bg-[#0B2A4A]/50 backdrop-blur-[1px]" />

      {/* Centered Fluid Content Wrapper bounded to 7xl */}
      <div className="relative z-10 w-full max-w-7xl mx-auto text-center flex flex-col items-center">
        
        {/* Section Tagline */}
        <span className="text-xs sm:text-sm uppercase font-mono-tech tracking-[0.25em] text-[#EF6C23] font-bold mb-4 block">
          What We Offer
        </span>

        {/* Main Heading */}
        <h2 className="font-heading font-extrabold text-2xl sm:text-4xl lg:text-5xl text-white max-w-4xl leading-tight mb-6">
          Reliable Industrial Materials for a <br className="hidden sm:inline" /> Stronger Tomorrow
        </h2>

        {/* Body Paragraph */}
        <p className="text-sm sm:text-base text-white/85 max-w-3xl leading-relaxed mb-10 font-medium">
          We supply high-quality Steel Scrap, Tungsten, Tungsten Powder and other industrial 
          materials to support global industries and build a more sustainable future.
        </p>

        {/* Call to Action Button */}
        <Link
          href="/contact"
          className="inline-flex items-center space-x-2 bg-[#0B2A4A] hover:bg-[#0f355c] border border-[#EF6C23] text-white text-sm font-heading font-bold uppercase tracking-wider px-6 py-3 rounded transition-all shadow-md hover:shadow-lg active:scale-95 group"
        >
          <span>Contact Us</span>
          <ArrowRight className="w-4 h-4 text-[#EF6C23] transition-transform duration-300 group-hover:translate-x-1" />
        </Link>

      </div>
    </section>
  );
}