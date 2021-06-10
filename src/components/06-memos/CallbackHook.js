import React, { useCallback, useState } from "react";
import { ShowIncrement } from "./ShowIncrement";

import "../02-useEffect/effects.css";

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10);

  const increment = useCallback(
    (num = 1) => {
      setCounter((c) => c + num);
    },
    [setCounter]
  );

  return (
    <>
      <h1>useCallback Hook</h1>
      <hr />

      <h3>Counter: {counter}</h3>

      <ShowIncrement increment={increment} />
    </>
  );
};
