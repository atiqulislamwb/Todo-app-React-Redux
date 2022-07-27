import React from "react";
import Todos from "./components/Todos";

const App = () => {
  return (
    <div className="bg-slate-300 w-screen h-screen flex flex-col items-center ">
      <Todos />
    </div>
  );
};

export default App;
