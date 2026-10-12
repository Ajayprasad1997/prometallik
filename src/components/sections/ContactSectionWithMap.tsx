
"use client";

import React from "react";
import { contactData } from "@/data/contact";

import {
  Mail,
  Phone,
  Clock,
  MapPin,
  ExternalLink,
} from "lucide-react";

export default function ContactSectionWithMap() {

  // Facility information from contact data
  const facility = contactData.plantFacility;

  return (
    <section
      id="contact"
      className="
        relative
        w-full
        mt-[50px]
        bg-[#EEF0F2]
        text-[#111111]
        py-16
        sm:py-24
        lg:py-28
        overflow-hidden
        border-b
        border-[#D5DAE0]
      "
    >
      {/* Background Subtle Grid */}
      <div className="absolute inset-0 bg-industrial-grid-light opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* =====================================
            SECTION HEADER
        ===================================== */}

        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">

          <div className="inline-flex items-center justify-center gap-2 text-xs font-mono-tech uppercase tracking-[0.25em] text-[#0B2A4A] mb-4" data-aos="fade-up">

            <span className="w-5 h-[2px] bg-[#EF6C23]" />

            <span>COMMERCIAL &amp; PLANT LOCATIONS</span>

          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black tracking-tight text-[#0B2A4A] leading-[1.08]" data-aos="fade-up">

            Contact PROMETALLIK

          </h2>

          <p className="mt-5 text-sm sm:text-base text-[#596573] font-sans leading-relaxed" data-aos="fade-up">

            Reach our administrative headquarters or schedule a technical
            audit at our metallurgical manufacturing facility.

          </p>

        </div>

        {/* =====================================
            CONTACT INFORMATION CARD
        ===================================== */}

        <div
          className="
            relative
            bg-white
            border
            border-[#D5DAE0]
            border-t-4
            border-t-[#145B8C]
            rounded-xl
            p-5
            sm:p-8
            lg:p-10
            shadow-lg
            overflow-hidden
          "
        data-aos="fade-up">

          {/* Decorative Background */}

          <div className="absolute top-0 right-0 w-32 h-32 bg-blueprint-pattern opacity-30 pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

            {/* =====================================
                LEFT COLUMN: FACILITY DETAILS
            ===================================== */}

            <div className="lg:col-span-8 space-y-5 min-w-0">

              {/* Label */}

              <div className="inline-flex items-center gap-2 text-xs font-mono-tech uppercase tracking-wider text-[#EF6C23] font-bold">

                <MapPin className="w-4 h-4 shrink-0" />

                <span>OFFICIAL PLANT SPECIFICATION</span>

              </div>

              {/* Facility Name */}

              <h3 className="text-2xl sm:text-3xl font-heading font-black text-[#0B2A4A] leading-tight">

                {facility.name}

              </h3>

              {/* Address + Contact Grid */}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 sm:gap-8 pt-3 text-sm text-[#2B333B]">

                {/* =====================================
                    PHYSICAL ADDRESS
                ===================================== */}

                <div className="space-y-2">

                  <span className="text-[11px] font-mono-tech uppercase tracking-wider text-[#596573] block font-bold">

                    Plant Physical Address

                  </span>

                  <div className="space-y-1">

                    <p className="font-semibold text-[#111111] leading-relaxed">

                      {facility.streetAddress}

                    </p>

                    <p>

                      {facility.city}, {facility.state}

                    </p>

                    <p>

                      PIN Code: {facility.pinCode}

                    </p>

                    <p className="font-bold text-[#0B2A4A]">

                      {facility.country}

                    </p>

                  </div>

                </div>

                {/* =====================================
                    CONTACT INFORMATION
                ===================================== */}

                <div className="space-y-5 min-w-0">

                  {/* Operations Contact */}

                  <div className="space-y-2">

                    <span className="text-[11px] font-mono-tech uppercase tracking-wider text-[#596573] block font-bold">

                      Operations Contact

                    </span>

                    {/* Telephone */}

                    <a
                      href={`tel:${facility.telephone.replace(/[^\d+]/g, "")}`}
                      className="flex items-start gap-2 text-[#111111] hover:text-[#EF6C23] transition-colors"
                    >

                      <Phone className="w-4 h-4 text-[#EF6C23] shrink-0 mt-0.5" />

                      <span className="font-semibold">

                        {facility.telephone}

                      </span>

                    </a>

                    {/* Email */}

                    <a
                      href={`mailto:${facility.email}`}
                      className="flex items-start gap-2 text-[#111111] hover:text-[#EF6C23] transition-colors min-w-0"
                    >

                      <Mail className="w-4 h-4 text-[#EF6C23] shrink-0 mt-0.5" />

                      <span className="break-all">

                        {facility.email}

                      </span>

                    </a>

                  </div>

                  {/* =====================================
                      OPERATING HOURS
                  ===================================== */}

                  <div className="space-y-2">

                    <span className="text-[11px] font-mono-tech uppercase tracking-wider text-[#596573] block font-bold">

                      Operating Hours

                    </span>

                    <div className="flex items-start gap-2 text-[#111111]">

                      <Clock className="w-4 h-4 text-[#EF6C23] shrink-0 mt-0.5" />

                      <span className="text-sm leading-relaxed">

                        {facility.businessHours}

                      </span>

                    </div>

                  </div>

                </div>

              </div>

            </div>

            {/* =====================================
                RIGHT COLUMN: GOOGLE MAPS
            ===================================== */}

{/* RIGHT COLUMN: GOOGLE MAPS */}

<div className="lg:col-span-4 min-w-0 border-t lg:border-t-0 border-[#D5DAE0] pt-7 lg:pt-0">
  <div className="overflow-hidden rounded-xl border border-[#D5DAE0] bg-white shadow-md">
    
    {/* Map Header */}
    <div className="flex items-center gap-2 bg-[#0B2A4A] px-4 py-3">
      <MapPin className="h-4 w-4 shrink-0 text-[#EF6C23]" />

      <span className="text-xs font-bold uppercase tracking-wider text-white">
        Plant Location
      </span>
    </div>

    {/* Google Maps Embed */}
    <iframe
      title="PROMETALLIK Manufacturing Plant Location"
      src={`https://maps.google.com/maps?q=${encodeURIComponent(
        "Village Gopali, PO Salua, PS Kharagpur, Near IIT Kharagpur Tea Garden, Paschim Medinipur, West Bengal 721145, India"
      )}&output=embed`}
      width="100%"
      height="320"
      style={{ border: 0 }}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      allowFullScreen
      className="block w-full"
    />

    {/* Open Map Link */}
    <a
      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        "Village Gopali, PO Salua, PS Kharagpur, Near IIT Kharagpur Tea Garden, Paschim Medinipur, West Bengal 721145, India"
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      className="flex w-full items-center justify-center gap-2 bg-white px-4 py-4 text-xs font-bold uppercase tracking-wider text-[#0B2A4A] transition-colors hover:bg-[#F3F6F8] hover:text-[#EF6C23]"
    >
      <MapPin className="h-4 w-4 text-[#EF6C23]" />

      <span>Open in Google Maps</span>

      <ExternalLink className="h-4 w-4" />
    </a>
  </div>

  <p className="mt-3 text-xs leading-relaxed text-[#596573]">
    Village - Gopali, PO - Salua, PS - Kharagpur,
    Paschim Medinipur, West Bengal - 721145, India.
  </p>
</div>


          </div>

        </div>

      </div>

    </section>
  );
}
