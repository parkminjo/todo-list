import styled from "styled-components";

export const Button = styled.button`
  font-size: 1rem;
  width: 50px;
  height: 30px;
  border: none;
  color: white;
  border-radius: 5px;
  background-color: ${(props) => props.$bgColor};
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.$hoverBgColor};
  }
`;

export const ButtonDiv = styled.div`
  display: flex;
  gap: 8px;
`;
