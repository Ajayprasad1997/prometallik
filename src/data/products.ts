export interface TechnicalSpec {
  parameter: string;
  unit: string;
  typicalValue: string;
  guaranteedLimit: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  chemicalFormula: string;
  category: string;
  categorySlug: string;
  appearance: string;
  purity: string;
  particleSize: string;
  density?: string;
  meltingPoint?: string;
  availableGrades: string[];
  packaging: string[];
  storage: string;
  shortDescription: string;
  productOverview: string;
  keyCharacteristics: string[];
  typicalApplications: string[];
  technicalSpecs: TechnicalSpec[];
  sampleCOA: {
    batchNumber: string;
    manufacturingDate: string;
    testingMethod: string;
    lotPurity: string;
    fsssNumber: string;
    impurityLevels: { element: string; value: string; unit: string }[];
  };
  sampleSDS: {
    unNumber: string;
    hazardClassification: string;
    signalWord: string;
    ghsPictograms: string[];
    handlingPrecaution: string;
  };
  imageUrl: string;
  imageAlt: string;
  featured?: boolean;
}

export const productsCatalogue: Product[] = [
  // --- TUNGSTEN INTERMEDIATES ---
  {
    id: "apt-01",
    slug: "ammonium-para-tungstate-apt",
    name: "Ammonium Para Tungstate — APT",
    chemicalFormula: "(NH₄)₁₀(H₂W₁₂O₄₂)·4H₂O",
    category: "Tungsten Intermediates",
    categorySlug: "tungsten-intermediates",
    appearance: "White or slightly off-white crystalline powder",
    purity: "WO₃ ≥ 88.50%",
    particleSize: "Crystal Aggregates: 35 – 45 µm",
    density: "2.3 g/cm³ (apparent)",
    meltingPoint: "Decomposes at > 300°C to WO₃",
    availableGrades: ["Standard Grade (SG)", "Electronic High-Purity Grade (EHP)", "Catalyst Grade (CAT)"],
    packaging: ["50 kg iron drums with inner polyethylene liners", "1,000 kg big bags on euro pallets with moisture barrier"],
    storage: "Store in a hermetically sealed container in a cool, ventilated, dry industrial warehouse away from acidic vapors.",
    shortDescription: "Primary refined precursor for producing tungsten oxides, metal powders and chemical catalysts with exceptional crystal morphology.",
    productOverview:
      "Ammonium Para Tungstate (APT) represents the key technological milestone in the tungsten hydrometallurgical extraction chain. Produced through ion-exchange digestion, crystallization, and controlled thermal precipitation, PROMETALLIK APT exhibits low trace alkali contamination, uniform crystal habit, and reliable thermal decomposition characteristics required for precision hydrogen reduction.",
    keyCharacteristics: [
      "Extremely low trace alkali metals (Na + K < 15 ppm)",
      "Uniform monoclinic crystal morphology ensuring predictable calcination",
      "Stable moisture content and low volatilization variance",
      "Controlled bulk density optimized for automated furnace charging",
    ],
    typicalApplications: [
      "Thermal conversion into high-purity Tungsten Blue and Yellow Oxides",
      "Petrochemical hydrodesulfurization (HDS) catalysts",
      "Specialty ceramic pigment synthesis and dielectric substrates",
      "High-performance alloy additives and filament wire pre-sintering",
    ],
    technicalSpecs: [
      { parameter: "WO₃ Content", unit: "%", typicalValue: "88.65", guaranteedLimit: "≥ 88.50" },
      { parameter: "Iron (Fe)", unit: "ppm", typicalValue: "3.2", guaranteedLimit: "≤ 10" },
      { parameter: "Molybdenum (Mo)", unit: "ppm", typicalValue: "8.5", guaranteedLimit: "≤ 20" },
      { parameter: "Silicon (Si)", unit: "ppm", typicalValue: "4.1", guaranteedLimit: "≤ 10" },
      { parameter: "Sodium (Na)", unit: "ppm", typicalValue: "3.8", guaranteedLimit: "≤ 8" },
      { parameter: "Potassium (K)", unit: "ppm", typicalValue: "2.4", guaranteedLimit: "≤ 8" },
      { parameter: "Phosphorus (P)", unit: "ppm", typicalValue: "2.1", guaranteedLimit: "≤ 7" },
    ],
    sampleCOA: {
      batchNumber: "APT-2026-B0842",
      manufacturingDate: "2026-08-14",
      testingMethod: "ICP-OES / GDMS (DIN EN ISO 17025)",
      lotPurity: "88.68% WO₃ equivalent",
      fsssNumber: "38.2 µm",
      impurityLevels: [
        { element: "Fe", value: "3.2", unit: "ppm" },
        { element: "Mo", value: "8.5", unit: "ppm" },
        { element: "Na", value: "3.8", unit: "ppm" },
        { element: "Ca", value: "2.1", unit: "ppm" },
      ],
    },
    sampleSDS: {
      unNumber: "Non-regulated for standard transport",
      hazardClassification: "Acute Tox. 4 (Oral), Eye Irrit. 2",
      signalWord: "Warning",
      ghsPictograms: ["GHS07 (Exclamation Mark)"],
      handlingPrecaution: "Avoid dust generation. Use industrial extraction ventilation and EN149 FFP3 respirators.",
    },
    imageUrl: "/images/materials/apt-crystals.jpg",
    imageAlt: "Ammonium Para Tungstate crystalline precursor powder",
    featured: true,
  },
  {
    id: "wo3-02",
    slug: "tungsten-trioxide-wo3",
    name: "Tungsten Trioxide — WO₃",
    chemicalFormula: "WO₃",
    category: "Tungsten Intermediates",
    categorySlug: "tungsten-intermediates",
    appearance: "Vibrant yellow or yellow-green fine powder",
    purity: "WO₃ ≥ 99.95%",
    particleSize: "FSSS: 2.5 – 6.0 µm",
    density: "7.16 g/cm³",
    meltingPoint: "1473°C",
    availableGrades: ["Refractory Reduction Grade", "Ceramic & Glass Dopant Grade", "Electrochromic Grade"],
    packaging: ["50 kg steel drums with airtight liner", "100 kg export drums"],
    storage: "Dry, tightly closed in a cool environment. Chemically stable under standard industrial temperatures.",
    shortDescription: "Ultra-pure calcined tungsten oxide utilized for direct hydrogen reduction to metal powder, electrochromic devices, and fireproofing compounds.",
    productOverview:
      "PROMETALLIK Yellow Tungsten Oxide (WO₃) is synthesized by rotary calcination of high-purity APT in an oxygen-rich atmosphere. With tightly controlled oxygen vacancy stoichiometry and crystalline lattice parameters, this compound guarantees homogeneous reaction kinetics during rotary hydrogen reduction.",
    keyCharacteristics: [
      "Consistent yellow chromophore indicating complete oxidation stoichiometry",
      "Homogeneous specific surface area (BET: 3.2 – 4.5 m²/g)",
      "Strict control over volatile alkali and halogen elements",
      "Rapid and repeatable reduction kinetic profile",
    ],
    typicalApplications: [
      "Precursor for ultra-fine Tungsten Metal Powder (W)",
      "Smart electrochromic architectural and automotive glass",
      "Ceramic pigments, enamel glazes, and infrared shielding coatings",
      "Industrial denox de-NOx selective catalytic reduction (SCR) catalysts",
    ],
    technicalSpecs: [
      { parameter: "WO₃ Content", unit: "%", typicalValue: "99.96", guaranteedLimit: "≥ 99.95" },
      { parameter: "Aluminium (Al)", unit: "ppm", typicalValue: "2.0", guaranteedLimit: "≤ 5" },
      { parameter: "Iron (Fe)", unit: "ppm", typicalValue: "4.5", guaranteedLimit: "≤ 10" },
      { parameter: "Molybdenum (Mo)", unit: "ppm", typicalValue: "9.0", guaranteedLimit: "≤ 15" },
      { parameter: "Nickel (Ni)", unit: "ppm", typicalValue: "1.8", guaranteedLimit: "≤ 5" },
    ],
    sampleCOA: {
      batchNumber: "WO3-2026-X119",
      manufacturingDate: "2026-07-28",
      testingMethod: "XRF / Laser Diffraction / BET",
      lotPurity: "99.962%",
      fsssNumber: "3.4 µm",
      impurityLevels: [
        { element: "Fe", value: "4.5", unit: "ppm" },
        { element: "Mo", value: "9.0", unit: "ppm" },
        { element: "Si", value: "3.1", unit: "ppm" },
      ],
    },
    sampleSDS: {
      unNumber: "Not classified as dangerous goods",
      hazardClassification: "Skin Irrit. 2, Eye Irrit. 2A",
      signalWord: "Warning",
      ghsPictograms: ["GHS07"],
      handlingPrecaution: "Avoid breathing dust. Use in well-ventilated engineering hoods.",
    },
    imageUrl: "/images/materials/wo3-yellow-oxide.jpg",
    imageAlt: "Tungsten Trioxide refined yellow technical oxide powder",
    featured: true,
  },
  {
    id: "h2wo4-03",
    slug: "tungstic-acid",
    name: "Tungstic Acid",
    chemicalFormula: "H₂WO₄",
    category: "Tungsten Intermediates",
    categorySlug: "tungsten-intermediates",
    appearance: "Pale yellow micro-crystalline powder",
    purity: "WO₃ ≥ 91.50%",
    particleSize: "FSSS: 1.5 – 3.5 µm",
    density: "5.59 g/cm³",
    meltingPoint: "Decomposes at 100°C to WO₃ + H₂O",
    availableGrades: ["Chemical Reagent Grade", "Filament Precursor Grade", "Mordant Grade"],
    packaging: ["25 kg fiber drums with double PE liner", "50 kg steel drums"],
    storage: "Keep in a cool, dark, dry storage bunker. Prevent prolonged exposure to direct sunlight.",
    shortDescription: "Precipitated tungstic hydrate utilized as a mordant in technical textiles, catalytic coatings, and specialty chemical synthesis.",
    productOverview:
      "Tungstic Acid from PROMETALLIK is precipitated under strictly regulated pH and temperature regimens from purified sodium or ammonium tungstate liquors. The resulting hydrate displays high chemical reactivity and exceptional dissolution behavior in alkaline systems.",
    keyCharacteristics: [
      "Fast dissolution kinetics in caustic solutions and ammonia",
      "Very low chloride and sulfur residual concentrations",
      "Fine particle size with high reactive surface area",
    ],
    typicalApplications: [
      "Textile dye mordant and flame retardant formulations",
      "Specialty tungstate salt manufacturing (e.g., zinc, calcium, barium tungstates)",
      "Petroleum hydrocracking catalyst preparation",
    ],
    technicalSpecs: [
      { parameter: "WO₃ Equivalent", unit: "%", typicalValue: "92.10", guaranteedLimit: "≥ 91.50" },
      { parameter: "Chloride (Cl)", unit: "ppm", typicalValue: "15", guaranteedLimit: "≤ 30" },
      { parameter: "Sulfate (SO₄)", unit: "ppm", typicalValue: "18", guaranteedLimit: "≤ 40" },
      { parameter: "Heavy Metals (as Pb)", unit: "ppm", typicalValue: "< 5", guaranteedLimit: "≤ 10" },
    ],
    sampleCOA: {
      batchNumber: "TA-2026-092",
      manufacturingDate: "2026-06-11",
      testingMethod: "Gravimetric Calcination & ICP-MS",
      lotPurity: "92.15% WO₃",
      fsssNumber: "2.1 µm",
      impurityLevels: [
        { element: "Cl", value: "15", unit: "ppm" },
        { element: "SO₄", value: "18", unit: "ppm" },
      ],
    },
    sampleSDS: {
      unNumber: "Non-hazardous",
      hazardClassification: "Eye Irrit. 2",
      signalWord: "Warning",
      ghsPictograms: ["GHS07"],
      handlingPrecaution: "Store sealed in original container. Wear protective gloves and safety goggles.",
    },
    imageUrl: "/images/materials/tungstic-acid.jpg",
    imageAlt: "Tungstic Acid laboratory synthesized precipitate",
  },
  {
    id: "na2wo4-04",
    slug: "sodium-tungstate",
    name: "Sodium Tungstate",
    chemicalFormula: "Na₂WO₄·2H₂O",
    category: "Tungsten Intermediates",
    categorySlug: "tungsten-intermediates",
    appearance: "Colorless rhombic crystal or white crystalline powder",
    purity: "Na₂WO₄·2H₂O ≥ 99.0%",
    particleSize: "Granular crystal: 50 – 150 µm",
    density: "3.25 g/cm³",
    meltingPoint: "698°C (anhydrous)",
    availableGrades: ["Industrial Technical Grade", "Photochemical Grade", "Biochemical Reagent Grade"],
    packaging: ["25 kg plastic woven bags with internal barrier", "50 kg steel drums"],
    storage: "Deliquescent material. Store in hermetically sealed dry storage at ambient conditions.",
    shortDescription: "Water-soluble tungstate compound applied widely in biological enzyme inhibition, electroplating electrolytes, and fireproofing agents.",
    productOverview:
      "Produced via alkaline pressure leaching and multi-stage crystallization, PROMETALLIK Sodium Tungstate dihydrate offers total water solubility with neutral-to-slightly alkaline solution clarity. Essential in specialty wet chemical metallurgy.",
    keyCharacteristics: [
      "Total water solubility with crystal-clear aqueous dissolution",
      "Minimal iron and heavy metal co-precipitation",
      "Stable dihydrate crystal lattice resistant to premature efflorescence",
    ],
    typicalApplications: [
      "Anticorrosion surface treatment and electroplating solutions",
      "Biological reagent for blood analysis and enzyme inhibition",
      "Flameproofing fabric treatment and paper manufacturing",
      "Intermediate in the production of phosphotungstic acid",
    ],
    technicalSpecs: [
      { parameter: "Na₂WO₄·2H₂O Content", unit: "%", typicalValue: "99.40", guaranteedLimit: "≥ 99.00" },
      { parameter: "Iron (Fe)", unit: "ppm", typicalValue: "2.0", guaranteedLimit: "≤ 8" },
      { parameter: "Chloride (Cl)", unit: "ppm", typicalValue: "25", guaranteedLimit: "≤ 50" },
      { parameter: "Sulfate (SO₄)", unit: "ppm", typicalValue: "30", guaranteedLimit: "≤ 60" },
    ],
    sampleCOA: {
      batchNumber: "ST-2026-440",
      manufacturingDate: "2026-05-30",
      testingMethod: "Argentometric & ICP-OES",
      lotPurity: "99.42%",
      fsssNumber: "N/A (Crystalline)",
      impurityLevels: [
        { element: "Fe", value: "2.0", unit: "ppm" },
        { element: "Cl", value: "25", unit: "ppm" },
      ],
    },
    sampleSDS: {
      unNumber: "Non-regulated",
      hazardClassification: "Acute Tox. 4 (Oral)",
      signalWord: "Warning",
      ghsPictograms: ["GHS07"],
      handlingPrecaution: "Wash thoroughly after handling. Wear personal protective equipment.",
    },
    imageUrl: "/images/materials/sodium-tungstate.jpg",
    imageAlt: "Sodium Tungstate crystalline industrial compound",
  },

  // --- TUNGSTEN & CARBIDE POWDERS ---
  {
    id: "w-05",
    slug: "tungsten-metal-powder-w",
    name: "Molybdenum Metal Powder",
    chemicalFormula: "W",
    category: "Tungsten Powders",
    categorySlug: "tungsten-powders",
    appearance: "Dark gray metallic micro-powder",
    purity: "W ≥ 99.95%",
    particleSize: "FSSS: 0.6 µm – 25 µm (Custom sized)",
    density: "Theoretical: 19.25 g/cm³ (Bulk: 2.8 – 5.5 g/cm³)",
    meltingPoint: "3422°C (Highest of all metals)",
    availableGrades: ["Submicron Grade (0.6 - 1.2 µm)", "Medium Grade (2.0 - 4.5 µm)", "Coarse Powder (10 - 25 µm)", "Thermal Spray Grade"],
    packaging: ["50 kg hermetic steel drums with argon flush", "100 kg export drums with vacuum desiccant"],
    storage: "Dry, non-oxidizing atmosphere. Inert gas seal preserved until ready for immediate processing.",
    shortDescription: "Ultra-high-density refractory metallic powder engineered for electrical contacts, radiation shields, aerospace counterweights, and sintering.",
    productOverview:
      "PROMETALLIK Tungsten Metal Powder (W) is produced via continuous multi-zone hydrogen reduction of classified tungsten oxides. Characterized by pristine polygonal or spherical particle geometry, low residual oxygen, and ultra-narrow Fischer sub-sieve sizer distributions, this powder guarantees predictable shrinkage during sintering and liquid-phase alloy consolidation.",
    keyCharacteristics: [
      "Highest elemental melting point (3422°C) and superior thermal creep resistance",
      "Exceptional density (19.25 g/cm³) equivalent to gold",
      "Very low interstitial oxygen (< 0.15% even in submicron grades)",
      "Strict particle size distribution (PSD) tailored to customer sintering curves",
    ],
    typicalApplications: [
      "Heavy alloys (W-Ni-Fe, W-Ni-Cu) for kinetic penetrators, radiation shielding, and gyroscopes",
      "Electrical discharge machining (EDM) electrodes and high-voltage vacuum contactors",
      "Additive manufacturing (EBM, LPBF) spherical feedstock for aerospace nozzle components",
      "Synthesis of submicron tungsten carbide (WC) for micro-drills",
    ],
    technicalSpecs: [
      { parameter: "Tungsten (W) Purity", unit: "%", typicalValue: "99.97", guaranteedLimit: "≥ 99.95" },
      { parameter: "Oxygen (O)", unit: "ppm", typicalValue: "850", guaranteedLimit: "≤ 1500" },
      { parameter: "Carbon (C)", unit: "ppm", typicalValue: "45", guaranteedLimit: "≤ 80" },
      { parameter: "Iron (Fe)", unit: "ppm", typicalValue: "12", guaranteedLimit: "≤ 30" },
      { parameter: "Nickel (Ni)", unit: "ppm", typicalValue: "8", guaranteedLimit: "≤ 20" },
      { parameter: "Molybdenum (Mo)", unit: "ppm", typicalValue: "18", guaranteedLimit: "≤ 35" },
    ],
    sampleCOA: {
      batchNumber: "W-2026-F9921",
      manufacturingDate: "2026-08-01",
      testingMethod: "Laser Diffraction (ISO 13320) / LECO O/N/C Analyzer",
      lotPurity: "99.974%",
      fsssNumber: "2.45 µm",
      impurityLevels: [
        { element: "O", value: "850", unit: "ppm" },
        { element: "C", value: "45", unit: "ppm" },
        { element: "Fe", value: "12", unit: "ppm" },
        { element: "Mo", value: "18", unit: "ppm" },
      ],
    },
    sampleSDS: {
      unNumber: "UN 3089 (Metal powder, flammable, n.o.s. if fine)",
      hazardClassification: "Flam. Sol. 1 (Fine fractions), Self-heat. 2",
      signalWord: "Danger",
      ghsPictograms: ["GHS02 (Flame)"],
      handlingPrecaution: "Keep away from sparks and open flames. Use grounded ATEX-rated machinery and non-sparking bronze tools.",
    },
    imageUrl: "/images/materials/molybdenum-metal-powder.jpg",
    imageAlt: "Refined dark gray Tungsten Metal Powder for powder metallurgy",
    featured: true,
  },
  {
    id: "wc-06",
    slug: "tungsten-carbide-powder-wc",
    name: "Tungsten Carbide Powder — WC",
    chemicalFormula: "WC",
    category: "Carbide Materials",
    categorySlug: "carbide-materials",
    appearance: "Dark gray metallic powder with diamond-like hardness",
    purity: "Total Carbon: 6.13 ± 0.05%",
    particleSize: "FSSS: 0.4 µm – 30 µm (Fine to Ultra-Coarse)",
    density: "Theoretical: 15.63 g/cm³",
    meltingPoint: "2870°C",
    availableGrades: ["Nanocrystalline / Ultrafine (0.4 - 0.8 µm)", "Standard Tool Grade (1.0 - 2.5 µm)", "Mining & Road Milling Grade (3.0 - 6.0 µm)", "Extra Coarse Grade (8 - 30 µm)"],
    packaging: ["50 kg steel drums with airtight nitrogen purge", "100 kg industrial steel drums with security tamper seal"],
    storage: "Store dry in unopened containers. Inert atmosphere recommended for submicron grades.",
    shortDescription: "Ultra-hard stoichiometric mono-carbide powder forming the foundation of modern CNC indexable inserts, wear parts, and mining tools.",
    productOverview:
      "Synthesized by solid-state carburization of classified tungsten metal powder under high-temperature hydrogen furnaces, PROMETALLIK Tungsten Carbide Powder (WC) features exact stoichiometric total carbon (6.13%), minimal free unreacted carbon (< 0.05%), and defect-free hexagonal crystal structures. This delivers the highest micro-hardness (HV 2200) and fracture toughness in sintered hardmetal matrices.",
    keyCharacteristics: [
      "Precise stoichiometry with stoichiometric carbon bound tightly in hexagonal WC lattice",
      "Minimal free graphite carbon (< 0.04%) preventing sintering embrittlement",
      "Superior thermal conductivity and resistance to thermal shock in high-speed machining",
      "Unmatched resistance to abrasive and erosive wear",
    ],
    typicalApplications: [
      "Indexable CNC cutting tool inserts, solid carbide end mills, and PCB micro-drills",
      "Rotary rock bits, down-the-hole (DTH) hammer buttons, and road planing picks",
      "Wire drawing dies, extrusion nozzles, and high-pressure fluid valve seats",
      "Wear-resistant cladding and plasma-transferred arc (PTA) hardfacing",
    ],
    technicalSpecs: [
      { parameter: "Total Carbon (C_tot)", unit: "%", typicalValue: "6.14", guaranteedLimit: "6.10 – 6.18" },
      { parameter: "Free Carbon (C_free)", unit: "%", typicalValue: "0.03", guaranteedLimit: "≤ 0.05" },
      { parameter: "Oxygen (O)", unit: "ppm", typicalValue: "1200", guaranteedLimit: "≤ 2000" },
      { parameter: "Iron (Fe)", unit: "ppm", typicalValue: "35", guaranteedLimit: "≤ 80" },
      { parameter: "Cobalt (Co)", unit: "ppm", typicalValue: "15", guaranteedLimit: "≤ 50" },
    ],
    sampleCOA: {
      batchNumber: "WC-2026-K0331",
      manufacturingDate: "2026-08-19",
      testingMethod: "LECO High-Frequency Combustion / SEM Phase Analysis",
      lotPurity: "99.92% (Combined WC)",
      fsssNumber: "1.28 µm",
      impurityLevels: [
        { element: "C_tot", value: "6.14", unit: "%" },
        { element: "C_free", value: "0.03", unit: "%" },
        { element: "O", value: "1200", unit: "ppm" },
        { element: "Fe", value: "35", unit: "ppm" },
      ],
    },
    sampleSDS: {
      unNumber: "Non-regulated for coarse powder",
      hazardClassification: "STOT RE 1 (Inhalation - Long term lungs)",
      signalWord: "Danger",
      ghsPictograms: ["GHS08 (Health Hazard)"],
      handlingPrecaution: "Do not breathe dust. Wear powered air-purifying respirators (PAPR) during batch dispensing.",
    },
    imageUrl: "/images/materials/tungsten-carbide-powder.jpg",
    imageAlt: "Tungsten Carbide Powder for high-hardness cutting inserts and mining bits",
    featured: true,
  },
  {
    id: "ftc-07",
    slug: "fused-tungsten-carbide-powder-ftc",
    name: "Fused Tungsten Carbide Powder — FTC",
    chemicalFormula: "W₂C / WC Eutectic",
    category: "Carbide Materials",
    categorySlug: "carbide-materials",
    appearance: "Dark gray to silver-gray angular or spherical particles",
    purity: "Total Carbon: 3.8 – 4.2%",
    particleSize: "Mesh sizes: -40+80, -60+120, -140+325, -325 mesh (Custom sizing)",
    density: "16.4 – 17.2 g/cm³",
    meltingPoint: "2525°C",
    availableGrades: ["Crushed Angular FTC", "Spherical Plasma Atomized (SFTC)", "Matrix Diamond Drill Grade"],
    packaging: ["25 kg steel pails with lever lock", "50 kg heavy-duty drums with moisture-tight seals"],
    storage: "Dry, indoor ambient warehouse storage.",
    shortDescription: "Ultra-wear-resistant cast eutectic carbide featuring dendritic microstructures, engineered for PTA welding, laser cladding, and oilfield drill bits.",
    productOverview:
      "Formed by electric-arc melting of elemental tungsten and carbon above 2600°C followed by rapid atomization or quenching, PROMETALLIK Fused Tungsten Carbide exhibits a classic fine 'feather-like' or dendritic W₂C + WC eutectic crystal architecture. With extreme microhardness (HV 2500–3000), it delivers unmatched protection in severe gouging abrasion.",
    keyCharacteristics: [
      "Extraordinary micro-hardness exceeding standard sintered WC (HV 2500 - 3000)",
      "High wetting affinity with nickel, cobalt, and bronze brazing matrices",
      "Spherical grades provide optimal flowability for automated laser cladding nozzles",
      "Exceptional resistance to high-velocity slurry erosion",
    ],
    typicalApplications: [
      "Hardfacing welding rods and flux-cored wires for oil and gas directional drill bits",
      "Laser cladding and Plasma Transferred Arc (PTA) wear plates for dredging pumps",
      "Tunnel boring machine (TBM) cutter rings and agricultural tillage tools",
      "Matrix infiltrate for diamond-impregnated geological drill crowns",
    ],
    technicalSpecs: [
      { parameter: "Total Carbon (C_tot)", unit: "%", typicalValue: "4.05", guaranteedLimit: "3.80 – 4.20" },
      { parameter: "Free Carbon (C_free)", unit: "%", typicalValue: "0.04", guaranteedLimit: "≤ 0.08" },
      { parameter: "Iron (Fe)", unit: "ppm", typicalValue: "80", guaranteedLimit: "≤ 250" },
      { parameter: "Microhardness", unit: "HV0.1", typicalValue: "2750", guaranteedLimit: "≥ 2500" },
    ],
    sampleCOA: {
      batchNumber: "FTC-2026-M770",
      manufacturingDate: "2026-07-15",
      testingMethod: "Vickers Microhardness Tester / Sieve Analysis (ASTM B214)",
      lotPurity: "Eutectic W₂C/WC phase confirmed by XRD",
      fsssNumber: "N/A (-80+200 Mesh)",
      impurityLevels: [
        { element: "C_tot", value: "4.05", unit: "%" },
        { element: "Fe", value: "80", unit: "ppm" },
      ],
    },
    sampleSDS: {
      unNumber: "Not regulated",
      hazardClassification: "Combustible dust hazard when fine",
      signalWord: "Warning",
      ghsPictograms: ["GHS07"],
      handlingPrecaution: "Avoid high-speed mechanical impacts. Use dust collection on powder spray equipment.",
    },
    imageUrl: "/images/materials/fused-tungsten-carbide-powder.jpg",
    imageAlt: "Fused Tungsten Carbide hardfacing powder with dendritic eutectic structure",
  },
  {
    id: "rtp-08",
    slug: "ready-to-press-graded-powder-rtp",
    name: "Other Advanced Metal Powder",
    chemicalFormula: "WC-Co / WC-Co-Cr / WC-TiC-TaC Matrix",
    category: "Carbide Materials",
    categorySlug: "carbide-materials",
    appearance: "Free-flowing spherical agglomerated granules, gray",
    purity: "Cobalt binder: 6.0% – 15.0% (Engineered to grade)",
    particleSize: "Granule size: 50 – 250 µm (Apparent density: 2.8 – 3.4 g/cm³)",
    density: "Sintered: 14.1 – 15.0 g/cm³",
    meltingPoint: "Sintering range: 1380°C – 1440°C",
    availableGrades: ["ISO P10 - P40 (Steel cutting)", "ISO M10 - M30 (Stainless)", "ISO K10 - K30 (Cast iron / Non-ferrous)", "Mining Impact Grades (6% - 12% Co)"],
    packaging: ["50 kg hermetic composite drums with desiccant packs", "100 kg industrial containers"],
    storage: "Dry, climate-controlled space (relative humidity < 50%, temperature 15-25°C) to prevent PEG binder migration.",
    shortDescription: "Spray-dried, paraffin/PEG wax-formulated granules ready for automated press compaction into complex indexable tool geometries.",
    productOverview:
      "PROMETALLIK Ready-to-Press (RTP) graded powders are wet-milled in high-energy horizontal attritors with precision cobalt and grain-growth inhibitors (VC, Cr₃C₂), followed by hot nitrogen spray drying. The resulting spherical granules flow seamlessly into high-speed multi-axis hydraulic presses with zero die bridging.",
    keyCharacteristics: [
      "Outstanding powder flowability (Hall Flow: < 30 s/50g) for automatic press cavity filling",
      "Homogeneous distribution of submicron cobalt binder throughout carbide skeleton",
      "Consistent pressing density and predictable linear sintering shrinkage factor (1.18 - 1.22)",
      "Uniform organic binder (paraffin or PEG) guaranteeing clean debinding without carbon deficits",
    ],
    typicalApplications: [
      "High-speed CNC milling, turning, and threading inserts",
      "Solid carbide drills and end mills manufactured via rod extrusion",
      "Stamping dies, cold heading dies, and can-tooling punches",
      "Waterjet cutting mixing tubes and sandblasting nozzles",
    ],
    technicalSpecs: [
      { parameter: "Cobalt Binder (Co)", unit: "%", typicalValue: "10.02", guaranteedLimit: "9.80 – 10.20" },
      { parameter: "Wax Content (PEG/Paraffin)", unit: "%", typicalValue: "2.10", guaranteedLimit: "1.90 – 2.30" },
      { parameter: "Apparent Density", unit: "g/cm³", typicalValue: "3.10", guaranteedLimit: "2.95 – 3.25" },
      { parameter: "Transverse Rupture Strength (TRS)", unit: "MPa", typicalValue: "3400 (Sintered)", guaranteedLimit: "≥ 3100" },
    ],
    sampleCOA: {
      batchNumber: "RTP-2026-P1044",
      manufacturingDate: "2026-08-22",
      testingMethod: "Hall Flowmeter (ASTM B213) / Sintered Metallography",
      lotPurity: "WC-10Co-0.6Cr₃C₂ alloy chemistry verified",
      fsssNumber: "Submicron 0.8 µm base WC",
      impurityLevels: [
        { element: "Co", value: "10.02", unit: "%" },
        { element: "Cr₃C₂", value: "0.58", unit: "%" },
        { element: "Fe", value: "40", unit: "ppm" },
      ],
    },
    sampleSDS: {
      unNumber: "UN 3089 (Metal powder)",
      hazardClassification: "Resp. Sens. 1, Skin Sens. 1, Carc. 1B (Inhalation Co)",
      signalWord: "Danger",
      ghsPictograms: ["GHS08", "GHS07"],
      handlingPrecaution: "Wear respiratory protection with P3 particulate filter. Avoid heating before scheduled furnace debinding.",
    },
    imageUrl: "/images/materials/other-advanced-metal-powder.jpg",
    imageAlt: "Ready-to-Press graded carbide powder granules ready for tool pressing",
    featured: true,
  },

  // --- COBALT COMPOUNDS ---
  {
    id: "co3o4-09",
    slug: "cobalt-oxide",
    name: "Cobalt Metal Powder",
    chemicalFormula: "Co₃O₄",
    category: "Cobalt Compounds",
    categorySlug: "cobalt-compounds",
    appearance: "Fine black to dark grayish-black powder",
    purity: "Co ≥ 72.5%",
    particleSize: "D50: 1.5 – 5.0 µm",
    density: "6.11 g/cm³",
    meltingPoint: "895°C (decomposes to CoO)",
    availableGrades: ["Battery & Cathode Precursor Grade", "Hardmetal Binder Grade", "Ceramic & Enamel Grade"],
    packaging: ["25 kg paper bags with internal foil barrier", "50 kg steel drums with airtight closures"],
    storage: "Dry, well-ventilated warehouse. Keep isolated from strong reducing agents and acids.",
    shortDescription: "Essential cobalt matrix precursor utilized in carbide sintering, energy storage cathodes, and deep blue ceramic glazes.",
    productOverview:
      "PROMETALLIK Cobalt(II,III) Oxide is produced through precise pyrometallurgical calcination of pure cobalt hydroxide or carbonate. Offering uniform particle size and minimal impurities (nickel, copper, iron), it reduces smoothly into ultra-pure elemental cobalt binder during vacuum hardmetal sintering.",
    keyCharacteristics: [
      "Consistent Co content (> 72.8%) matching theoretical spinel stoichiometry",
      "Very low trace nickel (< 50 ppm) and copper (< 10 ppm) preventing alloy brittleness",
      "Homogeneous grain morphology ensuring uniform dispersion in ball mills",
    ],
    typicalApplications: [
      "Cobalt source for cementation of tungsten carbide indexable tools",
      "Lithium-ion battery cathode active material synthesis (LCO, NMC)",
      "High-temperature ceramic enamels, glass decolorizers, and cobalt blue pigments",
      "Catalyst for synthetic gas conversion and chemical oxidation",
    ],
    technicalSpecs: [
      { parameter: "Cobalt (Co) Content", unit: "%", typicalValue: "73.10", guaranteedLimit: "≥ 72.50" },
      { parameter: "Nickel (Ni)", unit: "ppm", typicalValue: "35", guaranteedLimit: "≤ 80" },
      { parameter: "Iron (Fe)", unit: "ppm", typicalValue: "28", guaranteedLimit: "≤ 50" },
      { parameter: "Copper (Cu)", unit: "ppm", typicalValue: "6", guaranteedLimit: "≤ 20" },
      { parameter: "Manganese (Mn)", unit: "ppm", typicalValue: "8", guaranteedLimit: "≤ 25" },
    ],
    sampleCOA: {
      batchNumber: "COO-2026-V512",
      manufacturingDate: "2026-06-25",
      testingMethod: "EDTA Titration & ICP-OES",
      lotPurity: "73.12% Co content",
      fsssNumber: "2.8 µm",
      impurityLevels: [
        { element: "Ni", value: "35", unit: "ppm" },
        { element: "Fe", value: "28", unit: "ppm" },
        { element: "Cu", value: "6", unit: "ppm" },
      ],
    },
    sampleSDS: {
      unNumber: "UN 3077 (Environmentally hazardous substance, solid, n.o.s.)",
      hazardClassification: "Skin Sens. 1, Carc. 1B, Aquatic Chronic 1",
      signalWord: "Danger",
      ghsPictograms: ["GHS08", "GHS09"],
      handlingPrecaution: "Avoid release to environment. Wear protective clothing, gloves, and dust-tight respirator.",
    },
    imageUrl: "/images/materials/cobalt-metal-powder.jpg",
    imageAlt: "Cobalt Oxide high-purity black technical powder",
  },
  {
    id: "co-ac-10",
    slug: "iron-metal",
    name: "Iron Metal Powder",
    chemicalFormula: "Co(CH₃COO)₂·4H₂O",
    category: "Cobalt Compounds",
    categorySlug: "cobalt-compounds",
    appearance: "Red-violet / magenta monoclinic crystals or powder",
    purity: "Co ≥ 23.5%",
    particleSize: "Crystal granules: 100 – 500 µm",
    density: "1.70 g/cm³",
    meltingPoint: "140°C (loses water of hydration)",
    availableGrades: ["PTA Oxidation Catalyst Grade", "Surface Finishing Grade", "Pigment Grade"],
    packaging: ["25 kg bags with airtight PE inner liner", "500 kg super sacks with desiccant protection"],
    storage: "Deliquescent and moisture-sensitive. Store sealed below 28°C in a dry climate.",
    shortDescription: "Specialty organometallic cobalt salt widely deployed as a liquid oxidation catalyst in terephthalic acid production and electroplating baths.",
    productOverview:
      "Synthesized by reacting high-purity cobalt metal or oxide with glacial acetic acid under inert nitrogen atmosphere, PROMETALLIK Cobalt Acetate tetrahydrate offers remarkable solution purity, zero insoluble suspended residues, and instant solubility in polar organic solvents.",
    keyCharacteristics: [
      "Total water and alcohol solubility with vibrant transparent magenta hue",
      "Ultra-low heavy metal residuals meeting stringent polyester catalyst limits",
      "Stable crystal water ratio ensuring predictable stoichiometric additions",
    ],
    typicalApplications: [
      "Oxidation catalyst for Purified Terephthalic Acid (PTA) in polyester polymer manufacturing",
      "Drying agent in high-performance industrial paints, lacquers, and varnishes",
      "Specialty anodizing baths and corrosion-resistant metallic sealants",
    ],
    technicalSpecs: [
      { parameter: "Cobalt (Co) Content", unit: "%", typicalValue: "23.75", guaranteedLimit: "≥ 23.50" },
      { parameter: "Iron (Fe)", unit: "ppm", typicalValue: "8", guaranteedLimit: "≤ 20" },
      { parameter: "Nickel (Ni)", unit: "ppm", typicalValue: "18", guaranteedLimit: "≤ 50" },
      { parameter: "Insolubles in Water", unit: "%", typicalValue: "< 0.01", guaranteedLimit: "≤ 0.02" },
    ],
    sampleCOA: {
      batchNumber: "COAC-2026-A109",
      manufacturingDate: "2026-05-18",
      testingMethod: "Atomic Absorption Spectroscopy (AAS) / Gravimetry",
      lotPurity: "23.78% Co equivalent",
      fsssNumber: "N/A (Granular)",
      impurityLevels: [
        { element: "Fe", value: "8", unit: "ppm" },
        { element: "Ni", value: "18", unit: "ppm" },
      ],
    },
    sampleSDS: {
      unNumber: "UN 3077",
      hazardClassification: "Acute Tox. 4, Resp. Sens. 1, Carc. 1B, Repr. 1B",
      signalWord: "Danger",
      ghsPictograms: ["GHS08", "GHS07", "GHS09"],
      handlingPrecaution: "Restricted to industrial facilities. Use closed ventilation loop systems.",
    },
    imageUrl: "/images/materials/iron-metal-powder.jpg",
    imageAlt: "Cobalt Acetate tetrahydrate crystal compound",
  },

  // --- MAGNESIUM MATERIALS ---
  {
    id: "mg-pow-11",
    slug: "magnesium-metal-powder",
    name: "Magnesium Metal Powder",
    chemicalFormula: "Mg",
    category: "Magnesium Materials",
    categorySlug: "magnesium-materials",
    appearance: "Silvery-white to bright gray granular metallic powder",
    purity: "Mg ≥ 99.80%",
    particleSize: "Granulometry: 20 – 150 mesh / 50 – 500 µm (Customized)",
    density: "Bulk: 0.65 – 0.95 g/cm³ (Solid: 1.74 g/cm³)",
    meltingPoint: "650°C",
    availableGrades: ["Steel Desulfurization Reagent Grade", "Pyrotechnic & Defense Grade", "Chemical Synthesis / Grignard Grade"],
    packaging: ["100 kg or 200 kg UN-certified steel drums with argon purge and gasket clamps", "1,000 kg moisture-proof container bags"],
    storage: "Dry, spark-free, non-combustible warehouse. Absolutely no water contact or high-humidity exposure.",
    shortDescription: "Ultra-pure elemental magnesium powder deployed in molten iron hot-metal desulfurization, Grignard reagents, and titanium Kroll processing.",
    productOverview:
      "PROMETALLIK Magnesium Metal Powder is manufactured by inert-gas atomization or precision mechanical chipping of electrolytic primary magnesium ingots. With strict oxygen exclusion and specialized passivating treatments, the powder provides reliable pneumatic conveyance and rapid desulfurization kinetics in industrial steelworks.",
    keyCharacteristics: [
      "High active metallic magnesium content (> 99.8%) with low passive oxide skin",
      "Spherical or nodular granule geometry facilitating smooth pneumatic injection lances",
      "Strict control over fine dust fractions (< 45 µm) to manage deflagration risks",
    ],
    typicalApplications: [
      "Hot-metal desulfurization in blast furnace torpedo ladles and steel converters",
      "Kroll process reducing agent for Titanium (Ti) and Zirconium (Zr) sponge extraction",
      "Grignard reagent synthesis in high-end pharmaceutical and agrochemical production",
      "Energetic materials, decoy flares, and illumination compositions",
    ],
    technicalSpecs: [
      { parameter: "Active Magnesium (Mg)", unit: "%", typicalValue: "99.86", guaranteedLimit: "≥ 99.80" },
      { parameter: "Aluminium (Al)", unit: "%", typicalValue: "0.012", guaranteedLimit: "≤ 0.03" },
      { parameter: "Iron (Fe)", unit: "%", typicalValue: "0.015", guaranteedLimit: "≤ 0.03" },
      { parameter: "Silicon (Si)", unit: "%", typicalValue: "0.008", guaranteedLimit: "≤ 0.02" },
      { parameter: "Moisture (H₂O)", unit: "%", typicalValue: "0.015", guaranteedLimit: "≤ 0.05" },
    ],
    sampleCOA: {
      batchNumber: "MGP-2026-D330",
      manufacturingDate: "2026-08-05",
      testingMethod: "Gas Evolution & Direct Combustion Analysis",
      lotPurity: "99.86% Active Mg",
      fsssNumber: "N/A (Sieve -60+120 mesh)",
      impurityLevels: [
        { element: "Al", value: "0.012", unit: "%" },
        { element: "Fe", value: "0.015", unit: "%" },
        { element: "Si", value: "0.008", unit: "%" },
      ],
    },
    sampleSDS: {
      unNumber: "UN 1418 (Magnesium powder, hazard class 4.3 with class 4.2 sub-risk)",
      hazardClassification: "Water-react. 1, Pyr. Sol. 1",
      signalWord: "Danger",
      ghsPictograms: ["GHS02 (Flame)"],
      handlingPrecaution: "Never use water, foam, or halogenated fire extinguishers. Use Class D dry powder flux only.",
    },
    imageUrl: "/images/materials/magnesium-metal-powder.jpg",
    imageAlt: "Magnesium Metal Powder for metallurgical desulfurization and advanced chemistry",
    featured: true,
  },
  {
    id: "mg-turn-12",
    slug: "magnesium-metal-turnings-and-chips",
    name: "Magnesium Metal Turnings and Chips",
    chemicalFormula: "Mg",
    category: "Magnesium Materials",
    categorySlug: "magnesium-materials",
    appearance: "Bright silver-metallic coiled shavings and machined flakes",
    purity: "Mg ≥ 99.90%",
    particleSize: "Width: 1.5 – 3.0 mm; Thickness: 0.15 – 0.35 mm; Length: 3 – 12 mm",
    density: "Bulk: 0.25 – 0.40 g/cm³",
    meltingPoint: "650°C",
    availableGrades: ["High-Purity Grignard Synthesis Grade", "Nodular Cast Iron Inoculant Grade", "Alloy Remelt Grade"],
    packaging: ["20 kg hermetic poly-lined drums", "50 kg fiberboard drums with moisture-tight seals"],
    storage: "Dry, cool, spark-free environment with nitrogen purge or silica-gel desiccant packs.",
    shortDescription: "Precision-milled clean metallic shavings with high surface-to-volume ratio engineered for laboratory Grignard reactions and organic synthesis.",
    productOverview:
      "Produced via controlled oil-free dry mechanical turning of premium 99.95% electrolytic magnesium ingots, PROMETALLIK Magnesium Turnings are free of hydrocarbon lubricants, coolant stains, and iron tool cross-contamination. Their high surface area initiates organomagnesium halide reactions smoothly without prolonged induction lag.",
    keyCharacteristics: [
      "Zero oil, lubricant, or halogen coolant residue on metal surfaces",
      "Rapid and spontaneous reaction initiation with alkyl and aryl halides",
      "Strict moisture exclusion preventing oxide passivating layer formation",
      "Consistently curled ribbon geometry preventing packaging agglomeration",
    ],
    typicalApplications: [
      "Grignard reagent preparation (R-Mg-X) for specialty pharmaceuticals and fine fragrances",
      "Titanium sponge extraction via magnesium thermal reduction",
      "Nodular / ductile iron melt inoculation (spheroidal graphite formation)",
      "High-purity magnesium-lithium and magnesium-rare earth aerospace master alloys",
    ],
    technicalSpecs: [
      { parameter: "Magnesium (Mg) Purity", unit: "%", typicalValue: "99.92", guaranteedLimit: "≥ 99.90" },
      { parameter: "Iron (Fe)", unit: "ppm", typicalValue: "110", guaranteedLimit: "≤ 250" },
      { parameter: "Aluminium (Al)", unit: "ppm", typicalValue: "95", guaranteedLimit: "≤ 200" },
      { parameter: "Copper (Cu)", unit: "ppm", typicalValue: "15", guaranteedLimit: "≤ 30" },
      { parameter: "Manganese (Mn)", unit: "ppm", typicalValue: "120", guaranteedLimit: "≤ 250" },
    ],
    sampleCOA: {
      batchNumber: "MGT-2026-R881",
      manufacturingDate: "2026-07-02",
      testingMethod: "Direct Dissolution & ICP-OES Analysis",
      lotPurity: "99.92% Elemental Mg",
      fsssNumber: "N/A (Turnings / Ribbon)",
      impurityLevels: [
        { element: "Fe", value: "110", unit: "ppm" },
        { element: "Al", value: "95", unit: "ppm" },
        { element: "Cu", value: "15", unit: "ppm" },
      ],
    },
    sampleSDS: {
      unNumber: "UN 1869 (Magnesium or magnesium alloys, in pellets, turnings or ribbons)",
      hazardClassification: "Flam. Sol. 2, Water-react. 2",
      signalWord: "Danger",
      ghsPictograms: ["GHS02 (Flame)"],
      handlingPrecaution: "Protect from moisture. Handle under dry nitrogen blanket where possible. Keep away from ignition sources.",
    },
    imageUrl: "/images/materials/magnesium-turnings.jpg",
    imageAlt: "Bright silver Magnesium Metal Turnings and chips for chemical synthesis",
  },
];

export const MANDATORY_DISCLAIMER =
  "Final grades, specifications, purity, particle size, packaging and availability are subject to confirmation by PROMETALLIK.";
