import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const NavigationButton = ({ path, label, className }) => {
  return (
    <Link
      to={path}
      className={`rounded m-6 px-4 py-2
                bg-blue-500 dark:bg-blue-700 
                hover:bg-blue-600 dark:hover:bg-blue-800 
                transition duration-200  text-white no-underline inline-block text-center ${className}`}
    >
      {label}
    </Link>
  );
};

NavigationButton.propTypes = {
  path: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default NavigationButton;
