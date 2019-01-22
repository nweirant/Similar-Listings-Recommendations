const express = require("express");
const routeHandlers = require("./controllers/homeControllers.js");
const router = express.Router();

const redis = require('redis');
const client = redis.createClient(6379);


//check is data is stored in redis
router.get("/api/similarlistings/:id", cache, routeHandlers.retrieveOne);

function cache(req, res, next) {
    const id = req.params.id;
    client.get(id, function (err, data) {
        if (err) throw err;
        if (data != null) {
          res.send((id, data));
        } else {
          next();
        }
    });
}


router.get("/*", routeHandlers.alternateRoute);

module.exports = router;
module.exports.client = client;
