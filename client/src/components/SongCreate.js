import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { graphql } from 'react-apollo';
import { gql, useMutation } from '@apollo/client';

import createSongMutation from '../queries/createSong.js';

export default () => {
  const history = useHistory();
  const [addSong, { data }] = useMutation(createSongMutation);
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
  const handleSubmit = (e) => {
    e.preventDefault();
    addSong({
      variables: { title: song.title },
      refetchQueries: [{ query: createSongMutation }]
    });
    setSong({
      title: '',
      lyrics: ''
    });
    history.push('/');
  };
  return (
    <div className="container">
      <div className="title">
        <h1>Create a song</h1>
      </div>
      <form onSubmit={handleSubmit} className="song_form">
        <div className="main">
          <label>Title </label>
          <input
            type="text"
            name="title"
            value={song.title}
            onChange={handleChange}
          />
          <label>Lyrics </label>
          <input
            type="text"
            name="lyrics"
            value={song.lyrics}
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};
