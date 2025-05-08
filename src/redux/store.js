import { configureStore } from '@reduxjs/toolkit';

import surfersReducer from './surfersSlice';

export const store = configureStore({
  reducer: {
    surfers: surfersReducer,
  },
});
