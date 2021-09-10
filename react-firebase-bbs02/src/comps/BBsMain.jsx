import React, { useCallback, useEffect, useState } from "react";
import "../css/MainNav.css";
import { firestore } from "../config/firebaseConfig";
import { useHistory } from "react-router-dom";

function BBsMain() {
  //fireFetch 함수
  let [bbsData, setBBsData] = useState([]);
  /**
   * 칼럼으로 정렬하기
   * collection("").orderBy("컬럼명") 컬럼명으로 오름차순
   * collection("").orderBy("컬럼","desc") 컬럼명으로 내림차순 정렬
   *
   * collection.where() 조건지정이 가능하다
   *
   * 조건지정을 할때는  <, > , =(부등호)  가 들어가는 조건을 사용할 경우에는 반드시 해당 컬럼을 먼저 정렬해주어야한다
   *
   * for exemple )
   * collection.orderBy("b_date").where("b_date" > "2021-09-01")
   *
   * orderBy() 두개이상의 컬럼에 지정할경우
   * firestaore 콘솔에서 복합 색인을 추가해주어야한다
   *
   * orderBy로 지정되는 컬럼은 무조건 NotNull 이어야한다
   * order("b_subject") b_subject 칼럼을 기준으로  오름차순을 수행했는데
   * 만약 일부 데이터에 b_subject 칼럼의 데이터가 없으면 null 등 해당 데이터는 리스트에없다
   * 리스트 확인에서 orderBY를 사용해야 할 경우
   * 해당 컬럼은 not null 이라고 보면된다
   *
   */
  const router_history = useHistory();
  // eslint-disable-next-line
  const firebaseFetch = async () => {
    const result = await firestore
      .collection("Bbs")
      //   .orderBy("b_date", "desc") //내림차순
      .orderBy("b_time", "desc") //내림차순
      .get();
    //    fetch를 사용했기때문에 result결과가나온다
    // bbs의 리스트들을 독에 맵을 이용하여 반복한다
    const bbsList = result.docs.map((doc) => {
      /** firestare로 부터 수신된 데이터 중에서 실제 BBS 데이터객체만 추출하여 bbsList배열로만들기  */
      // 데이터 하나씩 추출하여 리턴한다 =>doc.data()
      const id = doc.id;
      //    { 객체 , 칼럼 : 값}
      //  객체에 담긴 데이터를 펼치고 복제하여 return을 수행한다
      // return 하기전에 id 칼럼을 추가하고 거기에 id 변수에 담긴 값을 저장
      return {
        ...doc.data(),
        id: id,
      };
    });
    // bbsList를 setBBsData
    setBBsData(bbsList);
  };
  //콘솔에 로그 경고 삭제
  // 문법상 권장하는 사항
  const fetchCallback = useCallback(firebaseFetch, []);
  useEffect(fetchCallback, [fetchCallback]);
  const bbsBody = bbsData.map((Bbs) => {
    return (
      <tr
        key={Bbs.id}
        data-id={Bbs.id}
        onClick={(e) => {
          const id = e.target.closest("TR").dataset.id;
          // alert("안녕" + id);
          //write URL에 id 값을 가지고 redirect를 수행하라
          //detail url로 넘어가기
          router_history.push(`/detail/${id}`);
        }}
      >
        <td>{Bbs.b_date}</td>
        <td>{Bbs.b_time}</td>
        <td>{Bbs.b_writer}</td>
        <td>{Bbs.b_subject}</td>
      </tr>
    );
  });
  return (
    <div className="bbsMain_list">
      <table className="bbs_list">
        <thead>
          <tr>
            <th>DATA</th>
            <th>TIME</th>
            <th>WRITER</th>
            <th>SUBJECT</th>
          </tr>
        </thead>
        <tbody>{bbsBody}</tbody>
      </table>
    </div>
  );
}

export default BBsMain;
