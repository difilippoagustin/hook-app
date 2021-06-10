import React, { useState } from "react";
import { AppRouter } from "./AppRouter";
import { UserContext } from "./UserContext";

export const MainApp = () => {
  const [userState, setUserState] = useState({});

  return (
    <>
      <UserContext.Provider value={{ userState, setUserState }}>
        <AppRouter />
      </UserContext.Provider>
    </>
  );
};
