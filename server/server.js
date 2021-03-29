const express = require('express');
const models = require('./models');
const expressGraphQL = require('express-graphql');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const schema = require('./schema/schema');

const app = express();

// Replace with your mongoLab URI
const MONGO_URI =
  'mongodb+srv://jared123:jared123@vanthedev.k2rxc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(bodyParser.json());
app.use(
  '/graphql',
  expressGraphQL({
    schema,
    graphiql: true
  })
);

// const webpackMiddleware = require('webpack-dev-middleware');
// const webpack = require('webpack');
// const webpackConfig = require('../client/webpack.config.js');
// app.use(webpackMiddleware(webpack(webpackConfig)));

module.exports = app;
