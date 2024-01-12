// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SongList from './components/SongList';
// import SongDetails from './components/SongDetails ';
import SongForm from './components/SongForm';
import ArtistSong from './components/ArtistSong';
import FavouriteSongs from './components/FavouriteSongs';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <h1>My Favorite Tunes</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li> 
            <li>
              <Link to="/artist-song">Artist Songs</Link>
            </li>
            <li>
              <Link to="/favourite-songs">Favourite Songs</Link>
            </li>
            <li>
              <Link to="/add-song">Add Song</Link>
            </li>
          </ul>
        </nav>

        <div className="main-container">
          <Routes>
          <Route path="/" element={<SongList/>} />
          <Route path="/artist-song" element={<ArtistSong/>} />
          <Route path="/favourite-songs" element={<FavouriteSongs/>} />
          <Route path="/add-song" element={<SongForm/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
