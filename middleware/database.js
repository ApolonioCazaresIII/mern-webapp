import { MongoClient } from 'mongodb';
import nextConnect from 'next-connect';

const connectionString =
  'mongodb+srv://polocaz:161312@maincluster1-danyu.mongodb.net/test?retryWrites=true&w=majority';
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
