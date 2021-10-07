import React from "react";
import { Route } from "react-router-dom";
import LoginForm from "./LoginForm";
import Navbar from "./Navbar";
import JoinForm from "./JoinForm";
import Notice from "./Notice";
import BBs from "./BBs";
import { useUserContext } from "../context/UserContextProvider";

const Maincomps = () => {
  // eslint-disable-next-line
  const { account, setAccount } = useUserContext();
  const NavList = [
    { id: 0, title: "Home", link: "/" },
    { id: 1, title: "Notice", link: "/notice" },
    { id: 2, title: "BBS", link: "/bbs" },
    account?.userid
      ? { id: 3, title: "/logout", link: "/logout" }
      : { id: 4, title: "Login", link: "/login" },
    account?.userid
      ? { id: 4, title: "MyPage", link: "/mypage" }
      : { id: 4, title: "Join", link: "/join" },
  ];
  return (
    <Navbar NavList={NavList}>
      <Route path="/" exact>
        <div>홈화면</div>
      </Route>
      <Route path="/notice" exact>
        <Notice />
      </Route>
      <Route path="/bbs" exact>
        <BBs />
      </Route>
      <Route path="/login" exact>
        <LoginForm />
      </Route>
      <Route path="/join">
        <JoinForm />
      </Route>
    </Navbar>
  );
};

export default Maincomps;
