import React from 'react';

const SearchBar = ({ onSearch }) => {
  const handleChange = (e) => {
    onSearch(e.target.value); 
  };

  return (
    <div style={{display:'flex', gap:"10px"}}>
    <p>Seach : </p>
    <input
      type="text"
      onChange={handleChange} 
      placeholder="Search news by keywords..."
      className="border rounded p-2"
    />
    </div>
  );
};

export default SearchBar;
