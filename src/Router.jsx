import { BrowserRouter, Routes, Route } from "react-router-dom";
import Game from "./components/tiktaktok/Game";
import Todo from "./components/todo/Todo";
import RoutingPage from "./RoutingPage";
import TodoRemind from "./components/todoRemind/TodoRe";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RoutingPage />} />
        <Route path="/game" element={<Game />} />
        <Route path="/Todo" element={<Todo />} />
        <Route path="/TodoRemind" element={<TodoRemind />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
