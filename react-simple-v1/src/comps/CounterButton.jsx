import React, { useState } from "react";
import CountView from "./CountView";

const CounterButton = () => {
  const [count, setCount] = useState(0);
  const 증가 = () => {
    setCount(count + 1);
  };
  const 감소 = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <button onClick={증가}>증가</button>
      <button onClick={감소}>감소</button>
      <CountView fo={count} />
    </div>
  );
};

export default CounterButton;
