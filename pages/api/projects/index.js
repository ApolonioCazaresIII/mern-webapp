import nextConnect from 'next-connect';
import middleware from '../../../middleware/database';

const handler = nextConnect();
handler.use(middleware);

// @route POST api/projects
// @desc Create a new proejct
// @access Public
// TODO: Handle input of the users who have access to project
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
  var cursor = await req.db.collection('projects').findOne({ name: data.name });

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

// @route GET api/projects
// @desc Return list of all projects
// @access Public
// TODO: Implement searching/filtering projects
handler.get(async (req, res) => {
  // Grab data from DB
  let docs = await req.db.collection('projects').find().toArray();
  res.json(docs);
});

export default handler;
