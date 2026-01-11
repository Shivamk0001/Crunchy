"use client";

import { products } from "@/src/data/products";
import { ProductCard } from "../ProductCard";
const Features = () => {
  const selectedIds = [1, 3, 6, 5, 8, 9];

  const featuredProducts = products
    .filter((p) => selectedIds.includes(p.id))
    .sort((a, b) => selectedIds.indexOf(a.id) - selectedIds.indexOf(b.id));

  return (
    <section className="bg-white py-14 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="px-4 mb-8">
          <p className="text-[#b34031] uppercase tracking-[0.2em] text-[11px] font-bold mb-1">
            Handpicked for you
          </p>
          <h2 className="text-[32px] md:text-[42px] font-black text-[#231911]">
            Featured Products
          </h2>
        </div>

        <div
  className="flex gap-6 overflow-x-auto snap-x snap-mandatory px-4 pb-12"
  style={{ scrollbarWidth: "none" }}
>
  {featuredProducts.map((product, i) => (
    <ProductCard key={product.id} product={product} index={i} />
  ))}
</div>

      </div>
    </section>
  );
};

export default Features;
