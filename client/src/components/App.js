import React from 'react';
import { Route } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';

import Songlist from './Songlist.js';
import SongCreate from './SongCreate.js';

export default () => {
  return (
    <Router>
      <Route exact path="/" component={Songlist} />
      <Route path="/song-create" component={SongCreate} />
    </Router>
  );
};
