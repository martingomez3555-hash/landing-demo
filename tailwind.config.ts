import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      colors: {
        surface: {
          DEFAULT: "#0B1120",
          alt: "#111827",
        },
        ink: {
          DEFAULT: "#F8FAFC",
          muted: "#CBD5E1",
        },
        cta: {
          DEFAULT: "#3B82F6",
          hover: "#2563EB",
        },
        accent: {
          gold: "#D4A857",
          sky: "#38BDF8",
        },
      },
      boxShadow: {
        glow: "0 0 80px rgba(56, 189, 248, 0.25)",
        "glow-sm": "0 0 40px rgba(56, 189, 248, 0.15)",
      },
    },
  },
  plugins: [],
};

export default config;
