import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const NavigationButton = ({ path, label }) => (
  <button className="bg-blue-500 rounded m-6 px-4 py-2">
    <Link to={path} className="text-white no-underline">
      {label}
    </Link>
  </button>
);

NavigationButton.propTypes = {
  path: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

const RoutingPage = () => {
  const links = [
    { path: "/game", label: "Tic-Tac-Toe" },
    { path: "/Todo", label: "Todo List" },
  ];

  return (
    <div className="flex justify-center">
      {links.map(({ path, label }) => (
        <NavigationButton key={path} path={path} label={label} />
      ))}
    </div>
  );
};

export default RoutingPage;
