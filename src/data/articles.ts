export interface Article {
  id: string;
  slug: string;
  title: string;
  category: "Metallurgy" | "Manufacturing" | "Recycling" | "Quality Assurance" | "Trade & Global Supply";
  publishDate: string;
  readTime: string;
  summary: string;
  content: string[];
  imageUrl: string;
  imageAlt: string;
  featured?: boolean;
  author: string;
  isPlaceholder: boolean;
}

export const articlesData: Article[] = [
  {
    id: "art-1",
    slug: "tungsten-in-modern-manufacturing",
    title: "Tungsten in Modern Manufacturing: Properties and Strategic Importance",
    category: "Metallurgy",
    publishDate: "October 2026",
    readTime: "5 min read",
    summary:
      "An in-depth look at tungsten's unmatched melting point of 3422°C, exceptional thermal stability, and its indispensable role across global aerospace and tooling sectors.",
    content: [
      "Tungsten holds the highest melting point of all refractory metals and an extraordinary density comparable to gold. These physical fundamentals render it vital for severe operating environments.",
      "From high-velocity aerospace turbine components to semiconductor heat sinks and precision electrical contacts, tungsten intermediates form the bedrock of next-generation engineering.",
      "As global supply networks demand greater reliability and traceability, high-purity chemical precursors like Ammonium Paratungstate (APT) provide the starting point for defect-free sintered components.",
    ],
    imageUrl: "/assets/images/blogs/tungsten-manufacturing.jpg",
    imageAlt: "Refractory tungsten powder and sintering metallurgy",
    featured: true,
    author: "PROMETALLIK Metallurgy Desk",
    isPlaceholder: true,
  },
  {
    id: "art-2",
    slug: "understanding-tungsten-carbide-applications",
    title: "Understanding Tungsten Carbide Applications in Extreme Wear Conditions",
    category: "Manufacturing",
    publishDate: "September 2026",
    readTime: "4 min read",
    summary:
      "How stoichiometric carbon balance and precise cobalt binder distribution drive hardness and fracture toughness in heavy-duty CNC tooling and mining equipment.",
    content: [
      "Tungsten carbide (WC) is renowned for maintaining micro-structural hardness at elevated operating temperatures where high-speed steels soften and deform.",
      "The synergy between sub-micron WC grains and cobalt metal binder determines both wear resistance and impact toughness. Balancing these dual properties requires tight control over carburization kinetics.",
      "In industrial mining, stone sawing, and aerospace milling, premium-grade tungsten carbide powders yield longer tool lifespans and lower cycle downtime.",
    ],
    imageUrl: "/assets/images/blogs/cutting-applications.jpg",
    imageAlt: "Precision CNC tooling and wear-resistant carbide components",
    featured: false,
    author: "Technical Engineering Division",
    isPlaceholder: true,
  },
  {
    id: "art-3",
    slug: "metal-powder-handling-and-quality",
    title: "Metal Powder Handling and Quality: Preventing Oxidation and Segregation",
    category: "Quality Assurance",
    publishDate: "August 2026",
    readTime: "6 min read",
    summary:
      "Best practices for packaging, moisture prevention, and particle size distribution consistency during the storage and transit of refractory powders.",
    content: [
      "Fine refractory powders exhibit high specific surface areas, making them sensitive to atmospheric humidity and oxygen pickup.",
      "Effective industrial handling mandates desiccated packaging, hermetically sealed UN-certified drums, and nitrogen-purging procedures before dispatch.",
      "Standardized laser particle diffraction ensures that particle size distributions remain free from unwanted agglomeration across shipping cycles.",
    ],
    imageUrl: "/assets/images/blogs/quality-handling.jpg",
    imageAlt: "Powder metallurgy quality testing and laboratory analysis",
    featured: false,
    author: "Quality Assurance Team",
    isPlaceholder: true,
  },
  {
    id: "art-4",
    slug: "responsible-industrial-recycling",
    title: "Responsible Industrial Recycling: Closing the Loop on Critical Metals",
    category: "Recycling",
    publishDate: "July 2026",
    readTime: "5 min read",
    summary:
      "Exploring hydrometallurgical recycling routes for recovering tungsten and cobalt from spent carbide inserts and industrial grinding sludges.",
    content: [
      "With critical minerals facing growing international supply constraints, secondary resource recovery has emerged as an essential pillar of industrial resilience.",
      "Hydrometallurgical digestion enables the selective dissolution and chemical reconstitution of tungsten scrap back into premium APT and oxide grades.",
      "By closing the material loop, manufacturing operations diminish virgin mining reliance while substantially curtailing lifecycle energy consumption.",
    ],
    imageUrl: "/assets/images/products/apt-crystals.jpg",
    imageAlt: "Secondary metal recovery and chemical refining processes",
    featured: false,
    author: "Sustainability & Operations",
    isPlaceholder: true,
  },
  {
    id: "art-5",
    slug: "choosing-materials-for-wear-resistance",
    title: "Choosing Materials for Wear Resistance: Comparing Hardfacing Compounds",
    category: "Manufacturing",
    publishDate: "June 2026",
    readTime: "4 min read",
    summary:
      "A technical comparison between fused tungsten carbide, macrocrystalline WC, and cast carbides for abrasion resistance in severe environments.",
    content: [
      "Selecting the optimal hardfacing material requires balancing abrasive particle size against impact loading stresses.",
      "Fused tungsten carbide (FTC), comprising a eutectic mixture of WC and W₂C, delivers extreme microhardness values up to 2200 HV.",
      "Deploying the right matrix alloy guarantees superior bonding and minimizes crack propagation in demanding oil and gas drilling equipment.",
    ],
    imageUrl: "/assets/images/products/wc-carbide-powder.jpg",
    imageAlt: "Wear-resistant hardfacing materials and metallurgy",
    featured: false,
    author: "Materials Application Lab",
    isPlaceholder: true,
  },
  {
    id: "art-6",
    slug: "indian-manufacturing-for-global-markets",
    title: "Indian Manufacturing for Global Markets: Reliability, Standards & Scale",
    category: "Trade & Global Supply",
    publishDate: "May 2026",
    readTime: "5 min read",
    summary:
      "How India's advanced materials ecosystem is evolving to meet European DIN/ISO tolerances, global logistics readiness, and international buyer expectations.",
    content: [
      "India's chemical and advanced metallurgical manufacturing sectors are witnessing rapid modernization driven by digital process control and accredited testing.",
      "Exporting to quality-conscious European markets demands strict alignment with REACH registration, conflict-free mineral sourcing, and transparent analytical certificates.",
      "PROMETALLIK's production protocols bridge Indian manufacturing scale with the exacting technical benchmarks expected by international buyers.",
    ],
    imageUrl: "/assets/images/plant/packaging-delivery.jpg",
    imageAlt: "Export logistics and global industrial trade compliance",
    featured: false,
    author: "Corporate Strategy Team",
    isPlaceholder: true,
  },
];
