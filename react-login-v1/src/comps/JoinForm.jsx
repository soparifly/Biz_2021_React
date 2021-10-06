import React, { useState } from "react";
// import { useUserContext } from "../context/UserContextProvider";
import "./css/JoinForm.css";
const JoinForm = () => {
  //   const { joinUser, setJoinUser } = useUserContext();
  const [joinUser, setJoinUser] = useState({
    userid: "",
    password: "",
    re_password: "",
    email: "",
  });
  const onChange = (e) => {
    setJoinUser({
      ...joinUser,
      [e.target.name]: e.target.value,
    });
  };
  //    const checkedpw = (e) => {
  //   if (e.target.value !== joinUser.rePassword) {
  //     const alert = "비밀번호 불일치";
  //   }
  // };
  //   유효성검사
  const onSubmitAccount = async (e) => {
    /**
     * 자바스크립트가 버젼이 높아지면서 아래와같이 코드를 처리하는것이 정확도가 높다
     */
    if (!joinUser?.userid) {
      alert("아이디를 입력해야합니다");
      return;
    }
    if (!joinUser.userPassword) {
      alert("비밀번호를 입력해야합니다");
      return;
    }
    if (!joinUser.rePassword) {
      alert("비밀번호 확인을 입력해주세요");
      return;
    }
    if (joinUser?.userPassword !== joinUser?.rePassword) {
      alert("비밀번호와 비밀번호 확인이 일치하지않습니다");
      return;
    }
    if (!joinUser?.useremail) {
      alert("이메일주소는 필수항목입니다");
      return;
    }
    //   };
    //   const onJoin = async () => {
    //   const joinData = {
    //     userid: joinUser.userid,
    //     userPassword: joinUser.userPassword,
    //     useremail: joinUser.useremail,
    // }
    //fetch 기본은 get으로 전송된다 , post로 보내기위해선 json 방식으로 뒤에 조건을 붙여준다
    const response = await fetch("http://localhost:8080/users/join", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      //   따로 json 을 만들어서 형변환해도된다 JSON.stringify(joinData)
      body: JSON.stringify({
        userid: joinUser.userid,
        userPassword: joinUser.userPassword,
        useremail: joinUser.useremail,
      }),
    });
    if (response?.ok) {
      //   const json = await response.join();
      //   alert(JSON.stringify(json));
      alert("가입완료");
    }
  };
  /**
   * input 박스에 value 값이 잇을때는 input박스에 onchange 이벤트를 붙여준다
   */
  return (
    <div className="join_box">
      <input
        className="join_input"
        name="userid"
        type="TEXT"
        placeholder="새로운 ID"
        onChange={onChange}
      />
      <input
        className="join_input"
        name="userPassword"
        type="password"
        placeholder="PASSWORD"
        onChange={onChange}
      />
      <input
        className="join_input"
        name="rePassword"
        type="password"
        placeholder="재입력"
        onChange={onChange}
      />
      <input
        className="join_input"
        name="useremail"
        type="email"
        placeholder="EMAIL"
        onChange={onChange}
      />
      <button
        className="join_input btn"
        onClick={onSubmitAccount}
        //   {onJoin}
      >
        회원가입
      </button>
    </div>
  );
};

export default JoinForm;
