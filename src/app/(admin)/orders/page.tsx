"use client";

import React, { useState, useMemo } from "react";
import { 
  Search, 
  ChevronLeft, 
  ChevronDown, 
  X, 
  CheckCircle2, 
  Clock, 
  Truck, 
  Package,
  AlertCircle 
} from "lucide-react";

/* ---------------- DATA ---------------- */

const ordersData = [
  { id: "ORD-1000", customer: "Rahul Sharma", city: "Mumbai", itemsCount: 2, total: 347, payment: "Paid", status: "Pending", date: "30/11/2025", 
    email: "rahul@example.com", phone: "9876543210", address: "123 Main Street, Mumbai, Maharashtra - 400220",
    items: [
      { name: "Classic Masala Peanuts", qty: 2, price: 298, image: "/assets/Bun.jpg" },
      { name: "Spicy Potato Wafers", qty: 1, price: 49, image: "/assets/Pototo-Chips.jpg" }
    ]
  },
  { id: "ORD-1001", customer: "Priya Patel", city: "Delhi", itemsCount: 3, total: 2129, payment: "Paid", status: "Processing", date: "2/12/2025",
    email: "priya@example.com", phone: "9988776655", address: "456 Park Avenue, Delhi - 110001",
    items: [
      { name: "Festive Gift Box", qty: 2, price: 1798, image: "/assets/Chocolate.jpg" },
      { name: "Bombay Mix Special", qty: 1, price: 331, image: "/assets/samosha.jpg" }
    ]
  },
  { id: "ORD-1002", customer: "Amit Kumar", city: "Bangalore", itemsCount: 3, total: 689, payment: "Paid", status: "Pending", date: "20/12/2025",
    email: "amit@example.com", phone: "9122334455", address: "789 Tech Park, Bangalore, Karnataka - 560001",
    items: [
      { name: "Kerala Banana Chips", qty: 3, price: 689, image: "/assets/chips.jpg" }
    ]
  },
  { id: "ORD-1003", customer: "Sneha Reddy", city: "Chennai", itemsCount: 3, total: 1022, payment: "Paid", status: "Processing", date: "18/12/2025",
    email: "sneha@example.com", phone: "9876543233", address: "123 Main Street, Chennai, Tamil Nadu - 400253",
    items: [
      { name: "Festival Gift Box", qty: 2, price: 1798, image: "/assets/Chocolate.jpg" },
      { name: "Family Snack Pack", qty: 3, price: 1347, image: "/assets/Chocolate.jpg" }
    ]
  }
];

const statusStyles = {
  Pending: "bg-[#FFF3E0] text-[#FF9800]",
  Processing: "bg-[#E3F2FD] text-[#2196F3]",
  Shipped: "bg-[#F3E5F5] text-[#9C27B0]",
  Delivered: "bg-[#E8F5E9] text-[#2E7D32]",
  Cancelled: "bg-[#FFEBEE] text-[#D32F2F]",
};

/* ---------------- PAGE ---------------- */

export default function OrdersPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [orders, setOrders] = useState(ordersData);

  // Filter Logic
  const filteredOrders = useMemo(() => {
    return orders.filter(order => {
      const matchesSearch = order.customer.toLowerCase().includes(searchTerm.toLowerCase()) || order.id.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStatus = selectedStatus === "All" || order.status === selectedStatus;
      return matchesSearch && matchesStatus;
    });
  }, [searchTerm, selectedStatus, orders]);

  const updateStatus = (id, newStatus) => {
    setOrders(prev => prev.map(o => o.id === id ? { ...o, status: newStatus } : o));
  };

  return (
    <div className="min-h-screen bg-[#F9F8F3] font-sans text-[#1A1A1A] p-4 sm:p-8">
      
      
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Search & Filter Bar */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#888077]" size={20} />
            <input 
              type="text"
              placeholder="Search orders..."
              className="w-full bg-white border-none rounded-2xl py-4 pl-12 pr-4 shadow-sm focus:ring-2 focus:ring-[#F59E0B] outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <select 
            className="bg-white border-none rounded-2xl px-6 py-4 shadow-sm outline-none focus:ring-2 focus:ring-[#F59E0B] font-medium cursor-pointer"
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
          >
            <option value="All">All Status</option>
            <option value="Pending">Pending</option>
            <option value="Processing">Processing</option>
            <option value="Shipped">Shipped</option>
            <option value="Delivered">Delivered</option>
            <option value="Cancelled">Cancelled</option>
          </select>
        </div>

        {/* Orders Table */}
        <div className="bg-white rounded-[32px] shadow-sm border border-gray-100/50 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-[#FAF9F6] text-[#888077] font-semibold text-sm uppercase tracking-wider">
                  <th className="px-8 py-5">Order ID</th>
                  <th className="px-8 py-5">Customer</th>
                  <th className="px-8 py-5">Items</th>
                  <th className="px-8 py-5">Total</th>
                  <th className="px-8 py-5">Payment</th>
                  <th className="px-8 py-5">Status</th>
                  <th className="px-8 py-5 text-right">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {filteredOrders.map((order) => (
                  <tr 
                    key={order.id} 
                    className="hover:bg-[#FDFCF9] transition-colors cursor-pointer group"
                    onClick={() => setSelectedOrder(order)}
                  >
                    <td className="px-8 py-5 font-bold text-[#F59E0B]">{order.id}</td>
                    <td className="px-8 py-5">
                      <div className="font-bold">{order.customer}</div>
                      <div className="text-xs text-[#888077]">{order.city}</div>
                    </td>
                    <td className="px-8 py-5 text-[#888077] font-medium">{order.itemsCount} items</td>
                    <td className="px-8 py-5 font-bold text-lg">₹{order.total}</td>
                    <td className="px-8 py-5">
                      <span className="bg-green-50 text-green-600 px-3 py-1 rounded-full text-xs font-bold border border-green-100">
                        {order.payment}
                      </span>
                    </td>
                    <td className="px-8 py-5" onClick={(e) => e.stopPropagation()}>
                      <div className="relative inline-block text-left group/status">
                        <select 
                          className={`appearance-none pl-4 pr-10 py-2 rounded-xl text-xs font-bold cursor-pointer outline-none transition-all ${statusStyles[order.status]}`}
                          value={order.status}
                          onChange={(e) => updateStatus(order.id, e.target.value)}
                        >
                          {Object.keys(statusStyles).map(s => <option key={s} value={s}>{s}</option>)}
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none opacity-60" size={14} />
                      </div>
                    </td>
                    <td className="px-8 py-5 text-right text-[#888077] font-medium">{order.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Order Details Modal */}
      {selectedOrder && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#F9F8F3] w-full max-w-2xl rounded-[32px] shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
            <div className="p-6 bg-white flex justify-between items-center border-b border-gray-100">
              <h2 className="text-xl font-bold">Order {selectedOrder.id}</h2>
              <button onClick={() => setSelectedOrder(null)} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <X size={24} className="text-[#888077]" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto max-h-[80vh] space-y-8">
              {/* Customer Details */}
              <div className="bg-white p-6 rounded-3xl border border-gray-100/50">
                <h3 className="text-[#888077] font-bold text-sm uppercase tracking-widest mb-4">Customer Details</h3>
                <div className="grid grid-cols-2 gap-y-4 text-sm">
                  <div>
                    <div className="text-[#888077] mb-1">Name</div>
                    <div className="font-bold">{selectedOrder.customer}</div>
                  </div>
                  <div>
                    <div className="text-[#888077] mb-1">Email</div>
                    <div className="font-bold underline text-blue-600">{selectedOrder.email}</div>
                  </div>
                  <div>
                    <div className="text-[#888077] mb-1">Phone</div>
                    <div className="font-bold">{selectedOrder.phone}</div>
                  </div>
                  <div className="col-span-2">
                    <div className="text-[#888077] mb-1">Address</div>
                    <div className="font-bold leading-relaxed">{selectedOrder.address}</div>
                  </div>
                </div>
              </div>

              {/* Order Items */}
              <div className="bg-white p-6 rounded-3xl border border-gray-100/50">
                <h3 className="text-[#888077] font-bold text-sm uppercase tracking-widest mb-4">Order Items</h3>
                <div className="space-y-4">
                  {selectedOrder.items.map((item, i) => (
                    <div key={i} className="flex items-center justify-between group">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-[#F3F2EE] rounded-2xl overflow-hidden border border-gray-100">
                          <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <div className="font-bold">{item.name}</div>
                          <div className="text-sm text-[#888077]">Qty: {item.qty}</div>
                        </div>
                      </div>
                      <div className="font-bold text-lg">₹{item.price}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Summary */}
              <div className="bg-white p-6 rounded-3xl border border-gray-100/50 space-y-3">
                <div className="flex justify-between text-[#888077]">
                  <span className="font-medium">Subtotal</span>
                  <span className="font-bold text-[#1A1A1A]">₹{selectedOrder.total}</span>
                </div>
                <div className="flex justify-between text-green-600 font-bold">
                  <span>Discount</span>
                  <span>- ₹0</span>
                </div>
                <div className="flex justify-between text-[#888077]">
                  <span className="font-medium">Shipping</span>
                  <span className="font-bold text-green-600 uppercase">Free</span>
                </div>
                <div className="h-[1px] bg-gray-100 my-2" />
                <div className="flex justify-between text-xl font-black">
                  <span>Total</span>
                  <span className="text-[#F59E0B]">₹{selectedOrder.total}</span>
                </div>
              </div>
              
              <button 
                onClick={() => setSelectedOrder(null)}
                className="w-full bg-[#1A1A1A] text-white py-5 rounded-3xl font-bold text-lg hover:bg-black transition-all shadow-xl"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}