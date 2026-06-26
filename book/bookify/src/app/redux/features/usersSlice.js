import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase/firebase";

// Async Thunk
export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async (_, { rejectWithValue }) => {
    console.log("thunk called");
    try {
      console.log("Fetching users from Firestore...");
      const userCollection = await getDocs(collection(db, "users"));

      // console.log("Snapshot size:", userCollection.size);

      const users = userCollection.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
        
       
      }));
//      userCollection.docs.forEach((doc) => {
//     console.log(doc.data());
// });
      console.log("Fetched Users:", users);
      return users;
    } catch (error) {
      console.error("FIRESTORE ERROR:", error);
      console.error("ERROR MESSAGE:", error.message);

      return rejectWithValue(error.message);
    }
  }
);

const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    loading: false,
    error: null,
  },
  reducers: {},

  extraReducers: (builder) => {
    builder

      // Pending
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      // Success
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })

      // Error
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const usersReducer = userSlice.reducer;


