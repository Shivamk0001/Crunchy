"use client";

import React from "react";

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
    // Explicitly set bg-white so it doesn't turn black
    <section className="py-16 bg-[#f7f6f2]"> 
      <div className="container mx-auto px-4">
        
        {/* Header - Matches image spacing */}
        <div className="text-center mb-12">
          <p className="text-[#f3a921] font-bold uppercase tracking-[0.2em] text-[11px] mb-2">
            CUSTOMER LOVE
          </p>
          <h2 className="text-[32px] md:text-[44px] font-extrabold text-[#231911]">
            What Our Customers Say
          </h2>
        </div>

        {/* Grid - Exact classes from your DevTools image */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((item, index) => (
            <div
              key={index}
              // Exact classes: bg-card (white), rounded-2xl, shadow-soft, hover-lift, animate-slide-up
             className="bg-white rounded-2xl p-6 border border-gray-100 flex flex-col justify-between
shadow-[0_8px_30px_rgba(0,0,0,0.04)]
hover:shadow-[0_16px_40px_rgba(0,0,0,0.10)]
transition-shadow duration-300"
              style={{ animationDelay: "0s" }}
            >
              <div>
                {/* SVG Quote Icon - Matching your DevTools path exactly */}
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" height="24" viewBox="0 0 24 24" 
                  fill="none" stroke="currentColor" strokeWidth="2" 
                  strokeLinecap="round" strokeLinejoin="round" 
                  className="lucide lucide-quote w-8 h-8 text-[#f3a921]/20 mb-4"
                >
                  <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
                  <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
                </svg>

                {/* Stars - Exact flex gap-1 mb-4 */}
                <div className="flex gap-1 mb-4">
                  {[...Array(item.stars)].map((_, i) => (
                    <svg 
                      key={i}
                      xmlns="http://www.w3.org/2000/svg" 
                      width="24" height="24" viewBox="0 0 24 24" 
                      fill="none" stroke="currentColor" strokeWidth="2" 
                      strokeLinecap="round" strokeLinejoin="round" 
                      className="lucide lucide-star w-4 h-4 fill-[#f3a921] text-[#f3a921]"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-[#5a4d41] text-[15px] leading-[1.6] mb-8 font-medium">
                  "{item.quote}"
                </p>
              </div>

              {/* Author Section */}
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-[#faedd1] flex items-center justify-center text-[#b4892c] font-bold text-[13px]">
                  {item.initials}
                </div>
                <div>
                  <p className="text-[#231911] font-bold text-[15px] leading-tight">
                    {item.author}
                  </p>
                  <p className="text-[#a89985] text-[13px] mt-0.5">
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