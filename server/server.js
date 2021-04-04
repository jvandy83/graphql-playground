const express = require('express');
const path = require('path');
const models = require('./models');
const expressGraphQL = require('express-graphql');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const schema = require('./schema/schema');

// live reload libraries
const connectLivereload = require('connect-livereload');
const livereload = require('livereload');
const { connect } = require('http2');

const app = express();

const MONGO_URI =
  'mongodb+srv://jared123:jared123@vanthedev.k2rxc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// todo: wire up live reload for only dev
// environment
const liveReloadServer = livereload.createServer();

liveReloadServer.watch(path.join(__dirname, '../', 'dist'));

app.use(connectLivereload());

app.use(bodyParser.json());

app.use(
  '/graphql',
  expressGraphQL({
    schema,
    graphiql: true
  })
);

app.use(express.static(path.join(__dirname, '../', 'dist')));

app.get('/*', (req, res, next) => {
  res.sendFile('index.html', {
    root: path.join(__dirname, '../', 'dist')
  });
});

// const webpackMiddleware = require('webpack-dev-middleware');
// const webpack = require('webpack');
// const webpackConfig = require('../client/webpack.config.js');
// app.use(webpackMiddleware(webpack(webpackConfig)));

app.listen(4000, () => {
  console.log('Listening');
});
