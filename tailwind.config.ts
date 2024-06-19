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
        "royal-blue": "#3c6db2",
      },
      boxShadow: {
        solid: "border-2 border-solid border-blue-400",
      },
      // fontFamily: {
      //   playfair_display: "var(--font-playfair_display)",
      //   space_mono: "var(--font-space_mono)",
      //   inter: "var(--font-inter)",
      // },
    },
  },
  plugins: [],
};
export default config;
