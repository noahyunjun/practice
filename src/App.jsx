import React from "react";
import Router from "./Router";

const App = () => {
  return (
    <>
      <Router />
      <div className="bg-blue-500 text-white p-4 rounded">
        TailwindCSS 적용 확인!
      </div>
    </>
  );
};

export default App;
