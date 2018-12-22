const express = require("express");
const routeHandlers = require("./controllers/homeControllers.js");
const router = express.Router();

router.get("/api/items/:id", routeHandlers.retrieveOne);
// router.get("/*", routeHandlers.route);

module.exports = router;
