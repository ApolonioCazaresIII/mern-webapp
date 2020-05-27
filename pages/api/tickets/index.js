import nextConnect from 'next-connect';
import middleware from '../../../middleware/database';

const handler = nextConnect();
handler.use(middleware);

handler.get((req, res) => {
  let doc = { message: 'Hello' };

  res.json(JSON.stringify(doc));
});

export default handler;
