// tailwind.config.ts

import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // Brand-bookdagi asosiy palitra
        'brand-dark': '#1E2025',   // Asosiy qora fon
        'brand-light': '#FFFFFF',  // Asosiy oq matn

        // Aktsent ranglar
        'brand-red': '#E73544',      // Asosiy CTA (Call to Action), xatolar
        'brand-yellow': '#F2CB02',  // Ikkinchi darajali urg'u, ogohlantirish
        'brand-blue': '#7EB3BF',    // Informatsion bloklar, havolalar

        // Brand-bukdagi kulrang tonlar
        // 75% dark gray
        'brand-gray-dark': 'hsl(220, 7%, 27%)', // Taxminiy hisobda
        // 50% medium gray
        'brand-gray-medium': 'hsl(220, 4%, 50%)', // Taxminiy hisobda
        // 25% light gray
        'brand-gray-light': 'hsl(216, 4%, 77%)', // Taxminiy hisobda

        // Tailwind standart ranglarini semantik nomlash
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        sans: ['var(--font-montserrat)', 'sans-serif'], // Asosiy shrift (sans-serif)
        serif: ['var(--font-cormorant)', 'serif'],     // Sarlavha shrifti (serif)
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
export default config