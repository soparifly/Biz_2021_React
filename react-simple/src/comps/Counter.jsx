import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const 증가 = () => {
    setCount(count + 1);
  };
  const 감소 = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <div>카운트 : {count}</div>
      <div>
        <button onClick={증가}>증가</button>
        <button onClick={감소}>감소</button>
      </div>
    </div>
  );
}

export default Counter;
