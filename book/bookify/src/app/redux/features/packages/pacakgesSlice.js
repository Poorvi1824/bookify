import { deletePackage, getPackages } from "@/app/services/packagesServices";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const fetchPackages = createAsyncThunk(
  "packages/fetchPackages",
  async (_, thunkAPI) => {
    try {
      return await getPackages();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const removePackage = createAsyncThunk(
  "packages/deletePackage",
  async (id, thunkAPI) => {
    try {
      await deletePackage(id);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const initialState = {
  packages: [],
  loading: false,
  error: null,
};

const packageSlice = createSlice({
  name: "packages",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder

      // Fetch Packages
      .addCase(fetchPackages.pending, (state) => {
        state.loading = true;
      })

      .addCase(fetchPackages.fulfilled, (state, action) => {
        state.loading = false;
        state.packages = action.payload;
      })

      .addCase(fetchPackages.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Delete Package
      .addCase(removePackage.fulfilled, (state, action) => {
        state.packages = state.packages.filter(
          (item) => item.id !== action.payload
        );
      });
  },
});

export default packageSlice.reducer;


