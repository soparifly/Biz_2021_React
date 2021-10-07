import React, { useEffect } from "react";
import { useHistory } from "react-router";
import { useUserContext } from "../context/UserContextProvider";

const BBs = () => {
  const { account, setAccount } = useUserContext();
  const history = useHistory();
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:8080/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const result = await res.json();
      console.log(result);
      await setAccount(result);
    };
    fetchData();
    // eslint-disable-next-line
  }, []);
  if (!account.userid) {
    history.replace("/login");
  }
  return (
    <div>
      <h1>FREE</h1>
    </div>
  );
};

export default BBs;
