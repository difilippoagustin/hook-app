import React, { useContext } from "react";
import { UserContext } from "./UserContext";

export const AboutPage = () => {
  const { setUserState } = useContext(UserContext);

  const handleClick = () => {
    setUserState({});
  };

  return (
    <>
      <h1>AboutPage</h1>
      <br />

      <button className="btn btn-danger" onClick={handleClick}>
        Logout
      </button>
    </>
  );
};
