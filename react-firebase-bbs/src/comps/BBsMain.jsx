import React, { useEffect, useState } from "react";
import "../css/MainNav.css";
import { firestore } from "../config/firebaseConfig";

function BBsMain() {
  let [bbsBody, setBBsBody] = useState([]);

  const firebaseFetch = () => {
    firestore
      .collection("Bbs")
      .get()
      .then((bbsList) => {
        bbsList.forEach((Bbs) => {
          const item = Bbs.data();
          setBBsBody([
            ...bbsBody,
            <tr>
              <td>{item.b_date}</td>
              <td>{item.b_time}</td>
              <td>{item.b_writer}</td>
              <td>{item.b_subject}</td>
            </tr>,
          ]);
        });
      });
  };
  useEffect(firebaseFetch, []);
  return (
    <div className="bbsMain_list">
      <table className="bbs_list">
        <thead>
          <tr>
            <th>DATA</th>
            <th>TIME</th>
            <th>WRITER</th>
            <th>SUBJECT</th>
          </tr>
        </thead>
        <tbody>{bbsBody}</tbody>
      </table>
    </div>
  );
}

export default BBsMain;
