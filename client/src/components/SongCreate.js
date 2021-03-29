import React, { useState } from 'react';

export default () => {
  const [song, setSong] = useState({
    title: '',
    lyrics: ''
  });
  const handleChange = (e) => {
    setSong((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
  return (
    <div>
      <div className="title">
        <h1>Create a song</h1>
      </div>
      <form className="song_form">
        <div className="main">
          <label>Title </label>
          <input
            type="text"
            name="songTitle"
            value={song.title || ''}
            onChange={handleChange}
          />
          <label>Lyrics </label>
          <input
            type="textArea"
            name="songLyrics"
            value={song.lyrics || ''}
            onChange={handleChange}
          />
        </div>
        <div className="form_button">
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};
