import React from "react";
import { firestore } from "../config/firebaseConfig.js";
import { useState } from "react";
import moment from "moment";
import "../css/write.css";
//props.history
/**
 * react-router-dom 을 사용하여 Routiong을 구현하면
 * 메뉴에서 글쓰기를 클릭했을때 호출(Rendering)된 컴포넌트이다
 * 이때, react-router-dom 은 매개변수로 history 변수를 받는다
 * history 변수는 routing 과 관련된 변수이다
 * history.push(URL) : URL로 redirect 하라는 명령이다
 * 글쓰기를  완료하면 redirect "/"
 * @param {history} param0
 * @returns
 */
function BBsWrite({ history }) {
  const [Bbs, setBbs] = useState({
    b_write: "",
    b_subject: "",
    b_content: "",
  });
  /*
	onChange Event 핸들러
	키보드로 입력한 데이터를 Bbs 객체에 Setting 하는 일을 수행한다
	*/
  const onChange = (e) => {
    const { value, name } = e.target;
    setBbs({ ...Bbs, [name]: value });
  };
  const onClickSave = () => {
    // const str = JSON.stringify(Bbs);
    // alert(str);
    const saveBBS = {
      ...Bbs,
      b_date: moment().format("YYYY[-]MM[-]DD"),
      b_time: moment().format("HH:mm:ss"),
    };
    /**
     * firestore 에 데이터 저장하기
     * add()를 사용하여 저장하는데 only insert
     * doc(key).set()을 병행하여 사용하면 Update Or Insert
     */
    firestore
      .collection("Bbs")
      .add(saveBBS)
      // .doc("")
      .then((result) => {
        console.log(result);
        history.push("/");
      });
  };
  return (
    <div className="write_box">
      <div className="input_box">
        <div>
          <input name="b_writer" placeholder="작성자" onChange={onChange} />
        </div>
        <div>
          {/* tag code 내에 작성하는 주석문 */}
          {/* input tag의 onChange 이벤트 핸들러
				  input box에 데이터 (문자열)을 입력하면
				  입력된 데이터 상태 (변수, 객체)에 보관하는 역할을 한다 */}
          <input name="b_subject" placeholder="제목" onChange={onChange} />
        </div>
        <div className="input_content">
          <input
            name="b_content"
            placeholder="내옹"
            onChange={onChange}
            type="text"
          />
        </div>
      </div>
      <div className="btn_box">
        <button onClick={onClickSave}>올리기</button>
      </div>
    </div>
  );
}

export default BBsWrite;
