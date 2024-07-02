import { useState } from "react";

import "./App.css";
import { useSelector } from "react-redux";
import Buttons from "../components/Buttons";

function App() {
  const countState = useSelector((state) => state.manageCountState);
  return (
    <>
      <div className=" flex flex-row space-x-2 justify-center ">
        <h1 className="text-[30px] ">Count is: </h1>
        <h1 className="text-[30px]">{countState}</h1>
      </div>
      <Buttons />
    </>
  );
}

export default App;
