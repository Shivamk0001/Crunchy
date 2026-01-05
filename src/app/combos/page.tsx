"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Star, ChevronDown, ShoppingCart, Zap, Gift, Percent } from "lucide-react";
import Link from "next/link";
import { products } from "../../data/products"; // Path verify kar lein

const CombosPage = () => {
  const [sortBy, setSortBy] = useState("Most Popular");

  // Logic: Filter only Combo related products
  const comboProducts = products
    .filter(
      (p) => p.category === "Combos" || p.category === "Combo Packs"
    )
    .sort((a, b) => {
      if (sortBy === "Price: Low to High") return a.price - b.price;
      if (sortBy === "Price: High to Low") return b.price - a.price;
      return 0;
    });

  return (
    <div className="bg-[#fffcf7] min-h-screen pt-20 pb-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav className="mb-8 flex items-center gap-2 text-sm font-bold text-[#9c8f7d]">
          <Link href="/" className="hover:text-[#f3a921] transition">Home</Link>
          <span>/</span>
          <span className="text-[#231911]">Value Combos</span>
        </nav>

        {/* --- Hero Banner Section --- */}
        <div className="relative overflow-hidden rounded-[40px] bg-[#231911] p-8 md:p-16 mb-16 group">
          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-[#f3a921] text-white px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-6">
              <Percent size={14} /> Limited Time Offers
            </div>
            <h1 className="text-4xl md:text-7xl font-black text-white mb-6 leading-[1.1]">
              Big Cravings, <br />
              <span className="text-[#f3a921]">Bigger Savings!</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl font-medium mb-8 leading-relaxed">
              Why pick one when you can have them all? Our curated combos are 
              designed to give you the best variety at the best prices.
            </p>
          </div>

          {/* Abstract Decorations */}
          <div className="absolute right-[-50px] top-[-50px] w-80 h-80 bg-[#f3a921] opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-all duration-700" />
          <Zap className="absolute right-12 bottom-12 text-[#f3a921] opacity-20 hidden lg:block" size={180} />
          <Gift className="absolute right-48 top-12 text-white opacity-5 hidden lg:block" size={120} />
        </div>

        {/* --- Controls --- */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
          <div>
            <h2 className="text-3xl font-black text-[#231911] flex items-center gap-3">
              Special Packs 
              <span className="text-sm bg-white border-2 border-[#f0ede8] text-[#f3a921] px-3 py-1 rounded-full">
                {comboProducts.length} Items
              </span>
            </h2>
            <p className="text-[#9c8f7d] font-bold mt-1 text-sm">Hand-picked snack bundles for every occasion</p>
          </div>

          <div className="relative group min-w-[240px]">
            <div className="flex items-center justify-between bg-white px-6 py-4 rounded-2xl border-2 border-[#f0ede8] cursor-pointer hover:border-[#f3a921] transition-all shadow-sm">
              <span className="text-[#7e7465] text-sm font-bold">Sort: <span className="text-[#231911]">{sortBy}</span></span>
              <ChevronDown size={20} className="text-[#f3a921]" />
            </div>
            <div className="absolute top-full right-0 mt-2 w-full bg-white rounded-2xl shadow-2xl border border-[#f0ede8] py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 overflow-hidden">
              {["Most Popular", "Price: Low to High", "Price: High to Low"].map((opt) => (
                <button
                  key={opt}
                  onClick={() => setSortBy(opt)}
                  className="w-full text-left px-6 py-3 text-sm font-bold text-[#7e7465] hover:bg-[#fff9eb] hover:text-[#f3a921] transition-colors"
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* --- Product Grid --- */}
<div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
  {comboProducts.map((product) => (
    <div
      key={product.id}
      className="group bg-white rounded-[35px] border-2 border-transparent hover:border-[#f3a921] transition-all duration-500 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-20px_rgba(243,169,33,0.3)] flex flex-col overflow-hidden"
    >
      {/* Image Container */}
      <div className="relative aspect-square m-3 rounded-[28px] overflow-hidden bg-[#f9f8f6]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Floating Tags */}
        <div className="absolute top-4 inset-x-4 flex justify-between items-start">
          <span className="bg-[#e63946] text-white font-black text-[10px] px-3 py-1.5 rounded-xl shadow-lg uppercase">
            Save {product.discount}
          </span>
          <span className={`${product.badgeColor} text-white text-[10px] font-black px-3 py-1.5 rounded-xl shadow-md uppercase`}>
            {product.badge}
          </span>
        </div>
      </div>

      {/* Details */}
      <div className="p-6 pt-2 flex flex-col flex-1">
        <div className="flex items-center gap-1.5 mb-3">
          <div className="flex bg-[#fff9eb] px-2 py-1 rounded-lg">
            <Star size={14} className="text-[#f3a921] fill-[#f3a921]" />
            <span className="text-[#f3a921] text-xs font-black ml-1.5">{product.rating}</span>
          </div>
          <span className="text-[#9c8f7d] text-[11px] font-bold">({product.reviews} reviews)</span>
        </div>

        <h3 className="text-xl font-black text-[#231911] mb-2 leading-tight group-hover:text-[#f3a921] transition-colors">
          {product.name}
        </h3>

        <p className="text-[#7e7465] text-sm font-medium leading-relaxed mb-6 line-clamp-2">
          {product.description}
        </p>

        {/* Footer / Price */}
        <div className="mt-auto flex items-center justify-between bg-[#fafafa] p-4 rounded-3xl group-hover:bg-[#fff9eb] transition-colors">
          <div className="flex flex-col">
            <span className="text-xl font-black text-[#231911]">₹{product.price}</span>
            <span className="text-xs text-[#9c8f7d] line-through font-bold">₹{product.originalPrice}</span>
          </div>

          <button className="bg-[#231911] hover:bg-[#f3a921] text-white w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-xl active:scale-95 group/btn">
            <ShoppingCart size={22} className="group-hover/btn:scale-110" />
          </button>
        </div>
      </div>
    </div>
  ))}
</div>


        {/* --- Empty State --- */}
        {comboProducts.length === 0 && (
          <div className="text-center py-32 bg-white rounded-[50px] border-4 border-dashed border-[#f0ede8]">
            <div className="w-24 h-24 bg-[#fff9eb] rounded-full flex items-center justify-center mx-auto mb-6">
              <Gift className="text-[#f3a921]" size={40} />
            </div>
            <h3 className="text-3xl font-black text-[#231911] mb-2">Restocking New Combos!</h3>
            <p className="text-[#7e7465] font-bold">Check back in a few hours for fresh deals.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CombosPage;