import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
  userData: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.status = true;
      state.userData = action.payload.userData;
      console.log(state.userData, state.status);
    },
    logout: (state) => {
      state.status = false;
      state.userData = null;
    },
  },
});

export default authSlice.reducer;

export const { login, logout } = authSlice.actions;
