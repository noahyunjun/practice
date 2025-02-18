import React, { useState } from "react";
import TodoList from "./TodoList";
import NavigationButton from "../../NavigationButton";

const Todo = () => {
  const [list, setList] = useState([
    { id: 0, text: "react basic", checked: true },
    { id: 1, text: "typescript", checked: true },
    { id: 2, text: "blogging", checked: true },
  ]);

  const [inputValue, setInputValue] = useState("");

  const addTodo = () => {
    if (inputValue.trim() === "") return;
    const addData = {
      id: list.length,
      text: inputValue,
      checked: false,
    };
    setList([...list, addData]);
    setInputValue(""); // 입력값 초기화
  };

  const inputState = (e) => {
    setInputValue(e.target.value);
  };

  const removeList = (id) => {
    setList(list.filter((item) => item.id !== id));
  };

  const checkhandled = (id) => {
    setList((prev) =>
      prev.map((item, index) => {
        return index === id ? { ...item, checked: !item.checked } : item;
      })
    );
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white p-6">
      <h1 className="font-bold text-2xl mb-4">Todo List</h1>

      {/* 입력 필드 + 추가 버튼 */}
      <div className="flex items-center gap-2">
        <input
          type="text"
          className="border-2 border-gray-400 dark:border-gray-600 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
          placeholder="할 일 입력"
          value={inputValue}
          onChange={inputState}
        />
        <button
          className="px-4 py-2 bg-blue-500 dark:bg-blue-700 text-white rounded hover:bg-blue-600 dark:hover:bg-blue-800 transition"
          onClick={addTodo}
        >
          추가
        </button>
      </div>

      {/* Todo 리스트 */}
      <div className="mt-6 w-full max-w-md">
        <TodoList
          list={list}
          removeList={removeList}
          checkhandled={checkhandled}
        />
      </div>

      {/* 홈으로 가는 버튼 */}
      <div className="mt-6">
        <NavigationButton
          key="/"
          path="/"
          label="Home"
          className="dark:bg-gray-700 dark:text-white"
        />
      </div>
    </div>
  );
};

export default Todo;
