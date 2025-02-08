import styled from "styled-components";

export const TodoListStyle = {
  Container: styled.div`
    display: flex;
    gap: 1rem;
  `,

  TodoListContainer: styled.div`
    width: 400px;
    min-height: 600px;
    background-color: white;
    border-radius: 1rem;
    margin-top: 10px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding-top: 2rem;
  `,
};
