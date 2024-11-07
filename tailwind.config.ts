import { transform } from "next/dist/build/swc";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "2rem",
      },
    },
    extend: {
      colors: {
        white: '#ffffff',
        pink: '#ef32d9',
        purple: "#42275a",
        teal: "#89fffd",
        magenta: "#ff00cc",
        gradientStartLight: '#f78de0',
        gradientEndLight: '#b0ffff',
      },
      fontFamily: {
        sans: 'var(--font-sans)',
        serif: 'var(--font-serif)',
      },
      backgroundImage: {
        'wild-apple': 'linear-gradient(#A18CD1, #FBC2EB)',
        'button-gradient': 'linear-gradient(to right, #ef32d9, #89fffd)',
        'alt-gradient': 'linear-gradient(to right, #89fffd, #ef32d9)',
        'mauve': 'linear-gradient(to right, #42275a, #734b6d)',
        'atlas': 'linear-gradient(to right, #FEAC5E, #C779D0, #4BC0C8)',

      },
      animation: {
        'ping-large': 'ping-large 1s ease-in-out infinite',
        'move-left': 'move-left 1s linear infinite',
        'move-right': 'move-right 1s linear infinite',
      },
      keyframes: {
        'ping-large': {
          '75%, 100%': {
            transform: 'scale(3)',
            opacity: '0',
          },
        },
        'move-left': {
          '0%': {
            transform: 'translateX(0%)',
          },
          '100%': {
            transform: 'translateX(-50%)',
          },
        },
        'move-right': {
          '0%': {
            transform: 'translateX(-50%)',
          },
          '100%': {
            transform: 'translateX(0%)',
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
