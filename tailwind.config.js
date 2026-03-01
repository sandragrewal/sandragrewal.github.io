/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        sage: {
          50: "#f6f7f4",
          100: "#e8ebe3",
          200: "#d4dbc9",
          300: "#b5c2a4",
          400: "#96a87f",
          500: "#7a8f62",
          600: "#5f724c",
          700: "#4b5a3d",
          800: "#3e4a34",
          900: "#353f2e",
        },
        cream: {
          50: "#fdfcf9",
          100: "#faf8f1",
          200: "#f5f0e3",
          300: "#ede5d0",
          400: "#e2d5b8",
        },
        forest: {
          600: "#3d5a45",
          700: "#2f4736",
          800: "#243528",
        },
        apricot: {
          50: "#fef9f6",
          100: "#fdf2eb",
          200: "#fbe5d6",
          300: "#f7d0b8",
          400: "#f2b896",
          500: "#e9a07a",
          600: "#d4845c",
        },
      },
    },
  },
  plugins: [],
};
