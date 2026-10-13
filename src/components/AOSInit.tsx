
"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSInit() {
  const pathname = usePathname();

  // Initialize AOS once
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: false,
      mirror: true,
      offset: 80,
      delay: 0,
      anchorPlacement: "top-bottom",
    });

    return () => {
      // AOS has no destroy method; initialization is kept once.
    };
  }, []);

  // Refresh animations whenever the page changes
  useEffect(() => {
    // Start each new page from the top
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });

    // Reset previous animation state
    const resetAnimations = () => {
      document.querySelectorAll<HTMLElement>("[data-aos]").forEach((el) => {
        el.classList.remove("aos-animate");
      });

      AOS.refreshHard();
    };

    const timer = window.setTimeout(resetAnimations, 150);

    return () => {
      window.clearTimeout(timer);
    };
  }, [pathname]);

  return null;
}
