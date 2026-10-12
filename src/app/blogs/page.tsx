"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { articlesData, Article } from "@/data/articles";
import { Search, Calendar, Clock, ArrowRight, BookOpen, Mail, Filter, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function BlogsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [visibleCount, setVisibleCount] = useState<number>(6);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const categories = ["All", "Metallurgy", "Manufacturing", "Recycling", "Quality Assurance", "Trade & Global Supply"];

  const filteredArticles = articlesData.filter((article) => {
    const matchesCategory = selectedCategory === "All" || article.category === selectedCategory;
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featured = articlesData.find((a) => a.featured) || articlesData[0];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
    }
  };

  return (
    <div className="w-full flex flex-col bg-[#EEF0F2] text-[#111111] min-h-screen pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Page Hero */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-mono-tech uppercase tracking-[0.25em] text-[#0B2A4A] mb-3">
            <span className="w-5 h-[2px] bg-[#EF6C23]" />
            <span>KNOWLEDGE DESK &amp; EDITORIAL</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-black tracking-tight text-[#0B2A4A] leading-[1.05]">
            Industrial Articles &amp; Technical Blogs
          </h1>
          <p className="mt-4 text-sm sm:text-base text-[#596573] leading-relaxed">
            Technical perspectives, refractory research, and powder metallurgy insights from PROMETALLIK.
          </p>
          <div className="mt-3 inline-block px-3 py-1 bg-[#F5B400]/20 border border-[#F5B400] text-[#0B2A4A] text-xs font-mono-tech rounded">
            [Notice: Safe placeholder articles provided pending official client publication approval]
          </div>
        </div>

        {/* Featured Story Banner */}
        <div className="mb-16 bg-white rounded-xl overflow-hidden border border-[#D5DAE0] shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 relative h-[320px] sm:h-[420px] bg-[#0B2A4A]">
            <Image
              src={featured.imageUrl}
              alt={featured.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute top-4 left-4 px-3 py-1 bg-[#EF6C23] text-white text-[10px] font-mono-tech uppercase font-bold rounded">
              FEATURED ANALYSIS
            </div>
          </div>

          <div className="lg:col-span-5 p-6 sm:p-10 space-y-4">
            <div className="flex items-center space-x-3 text-xs font-mono-tech text-[#596573]">
              <span className="text-[#0B2A4A] font-bold uppercase">{featured.category}</span>
              <span>&middot;</span>
              <span>{featured.readTime}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-heading font-black text-[#0B2A4A] leading-tight">
              {featured.title}
            </h2>

            <p className="text-sm text-[#2B333B] leading-relaxed">
              {featured.summary}
            </p>

            <div className="pt-4 border-t border-[#D5DAE0] flex items-center justify-between text-xs font-mono-tech text-[#596573]">
              <span>Published: {featured.publishDate}</span>
              <span className="text-[#EF6C23] font-bold">Author: {featured.author}</span>
            </div>
          </div>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="bg-white p-6 rounded-xl border border-[#D5DAE0] shadow-xs mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#596573]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search articles by keyword..."
              className="w-full pl-10 pr-4 py-2 text-xs font-sans bg-[#EEF0F2] border border-[#D5DAE0] rounded focus:outline-hidden focus:border-[#EF6C23]"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar w-full md:w-auto pb-2 md:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded text-xs font-mono-tech uppercase tracking-wider transition-all shrink-0 ${
                  selectedCategory === cat
                    ? "bg-[#0B2A4A] text-white font-bold"
                    : "bg-[#EEF0F2] text-[#2B333B] hover:bg-[#D5DAE0]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Responsive Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredArticles.slice(0, visibleCount).map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-lg border border-[#D5DAE0] overflow-hidden shadow-xs hover:shadow-lg hover:border-[#EF6C23] transition-all flex flex-col justify-between group"
            >
              <div className="relative w-full h-52 bg-[#0B2A4A]">
                <Image
                  src={article.imageUrl}
                  alt={article.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 px-2 py-0.5 bg-[#0B2A4A]/90 text-white text-[10px] font-mono-tech uppercase rounded">
                  {article.category}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center space-x-3 text-[10px] font-mono-tech text-[#596573] mb-1.5">
                    <span>{article.publishDate}</span>
                    <span>&middot;</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h3 className="text-lg font-heading font-extrabold text-[#0B2A4A] group-hover:text-[#EF6C23] transition-colors leading-snug">
                    {article.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-[#2B333B] leading-relaxed line-clamp-3">
                    {article.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#D5DAE0] flex items-center justify-between text-xs font-mono-tech">
                  <span className="text-[#596573] text-[10px]">{article.author}</span>
                  <span className="text-[#EF6C23] font-bold">Read &rarr;</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination / Load More Button */}
        {filteredArticles.length > visibleCount && (
          <div className="text-center mb-20">
            <button
              onClick={() => setVisibleCount((prev) => prev + 3)}
              className="px-8 py-3.5 bg-[#0B2A4A] hover:bg-[#145B8C] text-white font-heading font-bold text-xs uppercase tracking-wider rounded transition-colors shadow-sm"
            >
              Load More Articles
            </button>
          </div>
        )}

        {/* Newsletter & Technical Inquiries Section */}
        <div className="bg-[#0B2A4A] text-white rounded-xl p-8 sm:p-12 border border-[#145B8C] shadow-xl text-center max-w-3xl mx-auto">
          <Mail className="w-8 h-8 text-[#EF6C23] mx-auto mb-3" />
          <h3 className="text-2xl sm:text-3xl font-heading font-black text-white">
            Receive Technical Metallurgical Updates
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-[#B8BEC5] max-w-lg mx-auto">
            Stay informed on tungsten pricing indices, global export regulations, and refractory material innovations.
          </p>

          {subscribed ? (
            <div className="mt-6 p-4 bg-emerald-900/50 border border-emerald-500 rounded text-emerald-200 text-xs font-mono-tech flex items-center justify-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Thank you! Your email is registered for technical bulletins.</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
              <input
                type="email"
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Enter corporate email..."
                className="w-full px-4 py-2.5 text-xs font-sans bg-[#071C33] border border-[#145B8C] rounded text-white focus:outline-hidden focus:border-[#EF6C23]"
              />
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-2.5 bg-[#EF6C23] hover:bg-[#d85e19] text-white font-heading font-bold text-xs uppercase tracking-wider rounded shrink-0 transition-colors shadow-sm"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
