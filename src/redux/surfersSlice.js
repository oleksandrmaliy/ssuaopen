import { createSlice } from '@reduxjs/toolkit';
import { fetchSurfers, postSurfer, deleteSurfer } from './operations';

const surfersSlice = createSlice({
  name: 'surfers',

  initialState: {
    players: [],
    isLoading: false,
    error: null,
  },

  // reducers: {
  //   fetchInProgress(state) {
  //     state.isLoading = true;
  //   },
  //   fetchSuccess(state, action) {
  //     state.isLoading = false;
  //     state.error = null;
  //     state.players = action.payload;
  //   },
  //   fetchError(state, action) {
  //     state.isLoading = false;
  //     state.error = action.payload;
  //   },
  // },

  extraReducers: (builder) => {
    builder
      .addCase(fetchSurfers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchSurfers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.players = action.payload;
      })
      .addCase(fetchSurfers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteSurfer.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteSurfer.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.players = state.players.filter(
          (players) => players.id !== action.payload.id,
        );
      })
      .addCase(deleteSurfer.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(postSurfer.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(postSurfer.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.players = state.players.push(action.payload);
      })
      .addCase(postSurfer.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

// export const { fetchInProgress, fetchSuccess, fetchError } =
//   surfersSlice.actions;

export const selectSurfers = (state) => state.surfers.players;
export default surfersSlice.reducer;
