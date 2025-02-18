import React from "react";
import NavigationButton from "./NavigationButton";
import { useState, useEffect } from "react";
const links = [
  { path: "/game", label: "Tic-Tac-Toe" },
  { path: "/Todo", label: "Todo List" },
  { path: "/TodoRemind", label: "Todo Remind" },
];

const RoutingPage = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="flex items-center justify-center flex-col dark:bg-gray-800 h-screen">
      <div className="font-bold text-2xl dark:text-white">
        Hyeon Jun's Projects
      </div>
      <div>
        <button
          className="mt-5 px-4 py-2 bg-gray-300 dark:bg-gray-700 text-black dark:text-white rounded"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "라이트 모드" : "다크 모드"}
        </button>
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
