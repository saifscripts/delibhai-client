/* eslint-disable no-undef */

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // USE EXTENDED COLORS WHEN DAISY UI WILL BE REMOVED
      colors: {
        // // primary: '#00C795',
        // // secondary: '#30D0A7',
        // accent: '#707070',
        // neutral: '#D9D9D9',
        // medium: '#515050',
        // light: '#EBEBEB',
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
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
      },
    },
  },
  // ONLY FOR DUMMY HOME PAGE. REMOVE THIS LATER
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#00C795",
          secondary: "#13EBB4",
          accent: "#707070",
          neutral: "#D9D9D9",
          medium: "#515050",
          light: "#EBEBEB",
        },
      },
    ],
  },
  // ONLY FOR DUMMY HOME PAGE. REMOVE THIS LATER
  plugins: [require("daisyui")],
};
