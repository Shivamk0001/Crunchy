import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 10s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'offer-blink': 'offerBlink 1s infinite',
        // ✅ Naya Ribbon Animation
        'float-ribbon': 'floatRibbon 3s ease-in-out infinite',
      },

      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        // ✅ Ribbon ko upar-neeche aur tedha (tilt) rakhne ke liye
        floatRibbon: {
          '0%, 100%': { transform: 'translateY(0) rotate(-5deg)' },
          '50%': { transform: 'translateY(-8px) rotate(-5deg)' },
        },
        offerBlink: {
          '0%': { backgroundColor: '#ffffff' },
          '50%': { backgroundColor: '#fdf2d8' },
          '100%': { backgroundColor: '#ffffff' },
        },
      },

      colors: {
        brand: {
          orange: "#f4a922",
          dark: "#231911",
          cream: "#fdf2d8",
        },
      },
    },
  },
  plugins: [],
};

export default config;