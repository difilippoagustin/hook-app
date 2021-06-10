import React, { useLayoutEffect, useRef, useState } from "react";
import { useCounter } from "../../hooks/useCounter";
import { useFetch } from "../../hooks/useFetch";

import "./layout.css";

export const Layout = () => {
  const { state, increment } = useCounter(1);
  const [boxSize, setBoxSize] = useState({});
  const pTag = useRef();

  const { data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${state}`
  );

  const { quote } = !!data && data[0];

  useLayoutEffect(() => {
    setBoxSize(pTag.current.getBoundingClientRect());
  }, [quote]);

  return (
    <>
      <h1>Layout effects</h1>
      <hr />

      <blockquote className="blockquote text-right">
        <p ref={pTag}>{quote}</p>
      </blockquote>
      <pre>{JSON.stringify(boxSize, null, 3)}</pre>
      <button className="btn btn-primary" onClick={() => increment()}>
        Next quote
      </button>
    </>
  );
};
