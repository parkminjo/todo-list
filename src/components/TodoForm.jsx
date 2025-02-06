import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "../styled-components/StyledComponents";

const TodoForm = ({ setTodos }) => {
  const [userInput, setUserInput] = useState({
    category: "",
    content: "",
    date: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setUserInput({ ...userInput, [id]: value });
  };

  const handleAddUpdate = (e) => {
    e.preventDefault();
    setTodos((prev) => [
      ...prev,
      { ...userInput, id: new Date().getTime(), type: false },
    ]);

    setUserInput({
      category: "",
      content: "",
      date: "",
    });
  };

  return (
    <TodoInputContainer>
      <Form onSubmit={handleAddUpdate}>
        <label htmlFor="category">카테고리</label>
        <Select
          name="category"
          id="category"
          value={setTodos.category}
          onChange={handleChange}
        >
          <option value="">습관</option>
          <option value="">업무</option>
          <option value="">공부</option>
          <option value="">취미</option>
          <option value="">기타</option>
        </Select>

        <label htmlFor="content">할 일</label>
        <Input
          type="text"
          id="content"
          value={userInput.content}
          onChange={handleChange}
        />

        <label htmlFor="date">날짜</label>
        <Input
          type="date"
          id="date"
          value={userInput.date}
          onChange={handleChange}
        />

        <Button $bgColor="#3182f6" $hoverBgColor="#0069fc">
          추가
        </Button>
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
  padding: 0 0 0 1rem;
  border: 1px solid #acb5bd;

  &:hover {
    border: 1px solid #7d8489;
  }
`;
