import React from "react";

const TodoItem = ({ text }) => {
  return (
    <div>
      <div>&times;</div>
      <div>{text}</div>
      <div>&#x2713;</div>
    </div>
  );
};

export default TodoItem;
