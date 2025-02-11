import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changeBoolean, deleteTodo } from "../redux/TodosSlice";

import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { setUserInput } from "../redux/InputSlice";
import { TodoItemStyle as S } from "../styled-components/general/TodoItemStyle";
import {
  ButtonBox,
  ContentText,
} from "../styled-components/global/CommonStyle";

const TodoItem = ({ todos }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const moveToDetailPage = (e, id) => {
    if (e.currentTarget !== e.target) return;
    navigate(`/detail?id=${id}`);
  };

  const handleUpdate = (id) => {
    navigate(`/todo-input?id=${id}`);
    dispatch(
      setUserInput({
        category: todo.category,
        content: todo.content,
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
            onClick={(e) => moveToDetailPage(e, todo.id)}
          >
            <ButtonBox>
              <S.CheckBoxInput
                type="checkbox"
                checked={todo.isType}
                onChange={() => dispatch(changeBoolean(todo.id))}
              />
              <ContentText $fontWeight="500">{todo.content}</ContentText>
            </ButtonBox>

            <ButtonBox $gap="0">
              <S.Button
                name="update"
                $color="#5297FB"
                onClick={() => handleUpdate(todo.id)}
              >
                <FontAwesomeIcon icon={faPen} />
              </S.Button>
              <S.Button
                name="delete"
                onClick={() => dispatch(deleteTodo(todo.id))}
              >
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
