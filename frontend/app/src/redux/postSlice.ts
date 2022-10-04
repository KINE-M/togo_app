import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { Post } from '../types/post';

type PostState = {
  postList: Post[];
};

export const initialState: PostState = {
  postList: [],
};

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    getPostList(state: PostState, action: PayloadAction<Post[]>) {
      state.postList = action.payload;
    },
  },
});

export const { getPostList } = postSlice.actions;
