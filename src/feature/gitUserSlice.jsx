import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getAllData = createAsyncThunk("gitUsers", async () => {
  const response = await fetch("https://api.github.com/users");
  const result = response.json();
  return result;
});

export const gitUser = createSlice({
  name: "gitUser",
  initialState: {
    loading: false,
    users: [],
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(getAllData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllData.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
    });
    builder.addCase(getAllData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default gitUser.reducer;
