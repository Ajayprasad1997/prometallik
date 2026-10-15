"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { siteContent } from "@/data/siteContent";
import { contactData } from "@/data/contact";
import { useModal } from "@/context/ModalContext";
import { Mail, Phone, MapPin, ExternalLink, Download, FileText, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const { openRfqModal } = useModal();
  const [mapInteractive, setMapInteractive] = React.useState(false);

  return (
    <footer className="bg-[#0B2A4A] text-white border-t border-[#145B8C] relative overflow-hidden">
      {/* Subtle industrial blueprint grid overlay */}
      <div className="absolute inset-0 bg-industrial-grid-dark opacity-10 pointer-events-none" />

      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-[#145B8C]/40">
          
          {/* Column 1: Brand & Corporate Address */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded bg-[#FFFFFF] border border-[#EF6C23] flex items-center justify-center">
                <span className="font-heading font-black text-[#0B2A4A] text-base">P</span>
              </div>
              <span className="font-heading text-xl font-extrabold tracking-tight text-white">
                PROMETALLIK<span className="text-[#EF6C23]">.</span>
              </span>
            </Link>

            <p className="text-xs text-[#B8BEC5] leading-relaxed">
              Advanced metals, high-purity chemical intermediates and precision refractory powders engineered in India for international industrial applications.
            </p>

            <div className="pt-2 text-xs text-[#B8BEC5] space-y-1">
              <span className="text-[10px] font-mono-tech uppercase tracking-wider text-[#EF6C23] block">
                Corporate Office:
              </span>
              <p className="leading-snug">{contactData.corporateOffice.streetAddress}</p>
              <p>{contactData.corporateOffice.city}, {contactData.corporateOffice.state} — {contactData.corporateOffice.pinCode}</p>
              <p className="text-white font-medium">{contactData.corporateOffice.country}</p>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono-tech tracking-[0.2em] uppercase text-[#F5B400] font-bold">
              Company
            </h4>
            <ul className="space-y-2 text-xs text-[#B8BEC5]">
              <li>
                <Link href="/about" className="hover:text-white transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-[#EF6C23] rounded-full mr-2" />
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/manufacturing" className="hover:text-white transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-[#EF6C23] rounded-full mr-2" />
                  Manufacturing
                </Link>
              </li>
              <li>
                <Link href="/quality" className="hover:text-white transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-[#EF6C23] rounded-full mr-2" />
                  Quality &amp; Laboratory
                </Link>
              </li>
              <li>
                <Link href="/sustainability" className="hover:text-white transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-[#EF6C23] rounded-full mr-2" />
                  Sustainability &amp; Recycling
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Products */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono-tech tracking-[0.2em] uppercase text-[#F5B400] font-bold">
              Products
            </h4>
            <ul className="space-y-2 text-xs text-[#B8BEC5]">
              <li>
                <Link href="/products?category=tungsten-intermediates" className="hover:text-white transition-colors">
                  Tungsten Intermediates
                </Link>
              </li>
              <li>
                <Link href="/products?category=tungsten-powders" className="hover:text-white transition-colors">
                  Tungsten &amp; Carbide Powders
                </Link>
              </li>
              <li>
                <Link href="/products?category=cobalt-chemicals" className="hover:text-white transition-colors">
                  Cobalt Compounds
                </Link>
              </li>
              <li>
                <Link href="/products?category=magnesium-materials" className="hover:text-white transition-colors">
                  Magnesium Metals
                </Link>
              </li>
              <li className="pt-2">
                <a
                  href="#technical-resources"
                  className="inline-flex items-center space-x-1.5 text-xs text-[#EF6C23] hover:text-white font-semibold transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Product Catalogue</span>
                </a>
              </li>
              <li>
                <button
                  onClick={() => openRfqModal()}
                  className="text-xs text-white hover:text-[#EF6C23] font-semibold underline underline-offset-2 transition-colors"
                >
                  Request a Quote &rarr;
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Articles & Technical Resources */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono-tech tracking-[0.2em] uppercase text-[#F5B400] font-bold">
              Resources
            </h4>
            <ul className="space-y-2 text-xs text-[#B8BEC5]">
              <li>
                <Link href="/blogs" className="hover:text-white transition-colors font-medium text-white">
                  Articles &amp; Blogs
                </Link>
              </li>
              <li>
                <a
                  href="#technical-resources"
                  className="hover:text-white transition-colors flex items-center space-x-1"
                >
                  <FileText className="w-3 h-3 text-[#B8BEC5]" />
                  <span>Company Profile PDF</span>
                </a>
              </li>
              <li>
                <a
                  href="#technical-resources"
                  className="hover:text-white transition-colors flex items-center space-x-1"
                >
                  <FileText className="w-3 h-3 text-[#B8BEC5]" />
                  <span>Product Catalogue PDF</span>
                </a>
              </li>
              <li>
                <a
                  href="#technical-resources"
                  className="hover:text-white transition-colors flex items-center space-x-1"
                >
                  <FileText className="w-3 h-3 text-[#B8BEC5]" />
                  <span>Technical Datasheet PDF</span>
                </a>
              </li>
              <li>
                <a
                  href="#technical-resources"
                  className="hover:text-white transition-colors flex items-center space-x-1"
                >
                  <FileText className="w-3 h-3 text-[#B8BEC5]" />
                  <span>Certifications PDF</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 5: Contact & Plant Facility */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono-tech tracking-[0.2em] uppercase text-[#F5B400] font-bold">
              Direct Contact
            </h4>
            <div className="text-xs text-[#B8BEC5] space-y-2">
              <div className="flex items-center space-x-2">
                <Mail className="w-3.5 h-3.5 text-[#EF6C23] shrink-0" />
                <a href={`mailto:${contactData.corporateOffice.email}`} className="hover:text-white">
                  {contactData.corporateOffice.email}
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-3.5 h-3.5 text-[#EF6C23] shrink-0" />
                <a href={`tel:${contactData.corporateOffice.telephone}`} className="hover:text-white">
                  {contactData.corporateOffice.telephone}
                </a>
              </div>
              
              <div className="pt-2 border-t border-[#145B8C]/40">
                <span className="text-[10px] font-mono-tech uppercase tracking-wider text-[#EF6C23] block">
                  Plant Address:
                </span>
                <p className="leading-snug">{contactData.plantFacility.streetAddress}</p>
                <p>{contactData.plantFacility.city}, {contactData.plantFacility.country}</p>
              </div>

              <div className="pt-1">
                <a
                  href={contactData.map.defaultSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1 text-[11px] text-[#F5B400] hover:text-white transition-colors"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3 ml-0.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Geographic Footprint & Interactive Google Map Section */}
        <div className="py-12 border-b border-[#145B8C]/40">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left Column (5 cols): Make in India Badge & Manufacturing Heritage */}
            <div className="lg:col-span-5 bg-[#071C33] rounded-xl p-6 sm:p-7 border border-[#145B8C] flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center space-x-2 text-[10px] font-mono-tech uppercase tracking-[0.25em] text-[#F5B400] font-bold">
                    <span className="w-2 h-2 rounded-full bg-[#EF6C23] animate-pulse" />
                    <span>NATIONAL INITIATIVE // ADVANCED METALLURGY</span>
                  </div>
                  <span className="text-[10px] font-mono-tech text-[#8E98A4]">ISO 9001:2015</span>
                </div>

                {/* Make in India Lion Image Card */}
                <div className="bg-white rounded-lg p-3 sm:p-4 border-2 border-[#EF6C23]/30 shadow-md flex items-center justify-center group overflow-hidden h-[105px] sm:h-[115px]">
                  <img
                    src="/assets/badges/make-in-india-lion.png"
                    alt="Make in India Official Lion Logo - Advanced Industrial Metallurgy"
                    className="max-h-full w-auto object-contain filter contrast-110 group-hover:scale-105 transition-transform duration-300"
                    loading="eager"
                  />
                </div>

                <div>
                  <h4 className="text-lg font-heading font-black text-white">
                    Engineered in India &bull; Deployed Globally
                  </h4>
                  <p className="mt-1 text-xs text-[#B8BEC5] leading-relaxed">
                    PROMETALLIK manufactures specialized tungsten powders, cobalt binders, and precision materials in India, delivering certified metallurgical integrity to European and worldwide industrial buyers.
                  </p>
                </div>
              </div>

              {/* Coordinates and Location Indicators */}
              <div className="pt-4 border-t border-[#145B8C]/60 grid grid-cols-2 gap-3 text-[11px] font-mono-tech">
                <div className="bg-[#0B2A4A] p-2.5 rounded border border-[#145B8C]/50">
                  <span className="text-[#8E98A4] block text-[9px] uppercase">Corporate HQ</span>
                  <span className="text-white font-bold">Kharagpur, Near IIT-Kharagpur Tea Garden</span>
                </div>
                <div className="bg-[#0B2A4A] p-2.5 rounded border border-[#145B8C]/50">
                  <span className="text-[#8E98A4] block text-[9px] uppercase">Plant Operations</span>
                  <span className="text-[#F5B400] font-bold">Kolkata / Kharagpur</span>
                </div>
              </div>
            </div>

            {/* Right Column (7 cols): Interactive Google Map */}
            <div className="lg:col-span-7 bg-[#071C33] rounded-xl p-6 sm:p-7 border border-[#145B8C] flex flex-col justify-between space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center space-x-2">
                  <div className="w-7 h-7 rounded bg-[#EF6C23] flex items-center justify-center text-white">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-heading font-black text-white uppercase tracking-wider">
                      PROMETALLIK Geographic Map — Kolkata, West Bengal
                    </h4>
                    <p className="text-[10px] font-mono-tech text-[#8E98A4]">
                      Kolkata Headquarters &amp; Industrial Operations Hub &bull; Direct Port Routes
                    </p>
                  </div>
                </div>

                <a
                  href="https://maps.google.com/?q=Kolkata,+West+Bengal,+India"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 px-3 py-1.5 bg-[#EF6C23] hover:bg-[#d85e19] text-white text-xs font-mono-tech uppercase tracking-wider rounded transition-colors shadow-xs self-start sm:self-auto"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Embedded Interactive Map Container */}
              <div
                className="relative w-full h-[220px] sm:h-[260px] rounded-lg overflow-hidden border border-[#145B8C] bg-[#071C33] shadow-inner group cursor-pointer"
                onClick={() => setMapInteractive(true)}
                onMouseLeave={() => setMapInteractive(false)}
              >
                <iframe
                  src="https://www.openstreetmap.org/export/embed.html?bbox=88.24%2C22.48%2C88.46%2C22.65&layer=mapnik&marker=22.5726%2C88.3639"
                  title="PROMETALLIK Kolkata Facilities &amp; Geographic Operations Map"
                  className={`w-full h-full border-0 filter contrast-105 brightness-95 transition-opacity ${
                    mapInteractive ? "pointer-events-auto" : "pointer-events-none"
                  }`}
                  loading="eager"
                />

                {/* Map Overlay Badge */}
                <div className="absolute bottom-3 left-3 bg-[#0B2A4A]/90 backdrop-blur-md px-3 py-1.5 rounded border border-[#EF6C23] text-[10px] font-mono-tech text-[#EEF0F2] flex items-center space-x-2 pointer-events-none z-10">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#EF6C23] animate-ping" />
                  <span>LAT: 22.5726° N &bull; LON: 88.3639° E (KOLKATA, WEST BENGAL)</span>
                </div>

                {!mapInteractive && (
                  <div className="absolute top-2 right-2 bg-[#0B2A4A]/80 backdrop-blur-xs px-2 py-1 rounded text-[9px] font-mono-tech text-[#B8BEC5] border border-[#145B8C]/60 pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity z-10">
                    Click map to pan/zoom
                  </div>
                )}
              </div>

              {/* Bottom Quick Directions / Telemetry Links */}
              <div className="flex flex-wrap items-center justify-between text-xs font-mono-tech text-[#8E98A4] pt-1">
                <span className="text-[#B8BEC5]">
                  Transport: Syama Prasad Mookerjee Port (Kolkata) &amp; Haldia Export Corridors
                </span>
                <a
                  href="https://maps.google.com/?q=Kolkata,+West+Bengal,+India"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#F5B400] hover:text-white transition-colors flex items-center space-x-1"
                >
                  <span>Directions via Google Maps &rarr;</span>
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Legal Bar & Credits */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-[#B8BEC5] space-y-4 md:space-y-0">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span>&copy; {new Date().getFullYear()} {siteContent.brand.legalName}. All rights reserved.</span>
            <span className="text-[11px] font-mono-tech text-[#F5B400]">[Exhibition Grade Specification]</span>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-1 font-mono-tech text-[11px]">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Use
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Sitemap
            </Link>
            <span className="text-[#8E98A4]">Website: [Exhibition Architecture]</span>
          </div>
        </div>
      </div>

      {/* =========================================================================
          MADE IN INDIA AND MSME FOOTER LOCK-UP
          The final visual line of the website must display:
          [Make in India logo] Proudly Made in India
          [MSME logo] MSME Registered
          Thin orange line above the badge area.
          White or light metallic footer background.
          Original proportions preserved, clear spacing, stacked neatly on mobile.
          ========================================================================= */}
      <div className="bg-[#FFFFFF] text-[#111111] border-t-2 border-[#EF6C23] py-5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-14">
          {/* Make in India Lock-Up with User-Provided Make In India Lion Image */}
          <div className="flex items-center space-x-4 group">
            <div className="h-12 sm:h-14 flex items-center justify-center">
              <img
                src="/assets/badges/make-in-india-lion.png"
                alt="Make in India Official Lion"
                className="h-11 sm:h-13 w-auto object-contain filter contrast-110 group-hover:scale-105 transition-transform duration-200"
                loading="eager"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xs sm:text-sm font-heading font-black uppercase tracking-wider text-[#0B2A4A]">
                Proudly Made in India
              </span>
              <span className="text-[10px] font-mono-tech text-[#596573] uppercase tracking-wider">
                Heavy Metallurgy &bull; Global Grade
              </span>
            </div>
          </div>

          {/* Divider on desktop */}
          <div className="hidden sm:block w-[1px] h-8 bg-[#D5DAE0]" />

          {/* MSME Lock-Up */}
          <div className="flex items-center space-x-3.5 group">
            <div className="h-10 sm:h-12 flex items-center justify-center">
              <img
                src="/assets/badges/msme.svg"
                alt="MSME Registered Official Seal"
                className="h-9 sm:h-11 w-auto object-contain group-hover:scale-105 transition-transform duration-200"
                loading="eager"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xs sm:text-sm font-heading font-black uppercase tracking-wider text-[#0B2A4A]">
                MSME Registered
              </span>
              <span className="text-[10px] font-mono-tech text-[#596573] uppercase tracking-wider">
                Government of India Enterprise
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
