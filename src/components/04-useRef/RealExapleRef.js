import React, { useState } from "react";
import { MultipleCustomHooks } from "../03-examples/MultipleCustomHooks";

import "../02-useEffect/effects.css";

export const RealExapleRef = () => {
  const [show, setShow] = useState(true);
  return (
    <div>
      <h1>RealExapleRef</h1>
      <hr />
      {show && <MultipleCustomHooks />}
      <br />
      <button
        className="btn btn-outline-primary"
        onClick={() => {
          setShow(!show);
        }}
      >
        Toggle
      </button>
    </div>
  );
};
