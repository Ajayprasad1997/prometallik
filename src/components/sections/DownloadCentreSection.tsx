"use client";

import React, { useState } from "react";
import { downloadsData, DownloadItem } from "@/data/downloads";
import { FileText, Download, AlertCircle, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function DownloadCentreSection() {
  const [downloadNotice, setDownloadNotice] = useState<string | null>(null);

  const handleDownloadClick = (item: DownloadItem, e: React.MouseEvent) => {
    e.preventDefault();
    if (!item.isAvailable) {
      setDownloadNotice(`"${item.title}": ${item.statusLabel}`);
      setTimeout(() => setDownloadNotice(null), 4500);
    } else {
      window.open(item.path, "_blank");
    }
  };

  return (
    <section className="relative w-full bg-[#EEF0F2] text-[#111111] py-24 sm:py-32 overflow-hidden border-b border-[#D5DAE0]" id="technical-resources">
      {/* Background Subtle Industrial Grid */}
      <div className="absolute inset-0 bg-industrial-grid-light opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#D5DAE0]">
          <div>
            <div className="inline-flex items-center space-x-2 text-xs font-mono-tech uppercase tracking-[0.25em] text-[#0B2A4A] mb-3" data-aos="fade-up">
              <span className="w-5 h-[2px] bg-[#EF6C23]" />
              <span>OFFICIAL DOCUMENTATION</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-heading font-black tracking-tight text-[#0B2A4A] leading-[1.05]" data-aos="fade-up">
              Technical Resources
            </h2>
          </div>

          <p className="mt-4 md:mt-0 text-xs sm:text-sm text-[#596573] max-w-md font-sans" data-aos="fade-left">
            Download certified company profiles, full product catalogues, and analytical dossiers for internal procurement review.
          </p>
        </div>

        {/* Global Notice Toast if clicked */}
        {downloadNotice && (
          <div className="mb-8 p-4 bg-[#0B2A4A] text-white rounded-lg border-l-4 border-[#EF6C23] shadow-lg flex items-center justify-between animate-in fade-in duration-300">
            <div className="flex items-center space-x-3 text-xs font-mono-tech">
              <AlertCircle className="w-4 h-4 text-[#F5B400] shrink-0" />
              <span>{downloadNotice}</span>
            </div>
            <button
              onClick={() => setDownloadNotice(null)}
              className="text-[#B8BEC5] hover:text-white text-xs underline font-mono-tech ml-4"
            >
              Dismiss
            </button>
          </div>
        )}

        {/* 5 Download Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {downloadsData.map((doc, idx) => (
            <motion.div
              key={doc.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="bg-white rounded-lg p-6 border border-[#D5DAE0] hover:border-[#EF6C23] transition-all shadow-xs hover:shadow-md flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded bg-[#0B2A4A] text-white flex items-center justify-center group-hover:bg-[#EF6C23] transition-colors">
                    <FileText className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono-tech uppercase px-2 py-0.5 bg-[#EEF0F2] text-[#0B2A4A] rounded font-bold">
                    {doc.badge}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-heading font-black text-[#0B2A4A] group-hover:text-[#EF6C23] transition-colors leading-snug">
                    {doc.title}
                  </h3>
                  <p className="mt-2 text-xs text-[#2B333B] leading-relaxed">
                    {doc.description}
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-4 border-t border-[#D5DAE0] space-y-3">
                <div className="flex items-center justify-between text-[11px] font-mono-tech text-[#596573]">
                  <span>Format: <strong className="text-[#0B2A4A]">{doc.fileType}</strong></span>
                  <span>Size: {doc.fileSizePlaceholder}</span>
                </div>

                <button
                  onClick={(e) => handleDownloadClick(doc, e)}
                  className={`w-full py-2.5 rounded font-heading font-bold text-xs uppercase tracking-wider transition-all duration-200 flex items-center justify-center space-x-2 ${
                    doc.isAvailable
                      ? "bg-[#0B2A4A] hover:bg-[#145B8C] text-white shadow-xs"
                      : "bg-[#EEF0F2] hover:bg-[#0B2A4A] hover:text-white text-[#0B2A4A] border border-[#D5DAE0]"
                  }`}
                >
                  <Download className="w-3.5 h-3.5 text-[#EF6C23]" />
                  <span>{doc.isAvailable ? "Download Document" : "Request / Download"}</span>
                </button>

                {!doc.isAvailable && (
                  <div className="text-[10px] font-mono-tech text-[#596573] text-center truncate">
                    {doc.statusLabel}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
