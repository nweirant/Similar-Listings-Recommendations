const homes = require("../helpers/homes.js");
const redis = require('redis');
const client = redis.createClient(6379);

const routeHandlers = {
  retrieveOne: (req, res) => {
    var id = req.params.id;
    console.log(id);
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
