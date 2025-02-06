import React from "react";
import styled from "styled-components";
import { Button, ButtonDiv } from "../styled-components/StyledComponents";

const TodoDetail = ({ todos }) => {
  return (
    <TodoDetailContainer>
      <h1>할일</h1>
      <p>시작 날짜</p>
      <p>종료 시간</p>
      <ButtonDiv>
        <Button $bgColor="#F95454" $hoverBgColor="#f43232">
          삭제
        </Button>
        <Button $bgColor="#FCCD2A" $hoverBgColor="#e8b80a">
          완료
        </Button>
      </ButtonDiv>
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

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 2rem;
`;
