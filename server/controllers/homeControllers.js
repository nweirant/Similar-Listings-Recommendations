const path = require("path");
const homes = require("../helpers/homes.js");

const routeHandlers = {
  retrieveOne: (req, res) => {
    var id = req.params.id;
    homes.generateHomes(id, (err, results) => {
      if (err) {
        res.sendStatus(500);
      } else {
        res.send(results);
      }
    });
  },
  route: (req, res) => {
    res.sendFile(path.join(__dirname, "../../client/dist/index.html"));
  }
};

module.exports = routeHandlers;
