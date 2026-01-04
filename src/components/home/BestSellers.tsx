"use client";

import React from "react";
import Image from "next/image";
import { Star, ArrowRight, ShoppingCart } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Classic Masala Peanuts",
    description: "Crunchy roasted peanuts with authentic spices.",
    price: 149,
    originalPrice: 199,
    rating: 4.8,
    reviews: 2847,
    discount: "25% OFF",
    badge: "Trending",
    badgeColor: "bg-orange-500",
    image: "/assets/Bun.jpg",
  },
  {
    id: 2,
    name: "Kerala Banana Chips",
    description: "Crispy chips fried in pure coconut oil.",
    price: 129,
    originalPrice: 169,
    rating: 4.7,
    reviews: 1923,
    discount: "24% OFF",
    badge: "Healthy",
    badgeColor: "bg-emerald-500",
    image: "/assets/open-chips.jpg",
  },
  {
    id: 3,
    name: "Bombay Mix Special",
    description: "Classic blend of sev, peanuts & lentils.",
    price: 179,
    originalPrice: 229,
    rating: 4.9,
    reviews: 3241,
    discount: "22% OFF",
    badge: "Bestseller",
    badgeColor: "bg-amber-500",
    image: "/assets/samosha.jpg",
  },
  {
    id: 4,
    name: "Family Snack Pack",
    description: "4-in-1 combo of our bestsellers.",
    price: 449,
    originalPrice: 599,
    rating: 4.8,
    reviews: 1876,
    discount: "25% OFF",
    badge: "Trending",
    badgeColor: "bg-orange-500",
    image: "/assets/Chocolate.jpg",
  },
];

const BestSellers = () => {
  return (
    <section className="bg-white py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-5 md:px-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <p className="text-[#b34031] font-semibold uppercase tracking-[0.2em] text-[11px] mb-2">
              Top Picks This Week
            </p>
            <h2 className="text-[30px] md:text-[42px] font-extrabold text-[#231911] leading-tight mb-3">
              Weekly Best Sellers
            </h2>
            <p className="text-[#7e7465] text-[14px] md:text-[16px]">
              Our most loved snacks that keep customers coming back for more
            </p>
          </div>

          <button className="flex items-center gap-2 border border-[#f3a921] text-[#f3a921] px-5 py-2 rounded-full text-[13px] font-semibold hover:bg-[#f3a921] hover:text-white transition-all">
            View All <ArrowRight size={16} />
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="
                group
                bg-[#f6f6f6]
                rounded-[28px]
                overflow-hidden
                transition-all duration-300
                hover:-translate-y-2
                hover:bg-[#f2f2f2]
                hover:shadow-[0_14px_34px_rgba(0,0,0,0.14)]
              "
            >
              {/* Image */}
              <div className="relative aspect-square">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <span className="absolute top-3 left-3 bg-[#b34031] text-white text-[10px] font-semibold px-2.5 py-1 rounded-md">
                  {product.discount}
                </span>

                <div className="absolute top-3 right-3 flex flex-col gap-1 items-end">
                  <span className="bg-amber-500 text-white text-[9px] px-2 py-0.5 rounded-full font-semibold uppercase">
                    Bestseller
                  </span>
                  <span className={`${product.badgeColor} text-white text-[9px] px-2 py-0.5 rounded-full font-semibold uppercase`}>
                    {product.badge}
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="p-4 flex flex-col">

  {/* Rating */}
  <div className="flex items-center gap-1 mb-1 text-[#f3a921] text-[12px] font-semibold">
    <Star size={13} fill="currentColor" strokeWidth={0} />
    {product.rating}
    <span className="text-gray-400 text-[11px] ml-1">
      ({product.reviews})
    </span>
  </div>

  {/* Title */}
  <h3 className="text-[15px] md:text-[16px] font-semibold text-[#231911] mb-1">
    {product.name}
  </h3>

  {/* Description — FIXED HEIGHT */}
  <p className="text-[#9c8f7d] text-[12px] leading-relaxed mb-3
              whitespace-nowrap overflow-hidden text-ellipsis">
  {product.description}
</p>

  {/* Price + Button — ALWAYS VISIBLE */}
  <div className="flex items-center justify-between mt-auto">
    <div className="flex items-center gap-2">
      <span className="text-[16px] font-bold text-[#231911]">
        ₹{product.price}
      </span>
      <span className="text-[12px] text-gray-400 line-through">
        ₹{product.originalPrice}
      </span>
    </div>

    <button
      className="
        flex items-center gap-1.5
        bg-[#f3a921] text-white text-[12px] font-semibold
        px-4 py-2 rounded-xl
        transition-all
        hover:bg-[#e29a10]
        active:scale-95
      "
    >
      <ShoppingCart size={14} strokeWidth={2.2} />
      Add
    </button>
  </div>

</div>


            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
