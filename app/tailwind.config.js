/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        "rich-black": "#000F1F",
        "rich-black-hover": "#011830",
        "blue-sapphire": "#006983",
        "blue-sapphire-hover": "#0786a6",
        "blue-grey": "rgba(23, 28, 51, 0.4)",
        "danger-red": "#D51414",
        platinum: "#f4f7f0",
      },
    },

    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
  },

  plugins: [],
};
