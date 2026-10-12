import HeroSection from "@/components/sections/HeroSection";
import AboutOverviewSection from "@/components/sections/AboutOverviewSection";
import ScrollIndustrialStory from "@/components/sections/ScrollIndustrialStory";
import WhatWeOfferSection from "@/components/sections/WhatWeOfferSection";
import ProductExplorerSection from "@/components/sections/ProductExplorerSection";
// import PlantFacilitySection from "@/components/sections/PlantFacilitySection";
import WhatWeOffer from "@/components/sections/WhatWeOffer";
import CuttingMachineVideoSection from "@/components/sections/CuttingMachineVideoSection";
import RecyclingInteractiveSection from "@/components/sections/RecyclingInteractiveSection";
import QualitySection from "@/components/sections/QualitySection";
import ArticlesSection from "@/components/sections/ArticlesSection";
import DownloadCentreSection from "@/components/sections/DownloadCentreSection";
import QuoteEnquirySection from "@/components/sections/QuoteEnquirySection";
import ContactSectionWithMap from "@/components/sections/ContactSectionWithMap";
import FinalCtaSection from "@/components/sections/FinalCtaSection";

export default function HomePage() {
  return (
    <div className="w-full flex flex-col">
      {/* 1. Opening Video / Welcome Section */}
      <HeroSection />

      {/* 2. About PROMETALLIK */}
      <AboutOverviewSection />

      {/* 3. Scroll-Animated Industrial Story (Pinned Sequence) */}
      <ScrollIndustrialStory />

      {/* 4. What We Offer (6 Animated Cards) */}
      <WhatWeOfferSection />

      {/* 5. Product Explorer with Product Zoom */}
      <ProductExplorerSection />

      {/* 6. Plant and Manufacturing Facility */}
      {/* <PlantFacilitySection /> */}
       
      {/* 7. Cutting Machine Video Section */}
      <CuttingMachineVideoSection />

      {/* 8. Recycling and Responsible Production */}
      <RecyclingInteractiveSection />
<WhatWeOffer/>
      {/* 9. Quality and Certifications */}
      <QualitySection />

      {/* 10. Articles & Blogs */}
      <ArticlesSection />

      {/* 11. Download Centre / PDF Section ("Technical Resources") */}
      <DownloadCentreSection />

      {/* 12. Enquiry / Request a Quote */}
      <QuoteEnquirySection />

      {/* 13. Contact and Separate Google Map */}
      <ContactSectionWithMap />

      {/* 14. Final Call to Action */}
      <FinalCtaSection />
    </div>
  );
}
