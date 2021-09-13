import React, { useState } from "react";

const b_flage_text = ["일반", "중요", "매우중요", "긴급"];

/**
 * {bucket}
 * props.bucket을 직접 사용하도록 변수 생성하기
 * @param {*} param0
 * @returns
 */
function BuckItem({ bucket, flag_change }) {
  const [bucket_input, setBucketInput] = useState({
    b_title: "",
    isEdit: false,
  });

  const buck_update = (e) => {
    if (e.keyCode === 13) {
      const b_title = e.target.value;
      setBucketInput({ ...bucket_input, isEdit: false });
    }
  };
  return (
    <tr key={bucket.b_id}>
      <td
        //   onClick={flag_change} : 단순히 flag_change 함수를 호출
        //   flag_change 에 id 에 매개변소루 전달하기위한 코드
        onClick={() => flag_change(bucket.b_id)}
      >
        {b_flage_text[bucket.b_flag]}
      </td>
      <td>{bucket.b_start_date}</td>
      <td
        onClick={() => {
          setBucketInput({
            ...bucket_input,
            isEdit: !bucket_input.isEdit,
            b_title: bucket.b_title,
          });
        }}
      >
        {bucket_input.isEdit ? (
          <input onKeyDown={buck_update} defaultValue={bucket_input.b_title} />
        ) : (
          <span>{bucket.b_title}</span>
        )}
        {bucket.b_title}
      </td>
      <td>{bucket.b_end_date}</td>
      <td>
        <input type="checkbox" />
      </td>
    </tr>
  );
}

export default BuckItem;
