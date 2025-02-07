import styled from "styled-components";

export const TodoFormStyle = {
  TodoInputContainer: styled.div`
    width: 500px;
    height: 400px;
    background-color: white;
    border-radius: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  Form: styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,

  ContentInput: styled.input`
    width: 200px;
    height: 30px;
    border-radius: 1rem;
    margin: 5px 0 1rem 0;
    padding: 0 1rem 0 1rem;
    border: 1px solid #acb5bd;

    &:hover {
      border: 1px solid #7d8489;
    }
  `,

  Category: styled.select`
    width: 200px;
    height: 30px;
    border-radius: 1rem;
    margin: 5px 0 1rem 0;
    padding: 0 1rem 0 1rem;
    border: 1px solid #acb5bd;

    &:hover {
      border: 1px solid #7d8489;
    }
  `,
};
