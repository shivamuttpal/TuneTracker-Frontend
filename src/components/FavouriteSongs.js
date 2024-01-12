// src/components/FavouriteSongs.js
import React, { useState, useEffect } from 'react';
import './SongList.css'; // Import the common CSS file

const FavouriteSongs = () => {
  const [favoriteSongs, setFavoriteSongs] = useState([]);

  useEffect(() => {
    // Fetch favorite songs from localStorage
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavoriteSongs(storedFavorites);
  }, []);

  const handleRemoveFromFavorites = (songId) => {
    // Remove the song from favorites in localStorage
    const updatedFavorites = favoriteSongs.filter(song => song._id !== songId);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    setFavoriteSongs(updatedFavorites);
  };

  return (
    <div className='bigc'>
      <h2>Favourite Songs</h2>
      <div className="ag-format-container">
        <div className="ag-courses_box">
          {favoriteSongs.map(song => (
            <div className="ag-courses_item" key={song._id}>
                <button onClick={() => handleRemoveFromFavorites(song._id)}>Remove from Favorites</button>
              <a href="#" className="ag-courses-item_link">
                <div className="ag-courses-item_bg"></div>
                <div className="ag-courses-item_title">{song.title}</div>
                <div className="ag-courses-item_date-box">{song.artist}</div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FavouriteSongs;
