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
    <>
      {/* 1. FIXED HEADER - Pure White aur compact height (h-16) */}
      <header className="h-16 fixed top-0 right-0 w-[calc(100%-16rem)] bg-white flex items-center justify-between px-10 z-50 border-b border-[#F0F0F0] shadow-">
        <h1 className="text-xl font-bold text-[#1A1A1A] tracking-tight">
          {getTitle()}
        </h1>

        <div className="w-9 h-9 rounded-full bg-[#FEF3C7] flex items-center justify-center text-[#F59E0B] font-bold text-xs border border-white shadow-sm">
          AD
        </div>
      </header>

      {/* 2. GHOST DIV - Height matching header (h-16) taaki content niche hi rahe */}
      <div className="h-16 w-full" />
    </>
  );
}