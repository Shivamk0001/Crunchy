"use client";

import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-r from-[#FFF9EE] to-[#f6e8ce] pt-12 pb-16 md:pt-20 md:pb-24">

      {/* Floating Snacks Elements */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        <div className="absolute top-[10%] left-[10%] text-[40px] md:text-[60px] opacity-80 -rotate-[5deg] animate-float-slow">🥜</div>
        <div className="absolute top-[18%] right-[8%] text-[38px] md:text-[55px] opacity-70 -rotate-12 animate-float-slow [animation-delay:2s]">🍌</div>
        <div className="absolute top-[55%] left-[18%] text-[28px] md:text-[38px] opacity-60 animate-float-slow [animation-delay:1s]">🌶️</div>
        <div className="absolute top-[48%] right-[25%] text-[33px] md:text-[45px] opacity-80 animate-float-slow [animation-delay:3s]">🍿</div>
        <div className="absolute top-[60%] left-[5%] text-[30px] md:text-[40px] opacity-50 animate-float-slow [animation-delay:4s]">🧂</div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10 text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[#ffffff] shadow-[0_8px_30px_rgba(0,0,0,0.08)] rounded-full px-4 py-2 mb-8 animate-slide-up">
  <span className="text-sm font-semibold text-[#0e0d0d]">
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
        <p className="max-w-[750px] mx-auto text-[#7e7465] text-[17px] md:text-[20px] leading-[1.5] mb-10 font-medium">
          From crunchy masala peanuts to crispy Kerala banana chips —  <br />discover authentic flavors made with love, tradition, and the finest  <br />ingredients.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Link
            href="/products"
            className="inline-flex items-center justify-center gap-2 bg-[#f4a622] text-black h-14 px-10 rounded-xl font-bold text-lg transition-all duration-300 shadow-[0_8px_25px_-5px_hsl(38,92%,50%,0.35)] hover:bg-[#f4a622]/90 hover:-translate-y-1 hover:shadow-[0_20px_50px_-15px_hsl(25,40%,12%,0.15)] active:scale-95"
          >
            Shop Now
          </Link>

          <Link
            href="/best-sellers"
            className="inline-flex items-center justify-center gap-2 h-14 px-10 rounded-xl text-lg font-semibold border-2 border-foreground/20 bg-white/80 backdrop-blur-sm text-[#231911] shadow-[0_4px_20px_-4px_hsl(25,40%,12%,0.08)] hover:bg-white hover:border-[#f4a622] hover:text-[#f4a622] active:scale-95"
          >
            View Best Sellers
          </Link>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-12">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#dcf2e3] text-[#3e8e51] flex items-center justify-center">✓</div>
            <span className="text-[13px] md:text-[15px] font-semibold text-[#231911]">FSSAI Certified</span>
          </div>
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#faedd1] text-[#b4892c] flex items-center justify-center">★</div>
            <span className="text-[13px] md:text-[15px] font-semibold text-[#231911]">Premium Quality</span>
          </div>
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#f2e2d9] text-[#a67c61] flex items-center justify-center text-[11px] font-black">IN</div>
            <span className="text-[13px] md:text-[15px] font-semibold text-[#231911]">Made in India</span>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg className="relative block w-full h-[70px] md:h-[100px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path
            d="M0,110 C200,120 400,30 720,70 C1000,110 1200,140 1440,70 L1440,120 L0,120 Z"
            fill="#FFFFFF"
          />
        </svg>
      </div>

      <style jsx global>{`
        @keyframes float-slow {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-25px); }
        }
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }

        @keyframes heading-float {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .animate-heading-float {
          animation: heading-float 3s ease-in-out infinite;
        }
      `}</style>

    </section>
  );
};

export default Hero;
