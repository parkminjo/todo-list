import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Todo from "../pages/Todo";
import Layout from "../Layout";

const Router = () => {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  console.log(todos);

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home setTodos={setTodos} />} />
          <Route
            path="/todo"
            element={<Todo todos={todos} setTodos={setTodos} />}
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
