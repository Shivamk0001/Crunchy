"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  ShoppingBag,
  Users,
  Settings,
  ChevronLeft,
  Package,
  Tag,
  Store,
} from "lucide-react";

const menu = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Products", href: "/admin-products", icon: Package },
  { name: "Orders", href: "/orders", icon: ShoppingBag },
  { name: "Customers", href: "/users", icon: Users },
  { name: "Marketing", href: "/marketing", icon: Tag },
  { name: "Settings", href: "/settings", icon: Settings },
];

export default function Sidebar({ open, setOpen }: { open: boolean; setOpen: (val: boolean) => void }) {
  const pathname = usePathname();

  return (
    <>
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      <aside
        className={`fixed top-0 left-0 z-50 h-screen bg-white border-r border-gray-100 transition-all duration-300 ease-in-out flex flex-col
        ${open ? "w-64" : "w-20"}`}
      >
        <div className="flex flex-col h-full overflow-hidden">
          {/* LOGO SECTION - Padding halki kam ki hai (p-6) */}
          <div className="p-6 flex items-center justify-between shrink-0">
            <div className={`flex items-center gap-3 transition-all duration-300 ${open ? "opacity-100" : "opacity-0 hidden"}`}>
              <div className="w-9 h-9 rounded-xl bg-[#E5A35C] flex items-center justify-center text-white shadow-lg shadow-orange-100/50">
                <LayoutDashboard size={18} />
              </div>
              <span className="font-bold text-lg tracking-tight text-[#1A1A1A]">Admin</span>
            </div>
            <button 
              onClick={() => setOpen(!open)}
              className={`p-1.5 rounded-lg bg-gray-50 text-gray-400 hover:text-[#E5A35C] transition-all ${!open && "mx-auto"}`}
            >
              <ChevronLeft size={18} className={!open ? "rotate-180" : ""} />
            </button>
          </div>

          {/* MENU ITEMS */}
          <nav className="flex-1 px-3 space-y-1 no-scrollbar overflow-y-auto mt-2">
            {menu.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center transition-all duration-200 group
                  ${open ? "px-4 py-3 gap-3 rounded-2xl" : "justify-center p-3 rounded-xl"}
                  ${isActive 
                    ? "bg-[#FFB347] text-white shadow-md shadow-orange-100/50" 
                    : "text-[#9B7C66] hover:bg-orange-50/50 hover:text-[#E5A35C]"}`}
                >
                  <item.icon size={20} className="shrink-0" />
                  {open && (
                    <span className="font-semibold text-[15px] whitespace-nowrap">
                      {item.name}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* FOOTER - Back to store icon fixed here */}
          <div className="p-4 border-t border-gray-50 shrink-0 mb-2">
            <Link
              href="/"
              className={`flex items-center transition-all duration-200 group text-[#9B7C66] hover:bg-orange-50/50 hover:text-[#E5A35C]
              ${open ? "px-4 py-3 gap-3 rounded-2xl" : "justify-center p-3 rounded-xl"}`}
            >
              <Store size={20} className="shrink-0" />
              {open && (
                <span className="font-semibold text-[15px] whitespace-nowrap">
                  Back to Store
                </span>
              )}
            </Link>
          </div>
        </div>
      </aside>

      {/* Mobile Overlay */}
      {open && (
        <div 
          className="fixed inset-0 bg-black/5 z-40 lg:hidden" 
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
}