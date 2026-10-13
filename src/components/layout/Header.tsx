"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { siteContent } from "@/data/siteContent";
import { useModal } from "@/context/ModalContext";
import { Menu, X, Download, FileText, ChevronRight } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const { openRfqModal } = useModal();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on path change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const isHomePage = pathname === "/";
  // On home page before scrolling, header is transparent with white text over dark video.
  // When scrolled, or on inner pages, it turns into crisp light metallic white background with dark text.
  const isTransparent = isHomePage && !isScrolled;

  const headerClass = isTransparent
    ? "bg-transparent text-white border-b border-white/10 py-5"
    : "bg-white/95 backdrop-blur-md text-[#111111] border-b border-[#D5DAE0] shadow-md py-3.5";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerClass}`}
      >
        <div className="w-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <Link href="/" className="flex items-center space-x-3 group" aria-label="PROMETALLIK Home">
            <div className="relative w-8 h-8 rounded bg-[#0B2A4A] border border-[#EF6C23] flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:scale-105 shadow-sm">
              <span className="font-heading font-black text-lg text-white">P</span>
              <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#EF6C23]" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center">
                <span
                  className={`font-heading text-xl tracking-tight font-extrabold transition-colors ${
                    isTransparent ? "text-white" : "text-[#0B2A4A]"
                  }`}
                >
                  PROMETALLIK
                </span>
                <span className="text-[#EF6C23] font-black text-xl">.</span>
              </div>
              <span
                className={`text-[8.5px] font-mono-tech tracking-[0.22em] uppercase transition-colors ${
                  isTransparent ? "text-[#B8BEC5]" : "text-[#145B8C]"
                }`}
              >
                ADVANCED METALS &middot; INDIA
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-5 xl:space-x-7" aria-label="Main Navigation">
            {siteContent.navigation.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`text-base uppercase font-mono-tech tracking-wider transition-colors py-2 font-medium relative ${
                    isActive
                      ? isTransparent
                        ? "text-[#EF6C23] font-bold"
                        : "text-[#EF6C23] font-bold"
                      : isTransparent
                      ? "text-white/85 hover:text-[#EF6C23]"
                      : "text-[#2B333B] hover:text-[#EF6C23]"
                  }`}
                scroll={true}>
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#EF6C23]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Permanent Header Actions */}
          <div className="hidden lg:flex items-center space-x-3">
            {/* Download Catalogue Secondary Action */}
            <a
              href="#technical-resources"
              onClick={(e) => {
                if (pathname === "/") {
                  const el = document.getElementById("technical-resources");
                  if (el) {
                    e.preventDefault();
                    el.scrollIntoView({ behavior: "smooth" });
                  }
                }
              }}
              className={`inline-flex items-center space-x-1.5 px-3 py-2 text-base font-mono-tech uppercase tracking-wider rounded border transition-colors ${
                isTransparent
                  ? "border-white/30 text-white/90 hover:border-[#EF6C23] hover:text-[#EF6C23]"
                  : "border-[#B8BEC5] text-[#2B333B] hover:border-[#EF6C23] hover:text-[#EF6C23] bg-[#EEF0F2]"
              }`}
              title="Download Product Catalogue"
            >
              <Download className="w-3.5 h-3.5 text-[#EF6C23]" />
              <span>Catalogue</span>
            </a>

            {/* Request a Quote Primary Action */}
            <button
              onClick={() => openRfqModal()}
              className="bg-[#EF6C23] hover:bg-[#d85e19] text-white text-base font-heading font-bold uppercase tracking-wider px-4 py-2 rounded transition-all shadow-sm hover:shadow active:scale-95"
            >
              Request a Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              onClick={() => openRfqModal()}
              className="bg-[#EF6C23] text-white text-[11px] font-heading font-bold uppercase tracking-wider px-2.5 py-1.5 rounded"
            >
              Quote
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded border transition-colors ${
                isTransparent
                  ? "border-white/20 text-white hover:border-white"
                  : "border-[#D5DAE0] text-[#111111] hover:border-[#0B2A4A]"
              }`}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Accessible Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden pt-20"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="bg-white border-b border-[#D5DAE0] p-6 shadow-2xl max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col space-y-4">
              <span className="text-[10px] font-mono-tech uppercase tracking-[0.2em] text-[#145B8C] border-b border-[#EEF0F2] pb-2">
                Navigation Menu
              </span>

              {siteContent.navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between py-2 text-sm font-medium border-b border-[#F0F2F5] ${
                      isActive ? "text-[#EF6C23] font-bold" : "text-[#111111] hover:text-[#EF6C23]"
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronRight className="w-4 h-4 text-[#B8BEC5]" />
                  </Link>
                );
              })}

              <div className="pt-4 flex flex-col space-y-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openRfqModal();
                  }}
                  className="w-full bg-[#EF6C23] text-white font-heading font-bold text-base uppercase tracking-wider py-3 rounded text-center shadow-sm"
                >
                  Request a Quote
                </button>
                <a
                  href="#technical-resources"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full border border-[#B8BEC5] text-[#2B333B] font-mono-tech text-base uppercase tracking-wider py-2.5 rounded text-center inline-flex items-center justify-center space-x-2 bg-[#EEF0F2]"
                >
                  <Download className="w-3.5 h-3.5 text-[#EF6C23]" />
                  <span>Download Product Catalogue</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
