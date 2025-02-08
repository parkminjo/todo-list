import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeBoolean, deleteTodo } from "../redux/TodosSlice";

import {
  ButtonBox,
  ContentText,
} from "../styled-components/global/CommonStyle";
import { TodoItemStyle as S } from "../styled-components/general/TodoItemStyle";

const TodoItem = ({ todos }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
                checked={todo.type}
                onChange={() => {
                  dispatch(changeBoolean(todo.id));
                }}
              />

              <S.DeleteButton onClick={() => dispatch(deleteTodo(todo.id))}>
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
