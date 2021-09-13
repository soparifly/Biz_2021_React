import React, { useState } from "react";
import BuckInput from "./BuckInput";
import BuckList from "./BuckList";
import uuid from "react-uuid";
import moment from "moment";

function BuckMain() {
  const [bucketList, setBucketList] = useState([]);
  /**
   *
   * bucket_text 값으로 전달되어온 매개변수를
   * 아래의 기본 json 형식으로 되어있는 기본 데이터에 할당하여
   * setBucketList에 전달한다
   *
   * @param {*} bucket_text
   */
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
  /**
   *
   * 버킷리스트에서 flag 값을 지정해줄 함수
   * 버킷리스트에서 id 값을 확인하여
   * td클릭시에 b_flag 값을 1씩 추가한다
   *
   * 위에서는 대괄호를 이용한 전개연산자를 사용했으나
   * 여기서는 전개연산자 복제 필요없이 flag 값만 증가시켜
   * setBucketList에 값을 전달한다
   *
   * @param {} id
   */
  //리스트에서 Flag항목을 클릭하면 실행할 함수
  const flag_change = (id) => {
    const _bucketList = bucketList.map((bucket) => {
      // alert(bucket.b_flag);
      if (bucket.b_id === id) {
        return {
          ...bucket,
          b_flag: bucket.b_flag + 1,
        };
      } else {
        return bucket;
      }
    });
    //   원래의 bucketList를 _bucklist와 교체
    setBucketList(_bucketList);
  };
  /**
   * 리스트에서 선택한 input의 data-id값이 같으면 title값을 받아와 b_title에 할당하고
   * 리스트와 할당된 b_title을
   * 다시 bucket_update 에 setBucketList로
   * 할당하여보낸다
   * 같지않으면 아무변경없음으로 bucket을 그대로 return 한다
   */
  const bucket_update = (id, title) => {
    const _bucketList = bucketList.map((bucket) => {
      if (bucketList.b_id === id) {
        return { ...bucket, b_title: title };
      } else {
        return bucket;
      }
    });
    // 원래의 list를 새로운 리스트로 바꾸기
    setBucketList(_bucketList);
  };
  /**
   * id 값을 받아와서 bucket의 내장 id와 동일한지 확인하고
   * b_end_date 와 check 변수의 값을
   * moment 함수를 이용해 완료시간과
   * check 박스의 값을 true로 변경해주는
   *
   * @param {*} id
   */
  const bucket_complet = (id) => {
    bucketList.map((bucket) => {
      if (bucket.b_id === id) {
        return {
          ...bucket,
          b_end_date: moment().format("YYYY[-]MM[-]DD HH:mm:ss"),
          b_end_check: true,
        };
      } else {
        return bucket;
      }
    });
  };
  const args = {
    bucketList: bucketList,
    flag_change: flag_change,
    bucket_update: bucket_update,
    bucket_complet: bucket_complet,
  };
  return (
    <div className="w3-container-fluid">
      <BuckInput bucket_insert={bucket_insert} />
      {/* { bucket 컴포넌트에 bucketList 상태(변수) 전달하기} */}
      {/* BucketItem.jsx에서 실행할 flag_change() bucket_update()함수를 매개변수로 전달하기 */}
      <BuckList
        args={args}
        // bucketList={bucketList}
        // flag_change={flag_change}
        // bucket_update={bucket_update}
      />
    </div>
  );
}
export default BuckMain;
