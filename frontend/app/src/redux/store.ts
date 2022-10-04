import { configureStore } from '@reduxjs/toolkit';
import { postSlice } from './postSlice';
import { togoSlice } from './togoSlice';

export const store = configureStore({
  reducer: {
    togo: togoSlice.reducer,
    post: postSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
