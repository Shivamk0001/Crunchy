"use client";

import React from "react";
import Link from "next/link";

const categories = [
  { name: "All Products", icon: "🍿", href: "/products" },
  { name: "Peanuts", icon: "🥜", href: "/products/peanuts" },
  { name: "Banana Chips", icon: "🍌", href: "/products/banana-chips" },
  { name: "Wafers", icon: "🧇", href: "/products/wafers" },
  { name: "Mixtures", icon: "🥨", href: "/products/mixtures" },
  { name: "Combo Packs", icon: "📦", href: "/products/combos" },
];

const Categories = () => {
  return (
    <section className="bg-[#f3f0ea] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header - 100% Match with image_a69f54.png */}
        <div className="text-center mb-10 md:mb-14">
          <span className="text-[#f3a921] font-bold uppercase tracking-[0.15em] text-[12px] md:text-[14px]">
            BROWSE BY CATEGORY
          </span>
          <h2 className="text-[38px] md:text-[54px] font-black text-[#231911] mt-1 tracking-tight leading-tight">
            Shop Your Favorites
          </h2>
        </div>

        {/* Category Grid - Rectangle Layout */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 md:gap-6">
          {categories.map((cat, index) => (
            <Link key={index} href={cat.href} className="group">
              <div
                className="
                  bg-white
                  rounded-[24px]
                  /* Wide Rectangle look as per image_a6fd6f.png */
                  h-[110px] md:h-[130px]
                  flex
                  flex-col
                  items-center
                  justify-center
                  text-center
                  p-4
                  transition-all
                  duration-300
                  shadow-[0_4px_20px_rgba(0,0,0,0.03)]
                  /* Hover background color from image_a69f54.png */
                  hover:bg-[#fdf7ed] 
                  hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)]
                  hover:-translate-y-1.5
                "
              >
                {/* Icon Section */}
                <div className="text-[38px] md:text-[46px] mb-2 transition-transform duration-300 group-hover:scale-110">
                  {cat.icon}
                </div>

                {/* Title - EXACT MATCH WITH HOVER COLOR */}
                <h3 className="
                  text-[#231911] 
                  font-bold 
                  text-[14px] md:text-[16px] 
                  leading-tight 
                  transition-colors 
                  duration-300 
                  group-hover:text-[#f3a921]
                ">
                  {cat.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;