"use client";

import React, { useMemo, useState } from "react";
import { Search, Mail, Phone, MapPin } from "lucide-react";
import { orders } from "@/src/data/orders"; // Path check kar lena

const CustomersPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const {
    filteredCustomers,
    totalCustomersCount,
    repeatCustomersCount,
    avgCustomerValue,
  } = useMemo(() => {
    const map = new Map();

    orders.forEach((order) => {
      if (!map.has(order.customer)) {
        map.set(order.customer, {
          name: order.customer,
          email: order.email,
          phone: order.phone,
          city: order.city,
          orderCount: 0,
          totalSpent: 0,
          id: order.id,
          joinedDate: order.date || "15/1/2024",
        });
      }

      const stats = map.get(order.customer)!;
      stats.orderCount += 1;
      stats.totalSpent += order.total;
    });

    const customers = Array.from(map.values());
    const filtered = customers.filter((c) =>
      `${c.name} ${c.email} ${c.phone} ${c.city}`
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    );

    return {
      filteredCustomers: filtered,
      totalCustomersCount: customers.length,
      repeatCustomersCount: customers.filter(c => c.orderCount > 1).length,
      avgCustomerValue: customers.length > 0
          ? Math.round(customers.reduce((a, c) => a + c.totalSpent, 0) / customers.length)
          : 0,
    };
  }, [searchTerm]);

  return (
    // Spacing kam rakhi hai (px-2) aur background transparent
    <main className="flex-1 px-0 bg-transparent min-h-screen">

      {/* --- SEARCH BAR --- */}
      <div className="mb-6">
        <div className="relative w-full">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-[#8B5E3C]" />
          <input
            type="text"
            placeholder="Search customers..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-4 bg-white border border-[#F0F0F0] rounded-[20px] 
                       text-black font-semibold placeholder:text-[#A0AEC0] outline-none shadow-sm shadow-black/5"
          />
        </div>
      </div>

 {/* --- STATS CARDS (Rectangle with Original Rounding) --- */}
<div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
  {[
    { title: "Total Customers", value: totalCustomersCount },
    { title: "Repeat Customers", value: repeatCustomersCount },
    { title: "Avg. Customer Value", value: `₹${avgCustomerValue.toLocaleString("en-IN")}` },
  ].map((stat, i) => (
    <div 
      key={i} 
      // rounded-[28px] se wahi pehle wala soft round look aayega
      className="bg-white rounded-[28px] p-6 border border-[#F0F0F0] shadow-sm shadow-black/5 flex flex-col justify-center min-h-[115px]"
    >
      {/* Text color pure black as requested */}
      <p className="text-4xl font-bold text-black leading-tight mb-1">
        {stat.value}
      </p>
      {/* Label color soft brown */}
      <p className="text-lg text-[#8B7E6D] font-medium">
        {stat.title}
      </p>
    </div>
  ))}
</div>

      {/* --- MOBILE VIEW (CARDS) --- */}
      <div className="grid grid-cols-1 gap-3 md:hidden">
        {filteredCustomers.map((customer) => {
          const initials = customer.name.split(" ").map((n:any) => n[0]).join("").toUpperCase();
          const badge = customer.orderCount > 4 ? "bg-[#E6F4EA] text-[#1E8E3E]" : "bg-[#FFF8E1] text-[#F9AB00]";

          return (
            <div key={customer.id} className="bg-white rounded-2xl p-4 border border-[#F0F0F0] shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-11 w-11 rounded-full bg-[#FFF3E0] text-[#FFB74D] flex items-center justify-center font-bold text-sm">
                  {initials}
                </div>
                <div>
                  <p className="font-bold text-black">{customer.name}</p>
                  <p className="text-[10px] text-[#999] uppercase">{customer.id.replace("ORD", "CUST")}</p>
                </div>
              </div>
              <div className="space-y-1.5 text-xs text-[#666]">
                <div className="flex items-center gap-2"><Mail className="h-3.5 w-3.5 text-[#8B7E6D]" /> {customer.email}</div>
                <div className="flex items-center gap-2"><Phone className="h-3.5 w-3.5 text-[#8B7E6D]" /> {customer.phone}</div>
                <div className="flex items-center gap-2 text-black font-medium"><MapPin className="h-3.5 w-3.5 text-[#8B7E6D]" /> {customer.city}</div>
              </div>
              <div className="flex justify-between items-center mt-4 pt-3 border-t border-[#F5F5F5]">
                <span className={`px-3 py-1 rounded-full text-[10px] font-bold ${badge}`}>{customer.orderCount} orders</span>
                <p className="font-bold text-black">₹{customer.totalSpent}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* --- DESKTOP VIEW (TABLE) --- */}
      <div className="hidden md:block bg-white rounded-[24px] border border-[#F0F0F0] shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#F8F6F2] border-b border-[#F0F0F0]">
                {["Customer", "Contact", "Location", "Orders", "Total Spent", "Joined"].map(h => (
                  <th key={h} className="p-4 text-sm font-medium text-[#8B7E6D]">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-[#F5F5F5]">
              {filteredCustomers.map((customer) => {
                const initials = customer.name.split(" ").map((n:any) => n[0]).join("").toUpperCase();
                const badge = customer.orderCount > 4 ? "bg-[#E6F4EA] text-[#1E8E3E]" : "bg-[#FFF8E1] text-[#F9AB00]";

                return (
                  <tr key={customer.id} className="hover:bg-gray-50/50 transition-colors">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-[#FFF3E0] text-[#FFB74D] flex items-center justify-center text-sm font-bold">
                          {initials}
                        </div>
                        <div>
                          <p className="font-bold text-black text-[15px]">{customer.name}</p>
                          <p className="text-[11px] text-[#999999]">{customer.id.replace("ORD", "CUST")}</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 text-xs text-[#666]">
                      <div className="flex items-center gap-2"><Mail className="h-3 w-3 text-[#A0AEC0]" /> {customer.email}</div>
                      <div className="flex items-center gap-2 mt-1"><Phone className="h-3 w-3 text-[#A0AEC0]" /> {customer.phone}</div>
                    </td>
                    <td className="p-4 text-[14px] text-black font-medium">{customer.city}</td>
                    <td className="p-4">
                      <span className={`px-3 py-1 rounded-full text-[11px] font-bold ${badge}`}>{customer.orderCount} orders</span>
                    </td>
                    <td className="p-4 font-bold text-black text-[15px]">₹{customer.totalSpent}</td>
                    <td className="p-4 text-[13px] text-[#8B7E6D] font-medium">{customer.joinedDate}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};

const StatCard = ({ title, value }: any) => (
  <div className="bg-white rounded-[24px] p-6 border border-[#F0F0F0] shadow-sm">
    <p className="text-4xl font-bold text-black mb-1">{value}</p>
    <p className="text-lg text-[#8B7E6D] font-medium">{title}</p>
  </div>
);

export default CustomersPage;