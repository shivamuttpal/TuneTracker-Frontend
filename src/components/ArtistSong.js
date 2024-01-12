import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './SongList.css';

const SongList = () => {
  const [songs, setSongs] = useState([]);
  const [uniqueArtists, setUniqueArtists] = useState([]);
  const [artistCounts, setArtistCounts] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch songs from the server
        const response = await axios.get('https://tunetrackerbackend.onrender.com/api/songs');
        setSongs(response.data);

        // Find unique artist names
        const uniqueNames = [...new Set(response.data.map(song => song.artist))];
        setUniqueArtists(uniqueNames);

        // Count the number of songs for each artist
        const counts = response.data.reduce((acc, song) => {
          acc[song.artist] = (acc[song.artist] || 0) + 1;
          return acc;
        }, {});
        setArtistCounts(counts);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='bigc'>
      <h2>Artist List</h2>
      <div className="ag-format-container">
        <div className="ag-courses_box">
          {uniqueArtists.map(artist => (
            <div className="ag-courses_item" key={artist}>
              <a href="#" className="ag-courses-item_link">
                <div className="ag-courses-item_bg"></div>
                <div className="ag-courses-item_title">{artist}</div>
                <div className="ag-courses-item_date-box">
                  {artistCounts[artist]} songs
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
