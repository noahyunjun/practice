import { BrowserRouter, Routes, Route } from "react-router-dom";
import Game from "./components/Game";
import Todo from "./components/Todo";
import RoutingPage from "./components/RoutingPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RoutingPage />} />
        <Route path="/game" element={<Game />} />
        <Route path="/Todo" element={<Todo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
