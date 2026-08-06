import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        ink: "#0D0D0D",
        paper: "#F7F7F5",
        copper: "#C9633B",
        gold: "#B98A4D",
        beige: "#E8DFD1",
        muted: "#8A8680",
        line: "rgba(247, 247, 245, 0.12)",
        "line-dark": "rgba(13, 13, 13, 0.12)",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.22em",
      },
      transitionTimingFunction: {
        signal: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
