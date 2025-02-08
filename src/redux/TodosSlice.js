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
    changeBoolean: (state, action) => {
      return state.map((todo) => {
        return todo.id === action.payload
          ? { ...todo, type: !todo.type }
          : todo;
      });
    },
  },
});

export const { addTodo, deleteTodo, changeBoolean } = TodosSlice.actions;
export default TodosSlice.reducer;
