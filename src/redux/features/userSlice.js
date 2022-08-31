import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    TambahUser: (state, action) => {
      state.push(action.payload);
    },
    UbahUser: (state, action) => {
      const { id, name, email } = action.payload;
      const existUser = state.find((user) => user.id === id);
      if (existUser) {
        existUser.name = name;
        existUser.email = email;
      }
    },
    HapusUser: (state, action) => {
      const { id } = action.payload;
      const existUser = state.find((user) => user.id === id);
      if (existUser) {
        return state.filter((user) => user.id !== id);
      }
    },
  },
});

export const { TambahUser, UbahUser, HapusUser } = userSlice.actions;

export default userSlice.reducer;
