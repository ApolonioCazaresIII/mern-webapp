require('dotenv').config();
const express = require('express');
const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');
const passport = require('passport');
const session = require('express-session');
const { ensureGuest, ensureAuth } = require('./middleware/auth');
const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

// Passport configuration
require('./config/passport')(passport);

app.prepare().then(() => {
  // Express way
  const server = express();

  //establish middleware
  // Sessions
  server.use(
    session({
      secret: 'keyboard dog',
      resave: false,
      saveUninitialized: false,
    })
  );
  // Passport middleware
  server.use(passport.initialize());
  server.use(passport.session());

  // Routes
  server.get('/dashboard', ensureAuth, (req, res) => {
    res.user = req.user;
    return handle(req, res);
  });

  server.get('/user/login', ensureGuest, (req, res) => {
    return handle(req, res);
  });

  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`Ready on http://localhost:${port}`);
  });
});
