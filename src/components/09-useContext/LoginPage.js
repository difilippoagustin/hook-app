import React, { useContext } from "react";
import { UserContext } from "./UserContext";

export const LoginPage = () => {
  const { setUserState } = useContext(UserContext);
  return (
    <>
      <h1>LoginPage</h1>
      <br />

      <button
        className="btn btn-primary"
        onClick={() =>
          setUserState({
            id: 123,
            name: "test",
          })
        }
      >
        Login
      </button>
    </>
  );
};
