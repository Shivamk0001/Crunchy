"use client";

import Image from "next/image";
import Link from "next/link";
import { Star, ShoppingCart, Heart } from "lucide-react";
import { Product } from "../data/products";

export const ProductCard = ({
  product,
  index,
}: {
  product: Product;
  index?: number;
}) => {
  return (
    // h-full add kiya taaki card ki height container ke barabar rahe
    <div
      className="w-full h-full animate-slide-up"
      style={{ animationDelay: `${index ? index * 0.05 : 0}s` }}
    >
      <article
        className="
          group relative bg-white rounded-[22px] overflow-hidden
          shadow-[0_8px_28px_rgba(0,0,0,0.08)]
          transition-all duration-500
          hover:-translate-y-2 hover:shadow-[0_26px_60px_rgba(0,0,0,0.16)]
          flex flex-col h-full w-full
        "
      >
        {/* HEART BUTTON */}
        <button className="absolute top-4 right-4 z-40 w-9 h-9 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-md hover:scale-110 active:scale-90">
          <Heart
            size={16}
            className="text-gray-400 hover:text-red-500 transition-colors"
          />
        </button>

        {/* RIBBON */}
        <div className="absolute top-5 -left-1 z-20 animate-float-ribbon rotate-[-3deg]">
          <div className="bg-[#e33f29] text-white px-5 py-1.5 text-[14px] font-black shadow-xl min-w-[70px] text-center">
            {product.discount}
          </div>
          <div className="w-0 h-0 border-t-[8px] border-t-[#a12d1d] border-l-[8px] border-l-transparent absolute -bottom-2 left-0" />
        </div>

        {/* BADGES */}
        <div className="absolute top-3 right-4 z-20 flex flex-col items-end gap-1.5 pointer-events-none">
          <div className="bg-[#f3a921] text-black px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider shadow-sm pointer-events-auto">
            Bestseller
          </div>

          {product.badge !== "Bestseller" && (
            <div
              className={`${product.badgeColor} text-white px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider shadow-sm pointer-events-auto`}
            >
              {product.badge}
            </div>
          )}
        </div>

        {/* IMAGE AREA - aspect-square ensures consistency */}
        <div className="relative aspect-square overflow-hidden bg-[#F3F4F6] w-full">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-all duration-700 ease-in-out group-hover:scale-110 group-hover:opacity-0"
          />
          <Image
            src={product.hoverImage}
            alt={`${product.name} hover`}
            fill
            className="absolute inset-0 object-cover opacity-0 transition-all duration-700 ease-in-out group-hover:opacity-100 group-hover:scale-110"
          />
        </div>

        {/* CONTENT - flex-1 and flex-col will fix alignment */}
        <div className="p-4 pt-3 flex flex-col flex-1">
          {/* Rating */}
          <div className="flex items-center gap-1 text-[#f3a921] mb-1">
            <Star size={13} fill="currentColor" strokeWidth={0} />
            <span className="text-[14px] font-semibold text-[#231911]">
              {product.rating}
            </span>
            <span className="text-[12px] text-gray-400">
              ({product.reviews})
            </span>
          </div>

          {/* Title */}
          <h3 className="text-[16px] font-semibold text-[#231911] line-clamp-1 leading-snug transition-colors duration-300 group-hover:text-[#f3a921]">
            {product.name}
          </h3>

          {/* Description */}
          <p className="text-[#9c8f7d] text-[13px] mt-0.5 leading-relaxed line-clamp-2">
            {product.description}
          </p>

          {/* PRICE + ADD - mt-auto keeps buttons aligned at bottom */}
          <div className="flex items-center justify-between mt-auto pt-3">
            <div className="flex items-baseline gap-2">
              <span className="text-[20px] font-bold text-[#231911]">
                ₹{product.price}
              </span>
              <span className="text-[13px] text-gray-400 line-through">
                ₹{product.originalPrice}
              </span>
            </div>

            <Link
              href={`/products#product-${product.id}`}
              className="flex items-center gap-2 bg-[#f3a921] text-black text-[14px] font-semibold px-5 py-2 rounded-xl transition-all duration-300 hover:brightness-105 active:scale-95 shadow-md shrink-0"
            >
              <ShoppingCart size={16} />
              Add
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
};