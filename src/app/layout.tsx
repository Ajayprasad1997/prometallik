import type { Metadata } from "next";
import { Space_Grotesk, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

import { ModalProvider } from "@/context/ModalContext";
import SmoothScroll from "@/components/motion/SmoothScroll";
import Preloader from "@/components/motion/Preloader";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import RfqModal from "@/components/ui/RfqModal";
import SampleDocumentModal from "@/components/ui/SampleDocumentModal";
import StickyContactBar from "@/components/ui/StickyContactBar";
import AOSInit from "@/components/AOSInit";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "PROMETALLIK — Advanced Materials. Engineered in India. | Exhibition Grade Metallurgy",
  description:
    "PROMETALLIK delivers advanced tungsten, cobalt, magnesium and engineered metal solutions backed by responsible manufacturing and dependable technical support for international buyers.",
  keywords: [
    "PROMETALLIK",
    "Advanced Materials India",
    "Tungsten Metal Powder",
    "Tungsten Carbide WC",
    "Ammonium Para Tungstate APT",
    "Fused Tungsten Carbide",
    "Cobalt Oxide",
    "Magnesium Turnings",
    "Indian Advanced Metallurgy",
    "Exhibition Ready Metallurgy",
  ],
  authors: [{ name: "PROMETALLIK Advanced Materials" }],
  openGraph: {
    title: "PROMETALLIK — Advanced Materials. Engineered in India.",
    description:
      "Precision metals for industries that shape the future. Tungsten, cobalt, magnesium and engineered metallurgical solutions.",
    url: "https://prometallik.com",
    siteName: "PROMETALLIK",
    images: [
      {
        url: "/assets/images/products/blast-furnace-molten.jpg",
        width: 1200,
        height: 630,
        alt: "PROMETALLIK Advanced Metallurgy",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${ibmPlexMono.variable} antialiased bg-[#EEF0F2] text-[#111111]`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>

      <body className="min-h-screen flex flex-col bg-[#EEF0F2] text-[#111111] selection:bg-[#EF6C23] selection:text-white">
        <AOSInit />

        <ModalProvider>
          <SmoothScroll>
            <Preloader />
            <Header />

            <main className="flex-1 flex flex-col">
              {children}
            </main>

            <Footer />

            <RfqModal />
            <SampleDocumentModal />
            <StickyContactBar />
          </SmoothScroll>
        </ModalProvider>
      </body>
    </html>
  );
}