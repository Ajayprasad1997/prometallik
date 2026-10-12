"use client";

import React from "react";
import { useModal } from "@/context/ModalContext";
import { X, Download, ShieldCheck, AlertTriangle, FileCheck2, Printer } from "lucide-react";

export default function SampleDocumentModal() {
  const { isDocModalOpen, closeDocModal, docModalData } = useModal();
  const { product, docType } = docModalData;

  if (!isDocModalOpen || !product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white border border-[#D5DAE0] text-[#111111] rounded-xl shadow-2xl overflow-hidden my-auto">
        {/* Top Accent Strip */}
        <div className="h-1.5 bg-[#EF6C23]" />

        {/* Modal Header */}
        <div className="px-6 py-4 bg-[#EEF0F2] border-b border-[#D5DAE0] flex items-center justify-between">
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded bg-[#0B2A4A] flex items-center justify-center text-[#EF6C23]">
              <FileCheck2 className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-[10px] font-mono-tech uppercase tracking-wider text-[#EF6C23] font-bold">
                  {docType === "COA" ? "Certificate of Analysis (COA)" : "Safety Data Sheet (SDS)"}
                </span>
                <span className="text-[9px] font-mono-tech uppercase bg-white border border-[#D5DAE0] px-1.5 py-0.5 text-[#596573] rounded">
                  Analytical Demo
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-heading font-black text-[#0B2A4A]">
                {product.name} &middot; {product.chemicalFormula}
              </h3>
            </div>
          </div>

          <button
            onClick={closeDocModal}
            className="p-1.5 text-[#596573] hover:text-[#111111] hover:bg-[#D5DAE0] rounded transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 max-h-[75vh] overflow-y-auto space-y-6 text-xs text-[#2B333B]">
          {/* Demonstration Notice */}
          <div className="p-3 bg-[#EEF0F2] border-l-3 border-[#EF6C23] rounded flex items-start space-x-2 text-[11px] text-[#596573]">
            <AlertTriangle className="w-4 h-4 text-[#EF6C23] shrink-0 mt-0.5" />
            <div>
              <span className="text-[#111111] font-bold">Analytical Verification Notice:</span> Final lot analysis, certified limits, testing protocols, and packaging configurations are certified per official client dispatch.
            </div>
          </div>

          {docType === "COA" ? (
            /* COA View */
            <div className="space-y-4 font-mono-tech">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-3 bg-[#EEF0F2] rounded border border-[#D5DAE0]">
                <div>
                  <span className="text-[#596573] text-[10px] block">Batch Number</span>
                  <span className="text-[#0B2A4A] font-bold">{product.sampleCOA.batchNumber}</span>
                </div>
                <div>
                  <span className="text-[#596573] text-[10px] block">Manufacturing Date</span>
                  <span className="text-[#0B2A4A] font-bold">{product.sampleCOA.manufacturingDate}</span>
                </div>
                <div>
                  <span className="text-[#596573] text-[10px] block">Testing Protocol</span>
                  <span className="text-[#0B2A4A] font-bold">{product.sampleCOA.testingMethod}</span>
                </div>
                <div>
                  <span className="text-[#596573] text-[10px] block">Lot Purity Assay</span>
                  <span className="text-[#EF6C23] font-bold">{product.sampleCOA.lotPurity}</span>
                </div>
                <div>
                  <span className="text-[#596573] text-[10px] block">Fisher FSSS / D50</span>
                  <span className="text-[#0B2A4A] font-bold">{product.sampleCOA.fsssNumber}</span>
                </div>
                <div>
                  <span className="text-[#596573] text-[10px] block">Inspection Status</span>
                  <span className="text-emerald-700 font-bold">PASSED / CONFORMING</span>
                </div>
              </div>

              {/* Impurities Table */}
              <div>
                <h4 className="text-xs font-heading font-black text-[#0B2A4A] mb-2 uppercase tracking-wider">
                  Spectroscopic Trace Impurity Profile (ICP-OES)
                </h4>
                <div className="border border-[#D5DAE0] rounded overflow-hidden">
                  <table className="w-full text-left text-[11px]">
                    <thead className="bg-[#EEF0F2] text-[#0B2A4A] border-b border-[#D5DAE0]">
                      <tr>
                        <th className="py-1.5 px-3">Analyzed Element</th>
                        <th className="py-1.5 px-3">Measured Assay</th>
                        <th className="py-1.5 px-3">Guaranteed Ceiling</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#D5DAE0] bg-white">
                      {product.sampleCOA.impurityLevels.map((imp, idx) => (
                        <tr key={idx} className="hover:bg-[#EEF0F2]">
                          <td className="py-1.5 px-3 font-semibold text-[#0B2A4A]">{imp.element}</td>
                          <td className="py-1.5 px-3 text-[#111111]">
                            {imp.value} {imp.unit}
                          </td>
                          <td className="py-1.5 px-3 text-[#596573]">Within DIN Tolerances</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          ) : (
            /* SDS View */
            <div className="space-y-4 font-mono-tech">
              <div className="p-3 bg-[#EEF0F2] rounded border border-[#D5DAE0] space-y-2">
                <div className="flex justify-between">
                  <span className="text-[#596573]">UN Transport Number:</span>
                  <span className="text-[#0B2A4A] font-bold">{product.sampleSDS.unNumber}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#596573]">GHS Hazard Classification:</span>
                  <span className="text-[#0B2A4A] font-bold">{product.sampleSDS.hazardClassification}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#596573]">Signal Word:</span>
                  <span className="text-[#EF6C23] font-bold">{product.sampleSDS.signalWord}</span>
                </div>
              </div>

              <div className="p-3 bg-white rounded border border-[#D5DAE0]">
                <h5 className="font-bold text-[#0B2A4A] mb-1">Industrial Handling Precautions</h5>
                <p className="text-xs text-[#596573] leading-relaxed">
                  {product.sampleSDS.handlingPrecaution}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3.5 bg-[#EEF0F2] border-t border-[#D5DAE0] flex items-center justify-between">
          <span className="text-[10px] font-mono-tech text-[#596573]">
            PROMETALLIK Analytical Laboratory Services
          </span>
          <button
            onClick={closeDocModal}
            className="px-4 py-1.5 bg-[#0B2A4A] text-white text-xs font-heading font-bold uppercase tracking-wider rounded"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
