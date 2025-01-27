import React from "react";
import PropTypes from "prop-types";
import TodoListItem from "./TodoListItem";

const TodoList = ({ list, removeList, checkhandled }) => {
  //여기서 props 객체 한번 추출(Array만 남는다)
  return (
    <ul>
      {list.map((item) => {
        //여기서 array 추출 (객체만 남는다)
        return (
          <TodoListItem
            item={item}
            removeList={removeList}
            checkhandled={checkhandled}
          />
        );
      })}
    </ul>
  );
};

TodoList.propTypes = {};

export default TodoList;
