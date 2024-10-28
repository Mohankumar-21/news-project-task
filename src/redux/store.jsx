
import { configureStore } from '@reduxjs/toolkit';
import newsReducer from './slices/newsSlice';
import favoritesReducer from './slices/favoritesSlice';

const store = configureStore({
  reducer: {
    news: newsReducer,
    favorites: favoritesReducer,
  },
});

export default store;
