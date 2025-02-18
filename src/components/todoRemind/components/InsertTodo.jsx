import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from "./Button";

const InsertTodo = ({ addList }) => {
  const [inputValue, setInputValue] = useState("");
  const [isComposing, setIsComposing] = useState(false);

  const handleAddList = () => {
    if (!inputValue.trim()) return;
    addList(inputValue);
    setInputValue("");
  };

  const enterEvent = (e) => {
    if (e.key === "Enter" && !isComposing) {
      e.preventDefault();
      handleAddList();
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="할일을 입력해주세요"
        className="border-2 mr-3"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={enterEvent}
        onCompositionStart={() => setIsComposing(true)}
        onCompositionEnd={() => setIsComposing(false)}
      />
      <Button name={"ADD"} onClick={handleAddList} />
    </div>
  );
};

InsertTodo.propTypes = { addList: PropTypes.func.isRequired };

export default InsertTodo;
