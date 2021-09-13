import React from "react";
import "./css/main.css";

function write() {
  return (
    <div className="write_input">
      <div className="write_input_div">
        <input name="t_date" type="date" placeholder="날짜" />
        <input name="t_flag" placeholder="중요도" />
        <input name="t_bucket" placeholder=" 할 일" />
      </div>
    </div>
  );
}

export default write;
