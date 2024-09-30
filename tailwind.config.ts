import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
			sm: "480px",
			md: "800px",
			lg: "1000px",
			xl: "1280px",
		},
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
        'mobile-background': "url('/assests/iPhone 14 & 15 Pro - 5.svg')"
      },
    },
  },
  plugins: [],
};
export default config;
