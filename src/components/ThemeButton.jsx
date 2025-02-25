import React from "react";
import PropTypes from "prop-types";
import useDarkStore from "../Store/useDarkStore";
const ThemeButton = ({ className }) => {
  const { theme, setTheme } = useDarkStore();
  return (
    <button
      className={` px-4 py-2 bg-gray-300 dark:bg-gray-700 text-black dark:text-white rounded  ${className}`}
      onClick={() => setTheme()}
    >
      {theme}
    </button>
  );
};

ThemeButton.propTypes = {};

export default ThemeButton;
