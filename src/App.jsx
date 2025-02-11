import React, { useEffect } from "react";
import Router from "./shared/Router";
import { useSelector } from "react-redux";

const App = () => {
  /** 로컬 스토리지 저장 */
  const todos = useSelector((state) => state.todos);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return <Router />;
};

export default App;
