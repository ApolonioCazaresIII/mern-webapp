import nextConnect from 'next-connect';
import middleware from '../../../middleware/database';

const handler = nextConnect();
handler.use(middleware);

// @route GET api/projects/[pid]
// @desc Return list of all projects
// @access Public
// TODO: Implement searching/filtering projects
handler.get(async (req, res) => {
  // Grab pid from request
  const {
    query: { pid },
  } = req;
  // TODO: Find document from collection

  res.json({ pid });
});

export default handler;
