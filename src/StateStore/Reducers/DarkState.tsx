import { createSlice } from "@reduxjs/toolkit";

export const isDarkState = createSlice({
  name: 'isDark',
  initialState: true,
  reducers: {
    Toggle: (state) => {
      return !state;
    },
  },
});

export const { Toggle } = isDarkState.actions;
export default isDarkState.reducer;