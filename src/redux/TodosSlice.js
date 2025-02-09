import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("todos")) ?? [];

const TodosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    deleteTodo: (state, action) => {
      const filteredTodos = state.filter((todo) => todo.id !== action.payload);
      return filteredTodos;
    },
    updateTodo: (state, action) => {
      const { id, userInput } = action.payload;

      const updatedTodos = state.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              ...userInput,
              isType: todo.isType ?? false,
              date: new Date().toISOString(),
            }
          : todo
      );

      return updatedTodos;
    },
    changeBoolean: (state, action) => {
      const toggledTodos = state.map((todo) => {
        return todo.id === action.payload
          ? { ...todo, isType: !todo.isType, endDate: new Date().toISOString() }
          : todo;
      });

      return toggledTodos;
    },
  },
});

export const { addTodo, deleteTodo, updateTodo, changeBoolean } =
  TodosSlice.actions;
export default TodosSlice.reducer;
