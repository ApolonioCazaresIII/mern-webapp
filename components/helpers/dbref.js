const { MongoClient } = require('mongodb');
const connectionString =
  'mongodb+srv://polocaz:161312@maincluster1-danyu.mongodb.net/test?retryWrites=true&w=majority';
const client = new MongoClient(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
async function getRef() {
  if (!client.isConnected()) await client.connect();
  let db = client.db('trackmybug');
  return db;
}

exports.getRef = getRef;
