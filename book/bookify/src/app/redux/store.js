import { configureStore } from "@reduxjs/toolkit";
import { membersReducer } from "./features/membersSlice";
import { usersReducer } from "./features/usersSlice";
import clientReducer from "./features/clients/clientsSlice";

export const store = configureStore({
  reducer: {
    members: membersReducer,
    users: usersReducer,
    clients: clientReducer,
  },
});