export interface SiteConfig {
  brandName: string;
  tagline: string;
  heroHeadline: string;
  heroSupportingCopy: string;
  legalEntity: string;
  associateCompany: {
    displayName: string;
    legalName: string;
    relationship: string;
    description: string;
  };
  contact: {
    phone: string;
    email: string;
    technicalEmail: string;
    salesEmail: string;
    whatsapp: string;
    headquarters: {
      address: string;
      city: string;
      country: string;
      postalCode: string;
    };
    manufacturingFacility: {
      facilityName: string;
      location: string;
      zone: string;
      country: string;
    };
  };
  navigation: {
    label: string;
    href: string;
    isMega?: boolean;
  }[];
  productCategories: {
    id: string;
    name: string;
    slug: string;
    description: string;
    itemCount: number;
  }[];
}

export const siteConfig: SiteConfig = {
  brandName: "PROMETALLIK",
  tagline: "RAW POWER. ENGINEERED PRECISION.",
  heroHeadline: "FROM RAW STRENGTH TO ENGINEERED PERFORMANCE.",
  heroSupportingCopy:
    "Advanced metals, specialty powders and industrial materials developed for performance-critical manufacturing environments.",
  legalEntity: "PROMETALLIK Advanced Materials GmbH & Co. KG",
  associateCompany: {
    // Configurable display name per requirement (can be switched to JAIN International)
    displayName: "JAN International",
    legalName: "JAN International Industrial Trading & Logistics",
    relationship: "Global Distribution & Strategic Sourcing Partner",
    description:
      "Strategic distribution arm providing integrated global supply chain architecture, specialized maritime forwarding, and regulatory trade compliance across European, Asian, and Transatlantic industrial corridors.",
  },
  contact: {
    phone: "+49 (0) 211 884 9200",
    email: "contact@prometallik.com",
    technicalEmail: "engineering@prometallik.com",
    salesEmail: "rfq@prometallik.com",
    whatsapp: "+49 170 542 9811",
    headquarters: {
      address: "Königsallee 92A, Industrial Trade Center",
      city: "Düsseldorf",
      country: "Germany",
      postalCode: "40212",
    },
    manufacturingFacility: {
      facilityName: "Ruhr Metallurgical Works & Powder Facility",
      location: "Industriepark Hafenbecken 4",
      zone: "Duisburg Industrial Port",
      country: "Germany",
    },
  },
  navigation: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Products", href: "/products", isMega: true },
    { label: "Manufacturing", href: "/manufacturing" },
    { label: "Quality", href: "/quality" },
    { label: "Applications", href: "/applications" },
    { label: "Sustainability", href: "/sustainability" },
    { label: "JAN International", href: "/jan-international" },
    { label: "Contact", href: "/contact" },
  ],
  productCategories: [
    {
      id: "tungsten-intermediates",
      name: "Tungsten Intermediates",
      slug: "tungsten-intermediates",
      description: "High-purity chemical precursor compounds refined through hydrothermal digestion and calcination.",
      itemCount: 4,
    },
    {
      id: "tungsten-powders",
      name: "Tungsten Powders",
      slug: "tungsten-powders",
      description: "Precisely classified micron and submicron refractory powders with controlled particle size distribution.",
      itemCount: 2,
    },
    {
      id: "carbide-materials",
      name: "Carbide Materials",
      slug: "carbide-materials",
      description: "Engineered mono-carbide, fused eutectic, and ready-to-press graded metallurgical powders.",
      itemCount: 2,
    },
    {
      id: "cobalt-compounds",
      name: "Cobalt Compounds",
      slug: "cobalt-compounds",
      description: "Chemical salts and oxides serving as critical catalytic and sintering binder matrix agents.",
      itemCount: 2,
    },
    {
      id: "magnesium-materials",
      name: "Magnesium Materials",
      slug: "magnesium-materials",
      description: "Reactive pyrometallurgical turnings, high-purity granules, and atomized elemental powders.",
      itemCount: 2,
    },
  ],
};
