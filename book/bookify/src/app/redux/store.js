import { configureStore } from "@reduxjs/toolkit";
import { membersReducer } from "./features/membersSlice";
import { usersReducer } from "./features/usersSlice";
import clientReducer from "./features/clients/clientsSlice";
import staffReducer from "./features/booking/StaffSlice";
import packageReducer from "./features/packages/pacakgesSlice";




export const store = configureStore({
  reducer: {
    members: membersReducer,
    users: usersReducer,
    clients: clientReducer,
    staff: staffReducer,
    packages: packageReducer,
  },
});