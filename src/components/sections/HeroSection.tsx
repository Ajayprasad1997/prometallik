"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteContent } from "@/data/siteContent";
import { useModal } from "@/context/ModalContext";
import { ArrowRight, ChevronDown, Download, Volume2, VolumeX, Play, Pause } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  const { openRfqModal } = useModal();
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    // Pause video when outside viewport to optimize performance
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting && videoRef.current) {
            videoRef.current.pause();
            setIsPlaying(false);
          } else if (entry.isIntersecting && videoRef.current && !videoError) {
            videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {
              // Autoplay policy or video not ready
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [videoError]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#0B2A4A]"
    >
      {/* Background Video / Poster Fallback Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Poster Image (Always present as guaranteed fallback) */}
        <div className="absolute inset-0">
          <Image
            src="/assets/video/hero-welcome-poster.webp"
            alt="PROMETALLIK High-Temperature Industrial Processing"
            fill
            sizes="100vw"
            priority
            className="object-cover object-center filter brightness-[0.70] contrast-125"
          />
        </div>

        {/* Video Element */}
        {!videoError && (
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            onError={() => setVideoError(true)}
            poster="/assets/video/hero-welcome-poster.webp"
            className="absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.72] contrast-120 transition-opacity duration-1000"
            aria-label={siteContent.hero.video.label}
          >
            <source src="/assets/video/hero-welcome.webm" type="video/webm" />
            <source src="/assets/video/hero-welcome.mp4" type="video/mp4" />
          </video>
        )}

        {/* Cinematic Gradient Overlays for Guaranteed Text Legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B2A4A]/95 via-[#0B2A4A]/70 to-[#0B2A4A]/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B2A4A] via-transparent to-black/60" />
        <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-[#EEF0F2] to-transparent opacity-30" />
      </div>

      {/* Industrial Blueprint Subtle Grid Overlay */}
      <div className="absolute inset-0 bg-industrial-grid-dark opacity-15 pointer-events-none z-1" />

      {/* Main Hero Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-28 w-full flex flex-col justify-center">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center space-x-2.5 px-3 py-1.5 bg-[#0B2A4A]/90 border border-[#EF6C23] mb-6 backdrop-blur-md rounded-sm"
          >
            <span className="w-2 h-2 rounded-full bg-[#EF6C23] animate-ping" />
            <span className="text-[11px] font-mono-tech uppercase tracking-[0.25em] text-[#EEF0F2] font-semibold">
              {siteContent.hero.eyebrow}
            </span>
          </motion.div>

          {/* Headline */}
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-black tracking-tight text-white leading-[1.05]"
            >
              Precision Metals for Industries That Shape the Future.
            </motion.h1>
          </div>

          {/* Supporting Copy */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-6 text-base sm:text-lg md:text-xl text-[#B8BEC5] max-w-2xl font-sans font-normal leading-relaxed"
          >
            {siteContent.hero.supportingCopy}
          </motion.p>

          {/* CTAs and Document Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mt-10 flex flex-wrap items-center gap-4 sm:gap-6"
          >
            {/* Primary CTA */}
            <Link
              href={siteContent.hero.primaryCta.href}
              className="bg-[#EF6C23] hover:bg-[#d85e19] text-white px-7 py-3.5 font-heading font-bold text-sm tracking-wider uppercase inline-flex items-center space-x-3 rounded transition-all duration-200 shadow-lg shadow-[#EF6C23]/25 active:scale-95"
            >
              <span>{siteContent.hero.primaryCta.label}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            {/* Secondary CTA */}
            <button
              onClick={() => openRfqModal()}
              className="border-2 border-white/80 hover:border-[#EF6C23] text-white hover:text-[#EF6C23] px-7 py-3.5 font-heading font-bold text-sm tracking-wider uppercase inline-flex items-center space-x-2 rounded transition-colors duration-200 bg-[#0B2A4A]/40 backdrop-blur-sm"
            >
              <span>{siteContent.hero.secondaryCta.label}</span>
            </button>

            {/* Additional Text Link */}
            <a
              href="#technical-resources"
              className="inline-flex items-center space-x-2 text-xs font-mono-tech uppercase tracking-wider text-[#B8BEC5] hover:text-[#F5B400] transition-colors py-2"
            >
              <Download className="w-3.5 h-3.5 text-[#EF6C23]" />
              <span>{siteContent.hero.profileDownload.label}</span>
            </a>
          </motion.div>
        </div>

        {/* Video Telemetry Controls & Status */}
        <div className="mt-16 flex items-center justify-between border-t border-white/10 pt-4 text-xs font-mono-tech text-[#B8BEC5]">
          <div className="flex items-center space-x-4">
            <span className="flex items-center space-x-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#EF6C23] animate-pulse" />
              <span className="text-[#F5B400] font-semibold">FEED // ELECTRIC ARC FURNACE &amp; THERMAL METALLURGY</span>
            </span>
            <span className="hidden sm:inline text-white/30">|</span>
            <span className="hidden sm:inline text-[#EEF0F2]">STREAM ACTIVE &middot; PROMETALLIK INDUSTRIAL WORKS</span>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={togglePlay}
              className="p-1.5 rounded hover:bg-white/10 text-white transition-colors"
              aria-label={isPlaying ? "Pause background video" : "Play background video"}
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </button>
            <button
              onClick={toggleMute}
              className="p-1.5 rounded hover:bg-white/10 text-white transition-colors"
              aria-label={isMuted ? "Unmute video" : "Mute video"}
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Subtle Scroll to Explore Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center pointer-events-none">
        <span className="text-[10px] font-mono-tech uppercase tracking-[0.25em] text-[#B8BEC5] mb-2">
          {siteContent.hero.scrollIndicator}
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ChevronDown className="w-4 h-4 text-[#EF6C23]" />
        </motion.div>
      </div>
    </section>
  );
}
