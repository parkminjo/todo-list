import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer } from "react-toastify";

import {
  BackButton,
  Button,
  ButtonBox,
  ContentText,
  TitleText,
} from "../styled-components/global/CommonStyle";
import { TodoDetailStyle as S } from "../styled-components/general/TodoDetailStyle";
import { useDispatch, useSelector } from "react-redux";
import { changeBoolean, deleteTodo } from "../redux/TodosSlice";

const TodoDetail = () => {
  const todos = useSelector((state) => state.todos);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [searchParams] = useSearchParams();
  const queryId = parseInt(searchParams.get("id"));

  const { id, category, content, date, endDate, isType } =
    todos.find((todo) => todo?.id === queryId) || {};

  /** 할일 정보 페이지 UI */
  return (
    <S.TodoDetailContainer>
      <BackButton onClick={() => navigate(-1)}>
        <FontAwesomeIcon icon={faX} />
      </BackButton>

      <ContentText $marginBottom="10px">{category}</ContentText>
      <TitleText $marginBottom="20px">{content}</TitleText>

      <ContentText $marginBottom="10px">
        시작 시간: {new Date(date)?.toLocaleString("ko-KR", "UTC")}
      </ContentText>
      {isType && (
        <ContentText $marginBottom="20px">
          종료 시간: {new Date(endDate).toLocaleString("ko-KR", "UTC")}
        </ContentText>
      )}

      <ButtonBox>
        <Button
          $bgColor="#F95454"
          $hoverBgColor="#f43232"
          onClick={() => {
            dispatch(deleteTodo(id));
            navigate(-1);
          }}
        >
          삭제
        </Button>
        <Button
          $bgColor="#FCCD2A"
          $hoverBgColor="#e8b80a"
          onClick={() => dispatch(changeBoolean(id))}
        >
          {isType ? "취소" : "완료"}
        </Button>
      </ButtonBox>
      <ToastContainer />
    </S.TodoDetailContainer>
  );
};

export default TodoDetail;
