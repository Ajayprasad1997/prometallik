import React from "react";
import Link from "next/link";
import { siteConfig } from "@/data/site-config";
import { ShieldCheck, ChevronRight, Lock } from "lucide-react";

export const metadata = {
  title: "Privacy Policy & GDPR Compliance | PROMETALLIK",
  description:
    "Data privacy and confidentiality protocols for industrial clients and technical specifications submitted to PROMETALLIK.",
};

export default function PrivacyPolicyPage() {
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
            <span className="text-[#F36C21]">Privacy Policy</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-heading font-black text-white uppercase tracking-tight">
            Data Protection &amp; GDPR Governance
          </h1>
          <p className="mt-4 text-xs font-mono-tech text-[#A7ADB2]">
            Effective Date: October 2026 &middot; Compliant with Regulation (EU) 2016/679 (GDPR)
          </p>
        </div>
      </section>

      {/* Policy Text */}
      <section className="py-16 bg-[#080808]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-xs sm:text-sm text-[#D9DDE0] leading-relaxed font-sans">
          <div className="space-y-3">
            <h2 className="text-lg font-heading font-bold text-white uppercase tracking-wider text-[#F36C21]">
              1. Data Controller Identification
            </h2>
            <p>
              The data controller responsible for processing data on this website is: <br />
              <strong className="text-white">{siteConfig.legalEntity}</strong> <br />
              {siteConfig.contact.headquarters.address}, {siteConfig.contact.headquarters.postalCode}{" "}
              {siteConfig.contact.headquarters.city}, {siteConfig.contact.headquarters.country} <br />
              Email: {siteConfig.contact.email}
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-heading font-bold text-white uppercase tracking-wider text-[#F36C21]">
              2. Processing of Technical Specifications &amp; RFQ Data
            </h2>
            <p>
              When you submit a Request for Quotation (RFQ), commercial inquiry, or upload technical drawings/drawings:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-[#A7ADB2]">
              <li>We collect your name, corporate identity, business phone, email, and stated destination.</li>
              <li>We process technical parameters including chemical purity thresholds, grain size requirements, and intended industrial applications.</li>
              <li>This data is processed solely under Article 6(1)(b) GDPR for the pre-contractual assessment of material manufacturability and commercial quotation.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-heading font-bold text-white uppercase tracking-wider text-[#F36C21]">
              3. Strict Industrial Confidentiality &amp; Proprietary Rights
            </h2>
            <p>
              Technical drawings (.STEP, .DWG, .PDF) and proprietary material specifications submitted to PROMETALLIK are treated as strictly confidential trade secrets. They are never transferred, licensed, or shared with third parties outside authorized production engineers and metallurgical auditors.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-heading font-bold text-white uppercase tracking-wider text-[#F36C21]">
              4. Data Retention &amp; Security Measures
            </h2>
            <p>
              Commercial inquiries are archived for up to 36 months to maintain lot traceability in correspondence with production batch archives. We implement TLS 1.3 encryption, role-based access restrictions, and secure on-premise servers located in Germany.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-heading font-bold text-white uppercase tracking-wider text-[#F36C21]">
              5. Your Rights as a Data Subject
            </h2>
            <p>
              Under European GDPR, you have the right to request access to, rectification of, or erasure of your personal data at any time. You may also object to processing or request data portability by contacting our data protection desk at{" "}
              <a href={`mailto:${siteConfig.contact.email}`} className="text-[#F36C21] underline">
                {siteConfig.contact.email}
              </a>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
