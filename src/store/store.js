import { configureStore } from "@reduxjs/toolkit";
import currentUserReducer from "./features/currentUserSlice";
import coursesReducer from "./features/coursesSlice";
import studentsReducer from "./features/studentsSlice";

export const store = configureStore({
  reducer: {
    currentUser: currentUserReducer,
    courses: coursesReducer,
    students: studentsReducer,
  },
});