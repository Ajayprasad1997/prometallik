"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { productsCatalogue } from "@/data/products";
import { siteConfig } from "@/data/site-config";
import ProductFlipCard from "@/components/products/ProductFlipCard";
import { ArrowRight, ChevronLeft, ChevronRight, Layers, SlidersHorizontal } from "lucide-react";

export default function HorizontalProductJourney() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const filteredProducts =
    selectedCategory === "all"
      ? productsCatalogue
      : productsCatalogue.filter((p) => p.categorySlug === selectedCategory);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -420 : 420;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full py-24 sm:py-32 bg-[#0c0c0c] text-white border-b border-[#222222] overflow-hidden">
      {/* Background Giant Chemical Formulas */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden opacity-5 flex items-center justify-between text-white font-mono-tech text-[14vw] font-black leading-none">
        <span className="translate-y-8">W</span>
        <span className="-translate-y-12">WC</span>
        <span className="translate-y-16">WO₃</span>
        <span className="-translate-y-6">Co</span>
        <span className="translate-y-4">Mg</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-[#222222]">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono-tech uppercase tracking-[0.25em] text-[#F36C21] mb-2">
              <span className="w-6 h-[2px] bg-[#F36C21]" />
              <span>Interactive Material Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-heading font-black tracking-tight text-white uppercase">
              Advanced Materials. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F36C21] to-[#D9DDE0]">
                Precise Possibilities.
              </span>
            </h2>
          </div>

          <div className="mt-4 md:mt-0 flex items-center space-x-3">
            <span className="text-xs font-mono-tech text-[#A7ADB2] hidden sm:inline">
              12 Engineered Compounds
            </span>
            <Link
              href="/products"
              className="text-xs font-heading font-bold uppercase tracking-wider text-[#F36C21] hover:underline flex items-center"
            >
              <span>Explore Complete Catalogue</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </Link>
          </div>
        </div>

        {/* Category Filters Bar */}
        <div className="flex items-center justify-between gap-3 mb-8 overflow-x-auto pb-2 no-scrollbar">
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-4 py-2 text-xs font-mono-tech uppercase tracking-wider transition-colors border ${
                selectedCategory === "all"
                  ? "bg-[#F36C21] text-[#080808] border-[#FF7A1A] font-bold"
                  : "bg-[#141414] text-[#A7ADB2] border-[#262626] hover:text-white hover:border-[#444444]"
              }`}
            >
              All Materials ({productsCatalogue.length})
            </button>
            {siteConfig.productCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.slug)}
                className={`px-3.5 py-2 text-xs font-mono-tech uppercase tracking-wider transition-colors border whitespace-nowrap ${
                  selectedCategory === cat.slug
                    ? "bg-[#F36C21] text-[#080808] border-[#FF7A1A] font-bold"
                    : "bg-[#141414] text-[#A7ADB2] border-[#262626] hover:text-white hover:border-[#444444]"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Scroll arrow buttons for desktop */}
          <div className="hidden lg:flex items-center space-x-2 shrink-0">
            <button
              onClick={() => scroll("left")}
              className="p-2.5 bg-[#141414] hover:bg-[#202020] border border-[#2b2b2b] text-white transition-colors"
              aria-label="Scroll products left"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-2.5 bg-[#141414] hover:bg-[#202020] border border-[#2b2b2b] text-white transition-colors"
              aria-label="Scroll products right"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Horizontal Scrolling Product Container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-6 pt-2 scroll-smooth no-scrollbar snap-x snap-mandatory"
        >
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="min-w-[300px] sm:min-w-[340px] md:min-w-[360px] max-w-[380px] shrink-0 snap-start"
            >
              <ProductFlipCard product={product} />
            </div>
          ))}
        </div>

        {/* Footer tip */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between text-xs font-mono-tech text-[#A7ADB2] pt-4 border-t border-[#1c1c1c]">
          <div className="flex items-center space-x-2 mb-2 sm:mb-0">
            <span className="w-2 h-2 rounded-full bg-[#F36C21]" />
            <span>Interactive 3D Cards: Hover or tap to flip for technical specifications.</span>
          </div>
          <Link
            href="/products"
            className="text-white hover:text-[#F36C21] uppercase tracking-wider flex items-center font-bold"
          >
            <span>Compare Specifications Table</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
