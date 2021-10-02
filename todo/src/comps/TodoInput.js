import React from "react";
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./css/InputCSS.css";
import TodoItem from "./TodoItem";
const TodoInput = () => {
  return (
    <div className="inputBox">
      <Stack direction="horizontal" gap={3}>
        <Form.Control className="me-auto" placeholder="Add your item here..." />
        <Button variant="secondary">Add</Button>
        <div className="vr" />
      </Stack>
    </div>
  );
};

export default TodoInput;
