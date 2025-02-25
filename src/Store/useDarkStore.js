import { create } from "zustand";

const useDarkMode = create((set) => ({
  theme: localStorage.getItem("theme") || "dark",
  setTheme: () => {
    set((state) => {
      console.log(state);
      const newTheme = state.theme === "dark" ? "light" : "dark";
      localStorage.setItem("theme", newTheme);
      document.documentElement.classList.toggle("dark", newTheme === "dark");
      /*Todos
        1. theme Dark, Light Boolean 값으로 변경
        - Boolean 값으로 정반대로 변환하는 로직으로 구현 필요
      */
      return { theme: newTheme };
    });
  },
}));

export default useDarkMode;
