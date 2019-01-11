const faker = require("faker");
var loremIpsum = require('lorem-ipsum');
const Home = require("./homeModel.js");
const pg = require('pg');
const { Pool, Client } = require('pg');
const connection = 'postgres://localhost:5432/testdb';

const client = new pg.Client(connection);
client.connect((err) => {
  if (err) {
    console.log(err);
  }
});

insertAllHomesPG = () => {
  console.log('attempting to connect');
  pg.connect(function(err, client, done) {
    if (err) {
      console.log(err);
    }
    client.query('CREATE TABLE items(id SERIAL PRIMARY KEY, text VARCHAR(40) not null, complete BOOLEAN)');
  done()
  })
}


// singleton pool shutdown




var iter = 2500; //# per batch
var batchSize = 4000; //batchs
var item = 0;
var currentBatch = 0;
var insertAllHomes = () => {
  var currentItem = item;
  var homes = [];
  var cities = ["Manhattan", "Brooklyn", "Queens", "Bronx", "Staten Island"];
  for (var i = item; i < (iter + currentItem); i++) {
    var home = generateHomeAttributes({}, i, cities);
    homes.push(home);
    item++;
  }
   Home.collection.insertMany(homes, () => {
     if (currentBatch <= batchSize) {
       currentBatch++;
       insertAllHomes();
     }
   });
};

var insertAllHomesPG = () => {
}



var generateAddress = () => {
  return loremIpsum(2, 'words');
}

var generateHomeAttributes = (home, id, cities) => { //if loop loses data!!
  //var a = getRandomNumber(1, 2);
  // var a = 1;
  // if (a === 1) {
    return decorateLowTier(home, id, cities);
  // } else if (a === 2) {
  //   return  decorateMidTier(home, id, cities);
  // } else if (a === 3) {
  //   return  decorateHighTier(home, id, cities);
  // } else {
  //   return  decorateBallerTier(home, id, cities);
  // }
};

var decorateLowTier = (home, id, cities) => {
  home._id = id;
  //home.address = faker.address.streetAddress();
  home.address = 'street #' + getRandomNumber(2,999);
  home.city = cities[getRandomNumber(0, 4)];
  //home.price = getRandomNumber(250000, 500000);
  home.price = getRandomNumber(250000, 9990000);
  home.bedNum =  getRandomNumber(1, 5);
  home.bathNum =  getRandomNumber(1, home.bedNum);
  home.sqFootage = getRandomNumber(350, 1000);
  home.imageUrl = `https://picsum.photos/200/300/?image=${id}`;
  return home;
};
// var decorateMidTier = (home, id, cities) => {
//   home._id = id;
//   // home.address = faker.address.streetAddress();
//   home.address = loremIpsum(3, 'words');
//   home.city =  cities[getRandomNumber(0, 4)];
//   home.price =  getRandomNumber(500001, 1000000);
//   home.bedNum =  getRandomNumber(1, 2);
//   home.bathNum =  getRandomNumber(1, home.bedNum);
//   home.sqFootage =  getRandomNumber(450, 900);
//   home.imageUrl = `https://picsum.photos/200/300/?image=${id}`;
//   return home;
// };
//
// var decorateHighTier =  (home, id, cities) => {
//   home._id = id;
//   //home.address = faker.address.streetAddress();
//   home.address = loremIpsum(3, 'words');
//   home.city = cities[getRandomNumber(0, 4)];
//   home.price = getRandomNumber(1000001, 3000000);
//   home.bedNum = getRandomNumber(2, 4);
//   home.bathNum = getRandomNumber(2, home.bedNum === 2 ? 2 : home.bedNum - 1);
//   home.sqFootage = getRandomNumber(1000, 2500);
//   home.imageUrl = `https://picsum.photos/200/300/?image=${id}`;
//   return home;
// };
//
// var decorateBallerTier = (home, id, cities) => {
//   home._id = id;
//   //home.address = faker.address.streetAddress();
//   home.address = loremIpsum(3, 'words');
//   home.city = cities[getRandomNumber(0, 1)];
//   home.price = getRandomNumber(3000001, 20000000);
//   home.bedNum = getRandomNumber(3, 7);
//   home.bathNum = getRandomNumber(2, home.bedNum < 5 ? 3 : home.bedNum - 2);
//   home.sqFootage = getRandomNumber(2000, 6000);
//   home.imageUrl = `https://picsum.photos/200/300/?image=${id}`;
//   return home;
// };

var getRandomNumber = function(min, max) {
  return Math.floor(Math.random() * (max + 1 - min)) + min;
};

//insertAllHomes();
insertAllHomesPG();
module.exports = insertAllHomes;
