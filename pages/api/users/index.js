import nextConnect from 'next-connect';
import middleware from '../../../middleware/database';

const handler = nextConnect();
handler.use(middleware);

// @route POST api/users
// @desc Create a new user
// @access Public
// TODO: Securely save passwords
handler.post(async (req, res) => {
  let data = req.body.payload;
  const newUser = {
    username: data.username,
    email: data.email,
    password: data.password,
  };

  // Ensure there are no accounts with the same username or email
  var cursor = await req.db
    .collection('users')
    .findOne({ $or: [{ username: data.username }, { email: data.email }] });
  if (cursor == null) {
    await req.db
      .collection('users')
      .insertOne(newUser)
      .then(() => {
        res.json({ msg: 'ok' });
      });
  } else if (cursor.email == data.email) {
    res.json({ msg: 'bad_email' });
  } else {
    res.json({ msg: 'bad_username' });
  }
});

export default handler;
