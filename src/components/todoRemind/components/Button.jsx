import React from "react";
import PropTypes from "prop-types";

const Button = ({ name, onClick, className }) => {
  return (
    <button
      className={`bg-blue-400 rounded-full px-2 py-1 font-mono text-white ${className}`}
      onClick={onClick}
    >
      {name}
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Button;
