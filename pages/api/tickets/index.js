import nextConnect from 'next-connect';
import middleware from '../../../middleware/database';

const handler = nextConnect();
handler.use(middleware);

// @route POST api/tickets
// @desc Create a new ticket
// @access Public
// TODO: Insert parent project id here
handler.post(async (req, res) => {
  var data;
  try {
    data = req.body.payload;
  } catch (e) {
    console.log(e);
    res.json({ status: 'bad' });
  }
  console.log(data);
  const newTicket = {
    name: data.name,
    creator: data.creator,
    responsible: data.responsible,
    projectname: data.projectname,
    projectid: data.projectid,
    category: data.category,
    desc: data.desc,
    status: data.status,
  };

  // Ensure ticket is unique?
  var cursor = await req.db
    .collection('tickets')
    .findOne({ name: data.name, projectid: data.projectid });
  if (cursor === null) {
    // Insert into DB
    await req.db
      .collection('tickets')
      .insertOne(newTicket)
      .then(() => {
        res.json({ status: 'ok' });
      });
  } else {
    res.json({ status: 'bad' });
  }
});

export default handler;
