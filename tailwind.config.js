/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['"League Spartan"', "sans-serif"],
      },
      screens: {
        md: { max: "1000px" },
        mb: { max: "600px" },
      },
      colors: {
        Background: "#effafa",
        cyan: {
          header: "#5ba4a4",
          filter: "#eef6f6",
          dark: "#7b8e8e",
          "very-dark": "#2c3a3a",
        },
      },
      backgroundImage: {
        "header-desk": "url('../public/images/bg-header-desktop.svg')",
        "header-mobile": "url('../public/images/bg-header-mobile.svg')",
      },
    },
  },
  plugins: [],
};
