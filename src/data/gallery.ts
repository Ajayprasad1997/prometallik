export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  location: string;
  technicalCaption: string;
  imageUrl: string;
  aspectRatio: "square" | "landscape" | "tall";
}

export const exhibitionGalleryItems: GalleryItem[] = [
  {
    id: "gal-01",
    title: "High-Temperature Electric Arc Furnace Tapping",
    category: "Molten Metallurgy",
    location: "Ruhr Pyrometallurgical Works, Duisburg",
    technicalCaption: "Tapping liquid metal at 1620°C with automated lance oxygen monitoring.",
    imageUrl: "/images/materials/blast-furnace-molten.jpg",
    aspectRatio: "landscape",
  },
  {
    id: "gal-02",
    title: "Beneficiated Magnetite & Tungsten Ore Extraction",
    category: "Raw Material",
    location: "Scheelite & Wolframite Extraction Corridor",
    technicalCaption: "High-assay ore concentrate undergoing dense medium separation.",
    imageUrl: "/images/materials/tungsten-mineral-ore.jpg",
    aspectRatio: "square",
  },
  {
    id: "gal-03",
    title: "Hydrometallurgical Digestion & Autoclave Units",
    category: "Heavy Plant",
    location: "Duisburg Industrial Chemical Complex",
    technicalCaption: "High-pressure stainless steel reactors digesting mineral pulp at 24 bar.",
    imageUrl: "/images/materials/autoclave-digestion.jpg",
    aspectRatio: "landscape",
  },
  {
    id: "gal-04",
    title: "Refined Tungsten Carbide & Sintered Inserts",
    category: "Metal Powders",
    location: "Advanced Powder Metallurgy Facility",
    technicalCaption: "Spherical carbide granules and sintered indexable CNC milling inserts.",
    imageUrl: "/images/materials/wc-carbide-powder.jpg",
    aspectRatio: "tall",
  },
  {
    id: "gal-05",
    title: "Field Emission Scanning Electron Microscopy (SEM)",
    category: "Laboratory",
    location: "Materials Characterization Laboratory",
    technicalCaption: "High-resolution 50,000x microstructural analysis verifying crystal boundaries.",
    imageUrl: "/images/materials/lab-sem-microscopy.jpg",
    aspectRatio: "landscape",
  },
  {
    id: "gal-06",
    title: "Argon-Purged UN Steel Drums with Tamper Seals",
    category: "Packaging & Logistics",
    location: "Automated Dispatch Terminal",
    technicalCaption: "Hermetically sealed 50kg steel containers prepared for overseas intermodal shipment.",
    imageUrl: "/images/materials/drums-export-dispatch.jpg",
    aspectRatio: "square",
  },
  {
    id: "gal-07",
    title: "Pure Tungsten Trioxide (WO3) Chemical Calcination",
    category: "Processing",
    location: "Pyrochemical Reduction Plant",
    technicalCaption: "Stoichiometric yellow oxide powder undergoing analytical purity assay.",
    imageUrl: "/images/materials/wo3-yellow-oxide.jpg",
    aspectRatio: "landscape",
  },
  {
    id: "gal-08",
    title: "5-Axis High-Speed Machining of Turbine Disc",
    category: "Precision Engineering",
    location: "Aerospace Precision Tooling Lab",
    technicalCaption: "Solid carbide tooling delivering sub-5-micron tolerances on aerospace components.",
    imageUrl: "/images/materials/cnc-aerospace-tooling.jpg",
    aspectRatio: "tall",
  },
];
