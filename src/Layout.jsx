import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Layout = ({ children }) => {
  return (
    <Container>
      <Nav />
      <ChildrenStyles>{children}</ChildrenStyles>
    </Container>
  );
};

export default Layout;

const Container = styled.div`
  display: flex;
`;

const Nav = () => {
  const navigate = useNavigate();

  return (
    <NavContainer>
      <h1>TODO</h1>
      <NavButton onClick={() => navigate("/")}>Todo 입력</NavButton>
      <NavButton onClick={() => navigate("/todo")}>TodoList</NavButton>
    </NavContainer>
  );
};

const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  height: 100vh;
  background-color: white;
  padding: 2rem;
`;

const NavButton = styled.div`
  width: auto;
  border: none;
  border-radius: 5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  width: 100%;
  line-height: 40px;
  text-align: center;
  margin-top: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #3182f6;
    color: white;
  }
`;

const ChildrenStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f3f4f7;
  width: 100%;
`;
