"use client";

import Link from "next/link";
import { ShoppingCart, ArrowRight } from "lucide-react";

export default function CartPage() {
  return (
    <div className="min-h-screen bg-[#fbf7f1] flex items-center justify-center px-4">
      <div className="text-center max-w-md w-full">

        {/* Cart Icon */}
        <div className="flex justify-center mb-6">
          <ShoppingCart
            size={90}
            strokeWidth={1.5}
            className="text-[#9c7a5e]"
          />
        </div>

        {/* Heading */}
        <h1 className="text-[28px] md:text-[32px] font-black text-[#231911] mb-3">
          Your cart is empty
        </h1>

        {/* Sub text */}
        <p className="text-[#8b6b55] text-[16px] mb-8">
          Add some delicious snacks to get started!
        </p>

        {/* Button */}
        <Link
          href="/products"
          className="inline-flex items-center gap-3 bg-[#f3a921] hover:bg-[#e27c29] text-black hover:text-white font-bold px-8 py-4 rounded-2xl transition-all duration-300 shadow-md hover:shadow-lg"
        >
          Browse Products
          <ArrowRight size={20} />
        </Link>
      </div>
    </div>
  );
}
