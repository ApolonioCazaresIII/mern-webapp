import nextConnect from 'next-connect';
import middleware from '../../../../middleware/database';
const passport = require('passport');
const handler = nextConnect();
handler.use(middleware);

// @route GET /auth/google
// @desc Auth with Google
handler.get(passport.authenticate('google', { scope: ['profile'] }));

export default handler;
