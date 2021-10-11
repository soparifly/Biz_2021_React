import React from "react";
import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);

const userTemplate = {
  userid: "",
  userPassword: "",
  rePassword: "",
  useremail: "",
};

const UserContextProvider = ({ children }) => {
  const [account, setAccount] = useState({ ...userTemplate });

  const propsStore = {
    account,
    setAccount,
  };
  return (
    <UserContext.Provider value={propsStore}>{children}</UserContext.Provider>
  );
};

export default UserContextProvider;
