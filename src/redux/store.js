import { configureStore } from '@reduxjs/toolkit';

import firstReducer from './firstSlice';
import secondReducer from './secondSlice';

export const store = configureStore({
  reducer: {
    first: firstReducer,
    second: secondReducer,
  },
});
