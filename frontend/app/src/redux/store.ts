import { configureStore } from '@reduxjs/toolkit';
import { togoSlice } from './togoSlice';

export const store = configureStore({
  reducer: {
    togo: togoSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
