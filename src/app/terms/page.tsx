import React from "react";
import Link from "next/link";
import { siteConfig } from "@/data/site-config";
import { MANDATORY_DISCLAIMER } from "@/data/products";
import { ChevronRight, FileCheck, AlertTriangle } from "lucide-react";

export const metadata = {
  title: "General Terms of Industrial Supply | PROMETALLIK",
  description:
    "Terms and conditions governing material specification confirmations, commercial contracts, and international metallurgy delivery.",
};

export default function TermsPage() {
  return (
    <div className="w-full flex flex-col bg-[#080808] text-white">
      {/* Header */}
      <section className="pt-36 pb-16 bg-[#0c0c0c] border-b border-[#222222]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-xs font-mono-tech text-[#A7ADB2] mb-4">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#4A4F54]" />
            <span className="text-[#F36C21]">Terms of Supply</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-heading font-black text-white uppercase tracking-tight">
            Terms of Industrial Material Supply
          </h1>
          <p className="mt-4 text-xs font-mono-tech text-[#A7ADB2]">
            Standard Conditions of Sale &middot; Commercial &amp; Metallurgical Delivery
          </p>
        </div>
      </section>

      {/* Terms Body */}
      <section className="py-16 bg-[#080808]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-xs sm:text-sm text-[#D9DDE0] leading-relaxed font-sans">
          {/* Mandatory Specification Clause Alert */}
          <div className="p-5 bg-[#141414] border-l-2 border-[#F36C21] font-mono-tech text-xs space-y-2">
            <div className="flex items-center space-x-2 text-[#F36C21] font-bold uppercase">
              <AlertTriangle className="w-4 h-4" />
              <span>Mandatory Specification Clause</span>
            </div>
            <p className="text-[#A7ADB2] leading-relaxed">
              {MANDATORY_DISCLAIMER}
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-heading font-bold text-white uppercase tracking-wider text-[#F36C21]">
              1. Scope &amp; Legal Framework
            </h2>
            <p>
              These General Terms of Supply apply to all commercial transactions, quotation appraisals, and material deliveries executed by <strong className="text-white">{siteConfig.legalEntity}</strong>. Conflicting or deviating terms of the purchaser shall not apply unless explicitly agreed to in writing by our corporate executive directorate in Düsseldorf.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-heading font-bold text-white uppercase tracking-wider text-[#F36C21]">
              2. Quotation Validity &amp; Metal Market Escalation
            </h2>
            <p>
              Given market volatility in international refractory metal markets (including Fastmarkets, LME, and Asian Metal benchmark quotations for Ammonium Para Tungstate and Cobalt), quotations remain firm for 5 business days unless otherwise stipulated in the formal Proforma Invoice.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-heading font-bold text-white uppercase tracking-wider text-[#F36C21]">
              3. Analytical Testing &amp; Inspection Protocols
            </h2>
            <p>
              Material assays, particle size distributions (PSD), and chemical trace profiles are certified in accordance with DIN EN ISO/IEC 17025 accredited procedures at our Duisburg laboratory. Customer-specified umpire testing shall be conducted by an agreed European accredited testing body (such as BAM Berlin or Alfred H. Knight).
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-heading font-bold text-white uppercase tracking-wider text-[#F36C21]">
              4. Packaging, Transit &amp; Hazardous Material Compliance
            </h2>
            <p>
              Powders classified under hazardous goods regulations (e.g., UN 3089 for reactive metal powders, UN 1418 for magnesium powders, UN 3077 for cobalt compounds) are packaged exclusively in UN-certified steel containers with argon/nitrogen inert blanketing. The buyer is responsible for handling in full compliance with local ATEX and hazardous substances regulations upon discharge.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-heading font-bold text-white uppercase tracking-wider text-[#F36C21]">
              5. Incoterms &amp; Jurisdiction
            </h2>
            <p>
              Deliveries are governed by Incoterms® 2020 (typically EXW Duisburg, FOB Hamburg/Rotterdam, or CIF designated port). All contracts shall be governed exclusively by the laws of the Federal Republic of Germany, with the place of jurisdiction being Düsseldorf, Germany.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
