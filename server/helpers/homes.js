const Home = require("../../db/homeModel.js");
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
    console.log(similarlistings);
      Home.find({ homeId: { $in: similarlistings } }, (err, data) => {
      if (err) {
        console.log(err);
        callback(err);
      } else {
        callback(null, data);
      }
    });
  }
};

module.exports = homes;
