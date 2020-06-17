import nextConnect from 'next-connect';
import middleware from '../../../middleware/database';
const mongo = require('mongodb');

const handler = nextConnect();
handler.use(middleware);

handler.post(async (req, res) => {
  res.json('FAILED');
});

// @route GET api/projects/[pid]
// @desc Return list of all projects
// @access Public
// TODO: Implement searching/filtering projects
handler.get(async (req, res) => {
  // Grab pid from request
  const {
    query: { pid },
  } = req;
  // TODO: Finish project details page
  try {
    var cursor = await req.db
      .collection('projects')
      .find({ _id: mongo.ObjectID(pid) })
      .toArray();
  } catch (e) {
    console.log(e);
  }
  if (cursor == null) {
    // project doesnt exist
    res.json({ status: 'bad' });
  } else {
    // project data exists
    res.json({ cursor });
  }
});

export default handler;
