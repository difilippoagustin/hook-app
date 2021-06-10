import React, { useEffect, useState } from "react";

export const Message = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const { x, y } = coords;

  const mouseMove = (e) => {
    const coords = { x: e.x, y: e.y };
    setCoords(coords);
  };
  useEffect(() => {
    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <>
      <h3>Message</h3>
      <p>x: {x}</p>
      <p>y: {y}</p>
    </>
  );
};
