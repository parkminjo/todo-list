import React, { useEffect } from "react";
import styled from "styled-components";
import { Button, ButtonDiv } from "../styled-components/StyledComponents";
import { useNavigate, useSearchParams } from "react-router-dom";

import { toast, ToastContainer } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

const TodoDetail = ({ todos, setTodos }) => {
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const queryId = parseInt(searchParams.get("id"));

  const detailTodo = todos.find((todo) => todo.id === queryId);

  const { id, category, content, date, type } = detailTodo;

  /** todo 삭제 함수 */
  const deleteTodo = (targetId) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== targetId));
    navigate("/todo");
  };

  /** 완료 여부 변환 함수 */
  const changeTrueOrFalse = (targetId) => {
    setTodos((prev) =>
      prev.map((todo) => {
        return todo.id === targetId ? { ...todo, type: !todo.type } : todo;
      })
    );
  };

  /** 할일 정보 페이지 UI */
  return (
    <TodoDetailContainer>
      <BackButton onClick={() => navigate("/todo")}>
        <FontAwesomeIcon icon={faX} />
      </BackButton>

      <P>카테고리: {category}</P>
      <H1>{content}</H1>
      <P>시작 시간: {date.toLocaleString("ko-KR", "UTC")}</P>
      {type && <P>종료 시간: {new Date().toLocaleString("ko-KR", "UTC")}</P>}

      <ButtonDiv>
        <Button
          $bgColor="#F95454"
          $hoverBgColor="#f43232"
          onClick={() => deleteTodo(id)}
        >
          삭제
        </Button>
        <Button
          $bgColor="#FCCD2A"
          $hoverBgColor="#e8b80a"
          onClick={() => changeTrueOrFalse(id)}
        >
          {type ? "취소" : "완료"}
        </Button>
      </ButtonDiv>
      <ToastContainer />
    </TodoDetailContainer>
  );
};

export default TodoDetail;

const TodoDetailContainer = styled.div`
  width: 600px;
  min-height: 450px;
  background-color: white;
  border-radius: 1rem;
  margin-top: 10px;
  position: absolute;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 2rem;
`;

const BackButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 20px;
  color: #121212;
  cursor: pointer;

  position: absolute;
  top: 20px;
  right: 20px;

  &:hover {
    color: #7e7e7e;
  }
`;

const H1 = styled.h1`
  margin-bottom: 10px;
  font-size: 24px;
`;

const P = styled.p`
  margin-bottom: 10px;
  font-size: 1rem;
`;
