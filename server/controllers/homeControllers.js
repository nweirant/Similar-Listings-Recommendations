var home = require("../helpers/home.js");

const routeHandlers = {
  retrieveOne: (req, res) => {
    var id = req.params.id;
    home.getHome(id, (err, results) => {
      if (err) {
        res.sendStatus(500);
      } else {
        res.send(results);
      }
    });
  }
};

module.exports = routeHandlers;
