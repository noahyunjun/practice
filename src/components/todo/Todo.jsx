import React, { useState } from "react";
import PropTypes from "prop-types";
import TodoList from "./TodoList";

const Todo = () => {
  const [list, setList] = useState([
    { id: 0, text: "react basic", checked: true },
    { id: 1, text: "typescript", checked: true },
    { id: 2, text: "blogging", checked: true },
  ]);

  const [inputValue, setInputValue] = useState("");
  const addTodo = () => {
    const addData = {
      id: list.length,
      text: inputValue,
      checked: false,
    };
    setList([...list, addData]);
    setInputValue(" ");
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
    <div className=" grid justify-center">
      <div className="font-bold text-xl">Todo List</div>
      <div className="place-content-center">
        <input
          type="text"
          className="border-solid border-2"
          placeholder="할일 입력"
          value={inputValue}
          onChange={inputState}
        />
        <button className="rounded-full bg-blue-200 " onClick={addTodo}>
          추가
        </button>
      </div>

      <br />
      <div className="flex justify-center ">
        <TodoList
          list={list}
          removeList={removeList}
          checkhandled={checkhandled}
        />
      </div>
    </div>
  );
};

Todo.propTypes = {};

export default Todo;
