"use client";

import React from "react";
import Link from "next/link";
import { Gift, Percent, Truck } from "lucide-react";

const offers = [
  {
    title: "Combo Deals",
    description: "Save up to 30% on family packs",
    buttonText: "Shop Combos",
    href: "/combos",
    icon: <Gift className="w-5 h-5 text-white" />,
    iconBg: "bg-[#f3a921]",
    graphic: (
      <svg
        className="absolute right-6 top-6 w-20 h-20 text-gray-200 opacity-40"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M20,6H17.82A3,3,0,0,0,12,2.35,3,3,0,0,0,6.18,6H4A2,2,0,0,0,2,8v2a2,2,0,0,0,2,2v7a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V12a2,2,0,0,0,2-2V8A2,2,0,0,0,20,6Z"/>
      </svg>
    ),
  },
  {
    title: "Festival Special",
    description: "Exclusive gift boxes for celebrations",
    buttonText: "Explore",
    href: "/festival",
    icon: <Percent className="w-5 h-5 text-white" />,
    iconBg: "bg-[#b34031]",
    graphic: (
      <svg
        className="absolute right-5 top-5 w-22 h-22 text-gray-200 opacity-40 rotate-12"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M18.5,3.5L3.5,18.5L5.5,20.5L20.5,5.5L18.5,3.5M7,4A3,3 0 0,0 4,7A3,3 0 0,0 7,10A3,3 0 0,0 10,7A3,3 0 0,0 7,4M17,14A3,3 0 0,0 14,17A3,3 0 0,0 17,20A3,3 0 0,0 20,17A3,3 0 0,0 17,14Z"/>
      </svg>
    ),
  },
  {
    title: "Free Delivery",
    description: "On all orders above ₹499",
    buttonText: "Start Shopping",
    href: "/shop",
    icon: <Truck className="w-5 h-5 text-white" />,
    iconBg: "bg-[#2d9e64]",
    graphic: (
      <svg
        className="absolute right-6 top-6 w-20 h-20 text-gray-200 opacity-40"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M18,18.5A1.5,1.5 0 0,1 16.5,17A1.5,1.5 0 0,1 18,15.5A1.5,1.5 0 0,1 19.5,17A1.5,1.5 0 0,1 18,18.5M19.5,9.5V14.5H17V9.5H19.5M6,18.5A1.5,1.5 0 0,1 4.5,17A1.5,1.5 0 0,1 6,15.5A1.5,1.5 0 0,1 7.5,17A1.5,1.5 0 0,1 6,18.5M20,8H17V4H3C1.89,4 1,4.89 1,6V17H3A3,3 0 0,0 6,20A3,3 0 0,0 9,17H15A3,3 0 0,0 18,20A3,3 0 0,0 21,17H23V12L20,8Z"/>
      </svg>
    ),
  },
];

const Offers = () => {
  return (
    <section className="bg-[#f8f6f2] py-16">
      {/* Max width increased to 8xl for more horizontal spread */}
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="text-center mb-10">
          <span className="text-[#f3a921] font-bold tracking-[0.25em] text-[11px] uppercase">
            Special Deals
          </span>
          <h2 className="text-[36px] md:text-[44px] font-black text-[#231911] mt-2">
            Current Offers
          </h2>
        </div>

        {/* Gap reduced to make cards feel wider */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {offers.map((offer, index) => (
            <div
              key={index}
              className="relative overflow-hidden bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm hover:shadow-lg transition-all flex flex-col min-h-[220px]"
            >
              {/* All original graphics preserved */}
              {offer.graphic}

              <div className="relative z-10">
                {/* Icon */}
                <div
                  className={`${offer.iconBg} w-11 h-11 rounded-xl flex items-center justify-center mb-5`}
                >
                  {offer.icon}
                </div>

                {/* Content */}
                <h3 className="text-[22px] font-black text-[#231911] mb-1">
                  {offer.title}
                </h3>
                <p className="text-[#7e7465] text-[15px] leading-relaxed mb-6 max-w-[240px]">
                  {offer.description}
                </p>

                {/* Button - w-fit preserved */}
                <Link
                  href={offer.href}
                  className="mt-2 self-start inline-flex items-center justify-center px-6 py-2 rounded-xl border-2 border-[#f3a921] text-[#f3a921] font-bold text-[14px] hover:bg-[#f3a921] hover:text-white transition-all w-fit"
                >
                  {offer.buttonText}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offers;