"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { Product } from "@/data/products";

interface ModalContextType {
  isRfqOpen: boolean;
  selectedProductForRfq: string;
  openRfqModal: (productSlugOrName?: string) => void;
  closeRfqModal: () => void;
  isDocModalOpen: boolean;
  docModalData: {
    product: Product | null;
    docType: "COA" | "SDS";
  };
  openDocModal: (product: Product, docType: "COA" | "SDS") => void;
  closeDocModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isRfqOpen, setIsRfqOpen] = useState(false);
  const [selectedProductForRfq, setSelectedProductForRfq] = useState<string>("");

  const [isDocModalOpen, setIsDocModalOpen] = useState(false);
  const [docModalData, setDocModalData] = useState<{
    product: Product | null;
    docType: "COA" | "SDS";
  }>({
    product: null,
    docType: "COA",
  });

  const openRfqModal = (productSlugOrName?: string) => {
    setSelectedProductForRfq(productSlugOrName || "");
    setIsRfqOpen(true);
  };

  const closeRfqModal = () => {
    setIsRfqOpen(false);
  };

  const openDocModal = (product: Product, docType: "COA" | "SDS") => {
    setDocModalData({ product, docType });
    setIsDocModalOpen(true);
  };

  const closeDocModal = () => {
    setIsDocModalOpen(false);
  };

  return (
    <ModalContext.Provider
      value={{
        isRfqOpen,
        selectedProductForRfq,
        openRfqModal,
        closeRfqModal,
        isDocModalOpen,
        docModalData,
        openDocModal,
        closeDocModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
}
