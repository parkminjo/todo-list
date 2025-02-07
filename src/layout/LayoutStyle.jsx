import styled from "styled-components";

export const LayoutStyle = {
  Container: styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
  `,

  NavContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    background-color: white;
    padding: 4rem 2rem 3rem 2rem;
  `,

  NavButton: styled.div`
    width: auto;
    border: none;
    border-radius: 5rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
    width: 100%;
    line-height: 45px;
    text-align: center;
    margin-top: 1rem;
    cursor: pointer;

    &:hover {
      background-color: #3182f6;
      color: white;
    }
  `,

  ChildrenStyles: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f3f4f7;
    width: 100%;
  `,
};
