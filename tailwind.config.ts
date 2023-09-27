import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#ffd275",
        secondary: "#0a0908",
      },
      backgroundImage: {
        hero: "url('/header-poster.jpg')",
        support: "url('/support-poster.jpg')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        open: ["var(--font-open-sans)"],
        roboto: ["var(--font-roboto)"],
      },
      colors: {
        main: "#0a0908",
      },
    },
  },
  plugins: [],
};
export default config;
