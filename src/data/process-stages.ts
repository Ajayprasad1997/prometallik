export interface ProcessStage {
  id: string;
  stepNumber: string;
  title: string;
  subtitle: string;
  shortDescription: string;
  technicalDetails: string[];
  imageUrl: string;
  imageAlt: string;
  roughness: "rough" | "intermediate" | "refined" | "precision";
  bgColor: string;
}

export const rawMaterialJourney: ProcessStage[] = [
  {
    id: "stage-01",
    stepNumber: "01",
    title: "Raw Ore & Mineral Extraction",
    subtitle: "Deep-crust geological extraction & mineral beneficiation",
    shortDescription:
      "High-grade hematite, scheelite, and wolframite concentrates are extracted, crushed, and magnetic-separated to eliminate gangue silicate minerals.",
    technicalDetails: [
      "Initial WO₃ content: 65% – 72% in raw concentrate",
      "Dense medium separation (DMS) and multi-stage froth flotation",
      "Feedstock moisture content monitored to < 0.5%",
      "Complete geochemical provenance logging",
    ],
    imageUrl: "/images/materials/tungsten-mineral-ore.jpg",
    imageAlt: "Raw tungsten ore and wolframite crystal concentrate on industrial conveyor",
    roughness: "rough",
    bgColor: "#080808",
  },
  {
    id: "stage-02",
    stepNumber: "02",
    title: "Hydrometallurgical Digestion",
    subtitle: "Pressure leaching, ion exchange & chemical refining",
    shortDescription:
      "Milled mineral pulp undergoes high-pressure caustic leaching at 220°C, followed by selective ion-exchange extraction to isolate tungstate ions at > 99.9% ionic selectivity.",
    technicalDetails: [
      "Autoclave pressure leaching: 18 – 24 bar",
      "Multi-stage liquid-liquid solvent extraction & ion-exchange columns",
      "Quantitative elimination of molybdenum, arsenic, and phosphorus",
      "Crystallization of Ammonium Para Tungstate (APT) precursor",
    ],
    imageUrl: "/images/materials/autoclave-digestion.jpg",
    imageAlt: "Industrial chemical digestion reactors and hydrometallurgical autoclaves",
    roughness: "rough",
    bgColor: "#141414",
  },
  {
    id: "stage-03",
    stepNumber: "03",
    title: "Thermal Calcination & Oxide Formation",
    subtitle: "Rotary kiln thermal conversion to WO₃ and Blue Oxides",
    shortDescription:
      "Crystalline APT undergoes controlled calcination in direct-fired rotary kilns to produce stoichiometric Yellow Tungsten Oxide (WO₃) or sub-stoichiometric Blue Oxide (TBO).",
    technicalDetails: [
      "Continuous rotary kiln operating temperature: 500°C – 800°C",
      "Gas phase control: Counter-current air or weakly reducing atmosphere",
      "Crucial control over specific surface area (BET: 3.5 – 5.5 m²/g)",
      "Zero alkali residue through continuous thermal volatilization",
    ],
    imageUrl: "/images/materials/wo3-yellow-oxide.jpg",
    imageAlt: "High-temperature rotary calcination kiln glowing with thermal radiation",
    roughness: "intermediate",
    bgColor: "#1a1310",
  },
  {
    id: "stage-04",
    stepNumber: "04",
    title: "Hydrogen Reduction & Molten Melts",
    subtitle: "1100°C multi-tube pusher furnaces & liquid phase refining",
    shortDescription:
      "Purified tungsten oxides pass through multi-zone reduction boats under high-purity dry hydrogen gas, stripping oxygen atoms and transforming oxides into pure metallic tungsten.",
    technicalDetails: [
      "Furnace temperature zones: 750°C to 1100°C",
      "Ultra-dry hydrogen dew point: < -60°C to eliminate steam re-oxidation",
      "Gas-solid reaction rate controls Fischer Sub-Sieve Sizer (FSSS) diameter",
      "Continuous laser telemetry monitoring moisture off-gas",
    ],
    imageUrl: "/images/materials/blast-furnace-molten.jpg",
    imageAlt: "Incandescent molten metal and furnace heat inside metallurgical plant",
    roughness: "intermediate",
    bgColor: "#1f140e",
  },
  {
    id: "stage-05",
    stepNumber: "05",
    title: "Solid-State Carburization & Milling",
    subtitle: "High-energy horizontal attritors & vacuum carbon bonding",
    shortDescription:
      "Tungsten metal powder is blended with precision stoichiometric carbon black and reacted in carbon tube furnaces at 1600°C to form mono-tungsten carbide (WC).",
    technicalDetails: [
      "Carburization temperature: 1400°C – 1800°C under hydrogen blanket",
      "Stoichiometric total carbon locked at 6.13 ± 0.04%",
      "Wet attritor milling with submicron cobalt binder and wax lubricants",
      "Spray drying with inert nitrogen tower producing free-flowing RTP granules",
    ],
    imageUrl: "/images/materials/wc-carbide-powder.jpg",
    imageAlt: "Refined metallic powders and precision spray drying tower",
    roughness: "refined",
    bgColor: "#4A4F54",
  },
  {
    id: "stage-06",
    stepNumber: "06",
    title: "Precision Laboratory Qualification",
    subtitle: "Sub-ppm elemental ICP-OES, laser diffraction & SEM analysis",
    shortDescription:
      "Every production lot is quarantined until our accredited laboratory verifies particle size distributions (D10/D50/D90), specific surface area, micro-hardness, and chemical purity.",
    technicalDetails: [
      "Malvern Mastersizer 3000 laser diffraction particle size distribution",
      "High-resolution field emission SEM for crystal habit verification",
      "LECO combustion determinators for carbon, sulfur, oxygen, and nitrogen",
      "Trace metal analysis via high-resolution ICP-OES & GDMS",
    ],
    imageUrl: "/images/materials/lab-sem-microscopy.jpg",
    imageAlt: "Precision metallurgical laboratory testing and electron microscopy",
    roughness: "precision",
    bgColor: "#A7ADB2",
  },
  {
    id: "stage-07",
    stepNumber: "07",
    title: "Nitrogen Purging & Certified Packaging",
    subtitle: "Inert atmosphere sealing, UN-rated steel drums & barcode telemetry",
    shortDescription:
      "Finished powders and compounds are packaged in climate-regulated cleanrooms inside heavy-duty UN-approved steel drums under positive dry-argon or nitrogen blanket.",
    technicalDetails: [
      "Argon/Nitrogen inert purging (< 0.1% residual internal oxygen)",
      "Multi-layer aluminum moisture-barrier vacuum liners",
      "Individual batch QR code and tamper-evident holographic closure",
      "DIN EN ISO 9001:2015 traceability down to the mining lot origin",
    ],
    imageUrl: "/images/materials/drums-export-dispatch.jpg",
    imageAlt: "Heavy-duty industrial drums and automated dispatch logistics warehouse",
    roughness: "precision",
    bgColor: "#D9DDE0",
  },
  {
    id: "stage-08",
    stepNumber: "08",
    title: "High-Performance Industrial Applications",
    subtitle: "From aerospace propulsion to 5-axis CNC machining tools",
    shortDescription:
      "The refined materials are sintered into indexable cutting tools, plasma-sprayed onto turbine blades, and pressed into extreme wear protection components.",
    technicalDetails: [
      "Extreme temperature resistance up to 3000°C+ environments",
      "Micro-hardness ratings up to HV 2800 for severe abrasive wear",
      "Submicron grain structures delivering high transverse rupture strength",
      "High thermal conductivity maintaining dimensional stability under extreme loads",
    ],
    imageUrl: "/images/materials/cnc-aerospace-tooling.jpg",
    imageAlt: "Precision engineered CNC tooling and advanced aerospace turbine components",
    roughness: "precision",
    bgColor: "#FFFFFF",
  },
];

export const splitScreenManufacturingStages = [
  {
    index: "01",
    stage: "Material Sourcing",
    headline: "Ethical, High-Assay Mineral Concentrate Sourcing",
    description:
      "All tungsten, cobalt, and magnesium raw materials are sourced from audited, conflict-free extraction facilities conforming to strict European trade protocols and OECD due diligence guidelines.",
    metrics: [
      { label: "Assay Purity Threshold", value: "≥ 65.0% WO₃" },
      { label: "Provenance Traceability", value: "100% Batches" },
      { label: "Conflict-Free Audits", value: "OECD Tier 1" },
    ],
    imageUrl: "/images/materials/tungsten-mineral-ore.jpg",
  },
  {
    index: "02",
    stage: "Preparation and Processing",
    headline: "Chemical Digestion, Liquid Extraction & Calcination",
    description:
      "High-pressure autoclaves digest mineral slurries into pure tungstate solutions. Multi-stage counter-current solvent extraction removes trace elements prior to rotary thermal crystallization.",
    metrics: [
      { label: "Reactor Pressure", value: "24.5 Bar" },
      { label: "Extraction Selectivity", value: "99.98%" },
      { label: "Rotary Kiln Output", value: "48 t / day" },
    ],
    imageUrl: "/images/materials/autoclave-digestion.jpg",
  },
  {
    index: "03",
    stage: "Reduction and Milling",
    headline: "Multi-Tube Hydrogen Reduction & Continuous Carburization",
    description:
      "Oxides pass through automated pusher furnaces bathed in recirculating hydrogen. Temperature gradients and gas flows are continually modulated to synthesize exact micron grain distributions.",
    metrics: [
      { label: "Reduction Temperature", value: "1100°C Max" },
      { label: "Hydrogen Purity", value: "99.999%" },
      { label: "Grain Range Control", value: "0.4 – 30 µm" },
    ],
    imageUrl: "/images/materials/blast-furnace-molten.jpg",
  },
  {
    index: "04",
    stage: "Particle-Size Control",
    headline: "High-Energy Attritor Milling & Precision Air Classification",
    description:
      "Powders undergo ultrasonic classification, multi-deck vibration screening, and high-energy attritor homogenisation to guarantee tight, mono-modal Gaussian particle size distribution curves.",
    metrics: [
      { label: "Air Classifier Cut-Point", value: "0.2 µm Sharp" },
      { label: "Homogenisation Capacity", value: "5 Ton Lots" },
      { label: "Granule Flow Speed", value: "< 28 s / 50g" },
    ],
    imageUrl: "/images/materials/wc-carbide-powder.jpg",
  },
  {
    index: "05",
    stage: "Quality Testing",
    headline: "Independent European Laboratory Analytical Verification",
    description:
      "Each batch is tested for 34 trace elemental impurities via ICP-OES and GDMS, followed by laser particle analysis, BET specific surface area measurement, and carbon/oxygen combustion titration.",
    metrics: [
      { label: "Trace Elements Tested", value: "34 Elements" },
      { label: "Analytical Standard", value: "ISO 17025" },
      { label: "Batch Inspection Pass Rate", value: "99.94%" },
    ],
    imageUrl: "/images/materials/lab-sem-microscopy.jpg",
  },
  {
    index: "06",
    stage: "Packaging and Dispatch",
    headline: "Inert Gas Blanketing, Sealed Drums & Global Intermodal Freight",
    description:
      "Finished materials are packed in hermetically sealed UN-approved steel drums under positive inert gas pressure, equipped with tamper-proof security seals, and dispatched across worldwide maritime routes.",
    metrics: [
      { label: "Inert Gas Blanket", value: "99.99% Argon/N₂" },
      { label: "Packaging Integrity", value: "UN Class 1A2" },
      { label: "Transit Humidity Level", value: "< 15% RH" },
    ],
    imageUrl: "/images/materials/drums-export-dispatch.jpg",
  },
];
