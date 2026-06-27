import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addClient, getClients } from "@/app/services/clientServices";

// ==================== Create Client ====================
export const createClient = createAsyncThunk(
  "clients/createClient",
  async (clientData, thunkAPI) => {
    try {
      return await addClient(clientData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// ==================== Fetch Clients ====================
export const fetchClients = createAsyncThunk(
  "clients/fetchClients",
  async (_, thunkAPI) => {
    try {
      return await getClients();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// ==================== Initial State ====================
const initialState = {
  clients: [],
  loading: false,
  error: null,
};

// ==================== Slice ====================
const clientSlice = createSlice({
  name: "clients",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder

      // ---------- Create Client ----------
      .addCase(createClient.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(createClient.fulfilled, (state, action) => {
        state.loading = false;

        // If addClient() returns the created client,
        // immediately add it to Redux state.
        if (action.payload?.client) {
          state.clients.unshift(action.payload.client);
        }
      })

      .addCase(createClient.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // ---------- Fetch Clients ----------
      .addCase(fetchClients.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(fetchClients.fulfilled, (state, action) => {
        state.loading = false;
        state.clients = action.payload;
      })

      .addCase(fetchClients.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

// ==================== Export Reducer ====================
export const clientReducer = clientSlice.reducer;
export default clientReducer;