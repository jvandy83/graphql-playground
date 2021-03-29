import React from 'react';
import { Router, Route } from 'react-router';

import Songlist from './Songlist.js';
import SongCreate from './SongCreate.js';

export default () => {
  <BrowserRouter>
    <Route path="/" component={Songlist} />
    <Route path="/song/new" component={SongCreate} />
  </BrowserRouter>;
};
