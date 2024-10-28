import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFavorite } from '../redux/slices/favoritesSlice';

const Favorites = () => {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites.favorites);

  const handleRemoveFavorite = (id) => {
    if (window.confirm("Are you sure you want to remove this article from favorites?")) {
      dispatch(removeFavorite(id));
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: 'auto' }}>
      <h2>Favorites</h2>
      {favorites.length ? favorites.map(article => (
        <div key={article.id} style={{ marginBottom: '20px', border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }}>
          {article.image_url && <img src={article.image_url} alt={article.title} style={{ width: '100%', borderRadius: '5px' }} />}
          <h3>{article.title}</h3>
          <a href={article.link} target="_blank" rel="noopener noreferrer">Read more</a>
          <button 
            onClick={() => handleRemoveFavorite(article.id)} 
            style={{ marginLeft: '10px', backgroundColor: '#e74c3c', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
          >
            Remove
          </button>
        </div>
      )) : <p>No favorites added!</p>}
    </div>
  );
};

export default Favorites;
