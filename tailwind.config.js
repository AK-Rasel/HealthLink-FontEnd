/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['"Poppins"', "sans-serif"],
        plus_Jakarta_Sans: ['"Plus Jakarta Sans"', '"sans-serif"'],
      },
      colors: {
        "primary-color": "#223263",
        "secondary-color": "#EAF0FF",
        "tertiary-color": " #415DA1",
        "quaternary-color": "#A1A1A1",
      },
    },
  },
  plugins: [require("daisyui")],
};
