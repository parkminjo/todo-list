import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "../styled-components/StyledComponents";
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const TodoForm = ({ setTodos }) => {
  const [searchParams] = useSearchParams();
  const queryId = parseInt(searchParams.get("id"));
  const navigate = useNavigate();

  /** 사용자 입력값 state */
  const [userInput, setUserInput] = useState({
    category: "",
    content: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setUserInput({ ...userInput, [id]: value });
  };

  /** 할 일 추가 or 수정 함수 */
  const handleAddUpdate = (e) => {
    e.preventDefault();

    if (userInput.category === "" || userInput.content === "") {
      toast.error("값을 모두 입력해주세요");
      return;
    }
    if (!queryId) {
      setTodos((prev) => [
        ...prev,
        {
          ...userInput,
          id: new Date().getTime(),
          type: false,
          date: new Date(),
        },
      ]);
    } else {
      setTodos((prev) =>
        prev.map((todo) => {
          return todo.id === queryId
            ? {
                ...todo,
                ...userInput,
                type: todo.hasOwnProperty("type") ? todo.type : false,
              }
            : todo;
        })
      );
      navigate("/");
    }

    setUserInput({
      category: "",
      content: "",
    });
  };

  /** 입력창 UI */
  return (
    <TodoInputContainer>
      <Form onSubmit={handleAddUpdate}>
        <label htmlFor="category">카테고리</label>
        <Select
          name="category"
          id="category"
          value={userInput.category}
          onChange={handleChange}
        >
          <option value="select">카테고리 선택</option>
          <option value="습관">습관</option>
          <option value="업무">업무</option>
          <option value="공부">공부</option>
          <option value="취미">취미</option>
          <option value="기타">기타</option>
        </Select>

        <label htmlFor="content">할 일</label>
        <Input
          type="text"
          id="content"
          value={userInput.content}
          onChange={handleChange}
        />

        <Button $bgColor="#3182f6" $hoverBgColor="#0069fc">
          {queryId ? "수정" : "추가"}
        </Button>
        <ToastContainer autoClose={1000} />
      </Form>
    </TodoInputContainer>
  );
};

export default TodoForm;

const TodoInputContainer = styled.div`
  width: 500px;
  height: 400px;
  background-color: white;
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  width: 200px;
  height: 30px;
  border-radius: 1rem;
  margin: 5px 0 1rem 0;
  padding: 0 1rem 0 1rem;
  border: 1px solid #acb5bd;

  &:hover {
    border: 1px solid #7d8489;
  }
`;

const Select = styled.select`
  width: 200px;
  height: 30px;
  border-radius: 1rem;
  margin: 5px 0 1rem 0;
  padding: 0 2rem 0 1rem;
  border: 1px solid #acb5bd;

  &:hover {
    border: 1px solid #7d8489;
  }
`;
