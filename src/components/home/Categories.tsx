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
    <section className="bg-[#f3f0ea] py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-[#f3a921] font-bold uppercase tracking-[0.25em] text-[11px]">
            Browse By Category
          </span>
          <h2 className="text-[30px] md:text-[46px] font-extrabold text-[#231911] mt-2">
            Shop Your Favorites
          </h2>
        </div>

        {/* Category Grid */}
        <div
          className="
            grid
            grid-cols-2
            gap-4
            sm:gap-5
            md:grid-cols-6
            md:gap-6
          "
        >
          {categories.map((cat, index) => (
            <Link key={index} href={cat.href} className="group">
              <div
                className="
                  bg-white
                  rounded-[26px]
                  h-[140px]
                  md:h-[160px]
                  flex
                  flex-col
                  items-center
                  justify-center
                  text-center
                  transition-all
                  duration-300
                  hover:shadow-md
                  hover:-translate-y-1
                "
              >
                {/* Icon */}
                <div className="text-[34px] md:text-[40px] mb-3 transition-transform duration-300 group-hover:scale-110">
                  {cat.icon}
                </div>

                {/* Title */}
                <h3 className="text-[#231911] font-bold text-[14px] md:text-[16px] whitespace-nowrap">
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
