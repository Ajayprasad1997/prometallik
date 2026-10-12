"use client";

import React, { useState, useEffect } from "react";
import { useModal } from "@/context/ModalContext";
import { MessageSquare, ArrowUp, Send } from "lucide-react";

export default function StickyContactBar() {
  const { openRfqModal } = useModal();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", checkScroll, { passive: true });
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Desktop Sticky Vertical RFQ Tab on Right Edge */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden md:block">
        <button
          onClick={() => openRfqModal()}
          className="group flex items-center bg-[#0B2A4A] border-l-2 border-y border-[#EF6C23] text-white pl-3 pr-2 py-4 shadow-2xl transition-all duration-300 hover:bg-[#EF6C23] hover:text-white cursor-pointer rounded-l"
          style={{ writingMode: "vertical-rl" }}
          title="Open Quote Modal"
        >
          <div className="flex items-center space-x-2 space-x-reverse font-mono-tech text-[10px] font-bold tracking-[0.25em] uppercase">
            <span>REQUEST QUOTE</span>
            <span className="w-2 h-2 rounded-full bg-[#EF6C23] group-hover:bg-white animate-pulse" />
          </div>
        </button>
      </div>

      {/* Floating Action Stack (Scroll To Top) on Bottom Right */}
      <div className="fixed bottom-6 right-4 sm:right-6 z-40 flex flex-col space-y-2.5">
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="w-10 h-10 bg-[#0B2A4A] border border-[#D5DAE0] text-white shadow-lg rounded-full flex items-center justify-center transition-all duration-200 hover:bg-[#EF6C23] hover:scale-105"
            title="Scroll to Top"
            aria-label="Scroll to top of page"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}
      </div>
    </>
  );
}
