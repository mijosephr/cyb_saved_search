import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const signupUser = createAsyncThunk(
  "user/signupUser",
  async ({ email, password }) => {
    const response = await fetch("/signup", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    return await response.json();
  }
);

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async ({ email, password }) => {
    const response = await fetch("/login", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    return await response.json();
  }
);

export const logoutUser = createAsyncThunk("user/logoutUser", async () => {
  const response = await fetch("/logout", {
    method: "post",
  });
  return await response.json();
});

const user = createSlice({
  name: "user",
  initialState: {},
  extraReducers: {
    [signupUser.fulfilled]: (_state, action) => {
      return action.payload;
    },
    [loginUser.fulfilled]: (_state, action) => {
      return action.payload;
    },
    [logoutUser.fulfilled]: (_state, _action) => {
      return {};
    },
  },
});

export const getUser = (state) => state.user;

export default user.reducer;
