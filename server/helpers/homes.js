const db = require("../../db/index.js");
const homeHelpers = require("./homesHelpers.js");

const homes = {
  generateHomes: (id, callback) => {
    var similarListings = homeHelpers.chooseSubsetIds(id); //returns an array of ids
    return homes.getHomes(id, similarListings, callback);
  },
  getHomes: (id, similarlistings, callback) => {
    var mongo = require('mongodb').MongoClient;
    var url = `mongodb://localhost:27017/homes`;
    var similar = similarlistings;
    mongo.connect(url, (err, client) => {
      if (err) {
       console.error('error connecting to mongo')
        return
      }
      //console.log('Mongo connected to localhost');
      const db = client.db('homes');
      const collection = db.collection('homes');
      collection.find({ homeId: { $in: similar } }).toArray(function(err,results) {
        if (err) {
          console.log('error finding similar homes');
        } else {
          callback(null, results);
        }
      });
    });
  }
};

module.exports = homes;
