import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { userLogin } from "../api";

const initialState = {
  users: [],
  error: null,
  loading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(userLogin.pending, (state) => {
        state.loading = true;
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        // state.loading = false;
        console.log(state, action);
        console.log(action.payload);
        state.users.push(action.payload);
        localStorage.setItem("accessToken", action.payload.data.token);
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.loading = false;
        state.users.push(null);
      });
  },
});

export default userSlice.reducer;
