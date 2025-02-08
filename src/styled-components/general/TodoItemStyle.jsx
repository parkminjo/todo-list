import styled from "styled-components";

export const TodoItemStyle = {
  TodoCardBox: styled.div`
    width: 300px;
    line-height: 40px;
    text-align: left;
    border-radius: 10px;
    padding: 5px 1rem;
    margin-bottom: 1rem;
    background-color: #f3f4f7;

    display: flex;
    justify-content: space-between;

    &:hover {
      transform: scale(1.05);
      transition: all 0.2s ease-in-out;
    }
  `,

  CheckBoxInput: styled.input`
    width: 16px;
    border: 1px solid #c5cdd5;
    background-color: transparent;
  `,

  DeleteButton: styled.button`
    background-color: transparent;
    border: none;
    font-size: 16px;
    color: #777777;

    &:hover {
      color: #f85453;
    }
  `,
};
