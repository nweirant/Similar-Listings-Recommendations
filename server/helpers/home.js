const Home = require("../../db/homeModel.js");

const home = {
  getHome: (id, callback) => {
    var imageUrl = `https://s3.amazonaws.com/hrnyc19apartmentimages/Images/${id}.jpg`;
    Home.findOne({ imageUrl: imageUrl }, (err, data) => {
      if (err) {
        callback(err);
      } else {
        callback(null, data);
      }
    });
  }
};

module.exports = home;
