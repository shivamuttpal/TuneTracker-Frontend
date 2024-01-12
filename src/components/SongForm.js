// src/components/SongForm.js
import React, { useState } from 'react';
import axios from 'axios';

const SongForm = () => {
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://tunetrackerbackend.onrender.com/api/songs', { title, artist });
      // You can update the song list after submitting the form
      alert('Data stored')
    } catch (error) {
      console.error(error);
    }
  };

  const inputStyle = {
    width: '100%',
    padding: '8px',
    marginBottom: '15px',
    border: '1px solid #f9b234',
    borderRadius: '5px',
    backgroundColor: '#222',
    color: '#fff',
  };

  const buttonStyle = {
    backgroundColor: '#f9b234',
    color: '#000',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'background-color 0.3s ease',
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', backgroundColor: '#121212', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)' }}>
      <h2>Add a Song</h2>
      <form onSubmit={handleSubmit} style={formStyle}>
        <label style={{ color: '#fff', marginBottom: '5px' }}>Title:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required style={inputStyle} />
        <br />
        <label style={{ color: '#fff', marginBottom: '5px' }}>Artist:</label>
        <input type="text" value={artist} onChange={(e) => setArtist(e.target.value)} required style={inputStyle} />
        <br />
        <button type="submit" style={buttonStyle}>
          Add Song
        </button>
      </form>
    </div>
  );
};

export default SongForm;
