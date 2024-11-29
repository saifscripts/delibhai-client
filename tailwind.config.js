/* eslint-disable no-undef */

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        tn: "375px",
        xs: "400px",
      },
      colors: {
        primary: "#00C795",
        secondary: "#13EBB4",
        accent: "#707070",
        neutral: "#D9D9D9",
        medium: "#515050",
        light: "#EBEBEB",
      },
      fontFamily: {
        noto: "'Noto Serif Bengali', serif;",
        hind: "'Hind Siliguri', sans-serif",
        inter: "'Inter', sans-serif",
      },
      boxShadow: {
        "3xl": "0 4px 4px rgba(0, 0, 0, 0.25)",
      },
      transitionProperty: {
        height: "height",
      },
      spacing: {
        192: "48rem",
      },
      minWidth: {
        192: "48rem",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        md: "2rem",
      },
    },
  },
  plugins: [],
};
