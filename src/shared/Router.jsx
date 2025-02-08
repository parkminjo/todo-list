import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import Todo from "../pages/Todo";
import TodoDetail from "../pages/TodoDetail";
import GlobalStyle from "../styled-components/global/GlobalStyle";

const Router = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/detail" element={<TodoDetail />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
