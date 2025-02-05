import React from "react";
import PropTypes from "prop-types";

const Square = ({ value, onSquareClick, style }) => {
  return (
    <button className="square font-bold" onClick={onSquareClick} style={style}>
      {value}
    </button>
  );
};

Square.propTypes = {
  value: PropTypes.array,
  onSquareClick: PropTypes.func,
};

export default Square;
