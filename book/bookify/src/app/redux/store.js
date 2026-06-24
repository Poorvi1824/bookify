import { configureStore } from "@reduxjs/toolkit";
import { membersReducer } from "./features/membersSlice";
import { usersReducer } from "./features/usersSlice";



export const store = configureStore({
  reducer: {
   members:membersReducer,
   users:usersReducer,

  },
});