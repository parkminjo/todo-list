import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/TodosSlice";

import { TodoFormStyle as S } from "../styled-components/general/TodoFormStyle";
import { Button } from "../styled-components/global/CommonStyle";

const TodoForm = () => {
  const dispatch = useDispatch();

  /** 사용자 입력값 state */
  const [userInput, setUserInput] = useState({
    category: "select",
    content: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setUserInput({ ...userInput, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    /** 유효성 검증 */
    if (!userInput.category || userInput.category === "select") {
      toast.error("카테고리를 선택해주세요");
      return;
    }
    if (!userInput.content.trim()) {
      toast.error("할 일을 입력해주세요");
      return;
    }

    /** 할 일 추가 */
    dispatch(
      addTodo({
        ...userInput,
        id: new Date().getTime(),
        date: new Date().toISOString(),
        type: false,
      })
    );

    setUserInput({
      category: "select",
      content: "",
    });
  };

  /** 입력창 UI */
  return (
    <S.TodoInputContainer>
      <S.Form onSubmit={handleSubmit}>
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
