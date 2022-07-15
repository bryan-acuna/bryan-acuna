import { createSlice } from "@reduxjs/toolkit";

interface carsState {
  open: boolean;
}

const initialState: carsState = {
  open: false,
};

export const carsSlice = createSlice({
  initialState,
  name: "Cars",
  reducers: {
    openNav: (state, action) => {
      state.open = action.payload;
    },
  },
});

export const { openNav } = carsSlice.actions;
export default carsSlice.reducer;
