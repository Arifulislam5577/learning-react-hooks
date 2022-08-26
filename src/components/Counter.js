import React, { useContext } from "react";
import { DataContext } from "../contextApi/ContextApi";

const Counter = () => {
  const { state, dispatch } = useContext(DataContext);
  return (
    <div>
      <h1>Count -- {state.count}</h1>

      <button
        className="btn btn-primary btn-lg rounded-0 me-2"
        onClick={() => dispatch({ type: "INCREMENT" })}
      >
        Increment
      </button>
      <button
        className="btn btn-danger btn-lg rounded-0 "
        onClick={() => dispatch({ type: "DECREMENT" })}
      >
        Decrement
      </button>
    </div>
  );
};

export default Counter;
