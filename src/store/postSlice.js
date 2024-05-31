import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
};
const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPosts: (state, action) => {
      state.posts = action.payload.posts;
    },
    deletePosts: (state, action) => {
      state.posts = [];
    },
  },
});

export default postSlice.reducer;

export const { addPosts, deletePosts } = postSlice.actions;
