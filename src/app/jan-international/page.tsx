import React from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site-config";
import FinalCtaSection from "@/components/sections/FinalCtaSection";
import {
  Globe2,
  Building2,
  Truck,
  Ship,
  ShieldCheck,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
} from "lucide-react";

export const metadata = {
  title: `${siteConfig.associateCompany.displayName} — Strategic Associate & Global Distribution Partner | PROMETALLIK`,
  description:
    "Integrated distribution, maritime logistics, and strategic sourcing architecture for European and international industrial metal corridors.",
};

export default function JanInternationalPage() {
  const partner = siteConfig.associateCompany;

  const partnerCapabilities = [
    {
      title: "Transatlantic & Eurasian Freight Corridors",
      description: "Dedicated bulk and containerized sea freight agreements connecting Rotterdam, Antwerp, Hamburg, and Asian maritime trade gateways.",
    },
    {
      title: "Customs Clearance & Strategic Stockholding",
      description: "Bonded warehouse facilities in Antwerp and Rotterdam offering consignment stock buffering for European manufacturing clients.",
    },
    {
      title: "Regulatory Trade Compliance & Dual-Use Clearance",
      description: "Comprehensive end-user certificate (EUC) verification and EU dual-use export authorization management for sensitive refractory metals.",
    },
    {
      title: "Secondary Raw Material Sourcing Architecture",
      description: "Direct contractual relationships with audited mineral concentrate producers and closed-loop scrap collection syndicates worldwide.",
    },
  ];

  return (
    <div className="w-full flex flex-col bg-[#080808] text-white">
      {/* Hero */}
      <section className="relative w-full min-h-[50vh] flex items-center justify-center pt-36 pb-20 bg-[#080808] border-b border-[#222222] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/materials/drums-export-dispatch.jpg"
            alt="International maritime logistics and global supply chain"
            fill
            priority
            className="object-cover object-center filter contrast-125 brightness-[0.3]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-black/80 to-transparent" />
          <div className="absolute inset-0 bg-industrial-grid opacity-20 pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 text-xs font-mono-tech uppercase tracking-[0.25em] text-[#F36C21] mb-4">
              <span className="w-6 h-[2px] bg-[#F36C21]" />
              <span>Associate Enterprise &middot; Strategic Partner</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-heading font-black tracking-tight text-white uppercase leading-tight">
              {partner.displayName}. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F36C21] to-[#D9DDE0]">
                GLOBAL DISTRIBUTION ARM.
              </span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-[#D9DDE0] leading-relaxed">
              {partner.description}
            </p>
          </div>
        </div>
      </section>

      {/* Strategic Relationship Section */}
      <section className="py-24 bg-[#0c0c0c] border-b border-[#222222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-mono-tech uppercase tracking-[0.25em] text-[#F36C21]">
                Corporate Relationship &amp; Synergies
              </span>
              <h2 className="text-3xl sm:text-5xl font-heading font-black tracking-tight text-white uppercase leading-tight">
                Integrated Supply Architecture.
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-[#D9DDE0] leading-relaxed font-sans">
                <p>
                  While PROMETALLIK focuses on pyrometallurgical refining, stoichiometric synthesis, and laboratory qualification in Germany, <strong className="text-white">{partner.displayName}</strong> operates as our integrated global distribution and strategic commodity sourcing partner.
                </p>
                <p>
                  This collaboration guarantees that international industrial clients benefit from both German precision manufacturing and agile transatlantic logistics corridors, multi-currency hedging, and regional bonded stock access.
                </p>
              </div>

              <div className="pt-2 font-mono-tech text-xs space-y-2">
                <div className="p-3 bg-[#141414] border-l-2 border-[#F36C21] text-white flex items-center space-x-2">
                  <Building2 className="w-4 h-4 text-[#F36C21]" />
                  <span>Strategic Partner Entity: {partner.legalName}</span>
                </div>
                <div className="p-3 bg-[#141414] border-l-2 border-[#F36C21] text-white flex items-center space-x-2">
                  <Ship className="w-4 h-4 text-[#F36C21]" />
                  <span>Logistics Nexus: Trimodal Duisburg Port &amp; Rotterdam Deepwater Terminal</span>
                </div>
              </div>
            </div>

            {/* Quick Fact Box */}
            <div className="lg:col-span-5 bg-[#141414] p-8 border border-[#262626] shadow-xl space-y-6">
              <div className="text-xs font-mono-tech text-[#F36C21] uppercase tracking-wider">
                PARTNER CAPABILITY SUMMARY
              </div>
              <div className="space-y-4 font-mono-tech text-xs divide-y divide-[#222222]">
                <div className="pt-2 flex justify-between">
                  <span className="text-[#A7ADB2]">Core Role:</span>
                  <span className="text-white font-bold">{partner.relationship}</span>
                </div>
                <div className="pt-2 flex justify-between">
                  <span className="text-[#A7ADB2]">Jurisdiction:</span>
                  <span className="text-white font-bold">European &amp; International Trade</span>
                </div>
                <div className="pt-2 flex justify-between">
                  <span className="text-[#A7ADB2]">Commodity Focus:</span>
                  <span className="text-white font-bold">Refractory Metals, Alloys &amp; Salts</span>
                </div>
                <div className="pt-2 flex justify-between">
                  <span className="text-[#A7ADB2]">Warehouse Hubs:</span>
                  <span className="text-white font-bold">Duisburg, Antwerp, Rotterdam</span>
                </div>
              </div>
              <div className="text-[11px] text-[#777777] font-mono-tech leading-relaxed pt-2">
                * Central configuration variable: Entity name is centrally managed and customizable to &ldquo;JAIN International&rdquo; upon final client corporate alignment.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Core Capabilities */}
      <section className="py-24 bg-[#111111] border-b border-[#222222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14 pb-4 border-b border-[#222222]">
            <span className="text-xs font-mono-tech uppercase tracking-[0.25em] text-[#F36C21] block mb-2">
              Logistics &amp; Sourcing Footprint
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-black tracking-tight text-white uppercase">
              Global Distribution Operations.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partnerCapabilities.map((item, idx) => (
              <div
                key={idx}
                className="p-6 bg-[#161616] border border-[#262626] hover:border-[#F36C21] transition-all space-y-3"
              >
                <div className="flex items-center justify-between text-xs font-mono-tech text-[#F36C21]">
                  <span>CAPABILITY 0{idx + 1}</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-[#F36C21]" />
                </div>
                <h3 className="text-lg font-heading font-extrabold text-white">
                  {item.title}
                </h3>
                <p className="text-xs text-[#A7ADB2] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Direct Partner Action CTA */}
          <div className="mt-14 p-8 bg-[#171717] border border-[#292929] flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-xl font-heading font-bold text-white">
                Initiate Transatlantic or Asian Supply Inquiries
              </h4>
              <p className="text-xs text-[#A7ADB2] mt-1">
                Reach our joint commercial coordination desk for contract terms, consignment buffer setups, or container forwarding.
              </p>
            </div>
            <Link
              href="/contact"
              className="bg-[#F36C21] hover:bg-[#FF7A1A] text-[#080808] font-heading font-black text-xs uppercase px-7 py-3.5 tracking-wider transition-colors shrink-0"
            >
              Contact Joint Logistics Desk
            </Link>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <FinalCtaSection />
    </div>
  );
}
