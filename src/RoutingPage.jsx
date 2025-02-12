import React from "react";
import NavigationButton from "./NavigationButton";

const links = [
  { path: "/game", label: "Tic-Tac-Toe" },
  { path: "/Todo", label: "Todo List" },
  { path: "/TodoRemind", label: "Todo Remind" },
];

const RoutingPage = () => {
  return (
    <div className="flex justify-center">
      {links.map(({ path, label }) => (
        <NavigationButton key={path} path={path} label={label} />
      ))}
    </div>
  );
};

export default RoutingPage;
