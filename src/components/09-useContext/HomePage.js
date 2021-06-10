import React, { useContext } from "react";
import { UserContext } from "./UserContext";
export const HomePage = () => {
  const { userState } = useContext(UserContext);
  console.log(userState);
  return (
    <>
      <h1>HomePage</h1>
      <br />
      <pre>{JSON.stringify(userState, null, 3)}</pre>
    </>
  );
};
