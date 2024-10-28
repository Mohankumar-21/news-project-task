import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNews } from '../redux/actions/newsActions';
import { addFavorite } from '../redux/slices/favoritesSlice';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import './NewsDashboard.css'

const categories = [
  "technology", "business", "sports", 
  "lifestyle", "science", "politics", 
  "food", "entertainment", "environment"
];


const NewsDashboard = () => {
  const dispatch = useDispatch();
  const { articles, error } = useSelector(state => state.news);
  const [category, setCategory] = useState('technology');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredArticles, setFilteredArticles] = useState([]);

  useEffect(() => {
  
    dispatch(fetchNews(category));
  }, [dispatch, category]);

  useEffect(() => {

    if (searchQuery.trim()) {
      setFilteredArticles(
        articles.filter(article => 
          article.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    } else {
      setFilteredArticles(articles);
    }
  }, [searchQuery, articles]);

  const handleCategoryChange = (cat) => {
    setCategory(cat);
    setSearchQuery(''); 
  };

  const handleSearchChange = (query) => {
    setSearchQuery(query); 
  };

  const handleAddFavorite = (article) => {
    dispatch(addFavorite(article));
  };

  const formatDescription = (description) => {
    const words = description.split(' ');
    const limitedDescription = words.slice(0, 20).join(' ');
    return words.length < 20 ? `${limitedDescription}... (More content available)` : limitedDescription + '...';
  };

  return (
    <div className="news-dashboard">
      <SearchBar onSearch={handleSearchChange} />
      
      <div className="category-buttons">
        {categories.map(cat => (
          <button 
            key={cat} 
            onClick={() => handleCategoryChange(cat)}
            className={`category-button ${category === cat ? 'active' : ''}`}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      {error ? (
        <p>Error: {error}</p>
      ) : (
        <div className="news-cards">
          {filteredArticles.length > 0 ? (
            filteredArticles.map(article => (
              <div key={article.article_id} className="news-card">
                <Link to={`/article/${article.article_id}`}>
                  <h3>{article.title}</h3>
                </Link>
                {article.image_url && (
                  <img src={article.image_url} alt={article.title} className="news-image" />
                )}
                <p>{formatDescription(article.description || article.content || '')}</p>
                <button onClick={() => handleAddFavorite(article)}>Add to Favorites</button>
              </div>
            ))
          ) : (
            <p>No articles found matching your search.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default NewsDashboard;
