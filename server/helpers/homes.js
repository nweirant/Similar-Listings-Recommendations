//const Home = require("../../db/homeModel.js");
const db = require("../../db/index.js");
const homeHelpers = require("./homesHelpers.js");

const homes = {
  generateHomes: (id, callback) => {
    var similarListings = homeHelpers.chooseSubsetIds(id); //returns an array of ids
    var imageUrls = homes.createUrls(similarListings);
    return homes.getHomes(id, similarListings, callback);
  },

  createUrls: listings => {
    return listings.map(
      id => `https://picsum.photos/200/300/?${id}`
    );
  },

  getHomes: (id, similarlistings, callback) => {
    //console.log(similarlistings);
    //console.log(db.count({}));
    //   Home.find({ homeId: { $in: similarlistings } }, (err, data) => {
    //   if (err) {
    //     console.log(err);
    //     callback(err);
    //   } else {
    //     callback(null, data);
    //   }
    // });
    var mongo = require('mongodb').MongoClient;
    var url = `mongodb://localhost:27017/homes`;
    var similar = similarlistings;
    mongo.connect(url, (err, client) => {
      if (err) {
        console.error('error connecting to mongo')
        return
      }
      console.log('Mongo connected to localhost');
      const db = client.db('homes');
      const collection = db.collection('homes');
      collection.find({ homeId: { $in: similar } }).toArray(function(err,results) {
        if (err) {
          console.log('error finding similar homes');
        } else {
          //console.log(results);
          callback(null, results);
        }
      });
    });
  }
};

module.exports = homes;
