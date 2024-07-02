import React from "react";
import { useDispatch } from "react-redux";
import { allActionCreators } from "../src/state";

function Buttons() {
  const dispatch = useDispatch();

  return (
    <>
      <div className="flex-row space-x-2 justify-center mt-[70px]">
        <button
          className="bg-red-500 text-white p-5 rounded-full text-lg hover:bg-red-600 active:bg-red-500"
          onClick={() => {
            dispatch(allActionCreators.decrement(1));
          }}
        >
          Decrement -
        </button>
        <button
          className="bg-green-500 text-white p-5 rounded-full text-lg hover:bg-green-600 active:bg-green-500"
          onClick={() => {
            dispatch(allActionCreators.increment(1));
          }}
        >
          Increment +
        </button>
      </div>
    </>
  );
}

export default Buttons;
