// src/components/SongList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './SongList.css';

const SongList = () => {
  const [songs, setSongs] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    // Fetch songs from the server
    axios.get('https://tunetrackerbackend.onrender.com/api/songs')
      .then(response => setSongs(response.data))
      .catch(error => console.error(error));

    // Load favorites from localStorage
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);

  const handleAddToFavourite = (song) => {
    // Check if the song is already in favorites
    const isFavorite = favorites.some(favorite => favorite._id === song._id);

    if (isFavorite) {
      // Remove the song from favorites
      const updatedFavorites = favorites.filter(favorite => favorite._id !== song._id);
      setFavorites(updatedFavorites);
    } else {
      // Add the song to favorites
      const updatedFavorites = [...favorites, song];
      setFavorites(updatedFavorites);
    }
  };

  useEffect(() => {
    // Store favorites in localStorage whenever it changes
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  return (
    <div className='bigc'>
      <h2>Song List</h2>
      <div className="ag-format-container">
        <div className="ag-courses_box">
          {songs.map(song => (
            <div className="ag-courses_item" key={song._id}>
              <a href="#" className="ag-courses-item_link">
                <div className="ag-courses-item_bg"></div>
                <div className="ag-courses-item_title">{song.title}</div>
                <div className="ag-courses-item_date-box">
                  <button onClick={() => handleAddToFavourite(song)}>
                    {favorites.some(favorite => favorite._id === song._id)
                      ? 'Remove from Favourites'
                      : 'Add to Favourites'}
                  </button>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SongList;
