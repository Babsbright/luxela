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
      },
      fontFamily:{
        aeonik:['var(--font-aeonik-mono)'],
        helvtica:['var(--font-helva-sans)'],
        spaceGrotesk:['var(--font-space-grotesk)']
      },
      backgroundImage: {
        'hero-pattern': "url('/assests/Hero Section.png')",
      }
    },
  },
  plugins: [],
};
export default config;
