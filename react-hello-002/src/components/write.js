import React from "react";

const write = (props) => {
  const { friend, onChange } = props;
  return (
    <div>
      <p>
        <input name="f_name" defaultValue={friend.f_name} onChange={onChange} />
      </p>
      <p>
        <input name="f_addr" defaultValue={friend.f_addr} onChange={onChange} />
      </p>
    </div>
  );
};

export default write;
