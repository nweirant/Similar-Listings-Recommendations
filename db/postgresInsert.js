
const { Pool, Client } = require('pg')
// pools will use environment variables
// for connection information
var inserts = 0;
const pool = new Pool();

var createTable =`
DROP TABLE IF EXISTS homes;
CREATE TABLE homes (
ID serial,
address VARCHAR(60) NOT NULL,
city VARCHAR(60) NOT NULL,
price INT NOT NULL,
bedNum INT NOT NULL,
bathNum INT NOT NULL,
sqFootage INT NOT NULL,
imageUrl VARCHAR(60) NOT NULL,
PRIMARY KEY (ID)
)`;


// PRIMARY KEY (ID)

  //var q = `
  // select * from testTable;
  // `;
  // pool.query(createTable, (err, res) => {
  //   console.log(err, res)
  //   pool.end()
  // })
var create = () => {
  pool.query(createTable, (err, res) => {
    console.log(err, res)
    pool.end()
  })
}

var iter = 500; //# per batch
var batchSize = 200; //batchs
var item = 0;
var currentBatch = 0;

var insertAllHomesPG = () => {
  var currentItem = item;
  var homes = [];
  var cities = ["Manhattan", "Brooklyn", "Queens", "Bronx", "Staten Island"];
  for (var i = item; i < (iter + currentItem); i++) {
    var home = generateHomeAttributes({}, i, cities);
    homes.push(home);
    item++;
  }
  homes.forEach(h => {
      var q = `INSERT INTO homes(address, city, price, bednum, bathnum, sqFootage, imageURL)
      VALUES('${h.address}', '${h.city}', ${h.price}, ${h.bedNum}, ${h.bathNum}, ${h.sqFootage}, '${h.imageUrl}')`;
      pool.query(q, (err, res) => {

      });
  });

  if (currentBatch <= batchSize) {
    currentBatch++;
    insertAllHomesPG();
  } else {
    console.timeEnd('timer');
  //  pool.end();
  }
 };



var generateAddress = () => {
  return loremIpsum(2, 'words');
}

var generateHomeAttributes = (home, id, cities) => { //if loop loses data!!
    return decorateLowTier(home, id, cities);
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

var getRandomNumber = function(min, max) {
  return Math.floor(Math.random() * (max + 1 - min)) + min;
};

console.time('timer');
//create();
insertAllHomesPG();
//module.exports = test;
