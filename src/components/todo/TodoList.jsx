import React from "react";
import PropTypes from "prop-types";

const TodoList = ({ list }) => {
  //여기서 props 객체 한번 추출(Array만 남는다)
  return (
    <div>
      {list.map(({ text }) => {
        //여기서 array 추춘 (객체만 남는다)
        //그래서 text로 접근이 가능한것
        return <div>{text}</div>;
      })}
    </div>
  );
};

TodoList.propTypes = {};

export default TodoList;
