
"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { siteContent } from "@/data/siteContent";

import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  CheckCircle2,
} from "lucide-react";

import { motion } from "framer-motion";

/* =========================================
   CUTTING MACHINE VIDEO FEEDS
========================================= */

const CUTTING_FEEDS = [
  {
    id: "cnc-lathe",
    name: "Feed 01: CNC Turning & Milling",
    shortName: "CNC Turning",
    webm: "/assets/video/cutting-machine.webm",
    mp4: "/assets/video/cutting-machine.mp4",
    tag: "Sub-Micron Turning Center",
    feedLabel: "CNC-NOVATURN-LATHE",
  },
  {
    id: "torch-cutting",
    name: "Feed 02: Plasma Torch Cutting",
    shortName: "Plasma Torch",
    webm: "/assets/video/torch-cutting.webm",
    mp4: "",
    tag: "Heavy Profile Cutting",
    feedLabel: "PLASMA-TORCH-PROFILE",
  },
  {
    id: "ingot-saw",
    name: "Feed 03: Ingot Sawing & Slicing",
    shortName: "Ingot Saw",
    webm: "/assets/video/ingot-saw.webm",
    mp4: "",
    tag: "Continuous Metallurgy Saw",
    feedLabel: "HEAVY-INGOT-SAW",
  },
];

/* =========================================
   MAIN COMPONENT
========================================= */

export default function CuttingMachineVideoSection() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLElement | null>(null);

  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [videoError, setVideoError] = useState(false);
  const [activeFeedIndex, setActiveFeedIndex] = useState(0);

  const currentFeed = CUTTING_FEEDS[activeFeedIndex];

  /* =========================================
     VIDEO FEED CHANGE
  ========================================= */

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    setVideoError(false);
    setIsPlaying(false);

    video.load();

    const playPromise = video.play();

    if (playPromise !== undefined) {
      playPromise
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }
  }, [activeFeedIndex]);

  /* =========================================
     INTERSECTION OBSERVER
  ========================================= */

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = videoRef.current;

          if (!video) return;

          if (!entry.isIntersecting) {
            video.pause();
            setIsPlaying(false);
          } else if (!videoError) {
            video
              .play()
              .then(() => setIsPlaying(true))
              .catch(() => setIsPlaying(false));
          }
        });
      },
      {
        threshold: 0.25,
      }
    );

    const section = containerRef.current;

    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, [videoError, activeFeedIndex]);

  /* =========================================
     VIDEO CONTROLS
  ========================================= */

  const togglePlay = async () => {
    const video = videoRef.current;

    if (!video) return;

    if (!video.paused) {
      video.pause();
      setIsPlaying(false);
    } else {
      try {
        await video.play();
        setIsPlaying(true);
      } catch {
        setIsPlaying(false);
      }
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;

    if (!video) return;

    const nextMuted = !video.muted;

    video.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  const toggleFullscreen = () => {
    const video = videoRef.current;

    if (!video) return;

    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else if (video.requestFullscreen) {
      video.requestFullscreen();
    }
  };

  const changeFeed = (index: number) => {
    if (index === activeFeedIndex) return;

    setVideoError(false);
    setActiveFeedIndex(index);
  };

  /* =========================================
     COMPONENT UI
  ========================================= */

  return (
    <section
      ref={containerRef}
      id="precision-cutting"
      className="
        relative
        w-full
        bg-[#0B2A4A]
        text-white
        overflow-hidden
        border-b
        border-[#145B8C]
        mt-[50px]
      "
    >
      {/* =====================================
          MAIN 30% / 70% LAYOUT
      ===================================== */}

      <div
        className="
          grid
          grid-cols-1
          lg:grid-cols-[30%_70%]
          gap-0
          items-stretch
          w-full
        "
      >
        {/* =====================================
            LEFT SIDE - 30% FULL VIDEO
        ===================================== */}

        <div
          className="
            relative
            w-full
            min-w-0
            h-[420px]
            sm:h-[520px]
            lg:h-auto
            overflow-hidden
            bg-black
          "
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="
              relative
              w-full
              h-full
              min-h-[420px]
              sm:min-h-[520px]
              lg:min-h-[650px]
              overflow-hidden
              bg-black
              group
            "
          >
            {/* VIDEO POSTER */}

            <div className="absolute inset-0 z-0">
              <Image
                src="/assets/video/cutting-machine-poster.webp"
                alt="Industrial precision CNC cutting machine"
                fill
                priority={false}
                sizes="(max-width: 1024px) 100vw, 30vw"
                className="object-cover object-center"
              />
            </div>

            {/* MAIN VIDEO */}

            {!videoError && (
              <video
                ref={videoRef}
                key={currentFeed.id}
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                poster="/assets/video/cutting-machine-poster.webp"
                onError={() => setVideoError(true)}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                className="
                  absolute
                  inset-0
                  z-10
                  w-full
                  h-full
                  object-cover
                  object-center
                "
                aria-label={currentFeed.name}
              >
                <source
                  src={currentFeed.webm}
                  type="video/webm"
                />

                {currentFeed.mp4 && (
                  <source
                    src={currentFeed.mp4}
                    type="video/mp4"
                  />
                )}
              </video>
            )}

            {/* VIDEO GRADIENT */}

            <div
              className="
                absolute
                inset-0
                z-20
                bg-gradient-to-t
                from-black/85
                via-transparent
                to-black/40
                pointer-events-none
              "
            />

            {/* =====================================
                CAMERA FEED SELECTOR
            ===================================== */}

            <div
              className="
                absolute
                top-4
                left-3
                right-3
                z-30
                flex
                flex-wrap
                gap-1.5
                items-center
              "
            >
              {CUTTING_FEEDS.map((feed, idx) => (
                <button
                  key={feed.id}
                  type="button"
                  onClick={() => changeFeed(idx)}
                  aria-pressed={activeFeedIndex === idx}
                  className={`
                    flex
                    items-center
                    gap-1.5
                    px-2.5
                    py-2
                    text-[10px]
                    font-semibold
                    rounded
                    backdrop-blur-md
                    transition-all
                    duration-300

                    ${
                      activeFeedIndex === idx
                        ? "bg-[#EF6C23] text-white shadow-lg"
                        : "bg-black/70 text-white/80 border border-white/20 hover:bg-[#145B8C]"
                    }
                  `}
                >
                  <span
                    className={`
                      w-1.5
                      h-1.5
                      rounded-full
                      ${
                        activeFeedIndex === idx
                          ? "bg-white animate-pulse"
                          : "bg-white/40"
                      }
                    `}
                  />

                  {feed.shortName}
                </button>
              ))}
            </div>

            {/* =====================================
                VIDEO TELEMETRY
            ===================================== */}

            <div
              className="
                absolute
                top-20
                left-3
                z-30
                max-w-[calc(100%-24px)]
                px-2.5
                py-1.5
                bg-black/75
                border
                border-[#EF6C23]/70
                rounded
                text-[9px]
                text-[#F5B400]
                font-mono
                tracking-wide
              "
            >
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#EF6C23] animate-pulse" />

                <span className="break-all">
                  {currentFeed.feedLabel}
                </span>
              </span>
            </div>

            {/* =====================================
                BOTTOM VIDEO INFORMATION
            ===================================== */}

            <div
              className="
                absolute
                bottom-0
                left-0
                right-0
                z-30
                p-4
                sm:p-5
              "
            >
              <div className="mb-4">
                <span
                  className="
                    inline-flex
                    items-center
                    gap-2
                    text-[10px]
                    text-[#F5B400]
                    uppercase
                    font-bold
                    tracking-[0.15em]
                  "
                >
                  <span className="w-2 h-2 bg-[#EF6C23] rounded-full animate-pulse" />

                  PROMETALLIK LIVE
                </span>

                <h3 className="text-lg sm:text-xl font-bold text-white mt-2 leading-tight">
                  {currentFeed.name}
                </h3>

                <p className="text-xs text-white/65 mt-1">
                  {currentFeed.tag}
                </p>
              </div>

              {/* VIDEO CONTROL BAR */}

              <div
                className="
                  flex
                  items-center
                  justify-between
                  gap-2
                  bg-black/70
                  backdrop-blur-md
                  border
                  border-white/20
                  rounded-lg
                  p-2
                "
              >
                <div className="flex items-center gap-2">
                  {/* PLAY / PAUSE */}

                  <button
                    type="button"
                    onClick={togglePlay}
                    className="p-2 rounded hover:bg-white/20 transition-colors"
                    aria-label={isPlaying ? "Pause video" : "Play video"}
                  >
                    {isPlaying ? (
                      <Pause className="w-4 h-4" />
                    ) : (
                      <Play className="w-4 h-4" />
                    )}
                  </button>

                  {/* MUTE / UNMUTE */}

                  <button
                    type="button"
                    onClick={toggleMute}
                    className="p-2 rounded hover:bg-white/20 transition-colors"
                    aria-label={isMuted ? "Unmute video" : "Mute video"}
                  >
                    {isMuted ? (
                      <VolumeX className="w-4 h-4" />
                    ) : (
                      <Volume2 className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* FULLSCREEN */}

                <button
                  type="button"
                  onClick={toggleFullscreen}
                  className="p-2 rounded hover:bg-white/20 transition-colors"
                  aria-label="Toggle fullscreen video"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* =====================================
            RIGHT SIDE - 70% CONTENT
        ===================================== */}

        <div
          className="
            relative
            w-full
            min-w-0
            flex
            items-center
            bg-[#0B2A4A]
            overflow-hidden
          "
        >
          {/* BACKGROUND GRID */}

          <div
            className="
              absolute
              inset-0
              bg-industrial-grid-dark
              opacity-15
              pointer-events-none
            "
          />

          {/* RIGHT CONTENT CONTAINER */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
            className="
              relative
              z-10
              w-full
              max-w-[1000px]
              mx-auto
              px-5
              py-12
              sm:px-8
              sm:py-16
              lg:px-12
              lg:py-20
              xl:px-16
              2xl:px-20
            "
          >
            {/* SECTION LABEL */}

            <div
              className="
                inline-flex
                items-center
                gap-3
                text-xs
                font-mono
                uppercase
                tracking-[0.25em]
                text-[#F5B400]
                mb-6
              "
            >
              <span className="w-6 h-[2px] bg-[#EF6C23]" />

              PRECISION PROCESSING
            </div>

            {/* MAIN HEADING */}

            <h2
              className="
                text-3xl
                sm:text-4xl
                lg:text-5xl
                xl:text-[56px]
                font-heading
                font-black
                tracking-tight
                text-white
                leading-[1.08]
                mb-6
              "
            >
              {siteContent.cuttingMachine.headline}
            </h2>

            {/* SUPPORTING DESCRIPTION */}

            <p
              className="
                text-sm
                sm:text-base
                lg:text-lg
                text-[#B8BEC5]
                leading-relaxed
                max-w-[780px]
                mb-8
              "
            >
              {siteContent.cuttingMachine.supportingText}
            </p>

            {/* =====================================
                BULLET POINTS
            ===================================== */}

            <div
              className="
                grid
                grid-cols-1
                md:grid-cols-2
                gap-x-8
                gap-y-5
                pt-7
                border-t
                border-[#145B8C]
              "
            >
              {siteContent.cuttingMachine.bulletPoints.map(
                (point, idx) => (
                  <div
                    key={idx}
                    className="
                      flex
                      items-start
                      gap-3
                      text-sm
                      sm:text-base
                      text-[#EEF0F2]
                    "
                  >
                    <div
                      className="
                        w-6
                        h-6
                        rounded-full
                        bg-[#EF6C23]/20
                        border
                        border-[#EF6C23]
                        flex
                        items-center
                        justify-center
                        shrink-0
                        mt-0.5
                      "
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#EF6C23]" />
                    </div>

                    <span className="leading-relaxed">
                      {point}
                    </span>
                  </div>
                )
              )}
            </div>

            {/* =====================================
                TECHNICAL SPECIFICATIONS
            ===================================== */}

            
          </motion.div>
        </div>
      </div>
    </section>
  );
}
