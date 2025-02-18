import InsertTodo from "./components/InsertTodo";
import ListItem from "./components/ListItem";
import useTodoStore from "../Store/useTodoStore";
import Button from "./components/Button";
import { useState, useEffect } from "react";
const TodoRe = () => {
  const { todos, addTodo, delTodo, checkIsDone, clearTodoList } =
    useTodoStore();

  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="h-screen mx-auto px-4 flex flex-col items-center bg-white dark:bg-gray-900 text-black dark:text-white">
      <h1 className="text-2xl font-bold">TodoList Remind</h1>
      <InsertTodo items={todos} addList={addTodo} />
      <ListItem items={todos} delList={delTodo} onClick={checkIsDone} />
      <Button name="Clear!" className="mt-4" onClick={clearTodoList} />
      <button
        className="mt-5 px-4 py-2 bg-gray-300 dark:bg-gray-700 text-black dark:text-white rounded"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "라이트 모드" : "다크 모드"}
      </button>
    </div>
  );
};

export default TodoRe;
