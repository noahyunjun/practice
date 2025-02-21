import React from "react";
import NavigationButton from "./NavigationButton";
import { useEffect } from "react";

import useDarkMode from "./components/Store/useDarkMode";

const links = [
  { path: "/game", label: "Tic-Tac-Toe" },
  { path: "/Todo", label: "Todo List" },
  { path: "/TodoRemind", label: "Todo Remind" },
];

const RoutingPage = () => {
  const { theme, setTheme } = useDarkMode();

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <div className="flex items-center justify-center flex-col dark:bg-gray-900 h-screen">
      <div className="font-bold text-2xl dark:text-white">
        Hyeon Jun's Projects
      </div>
      <div>
        <button
          className="mt-5 px-4 py-2 bg-gray-300 dark:bg-gray-700 text-black dark:text-white rounded"
          onClick={() => setTheme()}
        >
          {theme === "dark" ? "라이트 모드" : "다크모드"}
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
