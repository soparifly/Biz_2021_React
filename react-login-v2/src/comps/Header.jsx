import React from "react";
import logo from "../logo.svg";

const style = {
  width: "100vw",
  height: "30vh",
  background: "#1C0C5B",
  color: "whitesmoke",
  fontSize: "2rem",
  marginLeft: "auto",
  marginRight: "auto",
  textAlign: "center",
  lineHeight: "30vh",
};
const Header = () => {
  return (
    <div style={style}>
      <h1>
        <img src={logo} className="App-logo" alt="logo" />
        <img src={logo} className="App-logo" alt="logo" />  ( ｯ◕ ܫ◕)ｯ' 
        <img src={logo} className="App-logo" alt="logo" />
        <img src={logo} className="App-logo" alt="logo" />
      </h1>
    </div>
  );
};

export default Header;
