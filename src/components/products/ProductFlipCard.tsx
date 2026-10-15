"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/data/products";
import { useModal } from "@/context/ModalContext";
import { RotateCw, ArrowRight, ShieldCheck, FileText } from "lucide-react";

interface ProductFlipCardProps {
  product: Product;
  priority?: boolean;
}

export default function ProductFlipCard({ product, priority = false }: ProductFlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const { openRfqModal, openDocModal } = useModal();

  const handleCardClick = (e: React.MouseEvent) => {
    // If user clicks a button or link, don't trigger flip
    const target = e.target as HTMLElement;
    if (target.closest("button") || target.closest("a")) {
      return;
    }
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className="perspective-1000 w-full h-[470px] cursor-pointer group select-none overflow-hidden"
      onClick={handleCardClick}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className={`relative w-full h-full duration-700 preserve-3d transition-transform ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        {/* ================= FRONT SIDE ================= */}
        <div className="absolute inset-0 backface-hidden bg-[#111111] border border-[#262626] group-hover:border-[#F36C21]/60 flex flex-col justify-between overflow-hidden shadow-xl transition-colors duration-300">
          {/* Top Image Container with Realistic Industrial Photography */}
          <div className="relative w-full h-[270px] overflow-hidden bg-black">
            <Image
              src={product.imageUrl}
              alt={product.imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={priority}
              className="object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-95 contrast-110"
            />
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-black/40" />

            {/* Category Badge & Formula Overlay */}
            <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
              <span className="text-[10px] font-mono-tech tracking-wider uppercase px-2 py-1 bg-black/80 border border-[#333333] text-[#A7ADB2] backdrop-blur-sm">
                {product.category}
              </span>
              <span className="text-xs font-mono-tech font-bold text-[#F36C21] bg-black/90 px-2.5 py-1 border border-[#F36C21]/50 backdrop-blur-sm">
                {product.chemicalFormula}
              </span>
            </div>

            {/* Flip Affordance Hint */}
            <div className="absolute bottom-3 right-3 flex items-center space-x-1.5 text-[10px] font-mono-tech uppercase tracking-widest text-white/80 bg-black/70 px-2 py-1 border border-white/20">
              <RotateCw className="w-3 h-3 text-[#F36C21] animate-spin" style={{ animationDuration: "6s" }} />
              <span>Flip for Specs</span>
            </div>
          </div>

          {/* Bottom Card Content */}
          <div className="p-5 flex-1 flex flex-col justify-between bg-[#111111]">
            <div>
              <div className="flex items-center space-x-2 text-[10px] font-mono-tech text-[#A7ADB2] mb-1">
                <span>Purity: {product.purity}</span>
                <span>&middot;</span>
                <span>{product.particleSize}</span>
              </div>
              <h3 className="text-lg font-heading font-extrabold text-white group-hover:text-[#F36C21] transition-colors leading-snug">
                {product.name}
              </h3>
            </div>

            <div className="pt-3 border-t border-[#222222] flex items-center justify-between text-xs font-mono-tech text-[#A7ADB2]">
              <span className="text-[11px] uppercase tracking-wider text-[#D9DDE0]">
                {product.appearance.slice(0, 32)}...
              </span>
              <span className="text-[#F36C21] text-[11px] font-bold flex items-center">
                <span>Details</span>
                <ArrowRight className="w-3 h-3 ml-1" />
              </span>
            </div>
          </div>
        </div>

        {/* ================= BACK SIDE ================= */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 bg-[#0c0c0c] border border-[#F36C21] p-5 flex flex-col justify-between shadow-2xl overflow-hidden">
          {/* Subtle grid texture */}
          <div className="absolute inset-0 bg-industrial-grid opacity-30 pointer-events-none" />

          <div className="relative z-10 space-y-3">
            {/* Header info */}
            <div className="flex items-start justify-between border-b border-[#222222] pb-3">
              <div>
                <span className="text-[10px] font-mono-tech uppercase tracking-widest text-[#F36C21]">
                  Technical Specification Profile
                </span>
                <h4 className="text-base font-heading font-extrabold text-white leading-tight mt-0.5">
                  {product.name}
                </h4>
              </div>
              <span className="text-xs font-mono-tech font-bold text-[#FF7A1A] bg-black/60 px-2 py-0.5 border border-[#333333]">
                {product.chemicalFormula}
              </span>
            </div>

            {/* Description */}
            <p className="text-xs text-[#D9DDE0] leading-relaxed line-clamp-2">
              {product.shortDescription}
            </p>

            {/* Key Properties Grid */}
            <div className="grid grid-cols-2 gap-2 p-2.5 bg-[#141414] border border-[#222222] font-mono-tech text-[10px]">
              <div>
                <span className="text-[#A7ADB2] block uppercase text-[9px]">Purity Assay</span>
                <span className="text-white font-bold">{product.purity}</span>
              </div>
              <div>
                <span className="text-[#A7ADB2] block uppercase text-[9px]">Grain / Sieve</span>
                <span className="text-white font-bold truncate block">{product.particleSize}</span>
              </div>
              <div>
                <span className="text-[#A7ADB2] block uppercase text-[9px]">Standard Pack</span>
                <span className="text-[#D9DDE0] truncate block">{product.packaging[0]?.slice(0, 20)}</span>
              </div>
              <div>
                <span className="text-[#A7ADB2] block uppercase text-[9px]">QMS Protocol</span>
                <span className="text-emerald-400 font-bold">DIN EN ISO 9001</span>
              </div>
            </div>

            {/* Typical Applications preview */}
            <div>
              <span className="text-[10px] font-mono-tech uppercase tracking-wider text-[#A7ADB2] block mb-1">
                Typical Applications:
              </span>
              <ul className="space-y-0.5 text-[11px] text-[#A7ADB2]">
                {product.typicalApplications.slice(0, 2).map((app, idx) => (
                  <li key={idx} className="flex items-center">
                    <span className="w-1 h-1 bg-[#F36C21] mr-1.5" />
                    <span className="line-clamp-1">{app}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Back CTAs */}
          <div className="relative z-10 pt-3 border-t border-[#222222] space-y-2">
            <div className="flex items-center space-x-2">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  openDocModal(product, "COA");
                }}
                className="flex-1 py-1.5 px-2 bg-[#1a1a1a] hover:bg-[#252525] border border-[#333333] text-[10px] font-mono-tech text-[#D9DDE0] hover:text-white flex items-center justify-center space-x-1"
              >
                <FileText className="w-3 h-3 text-[#F36C21]" />
                <span>Sample COA</span>
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  openDocModal(product, "SDS");
                }}
                className="flex-1 py-1.5 px-2 bg-[#1a1a1a] hover:bg-[#252525] border border-[#333333] text-[10px] font-mono-tech text-[#D9DDE0] hover:text-white flex items-center justify-center space-x-1"
              >
                <ShieldCheck className="w-3 h-3 text-[#F36C21]" />
                <span>Sample SDS</span>
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <Link
                href={`/products/${product.slug}`}
                onClick={(e) => e.stopPropagation()}
                className="py-2.5 px-2 bg-transparent border border-white/40 hover:border-white text-white font-mono-tech text-xs uppercase tracking-wider text-center transition-colors"
              >
                Specs &rarr;
              </Link>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  openRfqModal(product.id);
                }}
                className="py-2.5 px-2 bg-[#F36C21] hover:bg-[#FF7A1A] text-[#080808] font-heading font-black text-xs uppercase tracking-wider text-center transition-colors shadow-md"
              >
                Request Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
