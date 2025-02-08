import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

import { TodoFormStyle as S } from "../styled-components/general/TodoFormStyle";
import { Button } from "../styled-components/global/CommonStyle";

const TodoForm = ({ setTodos }) => {
  /** 사용자 입력값 state */
  const [userInput, setUserInput] = useState({
    category: "",
    content: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setUserInput({ ...userInput, [id]: value });
  };

  /** 할 일 추가 or 수정 함수 */
  const addTodo = (e) => {
    e.preventDefault();

    if (userInput.category === "" || userInput.content === "") {
      toast.error("값을 모두 입력해주세요");
      return;
    }

    setTodos((prev) => [
      ...prev,
      {
        ...userInput,
        id: new Date().getTime(),
        type: false,
        date: new Date(),
      },
    ]);

    setUserInput({
      category: "",
      content: "",
    });
  };

  /** 입력창 UI */
  return (
    <S.TodoInputContainer>
      <S.Form onSubmit={addTodo}>
        <label htmlFor="category">카테고리</label>
        <S.Category
          name="category"
          id="category"
          value={userInput.category}
          onChange={handleChange}
        >
          <option value="select">카테고리 선택</option>
          <option value="습관">습관</option>
          <option value="업무">업무</option>
          <option value="공부">공부</option>
          <option value="취미">취미</option>
          <option value="기타">기타</option>
        </S.Category>

        <label htmlFor="content">할 일</label>
        <S.ContentInput
          type="text"
          id="content"
          value={userInput.content}
          onChange={handleChange}
        />

        <Button $bgColor="#3182f6" $hoverBgColor="#0069fc">
          추가
        </Button>
      </S.Form>
      <ToastContainer autoClose={1000} />
    </S.TodoInputContainer>
  );
};

export default TodoForm;
