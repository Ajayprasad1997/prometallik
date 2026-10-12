export interface NavItem {
  label: string;
  href: string;
  description?: string;
}

export interface WhatWeOfferCard {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  tag: string;
}

export interface StoryStage {
  id: string;
  step: string;
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  technicalMetric: string;
  tag: string;
}

export interface StatPlaceholder {
  label: string;
  placeholderValue: string;
  statusText: string;
  unit: string;
  description: string;
   countTo?: number;
}

export const siteContent = {
  brand: {
    name: "PROMETALLIK",
    legalName: "PROMETALLIK ADVANCED MATERIALS PRIVATE LIMITED",
    tagline: "ENGINEERING STRENGTH. DELIVERING TRUST",
    subTagline: "Refractory Metals, Engineered Compounds & Precision Powder Metallurgy",
    origin: "India",
    globalExhibitionSpec: "Exhibition-Ready & International Trade Compliance",
  },

  navigation: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Products", href: "/products" },
    { label: "Manufacturing", href: "/manufacturing" },
    { label: "Quality", href: "/quality" },
    { label: "Sustainability", href: "/sustainability" },
    { label: "Articles & Blogs", href: "/blogs" },
    { label: "Contact", href: "/contact" },
  ] as NavItem[],

  hero: {
    eyebrow: "ENGINEERING STRENGTH. DELIVERING TRUST",
    headline: "Precision Metals for Industries That Shape the Future.",
    supportingCopy:
      "PROMETALLIK delivers advanced tungsten, cobalt, magnesium and engineered metal solutions backed by responsible manufacturing and dependable technical support.",
    primaryCta: {
      label: "Explore Our Products",
      href: "/products",
    },
    secondaryCta: {
      label: "Request a Quote",
      href: "#quote",
    },
    profileDownload: {
      label: "Download Company Profile",
      href: "/assets/pdfs/company-profile.pdf",
    },
    scrollIndicator: "Scroll to Explore",
    video: {
      src: "/assets/video/hero-welcome.mp4",
      poster: "/assets/video/hero-welcome-poster.webp",
      label: "Cinematic industrial welcome sequence",
    },
  },

  about: {
    eyebrow: "Corporate Overview",
    headline: "Building Value Through Advanced Metal Solutions",
    description:
      "PROMETALLIK is an Indian industrial enterprise dedicated to high-purity refractory metallurgy, specialized chemical intermediates, and precision engineered powders. Combining advanced hydrometallurgical processing with exacting quality control, we provide international manufacturing partners with dependable, high-integrity materials.",
    featuredClientImage: {
      src: "/assets/images/user-provided/featured-client-image.webp",
      alt: "PROMETALLIK Manufacturing Excellence — Client Designated Industrial Feature",
      caption: "Precision Metallurgical Processing & Materials Handling",
    },
    
statsPlaceholders: [
  {
    label: "Years of Experience",
    placeholderValue: "25+ Years",
    countTo: 25,
    // statusText: "Industrial Experience",
    unit: "Years",
    // description: "Industrial metallurgy operational pedigree",
    
  },
  {
    label: "Engineered Products",
    placeholderValue: "12+ Formulations",
    countTo: 12,
    // statusText: "Catalogued Intermediates & Powders",
    unit: "Grades",
    // description: "Tungsten, Cobalt & Magnesium compounds",
  },
  {
    label: "Markets Served",
    placeholderValue: "50+",
    countTo: 50,
    // statusText: "Domestic & Global Export Routes",
    unit: "Global",
    // description: "European and international markets",
  },
  {
    label: "Production Capability",
    placeholderValue: "500+",
    countTo: 500,
    // statusText: "Annual Production Capacity",
    unit: "MT / Annum",
    // description: "Controlled furnace & hydrometallurgical throughput",
  },
] as StatPlaceholder[],
  },

  industrialStory: {
    headline: "From Raw Material to Engineered Performance",
    subheadline: "A Pinned Metamorphosis of High-Purity Refractory Metallurgy",
    stages: [
      {
        id: "stage-1",
        step: "01",
        title: "Raw Materials",
        subtitle: "High-grade mineral ores & certified concentrates",
        description:
          "Sourcing verified scheelite and wolframite concentrates with strict analytical validation of primary elemental ratios and trace impurity thresholds.",
        imageUrl: "/assets/images/products/tungsten-mineral-ore.jpg",
        technicalMetric: "Assay Validation: WO₃ Concentration ≥ 65%",
        tag: "Extraction & Feedstock",
      },
      {
        id: "stage-2",
        step: "02",
        title: "Controlled Processing",
        subtitle: "Hydrometallurgical digestion & thermal calcination",
        description:
          "High-pressure autoclave alkaline leaching, ion-exchange purification, and rotary kiln calcination converting precursors into stoichiometric pure oxides.",
        imageUrl: "/assets/images/plant/plant-floor.jpg",
        technicalMetric: "Atmospheric Control: Dry H₂ Gas Loops",
        tag: "Hydrometallurgy",
      },
      {
        id: "stage-3",
        step: "03",
        title: "Precision Engineering",
        subtitle: "Hydrogen reduction & carburization furnaces",
        description:
          "Computerized multi-tube reduction furnaces converting oxides to metallic tungsten and tungsten carbide powders with controlled Fisher sub-sieve sizer (FSSS) distributions.",
        imageUrl: "/assets/images/products/wc-carbide-powder.jpg",
        technicalMetric: "Granulometry: 0.8 µm to 45 µm Tailored",
        tag: "Powder Metallurgy",
      },
      {
        id: "stage-4",
        step: "04",
        title: "Quality Inspection",
        subtitle: "Laser diffraction & spectroscopic verification",
        description:
          "Rigorous batch release protocols including Malvern laser particle sizing, Fisher porosity measurement, and ICP-OES elemental analysis.",
        imageUrl: "/assets/images/plant/quality-inspection.jpg",
        technicalMetric: "Analytical Accuracy: Sub-PPM Trace Detection",
        tag: "Laboratory Governance",
      },
      {
        id: "stage-5",
        step: "05",
        title: "Packaging and Delivery",
        subtitle: "Hermetic barrier protection & global export dispatch",
        description:
          "Desiccated vacuum-sealed nitrogen-purged drums and heavy-gauge export packaging ready for sea and air freight to international industrial hubs.",
        imageUrl: "/assets/images/plant/packaging-delivery.jpg",
        technicalMetric: "Packaging: Moisture-Resistant UN-Rated Drums",
        tag: "Export Logistics",
      },
    ] as StoryStage[],
  },

  whatWeOffer: {
    eyebrow: "Core Capabilities",
    headline: "Engineered Metallurgy Across Demanding Sectors",
    description: "Explore our integrated product portfolio spanning refined chemical precursors, refractory metal powders, and technical support.",
    cards: [
      {
        id: "offer-1",
        title: "Advanced Metal Compounds",
        description: "High-purity chemical intermediates and crystallized tungstates synthesized under strict stoichiometric discipline.",
        imageUrl: "/assets/images/products/apt-crystals.jpg",
        link: "/products?category=tungsten-intermediates",
        tag: "Chemical Precursors",
      },
      {
        id: "offer-2",
        title: "Tungsten Products",
        description: "Ultra-pure tungsten metal powders, yellow oxides, and engineered grades tailored for refractory and electronic applications.",
        imageUrl: "/assets/images/products/wo3-yellow-oxide.jpg",
        link: "/products?category=tungsten-intermediates",
        tag: "Refractory Metals",
      },
      {
        id: "offer-3",
        title: "Cobalt Products",
        description: "Inorganic cobalt oxides and organic salts serving as critical binder agents in cemented carbides and specialized chemical synthesis.",
        imageUrl: "/assets/images/products/cobalt-chemicals.jpg",
        link: "/products?category=cobalt-chemicals",
        tag: "Matrix Binders",
      },
      {
        id: "offer-4",
        title: "Magnesium Products",
        description: "Precision-graded magnesium turnings and high-purity powders for Grignard reagents, pyrotechnics, and defense metallurgy.",
        imageUrl: "/assets/images/products/magnesium-turnings.jpg",
        link: "/products?category=magnesium-materials",
        tag: "Reactivity & Alloys",
      },
      {
        id: "offer-5",
        title: "Custom Material Requirements",
        description: "Tailored particle size distribution, specialized chemical dopants, and custom granulations engineered to client specifications.",
        imageUrl: "/assets/images/products/cnc-aerospace-tooling.jpg",
        link: "/contact",
        tag: "Bespoke Metallurgy",
      },
      {
        id: "offer-6",
        title: "Technical and Commercial Support",
        description: "Comprehensive analytical documentation, batch Certificates of Analysis, and reliable international logistics support.",
        imageUrl: "/assets/images/plant/quality-inspection.jpg",
        link: "/quality",
        tag: "Global Support",
      },
    ] as WhatWeOfferCard[],
  },

  plantFacility: {
    headline: "Inside Our Manufacturing Facility",
    description: "Modern infrastructure engineered for safety, precision thermal handling, and environmental compliance.",
    markers: [
      { id: "m1", title: "Atmosphere-Controlled Reduction Line", x: "28%", y: "42%" },
      { id: "m2", title: "Continuous Ion-Exchange Purification", x: "62%", y: "35%" },
      { id: "m3", title: "Automated Rotary Calcination Unit", x: "44%", y: "68%" },
      { id: "m4", title: "Analytical Quality Assurance Lab", x: "78%", y: "58%" },
    ],
  },

  cuttingMachine: {
    headline: "Precision in Every Cut",
    supportingText:
      "Advanced processing and controlled operations help us maintain consistency across industrial material requirements.",
    video: {
      src: "/assets/video/cutting-machine.mp4",
      poster: "/assets/video/cutting-machine-poster.webp",
      label: "Industrial cutting and processing footage",
    },
    bulletPoints: [
      "Rigid dimensional tolerance down to micron parameters",
      "Minimized thermal degradation through active cooling and controlled feeds",
      "Exceptional surface finish ready for extreme industrial duty",
    ],
  },

  recycling: {
    headline: "Responsible Materials. Smarter Industry.",
    description:
      "At PROMETALLIK, circular material thinking is integrated into our operational philosophy. Through chemical recovery and closed-loop hydrometallurgical refining, we extend the lifecycle of critical transition metals.",
    themes: [
      {
        title: "Responsible Sourcing",
        desc: "Strict adherence to conflict-free raw material procurement and verified supply chain ethics.",
      },
      {
        title: "Material Recovery",
        desc: "Advanced chemical recycling techniques for tungsten scrap and secondary metallurgical residues.",
      },
      {
        title: "Efficient Processing",
        desc: "Counter-current solvent recovery and automated thermal management designed to minimize energy consumption.",
      },
      {
        title: "Waste Reduction",
        desc: "Zero-liquid-discharge (ZLD) operational objectives through internal process water recycling.",
      },
      {
        title: "Circular Material Thinking",
        desc: "Transforming industrial byproducts back into high-purity precursor salts and reusable powders.",
      },
      {
        title: "Long-term Industrial Responsibility",
        desc: "Preserving global natural reserves while securing dependable supply chains for future generations.",
      },
    ],
  },

  finalCta: {
    headline: "Looking for a Reliable Advanced-Metals Partner?",
    supportingText: "Share your product, quantity and technical requirements with our team.",
    buttons: [
      { label: "Request a Quote", href: "#quote", variant: "primary" },
      { label: "Contact Our Team", href: "/contact", variant: "secondary" },
      { label: "Download Catalogue", href: "/assets/pdfs/product-catalogue.pdf", variant: "outline" },
    ],
  },
};
