import React from "react";
import TodoForm from "../components/TodoForm";

const Home = ({ setTodos }) => {
  return (
    <div>
      <TodoForm setTodos={setTodos} />
    </div>
  );
};

export default Home;
