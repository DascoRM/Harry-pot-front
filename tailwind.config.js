import {heroui} from "@heroui/theme"

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
    },
  },
  darkMode: "class",
  plugins: [heroui({
    themes: {
        light: {
          colors: {
            background: "#FFF3E3",
            foreground: "#001731",
            primary: "#18181B",
            gryffondor: "#fb2c36",
            serpentard: "#00c951",
            serdaigle: "#00a6f4",
            poufsouffle: "#fcc800"
          },
        },
    }
  })],
}

module.exports = config;