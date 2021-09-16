import React, { useState } from "react";
import { RenderSquare } from "../modules/main";

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  const change = (index) => {
    const temp_array = [...squares];
    index % 2 === 0 ? (temp_array[index] = "A") : (temp_array[index] = "B");
    //   : (temp_array[index] = "A");
    // temp_array[index] = "B";
    return setSquares(temp_array);
  };

  return (
    <div>
      <h3>다음플레이어: O </h3>
      <div>
        <RenderSquare squares={squares} change={change} />
      </div>
    </div>
  );
}

export default Board;
