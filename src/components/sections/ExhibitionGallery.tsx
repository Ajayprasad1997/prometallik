"use client";

import React, { useState } from "react";
import Image from "next/image";
import { exhibitionGalleryItems, GalleryItem } from "@/data/gallery";
import { X, ChevronLeft, ChevronRight, Maximize2, MapPin, Tag } from "lucide-react";

export default function ExhibitionGallery() {
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const activeItem: GalleryItem | null =
    activeLightboxIndex !== null ? exhibitionGalleryItems[activeLightboxIndex] : null;

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex(
        (activeLightboxIndex - 1 + exhibitionGalleryItems.length) % exhibitionGalleryItems.length
      );
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex + 1) % exhibitionGalleryItems.length);
    }
  };

  return (
    <section className="relative w-full py-24 sm:py-32 bg-[#0c0c0c] text-white border-b border-[#222222] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#222222]">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono-tech uppercase tracking-[0.25em] text-[#F36C21] mb-2">
              <span className="w-6 h-[2px] bg-[#F36C21]" />
              <span>International Metallurgy Exhibition Gallery</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-heading font-black tracking-tight text-white uppercase">
              THE WORLD OF <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F36C21] to-[#D9DDE0]">
                ENGINEERED METALS.
              </span>
            </h2>
          </div>

          <p className="mt-4 md:mt-0 text-xs sm:text-sm text-[#A7ADB2] max-w-sm font-sans">
            Cinematic industrial documentary photography showcasing the contrast between raw geological power and precision metallurgy.
          </p>
        </div>

        {/* Masonry / Grid Gallery Display */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {exhibitionGalleryItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setActiveLightboxIndex(idx)}
              className={`relative overflow-hidden group cursor-pointer bg-black border border-[#222222] hover:border-[#F36C21] transition-all duration-300 ${
                idx === 0 || idx === 4 ? "sm:col-span-2 h-[340px]" : "h-[340px]"
              }`}
            >
              <Image
                src={item.imageUrl}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                className="object-cover object-center filter brightness-90 contrast-115 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Top tag */}
              <div className="absolute top-3 left-3">
                <span className="text-[10px] font-mono-tech uppercase tracking-wider px-2 py-0.5 bg-black/80 border border-[#333333] text-[#F36C21] backdrop-blur-sm">
                  {item.category}
                </span>
              </div>

              {/* Bottom Caption & Expand Icon */}
              <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                <h3 className="text-sm font-heading font-extrabold text-white leading-snug line-clamp-2">
                  {item.title}
                </h3>
                <div className="mt-1 flex items-center justify-between text-[10px] font-mono-tech text-[#A7ADB2]">
                  <span className="truncate max-w-[200px]">{item.location}</span>
                  <span className="text-[#F36C21] flex items-center space-x-1 group-hover:underline">
                    <Maximize2 className="w-3 h-3" />
                    <span>Expand</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full-Screen Lightbox Modal */}
      {activeItem && activeLightboxIndex !== null && (
        <div
          onClick={() => setActiveLightboxIndex(null)}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
        >
          {/* Close Button */}
          <button
            onClick={() => setActiveLightboxIndex(null)}
            className="absolute top-6 right-6 p-2 text-white hover:text-[#F36C21] transition-colors z-20 cursor-pointer"
            aria-label="Close exhibition lightbox"
          >
            <X className="w-7 h-7" />
          </button>

          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 bg-black/80 border border-[#333333] text-white hover:text-[#F36C21] hover:border-[#F36C21] transition-all z-20"
            aria-label="Previous gallery image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 bg-black/80 border border-[#333333] text-white hover:text-[#F36C21] hover:border-[#F36C21] transition-all z-20"
            aria-label="Next gallery image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Lightbox Main Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl w-full max-h-[85vh] bg-[#0c0c0c] border border-[#2a2a2a] flex flex-col overflow-hidden shadow-2xl"
          >
            {/* Top Bar */}
            <div className="p-4 bg-[#141414] border-b border-[#222222] flex items-center justify-between text-xs font-mono-tech text-[#A7ADB2]">
              <div className="flex items-center space-x-2">
                <span className="text-[#F36C21] font-bold">EXHIBITION DISPLAY</span>
                <span>&middot;</span>
                <span>{activeItem.category}</span>
              </div>
              <span>
                {activeLightboxIndex + 1} / {exhibitionGalleryItems.length}
              </span>
            </div>

            {/* Main Full-Size Image Container */}
            <div className="relative w-full h-[55vh] sm:h-[65vh] bg-black">
              <Image
                src={activeItem.imageUrl}
                alt={activeItem.title}
                fill
                priority
                className="object-contain object-center"
              />
            </div>

            {/* Bottom Caption & Technical Metadata */}
            <div className="p-5 bg-[#141414] border-t border-[#222222] space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <h3 className="text-base sm:text-lg font-heading font-black text-white">
                  {activeItem.title}
                </h3>
                <div className="flex items-center space-x-1.5 text-xs font-mono-tech text-[#A7ADB2]">
                  <MapPin className="w-3.5 h-3.5 text-[#F36C21]" />
                  <span>{activeItem.location}</span>
                </div>
              </div>
              <p className="text-xs text-[#D9DDE0] font-mono-tech leading-relaxed">
                {activeItem.technicalCaption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
