import { create } from "zustand";

const useTodoStore = create((set) => ({
  todos: JSON.parse(localStorage.getItem("todos")) || [],
  addTodo: (text) => {
    set((state) => {
      const updateTodos = [
        ...state.todos,
        {
          id:
            state.todos.length === 0
              ? 1
              : state.todos[state.todos.length - 1].id + 1,
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
      const updateTodos = [...state.todos];
      updateTodos.splice(id, 1);
      localStorage.setItem("todos", JSON.stringify(updateTodos));
      return { todos: updateTodos };
    });
  },
}));

export default useTodoStore;
