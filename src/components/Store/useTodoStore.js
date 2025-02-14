import { create } from "zustand";

const useTodoStore = create((set) => ({
  todos: JSON.parse(localStorage.getItem("todos")) || [],
  addTodo: (text) => {
    set((state) => {
      const { todos } = state;
      const updateTodos = [
        ...todos,
        {
          id: todos.length === 0 ? 1 : todos[todos.length - 1].id + 1,
          text: text,
          isDone: false,
        },
      ];
      localStorage.setItem("todos", JSON.stringify(updateTodos));
      return { todos: updateTodos };
    });
  },
  delTodo: (id) => {
    set((state) => {
      const { todos } = state;
      const updateTodos = [...todos];
      updateTodos.splice(id, 1);
      localStorage.setItem("todos", JSON.stringify(updateTodos));
      return { todos: updateTodos };
    });
  },
  checkIsDone: (id) => {
    set((state) => {
      const { todos } = state;
      const updateTodos = todos.map((item) =>
        item.id === id ? { ...item, isDone: !item.isDone } : item
      );
      return { todos: updateTodos };
    });
  },
}));

export default useTodoStore;
