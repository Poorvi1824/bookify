import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase/firebase";

// Async Thunk
export const fetchMembers = createAsyncThunk(
  "members/fetchMembers",
  async (_, { rejectWithValue }) => {
    // console.log("thunk called");
    try {
      console.log("Fetching members from Firestore...");
      const userCollection = await getDocs(collection(db, "Members"));

      // console.log("Snapshot size:", userCollection.size);

      const members = userCollection.docs.map((doc) => {
        const data = doc.data();

        return {
          id: doc.id,
          ...data,
          joiningdate: data.joiningdate
            ? data.joiningdate.toDate().toISOString()
            : null,
          lastday: data.lastday
            ? data.lastday.toDate().toISOString()
            : null,
        };
      });
      console.log("Fetched Members:", members);
      return members;
    } catch (error) {
      console.error("FIRESTORE ERROR:", error);
      console.error("ERROR MESSAGE:", error.message);

      return rejectWithValue(error.message);
    }
  }
);

const membersSlice = createSlice({
  name: "members",
  initialState: {
    users: [],
    loading: false,
    error: null,
  },
  reducers: {},

  extraReducers: (builder) => {
    builder

      // Pending
      .addCase(fetchMembers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      // Success
      .addCase(fetchMembers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })

      // Error
      .addCase(fetchMembers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const membersReducer = membersSlice.reducer;


