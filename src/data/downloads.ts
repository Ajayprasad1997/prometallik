export interface DownloadItem {
  id: string;
  title: string;
  description: string;
  fileType: "PDF" | "DOCX";
  fileSizePlaceholder: string;
  path: string;
  isAvailable: boolean;
  statusLabel: string;
  badge: string;
}

export const downloadsData: DownloadItem[] = [
  {
    id: "dl-company-profile",
    title: "Company Profile",
    description: "Overview of PROMETALLIK's corporate background, manufacturing philosophy, infrastructure, and commercial capabilities.",
    fileType: "PDF",
    fileSizePlaceholder: "approx. 4.2 MB",
    path: "/assets/pdfs/company-profile.pdf",
    isAvailable: false,
    statusLabel: "Document will be available shortly",
    badge: "Corporate",
  },
  {
    id: "dl-product-catalogue",
    title: "Product Catalogue",
    description: "Complete technical compendium covering all 12 tungsten, cobalt, and magnesium product formulations and packaging options.",
    fileType: "PDF",
    fileSizePlaceholder: "approx. 8.6 MB",
    path: "/assets/pdfs/product-catalogue.pdf",
    isAvailable: false,
    statusLabel: "Document will be available shortly",
    badge: "Full Portfolio",
  },
  {
    id: "dl-technical-datasheet",
    title: "Technical Datasheet",
    description: "Standard physical specifications, typical chemical assay tolerances, FSSS distributions, and storage recommendations.",
    fileType: "PDF",
    fileSizePlaceholder: "approx. 2.8 MB",
    path: "/assets/pdfs/technical-datasheet.pdf",
    isAvailable: false,
    statusLabel: "Document will be available shortly",
    badge: "Technical",
  },
  {
    id: "dl-certifications",
    title: "Certifications & Compliance Dossier",
    description: "Certified documentation covering quality management system credentials, analytical lab validation, and statutory compliance.",
    fileType: "PDF",
    fileSizePlaceholder: "approx. 3.1 MB",
    path: "/assets/pdfs/certifications.pdf",
    isAvailable: false,
    statusLabel: "Document will be available shortly",
    badge: "Compliance",
  },
  {
    id: "dl-corporate-brochure",
    title: "Corporate Brochure",
    description: "Executive summary brochure designed specifically for international industrial procurement teams and trade exhibitions.",
    fileType: "PDF",
    fileSizePlaceholder: "approx. 5.4 MB",
    path: "/assets/pdfs/corporate-brochure.pdf",
    isAvailable: false,
    statusLabel: "Document will be available shortly",
    badge: "Exhibition",
  },
];
