import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";

import {
  ButtonBox,
  ContentText,
} from "../styled-components/global/CommonStyle";
import { TodoItemStyle as S } from "../styled-components/general/TodoItemStyle";

const TodoItem = ({ todos, setTodos }) => {
  const navigate = useNavigate();

  /** todo 삭제 함수 */
  const deleteTodo = (targetId) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== targetId));
  };

  /** 완료 여부 변환 함수 */
  const changeTrueOrFalse = (targetId) => {
    setTodos((prev) =>
      prev.map((todo) => {
        return todo.id === targetId ? { ...todo, type: !todo.type } : todo;
      })
    );
  };

  /** 할 일 카드 UI */
  return (
    <>
      {todos.map((todo) => {
        return (
          <S.TodoCardBox
            key={todo.id}
            onDoubleClick={() => navigate(`/?id=${todo.id}`)}
            onClick={(e) => {
              if (e.currentTarget !== e.target) return;
              navigate(`/detail?id=${todo.id}`);
            }}
          >
            <ContentText $fontWeight="500">{todo.content}</ContentText>
            <ButtonBox $gap="0">
              <S.CheckBoxInput
                type="checkbox"
                checked={todo.type === true}
                onChange={(e) => {
                  changeTrueOrFalse(todo.id);
                }}
              />

              <S.DeleteButton onClick={() => deleteTodo(todo.id)}>
                <FontAwesomeIcon icon={faTrash} />
              </S.DeleteButton>
            </ButtonBox>
          </S.TodoCardBox>
        );
      })}
    </>
  );
};

export default TodoItem;
