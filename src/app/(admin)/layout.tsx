"use client";

import { useState } from "react";
import Sidebar from "@/src/components/admin/Sidebar";
import Topbar from "@/src/components/admin/Topbar";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(true);

  return (
    <div className="flex min-h-screen bg-[#F9F8F3]">
      <Sidebar open={open} setOpen={setOpen} />
      
      {/* Width kam karne ke liye pl-72 ko pl-64 kiya gaya hai */}
      <div className={`flex-1 flex flex-col transition-all duration-300 ease-in-out 
        ${open ? "lg:pl-64" : "lg:pl-20"}`}
      >
        <Topbar />
        <main className="p-8 max-w-[1600px] mx-auto w-full">
          {children}
        </main>
      </div>
    </div>
  );
}