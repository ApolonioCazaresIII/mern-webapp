import nextConnect from 'next-connect';
import middleware from '../../../middleware/database';
const passport = require('passport');
const handler = nextConnect();
const { ensureGuest, ensureAuth } = require('../../../middleware/auth');
const express = require('express');
handler.use(middleware);

// @route GET /auth/logout
// @desc Logout with google auth
handler.get(ensureAuth, async (req, res) => {
  req.logout();
  res.redirect('/');
});

export default handler;
