"use client";

import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#fdf2d8] pt-12 pb-24 md:pt-20 md:pb-32">
      {/* Floating Snacks */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        <div className="absolute top-[15%] left-[6%] text-[40px] md:text-[60px] opacity-60 animate-float-slow">🥜</div>
        <div className="absolute top-[18%] right-[8%] text-[38px] md:text-[55px] opacity-70 -rotate-12 animate-float-slow [animation-delay:2s]">🍌</div>
        <div className="absolute top-[55%] left-[18%] text-[28px] md:text-[38px] opacity-60 animate-float-slow [animation-delay:1s]">🌶️</div>
        <div className="absolute top-[48%] right-[25%] text-[33px] md:text-[45px] opacity-80 animate-float-slow [animation-delay:3s]">🍿</div>
        <div className="absolute top-[60%] left-[5%] text-[30px] md:text-[40px] opacity-50 animate-float-slow [animation-delay:4s]">🧂</div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10 text-center">
        {/* Rounded Top Badge */}
        <div className="inline-flex items-center rounded-full bg-white/70 backdrop-blur-sm px-6 py-2 shadow-sm mb-10 border border-white/50">
          <span className="text-[13px] font-bold text-[#4a3f35] tracking-[0.15em] uppercase">
            Authentic Indian Snacks
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-[44px] md:text-[78px] font-extrabold leading-[1.1] text-[#231911] tracking-tight mb-6">
          Premium Indian <br />
          Snacks <span className="inline-block animate-heading-float">🥨</span> <br />
          <span className="text-[#f4a922] font-semibold">Delivered Fresh</span>
        </h1>

        {/* Description */}
        <p className="max-w-[750px] mx-auto text-[#7e7465] text-[17px] md:text-[20px] leading-[1.5] mb-12 font-medium">
          From crunchy masala peanuts to crispy Kerala banana chips — discover authentic flavors made with love, tradition, and the finest ingredients.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Link
            href="/shop"
            className="w-full sm:w-auto bg-[#f3a921] text-white px-8 py-3 rounded-xl font-bold text-[18px] shadow hover:shadow-md hover:bg-[#e29810] transition-all active:scale-95"
          >
            Shop Now
          </Link>

          <Link
            href="/best-sellers"
            className="w-full sm:w-auto bg-white border border-gray-200 text-[#231911] px-8 py-3 rounded-xl font-bold text-[18px] shadow-sm hover:shadow hover:bg-gray-50 transition-all active:scale-95"
          >
            View Best Sellers
          </Link>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-12 opacity-90">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#dcf2e3] text-[#3e8e51] flex items-center justify-center text-sm md:text-lg">✓</div>
            <span className="text-[13px] md:text-[15px] font-semibold text-[#231911]">FSSAI Certified</span>
          </div>
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#faedd1] text-[#b4892c] flex items-center justify-center text-sm md:text-lg">★</div>
            <span className="text-[13px] md:text-[15px] font-semibold text-[#231911]">Premium Quality</span>
          </div>
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#f2e2d9] text-[#a67c61] flex items-center justify-center text-[11px] md:text-[12px] font-black uppercase">IN</div>
            <span className="text-[13px] md:text-[15px] font-semibold text-[#231911]">Made in India</span>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-25px) rotate(5deg); }
        }
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }

        @keyframes heading-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .animate-heading-float {
          display: inline-block;
          animation: heading-float 3s ease-in-out infinite;
        }

        @media (max-width: 640px) {
          h1 { font-size: 32px !important; }
          p { font-size: 15px !important; }

          /* Buttons full width on mobile */
          .flex.flex-col.sm\\:flex-row > a { width: 100%; }

          /* Trust badges inline row, smaller */
          .flex.flex-wrap.items-center.justify-center > div {
            flex: 1;
            min-width: 0;
            gap: 4px;
          }
          .flex.flex-wrap.items-center.justify-center > div div {
            width: 24px;
            height: 24px;
            font-size: 12px;
          }
          .flex.flex-wrap.items-center.justify-center > div span {
            font-size: 12px;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
