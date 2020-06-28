import { MongoClient } from 'mongodb';
import nextConnect from 'next-connect';

const connectionString = process.env.MONGO_URI;
const client = new MongoClient(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function database(req, res, next) {
  if (!client.isConnected()) await client.connect();
  req.dbClient = client;
  req.db = client.db('trackmybug');
  return next();
}

const middleware = nextConnect();

middleware.use(database);

export default middleware;
