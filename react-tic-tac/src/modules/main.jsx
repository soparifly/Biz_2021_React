import React from "react";
const RenderSquare = (props) => {
  const { squares } = props;
  const change = props.change;
  const arrayBox = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];

  let index = 0;
  const alert_index = (e) => {
    const tagName = e.target;
    const button_Number = tagName.dataset.id;
    change(button_Number);
  };
  const buttons = arrayBox.map((subBox) => {
    // console.log(arrayBox.length);
    const buttonCols = subBox.map(() => {
      // 한라인의 button 만들기
      return (
        <button data-id={index} onClick={alert_index}>
          {squares[index++]}
        </button>
      );
    });
    // 각 라인의 컴포넌트 만들기
    return <div className="line">{buttonCols}</div>;
  });
  return buttons;
};

export { RenderSquare };
