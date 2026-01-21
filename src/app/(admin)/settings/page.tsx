"use client";

import React, { useState } from "react";
import {
  Store,
  Globe,
  Bell,
  Save,
} from "lucide-react";

export default function SettingsPage() {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [productReviews, setProductReviews] = useState(true);
  const [maintenanceMode, setMaintenanceMode] = useState(false);

  return (
    <div className="min-h-screen bg-[#F9F8F3] font-sans text-[#1A1A1A]">
      
      {/* MOBILE SAFE PAGE PADDING */}
      <div className="max-w-4xl mx-auto space-y-6 px-4 sm:px-6 lg:px-0 pb-24">

        {/* ================= STORE INFO ================= */}
        <div className="bg-white rounded-[32px] p-6 sm:p-10 shadow-sm border border-gray-100/50">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-[#FEF3C7] rounded-xl flex items-center justify-center">
              <Store size={22} className="text-[#F59E0B]" />
            </div>
            <h2 className="text-xl font-bold">Store Information</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input label="Store Name" defaultValue="CrunchKart" />
            <Input label="Email" type="email" defaultValue="hello@crunchkart.in" />
            <Input label="Phone" defaultValue="+91 98765 43210" />
            <Input label="Free Shipping Above" type="number" defaultValue="499" />

            <div className="space-y-2 md:col-span-2">
              <label className="text-sm font-semibold ml-1">Address</label>
              <textarea
                rows="2"
                defaultValue="123 Snack Street, Mumbai, Maharashtra 400001"
                className="w-full bg-[#F3F2EE] rounded-2xl p-4 focus:ring-2 focus:ring-[#F59E0B] outline-none resize-none"
              />
            </div>
          </div>
        </div>

        {/* ================= SEO ================= */}
        <div className="bg-white rounded-[32px] p-6 sm:p-10 shadow-sm border border-gray-100/50">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-[#FEE2E2] rounded-xl flex items-center justify-center">
              <Globe size={22} className="text-[#B43721]" />
            </div>
            <h2 className="text-xl font-bold">SEO Settings</h2>
          </div>

          <div className="space-y-6">
            <SeoInput
              label="Meta Title"
              count="34/60 characters"
              defaultValue="CrunchKart - Premium Indian Snacks"
              ring="focus:ring-[#B43721]"
            />

            <SeoTextarea
              label="Meta Description"
              count="99/160 characters"
              defaultValue="Shop authentic Indian snacks online. Premium quality masala peanuts, Kerala banana chips, and more."
              ring="focus:ring-[#B43721]"
            />
          </div>
        </div>

        {/* ================= FEATURES ================= */}
        <div className="bg-white rounded-[32px] p-6 sm:p-10 shadow-sm border border-gray-100/50">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-[#DCFCE7] rounded-xl flex items-center justify-center">
              <Bell size={22} className="text-[#15803D]" />
            </div>
            <h2 className="text-xl font-bold">Features</h2>
          </div>

          <div className="space-y-8">
            <Toggle
              title="Email Notifications"
              desc="Send order confirmations and updates"
              enabled={emailNotifications}
              onClick={() => setEmailNotifications(!emailNotifications)}
              activeColor="bg-[#15803D]"
            />

            <Toggle
              title="Product Reviews"
              desc="Allow customers to leave reviews"
              enabled={productReviews}
              onClick={() => setProductReviews(!productReviews)}
              activeColor="bg-[#15803D]"
            />

            <Toggle
              title="Maintenance Mode"
              desc="Temporarily disable the storefront"
              enabled={maintenanceMode}
              onClick={() => setMaintenanceMode(!maintenanceMode)}
              activeColor="bg-[#D32F2F]"
            />
          </div>
        </div>

        {/* ================= SAVE BUTTON ================= */}
        <div className="flex justify-center sm:justify-end pt-4">
          <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#F59E0B] text-white px-8 py-4 rounded-2xl font-bold shadow-lg shadow-orange-200 hover:bg-[#D97706] transition-all">
            <Save size={20} />
            Save Settings
          </button>
        </div>

      </div>
    </div>
  );
}

/* ================= REUSABLE COMPONENTS ================= */

function Input({ label, type = "text", defaultValue }) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-semibold ml-1">{label}</label>
      <input
        type={type}
        defaultValue={defaultValue}
        className="w-full bg-[#F3F2EE] rounded-2xl p-4 focus:ring-2 focus:ring-[#F59E0B] outline-none"
      />
    </div>
  );
}

function SeoInput({ label, count, defaultValue, ring }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between px-1 text-sm font-semibold">
        <span>{label}</span>
        <span className="text-[12px] text-[#888077]">{count}</span>
      </div>
      <input
        defaultValue={defaultValue}
        className={`w-full bg-[#F3F2EE] rounded-2xl p-4 outline-none focus:ring-2 ${ring}`}
      />
    </div>
  );
}

function SeoTextarea({ label, count, defaultValue, ring }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between px-1 text-sm font-semibold">
        <span>{label}</span>
        <span className="text-[12px] text-[#888077]">{count}</span>
      </div>
      <textarea
        rows="3"
        defaultValue={defaultValue}
        className={`w-full bg-[#F3F2EE] rounded-2xl p-4 outline-none resize-none focus:ring-2 ${ring}`}
      />
    </div>
  );
}

function Toggle({ title, desc, enabled, onClick, activeColor }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <div>
        <h4 className="font-bold">{title}</h4>
        <p className="text-sm text-[#888077]">{desc}</p>
      </div>
      <button
        onClick={onClick}
        className={`w-14 h-7 rounded-full relative transition-colors ${
          enabled ? activeColor : "bg-[#E5E1DA]"
        }`}
      >
        <span
          className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-all ${
            enabled ? "left-8" : "left-1"
          }`}
        />
      </button>
    </div>
  );
}
