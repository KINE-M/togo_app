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
    updateTogoDone(state: TogoState, action: PayloadAction<number>) {
      state.togoList = state.togoList.map((togo) => {
        if (togo.id === action.payload) {
          togo.done = !togo.done;
        }
        return togo;
      });
    },
    deleteTogo(state: TogoState, action: PayloadAction<number>) {
      state.togoList = state.togoList.filter((togo) => togo.id !== action.payload);
    },
  },
});

export const { getTogoList, updateTogoDone, deleteTogo } = togoSlice.actions;
