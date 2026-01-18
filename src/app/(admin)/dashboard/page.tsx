"use client";

import React from "react";
import {
  ShoppingBag,
  Users,
  DollarSign,
  XCircle,
  TrendingUp,
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
    <div className="p-6 space-y-8 bg-[#F9F8F3] min-h-screen w-full overflow-x-hidden">

      {/* ================= STATS ================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="bg-white p-7 rounded-2xl shadow-sm h-[150px] flex flex-col justify-between"
          >
            <div className="flex items-center justify-between">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: stat.bg }}
              >
                <stat.icon size={22} style={{ color: stat.color }} />
              </div>

              {stat.trend && (
                <div className="flex items-center text-xs font-semibold text-green-700 bg-green-100 px-2 py-1 rounded-lg">
                  {stat.trend}
                  <TrendingUp className="ml-1 h-3 w-3" />
                </div>
              )}

              {stat.isCancel && (
                <XCircle className="h-5 w-5 text-red-400" />
              )}
            </div>

            <div>
              <h3 className="text-3xl font-bold text-gray-900">{stat.value}</h3>
              <p className="text-xs mt-1 uppercase tracking-wider text-gray-400 font-semibold">
                {stat.label}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* ================= CHARTS SECTION ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
        
        {/* Sales Overview Card */}
        <div className="bg-white p-8 rounded-[32px] shadow-sm border border-gray-100 min-w-0">
          <h3 className="text-2xl font-bold text-black mb-8">Sales Overview</h3>
          <div className="h-[320px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={salesData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={true} stroke="#f0f0f0" />
                <XAxis 
                  dataKey="name" 
                  axisLine={{ stroke: '#E5E7EB' }} 
                  tickLine={false} 
                  tick={{ fill: '#9CA3AF', fontSize: 13 }}
                  dy={10}
                />
                <YAxis 
                  domain={[0, 4]}
                  axisLine={{ stroke: '#E5E7EB' }} 
                  tickLine={false} 
                  tick={{ fill: '#9CA3AF', fontSize: 13 }}
                />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="sales"
                  stroke="#f59e0b"
                  fill="transparent"
                  strokeWidth={4}
                  dot={{ r: 5, fill: '#f59e0b', strokeWidth: 2, stroke: '#fff' }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

  {/* Top Products Card - Square Corners with X-Axis Numbers */}
<div className="bg-white p-8 shadow-sm border border-gray-100 min-w-0 rounded-none"> 
  {/* ^ 'rounded-none' se square corners aayenge */}
  
  <h3 className="text-2xl font-bold text-black mb-8 text-left">Top Products</h3>
  <div className="h-[320px] w-full">
    <ResponsiveContainer width="100%" height="100%">
      <BarChart 
        data={topProducts} 
        layout="vertical" 
        margin={{ top: 5, right: 30, left: 20, bottom: 20 }}
      >
        <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#f0f0f0" />
        
        {/* X-Axis ko dikhane ke liye 'hide' hata diya hai */}
        <XAxis 
          type="number" 
          axisLine={{ stroke: '#E5E7EB' }}
          tickLine={false}
          tick={{ fill: '#9CA3AF', fontSize: 12 }}
        />
        
        <YAxis 
          type="category" 
          dataKey="name" 
          axisLine={{ stroke: '#E5E7EB' }} 
          tickLine={false}
          width={150}
          tick={{ 
            fill: '#4B5563', 
            fontSize: 12, 
            fontWeight: 500,
            textAnchor: 'end' 
          }}
        />
        <Tooltip cursor={{ fill: '#f9fafb' }} />
        <Bar 
          dataKey="sales" 
          fill="#bc4a26" 
          barSize={32} 
          radius={0} 
        />
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
            <div className="w-[200px] h-[200px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={categoryData} dataKey="value" innerRadius={70} outerRadius={95} paddingAngle={3}>
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

        {/* Recent Orders */}
        <div className="bg-white rounded-3xl p-6 shadow-sm lg:col-span-2 min-w-0 overflow-x-auto">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-[#1A1A1A]">Recent Orders</h3>
            <button className="text-sm font-medium text-[#FF9F1C] hover:underline">View All</button>
          </div>
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
  );
}