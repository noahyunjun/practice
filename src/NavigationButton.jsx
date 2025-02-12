import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const NavigationButton = ({ path, label }) => {
  return (
    <button className="bg-blue-500 rounded m-6 px-4 py-2">
      <Link to={path} className="text-white no-underline">
        {label}
      </Link>
    </button>
  );
};

NavigationButton.propTypes = {
  path: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default NavigationButton;
