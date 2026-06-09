import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      colors: {
        pink: {
          DEFAULT: "#FF0090",
          dark: "#CC0073",
          light: "#FF66BB",
        },
        lime: {
          DEFAULT: "#CCFF00",
          dark: "#AADD00",
        },
      },
      fontFamily: {
        display: ["var(--font-barlow)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
};

export default config;
