import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import TodoDetail from "../pages/TodoDetail";
import TodoInput from "../pages/TodoInput";
import GlobalStyle from "../styled-components/global/GlobalStyle";

const Router = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail" element={<TodoDetail />} />
          <Route path="/todo-input" element={<TodoInput />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
