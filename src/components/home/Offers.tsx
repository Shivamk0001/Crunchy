"use client";

import React from "react";
import Link from "next/link";
import { Gift, Percent, Truck } from "lucide-react";

const offers = [
  {
    title: "Combo Deals",
    description: "Save up to 30% on family packs",
    buttonText: "Shop Combos",
    href: "/products?category=combos",
    icon: <Gift className="w-6 h-6 text-white" />,
    iconBg: "bg-[#f3a921]",
    graphic: (
      <Gift
        className="
          absolute top-4 right-4
          w-20 h-20
          md:w-28 md:h-28
          text-[#231911]
          opacity-[0.05] md:opacity-[0.06]
          pointer-events-none
        "
        strokeWidth={1.5}
      />
    ),
  },
  {
    title: "Festival Special",
    description: "Exclusive gift boxes for celebrations",
    buttonText: "Explore",
    href: "/products?category=combos",
    icon: <Percent className="w-6 h-6 text-white" />,
    iconBg: "bg-[#b34031]",
    graphic: (
      <Percent
        className="
          absolute top-4 right-4
          w-20 h-20
          md:w-28 md:h-28
          text-[#231911]
          opacity-[0.05] md:opacity-[0.06]
          pointer-events-none
        "
        strokeWidth={1.5}
      />
    ),
  },
  {
    title: "Free Delivery",
    description: "On all orders above ₹499",
    buttonText: "Start Shopping",
    href: "/products",
    icon: <Truck className="w-6 h-6 text-white" />,
    iconBg: "bg-[#2d9e64]",
    graphic: (
      <Truck
        className="
          absolute top-3 right-4
          w-24 h-24
          md:w-32 md:h-32
          text-[#231911]
          opacity-[0.05] md:opacity-[0.06]
          pointer-events-none
        "
        strokeWidth={1.5}
      />
    ),
  },
];

const Offers = () => {
  return (
    <section className="bg-[#f3f0ea] py-16 md:py-24">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* HEADER */}
        <div className="text-center mb-12 md:mb-14">
          <span className="block text-[#f3a921] font-semibold tracking-[0.1em] text-[14px] uppercase">
            Special Deals
          </span>

          <h2 className="text-[40px] md:text-[52px] font-black text-[#231911] leading-tight tracking-tight">
            Current Offers
          </h2>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-5">
          {offers.map((offer, index) => (
            <div
              key={index}
              className="
                group relative bg-white
                rounded-[32px]
                px-7 py-6 md:px-9 md:py-6
                overflow-hidden
                shadow-[0_6px_24px_rgba(0,0,0,0.05)]
               
                transition-all duration-500
                flex flex-col
                min-h-[210px] md:min-h-[230px]
              "
            >
              {/* GHOST ICON */}
              {offer.graphic}

              <div className="relative z-10 flex flex-col h-full">
                {/* ICON */}
                <div
                  className={`${offer.iconBg} w-14 h-14 rounded-2xl flex items-center justify-center mb-4 shadow-sm`}
                >
                  {offer.icon}
                </div>

                {/* TEXT */}
                <h3 className="text-[22px] md:text-[23px] font-black text-[#231911] leading-tight mb-2">
                  {offer.title}
                </h3>

                <p className="text-[#7e7465] text-[14px] md:text-[15px] leading-relaxed mb-5 max-w-[260px]">
                  {offer.description}
                </p>

                {/* CTA */}
                <div className="mt-auto">
                  <Link
                    href={offer.href}
                    className="
                      inline-flex items-center justify-center
                      px-6 py-2.5
                      rounded-2xl
                      border-2 border-[#f3a921]
                      text-[#f3a921]
                      font-bold text-[14px] md:text-[15px]
                      transition-all duration-300
                      active:scale-95
                      group-hover:bg-[#f3a921]
                      group-hover:text-black
                    "
                  >
                    {offer.buttonText}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offers;
