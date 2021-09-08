import React from "react";
import { useState } from "react";
//JS 코드에 전반적으로 사용되는 날짜 시간 등을 관리하는 라이브러리
import moment from "moment";
import UUID from "react-uuid";
/**
 * headArray 에 있는 배열 항목을 map 을 통해서 text에 주입하고
 * forEach 를 통해서 <th>"날짜"<th> 로 표현한다
 *
 */
const headArray = ["날짜", "시간", "기억할일"];

const rem_header = () => {
  /**
   * 제목 배열을 map()를 이용하여 forEach하기
   */
  return headArray.map((text) => {
    //제목배열의 요소인 문자열을 포함하는 th tag를 생성하여 return
    return <th>{text}</th>;
  });
};

const rememberSampleData = {
  r_id: "0001",
  r_date: "2021-09-08",
  r_time: "10:10:10",
  r_remember: "나의 리멤버 리스트",
  r_comp: false, //완료 여부
};

function RemList() {
  /**
   * rememberList를 담을 '배열'을 상태로 선언하기
   */
  const [rememberList, setRememberList] = useState([]);
  /**
   * memberList가 가지고있는 배열요소들은 배열이 아닐때 없는요소가된다
   * 그래서 배열로지정해줌
   */

  /**
   * list중 한 요소를 더블클릭하면
   * 1.삭제하기
   * 2.선택된 요소의 UUI값을 추출하여 해당 요소의 r_comp값을 완료된것으로 표시하기
   * @param {*} e
   */
  const trOnClick = (e) => {
    const td = e.target;
    if (td.tagName === "TD") {
      const uuid = td.closest("TR").dataset.uuid;
      //   alert(uuid);
      /**리스트에서 선택된 요소의 UUID값이 담긴것만 제외하고(filtering) 새로운 복제 _list를 덮어씌우기 */
      //   const _list = rememberList.filter((remember) => {
      // return remember.r_id !== uuid;
      //   });
      // filtering된 list를 rememberList로 대체하기
      const _list = rememberList.map((remember) => {
        if (remember.r_id === uuid) {
          return { ...remember, r_comp: !remember.r_comp };
        }
        return remember;
      });

      setRememberList([..._list]);
    }
  };
  const list_body = rememberList.map((remember) => {
    return (
      //tr을쓰는이유 rememberList가 tr을 포함하여야하기때문
      <tr
        data-uuid={remember.r_id}
        className={remember.r_comp ? "comp" : ""}
        onDoubleClick={trOnClick}
      >
        <td>{remember.r_date}</td>
        <td>{remember.r_time}</td>
        <td>{remember.r_remember}</td>
      </tr>
    );
  });
  /**
   * input box 입력을 하는 과정에서 Enter를 누르면
   * 데이터를 어딘가에 추가하기
   * @param {} e
   */
  const onKeyDown = (e) => {
    // 키보드로 입력하고 Enter키를 누르면
    if (e.keyCode === 13) {
      //   현재까지 입력된 문자열들을 추축한다
      //   이때 문자열은 input box의 value 속성에 담겨있다
      const { value } = e.target;
      // alert("입력" + value);
      // input box에 입력된 문자열을 rememberList에 담기 위해서 객체로 생성
      const remember = {
        r_id: UUID(),
        // moment()를 사용하여 현재 시스템의 날짜와 시간가져오기
        r_date: moment().format("YYYY[-]MM[-]DD"),
        r_time: moment().format("HH:mm:ss"),
        //target으로 뽑아낸 remember 의 value값
        r_remember: value,
        r_comp: false,
      };
      // 생성된 remember 객체 데이터를 rememberList상태에 추가하기
      // 상태함수 setRememberList()
      setRememberList([...rememberList, remember]);
      e.target.value = "";
      // 전개연산자를 사용하지않고 concat 사용하기
      // setRememberList(remember.concat(remember));
    }
  };
  return (
    <table className="rem_list">
      <th>{rem_header()}</th>
      <tbody>
        {list_body}
        <tr>
          <td conspan="3">기억할일</td>
          <td>
            <input
              onKeyDown={onKeyDown}
              name="r_remember"
              placeholder="기억할일"
            />
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default RemList;
