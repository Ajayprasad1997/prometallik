export interface IndustryApplication {
  id: string;
  slug: string;
  name: string;
  shortTag: string;
  headline: string;
  materialChallenge: string;
  solutionOverview: string;
  relevantProductSlugs: string[];
  requiredCharacteristics: string[];
  typicalUseCases: string[];
  imageUrl: string;
  imageAlt: string;
}

export const industryApplications: IndustryApplication[] = [
  {
    id: "app-01",
    slug: "powder-metallurgy",
    name: "Powder Metallurgy",
    shortTag: "Sintering & Net-Shape Forming",
    headline: "Engineered Powders for High-Density Sintered Components",
    materialChallenge:
      "Achieving near-full theoretical density and dimensional uniformity in complex components without post-machining shrinkage defects.",
    solutionOverview:
      "PROMETALLIK provides spherical, high-flow tungsten metal powders and ready-to-press graded granules engineered with exact grain size distributions and uniform wax plasticizers.",
    relevantProductSlugs: ["tungsten-metal-powder-w", "ready-to-press-graded-powder-rtp", "cobalt-oxide"],
    requiredCharacteristics: [
      "Consistent Hall Flow rate (< 28 s/50g)",
      "Strict apparent and tap density stability",
      "Low residual interstitial oxygen (< 0.12%)",
      "Clean debinding behavior without carbon contamination",
    ],
    typicalUseCases: [
      "High-density balancing weights and vibration dampeners",
      "Sintered structural automotive components",
      "Self-lubricating porous bronze and copper-tungsten bearings",
    ],
    imageUrl: "/images/materials/wc-carbide-powder.jpg",
    imageAlt: "Powder metallurgy sintered components and metallic pressing",
  },
  {
    id: "app-02",
    slug: "cutting-tools",
    name: "Cutting Tools",
    shortTag: "5-Axis CNC & Indexable Inserts",
    headline: "Maximum Hardness & Thermal Creep Resistance for Metal Machining",
    materialChallenge:
      "Extreme thermal cycling and abrasive flank wear encountered during high-speed turning of titanium, Inconel, and hardened die steels.",
    solutionOverview:
      "Our ultra-fine and submicron stoichiometric Tungsten Carbide (WC) powders combined with pure cobalt binders provide unmatched microhardness (HV 2200) and fracture toughness.",
    relevantProductSlugs: ["tungsten-carbide-powder-wc", "ready-to-press-graded-powder-rtp", "cobalt-oxide"],
    requiredCharacteristics: [
      "Stoichiometric carbon ratio (6.13 ± 0.04%) with < 0.03% free carbon",
      "Narrow submicron grain boundary spacing (0.4 – 0.8 µm)",
      "High transverse rupture strength (> 3400 MPa)",
      "Superior thermal shock and crater wear resistance",
    ],
    typicalUseCases: [
      "Indexable CNC turning, milling, and threading inserts",
      "Solid carbide end mills and PCB micro-drills",
      "Precision reamers and boring bars for aerospace turbine housings",
    ],
    imageUrl: "/images/materials/cnc-aerospace-tooling.jpg",
    imageAlt: "Precision CNC indexable cutting tool inserts machining metal",
  },
  {
    id: "app-03",
    slug: "mining",
    name: "Mining",
    shortTag: "Percussion Rock Bits & Tunneling",
    headline: "Unmatched Impact Toughness for Severe Geological Strata",
    materialChallenge:
      "Catastrophic impact fracture and intense quartz-induced abrasive wear experienced by drill bits in hard rock excavation and tunneling.",
    solutionOverview:
      "Coarse-grained tungsten carbide grades (3.0 – 8.0 µm) specifically developed to maximize fracture toughness under violent cyclic shock loading.",
    relevantProductSlugs: ["tungsten-carbide-powder-wc", "fused-tungsten-carbide-powder-ftc"],
    requiredCharacteristics: [
      "Coarse polygon crystal habit with high fracture energy absorption",
      "Cobalt binder optimization (8% – 12%) for impact resilience",
      "Zero embrittling eta-phase (Co₃W₃C) formation",
    ],
    typicalUseCases: [
      "Down-The-Hole (DTH) hammer buttons and rotary tricone bits",
      "Continuous miner picks and road milling teeth",
      "Tunnel Boring Machine (TBM) disc cutters for hard granite excavation",
    ],
    imageUrl: "/images/materials/wc-carbide-powder.jpg",
    imageAlt: "Heavy mining drilling machinery and rock cutting equipment",
  },
  {
    id: "app-04",
    slug: "wear-protection",
    name: "Wear Protection",
    shortTag: "Gouging & Slurry Abrasion Shields",
    headline: "Extending Industrial Machinery Lifespans in Harsh Environments",
    materialChallenge:
      "Severe gouging abrasion, erosion-corrosion, and slurry wear destroying steel slurry pumps, chokes, and industrial shredders.",
    solutionOverview:
      "Fused tungsten carbide (FTC) eutectic powders and sintered tiles that deliver surface hardness ratings up to HV 2800, outlasting quenched alloy steels by over 1200%.",
    relevantProductSlugs: ["fused-tungsten-carbide-powder-ftc", "tungsten-carbide-powder-wc"],
    requiredCharacteristics: [
      "Cast eutectic W₂C/WC microstructure with extreme microhardness",
      "High wetting compatibility with bronze, nickel, and cobalt matrix brazing",
      "Resistance to erosive micro-cutting by high-velocity sand particles",
    ],
    typicalUseCases: [
      "Dredging pump impellers and pipeline wear liners",
      "Cement plant clinker grinding roller tires",
      "Agricultural tillage sweeps and asphalt planer skids",
    ],
    imageUrl: "/images/materials/cnc-aerospace-tooling.jpg",
    imageAlt: "Heavy wear-resistant metallurgical cladding and industrial pump components",
  },
  {
    id: "app-05",
    slug: "aerospace",
    name: "Aerospace",
    shortTag: "Turbine Alloys & Gyro Balances",
    headline: "High-Density Alloys & Thermal Barrier Coatings for Flight Systems",
    materialChallenge:
      "Weight distribution constraints in flight control surfaces and extreme turbine operating temperatures exceeding 1300°C.",
    solutionOverview:
      "Ultra-dense tungsten alloys (17.5 – 19.2 g/cm³) for compact mass balancing, combined with high-purity precursor oxides for advanced thermal barrier coatings.",
    relevantProductSlugs: ["tungsten-metal-powder-w", "tungsten-trioxide-wo3", "magnesium-metal-turnings-and-chips"],
    requiredCharacteristics: [
      "Theoretical density approaching pure gold (up to 19.25 g/cm³)",
      "High modulus of elasticity (411 GPa) eliminating aerodynamic flutter",
      "Strict AMS and ASTM aerospace material specification compliance",
    ],
    typicalUseCases: [
      "Aileron, rudder, and rotor blade dynamic counterweights",
      "Satellite reaction wheel rims and inertial navigation gyroscopes",
      "Jet engine turbine blade thermal barrier coating dopants",
    ],
    imageUrl: "/images/materials/lab-sem-microscopy.jpg",
    imageAlt: "Aerospace turbine engine components and high-precision flight alloy structures",
  },
  {
    id: "app-06",
    slug: "defence",
    name: "Defence",
    shortTag: "Kinetic Mass & Radiation Shielding",
    headline: "Refractory Metallurgy Engineered for Demanding Strategic Systems",
    materialChallenge:
      "Demanding requirements for ultra-dense kinetic mass, ionizing radiation attenuation, and non-magnetic tactical armor inserts.",
    solutionOverview:
      "Tungsten heavy alloys (W-Ni-Fe and W-Ni-Co) delivering outstanding density and ductility without environmental or radiological hazards.",
    relevantProductSlugs: ["tungsten-metal-powder-w", "ammonium-para-tungstate-apt"],
    requiredCharacteristics: [
      "High attenuation coefficient against gamma and X-ray radiation",
      "High dynamic shear yield strength under ballistic strain rates",
      "Ultra-pure elemental chemistry preventing brittle intermetallic phases",
    ],
    typicalUseCases: [
      "Radiation shielding collimators and isotope transport containers",
      "Dense anti-vibration inertia modules for naval fire control systems",
      "Specialty tungsten penetrator cores and fragmentation sleeves",
    ],
    imageUrl: "/images/materials/blast-furnace-molten.jpg",
    imageAlt: "Precision machined dense metallic alloy cylindrical components",
  },
  {
    id: "app-07",
    slug: "energy",
    name: "Energy",
    shortTag: "Oil & Gas, Nuclear & Geothermal",
    headline: "Withstanding Downhole High-Pressure, High-Temperature (HPHT) Environments",
    materialChallenge:
      "Corrosive hydrogen sulfide (H₂S), high sand velocities, and temperatures surpassing 200°C in geothermal and ultra-deep oilfield exploration.",
    solutionOverview:
      "High-density non-magnetic tungsten logging weights and fused carbide matrix hardfacing designed for directional MWD/LWD drilling tools.",
    relevantProductSlugs: ["fused-tungsten-carbide-powder-ftc", "tungsten-carbide-powder-wc", "tungsten-metal-powder-w"],
    requiredCharacteristics: [
      "Total non-magnetic permeability for accurate directional sensors",
      "Extreme cavitation and high-pressure fluid erosion resistance",
      "High mechanical integrity under severe downhole shock loads",
    ],
    typicalUseCases: [
      "Measurement While Drilling (MWD) tool sinker bars",
      "Centrifugal choke valves and blowout preventer (BOP) trim",
      "Geothermal steam turbine nozzle erosion claddings",
    ],
    imageUrl: "/images/materials/cnc-aerospace-tooling.jpg",
    imageAlt: "Heavy energy infrastructure valves and high-pressure drilling equipment",
  },
  {
    id: "app-08",
    slug: "electronics",
    name: "Electronics",
    shortTag: "Semiconductors & Thermal Dissipation",
    headline: "Thermal Conductivity Matching Silicon & High-Voltage Arc Resistance",
    materialChallenge:
      "Thermal expansion mismatch between high-power semiconductors and packaging substrates causing thermal fatigue failure.",
    solutionOverview:
      "Copper-Tungsten (Cu-W) powder blends and ultra-pure tungsten precursors with tailored coefficients of thermal expansion (CTE 6.5 – 9.0 × 10⁻⁶/K).",
    relevantProductSlugs: ["tungsten-metal-powder-w", "tungsten-trioxide-wo3", "sodium-tungstate"],
    requiredCharacteristics: [
      "High thermal conductivity (> 190 W/m·K in sintered Cu-W)",
      "CTE closely matched to silicon (Si) and gallium arsenide (GaAs)",
      "High breakdown arc erosion resistance in vacuum switchgears",
    ],
    typicalUseCases: [
      "High-power semiconductor microelectronic heat sinks and spreaders",
      "High-voltage electrical contactors and vacuum interrupter contacts",
      "Thin-film sputtering targets for semiconductor barrier layers",
    ],
    imageUrl: "/images/materials/autoclave-digestion.jpg",
    imageAlt: "Semiconductor microelectronic wafers and high-precision heat sinks",
  },
  {
    id: "app-09",
    slug: "additive-manufacturing",
    name: "Additive Manufacturing",
    shortTag: "LPBF, EBM & Cold Spray",
    headline: "Spherical Refractory Metal Powders for 3D Printing",
    materialChallenge:
      "Poor flowability, satellite particles, and porosity defects when 3D printing heavy refractory metals like tungsten.",
    solutionOverview:
      "Plasma-spheroidized tungsten and tungsten carbide powders characterized by perfect sphericity, satellite-free surfaces, and internal density > 99.8%.",
    relevantProductSlugs: ["tungsten-metal-powder-w", "fused-tungsten-carbide-powder-ftc"],
    requiredCharacteristics: [
      "High sphericity index (> 0.92) with zero internal hollow pores",
      "Optimized PSD (15 – 45 µm for LPBF, 45 – 105 µm for EBM)",
      "Exceptional flowability through laser powder bed recoater blades",
    ],
    typicalUseCases: [
      "Conformal cooling channels in hot work dies and injection molds",
      "Complex anti-scatter grids for medical CT scanning detectors",
      "Rocket engine thrust chamber injectors and rocket nozzles",
    ],
    imageUrl: "/images/materials/wc-carbide-powder.jpg",
    imageAlt: "Metal additive manufacturing 3D printing chamber and spherical powder bed",
  },
  {
    id: "app-10",
    slug: "chemicals-and-catalysts",
    name: "Chemicals and Catalysts",
    shortTag: "Hydroprocessing & Specialty Synthesis",
    headline: "High-Activity Metal Salts & Oxides for Petrochemicals",
    materialChallenge:
      "Rapid catalyst deactivation and low selectivity caused by metal precursor impurity contamination.",
    solutionOverview:
      "High-purity Ammonium Para Tungstate, Tungstic Acid, and Cobalt Acetate synthesized with strictly controlled trace sulfur, phosphorus, and iron limits.",
    relevantProductSlugs: ["ammonium-para-tungstate-apt", "tungstic-acid", "cobalt-acetate", "sodium-tungstate"],
    requiredCharacteristics: [
      "Ultra-pure active metal stoichiometry",
      "High specific surface area and rapid dissolution kinetics",
      "Low trace alkali content eliminating unwanted side reactions",
    ],
    typicalUseCases: [
      "Refinery hydrodesulfurization (HDS) and hydrocracking catalysts",
      "Purified terephthalic acid (PTA) liquid oxidation catalysts",
      "Selective catalytic reduction (SCR) for industrial NOx emission abatement",
    ],
    imageUrl: "/images/materials/wo3-yellow-oxide.jpg",
    imageAlt: "Chemical processing reactor and catalyst laboratory synthesis",
  },
  {
    id: "app-11",
    slug: "welding-and-hardfacing",
    name: "Welding and Hardfacing",
    shortTag: "PTA, Laser Cladding & Wire",
    headline: "Extreme Abrasive Claddings for Demanding Surface Engineering",
    materialChallenge:
      "Premature dissolution of carbide grains in molten weld puddles leading to loss of abrasive wear resistance.",
    solutionOverview:
      "Engineered Fused Tungsten Carbide (FTC) particles with specialized grain morphology designed to minimize molten dissolution during laser and plasma cladding.",
    relevantProductSlugs: ["fused-tungsten-carbide-powder-ftc", "tungsten-carbide-powder-wc"],
    requiredCharacteristics: [
      "Controlled particle geometry for steady pneumatic powder feeding",
      "High thermal stability minimizing carbide decomposition into the weld matrix",
      "Optimal grain distribution maximizing carbide packing density",
    ],
    typicalUseCases: [
      "Plasma Transferred Arc (PTA) wear plates for mining dump trucks",
      "Automated robotic laser cladding of oil tool stabilizer blades",
      "Hardfacing tubular welding electrodes and continuous flux-cored wires",
    ],
    imageUrl: "/images/materials/wc-carbide-powder.jpg",
    imageAlt: "High-energy automated laser cladding and welding hardfacing arc",
  },
  {
    id: "app-12",
    slug: "heavy-engineering",
    name: "Heavy Engineering",
    shortTag: "Steelworks, Forging & Rolling Mills",
    headline: "Reliable Metallurgical Additives & Desulfurizers for Steel Production",
    materialChallenge:
      "Tramp sulfur and dissolved gases deteriorating mechanical toughness in structural steel plate and continuous casting.",
    solutionOverview:
      "High-purity Magnesium Metal Powder and turnings for deep hot-metal desulfurization in torpedo cars and steel transfer ladles.",
    relevantProductSlugs: ["magnesium-metal-powder", "magnesium-metal-turnings-and-chips"],
    requiredCharacteristics: [
      "Active metallic magnesium content > 99.80%",
      "Engineered granulometry allowing smooth pneumatic injection without lance clogging",
      "Rapid dissolution kinetics in molten steel baths at 1450°C",
    ],
    typicalUseCases: [
      "Hot-metal desulfurization in blast furnace torpedo ladles",
      "Nodular / ductile iron melt inoculation in foundry casting",
      "Titanium sponge reduction via the pyrometallurgical Kroll cycle",
    ],
    imageUrl: "/images/materials/wc-carbide-powder.jpg",
    imageAlt: "Heavy steel manufacturing facility with molten steel ladle pouring",
  },
];
