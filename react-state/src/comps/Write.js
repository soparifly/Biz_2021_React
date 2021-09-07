import React from "react";
import "./Write.css";
// 완전 축약형
/**
 *  props를 생략하고 사용할수 있다 .
 *
 * @param {*} param0
 * @returns
 *
 * Write = ({bbs, onBBsChange}) 코드는
 * Write =(props)=>{
 * 	const {bbs,onBBsChange}=props}
 * }
 * 코드를 한번에 처리한것이다.
 */
const Write = ({ bbs, onBBsChange }) => {
  // bbs는 객체이다 아래와 같이사용하면 완전분해가 가능하다
  // 매개변수로 전달받은 변수중에서 선택적으로 사용이가능하다
  const { b_date, b_time, b_writer, b_subject, b_content } = bbs;
  /**
   * App.js에서 전달받은 상태(bbsVO를 bbs로 받음)는
   * 전달받아서 매개변수로부터 추출하는 순간 상태의 기능을 상실한다
   * 고정된(Readonly)형태의 properties(props)가 되어버린다
   * props가 된 변수 객체는 보여주는 (UI)용도로는 사용할수 있지만
   * 값을 변경하는것은 불가능해진다
   *
   * 값을 변경하려고 시도를 하면 오류가 발생한다
   *
   * 상태(변수, 객체)는 반드시 선언된 컴포넌트에서만 변경이가능하다
   * 입력은 Write.js에서 실행하지만 입력된 데이터를 전파하기위해서는 App.js에게 상태를 변경해달라고 요청해야한다
   *
   * 이러한 기능을 해결하기 위해서는 App.js에 상태를 변경하는 함수를 선언하고
   * 그 함수를 다시 하위 (Write.js)컴포넌트에게 전달하여
   * 대리실행하도록 코드를 작성해야한다
   *
   *
   */
  return (
    <div className="bbs_write_form">
      <div>
        <label>작성일자</label>
        <input
          name="b_date"
          type="date"
          defaultValue={b_date}
          onChange={onBBsChange}
        />
      </div>
      <div>
        <label>작성시각</label>
        <input
          name="b_time"
          type="time"
          defaultValue={b_time}
          onChange={onBBsChange}
        />
      </div>
      <div>
        <label>글쓴이</label>
        <input
          name="b_writer"
          type="text"
          defaultValue={b_writer}
          onChange={onBBsChange}
        />
      </div>
      <div>
        <label>제목</label>
        <input
          name="b_subject"
          type="text"
          defaultValue={b_subject}
          onChange={onBBsChange}
        />
      </div>
      <div>
        <label>내용</label>
        <input
          name="b_content"
          type="text"
          defaultValue={b_content}
          onChange={onBBsChange}
        />
      </div>
    </div>
  );
};

export default Write;
