import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'first',

  initialState: {
    one: 0,
  },

  reducers: {
    addOne: (state, action) => {
      state.one += action.payload;
    },
    subOne: (state, action) => {
      state.one -= action.payload;
    },
  },
});

export const { addOne, subOne } = slice.actions;
export default slice.reducer;
