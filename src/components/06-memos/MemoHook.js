import React, { useMemo, useState } from "react";
import { procesoPesado } from "../../helpers/ProcesoPesado";
import { useCounter } from "../../hooks/useCounter";
import "../02-useEffect/effects.css";
export const MemoHook = () => {
  const { state, increment } = useCounter(2);
  const [show, setShow] = useState(true);

  const memoProcesoPesado = useMemo(() => procesoPesado(state), [state]);

  return (
    <>
      <h1>MemoHook</h1>
      <h3>Counter: {state}</h3>
      <hr />

      <p>{memoProcesoPesado}</p>

      <button className="btn btn-primary" onClick={() => increment()}>
        + 1
      </button>
      <button
        className="btn btn-outline-primary"
        onClick={() => setShow(!show)}
      >
        Show/Hide {JSON.stringify(show)}
      </button>
    </>
  );
};
