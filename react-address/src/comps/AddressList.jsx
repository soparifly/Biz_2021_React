import React from "react";
import "./css/ListCss.css";

const AddressList = ({ addrBook }) => {
  const viewList = addrBook.map((addr, index) => {
    return (
      <tr key={addr.a_id}>
        <td>{index + 1}</td>
        <td>{addr.a_name}</td>
        <td>{addr.a_addr}</td>
        <td>{addr.a_tel}</td>
        <td>{addr.a_age}</td>
      </tr>
    );
  }); //map end

  return (
    <table className="list_table">
      <thead>
        <tr>
          <th>NO.</th>
          <th>이름</th>
          <th>주소</th>
          <th>전화</th>
          <th>나이</th>
        </tr>
      </thead>
      <tbody>{viewList}</tbody>
    </table>
  );
};

export default AddressList;
