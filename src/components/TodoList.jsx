import React from "react";
import styled from "styled-components";

const TodoList = ({ todos, setTodos }) => {
  return (
    <Container>
      <Div>
        <h1>Doing</h1>
        <TodoListContainer></TodoListContainer>
      </Div>
      <Div>
        <h1>Done</h1>
        <TodoListContainer></TodoListContainer>
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
`;
