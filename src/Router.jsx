import { BrowserRouter, Routes, Route, RouterProvider } from "react-router-dom";
import Game from "./components/Game";
import Todo from "./components/Todo";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Game />} />
        <Route path="/n1" element={<Todo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
