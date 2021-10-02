import React, { useState } from "react";
import { RenderSquare, calcWinner } from "../modules/main";

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [flag, setFlag] = useState(true);
  if (calcWinner(squares)) {
    // 이 값이 null아니면 이긴상대를 표시한다
  }
  // 빈칸클릭시 변화주는 이벤트
  const change = (index) => {
    const temp_array = [...squares];
    // temp_array[index] = temp_array[index] === "A" ? "B" : "A";
    //   빈칸 클릭시 A 와 X를 번갈아가면서 표시한다
    //   flag blooean 값에따라 index에 X : O 추가하기
    //  빈칸을 클릭했을때 처음은 A가 나오게하고 다음은 B가 나오게한다
    // const temp_array = [...squares];
    if (calcWinner(squares)) return;

    setFlag(!flag);
    if (temp_array[index] === null) {
      temp_array[index] = flag ? "X" : "O";
    }
    setSquares(temp_array);
  };
  const player = flag ? "O" : "X";
  return (
    <div>
      <h3>다음플레이어: O {player}</h3>
      <div>
        <RenderSquare squares={squares} change={change} />
      </div>
    </div>
  );
}

export default Board;
