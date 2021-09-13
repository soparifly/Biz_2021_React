import React from "react";
import BuckItem from "./BuckItem";

const tablestyle = { tableLayout: `fixed` };

function BuckList(props) {
  const { bucketList, flag_change } = props;
  const buckBody = bucketList.map((bucket) => {
    return <BuckItem bucket={bucket} flag_change={flag_change} />;
  });
  // 부모 컴퍼넌트로 전달받은 bucketList를 사용하기위해 변수로 선언하기
  return (
    <table className="w3-table w3-table-all w3-margin" style={tablestyle}>
      <thead>
        <th>FLAG</th>
        <th>DATE</th>
        <th>BUCKET</th>
        <th>COMPLETE</th>
        <th>CANSEL</th>
      </thead>
      <tbody>{buckBody}</tbody>
    </table>
  );
}
export default BuckList;
