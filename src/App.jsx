import React from "react";
import Router from "./Router";
import Header from "./components/Header";
import { useDarkModeSync } from "./Store/useDarkStore";

const App = () => {
  useDarkModeSync();
  return (
    <>
      <Header />
      <Router />
    </>
  );
};

export default App;
