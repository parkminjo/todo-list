import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Todo from "../pages/Todo";
import TodoDetail from "../pages/TodoDetail";
import Layout from "../layout/Layout";
import GlobalStyle from "../styled-components/global/GlobalStyle";

const Router = () => {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Layout>
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
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
