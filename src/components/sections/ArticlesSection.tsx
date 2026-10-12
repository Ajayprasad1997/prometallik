"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { articlesData, Article } from "@/data/articles";
import { ArrowRight, Clock, Calendar, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

export default function ArticlesSection() {
  const featuredArticle = articlesData.find((a) => a.featured) || articlesData[0];
  const latestArticles = articlesData.filter((a) => a.id !== featuredArticle.id).slice(0, 3);

  return (
    <section className="relative w-full bg-[#FFFFFF] text-[#111111] py-24 sm:py-32 overflow-hidden border-b border-[#D5DAE0]" id="articles-blogs">
      {/* Background Subtle Blueprint Grid */}
      <div className="absolute inset-0 bg-blueprint-pattern opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#D5DAE0]">
          <div>
            <div className="inline-flex items-center space-x-2 text-xs font-mono-tech uppercase tracking-[0.25em] text-[#0B2A4A] mb-3" data-aos="fade-up">
              <span className="w-5 h-[2px] bg-[#EF6C23]" />
              <span>KNOWLEDGE &amp; METALLURGY DESK</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-heading font-black tracking-tight text-[#0B2A4A] leading-[1.05]" data-aos="fade-left">
              Articles, Technical Insights &amp; Blogs
            </h2>
          </div>

          <div className="mt-4 md:mt-0 flex flex-col items-start md:items-end" data-aos="fade-up">
            <Link
              href="/blogs"
              className="inline-flex items-center text-xs font-heading font-bold uppercase tracking-wider text-[#0B2A4A] hover:text-[#EF6C23] transition-colors"
            >
              <span>View All Articles</span>
              <ArrowRight className="w-4 h-4 ml-2 text-[#EF6C23]" />
            </Link>
            <span className="text-[10px] font-mono-tech text-[#596573] mt-1">
              [Placeholder technical articles pending client approval]
            </span>
          </div>
        </div>

        {/* Featured Story + 3 Latest Cards Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Featured Article Card (Span 7) */}
          <div className="lg:col-span-7" data-aos="fade-right">
            <div className="bg-[#EEF0F2] rounded-xl overflow-hidden border border-[#D5DAE0] hover:border-[#EF6C23] transition-all shadow-xs hover:shadow-lg group flex flex-col justify-between">
              <div className="relative w-full h-[320px] sm:h-[380px] overflow-hidden bg-[#0B2A4A]">
                <Image
                  src={featuredArticle.imageUrl}
                  alt={featuredArticle.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover object-center filter contrast-105 transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2A4A]/90 via-transparent to-transparent pointer-events-none" />

                <div className="absolute top-4 left-4 flex items-center space-x-2">
                  <span className="px-3 py-1 bg-[#EF6C23] text-white text-[10px] font-mono-tech uppercase font-bold rounded">
                    FEATURED STORY
                  </span>
                  <span className="px-2.5 py-1 bg-[#0B2A4A]/90 text-white text-[10px] font-mono-tech uppercase rounded">
                    {featuredArticle.category}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex items-center space-x-4 text-xs font-mono-tech text-[#B8BEC5]">
                  <span className="flex items-center space-x-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#F5B400]" />
                    <span>{featuredArticle.publishDate}</span>
                  </span>
                  <span>&middot;</span>
                  <span className="flex items-center space-x-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#EF6C23]" />
                    <span>{featuredArticle.readTime}</span>
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-4">
                <h3 className="text-2xl sm:text-3xl font-heading font-black text-[#0B2A4A] group-hover:text-[#EF6C23] transition-colors leading-tight">
                  {featuredArticle.title}
                </h3>
                <p className="text-sm text-[#2B333B] leading-relaxed">
                  {featuredArticle.summary}
                </p>

                <div className="pt-4 border-t border-[#D5DAE0] flex items-center justify-between">
                  <span className="text-[11px] font-mono-tech text-[#596573]">
                    By {featuredArticle.author}
                  </span>
                  <Link
                    href={`/blogs`}
                    className="inline-flex items-center text-xs font-heading font-bold uppercase tracking-wider text-[#0B2A4A] group-hover:text-[#EF6C23] transition-colors"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-4 h-4 ml-1.5 text-[#EF6C23]" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* 3 Latest Article Cards Column (Span 5) */}
          <div className="lg:col-span-5 space-y-6">
            {latestArticles.map((article) => (
              <div
                key={article.id}
                className="bg-[#EEF0F2] rounded-lg p-5 border border-[#D5DAE0] hover:border-[#EF6C23] transition-all shadow-xs hover:shadow-md group flex gap-4 items-start"
              data-aos="fade-left">
                <div className="relative w-28 h-28 rounded overflow-hidden shrink-0 bg-[#0B2A4A]">
                  <Image
                    src={article.imageUrl}
                    alt={article.imageAlt}
                    fill
                    sizes="120px"
                    className="object-cover transition-transform duration-500 group-hover:scale-108"
                  />
                </div>

                <div className="flex-1 space-y-2">
                  <div className="flex items-center justify-between text-[10px] font-mono-tech text-[#596573]">
                    <span className="text-[#0B2A4A] font-bold uppercase">{article.category}</span>
                    <span>{article.readTime}</span>
                  </div>

                  <h4 className="text-sm font-heading font-extrabold text-[#0B2A4A] group-hover:text-[#EF6C23] transition-colors leading-snug line-clamp-2">
                    {article.title}
                  </h4>

                  <p className="text-[11px] text-[#2B333B] line-clamp-2 leading-relaxed">
                    {article.summary}
                  </p>

                  <div className="pt-1">
                    <Link
                      href="/blogs"
                      className="inline-flex items-center text-[10px] font-mono-tech uppercase tracking-wider font-bold text-[#EF6C23] hover:text-[#0B2A4A] transition-colors"
                    >
                      <span>Read Insight &rarr;</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
