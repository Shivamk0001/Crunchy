"use client";

import React from "react";
import {
  ShoppingBag,
  Users,
  DollarSign,
  XCircle,
  TrendingUp,
  TrendingDown 
} from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell,
  PieChart,
  Pie,
} from "recharts";

/* ---------------- DATA ---------------- */

const stats = [
  { label: "Total Sales", value: "₹27,367", trend: "+12.5%", icon: DollarSign, color: "#f59e0b", bg: "#fef3c7" },
  { label: "Total Orders", value: "25", trend: "+8.2%", icon: ShoppingBag, color: "#b43721", bg: "#fee2e2" },
  { label: "Customers", value: "5", trend: "+15.3%", icon: Users, color: "#15803d", bg: "#dcfce7" },
  { label: "Cancellations", value: "4", icon: XCircle, color: "#f87171", bg: "#fee2e2", isCancel: true },
];

const salesData = [
  { name: "Mon", sales: 0 },
  { name: "Tue", sales: 0.1 },
  { name: "Wed", sales: 0.1 },
  { name: "Thu", sales: 0.1 },
  { name: "Fri", sales: 0.1 },
  { name: "Sat", sales: 0.1 },
  { name: "Sun", sales: 0.1 },
];

const topProducts = [
  { name: "Family Snack Pack", sales: 18 },
  { name: "Spicy Potato Wafers", sales: 17 },
  { name: "Festival Gift Box", sales: 16 },
  { name: "Sweet Banana Chips", sales: 11 },
  { name: "Bombay Mix Special", sales: 11 },
];

const categoryData = [
  { name: "Peanuts", value: 3080, color: "#F59E0B" },
  { name: "Wafers", value: 2397, color: "#15803d" },
  { name: "Combos", value: 22466, color: "#b43721" },
  { name: "Chips", value: 2819, color: "#a16207" },
];

const recentOrders = [
  { id: "ORD-1000", customer: "Rahul Sharma", amount: "₹347", status: "Pending" },
  { id: "ORD-1001", customer: "Priya Patel", amount: "₹2129", status: "Processing" },
  { id: "ORD-1002", customer: "Amit Kumar", amount: "₹689", status: "Pending" },
  { id: "ORD-1003", customer: "Sneha Reddy", amount: "₹1022", status: "Processing" },
  { id: "ORD-1004", customer: "Vikram Singh", amount: "₹755", status: "Pending" },
];

/* ---------------- PAGE ---------------- */

export default function DashboardPage() {
  return (
    // Padding mobile ke liye p-4 di hai
    <div className="space-y-6 bg-[#F9F8F3] min-h-screen w-full overflow-x-hidden">

      {/* ================= STATS ================= */}
      {/* sm:grid-cols-2 lg:grid-cols-4 ensure karta hai ki grid auto-adjust ho */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-[28px] shadow-sm h-[170px] flex flex-col justify-between"
          >
            <div className="flex items-start justify-between">
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center"
                style={{ backgroundColor: stat.bg }}
              >
                <stat.icon size={22} style={{ color: stat.color }} />
              </div>

              {stat.trend && (
                <div className={`flex items-center text-[14px] font-bold ${stat.isCancel ? 'text-[#D32F2F]' : 'text-[#2E7D32]'}`}>
                  {stat.trend}
                  {stat.isCancel ? (
                    <TrendingDown className="ml-1 h-4 w-4" />
                  ) : (
                    <TrendingUp className="ml-1 h-4 w-4" />
                  )}
                </div>
              )}
            </div>

            <div className="mt-auto">
              <h3 className="text-[28px] font-bold text-[#111111] leading-none mb-1.5">
                {stat.value}
              </h3>
              <p className="text-[15px] text-[#888077] font-medium">
                {stat.label}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* ================= CHARTS SECTION ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8 items-start">

        {/* Sales Overview */}
        <div className="bg-white rounded-[24px] p-6 shadow-sm border border-gray-50 flex flex-col h-[320px]">
          <h3 className="text-[20px] font-bold text-[#1A1A1A] mb-4">Sales Overview</h3>
          <div className="flex-1 w-full overflow-hidden">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={salesData} margin={{ top: 10, right: 10, left: -25, bottom: 0 }}>
                <CartesianGrid strokeDasharray="4 4" vertical={true} horizontal={true} stroke="#E5E1DA" />
                <XAxis dataKey="name" axisLine={{ stroke: "#C2BCB2", strokeWidth: 1 }} tickLine={false} tick={{ fill: "#8B8479", fontSize: 12, fontWeight: 500 }} dy={8} />
                <YAxis domain={[0, 4]} ticks={[0, 1, 2, 3, 4]} axisLine={{ stroke: "#C2BCB2", strokeWidth: 1 }} tickLine={false} tick={{ fill: "#8B8479", fontSize: 12, fontWeight: 500 }} />
                <Tooltip />
                <Area type="monotone" dataKey="sales" stroke="#F59E0B" fill="transparent" strokeWidth={2.5} dot={false} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Top Products */}
        <div className="bg-white rounded-[20px] p-6 shadow-sm border border-gray-50 flex flex-col h-[320px]">
          <h3 className="text-[20px] font-bold text-[#1A1A1A] mb-4">Top Products</h3>
          <div className="flex-1 w-full overflow-hidden">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={topProducts} layout="vertical" margin={{ top: 5, right: 20, left: 5, bottom: 5 }}>
                <CartesianGrid strokeDasharray="4 4" horizontal={true} vertical={true} stroke="#E5E1DA" />
                <XAxis type="number" domain={[0, 20]} ticks={[0, 5, 10, 15, 20]} axisLine={{ stroke: "#C2BCB2", strokeWidth: 1 }} tickLine={false} tick={{ fill: "#8B8479", fontSize: 12, fontWeight: 500 }} />
                <YAxis type="category" dataKey="name" axisLine={{ stroke: "#C2BCB2", strokeWidth: 1 }} tickLine={false} width={90} tick={{ fill: "#7E7770", fontSize: 11, fontWeight: 600 }} interval={0} />
                <Tooltip 
                  cursor={false} 
                  contentStyle={{ borderRadius: '10px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', padding: '10px' }}
                  labelStyle={{ color: '#000000', marginBottom: '4px' }}
                  itemStyle={{ color: '#C65127', fontWeight: '600' }}
                />
                <Bar dataKey="sales" fill="#C65127" barSize={20} radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* ================= BOTTOM SECTION ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Category Performance */}
        <div className="bg-white rounded-3xl p-6 shadow-sm min-w-0">
          <h3 className="text-lg font-semibold text-[#1A1A1A] mb-4">Category Performance</h3>
          <div className="flex flex-col items-center gap-5">
            <div className="w-[180px] h-[180px] sm:w-[200px] sm:h-[200px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={categoryData} dataKey="value" innerRadius={60} outerRadius={85} paddingAngle={3}>
                    {categoryData.map((item, i) => <Cell key={i} fill={item.color} />)}
                  </Pie>
                  <Tooltip formatter={(value) => `₹${value}`} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="w-full space-y-3">
              {categoryData.map((item, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                    <span className="text-sm font-medium text-[#7A5E47]">{item.name}</span>
                  </div>
                  <span className="text-sm font-semibold text-[#1A1A1A]">₹{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Orders - Added overflow-x-auto for mobile scrolling */}
        <div className="bg-white rounded-3xl p-6 shadow-sm lg:col-span-2 min-w-0 overflow-hidden">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-[#1A1A1A]">Recent Orders</h3>
            <button className="text-sm font-medium text-[#FF9F1C] hover:underline">View All</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm min-w-[500px]">
              <thead>
                <tr className="border-b text-[#9B7C66] text-left">
                  <th className="pb-3 font-medium">Order ID</th>
                  <th className="pb-3 font-medium">Customer</th>
                  <th className="pb-3 font-medium">Amount</th>
                  <th className="pb-3 font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {recentOrders.map((o) => (
                  <tr key={o.id} className="h-[58px]">
                    <td className="font-semibold text-[#1A1A1A]">{o.id}</td>
                    <td className="text-[#7A5E47]">{o.customer}</td>
                    <td className="font-semibold text-[#1A1A1A]">{o.amount}</td>
                    <td>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${o.status === "Pending" ? "bg-[#FFF3E0] text-[#FF9800]" : "bg-[#FCEDEA] text-[#E65100]"}`}>
                        {o.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}