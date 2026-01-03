// components/Footer.js
import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#231911] text-[#a89985] font-sans">
      {/* Top Features Bar */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 border-b border-[#35281e]">
        <div className="flex flex-col items-center text-center space-y-3">
          <div className="w-12 h-12 rounded-full bg-[#3d3128] flex items-center justify-center text-xl shadow-inner">
            🏆
          </div>
          <span className="text-sm font-semibold text-white tracking-wide uppercase">Premium Quality</span>
        </div>
        <div className="flex flex-col items-center text-center space-y-3">
          <div className="w-12 h-12 rounded-full bg-[#3d3128] flex items-center justify-center text-xl shadow-inner">
            ✅
          </div>
          <span className="text-sm font-semibold text-white tracking-wide uppercase">FSSAI Certified</span>
        </div>
        <div className="flex flex-col items-center text-center space-y-3">
          <div className="w-12 h-12 rounded-full bg-[#3d3128] flex items-center justify-center text-xl shadow-inner">
            🚚
          </div>
          <span className="text-sm font-semibold text-white tracking-wide uppercase">Fast Delivery</span>
        </div>
        <div className="flex flex-col items-center text-center space-y-3">
          <div className="w-12 h-12 rounded-full bg-[#3d3128] flex items-center justify-center text-sm font-bold text-white shadow-inner">
            IN
          </div>
          <span className="text-sm font-semibold text-white tracking-wide uppercase">Made in India</span>
        </div>
      </div>

      {/* Main Footer Section */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-12 gap-12">
        {/* Brand Section */}
        <div className="md:col-span-5 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#f4a922] flex items-center justify-center text-lg">
              🥜
            </div>
            <h2 className="text-[26px] font-bold tracking-tight">
              <span className="text-white">Crunch</span>
              <span className="text-[#f4a922]">Kart</span>
            </h2>
          </div>
          <p className="text-[#a89985] text-[15px] leading-relaxed max-w-sm">
            Bringing you the finest Indian snacks made with love and tradition. Quality ingredients, authentic recipes, unforgettable taste.
          </p>
          <div className="flex space-x-3 pt-2">
            {[Facebook, Instagram, Twitter, Youtube].map((Icon, index) => (
              <a 
                key={index} 
                href="#" 
                className="w-10 h-10 rounded-full bg-[#2d221a] border border-[#3d3128] flex items-center justify-center hover:bg-[#f4a922] hover:text-white transition-all duration-300"
              >
                <Icon size={18} strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </div>

        {/* Links Sections */}
        <div className="md:col-span-2">
          <h3 className="text-lg font-bold text-white mb-6">Shop</h3>
          <ul className="space-y-4 text-[15px]">
            <li><a href="#" className="hover:text-[#f4a922] transition-colors">All Products</a></li>
            <li><a href="#" className="hover:text-[#f4a922] transition-colors">Peanuts</a></li>
            <li><a href="#" className="hover:text-[#f4a922] transition-colors">Banana Chips</a></li>
            <li><a href="#" className="hover:text-[#f4a922] transition-colors">Combos</a></li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <h3 className="text-lg font-bold text-white mb-6">Company</h3>
          <ul className="space-y-4 text-[15px]">
            <li><a href="#" className="hover:text-[#f4a922] transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-[#f4a922] transition-colors">Our Story</a></li>
            <li><a href="#" className="hover:text-[#f4a922] transition-colors">Blog</a></li>
            <li><a href="#" className="hover:text-[#f4a922] transition-colors">Careers</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="md:col-span-3">
          <h3 className="text-lg font-bold text-white mb-6">Contact</h3>
          <ul className="space-y-5 text-[15px]">
            <li className="flex items-start gap-3">
              <MapPin size={20} className="text-[#f4a922] shrink-0 mt-0.5" />
              <span className="leading-snug">123 Snack Street, Mumbai, Maharashtra 400001</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={20} className="text-[#f4a922] shrink-0" />
              <span>+91 98765 43210</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={20} className="text-[#f4a922] shrink-0" />
              <span>hello@crunchkart.in</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="bg-[#1c140e] py-6 px-6">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-[13px] text-[#7a6e5f]">
    {/* Left side */}
    <p>© 2024 CrunchKart. All rights reserved.</p>

    {/* Right side */}
    <div className="flex space-x-8">
      <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
      <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
      <a href="#" className="hover:text-white transition-colors">Refund Policy</a>
    </div>
  </div>
</div>

    </footer>
  );
};

export default Footer;