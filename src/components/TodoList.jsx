import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, setTodos }) => {
  const incompleteTodos = [...todos].filter((todo) => todo.type === false);
  const completeTodos = [...todos].filter((todo) => todo.type === true);

  /** 할 일 리스트 UI */
  return (
    <Container>
      <Div>
        <h1>Doing</h1>
        <TodoListContainer>
          <TodoItem todos={incompleteTodos} setTodos={setTodos} />
        </TodoListContainer>
      </Div>
      <Div>
        <h1>Done</h1>
        <TodoListContainer>
          <TodoItem todos={completeTodos} setTodos={setTodos} />
        </TodoListContainer>
      </Div>
    </Container>
  );
};

export default TodoList;

const Container = styled.div`
  display: flex;
  gap: 1rem;
`;

const Div = styled.div`
  text-align: center;
`;

const TodoListContainer = styled.div`
  width: 350px;
  min-height: 450px;
  background-color: white;
  border-radius: 1rem;
  margin-top: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 2rem;
`;
