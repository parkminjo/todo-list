import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Todo from "../pages/Todo";
import TodoDetail from "../pages/TodoDetail";

import Layout from "../layout/Layout";
import GlobalStyle from "../styled-components/global/GlobalStyle";
import { TodoProvider } from "../context/TodoContext";

const Router = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Layout>
        <TodoProvider>
          <Routes>
            <Route path="/" element={<Home setTodos={setTodos} />} />
            <Route
              path="/todo"
              element={<Todo todos={todos} setTodos={setTodos} />}
            />
            <Route
              path="/detail"
              element={<TodoDetail todos={todos} setTodos={setTodos} />}
            />
          </Routes>
        </TodoProvider>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
