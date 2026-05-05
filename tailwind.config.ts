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
        nova: {
          deep:    "#071a10",
          card:    "#0d2818",
          card2:   "#0f3020",
          surface: "#112b1a",
          dim:     "#0a4d27",
          border:  "#1a3d26",
          borderB: "#234d33",
          neon:    "#39ff8b",
          mid:     "#1db954",
          muted:   "#16a34a",
          textPrimary:   "#e8f5ec",
          textSecondary: "#7ab893",
          textMuted:     "#4a7a5e",
        },
      },
      fontFamily: {
        syne: ["Syne", "sans-serif"],
        dm:   ["DM Sans", "sans-serif"],
      },
      keyframes: {
        pulseDot: {
          "0%, 100%": { opacity: "1",   transform: "scale(1)"   },
          "50%":      { opacity: "0.5", transform: "scale(0.8)" },
        },
      },
      animation: {
        pulseDot: "pulseDot 2s ease infinite",
      },
    },
  },
  plugins: [],
};

export default config;
