"use client";

import { useState, useMemo, useEffect } from "react";
import {
  Search as SearchIcon,
  X as CloseIcon,
  ChevronDown as ArrowDown,
  Eye as ViewIcon,
} from "lucide-react";
import Image from "next/image";
import { orders as ordersData, Order } from "@/src/data/orders";

// ✅ Styles mapped exactly as per image colors
const statusStyle: Record<string, string> = {
  Pending: "bg-[#FFF8E1] text-[#F9AB00] border-[#FFE082]",
  Processing: "bg-[#E3F2FD] text-[#1976D2] border-[#BBDEFB]",
  Shipped: "bg-[#F3E5F5] text-[#7B1FA2] border-[#E1BEE7]",
  Delivered: "bg-[#E6F4EA] text-[#1E8E3E] border-[#C8E6C9]",
  Cancelled: "bg-red-50 text-red-500 border-red-100",
};

export default function OrdersPage() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All Status");
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  // ✅ ERROR FIX: localOrders state define ki taaki function kaam kare
  const [localOrders, setLocalOrders] = useState<Order[]>(ordersData);

  useEffect(() => {
    document.documentElement.style.overflowX = "hidden";
    document.body.style.overflowX = "hidden";
  }, []);

  // ✅ Status update karne ke liye local state function
  const handleStatusChange = (orderId: string, newStatus: string) => {
    const updated = localOrders.map(order => 
      order.id === orderId ? { ...order, status: newStatus as any } : order
    );
    setLocalOrders(updated);
  };

  const filteredOrders = useMemo(() => {
    // ✅ localOrders use kiya taaki status update UI mein dikhe
    return localOrders.filter((o) => {
      const matchesSearch =
        o.customer.toLowerCase().includes(search.toLowerCase()) ||
        o.id.toLowerCase().includes(search.toLowerCase());
      const matchesStatus = status === "All Status" || o.status === status;
      return matchesSearch && matchesStatus;
    });
  }, [search, status, localOrders]);

  return (
    <main className="flex-1 px-1 py-4 bg-transparent min-h-screen">
      
      {/* 🔒 FIXED TOP BAR */}
      <div className="sticky top-20 z-30 bg-[#FAFAFA]/80 backdrop-blur-md pb-4 pt-2 px-1">
        <div className="flex flex-col md:flex-row items-center gap-3">
          <div className="relative w-full md:flex-1">
            <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8B5E3C]" size={20} />
            <input
              placeholder="Search by ID or customer..."
              value={search}
              onChange={(e) => setSearch(e.target.value)} 
              className="w-full pl-12 pr-6 py-4 rounded-[20px] bg-white border border-[#F0F0F0] text-black font-semibold placeholder:text-[#A0AEC0] outline-none shadow-sm shadow-black/5 text-base"
            />
          </div>

          <div className="relative w-full md:w-64">
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="appearance-none w-full px-6 py-4 pr-12 rounded-[20px] bg-white border border-[#F0F0F0] font-bold text-black cursor-pointer shadow-sm outline-none"
            >
              <option>All Status</option>
              <option>Pending</option>
              <option>Processing</option>
              <option>Shipped</option>
              <option>Delivered</option>
              <option>Cancelled</option>
            </select>
            <ArrowDown className="absolute right-5 top-1/2 -translate-y-1/2 text-[#8B5E3C] pointer-events-none" size={18} />
          </div>
        </div>
      </div>

      {/* ---------------- DESKTOP TABLE ---------------- */}
      <div className="hidden md:block bg-white rounded-[24px] border border-[#F0F0F0] shadow-sm shadow-black/5 overflow-hidden mt-2">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#F8F6F2] border-b border-[#F0F0F0]">
                {["Order ID", "Customer", "Items", "Total", "Payment", "Status", "Date", "Action"].map((h) => (
                  <th key={h} className="py-5 px-6 font-medium text-sm text-[#8B7E6D] whitespace-nowrap">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-[#F5F5F5]">
              {filteredOrders.map((o) => (
                <tr key={o.id} className="hover:bg-gray-50/50 transition-colors group">
                  <td className="py-4 px-6 font-bold text-black">{o.id}</td>
                  <td className="py-4 px-6 min-w-[150px]">
                    <p className="font-bold text-black text-[15px] leading-none mb-1">{o.customer}</p>
                    <span className="text-[11px] text-[#999999] uppercase">{o.city}</span>
                  </td>
                  <td className="py-4 px-6 text-sm text-[#666]">{o.items.length} items</td>
                  <td className="py-4 px-6 font-bold text-black text-[15px]">₹{o.total}</td>
                  <td className="py-4 px-6">
                    <span className="px-2.5 py-1 rounded-full bg-[#E6F4EA] text-[#1E8E3E] text-[10px] font-bold uppercase">{o.payment}</span>
                  </td>
                  <td className="py-4 px-6">
                    {/* ✅ STATUS DROPDOWN MATCHED TO IMAGE */}
                    <div className="relative inline-block">
                      <select
                        value={o.status}
                        onChange={(e) => handleStatusChange(o.id, e.target.value)}
                        className={`appearance-none pl-4 pr-10 py-2 rounded-full text-[11px] font-extrabold cursor-pointer outline-none border transition-all ${statusStyle[o.status] || "bg-gray-100"}`}
                      >
                        <option value="Pending">Pending</option>
                        <option value="Processing">Processing</option>
                        <option value="Shipped">Shipped</option>
                        <option value="Delivered">Delivered</option>
                        <option value="Cancelled">Cancelled</option>
                      </select>
                      <ArrowDown className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none opacity-60 text-[#8B5E3C]" size={14} />
                    </div>
                  </td>
                  <td className="py-4 px-6 text-[13px] text-[#8B7E6D] font-medium">{o.date}</td>
                  <td className="py-4 px-6 text-center">
                    <button onClick={() => setSelectedOrder(o)} className="p-2.5 bg-[#F8F6F2] hover:bg-[#F1ECE5] rounded-xl transition-all">
                      <ViewIcon size={18} className="text-[#8B5E3C]" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ---------------- MOBILE CARDS ---------------- */}
      <div className="grid grid-cols-1 gap-3 md:hidden px-1 mt-2">
        {filteredOrders.map((o) => (
          <div key={o.id} className="bg-white rounded-[24px] p-5 border border-[#F0F0F0] shadow-sm shadow-black/5">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-[10px] text-[#999] uppercase mb-1">{o.id}</p>
                <p className="font-bold text-black text-lg leading-tight">{o.customer}</p>
              </div>
              <select
                value={o.status}
                onChange={(e) => handleStatusChange(o.id, e.target.value)}
                className={`px-3 py-1.5 rounded-full text-[10px] font-bold outline-none border ${statusStyle[o.status] || "bg-gray-100"}`}
              >
                <option value="Pending">Pending</option>
                <option value="Processing">Processing</option>
                <option value="Shipped">Shipped</option>
                <option value="Delivered">Delivered</option>
                <option value="Cancelled">Cancelled</option>
              </select>
            </div>
            <div className="flex justify-between text-sm mb-4">
              <span className="text-[#666]">Items: {o.items.length}</span>
              <span className="font-bold text-black">₹{o.total}</span>
            </div>
            <button onClick={() => setSelectedOrder(o)} className="w-full py-3 bg-[#F8F6F2] text-[#8B5E3C] font-bold rounded-xl text-sm transition-all hover:bg-[#F1ECE5]">View Details</button>
          </div>
        ))}
      </div>

      {/* ---------------- MODAL ---------------- */}
      {selectedOrder && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-[9999] p-4">
          <div className="bg-white w-full max-w-lg rounded-[32px] shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
            <div className="px-8 py-6 flex justify-between items-center bg-[#F8F6F2] border-b border-[#F0F0F0]">
              <div>
                <h2 className="text-xl font-bold text-black">Order Details</h2>
                <p className="text-[10px] text-[#8B7E6D]">ID: {selectedOrder.id}</p>
              </div>
              <button onClick={() => setSelectedOrder(null)} className="p-2 hover:bg-gray-200 rounded-full transition-all">
                <CloseIcon size={24} className="text-black" />
              </button>
            </div>

            <div className="p-8 overflow-y-auto max-h-[75vh]">
              <div className="mb-8">
                <h3 className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#8B7E6D] mb-4">Customer Details</h3>
                <div className="grid grid-cols-2 gap-4 bg-[#F8F6F2] p-5 rounded-2xl border border-[#F0F0F0]">
                  <div>
                    <p className="text-[10px] text-[#8B7E6D] uppercase font-bold">Name</p>
                    <p className="font-bold text-black">{selectedOrder.customer}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-[#8B7E6D] uppercase font-bold">Location</p>
                    <p className="font-bold text-black">{selectedOrder.city}</p>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#8B7E6D] mb-4">Items Ordered</h3>
                <div className="space-y-3">
                  {selectedOrder.items.map((i, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 bg-white border border-[#F0F0F0] rounded-2xl">
                      <div className="flex items-center gap-4">
                        <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-gray-50 flex-shrink-0 border border-[#F5F5F5]">
                          <Image src={i.image} alt={i.name} fill className="object-cover" />
                        </div>
                        <div>
                          <p className="font-bold text-sm text-black">{i.name}</p>
                          <p className="text-xs text-[#8B7E6D] font-semibold">Qty: {i.qty}</p>
                        </div>
                      </div>
                      <p className="font-bold text-black">₹{i.price}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-dashed border-[#F0F0F0] space-y-3">
                <div className="flex justify-between text-sm text-[#666] font-medium">
                  <span>Subtotal</span>
                  <span>₹{Number(selectedOrder.total) + 150}</span>
                </div>
                <div className="flex justify-between text-sm text-red-500 font-bold">
                  <span>Discount</span>
                  <span>-₹150</span>
                </div>
                <div className="flex justify-between items-center pt-4 border-t border-[#F1ECE5]">
                  <span className="text-lg font-bold text-black">Total Amount</span>
                  <span className="text-2xl font-black text-black">₹{selectedOrder.total}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}