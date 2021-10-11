import React from 'react';
import { useTodoContext } from './context/AppContextProvider';
const TodoItem = ({ todo }) => {
  const { listDelete, onCompClick } = useTodoContext();
  // eslint-disable-next-line
  const { t_id, t_text, t_comp } = todo;

  return (
    <div className="todo_item">
      <div className="todo_delete" onClick={listDelete} data-todo-id={t_id}>
        &times;
      </div>
      <div
        className={`todo_text ${t_comp && 'checked'}`}
        onClick={onCompClick}
        data-todo-id={t_id}
      >
        {t_id}
      </div>
      {t_text}
      {t_comp && <div className="check_mark">&#x2713;</div>}
    </div>
  );
};

export default TodoItem;
