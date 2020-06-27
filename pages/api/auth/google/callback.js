import nextConnect from 'next-connect';
import middleware from '../../../../middleware/database';

const passport = require('passport');

const handler = nextConnect();
handler.use(middleware);

// @route GET /api/auth/google/callback
// @desc Google auth callback
handler.get(
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    res.redirect('/dashboard');
  }
);

export default handler;
