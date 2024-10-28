
import { createSlice } from '@reduxjs/toolkit';

const newsSlice = createSlice({
  name: 'news',
  initialState: { articles: [], error: null },
  reducers: {
    fetchNewsSuccess: (state, action) => {
      state.articles = action.payload;
      state.error = null;
    },
    fetchNewsFailure: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { fetchNewsSuccess, fetchNewsFailure } = newsSlice.actions;
export default newsSlice.reducer;
