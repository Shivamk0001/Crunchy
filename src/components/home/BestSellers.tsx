"use client";

import Image from "next/image";
import { Star, ArrowRight, ShoppingCart } from "lucide-react";
import { products } from "../../data/products";

const BestSellers = () => {
  const bestSellerList = products.slice(0, 4);

  return (
    <section className="bg-white py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-5 md:px-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <p className="text-[#b34031] font-semibold uppercase tracking-[0.2em] text-[11px] mb-2">
              Top Picks This Week
            </p>
            <h2 className="text-[30px] md:text-[42px] font-extrabold text-[#231911] mb-3">
              Weekly Best Sellers
            </h2>
            <p className="text-[#7e7465] text-[14px] md:text-[16px]">
              Our most loved snacks that keep customers coming back
            </p>
          </div>

          <button className="flex items-center gap-2 border border-[#f3a921] text-[#f3a921] px-5 py-2 rounded-full text-[13px] font-semibold hover:bg-[#f3a921] hover:text-white transition">
            View All <ArrowRight size={16} />
          </button>
        </div>

        {/* Products */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {bestSellerList.map((product) => (
            <div
              key={product.id}
              className="group bg-[#f6f6f6] rounded-[28px] overflow-hidden transition hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative aspect-square">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition"
                />

                <span className="absolute top-3 left-3 bg-[#b34031] text-white text-[10px] px-2 py-1 rounded">
                  {product.discount}
                </span>

                <span
                  className={`absolute top-3 right-3 ${product.badgeColor} text-white text-[9px] px-2 py-1 rounded-full`}
                >
                  {product.badge}
                </span>
              </div>

              {/* Info */}
              <div className="p-4 flex flex-col">
                <div className="flex items-center gap-1 text-[#f3a921] text-[12px] mb-1">
                  <Star size={13} fill="currentColor" strokeWidth={0} />
                  {product.rating}
                  <span className="text-gray-400 text-[11px] ml-1">
                    ({product.reviews})
                  </span>
                </div>

                <h3 className="text-[15px] md:text-[16px] font-semibold text-[#231911] mb-1">
                  {product.name}
                </h3>

                <p className="text-[#9c8f7d] text-[12px] mb-3 whitespace-nowrap overflow-hidden text-ellipsis">
                  {product.description}
                </p>

                <div className="flex items-center justify-between mt-auto">
                  <div>
                    <span className="font-bold text-[#231911]">
                      ₹{product.price}
                    </span>
                    <span className="text-gray-400 text-[12px] line-through ml-2">
                      ₹{product.originalPrice}
                    </span>
                  </div>

                  <button className="bg-[#f3a921] text-white text-[12px] px-4 py-2 rounded-xl flex items-center gap-1 hover:bg-[#231911]">
                    <ShoppingCart size={14} /> Add
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
