/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,tsx,ts}", "./index.html"],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "white",
          dark: "#1a202c",
        },
        text: {
          DEFAULT: "black",
          dark: "white",
        },
      },
    },
  },
  plugins: [],
};
