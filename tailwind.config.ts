import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        burgundy: {
          DEFAULT: "#7D0A1E",
          50:  "#fdf5f6",
          100: "#fae6e9",
          200: "#f3bfc6",
          300: "#e8909c",
          400: "#d85f70",
          500: "#c43a50",
          600: "#9b2335",
          700: "#7e1c2b",
          800: "#651622",
          900: "#50121b",
        },
        blush: "#F2C4C9",
        cream: "#F2EAE0",
        ivory: "#FAF7F2",
        linen: "#F5EDE0",
        parchment: "#EDE0CC",
        charcoal: "#2C1A0E",
        walnut: "#3B2012",
        gold: {
          DEFAULT: "#B8935A",
          light: "#D4A96A",
          pale: "#EDD9B4",
        },
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "Georgia", "serif"],
        inter: ["var(--font-inter)", "system-ui", "sans-serif"],
        script: ["var(--font-script)", "cursive"],
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "fade-in": "fadeIn 0.6s ease-out forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      backgroundImage: {
        "gradient-romantic": "linear-gradient(135deg, #a80007 0%, #e8000d 50%, #ff4d52 100%)",
        "gradient-hero": "linear-gradient(180deg, rgba(44,44,44,0.5) 0%, rgba(44,44,44,0.7) 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
