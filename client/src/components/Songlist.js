import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';

import fetchSongsQuery from '../queries/fetchSongs.js';

export default () => {
  const { loading, error, data } = useQuery(fetchSongsQuery);
  if (error) {
    return <div>Error...</div>;
  }
  if (loading) {
    return <div>Loading...</div>;
  }
  console.log(data);
  return (
    <div>
      <div className="header">
        <h1>SongList</h1>
      </div>
      <div className="container">
        <ul className="main">
          {data.songs.map((song) => (
            <li key={song.id}>{song.title}</li>
          ))}
        </ul>
        <div>
          <Link to="/song-create">
            <button>+</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
