// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// export const getPosts = createAsyncThunk("posts,getPosts", async () => {
//   return fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
//     res.json()
//   );
// });

// const postSlice = createSlice({
//   name: "posts",
//   initialState: {
//     posts: [],
//     loading: false,
//     value: 0,
//   },
//   extraReducers: {
//     [getPosts.pending]: (state, action) => {
//       state.loading = true;
//       // console.log(state);
//     },
//     [getPosts.fulfilled]: (state, action) => {
//       state.loading = false;
//       state.posts = action.payload;
//       // console.log(state, "state");
//       // console.log(action, "action");
//     },
//     [getPosts.rejected]: (state, action) => {
//       state.loading = false;
//       // console.log(state, "state");
//     },
//   },
//   reducers: {
//     increment: (state) => {
//       state.value += 1;
//       // console.log(state, "algo");
//     },
//     decrement: (state) => {
//       state.value -= 1;
//       // console.log(state, "algo");
//     },
//     kalika: (state, action) => {
//       state.value += action.payload;
//       // console.log(action.payload, state);
//     },
//   },
// });

// export const { increment, decrement, kalika } = postSlice.actions;

// export default postSlice.reducer;
