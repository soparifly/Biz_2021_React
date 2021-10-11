import React from 'react';
import { useTodoContext } from './context/AppContextProvider';
const TodoInput = () => {
  const { inputId, todo, onChange, onClick, onKeyPress } = useTodoContext();
  return (
    <div>
      <input
        onChange={onChange}
        ref={inputId}
        value={todo.t_text}
        onKeyPress={onKeyPress}
      />
      <div className="btn_insert" onClick={onClick} onKeyPress={onKeyPress}>
        추가
      </div>
      <p>{TodoInput.t_text}</p>
    </div>
  );
};

export default TodoInput;
