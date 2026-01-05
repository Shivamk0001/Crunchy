"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Star, ChevronDown, ShoppingCart } from "lucide-react";
import Link from "next/link";
// Update the path below to your actual data file
import { products, categories, Product } from "../../data/products"; 

const BestSellersPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All Products");
  const [sortBy, setSortBy] = useState<string>("Most Popular");

  // Filter Logic: Checking if badge is "Bestseller"
  const filteredProducts = products
    .filter(
      (p) =>
        p.badge === "Bestseller" && // Fixed: matching your data structure
        (activeCategory === "All Products" || p.category === activeCategory)
    )
    .sort((a, b) => {
      if (sortBy === "Price: Low to High") return a.price - b.price;
      if (sortBy === "Price: High to Low") return b.price - a.price;
      return 0;
    });

  return (
    <div className="bg-[#faf9f6] min-h-screen pt-16 pb-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8">

        {/* Breadcrumb */}
        <div className="mb-6 text-sm font-semibold text-[#9c8f7d]">
          <Link href="/" className="hover:text-[#231911] transition">
            Home
          </Link>
          <span className="mx-1">›</span>
          <span className="text-[#231911]">Best Sellers</span>
        </div>

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-[28px] md:text-[42px] font-black text-[#231911] flex items-center gap-2">
           Best Sellers
          </h1>
          <p className="text-[#a89985] font-semibold">
            {filteredProducts.length} top products found
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">

          {/* Sidebar */}
          <aside className="w-full md:w-[220px] lg:w-[200px] shrink-0">
            <div className="bg-white rounded-[24px] p-4 border sticky top-24">
              <h3 className="font-black text-[#231911] mb-4 text-lg">
                Categories
              </h3>

              <div className="flex flex-col gap-2">
                {categories.map((cat: string) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2.5 rounded-xl text-left font-bold text-[13px] transition
                      ${
                        activeCategory === cat
                          ? "bg-[#f3a921] text-white"
                          : "text-[#7e7465] hover:bg-[#f8f6f2]"
                      }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">

            {/* Sort Dropdown */}
            <div className="flex justify-end mb-6 relative group">
              <div className="flex items-center gap-3 bg-white px-5 py-3 rounded-xl border cursor-pointer">
                <span className="text-[#a89985] text-sm font-bold">
                  Sort by:
                </span>
                <span className="text-[#231911] font-black text-sm">
                  {sortBy}
                </span>
                <ChevronDown size={18} className="text-[#f3a921]" />

                <div className="absolute top-full right-0 mt-2 w-56 bg-white rounded-xl shadow-lg border py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition z-50">
                  {[
                    "Most Popular",
                    "Price: Low to High",
                    "Price: High to Low",
                  ].map((opt: string) => (
                    <button
                      key={opt}
                      onClick={() => setSortBy(opt)}
                      className="w-full text-left px-5 py-2 text-sm font-bold text-[#7e7465] hover:bg-[#fdf2d8]"
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="group bg-white rounded-[26px] overflow-hidden border transition hover:-translate-y-1 hover:shadow-lg flex flex-col"
                  >
                    {/* Image Section */}
                    <div className="relative aspect-square bg-[#f6f6f6]">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover transition duration-300 group-hover:scale-[1.04]"
                      />

                      {product.discount && (
                        <span className="absolute top-3 left-3 bg-[#b34031] text-white text-[10px] px-2 py-1 rounded">
                          {product.discount}
                        </span>
                      )}

                      {/* Dynamic Badge from Data */}
                      <span className={`absolute top-3 right-3 text-white text-[10px] px-2 py-1 rounded-full font-bold ${product.badgeColor}`}>
                        {product.badge}
                      </span>
                    </div>

                    {/* Info Section */}
                    <div className="p-4 flex flex-col flex-1">
                      <div className="flex items-center gap-1 text-[#f3a921] text-[12px] mb-1">
                        <Star size={13} fill="currentColor" strokeWidth={0} />
                        {product.rating}
                        <span className="text-gray-400 text-[11px] ml-1">
                          ({product.reviews})
                        </span>
                      </div>

                      <h3 className="text-[15px] md:text-[16px] font-semibold text-[#231911] mb-0.5 leading-snug">
                        {product.name}
                      </h3>

                      <p className="text-[#9c8f7d] text-[12px] leading-relaxed mb-3 line-clamp-2 min-h-[34px]">
                        {product.description}
                      </p>

                      <div className="flex items-center justify-between mt-auto">
                        <div>
                          <span className="font-bold text-[#231911]">
                            ₹{product.price}
                          </span>
                          {product.originalPrice && (
                            <span className="text-gray-400 text-[12px] line-through ml-2">
                              ₹{product.originalPrice}
                            </span>
                          )}
                        </div>

                        <button className="bg-[#f3a921] hover:bg-[#231911] text-white font-semibold text-sm md:text-[14px] px-5 py-2.5 rounded-2xl flex items-center justify-center gap-2 transition-all duration-300 shadow-sm hover:shadow-lg">
                          <ShoppingCart size={16} /> Add
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-gray-500">No bestsellers found in this category.</p>
              </div>
            )}

          </main>
        </div>
      </div>
    </div>
  );
};

export default BestSellersPage;