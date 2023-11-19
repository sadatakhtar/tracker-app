import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // Add new states here
  test: "Admin",
  name: "",
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
  },
});

export const { setTest, setName } = userSlice.actions;

export const getTest = (state) => state.userSlice.test;
export const getName = (state) => state.userSlice.name;

export default userSlice.reducer;
