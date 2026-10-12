"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { siteContent, WhatWeOfferCard } from "@/data/siteContent";
import { ArrowRight, ChevronRight, Layers } from "lucide-react";
import { motion } from "framer-motion";

export default function WhatWeOfferSection() {
  const cards = siteContent.whatWeOffer.cards;

  return (
    <section className="relative w-full bg-[#FFFFFF] text-[#111111] py-24 sm:py-32 overflow-hidden border-b border-[#D5DAE0]">
      {/* Background Subtle Blueprint Pattern */}
      <div className="absolute inset-0 bg-blueprint-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#D5DAE0]">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 text-xs font-mono-tech uppercase tracking-[0.25em] text-[#0B2A4A] mb-3" data-aos="fade-up">
              <span className="w-5 h-[2px] bg-[#EF6C23]" />
              <span>{siteContent.whatWeOffer.eyebrow}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black tracking-tight text-[#0B2A4A] leading-[1.05]" data-aos="fade-up">
              {siteContent.whatWeOffer.headline}
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm text-[#596573] max-w-md font-sans" data-aos="fade-up">
            {siteContent.whatWeOffer.description}
          </p>
        </div>

    {/* Animated Cards Grid - One by One */}
<motion.div
  variants={{
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  }}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.15 }}
  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
>
  {cards.map((card) => (
    <motion.div
      key={card.id}
      variants={{
        hidden: {
          opacity: 0,
          y: 40,
        },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            ease: "easeOut",
          },
        },
      }}
      className="group relative bg-[#EEF0F2] rounded-lg overflow-hidden border border-[#D5DAE0] hover:border-[#EF6C23] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl focus-within:ring-2 focus-within:ring-[#EF6C23] flex flex-col justify-between"
    >
      {/* Card Image */}
      <div className="relative w-full h-52 overflow-hidden bg-[#0B2A4A]">
        <Image
          src={card.imageUrl}
          alt={card.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-center filter contrast-105 transition-transform duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#0B2A4A]/80 via-transparent to-transparent pointer-events-none" />

        {/* Tag Badge */}
        <div className="absolute top-3 left-3 px-2.5 py-1 bg-[#0B2A4A]/90 border border-[#EF6C23] backdrop-blur-sm text-[10px] font-mono-tech uppercase text-[#F5B400] rounded">
          {card.tag}
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <h3 className="text-xl font-heading font-extrabold text-[#0B2A4A] group-hover:text-[#EF6C23] transition-colors leading-tight">
            {card.title}
          </h3>

          <p className="mt-2 text-xs sm:text-sm text-[#2B333B] leading-relaxed">
            {card.description}
          </p>
        </div>

        {/* Arrow CTA */}
        <div className="pt-4 border-t border-[#D5DAE0]">
          <Link
            href={card.link}
            className="inline-flex items-center text-xs font-heading font-bold uppercase tracking-wider text-[#0B2A4A] group-hover:text-[#EF6C23] transition-colors"
          >
            <span>Explore Specifications</span>

            <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1 text-[#EF6C23]" />
          </Link>
        </div>
      </div>
    </motion.div>
  ))}
</motion.div>
      </div>
    </section>
  );
}
