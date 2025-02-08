import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const TodoContext = createContext(null);

export const TodoProvider = ({ children }) => {
  const navigate = useNavigate();
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  /** 할 일 추가 or 수정 함수 */
  const handleAddUpdate = (userInput) => {
    setTodos((prev) => [
      ...prev,
      {
        ...userInput,
        id: new Date().getTime(),
        type: false,
        date: new Date(),
      },
    ]);
  };

  /** todo 삭제 함수 */
  const deleteTodo = (targetId) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== targetId));
  };

  /** 완료 여부 변환 함수 */
  const changeTrueOrFalse = (targetId) => {
    setTodos((prev) =>
      prev.map((todo) => {
        return todo.id === targetId ? { ...todo, type: !todo.type } : todo;
      })
    );
  };

  const value = { todos, handleAddUpdate, deleteTodo, changeTrueOrFalse };
  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};
