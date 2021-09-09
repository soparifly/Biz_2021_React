import React from "react";
import "../css/write.css";
function write() {
  return (
    <div className="write">
      <div className="input_box">
        <label>작성자</label>
        <input name="b_writer" placeholder="작성자" />
        <label>제목</label>
        <input name="b_subject" placeholder="제목" />
        <label>내용</label>
        <input name="b_content" placeholder="내옹" />
      </div>
      <div className="btn_box">
        <button>올리기</button>
      </div>
    </div>
  );
}

export default write;
