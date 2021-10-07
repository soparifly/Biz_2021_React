import React, { useEffect } from "react";
import { useUserContext } from "../context/UserContextProvider";
import { useHistory } from "react-router-dom";

const Logout = () => {
  const { setAccount } = useUserContext();
  const history = useHistory();

  useEffect(() => {
    const logout = async () => {
      const res = await fetch("http://localhost:8080/users/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      await setAccount([]);
      history.replace("/");
    };
    logout();
  }, []);
  return <div></div>;
};

export default Logout;
