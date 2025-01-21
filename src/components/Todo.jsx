import React, { useState } from "react";
import PropTypes from "prop-types";
import TodoList from "./todo/TodoList";

const Todo = () => {
  const [list, setList] = useState([
    { id: 0, text: "react basic", checked: true },
    { id: 1, text: "typescript", checked: true },
    { id: 2, text: "blogging something", checked: true },
  ]);

  return (
    <div>
      <TodoList list={list} />
    </div>
  );
};

Todo.propTypes = {};

export default Todo;
