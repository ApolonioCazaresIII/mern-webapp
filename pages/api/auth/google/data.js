import nextConnect from 'next-connect';
import middleware from '../../../../middleware/database';
const passport = require('passport');
const handler = nextConnect();
const { ensureGuest, ensureAuth } = require('../../../../middleware/auth');
const express = require('express');
handler.use(middleware);

// @route GET /auth/google/data
// @desc Logout with google auth
handler.get(ensureAuth, async (req, res) => {
  res.json({ user: req.user, isAuthenticated: req.isAuthenticated() });
});

export default handler;
