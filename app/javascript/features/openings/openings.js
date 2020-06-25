import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const searchOpenings = createAsyncThunk(
  "user/searchOpenings",
  async ({ categoryId }) => {
    let url = "/openings?";
    if (categoryId && categoryId > 0) {
      url = `${url}categoryId=${categoryId}`;
    }
    const response = await fetch(url);
    return await response.json();
  }
);

const openings = createSlice({
  name: "openings",
  initialState: {
    openings: [],
    categoryId: 0,
  },
  reducers: {
    setCategoryId: (state, action) => {
      return { ...state, categoryId: action.payload };
    },
  },
  extraReducers: {
    [searchOpenings.fulfilled]: (state, action) => {
      return { ...state, openings: action.payload };
    },
  },
});

export const getOpenings = (state) => state.openings.openings;
export const getCategoryId = (state) => state.openings.categoryId;
export const { setCategoryId } = openings.actions;

export default openings.reducer;
