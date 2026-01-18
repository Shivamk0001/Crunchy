// tailwind.config.ts
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
        'float-ribbon': 'floatRibbon 3s ease-in-out infinite',
        // ✅ Ye line add karein
        'shimmer': 'shimmer 2s infinite linear',
      },

      keyframes: {
        // ✅ Ye naya keyframe add karein
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        floatRibbon: {
          '0%, 100%': { transform: 'translateY(0) rotate(-5deg)' },
          '50%': { transform: 'translateY(-8px) rotate(-5deg)' },
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