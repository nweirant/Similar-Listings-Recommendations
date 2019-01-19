//const mongoose = require("mongoose");
//var mongo = require('mongodb').MongoClient;
//mongoose.connect(`mongodb://talal:shadie12@54.175.166.47/homes`);
//var url = `mongodb://localhost:27017/homes`;
//
// mongo.connect(url, (err, client) => {
//   if (err) {
//     console.error(err)
//     return
//   }
//   //...
//   console.log('Mongo connected to localhost');
//   const db = client.db('homes');
//   const collection = db.collection('homes');
//   collection.find({homeId : { $in: similarlistings }} , (err,results) => {
//     if (err) {
//       console.log('error finding');
//     } else {
//       console.log('results',results);
//
//     }
//   });
// });





// //mongoose.Promise = Promise;
// db.on("error", (err) => {
//   console.log("connection err");
// });
//
// db.once("open", () => {
//   console.log("MongoDB connected!");
// });

//module.exports = collection;
