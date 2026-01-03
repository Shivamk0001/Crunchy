"use client";

import React from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "The masala peanuts are absolutely addictive! Perfect blend of spices and crunch. My entire family loves them.",
    author: "Priya Sharma",
    location: "Mumbai",
    initials: "PS",
    stars: 5,
  },
  {
    quote: "Best banana chips I have ever tasted. The coconut oil makes all the difference. Fast delivery too!",
    author: "Rajesh Kumar",
    location: "Delhi",
    initials: "RK",
    stars: 5,
  },
  {
    quote: "Ordered the festival gift box for Diwali. Everyone loved it! Premium quality and beautiful packaging.",
    author: "Anita Patel",
    location: "Bangalore",
    initials: "AP",
    stars: 5,
  },
  {
    quote: "Finally found authentic South Indian mixture online. Takes me back to my grandmother recipes.",
    author: "Vikram Singh",
    location: "Pune",
    initials: "VS",
    stars: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="bg-[#faf9f6] py-16 md:py-24">
      <div className="max-w-[1300px] mx-auto px-4 md:px-6">

        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <span className="text-[#f3a921] font-bold uppercase tracking-[0.2em] text-[11px]">
            Customer Love
          </span>
          <h2 className="text-[30px] md:text-[44px] font-extrabold text-[#231911] mt-1">
            What Our Customers Say
          </h2>
        </div>

        {/* ================= TESTIMONIALS LIST: STACKED ON MOBILE, GRID ON DESKTOP ================= */}
        <div className="flex flex-col gap-6 md:grid md:grid-cols-4 md:gap-5">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 md:p-8 rounded-[26px] md:rounded-[28px] shadow border border-gray-100 flex flex-col justify-between hover:-translate-y-1 transition duration-300"
            >
              <div>
                {/* Quote Icon */}
                <div className="text-[#faedd1] mb-4 md:mb-5">
                  <svg width="32" height="24" viewBox="0 0 40 30" fill="currentColor">
                    <path d="M0 17.5V30H12.5V17.5H5C5 10 10 7.5 12.5 5V0C5 0 0 5 0 17.5ZM25 17.5V30H37.5V17.5H30C30 10 35 7.5 37.5 5V0C30 0 25 5 25 17.5Z" />
                  </svg>
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4 md:mb-5">
                  {[...Array(item.stars)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      fill="#f3a921"
                      color="#f3a921"
                      strokeWidth={0}
                    />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-[#5a4d41] text-[15px] leading-[1.6] mb-8">
                  "{item.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-4 border-t pt-5">
                <div className="w-11 h-11 rounded-full bg-[#faedd1] flex items-center justify-center text-[#b4892c] font-bold text-[13px]">
                  {item.initials}
                </div>
                <div>
                  <p className="text-[#231911] font-bold text-[15px]">
                    {item.author}
                  </p>
                  <p className="text-[#a89985] text-[13px]">
                    {item.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;