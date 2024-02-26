import React from "react";
import { useReducer } from "react";

const Usereducer = () => {
  const counterReducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return {
          count: state.count + 1,
        };
      case "DECREMENT":
        return {
          count: state.count - 1,
        };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });
  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
    </div>
  );
};
export default Usereducer;
