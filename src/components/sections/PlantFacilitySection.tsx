"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteContent } from "@/data/siteContent";
import { contactData } from "@/data/contact";
import ContactSectionWithMap from "@/components/sections/ContactSectionWithMap";
import { MapPin, Phone, Mail, Clock, ExternalLink, Factory, Activity, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function PlantFacilitySection() {
  const [activeMarker, setActiveMarker] = useState<string>("m1");

  const facility = contactData.plantFacility;
  const markers = siteContent.plantFacility.markers;

  const plantAreas = [
    {
      title: "Manufacturing Floor & Furnace Hall",
      desc: "Computer-sequenced multi-tube pusher furnaces with dry hydrogen reduction atmospheres.",
      image: "/assets/images/plant/plant-floor.jpg",
    },
    {
      title: "Hydrometallurgical Digestion",
      desc: "High-pressure autoclave leaching and continuous ion-exchange columns.",
      image: "/assets/images/products/autoclave-digestion.jpg",
    },
    {
      title: "Analytical Quality Operations",
      desc: "Cleanroom ICP-OES spectroscopy, carbon-sulfur combustion, and laser diffraction analyzers.",
      image: "/assets/images/plant/quality-inspection.jpg",
    },
    {
      title: "Materials Handling & Export Dispatch",
      desc: "Nitrogen-purged packaging lines, desiccated UN-rated steel drums, and container staging.",
      image: "/assets/images/plant/packaging-delivery.jpg",
    },
  ];

  return (
    <section className="relative w-full bg-[#FFFFFF] text-[#111111] py-24 sm:py-32 overflow-hidden border-b border-[#D5DAE0]" id="manufacturing-facility">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-mono-tech uppercase tracking-[0.25em] text-[#0B2A4A] mb-3" data-aos="fade-up">
            <span className="w-5 h-[2px] bg-[#EF6C23]" />
            <span>INFRASTRUCTURE &amp; CAPABILITY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-black tracking-tight text-[#0B2A4A] leading-[1.05]" data-aos="fade-up">
            {siteContent.plantFacility.headline}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#596573] font-sans" data-aos="fade-up">
            {siteContent.plantFacility.description}
          </p>
        </div>

        {/* Wide Image Background with Animated Technical Markers */}
        <div className="relative w-full h-[400px] sm:h-[520px] rounded-xl overflow-hidden border border-[#D5DAE0] shadow-xl mb-12 bg-[#0B2A4A]" data-aos="fade-up">
          <Image
            src="/assets/images/plant/plant-floor.jpg"
            alt="PROMETALLIK Manufacturing Facility Interior"
            fill
            sizes="100vw"
            className="object-cover object-center filter contrast-110 brightness-95"
          data-aos="fade-up"/>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B2A4A]/90 via-[#0B2A4A]/30 to-black/40 pointer-events-none" />

          {/* Interactive Technical Markers */}
          {markers.map((marker) => {
            const isSelected = activeMarker === marker.id;
            return (
              <div
                key={marker.id}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer z-20 group"
                style={{ left: marker.x, top: marker.y }}
                onClick={() => setActiveMarker(marker.id)}
              >
                <div className="relative flex items-center justify-center">
                  <span className={`absolute w-8 h-8 rounded-full transition-all duration-300 ${isSelected ? "bg-[#EF6C23]/40 animate-ping" : "bg-white/20 group-hover:bg-[#EF6C23]/30"}`} />
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center border-2 transition-all ${isSelected ? "bg-[#EF6C23] border-white text-white scale-110" : "bg-[#0B2A4A] border-[#EF6C23] text-white"}`}>
                    <Activity className="w-3 h-3" />
                  </div>
                </div>

                {/* Popover label */}
                <div className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-[#0B2A4A]/95 text-white border border-[#EF6C23] text-[11px] font-mono-tech whitespace-nowrap rounded shadow-lg transition-all ${isSelected ? "opacity-100 scale-100" : "opacity-0 group-hover:opacity-100 group-hover:scale-100 pointer-events-none"}`}>
                  <span className="text-[#F5B400] font-bold mr-1.5">&bull;</span>
                  {marker.title}
                </div>
              </div>
            );
          })}

          {/* Overlay Status Bar */}
          <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-auto p-3.5 bg-[#0B2A4A]/90 border border-white/20 backdrop-blur-md rounded text-white text-xs font-mono-tech max-w-md">
            <div className="flex items-center space-x-2 text-[#EF6C23] font-bold uppercase tracking-wider text-[10px] mb-1">
              <Factory className="w-3.5 h-3.5" />
              <span>Plant Engineering Telemetry</span>
            </div>
            <p className="text-[#B8BEC5] text-[11px]">
              Continuous multi-shift hydrometallurgical digestion, hydrogen reduction furnaces, and certified testing laboratories.
            </p>
          </div>
        </div>

        {/* 4 Operations Highlights Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12" data-aos="fade-up">
          {plantAreas.map((area, idx) => (
            <div
              key={idx}
              className="bg-[#EEF0F2] border border-[#D5DAE0] rounded-lg p-5 space-y-3 hover:border-[#EF6C23] transition-colors"
            >
              <div className="relative w-full h-32 rounded overflow-hidden bg-[#0B2A4A]">
                <Image
                  src={area.image}
                  alt={area.title}
                  fill
                  sizes="300px"
                  className="object-cover"
                />
              </div>
              <h4 className="text-sm font-heading font-extrabold text-[#0B2A4A] leading-snug">
                {area.title}
              </h4>
              <p className="text-xs text-[#596573] leading-relaxed">
                {area.desc}
              </p>
            </div>
          ))}
        </div>

        {/* =========================================================================
            VISUALLY SEPARATED PLANT ADDRESS BLOCK (PROMPT SPECIFIED)
            Placeholders for: Plant name, Street address, City, State, PIN code,
            Country, Telephone, Email, Business hours, View on Google Maps button.
            ========================================================================= */}
      
      </div>
      <ContactSectionWithMap />
    </section>
    
  );
}
