"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { productsCatalogue, Product } from "@/data/products";
import { useModal } from "@/context/ModalContext";
import { ArrowRight, ZoomIn, X, ChevronLeft, ChevronRight, FileText, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ProductExplorerSection() {
  const { openRfqModal } = useModal();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeModalProduct, setActiveModalProduct] = useState<Product | null>(null);

  // Categories
  const categories = [
    { id: "all", label: "All 12 Products" },
    { id: "tungsten-intermediates", label: "Tungsten Intermediates" },
    { id: "tungsten-powders", label: "Tungsten & Carbide Powders" },
    { id: "cobalt-chemicals", label: "Cobalt Compounds" },
    { id: "magnesium-materials", label: "Magnesium Materials" },
  ];

  const filteredProducts = selectedCategory === "all"
    ? productsCatalogue
    : productsCatalogue.filter((p) => p.categorySlug === selectedCategory);

  const handleOpenViewer = (product: Product) => {
    setActiveModalProduct(product);
  };

  const handleNextProduct = () => {
    if (!activeModalProduct) return;
    const currentIndex = productsCatalogue.findIndex((p) => p.id === activeModalProduct.id);
    const nextIndex = (currentIndex + 1) % productsCatalogue.length;
    setActiveModalProduct(productsCatalogue[nextIndex]);
  };

  const handlePrevProduct = () => {
    if (!activeModalProduct) return;
    const currentIndex = productsCatalogue.findIndex((p) => p.id === activeModalProduct.id);
    const prevIndex = (currentIndex - 1 + productsCatalogue.length) % productsCatalogue.length;
    setActiveModalProduct(productsCatalogue[prevIndex]);
  };

  return (
    <section className="relative w-full bg-[#EEF0F2] text-[#111111] py-24 sm:py-32 overflow-hidden border-b border-[#D5DAE0]" id="product-explorer">
      {/* Background Subtle Industrial Grid */}
      <div className="absolute inset-0 bg-industrial-grid-light opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#D5DAE0]">
          <div>
            <div className="inline-flex items-center space-x-2 text-xs font-mono-tech uppercase tracking-[0.25em] text-[#0B2A4A] mb-3" data-aos="fade-up">
              <span className="w-5 h-[2px] bg-[#EF6C23]" />
              <span>PRODUCT EXPLORER</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-heading font-black tracking-tight text-[#0B2A4A] leading-[1.05]" data-aos="fade-up">
              Engineered Metal Solutions &amp; Compounds
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-xs sm:text-sm text-[#2B333B] max-w-md font-sans" data-aos="fade-up">
            Explore 12 certified formulations engineered for extreme refractory, cutting tool, aerospace, and synthesis requirements.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-6 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded text-xs font-mono-tech uppercase tracking-wider transition-all duration-200 shrink-0 ${
                selectedCategory === cat.id
                  ? "bg-[#0B2A4A] text-white font-bold shadow-sm"
                  : "bg-white text-[#2B333B] hover:bg-[#D5DAE0] border border-[#D5DAE0]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCardWithZoom
              key={product.id}
              product={product}
              onOpenViewer={() => handleOpenViewer(product)}
              onRequestQuote={() => openRfqModal(product.name)}
            />
          ))}
        </div>
      </div>

      {/* =========================================================================
          LARGER PRODUCT VIEWER MODAL WITH ZOOM & SPECIFICATIONS
          ========================================================================= */}
            {/* Product Viewer Modal - Stagger Animation */}
      

<AnimatePresence mode="wait">
  {activeModalProduct && (
    <motion.div
      key="product-modal-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md"
      onClick={() => setActiveModalProduct(null)}
    >
      {/* Modal Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.97, y: 12 }}
        transition={{
          duration: 0.35,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-xl border border-[#D5DAE0] bg-white p-6 text-[#111111] shadow-2xl sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={() => setActiveModalProduct(null)}
          className="absolute right-4 top-4 z-20 rounded-full p-2 text-[#596573] transition-colors hover:bg-[#EEF0F2] hover:text-[#111111]"
          aria-label="Close product viewer"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Previous / Next Navigation */}
        <div className="absolute right-16 top-4 z-20 flex items-center space-x-1">
          <button
            type="button"
            onClick={handlePrevProduct}
            className="rounded p-2 text-[#596573] hover:bg-[#EEF0F2] hover:text-[#111111]"
            aria-label="Previous product"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          <button
            type="button"
            onClick={handleNextProduct}
            className="rounded p-2 text-[#596573] hover:bg-[#EEF0F2] hover:text-[#111111]"
            aria-label="Next product"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        {/* Modal Content - AOS Fade Up */}
        <div
          key={activeModalProduct.slug}
          className="grid grid-cols-1 items-start gap-8 pt-6 md:grid-cols-2"
        >
          {/* Product Image */}
          <div
            data-aos="fade-up"
            data-aos-delay="0"
            className="group relative h-[320px] w-full overflow-hidden rounded-lg border border-[#D5DAE0] bg-[#0B2A4A] sm:h-[400px]"
          >
            <Image
              src={activeModalProduct.imageUrl}
              alt={activeModalProduct.imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover contrast-105 transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute bottom-3 left-3 rounded bg-black/75 px-2.5 py-1 font-mono-tech text-[10px] text-white">
              HIGH-RESOLUTION METALLURGICAL ASSAY
            </div>
          </div>

          {/* Technical Details */}
          <div className="space-y-4">
            {/* Category and Formula */}
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className="flex flex-wrap items-center gap-2"
            >
              <span className="rounded bg-[#EEF0F2] px-2.5 py-1 font-mono-tech text-[10px] font-bold uppercase text-[#0B2A4A]">
                {activeModalProduct.category}
              </span>

              <span className="font-mono-tech text-xs font-bold text-[#EF6C23]">
                {activeModalProduct.chemicalFormula}
              </span>
            </div>

            {/* Product Name */}
            <h3
              data-aos="fade-up"
              data-aos-delay="150"
              className="font-heading text-2xl font-black leading-tight text-[#0B2A4A] sm:text-3xl"
            >
              {activeModalProduct.name}
            </h3>

            {/* Product Description */}
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-sm leading-relaxed text-[#2B333B]"
            >
              {activeModalProduct.productOverview ||
                activeModalProduct.shortDescription}
            </p>

            {/* Specifications */}
            <div
              data-aos="fade-up"
              data-aos-delay="250"
              className="space-y-2 rounded border border-[#D5DAE0] bg-[#EEF0F2] p-4 font-mono-tech text-xs"
            >
              <div className="flex justify-between gap-4 border-b border-[#D5DAE0] pb-1.5">
                <span className="text-[#596573]">
                  Purity Specification:
                </span>
                <span className="text-right font-bold text-[#0B2A4A]">
                  {activeModalProduct.purity}
                </span>
              </div>

              <div className="flex justify-between gap-4 border-b border-[#D5DAE0] pb-1.5">
                <span className="text-[#596573]">
                  Particle Size / FSSS:
                </span>
                <span className="text-right font-bold text-[#0B2A4A]">
                  {activeModalProduct.particleSize}
                </span>
              </div>

              <div className="flex justify-between gap-4">
                <span className="text-[#596573]">Appearance:</span>
                <span className="text-right font-medium text-[#111111]">
                  {activeModalProduct.appearance}
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="flex flex-wrap gap-3 pt-4"
            >
              <button
                type="button"
                onClick={() => {
                  const productName = activeModalProduct.name;
                  setActiveModalProduct(null);
                  openRfqModal(productName);
                }}
                className="rounded bg-[#EF6C23] px-5 py-2.5 font-heading text-xs font-bold uppercase tracking-wider text-white shadow-sm transition-colors hover:bg-[#D85E19]"
              >
                Request Quote for this Product
              </button>

              <Link
                href={`/products/${activeModalProduct.slug}`}
                className="rounded border border-[#0B2A4A] px-4 py-2.5 font-mono-tech text-xs uppercase tracking-wider text-[#0B2A4A] transition-colors hover:bg-[#0B2A4A] hover:text-white"
              >
                Full Datasheet &rarr;
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>


    </section>
  );
}

// Subcomponent: Product Card with Desktop Circular Magnifying Cursor & Subtle Parallax Tilt
function ProductCardWithZoom({
  product,
  onOpenViewer,
  onRequestQuote,
}: {
  product: Product;
  onOpenViewer: () => void;
  onRequestQuote: () => void;
}) {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const imageContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Check if touch device
    if ("ontouchstart" in window || navigator.maxTouchPoints > 0) {
      setIsTouchDevice(true);
    }
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isTouchDevice || !imageContainerRef.current) return;
    const rect = imageContainerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCursorPos({ x, y });
  };

  return (
    <div className="bg-white rounded-lg border border-[#D5DAE0] overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group hover:border-[#EF6C23]">
      
      {/* Product Image Container with Selective Magnifying Cursor */}
      <div
        ref={imageContainerRef}
        onMouseEnter={() => !isTouchDevice && setIsHovered(true)}
        onMouseLeave={() => !isTouchDevice && setIsHovered(false)}
        onMouseMove={handleMouseMove}
        onClick={onOpenViewer}
        className="relative w-full h-64 overflow-hidden bg-[#0B2A4A] cursor-pointer select-none"
      >
        <Image
          src={product.imageUrl}
          alt={product.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-center filter contrast-105 transition-transform duration-700 group-hover:scale-105"
        />

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

        {/* Category & Formula Badge */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
          <span className="text-[10px] font-mono-tech uppercase tracking-wider px-2 py-0.5 bg-[#0B2A4A]/90 text-white rounded">
            {product.category}
          </span>
          <span className="text-xs font-mono-tech font-bold text-[#EF6C23] bg-white/95 px-2 py-0.5 rounded shadow-xs">
            {product.chemicalFormula}
          </span>
        </div>

        {/* Desktop Circular Magnifying / "View Product" Cursor */}
        {!isTouchDevice && isHovered && (
          <div
            className="absolute pointer-events-none rounded-full flex items-center justify-center bg-[#EF6C23]/90 text-white border-2 border-white shadow-2xl transition-transform duration-75"
            style={{
              width: "72px",
              height: "72px",
              left: `${cursorPos.x - 36}px`,
              top: `${cursorPos.y - 36}px`,
            }}
          >
            <div className="flex flex-col items-center">
              <ZoomIn className="w-4 h-4 mb-0.5" />
              <span className="text-[8.5px] font-mono-tech font-bold uppercase tracking-wider">
                Zoom
              </span>
            </div>
          </div>
        )}

        {/* Mobile Tap Affordance */}
        {isTouchDevice && (
          <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/70 text-white text-[9px] font-mono-tech rounded">
            Tap to View
          </div>
        )}
      </div>

      {/* Product Information */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <div className="text-[11px] font-mono-tech text-[#596573] mb-1">
            <span>Purity: {product.purity}</span> &middot; <span>{product.particleSize}</span>
          </div>
          <h3 className="text-lg font-heading font-black text-[#0B2A4A] group-hover:text-[#EF6C23] transition-colors leading-snug">
            {product.name}
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-[#2B333B] leading-relaxed line-clamp-2">
            {product.shortDescription}
          </p>
        </div>

        {/* CTAs */}
        <div className="pt-4 border-t border-[#D5DAE0] flex items-center justify-between gap-2">
          {/* View Product CTA */}
          <button
            onClick={onOpenViewer}
            className="inline-flex items-center text-xs font-heading font-bold uppercase tracking-wider text-[#0B2A4A] hover:text-[#EF6C23] transition-colors"
          >
            <span>View Product</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1 text-[#EF6C23]" />
          </button>

          {/* Request Quote CTA */}
          <button
            onClick={onRequestQuote}
            className="bg-[#EF6C23] hover:bg-[#d85e19] text-white text-[11px] font-heading font-bold uppercase tracking-wider px-3.5 py-1.5 rounded transition-colors shadow-xs"
          >
            Request Quote
          </button>
        </div>
      </div>
    </div>
  );
}
