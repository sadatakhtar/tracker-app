import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userJourney/UserSlice";

const store = configureStore({
  reducer: {
    userSlice: userReducer,
  },
});

export default store;
