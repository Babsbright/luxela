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
        luxela_purple:"#5c2eaf",
        luxela_purple2:"#8351e1",
        luxela_lilac:"#9872dd",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily:{
        mono:['var(--font-geist-mono)'],
        sans:['var(--font-geist-sans)'],
      },
    },
  },
  plugins: [],
};
export default config;
