"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, ChevronDown, ShoppingCart } from "lucide-react";
import { products, categories } from "../../data/products";
import { useCart } from "../../context/CartContext"; // ✅ STEP 3 ADD

const ProductsPage = () => {
  const { addToCart } = useCart(); // ✅ STEP 3 ADD

  const [activeCategory, setActiveCategory] = useState("All Products");
  const [sortBy, setSortBy] = useState("Most Popular");
  const [openSort, setOpenSort] = useState(false);

  const filteredProducts = products
    .filter(
      (p) => activeCategory === "All Products" || p.category === activeCategory
    )
    .sort((a, b) => {
      if (sortBy === "Price: Low to High") return a.price - b.price;
      if (sortBy === "Price: High to Low") return b.price - a.price;
      return 0;
    });

  return (
    <div className="bg-[#faf9f6] min-h-screen pt-16 pb-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8">

        {/* BREADCRUMB */}
        <div className="mb-6 text-sm font-semibold text-[#9c8f7d]">
          <Link href="/" className="hover:text-[#231911] transition">
            Home
          </Link>
          <span className="mx-1">›</span>
          <span className="text-[#231911]">All Products</span>
        </div>

        {/* HEADER */}
        <div className="mb-10">
          <h1 className="text-[28px] md:text-[42px] font-black text-[#231911]">
            🍿 All Products
          </h1>
          <p className="text-[#a89985] font-semibold">
            {filteredProducts.length} products available
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">

          {/* SIDEBAR */}
          <aside className="w-full md:w-[220px] shrink-0">
            <div className="bg-white rounded-[24px] p-4 border sticky top-24">
              <h3 className="font-black text-[#231911] mb-4 text-lg">
                Categories
              </h3>

              <div className="flex flex-col gap-2">
                {categories.map((cat) => (
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

          {/* MAIN */}
          <main className="flex-1">

            {/* SORT */}
            <div className="flex justify-end mb-6 relative">
              <button
                onClick={() => setOpenSort(!openSort)}
                className="flex items-center gap-3 bg-white px-5 py-3 rounded-xl border"
              >
                <span className="text-[#a89985] text-sm font-bold">Sort by:</span>
                <span className="text-[#231911] font-black text-sm">
                  {sortBy}
                </span>
                <ChevronDown size={18} className="text-[#f3a921]" />
              </button>

              {openSort && (
                <div className="absolute top-full right-0 mt-2 w-56 bg-white rounded-xl shadow-lg border py-2 z-50">
                  {[
                    "Most Popular",
                    "Price: Low to High",
                    "Price: High to Low",
                  ].map((opt) => (
                    <button
                      key={opt}
                      onClick={() => {
                        setSortBy(opt);
                        setOpenSort(false);
                      }}
                      className={`w-full text-left px-5 py-2 text-sm font-bold transition
                        ${
                          sortBy === opt
                            ? "bg-[#fdf2d8] text-[#231911]"
                            : "text-[#7e7465] hover:bg-[#fdf2d8]"
                        }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* PRODUCTS GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="group bg-white rounded-[26px] overflow-hidden border transition hover:-translate-y-1 hover:shadow-lg flex flex-col"
                >
                  {/* Image */}
                  <Link href={`/product/${product.id}`}>
                    <div className="relative aspect-square bg-[#f6f6f6]">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover transition duration-300 group-hover:scale-[1.05]"
                      />

                      {product.discount && (
                        <span className="absolute top-3 left-3 bg-[#b34031] text-white text-[10px] px-2 py-1 rounded">
                          {product.discount}
                        </span>
                      )}

                      {product.badge && (
                        <span
                          className={`absolute top-3 right-3 ${product.badgeColor} text-white text-[9px] px-2 py-1 rounded-full`}
                        >
                          {product.badge}
                        </span>
                      )}
                    </div>
                  </Link>

                  {/* Info */}
                  <div className="p-4 flex flex-col flex-1">
                    <div className="flex items-center gap-1 text-[#f3a921] text-[12px] mb-1">
                      <Star size={13} fill="currentColor" strokeWidth={0} />
                      {product.rating}
                      <span className="text-gray-400 text-[11px] ml-1">
                        ({product.reviews})
                      </span>
                    </div>

                    <Link href={`/product/${product.id}`}>
                      <h3 className="text-[15px] md:text-[16px] font-semibold text-[#231911] mb-0.5 leading-snug hover:underline">
                        {product.name}
                      </h3>
                    </Link>

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

                      {/* ✅ ADD TO CART */}
                      <button
                        onClick={() => addToCart(product)}
                        className="bg-[#f3a921] hover:bg-[#ec8d3f] text-white font-semibold text-[14px] px-5 py-2.5 rounded-2xl flex items-center gap-2 transition-all"
                      >
                        <ShoppingCart size={18} />
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </main>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
