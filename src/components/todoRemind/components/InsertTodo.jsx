import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

const InsertTodo = (props) => {
  return (
    <div>
      <input
        type="text"
        placeholder="할일을 입력해주세요"
        className="border-2 mr-3"
      />
      <Button name={"ADD"} onClick={() => console.log("done")} />
    </div>
  );
};

InsertTodo.propTypes = {};

export default InsertTodo;
