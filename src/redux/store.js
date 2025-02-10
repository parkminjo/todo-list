import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from "../redux/TodosSlice";
import InputReducer from "../redux/InputSlice";

export const store = configureStore({
  reducer: {
    todos: TodoReducer,
    input: InputReducer,
  },
});
