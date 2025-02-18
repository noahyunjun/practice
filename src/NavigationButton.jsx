import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const NavigationButton = ({ path, label, className }) => {
  return (
    <Link
      to={path}
      className={`bg-blue-500  rounded m-6 px-4 py-2 text-white no-underline inline-block text-center ${className}`}
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
