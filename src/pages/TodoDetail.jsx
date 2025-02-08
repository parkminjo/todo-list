import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ToastContainer } from "react-toastify";

import {
  Button,
  ButtonBox,
  ContentText,
  TitleText,
} from "../styled-components/global/CommonStyle";
import { TodoDetailStyle as S } from "../styled-components/general/TodoDetailStyle";

const TodoDetail = ({ todos, setTodos }) => {
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const queryId = parseInt(searchParams.get("id"));

  const detailTodo = todos.find((todo) => todo?.id === queryId) || {};

  const {
    id = null,
    category = null,
    content = null,
    date = null,
    type = null,
    endDate = null,
  } = detailTodo;

  /** todo 삭제 함수 */
  const deleteTodo = (targetId) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== targetId));
    navigate("/todo");
  };

  /** 완료 여부 변환 함수 */
  const changeTrueOrFalse = (targetId) => {
    setTodos((prev) =>
      prev.map((todo) => {
        return todo.id === targetId
          ? { ...todo, type: !todo.type, endDate: new Date() }
          : todo;
      })
    );
  };

  /** 할일 정보 페이지 UI */
  return (
    <S.TodoDetailContainer>
      <S.BackButton onClick={() => navigate("/todo")}>
        <FontAwesomeIcon icon={faX} />
      </S.BackButton>

      <ContentText $marginBottom="10px">카테고리: {category}</ContentText>
      <TitleText $marginBottom="20px">{content}</TitleText>

      <ContentText $marginBottom="10px">
        시작 시간: {new Date(date)?.toLocaleString("ko-KR", "UTC")}
      </ContentText>
      {type && (
        <ContentText $marginBottom="20px">
          종료 시간: {new Date(endDate).toLocaleString("ko-KR", "UTC")}
        </ContentText>
      )}

      <ButtonBox>
        <Button
          $bgColor="#F95454"
          $hoverBgColor="#f43232"
          onClick={() => {
            deleteTodo(id);
            navigate(-1);
          }}
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
      </ButtonBox>
      <ToastContainer />
    </S.TodoDetailContainer>
  );
};

export default TodoDetail;
