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

export const ButtonBox = styled.div`
  display: flex;
  gap: 5px;
`;

export const TitleText = styled.h1`
  font-size: ${(props) => props.$fontSize || "24px"};
  font-weight: ${(props) => props.$fontWeight || 400};
  margin-bottom: ${(props) => props.$marginBottom || 0};
`;

export const ContentText = styled.p`
  font-size: ${(props) => props.$fontSize || "16px"};
  font-weight: ${(props) => props.$fontWeight || 400};
  margin-bottom: ${(props) => props.$marginBottom || 0};
`;
