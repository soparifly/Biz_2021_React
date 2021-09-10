/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { firestore } from "../config/firebaseConfig.js";
import { useState, useCallback } from "react";
import moment from "moment";
import "../css/write.css";
import { useHistory, useRouteMatch } from "react-router-dom";
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
 * react - router - dom 최신버젼에서는 매개변수를 지정하지 않고 use함수를 사용하여 history 를 사용할 수 있다
 * react use 로 시작되는 함수들을 Hook 함수 라고 한다
 * Hook 함수 : 가로채기 함수, 시스템(react)에 의해서 자동으로 실행되거나 작동되는 일을 수행하는 함수들
 *
 */
function BBsWrite() {
  const history = useHistory();
  // URL을 통해서 전달된 데이터
  const match = useRouteMatch();
  // /write/:id로 설정된 Router에서 id 위치에 담긴 변수값
  const docId = match.params.id;
  const [Bbs, setBbs] = useState({
    b_writer: "",
    b_subject: "",
    b_content: "",
    b_date: "",
    b_time: "",
  });
  const findByidFetch = useCallback(async () => {
    if (docId) {
      const result = await firestore.collection("Bbs").doc(docId).get();
      if (result) {
        setBbs(result.data());
      }
    }
  }, [docId]);

  useEffect(findByidFetch, [findByidFetch]);
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
      b_date: Bbs.b_date || moment().format("YYYY[-]MM[-]DD"),
      b_time: Bbs.b_time || moment().format("HH:mm:ss"),
    };
    /**
     * firestore 에 데이터 저장하기
     * add()를 사용하여 저장하는데 only insert
     * doc(key).set()을 병행하여 사용하면 Update Or Insert
     */
    firestore
      .collection("Bbs")
      //   .doc(docId)
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
          <input
            name="b_writer"
            placeholder="작성자"
            onChange={onChange}
            defaultValue={Bbs.b_writer}
          />
        </div>
        <div>
          {/* tag code 내에 작성하는 주석문 */}
          {/* input tag의 onChange 이벤트 핸들러
				  input box에 데이터 (문자열)을 입력하면
				  입력된 데이터 상태 (변수, 객체)에 보관하는 역할을 한다 */}
          <input
            name="b_subject"
            placeholder="제목"
            onChange={onChange}
            defaultValue={Bbs.b_subject}
          />
        </div>
        <div className="input_content">
          <input
            name="b_content"
            placeholder="내옹"
            onChange={onChange}
            type="text"
            defaultValue={Bbs.b_content}
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
