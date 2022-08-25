import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { Togo } from '../types/togo';

type TogoState = {
  togoList: Togo[];
};

export const initialState: TogoState = {
  togoList: [],
};

export const togoSlice = createSlice({
  name: 'togo',
  initialState,
  reducers: {
    getTogoList(state: TogoState, action: PayloadAction<Togo[]>) {
      state.togoList = action.payload;
    },
  },
});

export const { getTogoList } = togoSlice.actions;
