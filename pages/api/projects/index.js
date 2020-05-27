import nextConnect from 'next-connect';
import middleware from '../../../middleware/database';

// Project Model
// const Project = require('../../../models/project');

const handler = nextConnect();
handler.use(middleware);

// @route POST api/projects
// @desc Create a new proejct
// @access Public
// TODO: Handle the users who have access to project
handler.post(async (req, res) => {
  // Grab data from payload
  var data;
  try {
    data = req.body.payload;
  } catch (e) {
    console.log(e);
    res.json({ status: 'bad' });
  }
  const newProj = {
    name: data.name,
    creator: data.creator,
    desc: data.desc,
  };

  // Ensure this project is unique
  var cursor = await req.db
    .collection('projects')
    .findOne({ name: data.name, creator: data.creator });

  if (cursor === null) {
    // Insert into DB
    await req.db
      .collection('projects')
      .insertOne(newProj)
      .then(() => {
        res.json({ status: 'ok' });
      });
  } else {
    // return bad status
    res.json({ status: 'bad' });
  }
});

export default handler;
