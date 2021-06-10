import React, { useRef } from "react";

import "../02-useEffect/effects.css";

export const FocusScreen = () => {
  const inputRef = useRef();
  const handleFocus = () => {
    inputRef.current.select();
  };

  return (
    <div>
      <h1>Focus Screen</h1>
      <hr />
      <input
        type="text"
        className="form-control"
        placeholder="Your name"
        ref={inputRef}
      />
      <button className="btn btn-outline-primary mt-5" onClick={handleFocus}>
        Focus
      </button>
    </div>
  );
};
