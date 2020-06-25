import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const searchOpenings = createAsyncThunk(
  "user/searchOpenings",
  async () => {
    const response = await fetch("/openings");
    return await response.json();
  }
);

const openings = createSlice({
  name: "openings",
  initialState: [],
  extraReducers: {
    [searchOpenings.fulfilled]: (state, action) => {
      return action.payload;
    },
  },
});

export const getOpenings = (state) => state.openings;

export default openings.reducer;
