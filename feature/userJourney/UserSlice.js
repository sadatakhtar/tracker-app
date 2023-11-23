import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // Add new states here
  test: "Admin",
  name: "",
  isDarkMode: false,
};

export const userSlice = createSlice({
  name: "userJourney",
  initialState,
  reducers: {
    setTest: (state, action) => {
      state.test = action.payload;
    },
    setName: (state, action) => {
      state.name = action.payload;
    },
    setIsDarkMode: (state, action) => {
      state.isDarkMode = action.payload;
    },
  },
});

export const { setTest, setName, setIsDarkMode } = userSlice.actions;

export const getTest = (state) => state.userSlice.test;
export const getName = (state) => state.userSlice.name;
export const getIsDarkMode = (state) => state.userSlice.isDarkMode;

export default userSlice.reducer;
