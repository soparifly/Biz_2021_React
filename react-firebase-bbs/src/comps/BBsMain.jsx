import React from "react";
import "../css/MainNav.css";
import { useState } from "react";

const bbsSampleData = {
  b_id: "0001",
  b_date: "2021-09-08",
  b_time: "10:10:10",
  b_writer: "홍길동",
  b_subject: "토이",
  b_content: "오늘 서울은 하루종일 맑음",
};

const tHeadArray = ["DATE", "TIME", "WRITER", "SUBJECT"];

const BbsHeader = () => {
  return tHeadArray.map((text) => {
    return <th>{text}</th>;
  });
};

function BBsMain() {
  const [bbsList, setBbsList] = useState([bbsSampleData]);

  const list_body = bbsList.map((bbs) => {
    return (
      <tr>
        <td>{bbs.b_date}</td>
        <td>{bbs.b_time}</td>
        <td>{bbs.b_writer}</td>
        <td>{bbs.b_subject}</td>
      </tr>
    );
  });
  return (
    <div className="bbsMain_list">
      <table className="bbs_list">
        <thead>
          <th>{BbsHeader()}</th>
        </thead>
        <tbody>{list_body}</tbody>
      </table>
    </div>
  );
}

export default BBsMain;
