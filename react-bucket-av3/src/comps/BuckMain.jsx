import React, { useCallback, useState, useEffect } from "react";
import BuckInput from "./BuckInput";
import BuckList from "./BuckList";
import uuid from "react-uuid";
import moment from "moment";

function BuckMain() {
  const [bucketList, setBucketList] = useState([]);

  //
  const bucketFetch = useCallback(async () => {
    const res = await fetch("http://localhost:5000/data");
    console.log(res);
    const bucketList = await res.json();
    // 수신된 데이터를 bucketList에 추가
    // console.log(bucketList);
    await setBucketList(bucketList);
    //
  }, []);

  useEffect(bucketFetch, [bucketFetch]);

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
    const fetch_option = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bucket),
    };
    fetch("http://localhost:5000/insert", fetch_option);
    bucketFetch();
  };
  useState(bucketFetch, []);
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
   * JS에서 문자열이 "" 이거나 null 이거나 undifined 이거나
   * 숫자형 변수에 담긴 값이 0 이거나 NaN 값이면
   * 변수와함께 논리연산자가 묶였을때
   * 예)
   * let 변수 = ""
   * 변수 || 와 같은 코드를 만나면 false가 된다
   * 변수 = 변수 || "대한민국"
   * 1.원래 변수에 ""이 담겨있으므로 변수 || false가 되고
   * 2. OR연산을 수행하려고 시도를 한다
   * 3. 양쪽 값이 모두 true 일때만 true가 되고 변수 || 연산은
   * false 이므로 이후에 나타나는 코드를 수행하여 좌항에 변수에 대한 민국 문자열을
   * 담게된다
   * @param {*} id
   *
   * 아그러니까 원래 값이 항목에있으면 반대편에있는 값을 담는다 이거아닌가
   *
   */
  const bucket_complet = (id) => {
    const _bucketList = bucketList.map((bucket) => {
      if (bucket.b_id === id) {
        return {
          ...bucket,
          b_end_date:
            bucket.b_end_date || moment().format("YYYY[-]MM[-]DD HH:mm:ss"),
          b_end_check: !bucket.b_end_check,
        };
      } else {
        return bucket;
      }
    });
    setBucketList(_bucketList);
  };
  const bucket_cancel = (id) => {
    const _bucketList = bucketList.map((bucket) => {
      if (bucket.b_id === id) {
        return {
          ...bucket,
          b_cancel: !bucket.b_cancel,
        };
      } else {
        return bucket;
      }
    });
    setBucketList(_bucketList);
  };
  const args = {
    bucketList: bucketList,
    flag_change: flag_change,
    bucket_update: bucket_update,
    bucket_complet: bucket_complet,
    bucket_cancel: bucket_cancel,
  };
  return (
    <div className="w3-container-fluid">
      <BuckInput bucket_insert={bucket_insert} />
      <BuckList args={args} />
    </div>
  );
}
export default BuckMain;
