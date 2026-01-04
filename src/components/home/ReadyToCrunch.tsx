"use client";

import React from "react";
import Link from "next/link";
import { MoveRight, MessageSquare } from "lucide-react";

const ReadyToCrunch = () => {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#e3c48b] to-[#d97e0d] py-16 md:py-24">
      {/* Floating Decorative Icons - Matching Video 00:01:04 */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute top-[15%] left-[10%] text-[40px] opacity-20 animate-pulse">🥜</div>
        <div className="absolute top-[20%] right-[15%] text-[30px] opacity-30 rotate-12 animate-bounce">🌶️</div>
        <div className="absolute bottom-[20%] right-[10%] text-[40px] opacity-20 animate-float-slow">🍿</div>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center text-white">
        {/* Main Heading */}
        <h2 className="text-[40px] md:text-[64px] font-[900] leading-tight mb-6 tracking-tight text-[#231911]">
          Ready to Crunch?
        </h2>

        {/* Description Text */}
        <p className="text-[16px] md:text-[20px] font-medium text-[#231911]/80 max-w-2xl mx-auto mb-10 leading-relaxed">
          Order now and get your favorite snacks delivered fresh to your doorstep. 
          Free delivery on orders above ₹499!
        </p>

        {/* Buttons - Exact styles from image_e73e00.jpg */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/shop"
            className="group w-full sm:w-auto flex items-center justify-center gap-2 bg-[#b34031] text-white px-10 py-4 rounded-2xl font-bold text-[18px] shadow-lg hover:bg-[#963328] transition-all active:scale-95"
          >
            Shop Now
            
          </Link>

          <Link
            href="https://wa.me/your-number"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-transparent border-2 border-[#231911]/20 text-[#231911] px-10 py-4 rounded-2xl font-bold text-[18px] hover:bg-[#231911]/5 transition-all active:scale-95"
          >
            <MessageSquare className="w-5 h-5" />
            Order on WhatsApp
          </Link>
        </div>
      </div>

      <style jsx global>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default ReadyToCrunch;