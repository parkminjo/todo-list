import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, updateTodo } from "../redux/TodosSlice";

import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toast, ToastContainer } from "react-toastify";

import { useNavigate, useSearchParams } from "react-router-dom";
import { setUserInput } from "../redux/InputSlice";
import { TodoFormStyle as S } from "../styled-components/general/TodoFormStyle";
import { BackButton, Button } from "../styled-components/global/CommonStyle";

const TodoForm = () => {
  /** 사용자 입력값 */
  const userInput = useSelector((state) => state.input);

  const [searchParams] = useSearchParams();
  const queryId = parseInt(searchParams.get("id"));

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;

    dispatch(setUserInput({ ...userInput, [id]: value }));
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

    !queryId ? handleAddTodo() : handleUpdateTodo();

    reset();
  };

  const reset = () => {
    dispatch(
      setUserInput({
        category: "select",
        content: "",
      })
    );
  };

  /** 할 일 추가 */
  const handleAddTodo = () => {
    dispatch(
      addTodo({
        ...userInput,
        id: new Date().getTime(),
        date: new Date().toISOString(),
        isType: false,
      })
    );
  };
  /** 할 일 수정 */
  const handleUpdateTodo = () => {
    dispatch(
      updateTodo({
        id: queryId,
        userInput,
      })
    );
    navigate(-1);
  };

  /** 입력창 UI */
  return (
    <S.TodoInputContainer>
      <BackButton
        onClick={() => {
          navigate(-1);
          reset();
        }}
      >
        <FontAwesomeIcon icon={faX} />
      </BackButton>
      <S.Form onSubmit={handleSubmit}>
        <label htmlFor="category">카테고리</label>
        <S.ContentInput
          as="select"
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
        </S.ContentInput>

        <label htmlFor="content">할 일</label>
        <S.ContentInput
          type="text"
          id="content"
          value={userInput.content}
          onChange={handleChange}
        />

        <Button $bgColor="#3182f6" $hoverBgColor="#0069fc">
          {queryId ? "수정" : "추가"}
        </Button>
      </S.Form>
      <ToastContainer autoClose={1000} />
    </S.TodoInputContainer>
  );
};

export default TodoForm;
