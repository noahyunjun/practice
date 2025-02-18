import React from "react";
import PropTypes from "prop-types";

const Square = ({ value, onSquareClick, className }) => {
  return (
    <button
      className={`w-12 h-12 flex items-center justify-center border border-gray-400 
      text-lg font-bold ${className}`}
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
};

Square.propTypes = {
  value: PropTypes.string,
  onSquareClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default Square;
