"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Product, MANDATORY_DISCLAIMER } from "@/data/products";
import { useModal } from "@/context/ModalContext";
import FinalCtaSection from "@/components/sections/FinalCtaSection";
import {
  ArrowRight,
  ShieldCheck,
  FileCheck2,
  Download,
  ChevronRight,
  CheckCircle2,
  Box,
} from "lucide-react";

interface ProductDetailClientProps {
  product: Product;
  relatedProducts: Product[];
}

export default function ProductDetailClient({
  product,
  relatedProducts,
}: ProductDetailClientProps) {
  const { openRfqModal, openDocModal } = useModal();

  return (
    <div className="w-full flex flex-col bg-[#EEF0F2] text-[#111111]">
      {/* Breadcrumb Header Strip */}
      <div className="py-4 bg-white border-b border-[#D5DAE0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center space-x-2 text-xs font-mono-tech text-[#596573]">
          <Link href="/" className="hover:text-[#0B2A4A]">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#B8BEC5]" />
          <Link href="/products" className="hover:text-[#0B2A4A]">
            Products
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#B8BEC5]" />
          <span className="text-[#EF6C23] font-bold truncate max-w-xs">{product.name}</span>
        </div>
      </div>

      {/* Split Product Hero Section */}
      <section className="py-12 sm:py-20 bg-white border-b border-[#D5DAE0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left: Product Visual */}
            <div className="lg:col-span-6 relative h-[380px] sm:h-[480px] bg-[#0B2A4A] border border-[#D5DAE0] rounded-xl overflow-hidden shadow-lg group">
              <Image
                src={product.imageUrl}
                alt={product.imageAlt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center filter contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2A4A]/80 via-transparent to-transparent pointer-events-none" />

              <div className="absolute top-4 left-4 flex items-center space-x-2">
                <span className="text-[10px] font-mono-tech uppercase tracking-wider px-2.5 py-1 bg-[#0B2A4A]/90 text-white rounded">
                  {product.category}
                </span>
                <span className="text-xs font-mono-tech font-bold text-[#EF6C23] bg-white px-2.5 py-1 rounded shadow-xs">
                  {product.chemicalFormula}
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 p-3 bg-white/95 rounded border-l-3 border-[#EF6C23] text-xs font-mono-tech text-[#111111]">
                <div className="font-bold text-[#0B2A4A]">{product.name}</div>
                <div className="text-[10px] text-[#596573]">Purity: {product.purity} &middot; Particle Size: {product.particleSize}</div>
              </div>
            </div>

            {/* Right: Technical Overview & CTAs */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <div className="text-xs font-mono-tech uppercase tracking-wider text-[#EF6C23] font-bold mb-2">
                  CERTIFIED SPECIFICATION
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-[#0B2A4A] leading-tight">
                  {product.name}
                </h1>
                <p className="mt-4 text-sm sm:text-base text-[#2B333B] leading-relaxed">
                  {product.productOverview || product.shortDescription}
                </p>
              </div>

              {/* Technical Specifications Highlights */}
              <div className="p-5 bg-[#EEF0F2] rounded-lg border border-[#D5DAE0] space-y-3 font-mono-tech text-xs">
                <div className="flex justify-between border-b border-[#D5DAE0] pb-2">
                  <span className="text-[#596573]">Chemical Purity:</span>
                  <span className="font-bold text-[#0B2A4A]">{product.purity}</span>
                </div>
                <div className="flex justify-between border-b border-[#D5DAE0] pb-2">
                  <span className="text-[#596573]">Particle Size / Granulometry:</span>
                  <span className="font-bold text-[#0B2A4A]">{product.particleSize}</span>
                </div>
                <div className="flex justify-between border-b border-[#D5DAE0] pb-2">
                  <span className="text-[#596573]">Physical Appearance:</span>
                  <span className="font-semibold text-[#111111]">{product.appearance}</span>
                </div>
                {product.density && (
                  <div className="flex justify-between border-b border-[#D5DAE0] pb-2">
                    <span className="text-[#596573]">Density:</span>
                    <span className="font-semibold text-[#111111]">{product.density}</span>
                  </div>
                )}
                {product.meltingPoint && (
                  <div className="flex justify-between">
                    <span className="text-[#596573]">Thermal Transition / Melting:</span>
                    <span className="font-semibold text-[#111111]">{product.meltingPoint}</span>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap gap-4">
                <button
                  onClick={() => openRfqModal(product.name)}
                  className="bg-[#EF6C23] hover:bg-[#d85e19] text-white px-7 py-3.5 rounded font-heading font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-[#EF6C23]/25"
                >
                  Request Quote for this Product
                </button>
                <button
                  onClick={() => openDocModal(product, "COA")}
                  className="border border-[#0B2A4A] hover:bg-[#0B2A4A] hover:text-white text-[#0B2A4A] px-5 py-3.5 rounded font-mono-tech text-xs uppercase tracking-wider transition-colors inline-flex items-center space-x-2"
                >
                  <FileCheck2 className="w-4 h-4" />
                  <span>Sample COA</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Characteristics & Applications Grid */}
      <section className="py-20 bg-[#EEF0F2] border-b border-[#D5DAE0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Key Characteristics */}
          <div className="bg-white p-8 rounded-xl border border-[#D5DAE0] shadow-xs space-y-4">
            <h3 className="text-xl font-heading font-black text-[#0B2A4A]">
              Key Chemical &amp; Physical Characteristics
            </h3>
            <ul className="space-y-3">
              {product.keyCharacteristics.map((char, idx) => (
                <li key={idx} className="flex items-start space-x-3 text-xs sm:text-sm text-[#2B333B]">
                  <CheckCircle2 className="w-4 h-4 text-[#EF6C23] shrink-0 mt-0.5" />
                  <span>{char}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Typical Applications */}
          <div className="bg-white p-8 rounded-xl border border-[#D5DAE0] shadow-xs space-y-4">
            <h3 className="text-xl font-heading font-black text-[#0B2A4A]">
              Industrial Applications &amp; Uses
            </h3>
            <ul className="space-y-3">
              {product.typicalApplications.map((app, idx) => (
                <li key={idx} className="flex items-start space-x-3 text-xs sm:text-sm text-[#2B333B]">
                  <Box className="w-4 h-4 text-[#145B8C] shrink-0 mt-0.5" />
                  <span>{app}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Mandatory Regulatory Notice */}
      <div className="py-6 bg-white border-b border-[#D5DAE0] text-center px-4">
        <p className="max-w-4xl mx-auto text-[11px] font-mono-tech text-[#596573]">
          {MANDATORY_DISCLAIMER}
        </p>
      </div>

      {/* Final CTA */}
      <FinalCtaSection />
    </div>
  );
}
