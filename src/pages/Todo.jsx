import React from "react";
import TodoList from "../components/TodoList";

const Todo = ({ todos, setTodos }) => {
  return (
    <>
      <TodoList todos={todos} setTodos={setTodos} />
    </>
  );
};

export default Todo;
