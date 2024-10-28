import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ArticleDetails = () => {
  const { id } = useParams();
  console.log("Article ID from URL:", id);

  const article = useSelector(state => {

    return state.news.articles.find(a => a.article_id === id); 
  });

  console.log("Found article:", article); 
  
  if (!article) return <p>Article not found!</p>;

  return (
    <div>
      <h2>{article.title}</h2>
      {article.image_url && <img src={article.image_url} alt={article.title} />}
      <p>{article.description || article.content || ''}</p>
      <a href={article.link} target="_blank" rel="noopener noreferrer">Read more</a>
    </div>
  );
};

export default ArticleDetails;
