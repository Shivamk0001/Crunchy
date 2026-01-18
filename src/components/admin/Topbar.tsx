"use client";
import { usePathname } from "next/navigation";

export default function Topbar() {
  const pathname = usePathname();

  const getTitle = () => {
    if (pathname === "/dashboard") return "Dashboard";
    if (pathname === "/admin-products") return "Products";
    if (pathname === "/orders") return "Orders";
    if (pathname === "/users") return "Customers";
    if (pathname === "/marketing") return "Marketing";
    if (pathname === "/settings") return "Settings";
    return "Dashboard";
  };

  return (
    <header className="h-20 bg-[#F9F8F3] flex items-center justify-between px-10 sticky top-0 z-40">
      <h1 className="text-2xl font-bold text-[#1A1A1A] tracking-tight">
        {getTitle()}
      </h1>

      {/* PROFILE CIRCLE FROM VIDEO */}
      <div className="w-10 h-10 rounded-full bg-[#FEF3C7] flex items-center justify-center text-[#F59E0B] font-bold text-sm border-2 border-white shadow-sm">
        AD
      </div>
    </header>
  );
}