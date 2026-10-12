"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [complete, setComplete] = useState(false);
  const [stage, setStage] = useState<"line" | "heat" | "letters" | "split" | "done">("line");

  useEffect(() => {
    // Check if user prefers reduced motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setComplete(true);
      return;
    }

    // Check session storage so it doesn't interrupt repeatedly on fast internal navigations if already viewed
    const seen = sessionStorage.getItem("prometallik_preloader_seen");
    if (seen) {
      setComplete(true);
      return;
    }

    // Stage timeline
    const t1 = setTimeout(() => setStage("heat"), 350);
    const t2 = setTimeout(() => setStage("letters"), 750);
    const t3 = setTimeout(() => setStage("split"), 1400);
    const t4 = setTimeout(() => {
      setStage("done");
      setComplete(true);
      sessionStorage.setItem("prometallik_preloader_seen", "true");
    }, 1900);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, []);

  const handleSkip = () => {
    setComplete(true);
    sessionStorage.setItem("prometallik_preloader_seen", "true");
  };

  if (complete) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-100 flex items-center justify-center pointer-events-auto overflow-hidden">
        {/* Top Metallic Panel */}
        <motion.div
          initial={{ y: 0 }}
          animate={stage === "split" ? { y: "-100%" } : { y: 0 }}
          transition={{ duration: 0.7, ease: [0.77, 0, 0.175, 1] }}
          className="absolute top-0 left-0 right-0 h-1/2 bg-[#0B2A4A] border-b border-[#145B8C] z-10 flex flex-col justify-end"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#071C33]/40 to-black/60 pointer-events-none" />
        </motion.div>

        {/* Bottom Metallic Panel */}
        <motion.div
          initial={{ y: 0 }}
          animate={stage === "split" ? { y: "100%" } : { y: 0 }}
          transition={{ duration: 0.7, ease: [0.77, 0, 0.175, 1] }}
          className="absolute bottom-0 left-0 right-0 h-1/2 bg-[#0B2A4A] border-t border-[#145B8C] z-10"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-[#071C33]/40 to-black/60 pointer-events-none" />
        </motion.div>

        {/* Center Content & Molten Animation */}
        <div className="relative z-20 flex flex-col items-center justify-center px-6 text-center select-none">
          {/* Molten Conduit Line */}
          <div className="relative w-72 md:w-96 h-[2.5px] bg-[#071C33] mb-8 overflow-hidden rounded-full">
            <motion.div
              initial={{ x: "-100%" }}
              animate={
                stage === "line"
                  ? { x: "0%" }
                  : stage === "heat" || stage === "letters"
                  ? { x: "0%", backgroundColor: "#EF6C23", filter: "drop-shadow(0 0 10px #EF6C23)" }
                  : { x: "100%" }
              }
              transition={{
                x: { duration: 0.5, ease: "easeOut" },
                backgroundColor: { duration: 0.3 },
              }}
              className="absolute inset-0 bg-[#EF6C23]"
            />
          </div>

          {/* Brand Revealed in Refined Metallurgy */}
          <motion.div
            initial={{ opacity: 0, y: 15, filter: "blur(6px)" }}
            animate={
              stage === "letters" || stage === "split"
                ? { opacity: 1, y: 0, filter: "blur(0px)" }
                : { opacity: 0, y: 15 }
            }
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <div className="flex items-center space-x-2 text-xs font-mono-tech tracking-[0.35em] text-[#F5B400] uppercase mb-2">
              <span className="w-2 h-2 rounded-full bg-[#EF6C23] animate-pulse" />
              <span>Advanced Materials &middot; Engineered in India</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-heading font-black tracking-tight text-white flex items-center">
              <span>PROMETALLIK</span>
              <span className="text-[#EF6C23] ml-1">.</span>
            </h1>

            <p className="mt-2 text-xs md:text-sm font-mono-tech tracking-[0.25em] text-[#B8BEC5] uppercase">
              Exhibition Grade Metallurgy
            </p>
          </motion.div>

          {/* Quick Skip Button */}
          <button
            onClick={handleSkip}
            className="mt-8 text-[11px] font-mono-tech uppercase tracking-widest text-[#B8BEC5] hover:text-[#EF6C23] transition-colors py-1 px-3 border border-transparent hover:border-[#EF6C23]/40 rounded cursor-pointer"
          >
            [ Skip Animation &rarr; ]
          </button>
        </div>
      </div>
    </AnimatePresence>
  );
}
