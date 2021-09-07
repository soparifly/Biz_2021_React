import React from "react";
//about.jsx	는 src/comp 폴더에있기때문에
// src/css 폴더에 있는 about.css 를 import하기 위한경로설정
import "../css/about.css";
function About() {
  return (
    <div className="about">
      <h1>자기소개서 </h1>
      <div>
        <label>이름</label>
        <span>이몽룡</span>
      </div>
      <div>
        <label>생년월일</label>
        <span>121212</span>
      </div>
      <div>
        <label>전화번호</label>
        <span>0102222</span>
      </div>
      <div>
        <label>주요특기</label>
        <span>빠른코딩, 안전한코딩, 클린코딩</span>
      </div>
      <div>
        <label>구현기술</label>
        <span>
          <ul>
            <li>Spring MVC</li>
            <li>Oracle DBMS</li>
            <li>MySQL DBMS</li>
            <li>HTML5</li>
            <li>CSS2 nad CSS3</li>
            <li>NodeJs Web Server</li>
            <li>MongoDB NoSQL</li>
            <li>React App</li>
            <li>Android App</li>
          </ul>
        </span>
      </div>
    </div>
  );
}

export default About;
