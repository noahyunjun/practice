import React, { useState } from "react";
import PropTypes from "prop-types";
import TodoList from "./todo/TodoList";

const Todo = () => {
  const [list, setList] = useState([
    { id: 0, text: "react basic", checked: true },
    { id: 1, text: "typescript", checked: true },
    { id: 2, text: "blogging something", checked: true },
  ]);
  const [inputValue, setInputValue] = useState("");
  // const addTodo = (inputValue) => {
  //   setList([...list, inputValue]);
  // };
  // const inputState = (e) => {
  //   setInputValue(e.target.value);
  //   console.log(inputValue);
  // };
  return (
    <>
      <div className="flex justify-center font-bold text-xl">Todo List</div>
      <input
        type="text"
        className="border-solid border-2"
        placeholder="할일 입력"
        // onChange={inputState}
      />
      <button className="rounded-full bg-blue-200" /*onClick={addTodo}*/>
        추가
      </button>
      <div className="flex justify-center">
        <TodoList list={list} />
      </div>
    </>
  );
};

Todo.propTypes = {};

export default Todo;
