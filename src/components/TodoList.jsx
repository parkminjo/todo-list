import React from "react";
import TodoItem from "./TodoItem";
import { TodoListStyle as S } from "../styled-components/general/TodoListStyle";
import { TitleText } from "../styled-components/global/CommonStyle";
import { useSelector } from "react-redux";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);

  const incompleteTodos = todos.filter((todo) => todo.type === false);
  const completeTodos = todos.filter((todo) => todo.type);

  /** 할 일 리스트 UI */
  return (
    <S.Container>
      <S.TodoListContainer>
        <TitleText $fontWeight="500" $marginBottom="20px">
          Doing
        </TitleText>
        <TodoItem todos={incompleteTodos} />
      </S.TodoListContainer>

      <S.TodoListContainer>
        <TitleText>Done</TitleText>
        <TodoItem todos={completeTodos} />
      </S.TodoListContainer>
    </S.Container>
  );
};

export default TodoList;
