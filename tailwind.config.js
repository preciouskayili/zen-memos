/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    {
      pattern: /bg-(green|yellow|orange|blue|purple|pink|red)/,
      variants: ["hover"],
    },
  ],
  daisyui: {
    themes: ["light"],
  },
  theme: {
    fontFamily: {
      sans: ['"Plus Jakarta Sans"', "sans-serif"],
    },
    extend: {
      colors: {
        gray: "#F7F7F8",
        white: "#ffffff",
        green: "#66FFBE",
        "green-dark": "#33FFA8",
        yellow: "#FFF266",
        "yellow-dark": "#FFEE33",
        orange: "#FFB966",
        "orange-dark": "#FFAD4C",
        blue: "#80E0FF",
        "blue-dark": "#4CD4FF",
        purple: "#9980FF",
        "purple-dark": "#8F73FF",
        pink: "#D680FF",
        "pink-dark": "#D273FF",
        red: "#FF7FB5",
        "red-dark": "#FF73AE",
      },
    },
  },
  plugins: [daisyui],
};
