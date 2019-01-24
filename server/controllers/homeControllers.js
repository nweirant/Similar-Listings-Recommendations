const homes = require("../helpers/homes.js");
const redis = require('redis');
const redisPort = process.env.REDIS_PORT || 6379;
const redisHost = process.env.REDIS_HOST || '127.0.0.1';
const client = redis.createClient({
  port: redisPort,
  host: '34.198.87.158'
});

client.on('connect', function() {
    console.log(client);
    console.log('connected');
});

client.on('error', function (err) {
    console.log('Something went wrong ' + err);
});

const routeHandlers = {
  retrieveOne: (req, res) => {
    var id = req.params.id;
    homes.generateHomes(id, (err, results) => {
      if (err) {
        res.sendStatus(500);
      } else {
        client.setex(id, 60, JSON.stringify(results));
        res.send(results);
      }
    });
  },
  alternateRoute: (req, res) => {
    res.sendStatus(404);
  }
};

module.exports = routeHandlers;
