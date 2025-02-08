import { Link } from "react-router-dom";
import styled from "styled-components";

export const TodoListStyle = {
  Container: styled.div`
    display: flex;
    gap: 1rem;
  `,

  Header: styled.div`
    width: 300px;
    line-height: 40px;
    text-align: left;
    border-radius: 10px;
    padding: 5px 1rem;
    margin-bottom: 1rem;
    background-color: #5298fb;
    color: white;

    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  AddButton: styled(Link)`
    border: none;
    background-color: transparent;
    color: white;
    font-size: 16px;
    cursor: pointer;

    &:hover {
      color: #d5d5d5;
      transform: scale(1.1);
    }
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
