import { create } from "zustand";

const useDarkMode = create((set) => ({
  theme: localStorage.getItem("theme"),
  setTheme: () => {
    set((state) =>
      state.theme == "dark" ? { theme: "light" } : { theme: "dark" }
    );
  },
}));

export default useDarkMode;
