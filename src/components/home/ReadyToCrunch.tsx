"use client";

import React from "react";
import Link from "next/link";
import { MoveRight, MessageSquare } from "lucide-react";

const ReadyToCrunch = () => {
  return (
    // Exact classes from your inspector: py-20 bg-gradient-to-br from-primary via-primary to-secondary relative overflow-hidden
    // Colors mapped from your screenshot: #f3a921 (primary) to #e88a10 (secondary)
    <section className="relative py-20 bg-gradient-to-br from-[#f3a921] via-[#f3a921] to-[#e88a10] overflow-hidden">
      
      {/* Floating Decorative Icons - Matching the exact DOM positions and classes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-[10%] text-6xl opacity-20 animate-float">🥜</div>
        <div className="absolute bottom-10 right-[15%] text-5xl opacity-20 animate-float-delayed">🍿</div>
        <div className="absolute top-20 right-[30%] text-4xl opacity-15 animate-float-slow">🌶️</div>
      </div>

      {/* Main Container: container mx-auto px-4 relative z-10 */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          
          {/* Heading: text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-primary-foreground mb-6 */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#231911] mb-6 tracking-tight">
            Ready to Crunch?
          </h2>

          {/* Paragraph: text-lg text-primary-foreground/80 mb-10 max-w-xl mx-auto */}
          <p className="text-lg text-[#231911]/80 mb-10 max-w-xl mx-auto leading-relaxed">
            Order now and get your favorite snacks delivered fresh to your doorstep. Free delivery on orders above ₹499!
          </p>

          {/* Button Group: flex flex-col sm:flex-row gap-4 justify-center */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            
            {/* Shop Now Button - Matches the red button in your image */}
            <Link
              href="/products"
              className="group w-full sm:w-auto flex items-center justify-center gap-2 bg-[#b34031] text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-lg hover:bg-[#c34638] transition-all active:scale-95"
            >
              Shop Now
              <MoveRight className="w-5 h-5 group-hover:translate-x transition-transform" />
            </Link>

            {/* WhatsApp Button - Transparent with border as per image */}
            <Link
              href="https://wa.me/919876543210"
              target="_blank"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-transparent border-2 border-[#231911]/20 text-[#231911] px-8 py-4 rounded-2xl font-bold text-lg hover:bg-[#231911]/5 transition-all active:scale-95"
            >
              <MessageSquare className="w-5 h-5" />
              Order on WhatsApp
            </Link>
          </div>
        </div>
      </div>

      {/* CSS for the floating animations seen in your class names */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float 7s ease-in-out infinite;
          animation-delay: 2s;
        }
        .animate-float-slow {
          animation: float 9s ease-in-out infinite;
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
};

export default ReadyToCrunch;