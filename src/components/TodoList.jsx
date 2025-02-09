import React from "react";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

import { TodoListStyle as S } from "../styled-components/general/TodoListStyle";
import { TitleText } from "../styled-components/global/CommonStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);

  const incompleteTodos = todos.filter((todo) => todo.isType === false);
  const completeTodos = todos.filter((todo) => todo.isType);

  /** 할 일 리스트 UI */
  return (
    <S.Container>
      <S.TodoListContainer>
        <S.Header>
          <TitleText $fontSize="16px" $fontWeight="600">
            TO DO ({incompleteTodos.length})
          </TitleText>
          <S.AddButton to={"/todo-input"}>
            <FontAwesomeIcon icon={faPlus} />
          </S.AddButton>
        </S.Header>
        <TodoItem todos={incompleteTodos} />
      </S.TodoListContainer>

      <S.TodoListContainer>
        <S.Header>
          <TitleText $fontSize="16px" $fontWeight="600">
            COMPLETE ({completeTodos.length})
          </TitleText>
        </S.Header>
        <TodoItem todos={completeTodos} />
      </S.TodoListContainer>
    </S.Container>
  );
};

export default TodoList;
