import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    const response = await fetch("/categories");
    return await response.json();
  }
);

const categories = createSlice({
  name: "categories",
  initialState: [],
  extraReducers: {
    [fetchCategories.fulfilled]: (state, action) => {
      return action.payload;
    },
  },
});

export const getCategories = (state) => state.categories;

export default categories.reducer;
