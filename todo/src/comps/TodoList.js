import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import "./css/ListCSS.css";
import TodoItem from "./TodoItem";
const TodoList = () => {
  const { todoList } = useTodoContext();
  const viewList = todoList.map(({ t_id, t_text, t_isComplete }) => {
    return <TodoItem key={t_id} text={t_text} checked={t_isComplete} />;
  });
  return (
    <div class="todoList">
      <ListGroup>
        <ListGroup.Item action variant="info">
          {viewList}
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default TodoList;
