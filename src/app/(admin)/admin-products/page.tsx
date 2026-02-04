"use client";

import { useState } from "react";
import Image from "next/image";
import { Search, Plus, ChevronDown, Pencil, Trash2, X } from "lucide-react";
import { products as productsData } from "@/src/data/products";

export default function ProductsPage() {
  // --- STATES ---
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  // Modal States
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFormCategoryOpen, setIsFormCategoryOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    category: "Peanuts",
    price: "",
    originalPrice: "",
    weight: "",
    imageUrl: "",
    shortDesc: "",
    fullDesc: "",
    inStock: true,
    featured: false,
    bestSeller: false,
    newArrival: false
  });

  const categories = ["All Products", "Peanuts", "Banana Chips", "Wafers", "Mixtures", "Combo Packs"];
  const formCategories = ["Peanuts", "Banana Chips", "Wafers", "Mixtures", "Combo Packs"];

  // --- FILTER LOGIC ---
  const filteredProducts = productsData.filter((p) => {
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = selectedCategory === "All Products" || p.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen">
      
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
          {/* Main Category Dropdown */}
          <div className="relative flex-1 md:flex-none">
            <button 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full flex items-center justify-center gap-2 bg-white border border-[#EADFD4] px-4 py-3 rounded-2xl text-[#6B4E37] text-sm font-medium shadow-sm min-w-[150px]"
            >
              {selectedCategory} <ChevronDown size={16} className={`${isDropdownOpen ? 'rotate-180' : ''} transition-transform`} />
            </button>

            {isDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-full min-w-[160px] bg-white border border-[#EADFD4] rounded-xl shadow-xl z-50 overflow-hidden">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      setSelectedCategory(cat);
                      setIsDropdownOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${
                      selectedCategory === cat ? 'bg-blue-600 text-white' : 'text-[#6B4E37] hover:bg-[#F7F3EE]'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button 
            onClick={() => setIsModalOpen(true)}
            className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-[#F9A602] text-white px-6 py-3 rounded-2xl font-bold text-sm shadow-md hover:bg-[#e09502] transition-all"
          >
            <Plus size={20} /> Add Product
          </button>
        </div>
      </div>

      {/* ---------------- MOBILE VIEW ---------------- */}
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

      {/* ---------------- DESKTOP VIEW ---------------- */}
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

      {/* ---------------- ADD PRODUCT MODAL ---------------- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm transition-all duration-300">
          <div className="bg-white w-full max-w-[600px] rounded-[32px] overflow-hidden shadow-2xl scale-in-center transition-transform duration-300">
            
            {/* Modal Header */}
            <div className="flex justify-between items-center px-8 py-6 border-b border-[#F0E6DC]">
              <h2 className="text-xl font-bold text-[#2D1B0F]">Add Product</h2>
              <button 
                onClick={() => setIsModalOpen(false)} 
                className="text-[#8B6A4E] hover:bg-[#F7F3EE] p-2 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-8 space-y-5 max-h-[75vh] overflow-y-auto custom-scrollbar">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Product Name */}
                <div className="space-y-1.5">
                  <label className="text-[13px] font-bold text-[#6B4E37] ml-1">Product Name *</label>
                  <input 
                    type="text" 
                    placeholder="Classic Masala Peanuts" 
                    className="w-full px-4 py-3 rounded-2xl bg-[#F3EFE9] border-none text-[#6B4E37] placeholder-[#A8907E] focus:ring-2 focus:ring-[#F9A602] outline-none transition-all" 
                  />
                </div>

                {/* Category Selector (Inside Modal) */}
                <div className="space-y-1.5 relative">
                  <label className="text-[13px] font-bold text-[#6B4E37] ml-1">Category</label>
                  <button 
                    onClick={() => setIsFormCategoryOpen(!isFormCategoryOpen)}
                    className="w-full flex items-center justify-between px-4 py-3 rounded-2xl bg-[#F3EFE9] text-[#6B4E37] text-sm font-medium"
                  >
                    {formData.category} <ChevronDown size={18} className={`${isFormCategoryOpen ? 'rotate-180' : ''} transition-transform`} />
                  </button>
                  
                  {isFormCategoryOpen && (
                    <div className="absolute top-[110%] left-0 w-full bg-white border border-[#EADFD4] rounded-xl shadow-xl z-[110] overflow-hidden">
                      {formCategories.map((cat) => (
                        <button
                          key={cat}
                          onClick={() => {
                            setFormData({...formData, category: cat});
                            setIsFormCategoryOpen(false);
                          }}
                          className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${
                            formData.category === cat ? 'bg-blue-600 text-white' : 'text-[#6B4E37] hover:bg-[#F7F3EE]'
                          }`}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Prices */}
                <div className="space-y-1.5">
                  <label className="text-[13px] font-bold text-[#6B4E37] ml-1">Price *</label>
                  <input type="text" placeholder="149" className="w-full px-4 py-3 rounded-2xl bg-[#F3EFE9] border-none text-[#6B4E37] focus:ring-2 focus:ring-[#F9A602] outline-none" />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[13px] font-bold text-[#6B4E37] ml-1">Original Price</label>
                  <input type="text" placeholder="199" className="w-full px-4 py-3 rounded-2xl bg-[#F3EFE9] border-none text-[#6B4E37] focus:ring-2 focus:ring-[#F9A602] outline-none" />
                </div>

                {/* Weight and URL */}
                <div className="space-y-1.5">
                  <label className="text-[13px] font-bold text-[#6B4E37] ml-1">Weight</label>
                  <input type="text" placeholder="200g" className="w-full px-4 py-3 rounded-2xl bg-[#F3EFE9] border-none text-[#6B4E37] focus:ring-2 focus:ring-[#F9A602] outline-none" />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[13px] font-bold text-[#6B4E37] ml-1">Image URL</label>
                  <input type="text" placeholder="https://images.unsplash.com/..." className="w-full px-4 py-3 rounded-2xl bg-[#F3EFE9] border-none text-[#6B4E37] truncate focus:ring-2 focus:ring-[#F9A602] outline-none" />
                </div>
              </div>

              {/* Descriptions */}
              <div className="space-y-1.5">
                <label className="text-[13px] font-bold text-[#6B4E37] ml-1">Short Description</label>
                <input type="text" placeholder="Crunchy roasted peanuts..." className="w-full px-4 py-3 rounded-2xl bg-[#F3EFE9] border-none text-[#6B4E37] focus:ring-2 focus:ring-[#F9A602] outline-none" />
              </div>

              <div className="space-y-1.5">
                <label className="text-[13px] font-bold text-[#6B4E37] ml-1">Full Description</label>
                <textarea rows={3} placeholder="Detailed product description..." className="w-full px-4 py-4 rounded-2xl bg-[#F3EFE9] border-none text-[#6B4E37] resize-none focus:ring-2 focus:ring-[#F9A602] outline-none" />
              </div>

              {/* Checkboxes */}
              <div className="flex flex-wrap gap-x-6 gap-y-3 pt-2">
                {[
                  { id: 'inStock', label: 'In Stock' },
                  { id: 'featured', label: 'Featured' },
                  { id: 'bestSeller', label: 'Best Seller' },
                  { id: 'newArrival', label: 'New Arrival' }
                ].map((item) => (
                  <label key={item.id} className="flex items-center gap-2 cursor-pointer group">
                    <input 
                      type="checkbox" 
                      checked={formData[item.id]}
                      onChange={(e) => setFormData({...formData, [item.id]: e.target.checked})}
                      className="w-5 h-5 rounded border-[#D1C4B9] text-[#F9A602] focus:ring-[#F9A602] cursor-pointer" 
                    />
                    <span className="text-[13px] font-medium text-[#6B4E37] group-hover:text-[#F9A602] transition-colors">{item.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex justify-end gap-3 px-8 py-6 border-t border-[#F0E6DC]">
              <button 
                onClick={() => setIsModalOpen(false)}
                className="px-8 py-2.5 rounded-xl border border-[#F9A602] text-[#F9A602] font-bold text-sm hover:bg-[#FFF8F0] transition-all"
              >
                Cancel
              </button>
              <button className="px-8 py-2.5 rounded-xl bg-[#F9A602] text-white font-bold text-sm hover:bg-[#e09502] shadow-md transition-all">
                Save Product
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CSS for custom scrollbar & animation (can be added in globals.css) */}
      <style jsx font="true">{`
        .custom-scrollbar::-webkit-scrollbar { width: 5px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: #f1f1f1; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #EADFD4; border-radius: 10px; }
        .scale-in-center { animation: scale-in-center 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both; }
        @keyframes scale-in-center {
          0% { transform: scale(0.95); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
      `}</style>

    </div>
  );
}