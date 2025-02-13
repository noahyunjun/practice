import { create } from "zustand";

const useTodoStore = create((set) => ({
  count: 0,
  incrementCount: () => set((state) => ({ count: state.count + 1 })),
  removeCount: () => set({ count: 0 }),
}));

export default useTodoStore;
