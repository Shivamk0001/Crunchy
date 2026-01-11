// components/Footer.js
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#2a1b12] text-[#b7a089] font-sans">
      {/* Top Features Bar - Padding reduced from py-12 to py-8 */}
      <div className="max-w-7xl mx-auto px-8 py-8 grid grid-cols-2 md:grid-cols-4 gap-8 border-b border-[#3a271b]">
        {[
          { icon: "🏆", label: "Premium Quality" },
          { icon: "✅", label: "FSSAI Certified" },
          { icon: "🚚", label: "Fast Delivery" },
          { icon: "IN", label: "Made in India" },
        ].map((item, i) => (
          <div key={i} className="flex flex-col items-center text-center gap-3">
            <div className="w-12 h-12 rounded-full bg-[#3b281c] flex items-center justify-center shadow-inner text-base text-white font-semibold">
              {item.icon}
            </div>
            <span className="text-[13px] font-semibold text-white tracking-wide">
              {item.label}
            </span>
          </div>
        ))}
      </div>

      {/* Main Footer - Vertical padding reduced from py-20 to py-12 */}
      <div className="max-w-7xl mx-auto px-8 py-12 grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Brand */}
        <div className="md:col-span-5 space-y-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#f4a922] flex items-center justify-center text-lg">
              🥜
            </div>
            <h2 className="text-[24px] font-extrabold tracking-tight">
              <span className="text-white">Crunch</span>
              <span className="text-[#f4a922]">Kart</span>
            </h2>
          </div>

          <p className="text-[14px] leading-relaxed text-[#b7a089] max-w-sm">
           Bringing you the finest Indian snacks made with love and tradition. Quality ingredients, authentic recipes, <br /> unforgettable taste.


          </p>

          <div className="flex gap-3 pt-1">
            {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 rounded-full bg-[#3b281c] border border-[#4a3324] flex items-center justify-center text-[#cbb79d] hover:bg-[#f4a922] hover:text-white transition-all duration-300"
              >
                <Icon size={16} strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </div>

        {/* Shop */}
        <div className="md:col-span-2">
          <h3 className="text-[16px] font-bold text-white mb-4">Shop</h3>
          <ul className="space-y-3 text-[14px]">
            {["All Products", "Peanuts", "Banana Chips", "Combos"].map(
              (item, i) => (
                <li key={i}>
                  <a href="#" className="hover:text-[#f4a922] transition-colors">
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Company */}
        <div className="md:col-span-2">
          <h3 className="text-[16px] font-bold text-white mb-4">Company</h3>
          <ul className="space-y-3 text-[14px]">
            {["About Us", "Our Story", "Blog", "Careers"].map((item, i) => (
              <li key={i}>
                <a href="#" className="hover:text-[#f4a922] transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="md:col-span-3">
          <h3 className="text-[16px] font-bold text-white mb-4">Contact</h3>
          <ul className="space-y-4 text-[14px]">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-[#6f4b33] mt-0.5" />
              <span>123 Snack Street, Mumbai, 400001</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-[#6f4b33]" />
              <span>+91 98765 43210</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-[#6f4b33]" />
              <span>hello@crunchkart.in</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar - Reduced padding */}
      <div className="bg-[#21150f] py-4 px-8 border-t border-[#3a271b]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-[12px] text-[#8e7a66]">
          <p>© 2024 CrunchKart. All rights reserved.</p>

          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Refund Policy"].map((policy) => (
              <a key={policy} href="#" className="hover:text-white transition-colors">
                {policy}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;