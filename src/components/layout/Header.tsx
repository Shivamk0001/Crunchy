"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Search, ShoppingCart, Settings } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Products", href: "#" },
  { name: "Best Sellers", href: "#" },
  { name: "Combos", href: "#" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Top Offer Bar */}
      <div className="w-full bg-gradient-to-r from-[#fff4df] to-[#ffe2b8] text-center text-xs sm:text-sm py-1.5 text-black">
        Free Delivery on orders above ₹499 | Use code{" "}
        <span className="font-semibold">SNACK20</span> for 20% off
      </div>

      {/* Main Header */}
      <header className="w-full bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-5 h-[60px] flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full bg-orange-400 flex items-center justify-center text-white text-lg">
              🥜
            </div>
            <span className="text-lg font-bold">
              <span className="text-black">Crunch</span>
              <span className="text-orange-500">Kart</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10 text-[16px] font-medium text-black">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative hover:text-orange-500 transition
                  after:absolute after:-bottom-1 after:left-0 after:h-[2px]
                  after:w-0 after:bg-orange-500 hover:after:w-full
                  after:transition-all"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right Icons */}
          <div className="flex items-center gap-5 text-black pr-1">
            <Search className="w-[22px] h-[22px] cursor-pointer hover:text-orange-500 transition" />
            <Settings className="w-[22px] h-[22px] cursor-pointer hover:text-orange-500 transition hidden sm:block" />
            <ShoppingCart className="w-[22px] h-[22px] cursor-pointer hover:text-orange-500 transition" />

            {/* Mobile Menu Button */}
            <button
              className="md:hidden ml-1"
              onClick={() => setOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-0 z-50 transition ${
          open ? "visible" : "invisible"
        }`}
      >
        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-black/40 transition-opacity ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setOpen(false)}
        />

        {/* Sidebar (50% width) */}
        <div
          className={`absolute left-0 top-0 h-full w-1/2 bg-white p-6 transform transition-transform duration-300 ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between mb-6">
            <span className="text-lg font-bold">
              <span className="text-black">Crunch</span>
              <span className="text-orange-500">Kart</span>
            </span>
            <X
              className="w-6 h-6 cursor-pointer"
              onClick={() => setOpen(false)}
            />
          </div>

          <nav className="flex flex-col gap-5 text-[15px] font-medium text-black">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="hover:text-orange-500 transition"
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
