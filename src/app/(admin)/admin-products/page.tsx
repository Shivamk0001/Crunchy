"use client";

import { useState } from "react";
import Image from "next/image";
import { Search, Plus, ChevronDown, Pencil, Trash2 } from "lucide-react";
import { products as productsData } from "@/src/data/products";

export default function ProductsPage() {
  const [search, setSearch] = useState("");

  const filteredProducts = productsData.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="">
      
      {/* ---------------- TOP BAR ---------------- */}
      <div className="flex flex-col md:flex-row items-center gap-3 mb-5">
        <div className="relative w-full flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8B6A4E]" size={20} />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search products..."
            className="w-full pl-12 pr-4 py-3 rounded-2xl bg-white border border-[#EADFD4] text-[#6B4E37] outline-none text-base shadow-sm"
          />
        </div>

        <div className="flex gap-2 w-full md:w-auto">
          <button className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-white border border-[#EADFD4] px-4 py-3 rounded-2xl text-[#6B4E37] text-sm font-medium shadow-sm">
            All Products <ChevronDown size={16} />
          </button>
          <button className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-[#F9A602] text-white px-6 py-3 rounded-2xl font-bold text-sm shadow-md">
            <Plus size={20} /> Add Product
          </button>
        </div>
      </div>

      {/* ---------------- MOBILE VIEW (Visible only on small screens) ---------------- */}
      <div className="flex flex-col gap-3 md:hidden">
        {filteredProducts.map((p) => (
          <div key={p.id} className="bg-white p-3 rounded-2xl border border-[#EFE5DA] shadow-sm flex items-center gap-4">
            <div className="w-16 h-16 rounded-xl overflow-hidden bg-[#F3EFE9] flex-shrink-0 border border-[#EFE5DA]">
              <Image src={p.image} alt={p.name} width={64} height={64} className="object-cover w-full h-full" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-start">
                <h3 className="font-bold text-[#1F1F1F] text-sm truncate">{p.name}</h3>
                <div className="flex gap-3 ml-2">
                  <Pencil size={18} className="text-[#8B6A4E]" />
                  <Trash2 size={18} className="text-red-400" />
                </div>
              </div>
              <p className="text-xs text-[#9C8A7A]">{p.category} • {p.weight}</p>
              <div className="flex items-center justify-between mt-2">
                <div>
                  <span className="font-bold text-[#1F1F1F]">₹{p.price}</span>
                  <span className="text-[10px] text-green-600 font-bold ml-2">{p.discount} OFF</span>
                </div>
                <span className="bg-[#EAF7EE] text-green-700 text-[10px] px-2 py-0.5 rounded-md font-bold">In Stock</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ---------------- DESKTOP VIEW (Visible only on medium screens and up) ---------------- */}
      <div className="hidden md:block bg-white rounded-2xl border border-[#EFE5DA] overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse min-w-[700px]">
            <thead className="bg-[#F7F3EE]">
              <tr className="text-left text-[#8B6A4E] text-[13px] font-bold uppercase tracking-wider">
                <th className="px-4 py-4">Product</th>
                <th className="px-4 py-4">Category</th>
                <th className="px-4 py-4">Price</th>
                <th className="px-4 py-4">Stock</th>
                <th className="px-4 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#EFE5DA]">
              {filteredProducts.map((p) => (
                <tr key={p.id} className="hover:bg-[#FAF8F5] transition-colors">
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl overflow-hidden bg-[#F3EFE9] flex-shrink-0 border border-[#EFE5DA]">
                        <Image src={p.image} alt={p.name} width={48} height={48} className="object-cover w-full h-full" />
                      </div>
                      <div>
                        <p className="font-bold text-[#1F1F1F] text-[15px] leading-tight">{p.name}</p>
                        <p className="text-xs text-[#9C8A7A] mt-1 font-medium">{p.weight}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-sm font-medium text-[#8B6A4E]">{p.category}</td>
                  <td className="px-4 py-4">
                    <p className="font-bold text-[#1F1F1F] text-base">₹{p.price}</p>
                    {p.discount && <p className="text-green-600 text-[11px] font-bold">{p.discount} OFF</p>}
                  </td>
                  <td className="px-4 py-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-lg bg-[#EAF7EE] text-green-700 text-xs font-bold">In Stock</span>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex justify-end gap-4">
                      <button className="p-1 hover:scale-110 transition-transform">
                        <Pencil size={19} className="text-[#8B6A4E] hover:text-[#F9A602]" />
                      </button>
                      <button className="p-1 hover:scale-110 transition-transform">
                        <Trash2 size={19} className="text-red-400 hover:text-red-600" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}