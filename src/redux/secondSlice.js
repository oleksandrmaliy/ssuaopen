import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'second',

  initialState: {
    two: 0,
  },

  reducers: {
    addTwo: (state, action) => {
      state.two = state.two + action.payload;
    },
    subTwo: (state, action) => {
      state.two = state.two - action.payload;
    },
  },
});

export const selectStateTwo = (state) => state.first.two;
export const { addTwo, subTwo } = slice.actions;
export default slice.reducer;
