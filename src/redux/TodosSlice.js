import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("todos")) || [];

const TodosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      return state.map((todo) =>
        todo.id === action.payload.id
          ? {
              ...todo,
              ...action.payload.userInput,
              date: new Date().toISOString(),
            }
          : todo
      );
    },
    changeBoolean: (state, action) => {
      return state.map((todo) => {
        return todo.id === action.payload
          ? { ...todo, type: !todo.type, endDate: new Date().toISOString() }
          : todo;
      });
    },
  },
});

export const { addTodo, deleteTodo, updateTodo, changeBoolean } =
  TodosSlice.actions;
export default TodosSlice.reducer;
