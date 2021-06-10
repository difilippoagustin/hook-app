import React from "react";
import { useCounter } from "../../hooks/useCounter";

import "./counter.css";

export const CounterWithCustomHook = () => {
  const { state, increment, decrement, reset } = useCounter(100);
  return (
    <>
      <h1>Counter with Hook: {state}</h1>
      <button className="btn btn-primary" onClick={() => increment()}>
        + 1
      </button>
      <button className="btn btn-warning" onClick={() => decrement(5)}>
        - 5
      </button>
      <button className="btn btn-danger" onClick={reset}>
        Reset
      </button>
    </>
  );
};
