"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ChevronDown, Filter, X, Search } from "lucide-react";
import { products, categories } from "../../data/products";
import { ProductCard } from "../../components/ProductCard";

const sortOptions = ["Most Popular", "Price: Low to High", "Price: High to Low", "Highest Rated", "Newest First"];
const badgeFilters = ["Trending", "Bestseller", "Healthy", "New"];

const ProductsPage = () => {
  const searchParams = useSearchParams();
  const filterParam = searchParams.get("filter");
  const categoryParam = searchParams.get("category");

  const [activeCategory, setActiveCategory] = useState("All Products");
  const [activeBadge, setActiveBadge] = useState("All");
  const [sortBy, setSortBy] = useState("Most Popular");
  const [openSort, setOpenSort] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // URL Params Sync logic
  useEffect(() => {
    if (filterParam === "bestseller") {
      setActiveBadge("Bestseller");
    } else {
      setActiveBadge("All");
    }

    if (categoryParam) {
      setActiveCategory(categoryParam);
    } else {
      setActiveCategory("All Products");
    }
  }, [filterParam, categoryParam]);

  const handleClearFilters = () => {
    setActiveCategory("All Products");
    setActiveBadge("All");
    setSortBy("Most Popular");
  };

  const filteredProducts = products
    .filter((p) => {
      const categoryMatch = activeCategory === "All Products" || p.category === activeCategory;
      const badgeMatch = activeBadge === "All" || p.badge === activeBadge;
      return categoryMatch && badgeMatch;
    })
    .sort((a, b) => {
      if (sortBy === "Price: Low to High") return a.price - b.price;
      if (sortBy === "Price: High to Low") return b.price - a.price;
      if (sortBy === "Highest Rated") return b.rating - a.rating;
      return 0;
    });

  return (
    <div className="bg-[#faf9f6] min-h-screen pt-16 pb-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8">
        
        {/* BREADCRUMB */}
        <div className="mb-6 text-sm font-semibold text-[#9c8f7d]">
          <Link href="/" className="hover:text-[#231911]">Home</Link>
          <span className="mx-1">›</span>
          <span className="text-[#231911]">
            {activeCategory !== "All Products" ? activeCategory : activeBadge === "Bestseller" ? "Best Sellers" : "All Products"}
          </span>
        </div>

        {/* HEADER SECTION */}
        <div className="mb-8">
          <h1 className="text-[32px] md:text-[42px] font-black text-[#231911]">
            {activeCategory === "Combos" ? "📦 Combos" : activeBadge === "Bestseller" ? "🔥 Best Sellers" : "🍿 All Products"}
          </h1>
          <p className="text-[#a89985] font-semibold text-sm">{filteredProducts.length} products available</p>
        </div>

        {/* MOBILE CONTROLS */}
        <div className="flex items-center justify-between mb-6 md:hidden">
          <button 
            onClick={() => setIsSidebarOpen(true)}
            className="flex items-center justify-center gap-2 px-5 py-2 bg-white border-[1.5px] border-[#f3a921] rounded-xl text-[#f3a921] font-bold text-[14px] shadow-sm active:scale-95"
          >
            <Filter size={18} strokeWidth={2.5} /> Filters
          </button>

          <div className="relative min-w-[150px]">
            <button
              onClick={() => setOpenSort(!openSort)}
              className="w-full flex items-center justify-between gap-2 bg-white px-4 py-2 rounded-xl border border-gray-300 shadow-sm"
            >
              <span className="text-[#231911] font-bold text-[13px] truncate">{sortBy}</span>
              <ChevronDown size={14} className={`text-gray-400 transition-transform ${openSort ? 'rotate-180' : ''}`} />
            </button>
            {openSort && (
              <div className="absolute top-full right-0 mt-2 w-[180px] bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden z-[200]">
                {sortOptions.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => { setSortBy(opt); setOpenSort(false); }}
                    className={`w-full text-left px-4 py-3 text-[13px] font-bold transition-colors ${sortBy === opt ? "bg-[#2563eb] text-white" : "text-gray-700 active:bg-[#f3f0ea]"}`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* SIDEBAR */}
          <aside className={`fixed inset-0 z-[150] bg-black/40 transition-opacity md:relative md:bg-transparent md:z-0 md:block ${isSidebarOpen ? "visible" : "hidden md:block"}`}>
            <div className={`absolute left-0 top-0 h-full w-[300px] bg-white p-8 md:relative md:w-[260px] md:h-auto md:rounded-[32px] md:p-6 md:sticky md:top-24`}>
              <div className="flex items-center justify-between mb-8 md:hidden text-[#231911]">
                <h2 className="text-xl font-black">Filters</h2>
                <X onClick={() => setIsSidebarOpen(false)} className="cursor-pointer" size={24} />
              </div>

              <h3 className="font-black text-[#231911] mb-6 text-xl">Categories</h3>
              <div className="flex flex-col gap-1 mb-10">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => { setActiveCategory(cat); setIsSidebarOpen(false); }}
                    className={`px-5 py-3 rounded-2xl text-left font-bold text-[15px] transition-all ${activeCategory === cat ? "bg-[#f3a921] text-white shadow-md" : "text-[#7e7465] hover:bg-[#f3f0ea]"}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <h3 className="font-black text-[#231911] mb-6 text-xl">Filter</h3>
              <div className="flex flex-col gap-1">
                <button
                  onClick={() => { setActiveBadge("All"); setIsSidebarOpen(false); }}
                  className={`px-5 py-3 rounded-2xl text-left font-bold text-[15px] transition-all ${activeBadge === "All" ? "bg-[#231911] text-white shadow-md" : "text-[#7e7465] hover:bg-[#f3f0ea]"}`}
                >
                  All Products
                </button>
                {badgeFilters.map((badge) => (
                  <button
                    key={badge}
                    onClick={() => { setActiveBadge(badge); setIsSidebarOpen(false); }}
                    className={`px-5 py-3 rounded-2xl text-left font-bold text-[15px] transition-all ${activeBadge === badge ? "bg-[#231911] text-white shadow-md" : "text-[#7e7465] hover:bg-[#f3f0ea]"}`}
                  >
                    {badge}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* MAIN SECTION */}
          <main className="flex-1">
            <div className="hidden md:flex justify-end items-center gap-2 mb-8 relative text-right">
              <span className="text-[#9c8f7d] text-[15px] font-medium">Sort by:</span>
              <div className="relative">
                <button onClick={() => setOpenSort(!openSort)} className="flex items-center justify-between gap-3 bg-white px-5 py-2 min-w-[180px] rounded-2xl border-[2px] border-[#f3a921] shadow-sm active:scale-95 transition-all">
                  <span className="text-[#231911] font-bold text-[15px]">{sortBy}</span>
                  <ChevronDown size={18} className={`transition-transform duration-300 ${openSort ? 'rotate-180' : ''}`} />
                </button>
                {openSort && (
                  <div className="absolute top-full right-0 mt-2 w-full bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden z-50">
                    {sortOptions.map((opt) => (
                      <button key={opt} onClick={() => { setSortBy(opt); setOpenSort(false); }} className={`w-full text-left px-5 py-3 text-[14px] font-bold transition-colors ${sortBy === opt ? "bg-[#2563eb] text-white" : "text-gray-700 hover:bg-[#f3f0ea]"}`}>
                        {opt}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map((product, index) => <ProductCard key={product.id} product={product} index={index} />)}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-20 px-4 text-center">
                <div className="bg-gray-100 p-6 rounded-full mb-6">
                  <Search size={48} className="text-gray-400" />
                </div>
                <h2 className="text-2xl font-black text-[#231911] mb-2">No products found</h2>
                <p className="text-[#9c8f7d] font-medium mb-8 max-w-sm">Oops! We couldn't find anything matching your filters.</p>
                <button onClick={handleClearFilters} className="px-8 py-3 bg-white border-2 border-[#f3a921] text-[#f3a921] font-bold rounded-2xl hover:bg-[#f3a921] hover:text-white transition-all shadow-md active:scale-95">Clear Filters</button>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;