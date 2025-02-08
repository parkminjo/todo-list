import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodoContext } from "../context/TodoContext";

import { TodoListStyle as S } from "../styled-components/general/TodoListStyle";
import { TitleText } from "../styled-components/global/CommonStyle";

const TodoList = () => {
  const { todos } = useContext(TodoContext);

  const incompleteTodos = [...todos].filter((todo) => todo.type === false);
  const completeTodos = [...todos].filter((todo) => todo.type === true);

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
        <TitleText $fontWeight="500" $marginBottom="20px">
          Done
        </TitleText>
        <TodoItem todos={completeTodos} />
      </S.TodoListContainer>
    </S.Container>
  );
};

export default TodoList;
