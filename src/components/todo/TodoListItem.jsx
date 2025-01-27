import React from "react";
import PropTypes from "prop-types";

const TodoListItem = ({ item, removeList, checkhandled }) => {
  //여기서는 객체만 남는다.
  //props로 넘겨줄땐, props라는 객체로 쌓여서 오게되는데, 그 객체를 풀어주는게 구조분해할당이다
  const { id, text, checked } = item; // 객체로 넘어온 item을 구조분해할당으로 풀어주고있다.
  return (
    <li>
      <div className="grid grid-cols-5 place-content-center mt-2">
        <label htmlFor="isDone">
          <input
            type="checkbox"
            checked={checked}
            onClick={() => checkhandled(id)}
          />
        </label>
        <span>{id + 1}</span>
        <span>{text}</span>
        <button
          className="bg-blue-400 rounded-lg ml-2"
          onClick={() => removeList(id)}
        >
          <span>삭제</span>
        </button>
      </div>
    </li>
  );
};

TodoListItem.propTypes = {};

export default TodoListItem;
