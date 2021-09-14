import React from "react";
import BuckItem from "./BuckItem";

const tablestyle = { tableLayout: `fixed` };

function BuckList(props) {
  const { bucketList } = props.args;
  const buckBody = bucketList.map((bucket) => {
    return <BuckItem args={props.args} bucket={bucket} />;
  });
  // 부모 컴퍼넌트로 전달받은 bucketList를 사용하기위해 변수로 선언하기
  return (
    <table className="w3-table w3-table-all w3-margin" style={tablestyle}>
      <thead>
        <tr>
          <th>FLAG</th>
          <th>DATE</th>
          <th>BUCKET</th>
          <th>COMPLETE</th>
          <th>CANSEL</th>
        </tr>
      </thead>
      <tbody>{buckBody}</tbody>
    </table>
  );
}
export default BuckList;
