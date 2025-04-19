import { configureStore } from '@reduxjs/toolkit';

// import firstReducer from './firstSlice';
// import secondReducer from './secondSlice';
import surfersReducer from './surfersSlice';

export const store = configureStore({
  reducer: {
    // first: firstReducer,
    // second: secondReducer,
    surfers: surfersReducer,
  },
});
