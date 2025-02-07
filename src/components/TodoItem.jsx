import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
  ButtonBox,
  ContentText,
} from "../styled-components/global/CommonStyle";

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
          <TodoCard
            key={todo.id}
            onDoubleClick={() => navigate(`/?id=${todo.id}`)}
            onClick={(e) => {
              if (e.currentTarget !== e.target) return;
              navigate(`/detail?id=${todo.id}`);
            }}
          >
            <ContentText $fontWeight="500">{todo.content}</ContentText>
            <ButtonBox>
              <CheckBoxInput
                type="checkbox"
                checked={todo.type === true}
                onChange={(e) => {
                  changeTrueOrFalse(todo.id);
                }}
              />

              <DeleteButton onClick={() => deleteTodo(todo.id)}>
                <FontAwesomeIcon icon={faTrash} />
              </DeleteButton>
            </ButtonBox>
          </TodoCard>
        );
      })}
    </>
  );
};

export default TodoItem;

const TodoCard = styled.div`
  width: 300px;
  line-height: 40px;
  text-align: left;
  border-radius: 10px;
  padding: 5px 1rem;
  margin-bottom: 1rem;
  background-color: #f3f4f7;

  display: flex;
  justify-content: space-between;

  &:hover {
    transform: scale(1.05);
    transition: all 0.2s ease-in-out;
  }
`;

const CheckBoxInput = styled.input`
  width: 16px;
  border: 1px solid #c5cdd5;
  background-color: transparent;
`;

const DeleteButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 16px;
  color: #777777;

  &:hover {
    color: #f85453;
  }
`;
