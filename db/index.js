const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost/homes';
var MongoClient = require('mongodb').MongoClient;
var url = MONGO_URI;
const client = new MongoClient(url);
const connection = client.connect();

const connect = connection;

module.exports = connection;
// connect.then(() => {
//   const db = client.db('homes');
//   const collection = db.collection('homes');
//   let x = collection.findOne({})
//   .then(res => {
//     console.log(res);
//   })
// })
