"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { productsCatalogue, Product } from "@/data/products";
import ProductExplorerSection from "@/components/sections/ProductExplorerSection";
import FinalCtaSection from "@/components/sections/FinalCtaSection";
import { Search, X, Download, FileText, CheckCircle2 } from "lucide-react";

export default function ProductsPage() {
  return (
    <div className="w-full flex flex-col bg-[#EEF0F2] text-[#111111] pt-28">
      {/* Product Catalog Hero */}
      <section className="relative w-full py-20 bg-[#0B2A4A] text-white overflow-hidden border-b border-[#145B8C]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/images/products/apt-crystals.jpg"
            alt="PROMETALLIK advanced products and chemical intermediates"
            fill
            priority
            className="object-cover object-center filter contrast-125 brightness-[0.35]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B2A4A] via-[#0B2A4A]/80 to-transparent" />
          <div className="absolute inset-0 bg-industrial-grid-dark opacity-20 pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 text-xs font-mono-tech uppercase tracking-[0.25em] text-[#F5B400] mb-4">
              <span className="w-6 h-[2px] bg-[#EF6C23]" />
              <span>Engineered Chemical &amp; Powder Catalogue</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-heading font-black tracking-tight text-white leading-tight">
              Advanced Materials &amp; Precision Powders
            </h1>
            <p className="mt-6 text-base sm:text-lg text-[#B8BEC5] leading-relaxed">
              Refractory tungsten intermediates, classified metal powders, hardmetal carbides, and chemical compounds engineered in India for high-performance industrial metallurgy.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Product Explorer with Product Zoom (Prompt Section 5) */}
      <ProductExplorerSection />

      {/* Technical Download & Standards Strip */}
      <section className="py-16 bg-white border-b border-[#D5DAE0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-heading font-black text-[#0B2A4A]">
              Need Full Chemical Assays &amp; Impurity Ceilings?
            </h3>
            <p className="text-xs text-[#596573] mt-1 font-mono-tech">
              Download the complete 2026/2027 Engineering Material Specifications Compendium
            </p>
          </div>

          <a
            href="/assets/pdfs/product-catalogue.pdf"
            onClick={(e) => {
              e.preventDefault();
              alert("Product Catalogue (PDF): Document will be available shortly upon client upload.");
            }}
            className="px-6 py-3 bg-[#0B2A4A] hover:bg-[#145B8C] text-white text-xs font-heading font-bold uppercase tracking-wider rounded inline-flex items-center space-x-2 transition-colors shadow-xs"
          >
            <Download className="w-4 h-4 text-[#EF6C23]" />
            <span>Download Product Catalogue</span>
          </a>
        </div>
      </section>

      {/* Final CTA */}
      <FinalCtaSection />
    </div>
  );
}
