"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { siteContent } from "@/data/siteContent";
import { Recycle, Leaf, Shield, CheckCircle2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function RecyclingInteractiveSection() {
  const [activeZone, setActiveZone] = useState<number>(0);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHoveringImage, setIsHoveringImage] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const imageRef = useRef<HTMLDivElement | null>(null);

  const themes = siteContent.recycling.themes;

  useEffect(() => {
    if ("ontouchstart" in window || navigator.maxTouchPoints > 0) {
      setIsTouchDevice(true);
    }
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isTouchDevice || !imageRef.current) return;
    const rect = imageRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCursorPos({ x, y });

    // Map vertical cursor coordinate to zones
    const zoneIndex = Math.min(themes.length - 1, Math.max(0, Math.floor((y / rect.height) * themes.length)));
    setActiveZone(zoneIndex);
  };

  return (
    <section className="relative w-full bg-[#FFFFFF] text-[#111111] py-24 sm:py-32 overflow-hidden border-b border-[#D5DAE0]" id="sustainability-recycling">
      {/* Background Dots Pattern */}
      <div className="absolute inset-0 bg-dots-pattern opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-mono-tech uppercase tracking-[0.25em] text-[#0B2A4A] mb-3" data-aos="fade-up">
            <span className="w-5 h-[2px] bg-[#EF6C23]" />
            <span>CIRCULAR METALLURGY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-black tracking-tight text-[#0B2A4A] leading-[1.05]" data-aos="fade-up">
            {siteContent.recycling.headline}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#596573] font-sans" data-aos="fade-up">
            {siteContent.recycling.description}
          </p>
        </div>

        {/* Interactive Desktop Grid & Mobile Scroll Reveal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Interactive Image Reacting to Cursor Movement */}
          <div className="lg:col-span-6 relative" data-aos="fade-right">
            <div
              ref={imageRef}
              onMouseEnter={() => !isTouchDevice && setIsHoveringImage(true)}
              onMouseLeave={() => !isTouchDevice && setIsHoveringImage(false)}
              onMouseMove={handleMouseMove}
              className="relative w-full h-[380px] sm:h-[480px] rounded-xl overflow-hidden bg-[#0B2A4A] border-2 border-[#D5DAE0] shadow-xl group cursor-crosshair select-none"
            >
              {/* Circular Recovery Photography */}
              <Image
                src="/assets/images/recycling/circular-recovery.jpg"
                alt="Closed-loop industrial metal recovery and chemical refining"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center filter contrast-105 transition-transform duration-500 group-hover:scale-105"
                style={{
                  transform: !isTouchDevice && isHoveringImage
                    ? `scale(1.04) translate(${(cursorPos.x - 240) * 0.02}px, ${(cursorPos.y - 240) * 0.02}px)`
                    : "scale(1)",
                }}
              />

              {/* Gradient Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2A4A]/90 via-[#0B2A4A]/30 to-transparent pointer-events-none" />

              {/* Gentle Circular Follower (Desktop Only) */}
              {!isTouchDevice && isHoveringImage && (
                <div
                  className="absolute pointer-events-none rounded-full border border-[#EF6C23] bg-[#EF6C23]/15 transition-all duration-75 flex items-center justify-center shadow-lg"
                  style={{
                    width: "80px",
                    height: "80px",
                    left: `${cursorPos.x - 40}px`,
                    top: `${cursorPos.y - 40}px`,
                  }}
                >
                  <span className="text-[8px] font-mono-tech text-white uppercase tracking-wider font-bold">
                    Zone {activeZone + 1}
                  </span>
                </div>
              )}

              {/* Dynamic Zone Floating Badge */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between p-3 bg-white/90 backdrop-blur-md rounded border border-[#D5DAE0] text-xs font-mono-tech text-[#0B2A4A] shadow-md pointer-events-none">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-[#EF6C23]" />
                  <span className="font-bold">{themes[activeZone].title}</span>
                </div>
                <span className="text-[10px] text-[#EF6C23] font-bold">ZONE 0{activeZone + 1}</span>
              </div>

              {/* Bottom Telemetry Overlay */}
              <div className="absolute bottom-4 left-4 right-4 p-3 bg-[#0B2A4A]/95 text-white rounded text-xs font-mono-tech border-l-3 border-[#EF6C23]">
                <div className="text-[10px] text-[#F5B400] uppercase font-bold">
                  CIRCULAR MATERIAL REACTION
                </div>
                <div className="text-[11px] text-[#EEF0F2] truncate">
                  {themes[activeZone].desc}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 6 Responsible Production Themes */}
          <div className="lg:col-span-6 space-y-4">
            {themes.map((theme, index) => {
              const isActive = activeZone === index;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  onMouseEnter={() => !isTouchDevice && setActiveZone(index)}
                  className={`p-4 rounded-lg border transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-[#EEF0F2] border-[#EF6C23] shadow-md translate-x-2"
                      : "bg-white border-[#D5DAE0] hover:border-[#0B2A4A]"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <span className={`text-[10px] font-mono-tech font-bold ${isActive ? "text-[#EF6C23]" : "text-[#596573]"}`}>
                          0{index + 1} //
                        </span>
                        <h3 className={`text-base font-heading font-extrabold ${isActive ? "text-[#0B2A4A]" : "text-[#111111]"}`}>
                          {theme.title}
                        </h3>
                      </div>
                      <p className="text-xs sm:text-sm text-[#2B333B] leading-relaxed">
                        {theme.desc}
                      </p>
                    </div>

                    <div className={`w-2 h-2 rounded-full shrink-0 mt-2 transition-colors ${isActive ? "bg-[#EF6C23]" : "bg-[#B8BEC5]"}`} />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
