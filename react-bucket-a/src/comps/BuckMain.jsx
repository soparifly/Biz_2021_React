import React, { useState } from "react";
import BuckInput from "./BuckInput";
import BuckList from "./BuckList";
import uuid from "react-uuid";
import moment from "moment";

function BuckMain() {
  const [bucketList, setBucketList] = useState([]);
  //     {
  //       b_id: 0,
  //       b_flag: 0,
  //       b_start_date: "2021-09-13",
  //       b_title: "리액트 정복",
  //       b_end_date: "",
  //       b_end_check: false,
  //       g_cancel: false,
  //     },
  //     {
  //       b_id: 1,
  //       b_flag: 0,
  //       b_start_date: "2021-09-13",
  //       b_title: "추석맞이",
  //       b_end_date: "",
  //       b_end_check: false,
  //       b_cancel: false,
  //     },
  //   ]);
  const bucket_insert = (bucket_text) => {
    const bucket = {
      b_id: uuid(),
      b_start_date: moment().format("YYYY[-]MM[-]DD HH:mm:ss"),
      b_title: bucket_text,
      b_flag: 0,
      b_end_date: "",
      b_end_check: false,
      b_cancel: false,
    };
    setBucketList([...bucketList, bucket]);
  };
  const flag_change = (id) => {
    const _bucketList = bucketList.map((bucket) => {
      // alert(bucket.b_flag);
      if (bucket.b_id === id) {
        return {
          ...bucket,
          b_flag: bucket.b_flag >= 3 ? 0 : bucket.b_flag + 1,
        };
      } else {
        return bucket;
      }
    });
    //   원래의 bucketList를 _bucklist와 교체
    setBucketList(_bucketList);
  };
  return (
    <div className="w3-container-fluid">
      <BuckInput bucket_insert={bucket_insert} />
      {/* { bucket 컴포넌트에 bucketList 상태(변수) 전달하기} */}
      <BuckList bucketList={bucketList} flag_change={flag_change} />
    </div>
  );
}

export default BuckMain;
