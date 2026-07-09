import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0a0a0a",
        surface: "#131313",
        surface2: "#1c1c1c",
        cream: "#f5f0e6",
        muted: "#9a9a92",
        accent: "#ff7a29",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        sans: ["var(--font-sans)"],
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to bottom, rgba(10,10,10,0) 0%, #0a0a0a 90%), linear-gradient(rgba(245,240,230,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(245,240,230,0.06) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "100% 100%, 40px 40px, 40px 40px",
      },
    },
  },
  plugins: [],
};

export default config;
