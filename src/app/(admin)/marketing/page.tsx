import React from "react";
import { Plus, Trash2, Megaphone, Ticket, Image as ImageIcon } from "lucide-react";

const MarketingPage = () => {
  return (
    <>
      {/* ================= TOP SECTION ================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">

        {/* Promo Banners */}
        <div className="bg-[#FFFFFF] p-5 rounded-[22px] shadow-sm border border-[#EFE7DE]">
          <div className="flex justify-between items-center mb-5">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-[#FFF3E0] rounded-lg">
                <ImageIcon className="text-[#F9A11B]" size={22} />
              </div>
              <h2 className="text-[22px] font-bold text-[#3E2F22]">
                Promo Banners
              </h2>
            </div>
            <button className="bg-[#F9A11B] hover:bg-[#E89012] text-white px-5 py-2 rounded-xl flex items-center gap-2 font-semibold">
              <Plus size={18} /> Add
            </button>
          </div>

          <div className="space-y-3">
            <BannerItem
              title="Free Delivery on ₹499+"
              desc="Shop now and save on shipping!"
            />
            <BannerItem
              title="Festive Special - 25% Off"
              desc="On all combo packs"
            />
          </div>
        </div>

        {/* Campaign Stats */}
        <div className="bg-[#FFFFFF] p-5 rounded-[22px] shadow-sm border border-[#EFE7DE]">
          <div className="flex items-center gap-3 mb-5">
            <div className="p-2 bg-[#FDECEC] rounded-lg">
              <Megaphone className="text-[#E65C4F]" size={22} />
            </div>
            <h2 className="text-[22px] font-bold text-[#3E2F22]">
              Campaign Stats
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <StatBox value="669" label="Coupons Used" />
            <StatBox value="2" label="Active Coupons" />
            <StatBox value="2" label="Active Banners" />
            <StatBox value="+15%" label="Conversion Rate" highlight />
          </div>
        </div>
      </div>

      {/* ================= COUPONS ================= */}
      <div className="bg-[#FFFFFF] p-6 rounded-[26px] shadow-sm border border-[#EFE7DE]">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-[#E6F4EA] rounded-lg">
            <Ticket className="text-[#22C55E]" size={22} />
          </div>
          <h2 className="text-[22px] font-bold text-[#3E2F22]">
            Coupon Codes
          </h2>
        </div>

        {/* Form */}
        <div className="flex flex-wrap gap-3 mb-8 bg-[#F1ECE6] p-4 rounded-2xl border border-[#EFE7DE]">
          <input
            className="flex-1 min-w-[120px] p-3 rounded-xl border border-[#EFE7DE] bg-white text-[#3E2F22] placeholder-[#A58F7B]"
            placeholder="CODE"
          />
          <input
            className="w-32 p-3 rounded-xl border border-[#EFE7DE] bg-white placeholder-[#A58F7B]"
            placeholder="Discount"
          />
          <select className="w-40 p-3 rounded-xl border border-[#EFE7DE] bg-white text-[#3E2F22]">
            <option>Percentage</option>
            <option>Fixed Amount</option>
          </select>
          <input
            className="w-32 p-3 rounded-xl border border-[#EFE7DE] bg-white placeholder-[#A58F7B]"
            placeholder="Min Order"
          />
          <input
            className="w-24 p-3 rounded-xl border border-[#EFE7DE] bg-white text-center"
            defaultValue="100"
          />
          <button className="bg-[#F9A11B] hover:bg-[#E89012] text-white px-7 py-3 rounded-xl flex items-center gap-2 font-bold">
            <Plus size={20} /> Add
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-sm text-[#8B7A6A] border-b border-[#EFE7DE]">
                <th className="pb-3 text-left">Code</th>
                <th className="pb-3 text-left">Discount</th>
                <th className="pb-3 text-left">Min Order</th>
                <th className="pb-3 text-left">Usage</th>
                <th className="pb-3 text-left">Status</th>
                <th className="pb-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              <CouponRow code="SNACK20" discount="20%" minOrder="₹299" usage="342/1000" status="Active" />
              <CouponRow code="FIRST50" discount="₹50" minOrder="₹199" usage="127/500" status="Active" />
              <CouponRow code="FESTIVE30" discount="30%" minOrder="₹499" usage="200/200" status="Inactive" />
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

/* ================= COMPONENTS ================= */

const BannerItem = ({ title, desc }: any) => (
  <div className="flex justify-between items-center p-4 bg-[#F1ECE6] rounded-xl border border-[#EFE7DE]">
    <div>
      <h3 className="font-bold text-[#3E2F22]">{title}</h3>
      <p className="text-sm text-[#8B7A6A]">{desc}</p>
    </div>
    <span className="bg-[#E6F4EA] text-[#22C55E] px-3 py-1 rounded-full text-xs font-bold">
      Active
    </span>
  </div>
);

const StatBox = ({ value, label, highlight }: any) => (
  <div className="bg-[#F1ECE6] p-5 rounded-2xl text-center">
    <p className={`text-[34px] font-bold ${highlight ? "text-[#22C55E]" : "text-[#3E2F22]"}`}>
      {value}
    </p>
    <p className="text-xs uppercase mt-1 text-[#8B7A6A] font-medium">
      {label}
    </p>
  </div>
);

const CouponRow = ({ code, discount, minOrder, usage, status }: any) => (
  <tr className="border-b border-[#EFE7DE] last:border-0">
    <td className="py-4 font-bold text-[#3E2F22]">{code}</td>
    <td className="py-4 text-[#3E2F22]">{discount}</td>
    <td className="py-4 text-[#3E2F22]">{minOrder}</td>
    <td className="py-4 text-[#8B7A6A]">{usage}</td>
    <td className="py-4">
      <span
        className={`px-3 py-1 rounded-full text-xs font-bold ${
          status === "Active"
            ? "bg-[#E6F4EA] text-[#22C55E]"
            : "bg-[#F1ECE6] text-[#9B8C80]"
        }`}
      >
        {status}
      </span>
    </td>
    <td className="py-4 text-center">
      <button className="text-[#FF4D4F] hover:bg-[#FFF1F0] p-2 rounded-lg">
        <Trash2 size={18} />
      </button>
    </td>
  </tr>
);

export default MarketingPage;
