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
    addTogo(state: TogoState, action: PayloadAction<Togo>) {
      state.togoList = [...state.togoList, action.payload];
    },
    updateTogo(state: TogoState, action: PayloadAction<Togo>) {
      state.togoList = state.togoList.map((togo) => {
        if (togo.id === action.payload.id) {
          togo = {
            ...togo,
            ...action.payload,
          };
        }
        return togo;
      });
    },
  },
});

export const { getTogoList, updateTogoDone, deleteTogo, addTogo, updateTogo } = togoSlice.actions;
