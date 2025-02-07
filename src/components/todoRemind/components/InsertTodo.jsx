import React from "react";
import PropTypes from "prop-types";

const InsertTodo = (props) => {
  return (
    <div>
      <input
        type="text"
        placeholder="할일을 입력해주세요"
        className="border-2 mr-3"
      />
      <button className="bg-blue-400 rounded-full px-2 py-1 font-mono">
        ADD
      </button>
    </div>
  );
};

InsertTodo.propTypes = {};

export default InsertTodo;
