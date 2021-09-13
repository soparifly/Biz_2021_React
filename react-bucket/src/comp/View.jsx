import React from "react";
import "./css/main.css";
function View() {
  return (
    <div className="todo_view">
      <table className="todo_table">
        <thead>
          <tr>
            <th>FLAG</th>
            <th>DATE</th>
            <th>BUCKET</th>
            <th>COMPLETE</th>
            <th>CANCEL</th>
          </tr>
        </thead>
        <tbody>
          <td>긴급</td>
          <td>2021-09-13 09:34:66</td>
          <td>이번주에는 무엇을</td>
          <td>0</td>
          <td>취소여부</td>
        </tbody>
      </table>
    </div>
  );
}

export default View;
