import { createSlice } from "@reduxjs/toolkit";

const navSlice = createSlice({
  name: "nav",
  initialState: {
    toggleNav: false,
  },
  reducers: {
    toggle: (state) => {
      state.toggleNav = !state.toggleNav;
    },
  },
});

export const { toggle } = navSlice.actions;
export default navSlice.reducer;
