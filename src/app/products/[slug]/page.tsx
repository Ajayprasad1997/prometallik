import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { productsCatalogue, Product, MANDATORY_DISCLAIMER } from "@/data/products";
import ProductDetailClient from "./ProductDetailClient";

export async function generateStaticParams() {
  return productsCatalogue.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = productsCatalogue.find((p) => p.slug === slug);
  if (!product) {
    return { title: "Product Not Found | PROMETALLIK" };
  }

  return {
    title: `${product.name} (${product.chemicalFormula}) | PROMETALLIK`,
    description: product.shortDescription,
    openGraph: {
      title: `${product.name} — Technical Specification | PROMETALLIK`,
      description: product.shortDescription,
      images: [{ url: product.imageUrl }],
    },
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = productsCatalogue.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  // Get related products from the same category or adjacent
  const relatedProducts = productsCatalogue
    .filter((p) => p.id !== product.id && p.categorySlug === product.categorySlug)
    .slice(0, 3);

  return (
    <>
      {/* Product Structured Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Product",
            name: product.name,
            image: [product.imageUrl],
            description: product.productOverview,
            category: product.category,
            brand: {
              "@type": "Brand",
              name: "PROMETALLIK",
            },
            material: product.chemicalFormula,
          }),
        }}
      />
      <ProductDetailClient product={product} relatedProducts={relatedProducts} />
    </>
  );
}
