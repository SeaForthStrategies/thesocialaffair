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
          DEFAULT: "#C41E3A",
          50:  "#fef2f4",
          100: "#fde0e5",
          200: "#f9b8c3",
          300: "#f47f96",
          400: "#ec4d6a",
          500: "#e02448",
          600: "#c41e3a",
          700: "#a3182f",
          800: "#861529",
          900: "#6e1322",
        },
        blush: {
          DEFAULT: "#F2C4C9",
          50:  "#fef2f4",
          100: "#fde0e5",
          200: "#f9b8c3",
          300: "#f47f96",
          400: "#ec4d6a",
          500: "#e02448",
        },
        cream: "#F7F3EE",
        ivory: "#FDFCF8",
        charcoal: "#1E1E1E",
        gold: "#C9A962",
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
