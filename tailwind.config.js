/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,tsx,ts}", "./index.html"],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "white",
          dark: "#1a202c", // 다크 모드 배경색
        },
        text: {
          DEFAULT: "black",
          dark: "white", // 다크 모드 텍스트 색상
        },
      },
    },
  },
  plugins: [],
};
