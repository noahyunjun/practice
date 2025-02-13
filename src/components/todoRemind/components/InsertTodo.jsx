import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from "./Button";

const InsertTodo = ({ addList }) => {
  const [inputValue, setInputValue] = useState("");

  const handleAddList = () => {
    addList(inputValue);
    setInputValue("");
  };

  const enterEvent = (e) => e.key === "Enter" && handleAddList();

  return (
    <div>
      <input
        type="text"
        placeholder="할일을 입력해주세요"
        className="border-2 mr-3"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            enterEvent(e);
          }
        }}
      />
      <Button name={"ADD"} onClick={handleAddList} />
    </div>
  );
};

InsertTodo.propTypes = { addList: PropTypes.func.isRequired };

export default InsertTodo;
