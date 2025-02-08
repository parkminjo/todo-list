import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeBoolean, deleteTodo } from "../redux/TodosSlice";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";

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
            <ButtonBox>
              <S.CheckBoxInput
                type="checkbox"
                checked={todo.type}
                onChange={() => {
                  dispatch(changeBoolean(todo.id));
                }}
              />
              <ContentText $fontWeight="500">{todo.content}</ContentText>
            </ButtonBox>

            <ButtonBox $gap="0">
              <S.Button
                $color="#5297FB"
                onClick={() => navigate(`/todo-input?id=${todo.id}`)}
              >
                <FontAwesomeIcon icon={faPen} />
              </S.Button>
              <S.Button onClick={() => dispatch(deleteTodo(todo.id))}>
                <FontAwesomeIcon icon={faTrash} />
              </S.Button>
            </ButtonBox>
          </S.TodoCardBox>
        );
      })}
    </>
  );
};

export default TodoItem;
