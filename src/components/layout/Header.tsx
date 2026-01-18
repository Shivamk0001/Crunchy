"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Search, ShoppingCart, Settings } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "Best Sellers", href: "/products?filter=bestseller" },
  { name: "Combos", href: "/products?category=Combos" },
];

// Exact colors from your video/image
const TEXT_BROWN = "text-[#5d3e28]"; 
const PRIMARY_ORANGE = "#f4a922";
const ICON_STYLE = "w-5 h-5 text-[#5d3e28]";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* 🔔 TOP OFFER BAR (With Blink Animation) */}
      <div className="animate-offer-blink bg-[#fff9f0] text-[#5d3e28] text-center py-2 text-sm font-bold tracking-wide border-b border-orange-100">
        Free Delivery on orders above ₹499 | Use code SNACK20 for 20% off
      </div>

      {/* 🧭 MAIN HEADER */}
      <header className="sticky top-0 z-40 w-full bg-white/100 backdrop-blur-md border-b border-gray-200">
        <nav className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-full bg-[#f4a922] flex items-center justify-center text-xl transition-transform group-hover:scale-110 shadow-sm">
                🥜
              </div>
              <span className="font-bold text-xl text-[#070300] tracking-tight">
                Crunch<span className="text-[#f4a922]">Kart</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-12">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`relative group text-[15px] font-medium transition-all duration-300 ${
                      isActive ? "text-[#f4a922]" : "text-[#75492a] hover:text-[#f4a922]"
                    }`}
                  >
                    <span>{link.name}</span>
                    <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#f4a922] transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                  </Link>
                );
              })}
            </div>

            {/* Right Icons */}
            <div className="flex items-center gap-2 sm:gap-4">
              {/* Search - Desktop only */}
              <button className="hidden sm:flex h-10 w-10 items-center justify-center rounded-lg hover:bg-orange-50 transition">
                <Search className={ICON_STYLE} />
              </button>
<Link href="/dashboard" className="hidden sm:block">
  <button title="Admin Dashboard" className="h-10 w-10 flex items-center justify-center rounded-lg hover:bg-orange-50 transition text-gray-600 hover:text-orange-500">
    <Settings className={ICON_STYLE} />
  </button>
</Link>

              {/* Cart - Mobile aur Desktop dono pe dikhega */}
              <Link href="/cart" className="relative">
                <button className="h-10 w-10 flex items-center justify-center rounded-lg hover:bg-orange-50 transition">
                  <ShoppingCart className={ICON_STYLE} />
                </button>
              </Link>

              {/* Mobile Menu Button - Sirf Mobile pe dikhega */}
              <button
                onClick={() => setOpen(true)}
                className="h-10 w-10 flex items-center justify-center rounded-lg hover:bg-orange-50 transition md:hidden"
              >
                <Menu className={ICON_STYLE} />
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* 📱 MOBILE SIDEBAR */}
      <div className={`fixed inset-0 z-50 ${open ? "visible" : "invisible"}`}>
        <div
          className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setOpen(false)}
        />

        <div
          className={`absolute left-0 top-0 h-full w-[280px] bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between px-6 h-16 border-b border-gray-50">
            <span className="font-bold text-lg text-[#5d3e28]">
              Crunch<span className="text-[#f4a922]">Kart</span>
            </span>
            <button onClick={() => setOpen(false)} className="p-2">
              <X className="w-6 h-6 text-gray-400 hover:text-[#f4a922]" />
            </button>
          </div>

          <nav className="flex flex-col py-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`px-6 py-4 text-[16px] font-bold text-[#5d3e28] hover:bg-orange-50 hover:text-[#f4a922] transition-colors border-l-4 border-transparent hover:border-[#f4a922]`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}