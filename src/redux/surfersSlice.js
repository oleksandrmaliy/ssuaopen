import { createSlice } from '@reduxjs/toolkit';

const surfersSlice = createSlice({
  name: 'surfers',

  initialState: {
    players: [],
    isLoading: false,
    error: null,
  },

  reducers: {
    fetchInProgress(state) {
      state.isLoading = true;
    },
    fetchSuccess(state, action) {
      state.isLoading = false;
      state.error = null;
      state.players = action.payload;
    },
    fetchError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchInProgress, fetchSuccess, fetchError } =
  surfersSlice.actions;
export const selectSurfers = (state) => state.surfers.players;
export default surfersSlice.reducer;
