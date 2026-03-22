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
        dark: "#0a0a0a",
        surface: "#141414",
        "surface-elevated": "#1a1a1a",
        cream: "#f5f0eb",
        silver: "#8a8a8a",
        muted: "#5a5a5a",
        stone: "#d4d0c8",
        line: "#2a2a2a",
      },
      fontFamily: {
        heading: ["var(--font-bebas)", "sans-serif"],
        serif: ["var(--font-cormorant)", "serif"],
        body: ["var(--font-outfit)", "sans-serif"],
      },
      fontSize: {
        display: [
          "clamp(4rem, 12vw, 12rem)",
          { lineHeight: "0.85", letterSpacing: "-0.02em" },
        ],
        headline: [
          "clamp(2.5rem, 6vw, 6rem)",
          { lineHeight: "0.9", letterSpacing: "0.01em" },
        ],
        title: ["clamp(1.5rem, 3vw, 3rem)", { lineHeight: "1.1" }],
        subtitle: ["clamp(1rem, 1.5vw, 1.25rem)", { lineHeight: "1.4" }],
      },
      animation: {
        "fade-in": "fadeIn 0.8s cubic-bezier(0.25, 0.1, 0.25, 1) both",
        "slide-up": "slideUp 0.8s cubic-bezier(0.25, 0.1, 0.25, 1) both",
        "slow-zoom": "slowZoom 20s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(60px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slowZoom: {
          "0%": { transform: "scale(1.1)" },
          "100%": { transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
