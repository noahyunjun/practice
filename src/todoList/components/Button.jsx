import React from "react";
import PropTypes from "prop-types";

const Button = ({ name, onClick, className, disabled = false }) => {
  return (
    <button
      type="button"
      className={`px-3 py-1 rounded-full font-mono text-white 
                  bg-blue-500 dark:bg-blue-700 
                  hover:bg-blue-600 dark:hover:bg-blue-800 
                  transition duration-200 
                  disabled:opacity-50 disabled:cursor-not-allowed
                  ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {name}
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool,
};

export default Button;
