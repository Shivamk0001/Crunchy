  "use client";

  import React from "react";
  import Link from "next/link";
  import { ArrowRight } from "lucide-react";
  import { products } from "../../data/products";
  import { ProductCard } from "../ProductCard"; // Apna main component import kiya

  const BestSellers = () => {
    // Aapne jo IDs boli (1, 3, 5, 8), sirf unhi ko filter karke dikhayenge
    const targetIds = [1, 3, 5, 8];
    const bestSellerList = products.filter((product) => targetIds.includes(product.id));

    return (
      <section className="bg-white py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">

          {/* Header - Styled to match your reference */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-xl">
              <p className="text-[#f3a921] font-bold uppercase tracking-[0.2em] text-[12px] mb-2">
                Top Picks This Week
              </p>
              <h2 className="text-[32px] md:text-[48px] font-black text-[#231911] leading-tight">
                Weekly Best Sellers
              </h2>
              <p className="text-[#9c8f7d] text-[15px] md:text-[17px] mt-2 font-medium">
                Our most loved snacks that keep customers coming back
              </p>
            </div>

            <Link
              href="/products"
              className="group flex items-center gap-2 border-2 border-[#f3a921] text-[#f3a921] px-6 py-2 rounded-2xl text-[14px] font-bold hover:bg-[#f3a921] hover:text-black transition-all duration-300 w-fit"
            >
              View All 
              <ArrowRight size={18} className="transition-transform group-hover:translate-x" />
            </Link>
          </div>

          {/* Products Grid - Using the reusable ProductCard */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {bestSellerList.map((product, index) => (
              <div key={product.id} className="flex justify-center">
                <ProductCard product={product} index={index} />
              </div>
            ))}
          </div>

        </div>
      </section>
    );
  };

  export default BestSellers;