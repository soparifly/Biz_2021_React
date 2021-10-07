import React from "react";
import uuid from "react-uuid";
import "./css/InputCss.css";

const AddressInput = ({ stateGroup }) => {
  const { address, setAddress, addrBook, setAddrBook } = stateGroup;

  const onChangeHandler = (e) => {
    // input 값받기
    const { name, value } = e.target;
    setAddress({ ...address, [name]: value });
  };
  const addrBookInsert = () => {
    //저장할 인풋값을 묶어서 주소록항목추가
    setAddress({ ...address, a_id: uuid() });
    setAddrBook([...addrBook, address]);
  };
  return (
    <table className="input_top">
      <thead>
        <tr></tr>
      </thead>
      <tbody>
        <tr>
          <td colSpan="6" rowSpan="4" id="title">
            주소록
          </td>
        </tr>
        <tr></tr>
        <tr></tr>
        <tr></tr>
        <tr>
          <td colSpan="2" id="No">
            No.
          </td>
          <td colSpan="5" id="name">
            <input
              value={address.a_name}
              name="a_name"
              placeholder="이름 입력"
              onChange={onChangeHandler}
              id="input_name"
            />
            귀하
          </td>
        </tr>
        <tr>
          <td rowSpan="4" id="order">
            공급자
          </td>
          <td id="tel">전화번호</td>
          <td colSpan="5">
            <input
              value={address.a_tel}
              name="a_tel"
              placeholder="전화 번호"
              onChange={onChangeHandler}
            />
          </td>
        </tr>
        <tr>
          <td>상호</td>
          <td colSpan="2"></td>
          <td>관계</td>
          <td colSpan="3">친구</td>
        </tr>
        <tr>
          <td>서식지</td>
          <td colSpan="5">
            <input
              value={address.a_addr}
              name="a_addr"
              placeholder="주소 입력"
              onChange={onChangeHandler}
              id="input_addr"
            />
          </td>
        </tr>
        <tr>
          <td>MBTI</td>
          <td>ENTP</td>
          <td>직업</td>
          <td colSpan="2">개발자</td>
        </tr>
        <tr>
          <td colSpan="2">채무</td>
          <td colSpan="3">나이 또는 생일</td>
          <td>비고</td>
        </tr>
        <tr>
          <td colSpan="2"></td>
          <td colSpan="3">
            <input
              value={address.a_age}
              name="a_age"
              placeholder="나이 입력"
              onChange={onChangeHandler}
              id="input_age"
            />
          </td>
          <td></td>
        </tr>
        <tr>
          <td colSpan="6">
            위 연락처를 저장(메모)함
            <button onClick={addrBookInsert}>추가</button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default AddressInput;
