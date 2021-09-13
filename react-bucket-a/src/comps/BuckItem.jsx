import React, { useState } from "react";

const b_flage_text = ["일반", "중요", "매우중요", "긴급"];

/**
 * {bucket}
 * props.bucket을 직접 사용하도록 변수 생성하기
 * @param {*} param0
 * @returns
 */
function BuckItem({ args, bucket }) {
  const { flag_change, bucket_complet, bucket_update } = args;
  const [b_update, setB_update] = useState({
    b_title: "",
    isEdit: false,
  });

  const bucket_KeyDown = (e) => {
    if (e.keyCode === 13) {
      const b_title = e.target.value;
      const b_id = e.target.closest("TD").id;
      //   alert(b_id);
      setB_update({ ...b_update, isEdit: false });
      bucket_update(b_id, b_title);
    }
  };

  return (
    <tr key={bucket.b_id}>
      <td
        //   onClick={flag_change} : 단순히 flag_change 함수를 호출
        //   flag_change 에 id 에 매개변소루 전달하기위한 코드
        onClick={() => flag_change(bucket.b_id)}
      >
        {b_flage_text[bucket.b_flag % 4]}
      </td>
      <td>{bucket.b_start_date}</td>
      {/* 버킷 text가 담겨있는 tdbox */}
      {/* tdBox를 클릭하면 isEdit 변수값을 true로 변경하기 */}
      <td
        data-id={bucket.b_id}
        onClick={() => {
          setB_update({
            // ...b_update,
            isEdit: true,
            b_title: bucket.b_title,
            // 놓침
          });
        }}
      >
        {/* tdBox 클릭되고 isEdit가 true가 되면 input박스 보이기
			  inputbox에 원래 버킷의 text를 보여라 */}
        {b_update.isEdit ? (
          <input onKeyDown={bucket_KeyDown} defaultValue={b_update.b_title} />
        ) : (
          <span>{bucket.b_title}</span>
        )}
      </td>
      <td
        onClick={() => {
          bucket_complet(bucket.b_id);
        }}
      >
        {bucket.b_end_date}
      </td>
      <td>
        <input type="checkbox" />
      </td>
    </tr>
  );
}

export default BuckItem;
