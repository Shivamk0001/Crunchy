"use client";

import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

export default function Topbar({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (val: boolean) => void;
}) {
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
      {/* ================= TOPBAR ================= */}
      <header
        className={`
          h-16 bg-white border-b border-[#F0F0F0]
          flex items-center justify-between px-4 lg:px-10
          transition-all duration-300
          
          /* MOBILE */
          fixed top-0 left-0 right-0 z-40
          
          /* DESKTOP */
          lg:sticky lg:top-0 lg:z-10
          ${open ? "lg:ml-64" : "lg:ml"}
        `}
      >
        <div className="flex items-center gap-3">
          {/* MOBILE HAMBURGER */}
          <button
            onClick={() => setOpen(true)}
            className="lg:hidden p-2 rounded-lg bg-orange-50 text-[#E5A35C]"
          >
            <Menu size={22} />
          </button>

          <h1 className="text-xl font-bold text-[#1A1A1A] tracking-tight">
            {getTitle()}
          </h1>
        </div>

        {/* AVATAR */}
        <div className="w-9 h-9 rounded-full bg-[#FEF3C7] flex items-center justify-center text-[#F59E0B] font-bold text-xs border border-white shadow-sm">
          AD
        </div>
      </header>

      {/* MOBILE SPACE ONLY */}
      <div className="h-16 lg:hidden" />
    </>
  );
}
