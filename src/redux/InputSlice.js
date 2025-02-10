import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: "select",
  content: "",
};

const inputSlice = createSlice({
  name: "input",
  initialState,
  reducers: {
    setUserInput: (state, action) => {
      return (state = { ...action.payload });
    },
  },
});

export const { setUserInput } = inputSlice.actions;
export default inputSlice.reducer;
