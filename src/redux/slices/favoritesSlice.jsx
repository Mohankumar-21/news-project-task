import { createSlice } from '@reduxjs/toolkit';


const getFavoritesFromLocalStorage = () => {
  const favorites = localStorage.getItem('favorites');
  return favorites ? JSON.parse(favorites) : [];
};


const saveFavoritesToLocalStorage = (favorites) => {
  localStorage.setItem('favorites', JSON.stringify(favorites));
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: { favorites: getFavoritesFromLocalStorage() }, 
  reducers: {
    addFavorite: (state, action) => {
      state.favorites.push(action.payload);
      saveFavoritesToLocalStorage(state.favorites); 
    },
    removeFavorite: (state, action) => {
      state.favorites = state.favorites.filter(article => article.id !== action.payload);
      saveFavoritesToLocalStorage(state.favorites); 
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
