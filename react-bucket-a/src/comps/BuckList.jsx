import React from "react";
import BuckItem from "./BuckItem";

const tablestyle = { tableLayout: `fixed` };

function BuckList(props) {
  /**
   *부모 컴포넌트로 부터 전달받은 bucketList를
   * 사용하기 위해 변수로 선언하기
   *
   * BucketMain에서 보낸 배열변수와 2개의 함수를
   * props로 부터 분리해 내기
   *
   */
  const { bucketList } = props.args;
	const buckBody = bucketList.map((bucket) => {
	  /**
	   * item 컴포넌트를 작성하여 args 와 bucket을 전달해서 Body를 만듬
	   */
    return (
      <BuckItem
        args={props.args}
        bucket={bucket}
        // flag_change={flag_change}
        // bucket_update={bucket_update}
      />
    );
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
