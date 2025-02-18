import { create } from "zustand";

const useDarkMode = create((set) => {
  theme: JSON.parse(localStorage.getItem("theme"));
});
