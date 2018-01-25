const express = require('express'),
  logger = require('morgan'),
  helmet = require('helmet'),
  compression = require('compression'),
  bodyParser = require('body-parser'),
  path = require('path'),
  routes = require('./api/routes'),
  app = express();

// view engine setup
app.set('views', path.join(__dirname, 'api/views'));
app.set('view engine', 'ejs');

app.use(logger(process.env.NODE_ENV === 'production' ? 'combined' : 'dev'));
app.use(
  helmet({
    noCache: true
  })
);
app.use(compression());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'node_modules')));
app.use('/', routes);

// 404 error handler
app.use((req, res) => {
  res.redirect('/login');
});

module.exports = app;
