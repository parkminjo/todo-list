import React from "react";
import { useNavigate } from "react-router-dom";
import { LayoutStyle as S } from "./LayoutStyle";
import { TitleText } from "../styled-components/global/CommonStyle";

const Layout = ({ children }) => {
  return (
    <S.Container>
      <Nav />
      <S.ChildrenStyles>{children}</S.ChildrenStyles>
    </S.Container>
  );
};

export default Layout;

const Nav = () => {
  const navigate = useNavigate();

  return (
    <S.NavContainer>
      <TitleText $fontSize="30px" $fontWeight="600">
        DODO
      </TitleText>
      <S.NavButton onClick={() => navigate("/")}>TodoList</S.NavButton>
    </S.NavContainer>
  );
};
