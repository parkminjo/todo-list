import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from "../redux/TodosSlice";

export const store = configureStore({
  reducer: {
    todos: TodoReducer,
  },
});
