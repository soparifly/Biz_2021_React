import moment from "moment";
import React, { useState } from "react";

const b_flag_text = ["일반", "중요", "매우중요", "긴급"];

/**
 * {bucket}
 * props.bucket을 직접 사용하도록 변수 생성하기
 * @param {*} param0
 * @returns
 */
function BuckItem({ args, bucket }) {
  const { flag_change, bucket_complet, bucket_update, bucket_cancel } = args;
  const [b_update, setB_update] = useState({
    b_title: "",
    isEdit: false,
  });

  //   e.current.target -> 대상 : 직접 이벤트가 설정된 태그
  const onItemClick = (e) => {
    const itemTr = e.currentTarget;
    let b_id = itemTr.dataset.id;
    const itemTd = e.target;
    b_id = e.target.closest("TR").dataset.id;

    if (itemTd.tagName === "TD") {
      const className = itemTd.className;
      if (itemTd.className.includes("b_flag")) {
        flag_change(b_id);
      } else if (className.includes("b_title")) {
        setB_update({
          b_title: bucket.b_title,
          isEdit: true,
        });
      } else if (className.includes("b_end_date")) {
        //완료 취소하기
        //   완료 취소창으로 물어보기
        const message = bucket.b_end_check
          ? "완료를 취소합니다"
          : "완료했습니까?";
        if (window.confirm(message)) {
          bucket_complet(b_id);
        }
      }
    }
    if (itemTd.tagName === "INPUT" && itemTd.type === "checkbox") {
      bucket_cancel(b_id);
    }
  };
  const bucket_KeyDown = (e) => {
    if (e.keyCode === 13) {
      const b_title = e.target.value;
      const b_id = e.target.closest("TR").id;
      //   alert(b_id);
      setB_update({ ...b_update, isEdit: false });
      bucket_update(b_id, b_title);
    } else if (e.keyCode === 27) {
      setB_Update({ ...b_update, isEdit: false });
    }
  };
  return (
    <tr
      className={bucket.b_cancel ? "cancel" : ""}
      key={bucket.b_id}
      data-id={bucket.b_id}
      onClick={onItemClick}
    >
      <td className="b_flag">{b_flag_text[bucket.b_flag % 4]}</td>
      <td className="b_start_date">{bucket.b_start_date}</td>
      {b_update.isEdit ? (
        <td className="b_title">
          <input onKeyDown={bucket_KeyDown} defaultValue={b_update.b_title} />
        </td>
      ) : (
        <td className="b_title">{bucket.b_title}</td>
      )}
      {bucket.b_end_check ? (
        <td className="b_end_date">{bucket.b_end_date}</td>
      ) : (
        <td className="b_end_date">O</td>
      )}
      <td>
        <input type="checkbox" checked={bucket.b_cancel} />
      </td>
    </tr>
  );
}

export default BuckItem;
