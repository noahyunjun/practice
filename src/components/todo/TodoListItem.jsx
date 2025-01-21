import React from "react";
import PropTypes from "prop-types";

const TodoListItem = ({ item }) => {
  //여기서는 객체만 남는다.
  //props로 넘겨줄땐, props라는 객체로 쌓여서 오게되는데, 그 객체를 풀어주는게 구조분해할당이다
  const { id, text, checked } = item; // 객체로 넘어온 item을 구조분해할당으로 풀어주고있다.
  return (
    <li>
      <div className="grid grid-cols-3">
        <span className="ml-5">{id + 1}</span>
        {text}
        <span>Done : {checked ? "O" : "X"}</span>
      </div>
    </li>
  );
};

TodoListItem.propTypes = {};

export default TodoListItem;
