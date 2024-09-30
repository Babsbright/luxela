import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	screens: {
  		sm: '480px',
  		md: '800px',
  		lg: '1000px',
  		xl: '1280px'
  	},
  	extend: {
  		colors: {
  			luxela_purple: '#5c2eaf',
  			luxela_purple2: '#8351e1',
  			luxela_lilac: '#9872dd'
  		},
  		fontFamily: {
  			aeonik: ['var(--font-aeonik-mono)'],
  			helvtica: ['var(--font-helva-sans)'],
  			spaceGrotesk: ['var(--font-space-grotesk)']
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
      backgroundImage: {
        'hero-pattern': "url('/assests/Hero Section.png')",
        'mobile-background': "url('/assests/iPhone 14 & 15 Pro - 5.svg')"
      },
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
