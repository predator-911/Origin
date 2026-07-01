import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: "#07080B",
          raised: "#0F1116",
          surface: "#15171E",
          border: "#24272F",
        },
        ink: {
          DEFAULT: "#EAEBF0",
          dim: "#9497A6",
          faint: "#5C5F6E",
        },
        signal: {
          violet: "#6E5BFF",
          cyan: "#4CC9F0",
          amber: "#FFB454",
        },
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      backgroundImage: {
        "grid-faint":
          "linear-gradient(to right, rgba(234,235,240,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(234,235,240,0.04) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "48px 48px",
      },
      letterSpacing: {
        widest2: "0.28em",
      },
    },
  },
  plugins: [],
};
export default config;
