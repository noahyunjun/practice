import { create } from "zustand";
import { useEffect } from "react";
const useDarkMode = create((set) => ({
  theme: localStorage.getItem("theme") || "light",
  setTheme: () => {
    set((state) => {
      const newTheme = state.theme === "dark" ? "light" : "dark";
      localStorage.setItem("theme", newTheme);
      document.documentElement.classList.toggle("dark", newTheme === "dark");
      return { theme: newTheme };
    });
  },
}));

export const useDarkModeSync = () => {
  const theme = useDarkMode((state) => state.theme);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);
};

export default useDarkMode;
