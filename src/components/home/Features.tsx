"use client";

import Image from "next/image";
import Link from "next/link";
import { Star, ShoppingCart } from "lucide-react";
import { products } from "../../data/products";

const Features = () => {
  return (
    <section className="bg-white py-14 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="px-4 mb-6">
          <p className="text-[#b34031] uppercase tracking-[0.2em] text-[11px] font-semibold mb-2">
            Handpicked for you
          </p>
          <h2 className="text-[28px] md:text-[40px] font-extrabold text-[#231911]">
            Featured Products
          </h2>
        </div>

        {/* HORIZONTAL SCROLL */}
        <div className="overflow-x-auto [&::-webkit-scrollbar]:hidden">
          <div className="flex gap-6 px-4 pb-4">
            {products.slice(0, 6).map((product) => (
              <div
                key={product.id}
                className="
                  w-[260px]
                  sm:w-[280px]
                  lg:w-[300px]
                  bg-[#f6f6f6]
                  rounded-[26px]
                  flex flex-col
                  flex-shrink-0
                  transition-all duration-300
                  hover:-translate-y-2
                  hover:shadow-[0_14px_34px_rgba(0,0,0,0.14)]
                "
              >
                {/* IMAGE */}
                <div className="relative aspect-square overflow-hidden rounded-t-[26px]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />

                  <span className="absolute top-3 left-3 bg-[#b34031] text-white text-[10px] px-2.5 py-1 rounded-md font-semibold">
                    {product.discount}
                  </span>

                  <span
                    className={`absolute top-3 right-3 ${product.badgeColor}
                    text-white text-[9px] px-2 py-0.5 rounded-full font-semibold uppercase`}
                  >
                    {product.badge}
                  </span>
                </div>

                {/* CONTENT */}
                <div className="p-4 flex flex-col flex-1">

                  {/* RATING */}
                  <div className="flex items-center gap-1 text-[#f3a921] text-[12px] font-semibold mb-1">
                    <Star size={13} fill="currentColor" strokeWidth={0} />
                    {product.rating}
                    <span className="text-gray-400 text-[11px] ml-1">
                      ({product.reviews})
                    </span>
                  </div>

                  {/* TITLE */}
                  <h3 className="text-[15px] font-semibold text-[#231911] mb-1 line-clamp-1">
                    {product.name}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="text-[#9c8f7d] text-[12px] mb-4 line-clamp-1">
                    {product.description}
                  </p>

                  {/* PRICE + BUTTON */}
                  <div className="mt-auto flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2 whitespace-nowrap">
                      <span className="text-[16px] font-bold text-[#231911]">
                        ₹{product.price}
                      </span>
                      <span className="text-[12px] text-gray-400 line-through">
                        ₹{product.originalPrice}
                      </span>
                    </div>

                    <Link
                      href={`/products#product-${product.id}`}
                      className="flex items-center gap-1.5 bg-[#f3a921] text-white text-[12px] font-semibold px-4 py-2 rounded-xl hover:bg-[#e29a10] active:scale-95 transition"
                    >
                      <ShoppingCart size={14} />
                      Add
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
};

export default Features;
