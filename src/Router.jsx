import { BrowserRouter, Routes, Route } from "react-router-dom";
import Game from "./tiktaktok/Game";
import RoutingPage from "./RoutingPage";
import Todo from "./todoList/Todo";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RoutingPage />} />
        <Route path="/game" element={<Game />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
