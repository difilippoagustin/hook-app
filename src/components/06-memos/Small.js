import React, { memo } from "react";

export const Small = memo(({ value }) => {
  console.log("me volví a llamar");
  return <small>{value}</small>;
});
