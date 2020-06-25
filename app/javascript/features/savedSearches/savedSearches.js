import { createSlice } from "@reduxjs/toolkit";

const savedSearches = createSlice({
  name: "savedSearches",
  initialState: [],
});

export default savedSearches.reducer;
