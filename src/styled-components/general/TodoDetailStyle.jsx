import styled from "styled-components";

export const TodoDetailStyle = {
  TodoDetailContainer: styled.div`
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
  `,

  BackButton: styled.button`
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
  `,
};
