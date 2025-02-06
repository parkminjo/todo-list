import React from "react";
import styled from "styled-components";

const TodoForm = () => {
  return (
    <FormContainer>
      카테고리
      <label htmlFor="">
        <Input type="text" />
      </label>
      할 일
      <label htmlFor="">
        <Input type="text" />
      </label>
    </FormContainer>
  );
};

export default TodoForm;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 500px;
  height: 300px;
  background-color: white;
`;

const Input = styled.input`
  width: 200px;
  height: 30px;
  border-radius: 1rem;
  border: 1px solid #F3F4F7";
`;
