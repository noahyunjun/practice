import React from "react";
import NavigationButton from "./NavigationButton";

const links = [
  { path: "/game", label: "Tic-Tac-Toe" },
  { path: "/todo", label: "Todo Remind" },
];

const RoutingPage = () => {
  return (
    <div className="flex items-center justify-center flex-col dark:bg-gray-900 h-screen">
      <div className="font-bold text-2xl dark:text-white">
        Hyeon Jun's Projects
      </div>
      <div className="flex flex-col items-center gap-4">
        {links.map(({ path, label }) => (
          <NavigationButton
            key={path}
            path={path}
            label={label}
            className="w-60 h-12 text-center flex items-center justify-center"
          />
        ))}
      </div>
    </div>
  );
};

export default RoutingPage;
